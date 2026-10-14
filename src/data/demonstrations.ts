import { TechnologyDemonstration } from "@/types";

export const demonstrationsData: TechnologyDemonstration[] = [
  {
    id: "demo-enterprise-rag",
    title: "Enterprise RAG Ingestion & Citation Pipeline",
    category: "Knowledge Engineering & LLM Architecture",
    status: "Interactive Blueprint",
    summary:
      "A high-fidelity reference architecture demonstrating hybrid dense-sparse document retrieval, contextual chunking, cross-encoder re-ranking, and strict sentence-level citation tracking.",
    architectureDetails:
      "Engineered with pgvector and BM25 hybrid indexing, Cohere re-ranking, and strict Pydantic citation structures. Designed to parse dense legal, financial, and technical PDFs while maintaining layout integrity and table structures.",
    highlights: [
      "Hybrid dense-sparse retrieval combining vector embeddings with lexical BM25 matching",
      "Contextual chunking with parent-document metadata preservation",
      "Zero-hallucination citation verification verifying exact text spans against source files",
      "Sub-400ms end-to-end retrieval and answer synthesis",
    ],
    techStack: ["Next.js", "FastAPI", "Python", "pgvector", "Cohere", "LlamaIndex"],
    disclaimer:
      "This is an internal technology demonstration engineered to showcase architectural capabilities. No proprietary client files or confidential data are contained within this reference implementation.",
  },
  {
    id: "demo-agentic-workflow",
    title: "Autonomous Multi-Agent Task Orchestrator",
    category: "AI Agents & Workflow Automation",
    status: "Proof of Concept",
    summary:
      "A deterministic cyclical state graph where specialized agents (Researcher, Synthesizer, Code Validator, and Safety Reviewer) collaborate to resolve multi-step operational tasks.",
    architectureDetails:
      "Constructed using LangGraph cyclical graphs and Temporal-style durable execution semantics. Features authenticated external API tool calling, automated error reflection loops, and a human-in-the-loop web interface for privileged operational commands.",
    highlights: [
      "State-machine-governed execution preventing infinite recursion and token runaway",
      "Sandboxed environment execution for safe API interaction and data parsing",
      "Audit trail logging every sub-agent decision, reasoning path, and tool payload",
      "Human-in-the-loop approval interrupt for sensitive write actions",
    ],
    techStack: ["LangGraph", "TypeScript", "Python", "Docker", "Tailwind CSS"],
    disclaimer:
      "Engineered as an internal proof-of-concept demonstrating robust multi-agent orchestration and safety boundaries. Not an active commercial client deployment.",
  },
  {
    id: "demo-proptech-engine",
    title: "PropTech Geospatial Intelligence & Deal Underwriter",
    category: "Real Estate Technology & Analytics",
    status: "Prototype",
    summary:
      "An interactive spatial intelligence application integrating Mapbox polygon searches, dynamic rental yield calculators, and automated 10-year investment underwriting models.",
    architectureDetails:
      "Combines PostGIS spatial database queries with client-side deck.gl rendering. Users draw custom polygon boundaries on regional maps to filter simulated multi-family listings and generate instant pro-forma financial sheets.",
    highlights: [
      "Real-time geospatial polygon indexing and demographic overlay mapping",
      "Dynamic discounted cash flow (DCF), IRR, and debt-coverage ratio calculators",
      "Automated PDF investment memorandum generation",
      "Responsive data tables with custom sorting and scenario stress-testing",
    ],
    techStack: ["Next.js", "TypeScript", "PostGIS", "Mapbox GL", "Tailwind CSS"],
    disclaimer:
      "Built as a demonstration of spatial analytics and financial modeling capabilities. Sample listings and property data are simulated for demonstration purposes.",
  },
  {
    id: "demo-predictive-analytics",
    title: "Real-Time Telemetry & Customer Churn Predictor",
    category: "Data Science & Machine Learning",
    status: "Prototype",
    summary:
      "A production-style machine learning pipeline that consumes time-series customer behavioral events and calculates churn risk scores with SHAP explainability insights.",
    architectureDetails:
      "Utilizes an ensemble gradient boosted decision tree (LightGBM) trained on synthetic subscription telemetry. Exposes a clean FastAPI inference endpoint and an interactive executive dashboard displaying risk drivers per account.",
    highlights: [
      "Event-driven feature calculation and cohort segmentation",
      "Model interpretability engine generating localized SHAP force plots",
      "Automated threshold-based alert triggers for account management teams",
      "Continuous model performance and data drift monitoring metrics",
    ],
    techStack: ["Python", "LightGBM", "Polars", "FastAPI", "React", "Recharts"],
    disclaimer:
      "Internal benchmark prototype utilizing synthetically generated event streams. Developed to demonstrate predictive analytics and model interpretability architectures.",
  },
];
