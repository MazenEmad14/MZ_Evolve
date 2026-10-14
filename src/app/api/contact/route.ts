import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// Simple in-memory rate limiting map for basic spam protection
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

    const body = await req.json();
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
    if (honeypot && honeypot.trim() !== "") {
      // Silently accept to fool the bot without doing processing
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
        inquiryId: `INQ-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      });
    }

    // 2. Submission speed check (bots submit instantaneously)
    if (timestamp && Date.now() - Number(timestamp) < 800) {
      return NextResponse.json(
        {
          success: false,
          message: "Submission was too fast. Please verify you are human.",
        },
        { status: 400 }
      );
    }

    // 3. Server-side Field Validations
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please provide a valid business email address.";
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
        "Please provide a brief project description (at least 20 characters).";
    }

    if (!privacyConsent) {
      errors.privacyConsent = "You must agree to the privacy consent to submit an inquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted errors.",
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

    // Sanitized record for delivery
    const sanitizedInquiry = {
      inquiryId,
      submittedAt: new Date().toISOString(),
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      company: company ? String(company).trim().slice(0, 100) : "Not Specified",
      serviceInterest: String(serviceInterest).trim().slice(0, 100),
      timeline: timeline ? String(timeline).trim().slice(0, 50) : "Not Specified",
      budgetRange: budgetRange ? String(budgetRange).trim().slice(0, 50) : "Not Specified",
      projectDescription: projectDescription.trim().slice(0, 3000),
      ipHash: clientIp ? `mask-${clientIp.substring(0, 4)}...` : "unknown",
      destinationEmail: siteConfig.contact.officialEmail,
    };

    // Log the validated inquiry for enterprise audit
    console.log(
      `[MZEVOLVE INQUIRY RECEIVED] [${inquiryId}] From: ${sanitizedInquiry.email} | Service: ${sanitizedInquiry.serviceInterest}`
    );

    // Optional integration: If RESEND_API_KEY is configured in production, dispatch email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "MZEVOLVE Inquiries <noreply@mzevolve.com>",
            to: [siteConfig.contact.officialEmail],
            subject: `[New Inquiry ${inquiryId}] ${sanitizedInquiry.serviceInterest} from ${sanitizedInquiry.name}`,
            text: `New Inquiry Reference: ${inquiryId}
Name: ${sanitizedInquiry.name}
Email: ${sanitizedInquiry.email}
Company: ${sanitizedInquiry.company}
Service: ${sanitizedInquiry.serviceInterest}
Timeline: ${sanitizedInquiry.timeline}
Budget: ${sanitizedInquiry.budgetRange}

Description:
${sanitizedInquiry.projectDescription}
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Optional email dispatch notice:", emailErr);
        // Do not fail user request if external mail provider is offline
      }
    }

    return NextResponse.json({
      success: true,
      inquiryId,
      message:
        "Thank you. Your inquiry has been validated and recorded. An MZEVOLVE engineer will review your brief within 1–2 business days.",
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred. Please contact us directly at " + siteConfig.contact.officialEmail,
      },
      { status: 500 }
    );
  }
}
