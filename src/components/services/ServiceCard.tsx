import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
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

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
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

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="group relative rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/50 transition-all duration-300 p-7 flex flex-col justify-between shadow-sm hover:shadow-[0_0_30px_-5px_rgba(25,216,121,0.18)]">
      {/* Top Accent Pill */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] group-hover:border-[#19D879]/40 flex items-center justify-center text-[#19D879] transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[#19D879] transition-colors">
          0{index + 1}
        </span>
      </div>

      {/* Title & Description */}
      <div className="space-y-3 flex-1">
        <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#19D879] transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Deliverable Highlights */}
        <div className="pt-3 border-t border-[var(--border-subtle)]/70 space-y-1.5">
          <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] block tracking-wider">
            Key Focus
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.deliverables.slice(0, 2).map((del, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] line-clamp-1"
              >
                {del}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="pt-6 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[#19D879] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>View Service Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#19D879]" />
        </Link>

        <span className="text-[10px] font-mono text-[var(--text-muted)]">
          MZEVOLVE
        </span>
      </div>
    </div>
  );
};
