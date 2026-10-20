import React from "react";
import { processStages } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Check, Clock, ChevronRight } from "lucide-react";

export const ProcessSection: React.FC = () => {
  return (
    <section id="how-we-work" data-nav-section="/about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="HOW WE WORK"
          title="A Disciplined, 4-Stage Evolutionary Lifecycle"
          subtitle="Transparent milestones, continuous validation, and zero surprises. From initial feasibility to zero-downtime production deployment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-7 flex flex-col justify-between hover:border-[#19D879]/40 transition-all duration-300"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-[#19D879]">
                    {stage.step}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--bg-surface-elevated)] text-[11px] font-mono text-[var(--text-muted)]">
                    <Clock className="w-3 h-3 text-[#19D879]" />
                    <span>{stage.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-mono uppercase text-[#19D879] block mb-2 font-semibold">
                  Key Deliverables
                </span>
                <ul className="space-y-1.5">
                  {stage.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#19D879] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
