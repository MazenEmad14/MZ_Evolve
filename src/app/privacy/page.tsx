import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for MZEVOLVE explaining how information submitted through our website and contact channels is handled.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <Badge variant="emerald">INFORMATION PRACTICES</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
          <span>Last Updated: {lastUpdated}</span>
          <span>&bull;</span>
          <span>Company: {siteConfig.name}</span>
        </div>
      </div>

      {/* Commitment Card */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[#19D879]/30 flex items-start gap-3.5 text-sm text-[var(--text-secondary)]">
        <ShieldCheck className="w-5 h-5 text-[#19D879] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[var(--text-primary)] block mb-1">
            Our Approach to Your Information
          </strong>
          MZEVOLVE collects information through this website solely to respond to project inquiries, evaluate technical requirements, and communicate directly with prospective clients. We do not sell or rent personal information to third parties.
        </div>
      </div>

      {/* Policy Content */}
      <div className="space-y-10 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            1. Information We Collect
          </h2>
          <p>
            When you interact with our website or contact us, we may collect the following information that you voluntarily provide:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Contact Details:</strong> Your full name, email address, optional company or organization name, and phone number (if you choose to contact us by phone or WhatsApp).
            </li>
            <li>
              <strong>Project Specifications:</strong> Selected area of interest, estimated budget range, target timeline, and descriptions of your project goals or operational challenges.
            </li>
            <li>
              <strong>Technical Communication Logs:</strong> Standard web server request data (such as IP address, browser type, and submission timestamps) used to protect against automated spam and ensure website stability.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            2. How We Use Submitted Information
          </h2>
          <p>
            The information you submit is used exclusively for legitimate business communication purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm">
            <li>To review your project brief and assess technical feasibility.</li>
            <li>To respond to your inquiries via email, phone, or WhatsApp.</li>
            <li>To prepare tailored proposals, scopes of work, and project estimates upon request.</li>
            <li>To maintain records of past business inquiries for follow-up communications.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            3. Data Handling & Third-Party Services
          </h2>
          <p>
            When you submit an inquiry through our contact form:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm">
            <li>
              <strong>Email Delivery:</strong> Form submissions are formatted and forwarded to our official inbox (
              <a href={siteConfig.contact.emailLink} className="text-[#19D879] underline font-mono">
                {siteConfig.contact.email}
              </a>
              ) using a configured transactional email provider (such as Resend) or directly via email.
            </li>
            <li>
              <strong>No Third-Party Advertising:</strong> We do not share your contact details with external advertising networks, data brokers, or marketing lists.
            </li>
            <li>
              <strong>Confidentiality:</strong> Project briefs, technical architectures, and proprietary business context discussed during consultations are treated with strict professional discretion.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            4. Cookies & Browser Storage
          </h2>
          <p>
            This website uses your browser&apos;s local storage (<code>localStorage</code>) solely to remember your preferred visual theme (Light or Dark mode). This setting is stored locally on your device and is not used to identify or track you across the internet.
          </p>
          <p className="text-sm">
            We do not currently install third-party advertising cookies or cross-site behavioral tracking scripts on this website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            5. Data Retention & Your Rights
          </h2>
          <p>
            We retain project inquiries and communications for as long as necessary to conduct ongoing business discussions or as required for standard commercial recordkeeping.
          </p>
          <p>
            If you have submitted information through our website and wish to review, update, or request the deletion of your inquiry details, please contact us directly:
          </p>
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#19D879]" />
              <span>Email: </span>
              <a href={siteConfig.contact.emailLink} className="text-[#19D879] underline">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#19D879]" />
              <span>Phone: </span>
              <a href={siteConfig.contact.phoneLink} className="text-[#19D879] underline">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#19D879]" />
              <span>WhatsApp: </span>
              <a
                href={siteConfig.contact.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19D879] underline"
              >
                {siteConfig.contact.whatsappNumber}
              </a>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] pt-1">
            We review and process verified inquiries promptly without charge.
          </p>
        </section>

        {/* Section 6: Legal & Owner Review Notice */}
        <section className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
            Notice Regarding Legal Review & Future Commercial Terms
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            This policy outlines our current technical and data-handling practices. Formal contractual engagements, non-disclosure agreements (NDAs), master service agreements, and jurisdiction-specific legal schedules are provided in writing for client projects and remain subject to official company and legal review.
          </p>
        </section>
      </div>

      {/* Footer link back */}
      <div className="pt-8 border-t border-[var(--border-subtle)] text-center">
        <Link
          href="/contact"
          className="text-sm font-semibold text-[#19D879] hover:underline"
        >
          Have questions regarding our data practices? Contact our team &rarr;
        </Link>
      </div>
    </div>
  );
}
