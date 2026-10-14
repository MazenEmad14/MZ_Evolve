import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import {
  Mail,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  FileCheck,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Submit your technical project requirements to MZEVOLVE. Receive an objective architectural feasibility assessment within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">TECHNICAL CONSULTATION</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Initiate an Engineering Inquiry
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          Tell us about your operational challenges, data infrastructure, or desired AI capabilities. We provide realistic feasibility evaluations and transparent architectural proposals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Security Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Engineering & Project Inquiries
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.officialEmail}`}
                    className="font-semibold text-[var(--text-primary)] hover:text-[#19D879] transition-colors font-mono"
                  >
                    {siteConfig.contact.officialEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Response SLA
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {siteConfig.contact.responseTime}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Operational Headquarters
                  </span>
                  <span className="text-[var(--text-secondary)] text-xs">
                    {siteConfig.contact.locationPlaceholder}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Telephone Consultations
                  </span>
                  <span className="text-[var(--text-secondary)] text-xs">
                    {siteConfig.contact.phonePlaceholder}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Confidentiality Commitment */}
          <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#19D879] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Confidentiality Assured</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Mutual NDA & Institutional Discretion
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We execute mutual non-disclosure agreements prior to reviewing proprietary system architectures or private enterprise data. Your specifications are never shared or ingested into third-party AI training sets.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
              <Lock className="w-3.5 h-3.5 text-[#19D879]" />
              <span>TLS 1.3 In-Flight Encryption</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
