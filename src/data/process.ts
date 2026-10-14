import { ProcessStage } from "@/types";

export const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Discovery & Requirements Scoping",
    duration: "Week 1",
    description:
      "We discuss your business objectives, review data inputs, understand technical constraints, and assess project feasibility before beginning development.",
    deliverables: [
      "Technical Feasibility Assessment",
      "Scope of Work & Milestone Outline",
      "API & Data Requirements Overview",
      "Recommended Architecture Plan",
    ],
  },
  {
    step: "02",
    title: "Prototyping & Architecture Design",
    duration: "Weeks 2 – 3",
    description:
      "We build a working prototype or core workflow demonstration to validate user flows, prompts, or data structures with your team.",
    deliverables: [
      "Functional Prototype or Proof of Concept",
      "User Interface Wireframes / Views",
      "Data Schema & Workflow Specifications",
      "Refined Milestone Schedule",
    ],
  },
  {
    step: "03",
    title: "Application Engineering & Testing",
    duration: "Weeks 4 – 8+",
    description:
      "We build the complete application or automation pipeline with clean modular code, responsive interfaces, and rigorous validation checks.",
    deliverables: [
      "Modular TypeScript / Python Codebase",
      "Validated Backend API Routes & Schemas",
      "Responsive User Interfaces",
      "Code Documentation & Setup Guide",
    ],
  },
  {
    step: "04",
    title: "Deployment & Project Handover",
    duration: "Final Stage",
    description:
      "We deploy the application to your designated hosting environment, conduct walkthrough sessions, and hand over full repository ownership.",
    deliverables: [
      "Production Deployment (Vercel, Cloud VPS, or Docker)",
      "Environment Configuration Guide",
      "Full Source Code Repository Handover",
      "Support & Future Enhancement Recommendations",
    ],
  },
];
