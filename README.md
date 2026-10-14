# MZEVOLVE Official Website

> **Beyond Ordinary. Built to Evolve.**

The official corporate web application for **MZEVOLVE**, engineering enterprise-grade AI solutions, intelligent agent workflows, and scalable digital architectures built to evolve with modern technology.

---

## 1. Brand Identity & Visual System

- **Brand**: MZEVOLVE
- **Tagline**: Beyond Ordinary. Built to Evolve.
- **Visual Direction**: Premium, minimal, modern, technology-focused.
- **Primary Color**: Emerald Green (`#19D879`)
- **Background**: Charcoal (`#171B1A`) with surface layers (`#1E2423`, `#242D2B`)
- **Light Color**: Off-White (`#F5F7F6`)
- **Official Contact Channels**:
  - Email: [mzevolve2026@gmail.com](mailto:mzevolve2026@gmail.com)
  - Phone: `01069216994` (International: `+201069216994`)
  - WhatsApp: `+201069216994` ([Direct Chat Link](https://wa.me/201069216994))
- **Typography**: Geometric Sans-Serif (`Plus Jakarta Sans` for body, `Outfit` for display headings)
- **Aesthetic**: Ambient emerald glows, glassmorphism, responsive micro-interactions, subtle grid backdrops, and seamless Dark/Light theme switching.

---

## 2. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16 App Router with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict type-safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 design tokens & CSS variables)
- **Icons**: [Lucide React](https://lucide.dev/) (consistent geometric tech iconography)
- **Form Handling**: Full-stack client validation + server-side validation (`/api/contact`), honeypot bot trap, submission speed check, rate limiting, and Resend transactional email integration with honest fallback.
- **SEO & Performance**: Dynamic metadata, OpenGraph tags, Twitter cards, automated `sitemap.xml`, and `robots.txt`.

---

## 3. Project Structure

```
├── public/
│   ├── images/
│   │   └── logo.jpeg               # MZEVOLVE brand mark
│   └── logo.jpeg                   # Public logo root
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, SEO & ThemeProvider
│   │   ├── globals.css             # Tailwind v4 theme tokens & design system
│   │   ├── page.tsx                # Home page with all 9 brief sections
│   │   ├── not-found.tsx           # Custom 404 page
│   │   ├── robots.ts               # Search engine crawler instructions
│   │   ├── sitemap.ts              # Automated dynamic XML sitemap
│   │   ├── about/
│   │   │   └── page.tsx            # About Us & corporate governance disclosures
│   │   ├── services/
│   │   │   ├── page.tsx            # All 8 services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual service detail pages (SSG)
│   │   ├── work/
│   │   │   └── page.tsx            # Genuine tech demonstrations & blueprints
│   │   ├── contact/
│   │   │   └── page.tsx            # Inquiries page with interactive form
│   │   ├── privacy/
│   │   │   └── page.tsx            # GDPR/CCPA Privacy Policy
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts        # Server endpoint with validation & spam defense
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation header with mobile drawer & theme toggle
│   │   │   ├── Footer.tsx          # Full footer with links & configuration markers
│   │   │   └── ThemeProvider.tsx   # Dark/Light mode manager with localStorage
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutIntroSection.tsx
│   │   │   ├── ServicesGridSection.tsx
│   │   │   ├── PrinciplesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── GenuineWorkSection.tsx
│   │   │   └── ContactCtaSection.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx     # Reusable service card
│   │   │   └── ServiceDetailView.tsx # Comprehensive service capability view
│   │   ├── contact/
│   │   │   └── ContactForm.tsx     # Interactive validated project inquiry form
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx # Floating WhatsApp contact trigger & tooltip
│   │       ├── Logo.tsx            # MZ Rocket Vector Emblem + Wordmark
│   │       ├── Button.tsx          # Button & Link component with loading state
│   │       ├── Badge.tsx           # Status pills & category tags
│   │       └── SectionHeading.tsx  # Standardized section headings
│   ├── config/
│   │   └── site.ts                 # Centralized configuration, verified links & placeholders
│   ├── data/
│   │   ├── services.ts             # Complete data for all 8 engineering services
│   │   ├── principles.ts           # 4 core engineering principles
│   │   ├── process.ts              # 4-stage "How We Work" methodology
│   │   └── demonstrations.ts       # Genuine technology prototypes & proofs
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── .env.example                    # Environment variable template
├── DEPLOYMENT.md                   # Production deployment guide
└── APPROVAL_CHECKLIST.md           # Executive sign-off checklist for pending items
```

---

## 4. Getting Started

### 1. Clone & Install
```bash
git clone <repository-url>
cd MZEVOLVE
npm install
```

### 2. Configure Environment
Copy the example environment file:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 5. Required Pages Implemented

1. **Home** (`/`): Complete with hero, about intro, 8 service cards, company principles, 4-stage process, genuine demonstrations, contact CTA banner, and verified footer.
2. **Services Overview** (`/services`): Comprehensive breakdown of all eight disciplines.
3. **Individual Service Detail Pages** (`/services/[slug]`):
   - AI Solutions & LLM Applications (`/services/ai-solutions-llm-applications`)
   - RAG & Knowledge Assistants (`/services/rag-knowledge-assistants`)
   - AI Agents & Workflow Automation (`/services/ai-agents-workflow-automation`)
   - Websites & Business Applications (`/services/websites-business-applications`)
   - Data Science & Predictive Analytics (`/services/data-science-predictive-analytics`)
   - E-commerce Solutions (`/services/ecommerce-solutions`)
   - Real Estate Technology (`/services/real-estate-technology`)
   - Education Technology (`/services/education-technology`)
4. **Project Scope & Effort Estimator** (`/estimator`): Multi-step interactive architectural calculator allowing clients to configure requirements, modules, and timelines to receive instant team recommendations and effort brackets.
5. **Engineering Insights & Whitepapers** (`/insights`): In-depth technical articles covering enterprise RAG, deterministic vs autonomous agents, and zero-trust LLM security, with full static generation (`/insights/[slug]`).
6. **About Us** (`/about`): Engineering philosophy, core tenets, and corporate governance disclosures.
7. **Projects & Demonstrations** (`/work`): Verified technology demonstrations, client confidentiality statement, plus three interactive simulators (RAG Vector Search, Agent State Machine, and Token Economics).
8. **Contact** (`/contact`): Interactive project inquiry form with client/server validation, honeypot spam protection, submission speed check, unique inquiry ID generation, prefill handshake from estimator, and direct calendar booking.
9. **Privacy Policy** (`/privacy`): Full data protection policy covering personal information handling, zero public AI model training guarantees, retention policies, and user rights.
10. **Global Interactive Utilities**:
    - **Command Palette (`Cmd+K` / `Ctrl+K`)**: Keyboard-accessible spotlight search and action hub.
    - **Dual-Language & RTL Engine**: Instant toggle between English and Arabic (`العربية`) with dynamic RTL text direction.
    - **Interactive Architecture Stack Inspector**: 5-layer interactive blueprint embedded in all service detail pages.
    - **Discovery Session Booking**: Modal trigger integrated with Cal.com / direct scheduling.
    - **Capabilities Deck Export**: Digital enterprise brochure modal with print-to-PDF formatting.


---

## 6. Content & Compliance Standards

- **No Fabricated Content**: Zero invented clients, fake metrics, fake awards, or artificial testimonials.
- **Explicit Placeholders**: Missing legal registration items and addresses are clearly marked with configuration placeholders in `src/config/site.ts` and `APPROVAL_CHECKLIST.md`.
- **Confidentiality Notice**: Clear enterprise non-disclosure statement explaining that client production code is held under confidential contracts.
