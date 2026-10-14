import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyPrinciples } from "@/data/principles";
import {
  ShieldCheck,
  GitBranch,
  Lock,
  FileCode,
  ArrowRight,
  Terminal,
  Cpu,
  Mail,
  Phone,
  MessageSquare,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MZEVOLVE: our engineering philosophy, practical approach to software and AI integration, and commitment to clear client communication.",
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  GitBranch,
  Lock,
  FileCode,
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20 lg:space-y-28">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="emerald">ABOUT MZEVOLVE</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
          Beyond Ordinary.
          <br />
          <span className="text-[#19D879]">Built to Evolve.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          MZEVOLVE is a modern technology and software engineering consultancy focused on building practical, dependable AI integrations and web applications.
        </p>
      </div>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="charcoal">OUR APPROACH</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Practical Engineering for Real Business Challenges
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            As artificial intelligence technologies evolve, many organizations find it challenging to separate marketing buzz from practical tools that genuinely improve business operations.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            At MZEVOLVE, we focus on pragmatic engineering. We design clean software architectures where language models, automation workflows, and web interfaces work harmoniously within clearly defined business boundaries.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Our commitment is grounded in clear communication, transparent deliverables, and software built to adapt as technology advances.
          </p>
        </div>

        <div className="lg:col-span-5 p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#19D879]">
            <Terminal className="w-4 h-4" />
            <span>Guiding Tenets</span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                01. Purposeful Solutions
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Problem-First Focus
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                We select technologies that directly address your business needs, avoiding unnecessary complexity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                02. Built to Evolve
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Adaptable Architecture
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Applications are structured modularly so individual components can be updated without rebuilding the entire system.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                03. Client Codebase Ownership
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Full Transparency
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Clients receive full access to their source code, build scripts, and documentation upon project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="space-y-12">
        <SectionHeading
          badgeText="HOW WE WORK"
          title="Engineering Standards We Uphold"
          subtitle="Clear boundaries, verifiable milestones, and honest technical guidance on every project."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyPrinciples.map((principle) => {
            const Icon = iconMap[principle.iconName] || ShieldCheck;
            return (
              <div
                key={principle.id}
                className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[#19D879] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {principle.title}
                </h3>
                <p className="text-sm font-medium text-[#19D879]">
                  {principle.summary}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verified Corporate Contact Points */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#19D879] uppercase tracking-wider">
          <Building className="w-4 h-4" />
          <span>Official Company Contacts</span>
        </div>

        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
          Direct Channels of Communication
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Company Name */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Company
            </span>
            <p className="font-semibold text-[var(--text-primary)] text-lg">
              {siteConfig.name}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Email */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Official Email
            </span>
            <p className="font-semibold text-[#19D879] font-mono">
              <a href={siteConfig.contact.emailLink} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Direct inbox for technical inquiries and project briefs.
            </p>
          </div>

          {/* Phone & WhatsApp */}
          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Phone & WhatsApp
            </span>
            <p className="font-semibold text-[var(--text-primary)] font-mono">
              <a href={siteConfig.contact.phoneLink} className="hover:text-[#19D879]">
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="text-xs text-[#19D879]">
              <a
                href={siteConfig.contact.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1 font-mono"
              >
                <span>WhatsApp: {siteConfig.contact.whatsappNumber}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Discuss Your Project With Us
        </Button>
      </div>
    </div>
  );
}
