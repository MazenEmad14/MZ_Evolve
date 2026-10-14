import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Cpu,
  Database,
  Bot,
  Globe,
  TrendingUp,
  ShoppingCart,
  Home,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Explore MZEVOLVE's eight current engineering disciplines: AI solutions, RAG knowledge assistants, autonomous agents, modern web applications, and predictive analytics.",
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Cpu,
  Database,
  Bot,
  Globe,
  TrendingUp,
  ShoppingCart,
  Home,
  GraduationCap,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">CURRENT DISCIPLINES</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Specialized Engineering Services
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          Eight distinct areas of technical specialization, designed to solve complex operational challenges with deterministic stability and zero vendor lock-in.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="space-y-8">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Sparkles;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center text-[#19D879]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[var(--text-muted)] uppercase block">
                        Discipline 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-[#19D879]">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Full Architecture & Deliverables
                    </Button>
                  </div>
                </div>

                {/* Right Column: Deliverables Preview */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    <Layers className="w-4 h-4 text-[#19D879]" />
                    <span>Included Deliverables</span>
                  </div>

                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 4).map((deliv, i) => (
                      <li
                        key={i}
                        className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#19D879] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-right">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-semibold text-[#19D879] hover:underline"
                    >
                      Request Scoping for this Service &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/30 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          Need an integrated solution across multiple disciplines?
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          Most modern enterprise implementations combine RAG retrieval, agentic workflows, and a customized Next.js web application. We assemble cross-discipline engineering squads for your exact needs.
        </p>
        <Button
          href="/contact"
          variant="primary"
          size="lg"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Discuss Your Technical Requirements
        </Button>
      </div>
    </div>
  );
}
