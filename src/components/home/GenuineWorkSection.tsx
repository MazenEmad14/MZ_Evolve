import React from "react";
import Link from "next/link";
import { demonstrationsData } from "@/data/demonstrations";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

export const GenuineWorkSection: React.FC = () => {
  return (
    <section id="proofs" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--bg-base)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="TECHNOLOGY DEMONSTRATIONS"
          title="Verified Prototypes & Blueprints"
          subtitle="We test and validate software patterns through working internal prototypes. Below are technical demonstrations engineered by MZEVOLVE."
          align="center"
        />

        {/* Client Discretion Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-3 text-xs text-[var(--text-secondary)]">
          <ShieldCheck className="w-4 h-4 text-[#19D879] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[var(--text-primary)]">
              Client Confidentiality Policy:
            </span>{" "}
            We treat client projects with strict professional discretion and do not publish private client codebases or unverified case studies. The systems below represent verified internal demonstrations and technical proofs.
          </div>
        </div>

        {/* Demonstrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demonstrationsData.map((demo) => (
            <div
              key={demo.id}
              className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#19D879]/40 transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="emerald" size="sm">
                    {demo.status}
                  </Badge>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {demo.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {demo.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {demo.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] block tracking-wider">
                    Demonstrated Capabilities
                  </span>
                  <ul className="space-y-1.5">
                    {demo.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#19D879] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--border-subtle)] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {demo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    MZEVOLVE DEMONSTRATION
                  </span>
                  <Link
                    href="/work"
                    className="text-xs font-semibold text-[#19D879] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="/work"
            variant="secondary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All Demonstrations
          </Button>
        </div>
      </div>
    </section>
  );
};
