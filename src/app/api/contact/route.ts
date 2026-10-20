import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const maxDuration = 15;

// In-memory rate limiting map for basic protection against local request flooding
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimitedInMemory(ip: string): boolean {
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

// Distributed Rate Limiting via Upstash Redis REST API (when configured), fallback to in-memory
async function isRateLimited(ip: string): Promise<boolean> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    try {
      const key = `mzevolve_rl_${ip}`;
      const res = await fetch(`${redisUrl}/pipeline`, {
        method: "POST",
        signal: AbortSignal.timeout(3000),
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, 60],
        ]),
      });
      if (res.ok) {
        const data = await res.json();
        const count = data[0]?.result;
        if (typeof count !== "number") {
          throw new Error("Unexpected Upstash rate-limit response.");
        }
        if (count > MAX_REQUESTS_PER_WINDOW) {
          return true;
        }
        return false;
      }
      console.warn(
        `[MZEVOLVE RATE LIMIT] Upstash returned status ${res.status}; using best-effort in-memory fallback.`,
      );
    } catch {
      console.warn(
        "[MZEVOLVE RATE LIMIT] Upstash unavailable; using best-effort in-memory fallback.",
      );
    }
  }

  return isRateLimitedInMemory(ip);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (await isRateLimited(clientIp)) {
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
    const isDevelopmentSimulation =
      process.env.NODE_ENV === "development" &&
      process.env.ALLOW_SIMULATED_SUBMISSIONS === "true";

    // 4. Handle Email Delivery
    if (resendApiKey) {
      const fromEmail = process.env.RESEND_FROM_EMAIL;
      if (!fromEmail) {
        console.error(
          "[MZEVOLVE INQUIRY ERROR] RESEND_FROM_EMAIL is not configured; email not sent.",
        );
        return NextResponse.json(
          {
            success: false,
            deliveryStatus: "sender_unconfigured",
            message:
              "Your message was not sent because the email sender is not configured. Please email " +
              siteConfig.contact.email +
              " directly.",
          },
          { status: 503 },
        );
      }

      try {
        const toEmail = siteConfig.contact.email; // mzevolve2026@gmail.com

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          signal: AbortSignal.timeout(10000),
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
      } catch {
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

    // Simulation must be explicitly enabled and never represents an emailed inquiry.
    if (isDevelopmentSimulation) {
      console.log(`[MZEVOLVE INQUIRY DEV SIMULATION] ID: ${inquiryId} | Service: ${sanitizedInquiry.serviceInterest}`);
      return NextResponse.json({
        success: true,
        inquiryId,
        deliveryStatus: "simulated_dev",
        message:
          "Development simulation only: this inquiry was not emailed. Configure RESEND_API_KEY and a verified RESEND_FROM_EMAIL to send inquiries to " +
          siteConfig.contact.email +
          ".",
      });
    }

    console.warn(
      `[MZEVOLVE INQUIRY UNCONFIGURED] Email not sent because RESEND_API_KEY is not set.`,
    );
    return NextResponse.json(
      {
        success: false,
        deliveryStatus: "unconfigured_in_production",
        message: `Your message was not sent because email delivery is not configured. Please try again later or email ${siteConfig.contact.email} directly.`,
      },
      { status: 503 }
    );
  } catch {
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
