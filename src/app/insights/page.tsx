import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Insights & Whitepapers",
  description:
    "Technical architectural blueprints, RAG optimization guides, agent workflow strategies, and security frameworks authored by MZEVOLVE engineers.",
};

export default function InsightsPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">TECHNICAL PERSPECTIVES</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Engineering Insights & Blueprints
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          Rigorous technical analyses on enterprise AI adoption, low-latency RAG architectures, deterministic agent loops, and zero-trust security in production.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insightsData.map((article) => (
          <article
            key={article.slug}
            className="flex flex-col justify-between p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#19D879]/5 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#19D879] uppercase tracking-wider font-semibold">
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <Link href={`/insights/${article.slug}`}>
                <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#19D879] transition-colors leading-snug">
                  {article.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                {article.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div className="text-[11px] text-[var(--text-muted)] font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.publishedDate}</span>
              </div>
              <Link
                href={`/insights/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#19D879] hover:underline"
              >
                <span>Read Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Engineering Consultation Callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/40 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#19D879]/10 border border-[#19D879]/20 text-[#19D879] text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Collaborative Problem Solving</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          Need an architectural review of your AI strategy?
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          We work alongside enterprise technical leadership to evaluate feasibility, benchmark infrastructure costs, and design custom implementations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Technical Consultation
          </Button>
          <Button href="/estimator" variant="secondary" size="lg">
            Estimate Project Scope
          </Button>
        </div>
      </div>
    </div>
  );
}
