import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  Cpu,
  Database,
  Bot,
  Globe,
  TrendingUp,
  ShoppingCart,
  Home,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Layers,
  Sparkles,
  Shield,
  Code2,
} from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceItem;
}

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

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Services</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--text-primary)]">
            MZEVOLVE
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[var(--text-primary)]">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#19D879]">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#19D879]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl space-y-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[#19D879]/30 flex items-center justify-center text-[#19D879]">
              <IconComponent className="w-7 h-7" />
            </div>
            <Badge variant="emerald">ENGINEERING DISCIPLINE</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1]">
            {service.title}
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-[#19D879]">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Consult On This Discipline
            </Button>

            <Button
              href="#capabilities"
              variant="secondary"
              size="lg"
            >
              Explore Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Key Capabilities */}
      <section id="capabilities" className="space-y-10">
        <div className="space-y-3">
          <Badge variant="emerald">CORE COMPETENCIES</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Architectural Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Our approach is built around deep technical rigor, strict schema guarantees, and cost-predictable infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.keyCapabilities.map((cap, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/40 transition-colors space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface-elevated)] flex items-center justify-center text-xs font-mono font-bold text-[#19D879]">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {cap.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Deliverables & Tech Stack Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Deliverables */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#19D879]" />
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Concrete Engineering Deliverables
            </h3>
          </div>

          <ul className="space-y-3">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-surface-elevated)] text-sm text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#19D879] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal For & Technology Stack */}
        <div className="lg:col-span-5 space-y-8">
          {/* Ideal For */}
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Who This Is Engineered For
            </h3>
            <ul className="space-y-2.5">
              {service.idealFor.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs text-[var(--text-secondary)] flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19D879] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#19D879]" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                Preferred Technology Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18221E] to-[#141817] border border-[#19D879]/40 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to implement {service.title}?
        </h3>
        <p className="text-sm sm:text-base text-[#B0C0B9] max-w-xl mx-auto">
          We provide clear feasibility feedback, architectural roadmaps, and fixed-scope delivery milestones.
        </p>
        <Button
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          variant="primary"
          size="lg"
          rightIcon={<ArrowRight className="w-5 h-5" />}
        >
          Discuss Your {service.title} Project
        </Button>
      </section>
    </div>
  );
};
