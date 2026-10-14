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
  CheckCircle,
  Building2,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MZEVOLVE: our engineering philosophy, commitment to deterministic AI systems, and mission to build software that is built to evolve.",
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
          MZEVOLVE is an advanced technology engineering group focused on bridging the divide between experimental generative AI models and mission-critical production software.
        </p>
      </div>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Badge variant="charcoal">THE PHILOSOPHY</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Why We Specialize in Evolutionary Software
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            The software industry is undergoing an unprecedented architectural shift. Traditional static software engineering is colliding with probabilistic neural models. When teams attempt to combine these paradigms using superficial wrapper scripts, systems fail in production due to context rot, high token latency, and hallucinations.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            At MZEVOLVE, we approach engineering with a disciplined dual focus: rigorous deterministic software engineering principles combined with modern cognitive architectures. We design decoupled layers where inference models can be hot-swapped or fine-tuned without requiring complete application rewrites.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Our commitment is simple: no fabricated metrics, no speculative hype, and absolute transparency in every technical recommendation we deliver.
          </p>
        </div>

        <div className="lg:col-span-5 p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#19D879]">
            <Terminal className="w-4 h-4" />
            <span>Core Tenets</span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                01. Beyond Ordinary
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Zero Boilerplate Wrappers
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Every system is purpose-built to address domain-specific constraints, cost profiles, and edge-cases.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                02. Built to Evolve
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Modular Decoupled Abstractions
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Inference models, vector indices, and tool runtimes are treated as modular components, not monolithic dependencies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] space-y-1">
              <span className="text-xs font-mono text-[#19D879] uppercase block font-semibold">
                03. Data Sovereignty
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Zero Leakage & Private Endpoints
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Customer data and proprietary IP remain strictly within isolated client VPCs and zero-retention API boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="space-y-12">
        <SectionHeading
          badgeText="HOW WE THINK"
          title="Our Non-Negotiable Engineering Standards"
          subtitle="We hold ourselves to transparent, auditable software standards that prioritize your company's long-term autonomy."
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

      {/* Corporate Information & Governance Notice */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#19D879] uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>Corporate Governance & Transparency</span>
        </div>

        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
          Company Status & Verified Points of Contact
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Legal Registration
            </span>
            <p className="font-semibold text-[var(--text-primary)]">
              {siteConfig.legalName}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Formal corporate disclosures and tax jurisdiction information are provided alongside contractual proposals.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Official Email
            </span>
            <p className="font-semibold text-[#19D879] font-mono">
              <a href={`mailto:${siteConfig.contact.officialEmail}`} className="hover:underline">
                {siteConfig.contact.officialEmail}
              </a>
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Primary verified channel for all executive and engineering communications.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
              Global Operations
            </span>
            <p className="font-semibold text-[var(--text-primary)]">
              Remote-First Engineering Squads
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Regional technical meetings and on-site architecture workshops arranged upon project qualification.
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
          Schedule an Architecture Consultation
        </Button>
      </div>
    </div>
  );
}
