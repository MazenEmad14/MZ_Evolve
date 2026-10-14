import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, ArrowLeft, Mail, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MZEVOLVE's Privacy Policy outlining how personal data from project inquiries is collected, protected, and retained. We never sell data or use client data for AI model training.",
};

export default function PrivacyPage() {
  const lastUpdated = "October 15, 2026";

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
        <Badge variant="emerald">LEGAL & DATA GOVERNANCE</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Privacy Policy & Data Protection
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
          <span>Effective Date: {lastUpdated}</span>
          <span>&bull;</span>
          <span>Entity: {siteConfig.legalName}</span>
        </div>
      </div>

      {/* Commitment Card */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[#19D879]/30 flex items-start gap-3.5 text-sm text-[var(--text-secondary)]">
        <ShieldCheck className="w-5 h-5 text-[#19D879] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[var(--text-primary)] block mb-1">
            Core Data Privacy Guarantee
          </strong>
          MZEVOLVE does not sell personal information, monetize client data, or feed proprietary project submissions into public foundation model training sets. Information submitted through this website is used solely to respond to project inquiries and evaluate technical engagements.
        </div>
      </div>

      {/* Policy Sections */}
      <div className="space-y-10 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            1. Scope and Controller Information
          </h2>
          <p>
            This Privacy Policy governs the processing of personal data collected through the official website of MZEVOLVE (
            <span className="text-[var(--text-primary)] font-mono">{siteConfig.url}</span>
            ). The data controller responsible for the processing of your personal information is:
          </p>
          <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-xs space-y-1 text-[var(--text-primary)]">
            <p><strong>Entity:</strong> {siteConfig.legalName}</p>
            <p><strong>Official Contact:</strong> {siteConfig.contact.officialEmail}</p>
            <p><strong>Registered Address:</strong> {siteConfig.contact.locationPlaceholder}</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            2. Information We Collect
          </h2>
          <p>
            We collect personal and technical information when you voluntarily submit a project inquiry or communicate with our engineering group:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Direct Contact Details:</strong> Full name, professional email address, company or organizational affiliation, and phone number (if optionally supplied).
            </li>
            <li>
              <strong>Project Specifications:</strong> Selected engineering discipline, estimated budget parameters, project timelines, and text descriptions of your technical goals or business challenges.
            </li>
            <li>
              <strong>Technical Telemetry:</strong> Anonymized server logs, masked IP addresses, browser agent metadata, and submission timestamps used exclusively for cybersecurity monitoring, rate-limiting, and spam prevention.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            3. Purpose and Legal Basis for Processing
          </h2>
          <p>
            We process your information under the following lawful bases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Contractual Preparation & Feasibility:</strong> To evaluate inbound project requirements, perform preliminary architectural assessments, and draft project proposals upon request.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> To protect our digital infrastructure from malicious bots, brute-force attacks, and distributed spam submissions.
            </li>
            <li>
              <strong>Explicit Consent:</strong> Where you provide consent via our inquiry checkbox prior to submitting project details.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            4. Artificial Intelligence & Data Sovereignty
          </h2>
          <p>
            Given our specialization in artificial intelligence and machine learning engineering, we adhere to strict data sovereignty boundaries:
          </p>
          <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 text-sm">
            <p className="font-semibold text-[var(--text-primary)]">
              Zero Public Model Training
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Your inquiry text, proprietary system descriptions, and enterprise context are never transmitted to public AI training datasets or used to train third-party foundation models.
            </p>
            <p className="font-semibold text-[var(--text-primary)] pt-2">
              Isolated Client Environments
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              When client engagements begin, work is conducted strictly inside client-owned Virtual Private Clouds (VPCs) or containerized architectures with zero-retention enterprise API keys.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            5. Data Retention & Security
          </h2>
          <p>
            We retain inquiry information only for as long as necessary to address your project request and maintain appropriate corporate records. Inactive inquiries are purged or permanently anonymized after 12 months.
          </p>
          <p>
            All data in transit is encrypted using Transport Layer Security (TLS 1.3). Access to our inquiry database is restricted to authorized MZEVOLVE technical architects using multi-factor authentication.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            6. Your Privacy Rights
          </h2>
          <p>
            Depending on your jurisdiction (including GDPR in the EU/UK and CCPA in California), you possess the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm">
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request rectification of inaccurate or outdated information.</li>
            <li>Request the permanent deletion of your inquiry data (&quot;Right to be Forgotten&quot;).</li>
            <li>Withdraw previously granted consent at any time.</li>
          </ul>
          <p className="pt-2 text-sm">
            To exercise any of these rights, email us at{" "}
            <a
              href={`mailto:${siteConfig.contact.officialEmail}?subject=Privacy%20Rights%20Request`}
              className="text-[#19D879] underline font-mono"
            >
              {siteConfig.contact.officialEmail}
            </a>
            . We process all verified requests within 30 days without charge.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">
            7. Updates to This Policy
          </h2>
          <p className="text-sm">
            We review and update this Privacy Policy periodically to reflect corporate evolutions or regulatory changes. The date of the most recent revision will always be displayed at the top of this document.
          </p>
        </section>
      </div>

      {/* Footer link back */}
      <div className="pt-8 border-t border-[var(--border-subtle)] text-center">
        <Link
          href="/contact"
          className="text-sm font-semibold text-[#19D879] hover:underline"
        >
          Have questions regarding privacy or confidentiality? Contact our engineering team &rarr;
        </Link>
      </div>
    </div>
  );
}
