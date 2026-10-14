import { TechnologyDemonstration } from "@/types";

export const demonstrationsData: TechnologyDemonstration[] = [
  {
    id: "demo-enterprise-rag",
    title: "Knowledge Assistant & Citation Demo",
    category: "Knowledge Engineering & RAG",
    status: "Proof of Concept",
    summary:
      "A working technical demonstration illustrating document ingestion, semantic vector retrieval, and question-answering with verifiable citations back to original files.",
    architectureDetails:
      "Engineered using PostgreSQL with pgvector for vector storage and Next.js for the user interface. It parses sample documents, extracts relevant context based on user queries, and generates grounded responses referencing specific document passages.",
    highlights: [
      "Document parsing and semantic vector search demonstration",
      "Context-grounded answer generation to reduce unsupported assertions",
      "Clickable references linking generated answers to source passages",
      "Clean conversational interface suitable for corporate knowledge bases",
    ],
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL (pgvector)", "TypeScript"],
    disclaimer:
      "This is an internal technology demonstration engineered to showcase architectural capabilities. It does not contain confidential client data or proprietary third-party files.",
  },
  {
    id: "demo-agentic-workflow",
    title: "Multi-Step Workflow Automation Prototype",
    category: "AI Workflow Automation",
    status: "Prototype",
    summary:
      "A prototype demonstrating automated multi-step task execution where software scripts query APIs, validate data formats, and present results with human approval checkpoints.",
    architectureDetails:
      "Constructed using modular state logic in TypeScript and Python. Features mock API connectors, automated error handling routines, and an interactive review interface enabling human team members to approve critical operations.",
    highlights: [
      "Sequential multi-step task execution with clear step validation",
      "Simulated external API connectors and structured JSON data handling",
      "Human approval gate allowing operators to review actions before finalization",
      "Execution logs detailing step progression and timestamps",
    ],
    techStack: ["TypeScript", "Python", "Next.js", "Docker", "Tailwind CSS"],
    disclaimer:
      "Built as an internal demonstration of automated workflow architecture and safety controls. Not a commercial client deployment.",
  },
  {
    id: "demo-proptech-engine",
    title: "Real Estate Map & Deal Calculator Prototype",
    category: "Real Estate Technology",
    status: "Prototype",
    summary:
      "An interactive property search prototype featuring map-based location filtering, sample property detail cards, and dynamic investment return calculators.",
    architectureDetails:
      "Combines interactive mapping components with client-side financial calculation engines. Visitors can browse simulated property listings, filter by criteria, and calculate estimated mortgage payments and rental yields.",
    highlights: [
      "Interactive map search with regional property pins and filters",
      "Dynamic cash flow, rental yield, and mortgage payment calculators",
      "Responsive property showcase cards with photo galleries and key metrics",
      "Lead inquiry capture form for prospective buyers and investors",
    ],
    techStack: ["Next.js", "TypeScript", "Leaflet / Mapbox", "Tailwind CSS"],
    disclaimer:
      "Developed to demonstrate real estate mapping and financial calculation features. Sample property records are simulated for demonstration purposes.",
  },
  {
    id: "demo-predictive-analytics",
    title: "Customer Trend & Retention Analytics Dashboard",
    category: "Data Science & Analytics",
    status: "Prototype",
    summary:
      "A dashboard prototype that processes historical subscription data to identify engagement trends, calculate retention metrics, and visualize risk factors.",
    architectureDetails:
      "Built with Python and modern web visualization components. Analyzes sample event logs to identify accounts with declining usage patterns and visualizes key retention drivers in a clean executive interface.",
    highlights: [
      "Historical data processing and cohort grouping",
      "Interactive KPI cards tracking retention and monthly trend lines",
      "Visual indicators highlighting accounts requiring follow-up attention",
      "Clean responsive charts designed for business review meetings",
    ],
    techStack: ["Python", "pandas", "scikit-learn", "Next.js", "Chart.js"],
    disclaimer:
      "Internal benchmark prototype utilizing synthetically generated event data. Developed to illustrate predictive data visualization and cohort analysis.",
  },
];
