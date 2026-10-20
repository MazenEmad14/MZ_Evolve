"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Database,
  Cpu,
  Bot,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
  DollarSign,
  CheckCircle2,
} from "lucide-react";

export const InteractiveDemonstrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"rag" | "agent" | "tokens">("rag");

  // RAG Simulator State
  const sampleQueries = [
    "How does MZEVOLVE guarantee client data privacy in AI workflows?",
    "What is the difference between autonomous agents and deterministic pipelines?",
    "Can RAG pipelines be deployed inside our private cloud VPC?",
  ];
  const [ragQuery, setRagQuery] = useState(sampleQueries[0]);
  const [isSearching, setIsSearching] = useState(false);

  const knowledgeChunks = [
    {
      id: "chunk-101",
      source: "MZEVOLVE Enterprise Security Policy — Section 4.2",
      text: "All client proprietary data, vector indices, and document embeddings remain strictly isolated within dedicated client VPCs. Zero client data is transmitted to public training pools or third-party foundational model continuous training.",
      vectorScore: 0.962,
      bm25Score: 0.891,
      hybridScore: 0.941,
    },
    {
      id: "chunk-102",
      source: "Architectural Standards — RAG Retrieval Protocols",
      text: "Production retrieval pipelines utilize two-stage reranking: primary dense vector cosine similarity against Pinecone/Qdrant/Chroma, followed by reciprocal rank fusion (RRF) to eliminate out-of-domain context.",
      vectorScore: 0.884,
      bm25Score: 0.720,
      hybridScore: 0.835,
    },
    {
      id: "chunk-103",
      source: "Agent Governance — Tool Sandboxing & Human Approval",
      text: "Autonomous workflow agents execute actions within sandboxed ephemeral containers. High-impact operations (financial transactions, external database mutations) require human-in-the-loop cryptographic sign-off.",
      vectorScore: 0.541,
      bm25Score: 0.410,
      hybridScore: 0.502,
    },
  ];

  // Agent State Machine Simulator State
  const [agentStep, setAgentStep] = useState<number>(0);
  const [isAgentRunning, setIsAgentRunning] = useState<boolean>(false);

  const agentSteps = [
    {
      step: 1,
      title: "Receive Goal",
      detail: "User request received: 'Audit last quarter supply chain discrepancies.'",
      node: "input",
    },
    {
      step: 2,
      title: "Plan Deconstruction",
      detail: "Decomposing task into sub-goals: 1. Query ERP database 2. Cross-reference PO receipts 3. Flag anomalies.",
      node: "planner",
    },
    {
      step: 3,
      title: "Tool Execution (Database Query)",
      detail: "Executing read-only SQL tool against replica database. Retrieved 1,420 transaction records.",
      node: "tool",
    },
    {
      step: 4,
      title: "Reasoning & Verification",
      detail: "Identified 3 unmatched invoices totaling $42,800. Cross-checked with vendor ledger.",
      node: "reasoning",
    },
    {
      step: 5,
      title: "Synthesize Final Report",
      detail: "Generated audit report with verified transaction IDs and recommended mitigation steps.",
      node: "output",
    },
  ];

  const runAgentSimulation = () => {
    setIsAgentRunning(true);
    setAgentStep(1);

    const interval = setInterval(() => {
      setAgentStep((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          setIsAgentRunning(false);
          return 5;
        }
        return prev + 1;
      });
    }, 1200);
  };

  // Token Economics State
  const [dailyUsers, setDailyUsers] = useState<number>(2500);
  const [queriesPerUser, setQueriesPerUser] = useState<number>(6);
  const [promptTokens, setPromptTokens] = useState<number>(850);
  const [completionTokens, setCompletionTokens] = useState<number>(280);

  const tokenCalculations = useMemo(() => {
    const monthlyRequests = dailyUsers * queriesPerUser * 30;
    const monthlyPromptTokens = monthlyRequests * promptTokens;
    const monthlyCompletionTokens = monthlyRequests * completionTokens;

    // Fast Small Model (e.g. Claude 3.5 Haiku / GPT-4o-mini tier: ~$0.25/1M in, $1.25/1M out)
    const fastCost =
      (monthlyPromptTokens / 1_000_000) * 0.25 + (monthlyCompletionTokens / 1_000_000) * 1.25;

    // Frontier Reasoning Tier (e.g. Claude 3.5 Sonnet / GPT-4o: ~$3.00/1M in, $15.00/1M out)
    const frontierCost =
      (monthlyPromptTokens / 1_000_000) * 3.0 + (monthlyCompletionTokens / 1_000_000) * 15.0;

    // MZEVOLVE Intelligent Hybrid Routing (85% fast + 15% frontier escalations)
    const hybridCost = fastCost * 0.85 + frontierCost * 0.15;
    const monthlySavings = Math.max(0, frontierCost - hybridCost);
    const savingsPercentage = Math.round((monthlySavings / frontierCost) * 100);

    return {
      monthlyRequests: monthlyRequests.toLocaleString(),
      fastCost: Math.round(fastCost).toLocaleString(),
      frontierCost: Math.round(frontierCost).toLocaleString(),
      hybridCost: Math.round(hybridCost).toLocaleString(),
      monthlySavings: Math.round(monthlySavings).toLocaleString(),
      savingsPercentage,
    };
  }, [dailyUsers, queriesPerUser, promptTokens, completionTokens]);

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-4 sm:p-10 rounded-3xl bg-[#171B1A] border border-[#273430] shadow-2xl">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#19D879]/10 border border-[#19D879]/20 text-[#19D879] text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hands-On Engineering Simulators</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Interactive Architecture Demonstrations
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Experience client-side interactive simulations of the core algorithmic techniques MZEVOLVE uses
          in enterprise production.
        </p>
      </div>

      {/* Tabs */}
      <div
        role="group"
        aria-label="Choose an engineering simulator"
        className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-2 p-1.5 mb-8 rounded-2xl bg-[#111413] border border-[#273430] max-w-3xl mx-auto"
      >
        <button
          type="button"
          aria-pressed={activeTab === "rag"}
          onClick={() => setActiveTab("rag")}
          className={`min-h-11 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "rag"
              ? "bg-[#1E2422] text-[#19D879] border border-[#19D879]/40 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          <span>RAG Vector Search</span>
        </button>
        <button
          type="button"
          aria-pressed={activeTab === "agent"}
          onClick={() => setActiveTab("agent")}
          className={`min-h-11 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "agent"
              ? "bg-[#1E2422] text-[#19D879] border border-[#19D879]/40 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Agent State Machine</span>
        </button>
        <button
          type="button"
          aria-pressed={activeTab === "tokens"}
          onClick={() => setActiveTab("tokens")}
          className={`min-h-11 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "tokens"
              ? "bg-[#1E2422] text-[#19D879] border border-[#19D879]/40 shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Token Economics & Routing</span>
        </button>
      </div>

      {/* TAB 1: RAG Vector Simulator */}
      {activeTab === "rag" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#111413] border border-[#273430] space-y-4">
            <label htmlFor="rag-query" className="block text-xs font-mono uppercase text-zinc-400">
              Simulate Query to Vector Store
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#19D879] absolute left-3.5 top-3.5" />
                <input
                  id="rag-query"
                  type="text"
                  value={ragQuery}
                  onChange={(e) => setRagQuery(e.target.value)}
                  placeholder="Type an enterprise query..."
                  className="w-full bg-[#171B1A] border border-[#273430] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#19D879]"
                />
              </div>
              <button
                onClick={() => {
                  setIsSearching(true);
                  setTimeout(() => setIsSearching(false), 300);
                }}
                disabled={isSearching}
                aria-busy={isSearching}
                className="min-h-11 px-5 py-2.5 bg-[#19D879] hover:bg-[#15b867] text-[#111413] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                type="button"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>{isSearching ? "Ranking..." : "Calculate Cosine Ranking"}</span>
              </button>
            </div>

            {/* Quick sample chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] text-zinc-500 font-mono">Presets:</span>
              {sampleQueries.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setRagQuery(q)}
                  className="min-h-11 w-full sm:w-auto text-left text-[11px] text-zinc-400 hover:text-[#19D879] bg-[#1E2422] px-3 py-2 rounded-lg border border-[#273430] transition-colors sm:max-w-xs"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Retrieved Knowledge Chunks with Cosine Ranking */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Retrieved Document Chunks (Reranked via Reciprocal Rank Fusion)</span>
              <span className="text-[#19D879]">Top 3 Matches</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {knowledgeChunks.map((chunk, i) => (
                <div
                  key={chunk.id}
                  className={`p-4 rounded-xl border transition-all ${
                    i === 0
                      ? "bg-[#1E2422] border-[#19D879]/50 shadow-md shadow-[#19D879]/5"
                      : "bg-[#111413] border-[#273430]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#19D879] px-2 py-0.5 rounded bg-[#19D879]/10 border border-[#19D879]/20">
                      Rank #{i + 1}
                    </span>
                    <span className="text-xs font-bold font-mono text-white">
                      {(chunk.hybridScore * 100).toFixed(1)}% Match
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-300 mb-1.5 truncate">
                    {chunk.source}
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-4">
                    {chunk.text}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#273430] flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>Dense Vector: {chunk.vectorScore}</span>
                    <span>BM25: {chunk.bm25Score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Agent State Machine Simulator */}
      {activeTab === "agent" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#111413] border border-[#273430]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#19D879]/15 text-[#19D879]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Autonomous Multi-Step Execution Loop
                </h4>
                <p className="text-xs text-zinc-400">
                  Simulate an agent dynamically planning, invoking database tools, and validating results.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={runAgentSimulation}
                disabled={isAgentRunning}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#19D879] hover:bg-[#15b867] disabled:opacity-50 text-[#111413] text-xs font-bold transition-all shadow-md shadow-[#19D879]/20"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isAgentRunning ? "Running Steps..." : "Run Autonomous Loop"}</span>
              </button>
              <button
                type="button"
                onClick={() => setAgentStep(0)}
                disabled={isAgentRunning}
                className="p-2.5 text-zinc-400 hover:text-white rounded-xl bg-[#1E2422] border border-[#273430]"
                aria-label="Reset agent simulation"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p role="status" aria-live="polite" className="sr-only">
            {isAgentRunning
              ? `Step ${agentStep} of ${agentSteps.length}: ${agentSteps[agentStep - 1]?.title}`
              : agentStep === agentSteps.length
                ? "Agent simulation complete."
                : "Agent simulation ready."}
          </p>

          {/* Stepper Node Visualizer */}
          <div className="space-y-2">
            {agentSteps.map((s) => {
              const isActive = agentStep === s.step;
              const isPast = agentStep > s.step;
              return (
                <div
                  key={s.step}
                  aria-current={isActive ? "step" : undefined}
                  className={`p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? "bg-[#1E2422] border-[#19D879] shadow-lg shadow-[#19D879]/10"
                      : isPast
                      ? "bg-[#111413] border-[#273430] opacity-80"
                      : "bg-[#111413]/50 border-zinc-800 opacity-40"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#19D879] text-[#111413] animate-pulse"
                        : isPast
                        ? "bg-[#19D879]/20 text-[#19D879]"
                        : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{s.title}</span>
                      {isActive && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#19D879]/20 text-[#19D879] border border-[#19D879]/40">
                          Active Execution Node
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{s.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: Token Economics & Routing */}
      {activeTab === "tokens" && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sliders Box */}
            <div className="p-6 rounded-2xl bg-[#111413] border border-[#273430] space-y-5">
              <h4 className="text-xs font-mono uppercase text-[#19D879] flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                Workload Parameters
              </h4>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="daily-users" className="text-zinc-300">Daily Active Users:</label>
                    <output htmlFor="daily-users" className="font-mono text-[#19D879]">{dailyUsers.toLocaleString()}</output>
                  </div>
                  <input
                    id="daily-users"
                    type="range"
                    min="100"
                    max="20000"
                    step="100"
                    value={dailyUsers}
                    onChange={(e) => setDailyUsers(Number(e.target.value))}
                    className="min-h-11 w-full accent-[#19D879]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="queries-per-user" className="text-zinc-300">Queries / User / Day:</label>
                    <output htmlFor="queries-per-user" className="font-mono text-[#19D879]">{queriesPerUser}</output>
                  </div>
                  <input
                    id="queries-per-user"
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={queriesPerUser}
                    onChange={(e) => setQueriesPerUser(Number(e.target.value))}
                    className="min-h-11 w-full accent-[#19D879]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="prompt-tokens" className="text-zinc-300">Avg Prompt Tokens / Query:</label>
                    <output htmlFor="prompt-tokens" className="font-mono text-[#19D879]">{promptTokens}</output>
                  </div>
                  <input
                    id="prompt-tokens"
                    type="range"
                    min="200"
                    max="3000"
                    step="50"
                    value={promptTokens}
                    onChange={(e) => setPromptTokens(Number(e.target.value))}
                    className="min-h-11 w-full accent-[#19D879]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="completion-tokens" className="text-zinc-300">Avg Output Tokens / Query:</label>
                    <output htmlFor="completion-tokens" className="font-mono text-[#19D879]">{completionTokens}</output>
                  </div>
                  <input
                    id="completion-tokens"
                    type="range"
                    min="50"
                    max="1500"
                    step="25"
                    value={completionTokens}
                    onChange={(e) => setCompletionTokens(Number(e.target.value))}
                    className="min-h-11 w-full accent-[#19D879]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[#273430] flex justify-between text-xs text-zinc-400">
                <span>Monthly Traffic:</span>
                <span className="font-mono text-white">{tokenCalculations.monthlyRequests} requests</span>
              </div>
            </div>

            {/* Architecture Cost Comparison */}
            <div className="p-6 rounded-2xl bg-[#1E2422] border border-[#273430] flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#19D879] flex items-center gap-2 mb-3">
                  <DollarSign className="w-3.5 h-3.5" />
                  Monthly Inference Cost Comparison
                </h4>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#111413] border border-[#273430] flex justify-between items-center">
                    <div>
                      <div className="text-xs font-semibold text-zinc-300">All-Frontier Architecture</div>
                      <div className="text-[10px] text-zinc-500">100% Claude 3.5 Sonnet / GPT-4o</div>
                    </div>
                    <div className="text-sm font-mono font-bold text-rose-400">
                      ${tokenCalculations.frontierCost} / mo
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#111413] border border-[#19D879]/50 flex justify-between items-center shadow-md shadow-[#19D879]/10">
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <span>MZEVOLVE Hybrid Router</span>
                        <span className="text-[9px] bg-[#19D879] text-[#111413] font-bold px-1.5 rounded">
                          OPTIMIZED
                        </span>
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        85% Fast Edge Tier + 15% Deep Reasoning Escalation
                      </div>
                    </div>
                    <div className="text-base font-mono font-bold text-[#19D879]">
                      ${tokenCalculations.hybridCost} / mo
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="p-4 rounded-xl bg-[#19D879]/10 border border-[#19D879]/30 text-center space-y-1">
                <div className="text-[11px] font-mono uppercase text-[#19D879]">
                  Estimated Cloud Architecture Savings
                </div>
                <div className="text-2xl font-bold font-heading text-white">
                  ${tokenCalculations.monthlySavings}{" "}
                  <span className="text-sm font-normal text-zinc-400">/ month saved</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Reduces inference expenditures by ~{tokenCalculations.savingsPercentage}% while maintaining
                  enterprise-grade reasoning accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
