# MZEVOLVE Official Website — Production Deployment Guide

This guide provides step-by-step instructions for deploying the official MZEVOLVE corporate website to production hosting environments.

---

## 1. Prerequisites & System Requirements

- **Node.js**: v20.x or v22.x LTS (tested on Node v22.17.0)
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`
- **Build Output**: Next.js App Router (Turbopack optimized)
- **Domain**: `mzevolve.com` (configured with DNS records)

---

## 2. Option A: Deployment on Vercel (Recommended)

Vercel provides native edge caching, automatic SSL, and zero-configuration Next.js App Router optimization.

### Step 1: Connect Git Repository
1. Push your repository to your organization's GitHub / GitLab / Bitbucket account:
   ```bash
   git add .
   git commit -m "feat: complete MZEVOLVE corporate website implementation"
   git remote add origin https://github.com/your-org/mzevolve.git
   git push -u origin main
   ```

2. Log in to [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import the `mzevolve` repository.

### Step 2: Configure Build Settings
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 3: Set Environment Variables
In the Vercel project settings under **Environment Variables**, add:
- `NEXT_PUBLIC_SITE_URL`: `https://mzevolve.com` (or your staging/preview URL)
- `NEXT_PUBLIC_CONTACT_EMAIL`: `mzevolve2026@gmail.com`
- `NEXT_PUBLIC_INQUIRIES_EMAIL`: `mzevolve2026@gmail.com`
- `RESEND_API_KEY`: *(Optional in dev, required in production for automated email forwarding to `mzevolve2026@gmail.com`)*
- `RESEND_FROM_EMAIL`: `MZEVOLVE Inquiries <onboarding@resend.dev>` (or custom verified domain sender)

### Step 4: Configure Custom Domain & DNS
1. Navigate to **Project Settings > Domains**.
2. Add `mzevolve.com` and `www.mzevolve.com`.
3. In your DNS provider (Cloudflare, Namecheap, Route 53, etc.), configure:
   - **Apex Record (@)**: `A` record pointing to `76.76.21.21`
   - **Subdomain (www)**: `CNAME` record pointing to `cname.vercel-dns.com`
4. Automatic TLS certificates will provision within 5–15 minutes.

---

## 3. Option B: Self-Hosted Container Deployment (Docker & Linux VPS)

For enterprise on-premise deployments or dedicated Linux VPS (Ubuntu 22.04 / 24.04).

### Step 1: Create Dockerfile (if containerizing)
```dockerfile
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]
```

### Step 2: Build and Run Container
```bash
docker build -t mzevolve-web .
docker run -d -p 3000:3000 --name mzevolve-prod --restart always \
  -e NEXT_PUBLIC_SITE_URL="https://mzevolve.com" \
  -e NEXT_PUBLIC_CONTACT_EMAIL="mzevolve2026@gmail.com" \
  -e RESEND_API_KEY="your-resend-key-here" \
  mzevolve-web
```

### Step 3: Nginx Reverse Proxy with Let's Encrypt SSL
```nginx
server {
    server_name mzevolve.com www.mzevolve.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Run certbot for SSL:
```bash
sudo certbot --nginx -d mzevolve.com -d www.mzevolve.com
```

---

## 4. Post-Deployment Verification Checklist

Upon deploying to production:
1. Verify `https://mzevolve.com` loads with HTTPS lock icon.
2. Confirm both Dark Mode (default charcoal `#171B1A`) and Light Mode toggle smoothly.
3. Test all 8 service detail pages:
   - `/services/ai-solutions-llm-applications`
   - `/services/rag-knowledge-assistants`
   - `/services/ai-agents-workflow-automation`
   - `/services/websites-business-applications`
   - `/services/data-science-predictive-analytics`
   - `/services/ecommerce-solutions`
   - `/services/real-estate-technology`
   - `/services/education-technology`
4. Submit a test inquiry on `/contact` and confirm:
   - Client-side validation catches empty fields.
   - Server-side validation assigns a unique inquiry ID (e.g. `MZ-XXXXXXXX`).
   - If `RESEND_API_KEY` is configured, notification email arrives at `mzevolve2026@gmail.com`.
   - If email is not yet configured, form gracefully provides honest fallback directing client to `mzevolve2026@gmail.com` or WhatsApp.
5. Verify Clickable Channels:
   - All email links open `mailto:mzevolve2026@gmail.com`.
   - Phone link triggers dialing `tel:+201069216994` (displayed as `01069216994`).
   - WhatsApp buttons and floating widget open `https://wa.me/201069216994`.
6. Check `https://mzevolve.com/robots.txt` and `https://mzevolve.com/sitemap.xml`.
