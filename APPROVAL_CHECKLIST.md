# MZEVOLVE Official Website — Executive Approval Checklist

In strict adherence to the project brief's content rules:
- **No clients, testimonials, awards, metrics, case studies, company history, certifications, or guarantees have been fabricated.**
- **Missing or pending corporate data points have been marked with explicit configuration placeholders.**
- **Demonstration projects are explicitly distinguished from confidential client work.**

Before publishing the website to the public domain `mzevolve.com`, the executive leadership of MZEVOLVE should review and approve the following configuration and content items.

---

## 1. Corporate Identity & Legal Disclosures

| Configuration Item | Current Placeholder / Default | Action Required for Approval | Location in Code |
| :--- | :--- | :--- | :--- |
| **Legal Entity Name** | `MZEVOLVE Technology Group [Corporate Registration Pending]` | Provide official registered business name (LLC, Inc., Corp., or Ltd.). | `src/config/site.ts` (`siteConfig.legalName`) |
| **Corporate Registration / Tax ID** | Pending verification | Supply commercial registration number, jurisdiction, or tax identifier if required by local regulations. | `src/app/privacy/page.tsx` |
| **Registered Headquarters Address** | `[Global Operations / Engineering Headquarters: Remote & Regional Consultations]` | Provide official physical or registered legal address for corporate filings and footer display. | `src/config/site.ts` (`siteConfig.contact.locationPlaceholder`) |
| **Corporate Telephone Channel** | `[Direct consultations scheduled upon project acceptance]` | Provide primary corporate telephone line or confirm consultation-only policy. | `src/config/site.ts` (`siteConfig.contact.phonePlaceholder`) |

---

## 2. Communications & Email Routing Infrastructure

| Configuration Item | Current Default | Action Required for Approval | Location in Code |
| :--- | :--- | :--- | :--- |
| **Official Contact Email** | `contact@mzevolve.com` | Ensure MX / Google Workspace / Microsoft 365 records are active for this address. | `src/config/site.ts` (`siteConfig.contact.officialEmail`) |
| **Inquiries Intake Email** | `projects@mzevolve.com` | Verify that inbound notifications are routed to the proper engineering triage inbox. | `src/config/site.ts` (`siteConfig.contact.inquiriesEmail`) |
| **Transactional Email Dispatch Key** | `RESEND_API_KEY` (in `.env.example`) | Provision production API key (e.g. from Resend.com or AWS SES) to forward contact submissions automatically. | `.env.example` / Production Hosting Environment Variables |

---

## 3. Social Media & External Channels

| Channel | Current Default URL | Action Required for Approval | Location in Code |
| :--- | :--- | :--- | :--- |
| **GitHub Organization** | `https://github.com/mzevolve` | Create or link official corporate GitHub organization. | `src/config/site.ts` (`siteConfig.social.github`) |
| **LinkedIn Company Page** | `https://linkedin.com/company/mzevolve` | Create or link official corporate LinkedIn page. | `src/config/site.ts` (`siteConfig.social.linkedin`) |
| **X / Twitter Profile** | `https://x.com/mzevolve` | Create or link official corporate X handle. | `src/config/site.ts` (`siteConfig.social.x`) |

---

## 4. Client Work & Case Studies Authorization

| Item | Current Status | Action Required for Approval |
| :--- | :--- | :--- |
| **Demonstrations vs. Client Work** | 4 verified internal technology demonstrations are displayed (`/work`). Zero client case studies are fabricated. | Once formal written client clearance / NDAs allow, add client case studies into `src/data/caseStudies.ts` or approve keeping demonstration-only focus. |
| **Testimonials & Metrics** | Zero fabricated testimonials or unverified statistics are present. | Approve policy to only publish verified, signed client testimonials when authorized. |

---

## 5. Legal Counsel Review of Privacy Policy

| Document | Current Coverage | Action Required for Approval | Location |
| :--- | :--- | :--- | :--- |
| **Privacy Policy** | GDPR, CCPA, zero AI training guarantees, retention schedules, and user rights requests. | Review by legal counsel to ensure compliance with specific operating jurisdictions. | `src/app/privacy/page.tsx` |
| **Terms of Service** | Reference link to standard contractual proposals and engagement terms. | Supply standard Master Services Agreement (MSA) template or terms if required online. | `src/app/privacy/page.tsx` |

---

## Sign-Off Protocol

Once the items above have been completed:
1. Update `src/config/site.ts` with approved values.
2. Commit changes to version control:
   ```bash
   git add src/config/site.ts
   git commit -m "chore: apply approved corporate details and legal entities"
   ```
3. Trigger production deployment following `DEPLOYMENT.md`.
