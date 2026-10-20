import React from "react";
import { companyPrinciples } from "@/data/principles";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, GitBranch, Lock, FileCode, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  GitBranch,
  Lock,
  FileCode,
};

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" data-nav-section="/about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="ENGINEERING VALUES"
          title="Principles That Guide Every Project"
          subtitle="Core standards that guide our technical recommendations, client communications, and codebase architecture."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyPrinciples.map((principle) => {
            const IconComponent = iconMap[principle.iconName] || ShieldCheck;

            return (
              <div
                key={principle.id}
                className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/40 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[#19D879] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#19D879] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-medium text-[#19D879]">
                    {principle.summary}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#19D879]" />
                  <span>Guiding Principle</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
