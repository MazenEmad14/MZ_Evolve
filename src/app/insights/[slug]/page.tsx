import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  Share2,
  MessageSquare,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface InsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | ${siteConfig.name} Insights`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const shareText = encodeURIComponent(
    `Read "${article.title}" by ${siteConfig.name}: ${siteConfig.url}/insights/${article.slug}`
  );
  const whatsappShareUrl = `https://wa.me/?text=${shareText}`;

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-6 border-b border-[var(--border-subtle)] pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="emerald">{article.category}</Badge>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
          <span className="text-[var(--text-muted)]">•</span>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishedDate}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight font-heading">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author pill */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#19D879]/20 border border-[#19D879]/40 flex items-center justify-center text-[#19D879] font-bold text-xs font-mono">
              MZ
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                {article.author.name}
              </div>
              <div className="text-xs text-[var(--text-muted)] font-mono">
                {article.author.role}
              </div>
            </div>
          </div>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[#19D879] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </a>
        </div>
      </header>

      {/* Key Takeaways Callout Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/40 space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-wider text-[#19D879] font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Executive Key Takeaways</span>
        </h3>
        <ul className="space-y-2.5">
          {article.keyTakeaways.map((item, idx) => (
            <li
              key={idx}
              className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#19D879] shrink-0 mt-2" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
        {article.content.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading pt-2">
              {sec.sectionTitle}
            </h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {sec.codeBlock && (
              <div className="rounded-2xl overflow-hidden bg-[#111413] border border-[#273430] my-4 shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-[#171B1A] border-b border-[#273430] text-xs font-mono text-zinc-400">
                  <span>{sec.codeBlock.language.toUpperCase()}</span>
                  <span className="text-[#19D879]">MZEVOLVE Reference Architecture</span>
                </div>
                <pre className="p-4 sm:p-6 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed">
                  <code>{sec.codeBlock.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Consultation Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[#19D879]/40 space-y-6 text-center">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] font-heading">
          Discuss Implementing This Architecture
        </h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          Have questions regarding how these concepts apply to your specific technology stack, database
          architecture, or internal enterprise data?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Consult Engineering Team
          </Button>
          <a
            href={siteConfig.contact.whatsappPrefilledUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[#1E2422] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#19D879]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
