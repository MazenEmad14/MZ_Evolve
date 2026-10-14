import React from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-[var(--bg-base)] border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="md" />
            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
              {siteConfig.shortDescription}
            </p>

            {/* Direct Official Contact Channels */}
            <div className="space-y-3 pt-2">
              {/* Clickable Email */}
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <Mail className="w-4 h-4 text-[#19D879] shrink-0" />
                <a
                  href={siteConfig.contact.emailLink}
                  className="hover:text-[#19D879] transition-colors font-mono"
                  title="Send email to MZEVOLVE"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Clickable Phone */}
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <Phone className="w-4 h-4 text-[#19D879] shrink-0" />
                <a
                  href={siteConfig.contact.phoneLink}
                  className="hover:text-[#19D879] transition-colors font-mono"
                  title="Call MZEVOLVE"
                >
                  <span>{siteConfig.contact.phone}</span>
                  <span className="text-[var(--text-muted)] ml-1.5 font-normal">
                    ({siteConfig.contact.phoneDisplayFormatted})
                  </span>
                </a>
              </div>

              {/* Clickable WhatsApp */}
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <MessageSquare className="w-4 h-4 text-[#19D879] shrink-0" />
                <a
                  href={siteConfig.contact.whatsappPrefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19D879] transition-colors font-mono"
                  title="Chat with MZEVOLVE on WhatsApp"
                >
                  WhatsApp: {siteConfig.contact.whatsappNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Current Services Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Engineering Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Methodology Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-bold">
              Legal & Direct
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-1">
              <span className="text-[11px] font-mono text-[var(--text-muted)] block leading-normal">
                Company:
              </span>
              <span className="text-xs text-[var(--text-primary)] font-semibold block">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-[var(--text-muted)] block">
                {siteConfig.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
