import React from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { siteConfig } from "@/config/site";
import { Mail, Shield, ArrowUpRight, Cpu, MapPin, Phone } from "lucide-react";

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

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
                <Mail className="w-4 h-4 text-[#19D879] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="hover:text-[#19D879] transition-colors font-mono"
                >
                  {siteConfig.contact.officialEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.locationPlaceholder}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                <Phone className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phonePlaceholder}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
              <Shield className="w-3.5 h-3.5 text-[#19D879]" />
              <span>Enterprise Grade Privacy & Source Ownership</span>
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
              Legal & Security
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

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-[11px] font-mono text-[var(--text-muted)] block leading-normal">
                Corporate Entity:
              </span>
              <span className="text-xs text-[var(--text-secondary)] font-medium block mt-0.5">
                {siteConfig.legalName}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. {siteConfig.tagline}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
              Submit Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
