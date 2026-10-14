import { ProcessStage } from "@/types";

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Discovery & Technical Feasibility",
    duration: "Week 1",
    description:
      "We unpack your business objectives, inspect data availability, evaluate latency and cost boundaries, and stress-test core assumptions before writing production code.",
    deliverables: [
      "Technical Feasibility & Model Viability Report",
      "Data Readiness & Schema Assessment",
      "Cost-per-Query / Token Budget Projections",
      "Initial Architectural Blueprint",
    ],
  },
  {
    step: "02",
    title: "System Architecture & Rapid Prototype",
    duration: "Weeks 2 – 3",
    description:
      "We build a functional working prototype or benchmark environment to validate prompt chains, retrieval precision, or core application workflows with your team.",
    deliverables: [
      "Interactive Working Prototype / Proof of Concept",
      "Automated Evaluation Dataset & Accuracy Baseline",
      "Security & Data Flow Diagram",
      "Sprint Milestones & Production Specification",
    ],
  },
  {
    step: "03",
    title: "Production Engineering & Hardening",
    duration: "Weeks 4 – 8+",
    description:
      "We build the complete software application or AI pipeline with full unit and integration test coverage, strict guardrails, and secure API contracts.",
    deliverables: [
      "Modular, Production-Grade TypeScript / Python Codebase",
      "CI/CD Pipelines & Containerized Environments (Docker)",
      "Automated Guardrails & Schema Validation Layers",
      "API Documentation & Integration Specs",
    ],
  },
  {
    step: "04",
    title: "Deployment, Telemetry & Evolution",
    duration: "Continuous",
    description:
      "We deploy to your designated cloud environment, configure end-to-end observability (tracing, token usage, latency), and establish iteration playbooks.",
    deliverables: [
      "Zero-Downtime Cloud Deployment (AWS / GCP / Vercel)",
      "Observability & Real-Time Alerting Dashboards",
      "Engineering Handover Sessions & Source Code Ownership",
      "Post-Launch Evolution & Model Upgrade Roadmap",
    ],
  },
];
