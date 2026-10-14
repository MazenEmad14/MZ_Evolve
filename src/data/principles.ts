import { Principle } from "@/types";

export const companyPrinciples: Principle[] = [
  {
    id: "purpose-driven",
    title: "Engineering over Hype",
    summary: "We prioritize deterministic, measurable system stability over speculative AI novelties.",
    description:
      "Artificial intelligence is an engineering discipline, not magic. We design architectures where models have defined boundaries, clear validation tests, and strict cost controls. If a deterministic algorithm or relational query solves your problem better than an LLM, we will recommend the simpler, more resilient solution.",
    iconName: "ShieldCheck",
  },
  {
    id: "evolutionary-design",
    title: "Built to Evolve",
    summary: "Software systems structured with modular boundaries that adapt gracefully to rapid model advancements.",
    description:
      "The AI landscape changes on a weekly basis. Systems tightly coupled to a single vendor or model weight quickly become obsolete. MZEVOLVE builds modular abstraction layers allowing models, vector databases, and external tool runners to be upgraded or hot-swapped without rebuilding your core application.",
    iconName: "GitBranch",
  },
  {
    id: "strict-data-integrity",
    title: "Data Sovereignty & Privacy",
    summary: "Your proprietary knowledge and customer data never leak into third-party training pipelines.",
    description:
      "Enterprise trust requires verifiable isolation. We engineer zero-retention API configurations, private VPC deployments, and client-controlled encryption keys. We treat intellectual property with absolute institutional confidentiality.",
    iconName: "Lock",
  },
  {
    id: "transparent-craft",
    title: "Radical Engineering Transparency",
    summary: "No black boxes. Full architectural visibility, comprehensive code ownership, and no vendor lock-in.",
    description:
      "Upon completion, you receive complete ownership of your repositories, deployment scripts, infrastructure configs, and documentation. We build in your cloud accounts or deliver deployable containers so your team remains in complete command of your technology.",
    iconName: "FileCode",
  },
];
