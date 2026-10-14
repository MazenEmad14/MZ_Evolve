import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    slug: "ai-solutions-llm-applications",
    title: "AI Solutions & LLM Applications",
    tagline: "Practical language model integrations built for business reliability.",
    shortDescription:
      "Design and development of custom AI and Large Language Model applications that solve specific operational bottlenecks and improve team productivity.",
    fullDescription:
      "Many organizations want to leverage generative AI but struggle with inconsistent answers, unstructured data, and generic outputs. MZEVOLVE builds focused LLM applications tailored to your specific workflows. We implement structured prompt pipelines, schema-validated JSON outputs, and automated checks to ensure your AI systems deliver dependable results that integrate directly into your existing business software.",
    iconName: "Cpu",
    deliverables: [
      "Custom LLM API integration modules (OpenAI, Anthropic, or open-source models)",
      "Structured output schemas (JSON/Pydantic/Zod) for reliable database ingestion",
      "Domain-specific prompt engineering and validation suites",
      "Guardrails against inconsistent or malformed outputs",
      "API usage and token cost tracking dashboards",
    ],
    keyCapabilities: [
      {
        title: "Practical Model Integration",
        description:
          "Selecting and integrating the most appropriate model for your workload, balancing cost, response speed, and accuracy.",
      },
      {
        title: "Structured Output Extraction",
        description:
          "Enforcing strict data formats so your downstream databases and APIs receive clean, machine-readable information.",
      },
      {
        title: "Prompt Design & Testing",
        description:
          "Designing reliable prompt chains with automated tests to verify response quality across edge cases.",
      },
      {
        title: "Cost & Usage Control",
        description:
          "Implementing caching, token budgeting, and monitoring to keep AI infrastructure expenses predictable.",
      },
    ],
    architectureHighlights: [
      "Prompt orchestration with LangChain or lightweight custom pipelines",
      "Schema validation with Pydantic and TypeScript Zod",
      "Semantic caching to minimize redundant API calls",
      "RESTful API endpoints for web and mobile clients",
    ],
    idealFor: [
      "Businesses seeking to automate document review and text extraction",
      "Teams wanting to incorporate smart assistance into their internal software",
      "Founders building software products that require reliable generative features",
      "Companies wanting to reduce repetitive manual writing and summarization tasks",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "Docker",
    ],
  },
  {
    id: "rag-assistants",
    slug: "rag-knowledge-assistants",
    title: "RAG & Knowledge Assistants",
    tagline: "Search and synthesize information across your company documentation.",
    shortDescription:
      "Knowledge assistants that connect AI models to your private documents, files, and manuals with verifiable source references.",
    fullDescription:
      "Finding accurate information across scattered PDFs, policy manuals, and knowledge bases wastes valuable work hours. MZEVOLVE develops practical Retrieval-Augmented Generation (RAG) assistants that index your internal documentation. When team members or customers ask questions, the system retrieves relevant passages and synthesizes clear answers accompanied by direct citations back to the original documents.",
    iconName: "Database",
    deliverables: [
      "Document ingestion scripts for PDFs, Word files, and markdown documentation",
      "Vector search setup with semantic similarity matching",
      "Conversational question-answering interface tailored to your brand",
      "Clear source attribution showing document titles and page references",
      "Administrative tools to update or remove indexed files",
    ],
    keyCapabilities: [
      {
        title: "Document Ingestion & Parsing",
        description:
          "Extracting clean text, headers, and tables from business files to prepare them for efficient search.",
      },
      {
        title: "Semantic Vector Search",
        description:
          "Matching user queries with the most contextually relevant sections of your company documentation.",
      },
      {
        title: "Grounded Answer Generation",
        description:
          "Instructing models to answer strictly using retrieved text, minimizing speculation and generic responses.",
      },
      {
        title: "Verifiable Source Citations",
        description:
          "Providing clickable references to original files so users can verify information with complete confidence.",
      },
    ],
    architectureHighlights: [
      "Vector search with PostgreSQL (pgvector) or dedicated vector databases",
      "Document chunking algorithms that maintain contextual meaning",
      "Secure API layer ensuring only authorized users can query sensitive documents",
      "Responsive chat UI with Markdown and citation rendering",
    ],
    idealFor: [
      "Support teams answering customer inquiries from complex product catalogs",
      "Organizations managing large libraries of policy manuals, guidelines, or SOPs",
      "Professional service teams reviewing contracts and project documentation",
      "Internal teams onboarding new employees and sharing institutional knowledge",
    ],
    techStack: [
      "Python",
      "PostgreSQL (pgvector)",
      "FastAPI",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    id: "ai-agents",
    slug: "ai-agents-workflow-automation",
    title: "AI Agents & Workflow Automation",
    tagline: "Automate repetitive, multi-step operations with goal-directed workflows.",
    shortDescription:
      "Goal-directed automation workflows capable of querying internal APIs, processing information, and executing business tasks with human oversight.",
    fullDescription:
      "Repetitive digital tasks that require navigating multiple tools, copying data between spreadsheets, and sending routine communications consume significant resources. MZEVOLVE designs structured AI workflows and task agents that automate these multi-step processes. We implement clear boundaries, error handling, and human-in-the-loop checkpoints so critical actions always require approval before execution.",
    iconName: "Bot",
    deliverables: [
      "Task automation scripts connected to your business APIs and databases",
      "Multi-step decision workflows with automated retries and error reporting",
      "Human-in-the-loop approval screens for sensitive operations",
      "Execution logs and audit trails detailing every automated action",
      "Scheduled task triggers and webhook listeners",
    ],
    keyCapabilities: [
      {
        title: "Multi-Step Task Orchestration",
        description:
          "Breaking complex business goals into sequential steps with clear validation criteria at each stage.",
      },
      {
        title: "API & Tool Connectors",
        description:
          "Connecting AI agents securely to your CRMs, databases, email services, and internal webhooks.",
      },
      {
        title: "Human Approval Gates",
        description:
          "Enabling staff to review and approve high-stakes actions before any external command is finalized.",
      },
      {
        title: "Error Handling & Logging",
        description:
          "Built-in fallback routines and transparent execution logs that simplify troubleshooting and oversight.",
      },
    ],
    architectureHighlights: [
      "State management for reliable sequential execution",
      "Secure credential storage using environment variables",
      "Webhook-driven triggers and background worker queues",
      "Audit logs with execution timestamps and parameter summaries",
    ],
    idealFor: [
      "Teams spending hours moving information between disparate software systems",
      "Customer onboarding workflows requiring multi-step verification and email notifications",
      "Data reconciliation tasks comparing records across different spreadsheets and databases",
      "Lead triage and automated research before sales team outreach",
    ],
    techStack: [
      "Python",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Docker",
    ],
  },
  {
    id: "web-apps",
    slug: "websites-business-applications",
    title: "Websites & Business Applications",
    tagline: "High-performance digital products engineered for speed and stability.",
    shortDescription:
      "Modern full-stack web applications, business portals, and responsive corporate websites engineered with Next.js, React, and TypeScript.",
    fullDescription:
      "A company's web presence and internal tools must be fast, visually refined, and reliable. MZEVOLVE builds modern web applications and portals using Next.js and TypeScript. We focus on clean code, responsive layouts that function seamlessly across mobile and desktop devices, fast page loading, and maintainable architectures that can scale as your business evolves.",
    iconName: "Globe",
    deliverables: [
      "Full-stack Next.js web applications with responsive mobile-first layouts",
      "Clean UI component design system using modern CSS and Tailwind",
      "User authentication, session handling, and role-based permissions",
      "Secure backend API routes and database integrations",
      "SEO optimization, structured metadata, and production deployment configuration",
    ],
    keyCapabilities: [
      {
        title: "Responsive Modern UI",
        description:
          "Carefully styled interfaces optimized for smartphones, tablets, and desktop displays with smooth interactions.",
      },
      {
        title: "Fast Page Performance",
        description:
          "Server-side rendering and asset optimization ensuring rapid initial page loads and strong search engine rankings.",
      },
      {
        title: "Clean Modular Codebase",
        description:
          "TypeScript type safety and reusable component architecture that simplifies future enhancements and maintenance.",
      },
      {
        title: "Robust Security Foundations",
        description:
          "Input sanitization, secure headers, encrypted session cookies, and environment-secured credentials.",
      },
    ],
    architectureHighlights: [
      "Next.js App Router with React and TypeScript",
      "Tailwind CSS with custom brand design tokens",
      "PostgreSQL or SQLite database integrations",
      "Automated build and deployment configuration",
    ],
    idealFor: [
      "Businesses launching a new company website or rebranding their online presence",
      "Companies replacing outdated legacy portals with modern web software",
      "Founders developing an MVP or client-facing SaaS application",
      "Organizations needing secure internal administrative tools and dashboards",
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
    tagline: "Transform business data into actionable forecasts and clear dashboards.",
    shortDescription:
      "Data processing pipelines, statistical modeling, and interactive dashboards that reveal trends and support smarter business decisions.",
    fullDescription:
      "Organizations collect substantial operational and sales data, but often struggle to extract actionable insights. MZEVOLVE builds practical data pipelines and predictive analytics models that uncover historical patterns, forecast future demand, and highlight key business indicators. We present findings through clear, interactive visual dashboards that business leaders can easily interpret.",
    iconName: "TrendingUp",
    deliverables: [
      "Data extraction and cleaning scripts for spreadsheets, databases, and APIs",
      "Predictive models for sales trends, customer retention, or demand forecasting",
      "Interactive executive dashboards with key business performance metrics",
      "Statistical summaries with clear visualizations and trend explanations",
      "Documentation on data assumptions and model interpretation",
    ],
    keyCapabilities: [
      {
        title: "Data Cleaning & Preparation",
        description:
          "Normalizing inconsistent datasets and resolving missing values to create trustworthy analytical foundations.",
      },
      {
        title: "Trend Forecasting",
        description:
          "Applying proven statistical and machine learning methods to anticipate future demand, sales, and seasonal patterns.",
      },
      {
        title: "Customer & Sales Insights",
        description:
          "Identifying key behavioral patterns that influence customer engagement and repeat business.",
      },
      {
        title: "Interactive Dashboards",
        description:
          "Building intuitive visual charts and data tables that summarize complex metrics for stakeholders.",
      },
    ],
    architectureHighlights: [
      "Python data analysis pipelines using pandas and scikit-learn",
      "Automated periodic data refresh routines",
      "Interactive charts using modern web visualization libraries",
      "Exportable summary reports in PDF and spreadsheet formats",
    ],
    idealFor: [
      "Businesses wanting to understand customer retention and purchasing patterns",
      "Managers seeking realistic sales and inventory forecasts based on historical data",
      "Operations teams needing centralized KPI dashboards instead of manual spreadsheets",
      "Companies wanting to make strategic decisions backed by verified data",
    ],
    techStack: [
      "Python",
      "pandas",
      "scikit-learn",
      "PostgreSQL",
      "Next.js",
      "Chart.js",
    ],
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    tagline: "High-converting online shopping platforms built for modern commerce.",
    shortDescription:
      "Custom online storefronts, product catalog management, fast search, and streamlined checkout workflows that convert visitors into buyers.",
    fullDescription:
      "Successful e-commerce depends on fast load times, intuitive mobile navigation, and frictionless checkout experiences. MZEVOLVE designs custom online storefronts tailored to your product catalog. We integrate reliable payment gateways, clear product filtering, and automated order notifications to provide shoppers with a seamless buying journey from discovery to confirmation.",
    iconName: "ShoppingCart",
    deliverables: [
      "Custom responsive e-commerce storefront optimized for mobile shoppers",
      "Fast product search and faceted category filtering",
      "Shopping cart and multi-step checkout workflow",
      "Payment gateway integration (Stripe, PayPal, or regional processors)",
      "Automated customer order confirmation and notification emails",
    ],
    keyCapabilities: [
      {
        title: "Mobile-First Storefront",
        description:
          "Crafting shopping experiences optimized for smartphones where the majority of online purchases occur.",
      },
      {
        title: "Intuitive Product Discovery",
        description:
          "Providing responsive search bars, clear category filters, and detailed product showcase galleries.",
      },
      {
        title: "Secure Checkout Flows",
        description:
          "Integrating trusted payment processors with encrypted data handling for safe customer transactions.",
      },
      {
        title: "Order & Inventory Synchronization",
        description:
          "Connecting purchases with your back-office systems to keep inventory counts and order queues accurate.",
      },
    ],
    architectureHighlights: [
      "Next.js storefront with fast client-side navigation",
      "Secure payment processing via standardized webhook listeners",
      "Responsive image delivery for crisp product visuals",
      "Structured product data for enhanced search engine visibility",
    ],
    idealFor: [
      "Brands wanting a distinctive custom storefront that stands out from basic templates",
      "Wholesale or B2B businesses needing custom quote or ordering flows",
      "Retailers seeking faster mobile load times to reduce abandoned carts",
      "Merchants looking to expand their online catalog with customized features",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],
  },
  {
    id: "real-estate-tech",
    slug: "real-estate-technology",
    title: "Real Estate Technology",
    tagline: "Digital property portals, interactive maps, and investment calculators.",
    shortDescription:
      "Property listing platforms, interactive map search tools, automated investment return calculators, and organized lead capture for real estate businesses.",
    fullDescription:
      "Real estate clients expect quick access to property details, interactive location maps, and clear financial figures. MZEVOLVE develops custom real estate websites and listing portals. We build interactive map exploration, property comparison tools, and investment calculators that allow prospective buyers, tenants, and investors to evaluate opportunities with clarity.",
    iconName: "Home",
    deliverables: [
      "Custom property listing website with search, sort, and filter functionality",
      "Interactive map search highlighting property locations and neighborhood amenities",
      "Investment financial calculators (mortgage estimates, rental yield, cash flow)",
      "Dedicated property showcase pages with image galleries and floor plan viewers",
      "Lead capture forms that route inquiries directly to agents and brokers",
    ],
    keyCapabilities: [
      {
        title: "Interactive Map Exploration",
        description:
          "Allowing users to search listings geographically and explore nearby landmarks, roads, and services.",
      },
      {
        title: "Property Filtering & Search",
        description:
          "Enabling visitors to filter properties by price, bedrooms, area, property type, and amenities.",
      },
      {
        title: "Financial Return Calculators",
        description:
          "Providing dynamic calculators that estimate monthly payments, potential rental income, and returns.",
      },
      {
        title: "Broker Lead Capture",
        description:
          "Capturing qualified buyer and tenant inquiries and delivering them immediately to your sales team.",
      },
    ],
    architectureHighlights: [
      "Interactive mapping using Leaflet or Mapbox web components",
      "Responsive image sliders for high-resolution property photography",
      "Structured property schema markup for real estate SEO",
      "PostgreSQL database storing property attributes and location coordinates",
    ],
    idealFor: [
      "Real estate agencies and brokerages modernizing their online listing portal",
      "Property developers showcasing new residential or commercial projects",
      "Real estate investment groups providing deal analysis tools for partners",
      "Property managers wanting an organized portal for available rental units",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Leaflet / Mapbox",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    id: "ed-tech",
    slug: "education-technology",
    title: "Education Technology",
    tagline: "Interactive learning platforms, practice environments, and student dashboards.",
    shortDescription:
      "Custom educational portals, interactive practice and quiz systems, and student progress tracking tools for schools and training programs.",
    fullDescription:
      "Modern education requires more than static textbook reading. MZEVOLVE builds interactive learning web platforms and educational tools. We design clean course portals, automated practice quizzes with instant feedback, and intuitive dashboards that help educators understand learner progress and keep students engaged.",
    iconName: "GraduationCap",
    deliverables: [
      "Custom learning portal for courses, video lessons, and reading materials",
      "Interactive quiz and practice exercise modules with immediate answer feedback",
      "Student progress and quiz score tracking dashboards",
      "Educator administrative screens to manage learning modules and view cohorts",
      "Clean, accessible student interfaces built for all device types",
    ],
    keyCapabilities: [
      {
        title: "Structured Course Portals",
        description:
          "Organizing lessons, videos, and reading materials into logical, easy-to-follow curriculum modules.",
      },
      {
        title: "Interactive Practice & Quizzes",
        description:
          "Providing multiple-choice and open-ended practice questions that reinforce concepts with immediate guidance.",
      },
      {
        title: "Student Progress Dashboards",
        description:
          "Displaying completed lessons, quiz scores, and milestones so students remain motivated.",
      },
      {
        title: "Educator Overview Tools",
        description:
          "Giving instructors clear visibility into student completion rates and common areas of difficulty.",
      },
    ],
    architectureHighlights: [
      "Modular course lesson player supporting video, audio, and text",
      "Client-side quiz evaluation engine with instant answer validation",
      "Secure user authentication for students and educators",
      "Accessible UI adhering to standard web accessibility guidelines",
    ],
    idealFor: [
      "Training academies and educational institutions creating online programs",
      "Companies establishing internal employee training and onboarding portals",
      "Educators launching specialized online courses or certification prep materials",
      "Organizations building interactive educational tools for community learning",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
