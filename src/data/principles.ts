import { Principle } from "@/types";

export const companyPrinciples: Principle[] = [
  {
    id: "purpose-driven",
    title: "Engineering over Hype",
    summary: "We prioritize measurable system stability over speculative novelty.",
    description:
      "Technology must solve real business problems. We design software architectures with defined boundaries, clear tests, and predictable costs. If a standard relational query or simple algorithm solves your problem better than an AI model, we will recommend the simpler, more resilient solution.",
    iconName: "ShieldCheck",
  },
  {
    id: "evolutionary-design",
    title: "Built to Evolve",
    summary: "Software structured with modular boundaries that adapt as technology advances.",
    description:
      "The software and AI landscape evolves constantly. Systems tightly coupled to a single vendor or proprietary format quickly become difficult to maintain. MZEVOLVE designs modular application layers so integrations and models can be upgraded without rebuilding your entire system.",
    iconName: "GitBranch",
  },
  {
    id: "strict-data-integrity",
    title: "Professional Confidentiality",
    summary: "We treat client data and proprietary project briefs with strict professional discretion.",
    description:
      "Trust requires responsible data handling. We apply standard security practices, encrypted transport (HTTPS/TLS), and secure environment variable management. We never sell your data or share your confidential project specifications with third parties.",
    iconName: "Lock",
  },
  {
    id: "transparent-craft",
    title: "Engineering Transparency",
    summary: "Full codebase ownership, clean documentation, and no proprietary vendor lock-in.",
    description:
      "Upon project completion, you receive full ownership of your application code, configuration files, and documentation. We write clean, readable TypeScript and Python so your team remains in complete command of your digital assets.",
    iconName: "FileCode",
  },
];
