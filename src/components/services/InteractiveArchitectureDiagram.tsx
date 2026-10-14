"use client";

import React, { useState } from "react";
import {
  Layers,
  Shield,
  Zap,
  Server,
  Database,
  Cpu,
  Lock,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

interface LayerData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  protocols: string[];
  latencyTarget: string;
  securityControls: string;
  techStack: string[];
  description: string;
}

export const InteractiveArchitectureDiagram: React.FC<{ serviceTitle?: string }> = ({
  serviceTitle = "Enterprise AI Architecture",
}) => {
  const layers: LayerData[] = [
    {
      id: "layer-1",
      number: "01",
      title: "Edge & Client Ingestion Layer",
      subtitle: "Streaming UI & Responsive Clients",
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      protocols: ["HTTP/2", "WebSockets", "Server-Sent Events (SSE)"],
      latencyTarget: "< 35ms Time-to-First-Byte",
      securityControls: "Strict CSP, CORS Isolation, Client-side Payload Sanitization",
      techStack: ["Next.js 16", "React 19", "Tailwind CSS v4", "Cloudflare Edge"],
      description:
        "Handles user interactions, streaming token renderers, real-time feedback loops, and device-responsive presentation across desktop and mobile browsers.",
    },
    {
      id: "layer-2",
      number: "02",
      title: "API Gateway & Security Firewall",
      subtitle: "Rate Limiting & Authentication Enforcement",
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      protocols: ["RESTful JSON", "gRPC", "OAuth 2.0 / OIDC"],
      latencyTarget: "< 15ms Gateway Overhead",
      securityControls: "Honeypot Traps, Token Budgeting, In-Memory / Distributed Rate Limiting",
      techStack: ["Node.js Edge / App Router", "Upstash Redis", "Zod Validation", "JWT Guardrails"],
      description:
        "Intercepts all inbound requests, verifies organization tokens, enforces request schema integrity, detects malicious automated bots, and controls per-user compute quotas.",
    },
    {
      id: "layer-3",
      number: "03",
      title: "AI Orchestration & Agent State Machine",
      subtitle: "Dynamic Tool Execution & Prompt Engineering",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      protocols: ["Structured JSON Outputs", "Function Tool Calling", "Sandboxed Sub-Process"],
      latencyTarget: "< 250ms Initial Reasoning Step",
      securityControls: "Ephemeral Execution Sandboxes, Hallucination Guardrails, Human-in-the-Loop Thresholds",
      techStack: ["Python / TypeScript Runtimes", "LangGraph State Machine", "Pydantic", "Semantic Router"],
      description:
        "Directs the reasoning loop, coordinates multi-agent delegation, evaluates prompt templates, validates evidence from retrieved context, and decides whether to invoke tools or finalize answers.",
    },
    {
      id: "layer-4",
      number: "04",
      title: "Hybrid Knowledge & Semantic Retrieval",
      subtitle: "Dense Vector Search & BM25 Keyword Matching",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      protocols: ["Cosine Similarity", "Dense HNSW Index", "Reciprocal Rank Fusion"],
      latencyTarget: "< 45ms Top-K Chunk Vector Scan",
      securityControls: "Tenant-Isolated Namespaces, Document-Level Permission Masking",
      techStack: ["Pinecone / Qdrant / Chroma", "pgvector", "Cohere / Cross-Encoder Rerankers"],
      description:
        "Transforms unstructured documents into multi-dimensional embeddings, scans knowledge vectors with sub-second accuracy, and fuses sparse keyword scoring to provide grounded, citation-backed context.",
    },
    {
      id: "layer-5",
      number: "05",
      title: "Enterprise Persistence & Foundation Endpoints",
      subtitle: "Dedicated VPC Compute & Immutable Audit Logging",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      protocols: ["Encrypted TLS 1.3", "VPC Peering", "PostgreSQL Wire Protocol"],
      latencyTarget: "High-Throughput Concurrent Execution",
      securityControls: "AES-256 Encryption at Rest, Zero Public Data Training, Complete Audit Trail",
      techStack: ["PostgreSQL / Supabase", "AWS Bedrock / Azure OpenAI VPC", "Private Cloud Cluster"],
      description:
        "Secure transactional databases, read-replicas, and isolated LLM inference providers configured so no organizational intellectual property ever leaves your compliant security boundary.",
    },
  ];

  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-3");
  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || layers[2];

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#171B1A] border border-[#273430] shadow-2xl space-y-8 my-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#273430] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#19D879] mb-1">
            <Layers className="w-4 h-4" />
            <span>Interactive System Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            End-to-End Enterprise Stack Blueprint
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Click on any architectural layer below to inspect data flows, latency targets, and enterprise security controls.
          </p>
        </div>
        <div className="shrink-0 px-3 py-1.5 rounded-lg bg-[#111413] border border-[#273430] text-xs font-mono text-zinc-400">
          Status: <span className="text-[#19D879] font-bold">Standard Reference Architecture</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 5 Interactive Layers Stack (7 cols) */}
        <div className="lg:col-span-7 space-y-2.5">
          {layers.map((layer, index) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <React.Fragment key={layer.id}>
                <button
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full p-4 rounded-2xl text-start transition-all duration-200 border flex items-center justify-between ${
                    isSelected
                      ? "bg-[#1E2422] border-[#19D879] shadow-lg shadow-[#19D879]/10"
                      : "bg-[#111413] border-[#273430] hover:border-zinc-700 text-zinc-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        isSelected ? "bg-[#19D879]/20 text-[#19D879]" : "bg-[#171B1A] text-zinc-500"
                      }`}
                    >
                      {layer.icon}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#19D879] font-bold">
                          {layer.number}
                        </span>
                        <h4 className="text-sm font-bold text-white truncate">{layer.title}</h4>
                      </div>
                      <p className="text-xs text-zinc-400 truncate mt-0.5">{layer.subtitle}</p>
                    </div>
                  </div>
                  <div className="shrink-0 ms-3">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#19D879] text-[#111413] font-bold"
                          : "bg-[#1E2422] text-zinc-400 border border-[#273430]"
                      }`}
                    >
                      {isSelected ? "INSPECTING" : "CLICK TO VIEW"}
                    </span>
                  </div>
                </button>

                {index < layers.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Layer Deep Dive Inspector (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#111413] border border-[#19D879]/30 space-y-5 sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-[#273430]">
            <span className="text-[11px] font-mono uppercase text-[#19D879]">
              Layer {selectedLayer.number} Specifications
            </span>
            <span className="text-xs font-bold font-mono text-white">
              {selectedLayer.latencyTarget}
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-1">{selectedLayer.title}</h4>
            <p className="text-xs text-zinc-300 leading-relaxed">{selectedLayer.description}</p>
          </div>

          {/* Protocols */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-zinc-400 block">
              Supported Protocols & Transports:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedLayer.protocols.map((p, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E2422] text-emerald-300 border border-[#273430]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Security Controls */}
          <div className="p-3.5 rounded-xl bg-[#1E2422] border border-[#273430] space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Lock className="w-3.5 h-3.5 text-[#19D879]" />
              <span>Security & Governance Controls</span>
            </div>
            <p className="text-xs text-zinc-400 leading-normal">{selectedLayer.securityControls}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-zinc-400 block">
              Enterprise Technology Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedLayer.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#171B1A] text-zinc-200 border border-[#273430]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
