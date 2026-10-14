# MZEVOLVE Official Website — Executive Approval Checklist

In strict adherence to the project brief's content and governance rules:
- **No clients, testimonials, awards, metrics, case studies, company history, certifications, or guarantees have been fabricated.**
- **All official contact channels are centralized in `src/config/site.ts` as the single source of truth.**
- **Demonstration projects are explicitly distinguished from confidential client work.**

Before publishing the website to public production hosting (`mzevolve.com`), review the confirmed settings and take action on the remaining business and infrastructure items below.

---

## 1. Confirmed & Integrated Official Corporate Details

The following official information has been verified, implemented, and wired across all components:

| Item | Confirmed Value | Implementation Status |
| :--- | :--- | :--- |
| **Company Name** | `MZEVOLVE` | Configured centrally in `src/config/site.ts` (`siteConfig.name`). Unverified suffixes like "Technology Group" have been removed. |
| **Brand Tagline** | `Beyond Ordinary. Built to Evolve.` | Displayed in hero, navigation, metadata, and footer. |
| **Official Email** | `mzevolve2026@gmail.com` | Configured as clickable `mailto:mzevolve2026@gmail.com` in navbar, footer, contact page, about page, and API recipient. |
| **Official Phone** | `01069216994` (Dialing: `+201069216994`) | Configured as clickable `tel:+201069216994` across all components; formatted for Egyptian and international callers. |
| **WhatsApp Direct Channel** | `+201069216994` (`https://wa.me/201069216994`) | Active via Floating WhatsApp widget, footer link, contact page card, and error fallback buttons. |
| **Brand Palette** | Emerald `#19D879`, Charcoal `#171B1A`, Off-White `#F5F7F6` | Enforced throughout Tailwind design system and CSS tokens. |
| **Approved Services** | 8 specific disciplines | Grounded descriptions in `src/data/services.ts`, free from unverified claims or buzzwords. |

---

## 2. Infrastructure & External Services Requiring Owner Configuration

| Configuration Item | Status / Default | Action Required from Owner | Location in Code / Env |
| :--- | :--- | :--- | :--- |
| **Production Email Dispatch (`RESEND_API_KEY`)** | Currently empty (`""`) | Create a free account at [Resend.com](https://resend.com), generate an API key, and set `RESEND_API_KEY` in production hosting environment variables. *Note: If not configured, the website gracefully falls back to directing users to email `mzevolve2026@gmail.com` or WhatsApp directly.* | `.env.example` / Hosting Dashboard |
| **Sender Email Address (`RESEND_FROM_EMAIL`)** | Defaults to `MZEVOLVE Inquiries <onboarding@resend.dev>` | Verify your custom domain in Resend to send from `inquiries@mzevolve.com`, or leave default for initial testing. | `.env.example` / `src/app/api/contact/route.ts` |
| **Production Domain & DNS** | Configured as `https://mzevolve.com` | Configure your DNS provider with A / CNAME records pointing to your hosting provider (Vercel, Docker, etc.) as detailed in `DEPLOYMENT.md`. | DNS Provider / `NEXT_PUBLIC_SITE_URL` |

---

## 3. Business & Legal Items for Owner Review

| Item | Current Implementation | Action Required from Owner |
| :--- | :--- | :--- |
| **Corporate Registration / Tax ID** | Kept unstated to avoid publishing unverified legal claims. | Provide official commercial registration number or tax ID if mandatory in your operating jurisdiction. |
| **Physical Office Address** | Intentionally omitted. MZEVOLVE operates modern remote and client-site engineering. | If a formal commercial headquarters lease is established, add it to `siteConfig.contact.location`. |
| **Social Media Profiles** | Linked to standard corporate placeholders (`github.com/mzevolve`, `linkedin.com/company/mzevolve`, `x.com/mzevolve`). | Provide live URLs once official corporate social accounts are created, or disable icons if not yet active. |
| **Privacy Policy Review** | Grounded to exact site behavior: zero ad tracking, localStorage theme preference, contact form processing, user data rights. | Have corporate legal counsel review `src/app/privacy/page.tsx` for your specific regional operational scope. |
| **Client Case Studies Authorization** | 4 honest internal technology demonstrations displayed (`/work`). Zero client case studies are fabricated. | When signed enterprise NDAs and client clearances permit, supply verified case studies for addition to the site. |

---

## 4. Pre-Launch Sign-Off Protocol

Once the items above have been completed:
1. Supply `RESEND_API_KEY` to production hosting environment variables.
2. Verify DNS propagation for `mzevolve.com`.
3. Submit a live test inquiry via `/contact` and confirm reception in `mzevolve2026@gmail.com`.
4. Test WhatsApp floating button on both desktop and mobile screens.
