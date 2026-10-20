import React from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "../services/ServiceCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const ServicesGridSection: React.FC = () => {
  return (
    <section id="services" data-nav-section="/services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="CORE CAPABILITIES"
          title="Eight Specialized Engineering Disciplines"
          subtitle="From bespoke LLM pipelines and autonomous agents to scalable web applications and predictive data science—tailored for enterprise reliability."
          align="center"
        />

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Need a custom multi-disciplinary architecture?
            </h4>
            <p className="text-sm text-[var(--text-secondary)]">
              We frequently cross-link RAG retrieval, agentic task loops, and full-stack web interfaces.
            </p>
          </div>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Consult on Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};
