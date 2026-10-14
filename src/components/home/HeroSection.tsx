import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, Terminal, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 subtle-grid overflow-hidden">
      {/* Radial Emerald Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(25, 216, 121, 0.22) 0%, rgba(25, 216, 121, 0.05) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#19D879] animate-pulse" />
          <span>Accepting Select Enterprise & Startup Engineering Engagements</span>
        </div>

        {/* Primary Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
            Beyond Ordinary.
            <br />
            <span
              className="inline-block bg-gradient-to-r from-[#19D879] via-[#2dfa95] to-[#15b867] bg-clip-text text-transparent"
            >
              Built to Evolve.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
            We engineer production-grade AI solutions, enterprise RAG pipelines, autonomous agent workflows, and scalable web architectures built to adapt and perform.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Discuss Your Project
          </Button>

          <Button
            href="/services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Services
          </Button>
        </div>

        {/* Technical Value Indicators */}
        <div className="pt-10 border-t border-[var(--border-subtle)]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-left">
            <Cpu className="w-5 h-5 text-[#19D879] shrink-0" />
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Architecture</div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">Deterministic AI Systems</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <ShieldCheck className="w-5 h-5 text-[#19D879] shrink-0" />
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Security</div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">Private VPC & Zero Leakage</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-left">
            <Terminal className="w-5 h-5 text-[#19D879] shrink-0" />
            <div>
              <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Transparency</div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">Full Codebase Ownership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
