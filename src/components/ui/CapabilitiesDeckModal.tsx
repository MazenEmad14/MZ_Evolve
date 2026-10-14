"use client";

import React, { useState, useEffect } from "react";
import { FileText, X, Printer, Shield, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const CapabilitiesDeckModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-deck-modal", handleOpen);
    return () => window.removeEventListener("open-deck-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl my-8 overflow-hidden rounded-2xl bg-[#171B1A] border border-[#273430] shadow-2xl p-6 sm:p-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#273430]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#19D879]/15 text-[#19D879]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#19D879]">
                Enterprise Executive Summary
              </span>
              <h2 className="text-xl font-bold font-heading text-white">MZEVOLVE Capabilities Deck</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E2422] hover:bg-[#252D2B] border border-[#273430] text-xs text-zinc-200 transition-colors"
            >
              <Printer className="w-4 h-4 text-[#19D879]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-[#1E2422] transition-colors"
              aria-label="Close overview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Deck Content */}
        <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
          {/* Mission */}
          <div>
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-[#19D879]" />
              Executive Overview
            </h3>
            <p>
              <strong>MZEVOLVE</strong> is a specialized technology and AI engineering consultancy. We design,
              implement, and deploy high-performance AI systems, knowledge assistants, autonomous workflow agents,
              and resilient modern web architectures engineered to evolve seamlessly as technology advances.
            </p>
          </div>

          {/* 8 Disciplines Matrix */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-[#19D879]" />
              Core Engineering Disciplines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "AI Solutions & LLM Applications", desc: "Production pipelines, structured extraction, custom interfaces." },
                { name: "RAG & Knowledge Assistants", desc: "Grounded semantic retrieval, vector stores, zero-hallucination guardrails." },
                { name: "AI Agents & Workflow Automation", desc: "Multi-agent workflows, autonomous tool execution, deterministic controls." },
                { name: "Websites & Business Applications", desc: "Modern Next.js platforms, distributed architectures, high-conversion UI." },
                { name: "Data Science & Predictive Analytics", desc: "Forecasting models, classification, real-time KPI analytical intelligence." },
                { name: "E-commerce Solutions", desc: "High-throughput catalogs, checkout optimization, intelligent product search." },
                { name: "Real Estate Technology", desc: "Interactive listing platforms, geospatial search, CRM integrations." },
                { name: "Education Technology", desc: "Interactive learning platforms, practice engines, automated student assessments." },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#1E2422]/60 border border-[#273430]">
                  <div className="font-semibold text-white text-xs mb-1 text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#19D879]" />
                    {item.name}
                  </div>
                  <div className="text-[11px] text-zinc-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Principles & Enterprise NDA */}
          <div className="p-4 rounded-xl bg-[#1E2422] border border-[#273430] space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-xs">
              <Shield className="w-4 h-4 text-[#19D879]" />
              <span>Enterprise Governance & Non-Disclosure Commitment</span>
            </div>
            <p className="text-xs text-zinc-400">
              All client engagements are governed by strict mutual non-disclosure agreements (NDAs). Proprietary data,
              internal documents, vector indexes, and specialized models remain exclusively under client ownership
              and are never used for public AI training or unauthorized demonstrations.
            </p>
          </div>

          {/* Contact & Next Steps */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#273430]">
            <div>
              <div className="text-xs font-semibold text-white">Direct Engineering Contact</div>
              <div className="text-[11px] text-zinc-400">
                Email: {siteConfig.contact.email} | Phone: {siteConfig.contact.phone}
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={siteConfig.contact.whatsappPrefilledUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#19D879] hover:bg-[#15b867] text-[#111413] text-xs font-bold transition-colors"
              >
                <span>Connect on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
