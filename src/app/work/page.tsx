import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { demonstrationsData } from "@/data/demonstrations";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Demonstrations",
  description:
    "Explore genuine architectural proofs, technology demonstrations, and prototypes engineered by MZEVOLVE. Clearly distinguished from confidential client work.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">PROTOTYPES & PROOFS</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Technology Demonstrations & Prototypes
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          We believe in proving architectural patterns through functional prototypes before proposing them for production. Below are verified internal demonstrations built by MZEVOLVE.
        </p>
      </div>

      {/* Transparency & Confidentiality Policy Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/30 space-y-4">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#19D879] font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>Client Confidentiality Policy</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--text-secondary)]">
          <div className="space-y-2">
            <h4 className="font-bold text-[var(--text-primary)]">
              Client Engagements
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              We maintain strict confidentiality regarding all client projects, business logic, and private repositories. We do not publish fictional case studies or unverified client testimonials.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-[var(--text-primary)]">
              Demonstration Systems
            </h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              The projects featured below are internal prototypes and technical demonstrations built by MZEVOLVE to test and illustrate software capabilities under controlled scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* Demonstrations List */}
      <div className="space-y-10">
        {demonstrationsData.map((demo, idx) => (
          <div
            key={demo.id}
            className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/40 transition-all duration-300 space-y-8"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <Badge variant="emerald">{demo.status}</Badge>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {demo.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] pt-2">
                  {demo.title}
                </h2>
              </div>
              <span className="text-2xl font-mono font-extrabold text-[var(--text-muted)]">
                0{idx + 1}
              </span>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  System Overview
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {demo.summary}
                </p>

                <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold pt-2">
                  Architecture & Specifications
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {demo.architectureDetails}
                </p>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-surface-elevated)] space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#19D879] block font-semibold">
                  Demonstrated Capabilities
                </span>
                <ul className="space-y-2.5">
                  {demo.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#19D879] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                  <span className="text-xs font-mono uppercase text-[var(--text-muted)] block">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {demo.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="p-4 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3 text-xs text-[var(--text-muted)] font-mono">
              <Lock className="w-4 h-4 text-[#19D879] shrink-0 mt-0.5" />
              <span>{demo.disclaimer}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Consultation CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/40 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          Have an upcoming technical project?
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          We treat project discussions with confidentiality and provide straightforward technical assessments of what is achievable.
        </p>
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Discuss Your Project
        </Button>
      </div>
    </div>
  );
}
