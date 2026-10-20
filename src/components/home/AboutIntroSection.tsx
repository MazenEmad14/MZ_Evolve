import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowUpRight, Layers, Zap, RefreshCw } from "lucide-react";

export const AboutIntroSection: React.FC = () => {
  return (
    <section data-nav-section="/about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#19D879]/10 border border-[#19D879]/20 text-xs font-mono text-[#19D879]">
              <span>COMPANY INTRODUCTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
              Moving beyond basic AI wrappers into practical, dependable software.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              While foundation AI models advance rapidly, many commercial implementations remain fragile prototypes plagued by inconsistent responses and high ongoing maintenance.
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              We approach artificial intelligence and modern web engineering with an evolutionary mindset. We engineer modular code, structured validation, and dependable web applications designed to adapt gracefully as new tools and models emerge.
            </p>

            <div className="pt-2">
              <Button
                href="/about"
                variant="secondary"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Learn More About MZEVOLVE
              </Button>
            </div>
          </div>

          {/* Right Column: Key Pillars Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#19D879]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-sm font-mono uppercase tracking-wider text-[#19D879] font-semibold">
                The MZEVOLVE Standard
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Modular Architecture
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                      Decoupled layers allowing models, databases, and APIs to update cleanly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Structured Validation
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                      Strict schema validation, response quality tests, and verifiable source references.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[var(--bg-surface-elevated)] text-[#19D879] shrink-0">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      Future-Proof Longevity
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                      Built to evolve with new models without demanding full software rewrites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>ETHOS</span>
                <span className="text-[var(--text-secondary)] font-medium">BEYOND ORDINARY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
