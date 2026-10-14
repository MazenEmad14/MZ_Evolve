"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Calculator,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Clock,
  ArrowRight,
  MessageSquare,
  Sparkles,
  RotateCcw,
  Sliders,
  DollarSign,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export const ProjectEstimator: React.FC = () => {
  const router = useRouter();

  // State
  const [selectedServiceId, setSelectedServiceId] = useState<string>("ai-solutions-llm-applications");
  const [selectedScale, setSelectedScale] = useState<"mvp" | "standard" | "enterprise">("standard");
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "vector-search",
    "dashboard",
    "api-integration",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<"rapid" | "standard" | "extended">("standard");
  const [selectedSecurity, setSelectedSecurity] = useState<"cloud-isolated" | "zero-trust">("cloud-isolated");

  const services = useMemo(() => servicesData, []);

  const currentService = useMemo(
    () => services.find((s) => s.id === selectedServiceId) || services[0],
    [services, selectedServiceId]
  );

  const availableModules = [
    {
      id: "vector-search",
      label: "Vector Database & Semantic Indexing",
      desc: "Fast cosine similarity retrieval across enterprise documents",
      complexityPoints: 2,
    },
    {
      id: "agent-tools",
      label: "Autonomous Multi-Agent Tool Calling",
      desc: "State machine orchestration and external API execution",
      complexityPoints: 3,
    },
    {
      id: "dashboard",
      label: "Custom Analytics & Operations Dashboard",
      desc: "Interactive metrics, user monitoring, and audit trails",
      complexityPoints: 2,
    },
    {
      id: "auth-rbac",
      label: "Role-Based Access Control & Multi-Tenancy",
      desc: "Isolated organization workspaces with granular permissions",
      complexityPoints: 2,
    },
    {
      id: "api-integration",
      label: "Enterprise CRM / ERP / API Connectors",
      desc: "Bidirectional sync with existing legacy internal databases",
      complexityPoints: 2,
    },
    {
      id: "streaming-ui",
      label: "Real-Time Streaming UI & WebSockets",
      desc: "Low-latency token streaming and live state updates",
      complexityPoints: 1,
    },
    {
      id: "cicd-testing",
      label: "Automated CI/CD & Regression Test Suite",
      desc: "End-to-end integration testing and automated pipeline verification",
      complexityPoints: 2,
    },
  ];

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Calculation engine
  const calculation = useMemo(() => {
    let totalPoints = 0;

    // Service base points
    if (selectedServiceId === "ai-agents-workflow-automation" || selectedServiceId === "data-science-predictive-analytics") {
      totalPoints += 5;
    } else if (selectedServiceId === "rag-knowledge-assistants" || selectedServiceId === "ai-solutions-llm-applications") {
      totalPoints += 4;
    } else {
      totalPoints += 3;
    }

    // Scale multiplier
    if (selectedScale === "mvp") totalPoints += 2;
    if (selectedScale === "standard") totalPoints += 5;
    if (selectedScale === "enterprise") totalPoints += 9;

    // Modules points
    selectedModules.forEach((mId) => {
      const mod = availableModules.find((m) => m.id === mId);
      if (mod) totalPoints += mod.complexityPoints;
    });

    // Security points
    if (selectedSecurity === "zero-trust") totalPoints += 3;

    // Calculate estimated weeks
    let weeksMin = 2;
    let weeksMax = 4;

    if (totalPoints <= 9) {
      weeksMin = 2;
      weeksMax = 4;
    } else if (totalPoints <= 16) {
      weeksMin = 4;
      weeksMax = 8;
    } else if (totalPoints <= 23) {
      weeksMin = 8;
      weeksMax = 14;
    } else {
      weeksMin = 12;
      weeksMax = 20;
    }

    if (selectedTimeline === "rapid") {
      weeksMin = Math.max(2, Math.round(weeksMin * 0.75));
      weeksMax = Math.max(3, Math.round(weeksMax * 0.8));
    }

    // Suggested tier & team
    let tierName = "Proof of Concept / Prototype";
    let budgetBracket = "Flexible Startup / Proof-of-Concept Tier";
    let team = "1 Lead AI / Full-Stack Engineer + 1 Solution Architect";

    if (totalPoints > 20 || selectedScale === "enterprise") {
      tierName = "Enterprise Production Architecture";
      budgetBracket = "Enterprise Custom Deployment Tier";
      team = "Senior Lead Architect + 2 Full-Stack / AI Engineers + QA & Security Reviewer";
    } else if (totalPoints > 11 || selectedScale === "standard") {
      tierName = "Production Business System";
      budgetBracket = "Mid-Market Growth & Scalable Tier";
      team = "Lead Full-Stack Engineer + Senior AI Specialist + UI/UX Designer";
    }

    const scopeSummary = `Service: ${currentService.title} | Scale: ${selectedScale.toUpperCase()} | Modules: ${selectedModules.length} selected | Estimated Duration: ${weeksMin}-${weeksMax} weeks.`;

    return {
      totalPoints,
      estimatedWeeks: `${weeksMin} – ${weeksMax} Weeks`,
      tierName,
      budgetBracket,
      team,
      scopeSummary,
    };
  }, [selectedServiceId, selectedScale, selectedModules, selectedTimeline, selectedSecurity, currentService]);

  const handleTransferToContact = () => {
    const encoded = encodeURIComponent(
      `Project Scope Estimate:\n- Discipline: ${currentService.title}\n- Scale: ${selectedScale}\n- Key Modules: ${selectedModules.join(", ")}\n- Timeline: ${calculation.estimatedWeeks}\n- Architecture Tier: ${calculation.tierName}`
    );
    router.push(`/contact?prefill=${encoded}`);
  };

  const handleWhatsAppScope = () => {
    const text = encodeURIComponent(
      `Hello MZEVOLVE, I configured a project estimate:\n• Service: ${currentService.title}\n• Scale: ${selectedScale.toUpperCase()}\n• Estimated Duration: ${calculation.estimatedWeeks}\n• Tier: ${calculation.tierName}\nI would like to discuss feasibility.`
    );
    window.open(`https://wa.me/201069216994?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#19D879]/10 border border-[#19D879]/20 text-[#19D879] text-xs font-mono mb-4">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Architectural Scoping</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
          Project Scope & Effort Estimator
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Configure your architectural requirements, modules, and target timeline to receive an instant,
          engineering-grounded estimate of delivery milestones and team composition.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Configuration Controls (8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          {/* Step 1: Service Discipline */}
          <div className="p-6 rounded-2xl bg-[#171B1A] border border-[#273430] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#19D879] text-[#111413] text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-base font-semibold text-white">Select Core Discipline</h3>
              </div>
              <span className="text-xs text-[#19D879] font-mono">{currentService.title}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((s) => {
                const isSelected = s.id === selectedServiceId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-3.5 rounded-xl text-start transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#1E2422] border-2 border-[#19D879] text-white shadow-md shadow-[#19D879]/10"
                        : "bg-[#111413] border border-[#273430] text-zinc-300 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold mb-1 text-white flex items-center justify-between">
                      <span>{s.title}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#19D879] shrink-0" />}
                    </div>
                    <span className="text-[11px] text-zinc-400 line-clamp-2">{s.shortDescription}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale & Maturity */}
          <div className="p-6 rounded-2xl bg-[#171B1A] border border-[#273430] space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#19D879] text-[#111413] text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-semibold text-white">Deployment Scale & Maturity</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: "mvp",
                  label: "Prototype / MVP",
                  desc: "Validate core technical assumptions and user flow rapidly.",
                },
                {
                  id: "standard",
                  label: "Business Production",
                  desc: "Resilient, scalable architecture with monitoring and auth.",
                },
                {
                  id: "enterprise",
                  label: "Mission-Critical",
                  desc: "High-throughput clusters, strict zero-trust, and high availability.",
                },
              ].map((scale) => {
                const isSelected = selectedScale === scale.id;
                return (
                  <button
                    key={scale.id}
                    onClick={() => setSelectedScale(scale.id as "mvp" | "standard" | "enterprise")}
                    className={`p-4 rounded-xl text-start transition-all ${
                      isSelected
                        ? "bg-[#1E2422] border-2 border-[#19D879] text-white"
                        : "bg-[#111413] border border-[#273430] text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold text-xs text-white mb-1">{scale.label}</div>
                    <div className="text-[11px] text-zinc-400">{scale.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Key Modules & Capabilities */}
          <div className="p-6 rounded-2xl bg-[#171B1A] border border-[#273430] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#19D879] text-[#111413] text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-base font-semibold text-white">Architectural Modules</h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">
                {selectedModules.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableModules.map((mod) => {
                const isChecked = selectedModules.includes(mod.id);
                return (
                  <button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-3 rounded-xl text-start text-xs flex items-start gap-3 transition-all ${
                      isChecked
                        ? "bg-[#1E2422] border border-[#19D879]/50 text-white"
                        : "bg-[#111413] border border-[#273430] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center border ${
                        isChecked
                          ? "bg-[#19D879] border-[#19D879] text-[#111413]"
                          : "border-zinc-600 bg-transparent"
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{mod.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{mod.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Security & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#171B1A] border border-[#273430] space-y-3">
              <h4 className="text-xs font-semibold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#19D879]" />
                Security & Isolation
              </h4>
              <div className="space-y-2">
                {[
                  { id: "cloud-isolated", label: "Standard Cloud Isolated VPC" },
                  { id: "zero-trust", label: "Zero-Trust & On-Premises Ready" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSecurity(s.id as "cloud-isolated" | "zero-trust")}
                    className={`w-full p-2.5 rounded-lg text-start text-xs font-medium transition-colors ${
                      selectedSecurity === s.id
                        ? "bg-[#19D879]/20 text-[#19D879] border border-[#19D879]/40"
                        : "bg-[#111413] text-zinc-400 border border-[#273430]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#171B1A] border border-[#273430] space-y-3">
              <h4 className="text-xs font-semibold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#19D879]" />
                Delivery Pace
              </h4>
              <div className="space-y-2">
                {[
                  { id: "standard", label: "Standard Milestones (Balanced Pace)" },
                  { id: "rapid", label: "Accelerated Sprint (Dedicated Focus)" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTimeline(t.id as "rapid" | "standard")}
                    className={`w-full p-2.5 rounded-lg text-start text-xs font-medium transition-colors ${
                      selectedTimeline === t.id
                        ? "bg-[#19D879]/20 text-[#19D879] border border-[#19D879]/40"
                        : "bg-[#111413] text-zinc-400 border border-[#273430]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Calculation Preview Card (Sticky, 4-5 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#171B1A] border border-[#19D879]/40 shadow-2xl shadow-[#19D879]/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#273430]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#19D879]" />
                <span className="font-semibold text-white text-sm">Scope Assessment</span>
              </div>
              <button
                onClick={() => {
                  setSelectedScale("standard");
                  setSelectedModules(["vector-search", "dashboard", "api-integration"]);
                  setSelectedTimeline("standard");
                  setSelectedSecurity("cloud-isolated");
                }}
                className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1"
                title="Reset calculation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Estimated Duration */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Estimated Delivery Window
              </span>
              <div className="text-3xl font-extrabold font-heading text-white text-[#19D879] mt-1">
                {calculation.estimatedWeeks}
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Iterative sprint delivery with weekly deployable builds.
              </p>
            </div>

            {/* Architecture Tier */}
            <div className="p-4 rounded-xl bg-[#1E2422] border border-[#273430] space-y-2">
              <div className="text-[11px] font-mono text-[#19D879] uppercase">Architecture Classification</div>
              <div className="text-sm font-bold text-white">{calculation.tierName}</div>
              <div className="text-xs text-zinc-300">
                <strong>Recommended Team:</strong> {calculation.team}
              </div>
            </div>

            {/* Selected Scope Summary */}
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex justify-between py-1 border-b border-[#273430]">
                <span className="text-zinc-400">Discipline</span>
                <span className="font-medium text-white">{currentService.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#273430]">
                <span className="text-zinc-400">Scale</span>
                <span className="font-medium text-white uppercase">{selectedScale}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#273430]">
                <span className="text-zinc-400">Modules</span>
                <span className="font-medium text-white">{selectedModules.length} Active</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Indicative Bracket</span>
                <span className="font-medium text-emerald-400">{calculation.budgetBracket}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleTransferToContact}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#19D879] hover:bg-[#15b867] text-[#111413] text-sm font-bold transition-all shadow-lg shadow-[#19D879]/20 group"
              >
                <span>Transfer Scope to Inquiry Form</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleWhatsAppScope}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1E2422] hover:bg-[#252D2B] border border-[#273430] hover:border-[#19D879]/40 text-xs text-zinc-200 font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#19D879]" />
                <span>Discuss Scope via WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 text-center leading-normal">
              Estimates are directional architectural guides based on sprint velocity. Formal proposals are
              customized during discovery sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
