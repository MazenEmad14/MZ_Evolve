import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// In-memory rate limiting map for basic protection against local request flooding
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - entry.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait one minute before trying again.",
        },
        { status: 429 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request payload. Please submit a valid JSON request.",
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      serviceInterest,
      timeline,
      budgetRange,
      projectDescription,
      privacyConsent,
      honeypot,
      timestamp,
    } = body;

    // 1. Honeypot check - automated bots fill hidden fields
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      // Silently accept to fool automated bots without processing
      return NextResponse.json({
        success: true,
        deliveryStatus: "bot_deflected",
        message: "Your inquiry has been received.",
        inquiryId: `MZ-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      });
    }

    // 2. Submission speed check (bots submit instantaneously)
    if (timestamp && typeof timestamp === "number" && Date.now() - timestamp < 800) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission was unusually fast. Please verify your inputs and try again.",
        },
        { status: 400 }
      );
    }

    // 3. Field Validations
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your full name (at least 2 characters).";
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (
      !serviceInterest ||
      typeof serviceInterest !== "string" ||
      serviceInterest.trim().length === 0
    ) {
      errors.serviceInterest = "Please select a service or area of interest.";
    }

    if (
      !projectDescription ||
      typeof projectDescription !== "string" ||
      projectDescription.trim().length < 20
    ) {
      errors.projectDescription =
        "Please provide a project description (at least 20 characters).";
    }

    if (!privacyConsent) {
      errors.privacyConsent = "Please acknowledge the privacy consent to proceed.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    // Generate unique inquiry ID
    const inquiryId = `MZ-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // Sanitized record
    const sanitizedInquiry = {
      inquiryId,
      submittedAt: new Date().toISOString(),
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().toLowerCase().slice(0, 150),
      company: company ? String(company).trim().slice(0, 100) : "Not Specified",
      serviceInterest: String(serviceInterest).trim().slice(0, 100),
      timeline: timeline ? String(timeline).trim().slice(0, 50) : "Not Specified",
      budgetRange: budgetRange ? String(budgetRange).trim().slice(0, 50) : "Not Specified",
      projectDescription: String(projectDescription).trim().slice(0, 3000),
    };

    // Check email delivery configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const isDevelopment =
      process.env.NODE_ENV === "development" ||
      process.env.ALLOW_SIMULATED_SUBMISSIONS === "true";

    // 4. Handle Email Delivery
    if (resendApiKey) {
      try {
        const fromEmail =
          process.env.RESEND_FROM_EMAIL || "MZEVOLVE Inquiries <onboarding@resend.dev>";
        const toEmail = siteConfig.contact.email; // mzevolve2026@gmail.com

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: sanitizedInquiry.email,
            subject: `[New Inquiry ${inquiryId}] ${sanitizedInquiry.serviceInterest} from ${sanitizedInquiry.name}`,
            text: `MZEVOLVE Inbound Project Inquiry
Reference ID: ${inquiryId}
Submitted: ${sanitizedInquiry.submittedAt}

Contact Details:
- Name: ${sanitizedInquiry.name}
- Email: ${sanitizedInquiry.email}
- Company: ${sanitizedInquiry.company}

Project Scope:
- Primary Service: ${sanitizedInquiry.serviceInterest}
- Estimated Timeline: ${sanitizedInquiry.timeline}
- Estimated Budget: ${sanitizedInquiry.budgetRange}

Project Description:
${sanitizedInquiry.projectDescription}
`,
          }),
        });

        if (!emailResponse.ok) {
          const errDetail = await emailResponse.text();
          console.error(`[MZEVOLVE INQUIRY ERROR] Resend dispatch failed (status ${emailResponse.status})`);
          return NextResponse.json(
            {
              success: false,
              deliveryStatus: "provider_error",
              message: `Automated email forwarding encountered a temporary issue. Please reach out to us directly at ${siteConfig.contact.email} or WhatsApp at ${siteConfig.contact.whatsappNumber}.`,
            },
            { status: 502 }
          );
        }

        // Successfully delivered via Resend
        console.log(`[MZEVOLVE INQUIRY DELIVERED] ID: ${inquiryId} | Service: ${sanitizedInquiry.serviceInterest}`);
        return NextResponse.json({
          success: true,
          inquiryId,
          deliveryStatus: "delivered",
          message:
            "Thank you. Your inquiry has been confirmed and delivered to our team. We will review your brief and reply via email within 1 to 2 business days.",
        });
      } catch (networkErr) {
        console.error("[MZEVOLVE INQUIRY ERROR] Network error connecting to mail provider");
        return NextResponse.json(
          {
            success: false,
            deliveryStatus: "network_error",
            message: `Could not reach the email delivery provider. Please reach out to us directly at ${siteConfig.contact.email} or WhatsApp at ${siteConfig.contact.whatsappNumber}.`,
          },
          { status: 502 }
        );
      }
    }

    // If Resend is NOT configured:
    // In local development or simulation mode:
    if (isDevelopment) {
      console.log(`[MZEVOLVE INQUIRY DEV SIMULATION] ID: ${inquiryId} | Service: ${sanitizedInquiry.serviceInterest}`);
      return NextResponse.json({
        success: true,
        inquiryId,
        deliveryStatus: "simulated_dev",
        message:
          "Your inquiry was successfully validated in development mode. In production, set RESEND_API_KEY in your environment to enable automated email forwarding to " +
          siteConfig.contact.email +
          ".",
      });
    }

    // In production without an active email provider:
    // Do not falsely report delivery. Show an honest, user-friendly message directing to direct channels.
    console.warn(`[MZEVOLVE INQUIRY UNCONFIGURED] Submission received but RESEND_API_KEY is not set.`);
    return NextResponse.json(
      {
        success: false,
        deliveryStatus: "unconfigured_in_production",
        message: `Automated online form dispatch is currently awaiting configuration. Please send your project details directly to ${siteConfig.contact.email} or contact us via WhatsApp at ${siteConfig.contact.whatsappNumber}.`,
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("[MZEVOLVE INQUIRY ERROR] Unexpected server error occurred");
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please contact us directly at " +
          siteConfig.contact.email +
          " or WhatsApp at " +
          siteConfig.contact.whatsappNumber +
          ".",
      },
      { status: 500 }
    );
  }
}
