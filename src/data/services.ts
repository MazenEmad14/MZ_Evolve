import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    slug: "ai-solutions-llm-applications",
    title: "AI Solutions & LLM Applications",
    tagline: "Purpose-engineered generative intelligence built for production stability.",
    shortDescription:
      "Design, fine-tuning, and production deployment of Large Language Model applications customized to solve real operational bottlenecks.",
    fullDescription:
      "We build robust, deterministic, and safe LLM applications tailored to your proprietary domain. Rather than generic wrapper scripts, MZEVOLVE engineers resilient inference architectures featuring dynamic prompt chaining, structured JSON outputs, guardrails against hallucinations, and cost-optimized token pipelines. We partner with organizations to convert cutting-edge AI breakthroughs into stable, high-ROI business capabilities.",
    iconName: "Cpu",
    deliverables: [
      "Custom LLM inference pipelines with fallback model routing",
      "Rigorous prompt engineering frameworks & automated eval suites",
      "Domain-specific fine-tuning (LoRA / QLoRA) on curated enterprise datasets",
      "Hallucination mitigation & output validation guardrails (NeMo / Guardrails AI)",
      "Observability & token usage monitoring dashboards",
    ],
    keyCapabilities: [
      {
        title: "Model Selection & Architecture",
        description:
          "Objective benchmarks matching your workloads to state-of-the-art open weights (Llama 3, Mistral, Qwen) or frontier API models (GPT-4o, Claude 3.5, Gemini 1.5/2.0).",
      },
      {
        title: "Structured Output Engineering",
        description:
          "Strict Pydantic / Zod schema enforcement ensuring downstream databases and legacy systems receive flawless, machine-parsable data.",
      },
      {
        title: "Cost & Latency Optimization",
        description:
          "Semantic caching, batch inference, speculative decoding, and payload quantization to slash API overhead and guarantee low-latency responses.",
      },
      {
        title: "Enterprise Safety & Privacy",
        description:
          "PII redaction, air-gapped on-premise deployments, VPC private endpoints, and role-based access control.",
      },
    ],
    architectureHighlights: [
      "LangChain / LlamaIndex / DSPy orchestration",
      "vLLM & Hugging Face TGI inference servers",
      "Braintrust / LangSmith evaluation integration",
      "Redis semantic caching layer",
    ],
    idealFor: [
      "Organizations seeking to automate unstructured document extraction",
      "Enterprises replacing manual text review workflows",
      "Companies wanting private LLMs without sending data to third parties",
      "SaaS founders integrating proprietary generative intelligence into their core platform",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "LlamaIndex",
      "vLLM",
      "LangSmith",
      "Docker",
    ],
  },
  {
    id: "rag-assistants",
    slug: "rag-knowledge-assistants",
    title: "RAG & Knowledge Assistants",
    tagline: "Deterministic search across your proprietary corporate knowledge.",
    shortDescription:
      "Enterprise Retrieval-Augmented Generation systems that connect foundation models directly to your company documentation with source citations.",
    fullDescription:
      "MZEVOLVE develops production-grade RAG pipelines that eliminate hallucination by grounding language models in your enterprise files, wikis, tickets, and relational databases. We move far beyond naive semantic similarity by implementing hybrid dense-sparse search, contextual chunking, re-ranking models, and citation tracking, giving teams verifiable answers with audit trails.",
    iconName: "Database",
    deliverables: [
      "High-throughput document ingestion & ETL pipelines (PDFs, DOCX, Notion, Confluence)",
      "Vector database architecture with enterprise sharding and metadata filtering",
      "Hybrid search (BM25 + Dense vector embeddings) with cross-encoder re-ranking",
      "Strict citation engine with verbatim passage highlighting",
      "Access control synchronization reflecting corporate permission hierarchies",
    ],
    keyCapabilities: [
      {
        title: "Advanced Ingestion & Chunking",
        description:
          "Semantic layout-aware parsing that preserves tables, charts, headers, and hierarchical relationships across dense technical documents.",
      },
      {
        title: "Precision Retrieval & Re-ranking",
        description:
          "Cohere / BGE cross-encoder re-ranking pipelines filtering out noise before context windows are populated, drastically lowering token costs.",
      },
      {
        title: "Multi-Hop Query Reasoning",
        description:
          "Decomposition of complex, multi-part questions into sub-queries across disparate departmental databases.",
      },
      {
        title: "Verifiable Source Attribution",
        description:
          "Every generated sentence is backed by exact source document links, page numbers, and snippet timestamps for compliance.",
      },
    ],
    architectureHighlights: [
      "Qdrant / Milvus / Pinecone / pgvector vector stores",
      "Unstructured.io / LlamaParse multimodal document parsing",
      "Hybrid dense-sparse retrieval (ColBERT / BM25)",
      "Ragas automated RAG evaluation framework",
    ],
    idealFor: [
      "Customer support teams needing instant, accurate policy resolution",
      "Legal, regulatory, and compliance teams reviewing thousands of contracts",
      "Internal engineering teams querying vast technical repositories and wikis",
      "Healthcare and financial institutions requiring verifiable audit trails",
    ],
    techStack: [
      "Qdrant",
      "pgvector",
      "LlamaParse",
      "Cohere Re-rank",
      "FastAPI",
      "PostgreSQL",
    ],
  },
  {
    id: "ai-agents",
    slug: "ai-agents-workflow-automation",
    title: "AI Agents & Workflow Automation",
    tagline: "Autonomous systems executing multi-step business operations reliably.",
    shortDescription:
      "Goal-directed agentic systems capable of planning, invoking external APIs, handling exceptions, and executing complex workflows without friction.",
    fullDescription:
      "We design state-machine-driven autonomous AI agents that bridge the gap between static language models and active software execution. MZEVOLVE constructs deterministic agent workflows where agents analyze instructions, query internal APIs, synthesize multi-source data, run unit validations, and execute actions with human-in-the-loop checkpoints for critical business decisions.",
    iconName: "Bot",
    deliverables: [
      "Multi-agent collaborative networks with specialized roles (Planner, Executor, Reviewer)",
      "Secure tool-calling interfaces with authenticated REST and GraphQL connectors",
      "Human-in-the-loop approval gates for high-stakes financial or operational commands",
      "State-persistence architectures with self-healing retry mechanisms",
      "Comprehensive telemetry tracking agent reasoning steps and execution logs",
    ],
    keyCapabilities: [
      {
        title: "Deterministic State Machines",
        description:
          "Rigid graph architectures (LangGraph) ensuring agentic workflows adhere to business logic without entering infinite loops or executing unauthorized tools.",
      },
      {
        title: "Secure Tool Execution",
        description:
          "Sandboxed execution environments with scoped OAuth permissions, input sanitization, and audit logging.",
      },
      {
        title: "Self-Reflection & Error Recovery",
        description:
          "Autonomous error inspection: when an API call fails or an unexpected payload is returned, the agent adapts its query or alerts supervisors.",
      },
      {
        title: "Human-in-the-Loop Supervision",
        description:
          "Seamless web hooks allowing human team members to approve, modify, or reject agent recommendations with single-click simplicity.",
      },
    ],
    architectureHighlights: [
      "LangGraph cyclical state graphs",
      "Temporal / Inngest durable execution backends",
      "Sandboxed Docker / e2b tool runtime environments",
      "OpenTelemetry distributed tracing",
    ],
    idealFor: [
      "Back-office processes requiring cross-software data entry and reconciliation",
      "Automated customer onboarding, KYC checks, and document verification",
      "DevOps / IT automation for incident triage and log diagnosis",
      "Sales intelligence and automated prospect research",
    ],
    techStack: [
      "LangGraph",
      "Temporal",
      "Node.js",
      "Python",
      "Docker",
      "OpenTelemetry",
    ],
  },
  {
    id: "web-apps",
    slug: "websites-business-applications",
    title: "Websites & Business Applications",
    tagline: "High-performance digital products engineered for scale and speed.",
    shortDescription:
      "Modern full-stack web applications, enterprise portals, and SaaS platforms engineered with Next.js, TypeScript, and clean modular architectures.",
    fullDescription:
      "Your web application is often the primary vehicle through which customers and stakeholders interact with your technology. MZEVOLVE builds fast, accessible, and resilient web platforms engineered to withstand heavy enterprise traffic. We emphasize clean codebases, component-driven design systems, robust type safety, and seamless API integrations.",
    iconName: "Globe",
    deliverables: [
      "Full-stack Next.js applications utilizing React Server Components & App Router",
      "Custom responsive design systems with micro-interactions and accessibility (WCAG AA)",
      "Secure authentication & RBAC (Role-Based Access Control) integrations",
      "High-throughput RESTful & GraphQL backend APIs",
      "CI/CD pipelines, containerization, and zero-downtime deployment setups",
    ],
    keyCapabilities: [
      {
        title: "Modern React & Server Components",
        description:
          "Zero-bundle-size server components delivering near-instant First Contentful Paint (FCP) and optimal SEO indexing.",
      },
      {
        title: "Scalable Architecture & Clean Code",
        description:
          "Domain-driven code organization, typed API contracts, and comprehensive unit/integration test coverage.",
      },
      {
        title: "Enterprise Security Standards",
        description:
          "CSP headers, CSRF protection, secure cookie handling, sanitized inputs, and encrypted session management.",
      },
      {
        title: "Performance & Lighthouse Excellence",
        description:
          "Sub-second page loads, automated asset optimization, dynamic code splitting, and CDN edge delivery.",
      },
    ],
    architectureHighlights: [
      "Next.js App Router with TypeScript",
      "Tailwind CSS design systems",
      "PostgreSQL / Prisma / Drizzle ORM",
      "Vercel / AWS ECS / Cloudflare edge network",
    ],
    idealFor: [
      "Companies upgrading legacy web applications to modern stacks",
      "Startups needing a production-ready MVP built to scale",
      "Internal enterprise operational dashboards and portals",
      "Customer-facing portals requiring high security and flawless UX",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
    ],
  },
  {
    id: "data-science",
    slug: "data-science-predictive-analytics",
    title: "Data Science & Predictive Analytics",
    tagline: "Transforming raw business telemetry into decisive operational forecasts.",
    shortDescription:
      "End-to-end data pipelines, statistical modeling, and machine learning engines that predict trends and optimize operational efficiency.",
    fullDescription:
      "MZEVOLVE turns fragmented operational data into actionable competitive advantages. We develop robust data engineering pipelines, feature stores, and statistical models that forecast demand, detect anomalies, predict customer churn, and optimize resource allocation. We focus on real-world interpretability so executive stakeholders can make confident, data-backed decisions.",
    iconName: "TrendingUp",
    deliverables: [
      "Automated ETL / ELT data ingestion pipelines from transactional databases and APIs",
      "Predictive machine learning models (XGBoost, LightGBM, Prophet, Time-Series)",
      "Interactive executive dashboards with real-time KPI metrics",
      "Model drift monitoring, retraining pipelines, and validation suites",
      "Executive data documentation with model explainability reports (SHAP values)",
    ],
    keyCapabilities: [
      {
        title: "Data Pipeline Engineering",
        description:
          "Resilient batch and streaming data architectures that clean, normalize, and validate inbound telemetry without pipeline breakdowns.",
      },
      {
        title: "Predictive Forecasting",
        description:
          "Time-series forecasting for revenue, inventory turnover, server load, and operational capacity planning.",
      },
      {
        title: "Customer Intelligence & Churn",
        description:
          "Propensity scoring, cohort segmentation, and early warning algorithms identifying accounts at risk of defection.",
      },
      {
        title: "Explainable AI (XAI)",
        description:
          "Clear model interpretability tooling translating statistical weights into actionable business rationale for compliance and leadership.",
      },
    ],
    architectureHighlights: [
      "Python / pandas / polars / scikit-learn",
      "dbt (data build tool) & DuckDB / Snowflake",
      "MLflow tracking & model registry",
      "Streamlit & custom React visualization dashboards",
    ],
    idealFor: [
      "Companies with substantial historical data that is underutilized",
      "Logistics and inventory operators requiring precise demand forecasts",
      "Fintech and subscription businesses combating customer churn",
      "Leadership teams requiring real-time executive visibility",
    ],
    techStack: [
      "Python",
      "Polars",
      "scikit-learn",
      "XGBoost",
      "DuckDB",
      "MLflow",
    ],
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    tagline: "High-conversion commerce architectures infused with intelligent personalization.",
    shortDescription:
      "Custom e-commerce platforms, headless Shopify/Medusa architectures, dynamic product recommendation systems, and automated checkout funnels.",
    fullDescription:
      "Modern e-commerce demands both lightning-fast speed and intelligent personalization. MZEVOLVE engineers headless commerce storefronts and bespoke transactional platforms integrated with intelligent product discovery, automated inventory sync, personalized cross-selling algorithms, and conversion-optimized checkout experiences.",
    iconName: "ShoppingCart",
    deliverables: [
      "Headless storefronts built on Next.js, Shopify Storefront API, or MedusaJS",
      "Intelligent search & product recommendation algorithms tailored to user intent",
      "Automated multi-channel catalog and inventory synchronization",
      "Dynamic pricing and discount management engines",
      "Checkout conversion rate optimization (CRO) and analytics instrumentation",
    ],
    keyCapabilities: [
      {
        title: "Headless Architecture",
        description:
          "Decoupling the frontend presentation layer from backend inventory engines for sub-second page transitions and higher conversion rates.",
      },
      {
        title: "Personalized Product Discovery",
        description:
          "Vector-based semantic search allowing shoppers to find products using natural conversational queries and visual descriptors.",
      },
      {
        title: "Automated Order Operations",
        description:
          "Event-driven webhooks connecting checkout events directly to fulfillment, ERP, and CRM platforms.",
      },
      {
        title: "Internationalization & Multi-Currency",
        description:
          "Localized pricing, tax compliance calculation, and multilingual catalog support for cross-border expansion.",
      },
    ],
    architectureHighlights: [
      "Next.js Commerce with Edge Middleware",
      "Shopify Storefront GraphQL / MedusaJS backend",
      "Algolia / Meilisearch / Vector catalog search",
      "Stripe / Global payment gateway integrations",
    ],
    idealFor: [
      "Direct-to-Consumer brands outgrowing standard e-commerce templates",
      "B2B distributors needing custom tiered pricing and bulk ordering workflows",
      "Retailers seeking higher mobile checkout conversion rates",
      "Brands wanting AI-driven personalized product bundling",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MedusaJS",
      "Shopify GraphQL",
      "Stripe",
      "Tailwind CSS",
    ],
  },
  {
    id: "real-estate-tech",
    slug: "real-estate-technology",
    title: "Real Estate Technology",
    tagline: "PropTech digital infrastructure, spatial analytics, and asset intelligence.",
    shortDescription:
      "Automated property valuation systems, spatial MLS integration pipelines, intelligent lead routing, and dynamic real estate portals.",
    fullDescription:
      "Real estate markets move quickly, yet much of the industry remains burdened by manual paperwork and outdated software. MZEVOLVE develops custom PropTech platforms, automated valuation models (AVMs), map-driven listing exploration tools, and automated investor intelligence portals that turn complex real estate transactions into streamlined digital workflows.",
    iconName: "Home",
    deliverables: [
      "MLS / RETS / RESO Web API ingestion pipelines with continuous sync",
      "Interactive map interfaces with polygon search, zoning overlays, and geospatial filtering",
      "Automated property valuation and rental yield estimation calculators",
      "Investor deal analysis portals with automated cap rate and cash flow projections",
      "High-converting inquiry capture and broker lead distribution workflows",
    ],
    keyCapabilities: [
      {
        title: "Geospatial Search & Mapping",
        description:
          "Mapbox / Leaflet interfaces allowing users to draw custom boundaries, examine school district lines, and view transit accessibility scores.",
      },
      {
        title: "Listing Ingestion & Normalization",
        description:
          "Deduplication and enhancement of property records across fragmented regional syndication feeds.",
      },
      {
        title: "Investment Financial Modeling",
        description:
          "Dynamic underwriting calculators providing instant 10-year cash flow projections, IRR, and debt service coverage ratios.",
      },
      {
        title: "Client Portal & Deal Rooms",
        description:
          "Secure digital environments for exchanging due diligence files, floor plans, inspection reports, and closing documents.",
      },
    ],
    architectureHighlights: [
      "PostGIS geospatial spatial database extensions",
      "Mapbox GL JS / Deck.gl visual layers",
      "RESO Web API standardized data clients",
      "Automated PDF underwriting report generation",
    ],
    idealFor: [
      "Real estate brokerages modernizing their search and customer acquisition",
      "Private equity real estate funds automating deal intake and underwriting",
      "Property management firms digitizing tenant and leasing communications",
      "PropTech startups launching innovative marketplace models",
    ],
    techStack: [
      "Next.js",
      "PostGIS",
      "Mapbox GL",
      "Node.js",
      "Python",
      "Prisma",
    ],
  },
  {
    id: "ed-tech",
    slug: "education-technology",
    title: "Education Technology",
    tagline: "Adaptive learning environments and intelligent educational tools.",
    shortDescription:
      "Adaptive learning platforms, intelligent tutoring systems, automated assessment generation, and student engagement analytics.",
    fullDescription:
      "MZEVOLVE designs modern educational platforms that enhance how knowledge is acquired and evaluated. We combine cognitive learning design principles with safe, monitored AI technologies to build personalized learning paths, interactive practice environments, and actionable educator dashboards that help institutions scale personalized instruction.",
    iconName: "GraduationCap",
    deliverables: [
      "Custom learning management systems (LMS) and student engagement portals",
      "Adaptive quiz and exercise generators calibrated to curriculum standards",
      "AI-assisted coding and STEM practice sandboxes with immediate feedback",
      "Educator dashboards tracking mastery levels and identifying at-risk learners",
      "SCORM / LTI-compliant integration modules for existing institutional platforms",
    ],
    keyCapabilities: [
      {
        title: "Adaptive Learning Pathways",
        description:
          "Dynamic knowledge graph traversal adjusting instructional difficulty and pacing to match each student's mastery level.",
      },
      {
        title: "Pedagogically Sound AI Tutoring",
        description:
          "Socratic dialogue agents that guide students toward finding answers independently rather than simply outputting direct solutions.",
      },
      {
        title: "Automated Assessment & Feedback",
        description:
          "Instant rubric-based evaluation on open-ended assignments, providing constructive step-by-step guidance.",
      },
      {
        title: "Student Privacy & Compliance",
        description:
          "Strict adherence to education privacy standards (FERPA / COPPA compliant architecture) with no data leakage into public training sets.",
      },
    ],
    architectureHighlights: [
      "LTI 1.3 Advantage integration standards",
      "Knowledge graph prerequisite mapping (Neo4j / graph structures)",
      "WebAssembly-powered client-side code execution sandboxes",
      "Event-driven student engagement telemetry",
    ],
    idealFor: [
      "Educational institutions modernizing their digital learning infrastructure",
      "Corporate training academies seeking adaptive employee upskilling",
      "EdTech startups building next-generation instructional platforms",
      "Test prep organizations requiring scalable practice and diagnostic engines",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Neo4j / GraphDB",
      "FastAPI",
      "PostgreSQL",
      "WebAssembly",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
