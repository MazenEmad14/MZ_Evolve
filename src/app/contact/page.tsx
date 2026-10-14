import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import {
  Mail,
  ShieldCheck,
  Clock,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Get in touch with MZEVOLVE. Reach us via email at mzevolve2026@gmail.com, phone at 01069216994, WhatsApp, or through our project inquiry form.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">GET IN TOUCH</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Contact MZEVOLVE
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          Have an upcoming project, technical inquiry, or operational challenge? Connect with us directly through email, phone, WhatsApp, or the brief form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Security Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Channels Card */}
          <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Direct Contact Channels
            </h2>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Official Email
                  </span>
                  <a
                    href={siteConfig.contact.emailLink}
                    className="font-semibold text-[var(--text-primary)] hover:text-[#19D879] transition-colors font-mono"
                    title="Send email to MZEVOLVE"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Phone Direct
                  </span>
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="font-semibold text-[var(--text-primary)] hover:text-[#19D879] transition-colors font-mono block"
                    title="Call MZEVOLVE"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    International: {siteConfig.contact.phoneDisplayFormatted}
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    WhatsApp Chat
                  </span>
                  <a
                    href={siteConfig.contact.whatsappPrefilledUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#19D879] hover:underline transition-colors font-mono inline-flex items-center gap-1.5"
                    title="Start WhatsApp chat with MZEVOLVE"
                  >
                    <span>{siteConfig.contact.whatsappNumber}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Click to start a direct WhatsApp conversation.
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Expected Response
                  </span>
                  <span className="text-[var(--text-secondary)] text-xs">
                    {siteConfig.contact.responseTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Confidentiality Notice */}
          <div className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#19D879] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Project Confidentiality</span>
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Professional Discretion
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We treat all project briefs and discussions with strict professional confidence. Your information is used solely to evaluate your requirements and communicate directly with you.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
              <Lock className="w-3.5 h-3.5 text-[#19D879]" />
              <span>Direct communication with MZEVOLVE team</span>
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
