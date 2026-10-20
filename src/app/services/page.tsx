import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
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
  Sparkles,
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
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Badge variant="emerald">CURRENT DISCIPLINES</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Engineering for real-world challenges
        </h1>
        <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
          Explore the problems we solve, then open a service to see its architecture, capabilities, and deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Sparkles;

          return (
            <article
              key={service.id}
              className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-7 transition-colors hover:border-[var(--border-highlight)]"
            >
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--brand-emerald)]">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="pt-1 text-xs font-mono text-[var(--text-muted)]">
                    0{index + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="mt-auto border-t border-[var(--border-subtle)] pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-emerald)] hover:underline"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="ml-5 inline-flex items-center text-sm text-[var(--text-secondary)] underline-offset-4 hover:text-[var(--text-primary)] hover:underline"
                  >
                    Discuss
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="rounded-3xl border border-[var(--border-highlight)] bg-[var(--bg-surface)] p-8 text-center space-y-5 sm:p-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
          Need an integrated solution across multiple disciplines?
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
          Tell us about your goals and constraints. We can help identify a practical combination of services and a sensible first step.
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
