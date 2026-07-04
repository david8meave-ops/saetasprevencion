# Software Design Document (SDD) — Saetas Prevención Web

| | |
|---|---|
| **Project** | saeta-prevencion — corporate website + store + AI assistant |
| **Owner** | David Meave (david8meave@gmail.com) |
| **Production URL** | https://www.saetasprevencion.com |
| **Repository** | https://github.com/david8meave-ops/saetasprevencion |
| **Hosting** | Vercel (`david8meave-ops-projects/saeta-prevencion`) |
| **Document status** | v1.0 — 2026-07-03 |

---

## 1. Purpose & business goals

Saetas Prevención is an occupational health & safety (SYSO/SSO) consultancy operating in
**Bolivia, Costa Rica, and the wider LATAM region**. The website serves a **balanced mix of
three pillars**, all first-class:

1. **Lead generation** — contact form, WhatsApp CTAs, gated PDF downloads.
2. **Online store** — physical products, digital products, and pre-priced service packages.
3. **AI chatbot ("IA para SYSO")** — differentiator that answers LATAM safety-regulation
   questions and funnels users toward consulting engagements.

**Audience:** companies in LATAM needing SYSO compliance (Bolivia DS 2936, Costa Rica Ley 6727,
Colombia Decreto 1072, Perú Ley 29783, ISO 45001, etc.). Site language: **Spanish only** —
no i18n planned.

---

## 2. Architecture

### 2.1 Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui (base-ui), Framer Motion, lucide-react |
| Forms/validation | react-hook-form + zod |
| Email | Resend (`no-reply@saetasprevencion.com`, domain verified: DKIM/SPF/MX ✅) |
| AI | Anthropic API (`/api/chat`) |
| State | React Context (`CartContext`) — no external state library |
| Hosting/CI | Vercel; push to `main` → production, other branches → preview |

### 2.2 Structure (single page + API routes)

```
src/
  app/
    page.tsx              # single-page composition (all sections)
    layout.tsx            # metadata, fonts, CartProvider
    api/contact/route.ts  # contact form → Resend email
    api/chat/route.ts     # chatbot → Anthropic API
  components/
    layout/    Navbar, Footer, FloatingActions (WhatsApp)
    sections/  Hero, SobreNosotros, Servicios, Descargables,
               TiendaEnLinea, IAparaSYSO, Contactanos
    ui/        shadcn primitives + CartSidebar, CheckoutModal, CookieBanner
  context/CartContext.tsx
  lib/validations.ts (zod schemas), utils.ts
public/downloads/  # 6 gated lead-magnet PDFs
docs/SDD.md        # this document
```

### 2.3 Environments & secrets

`.env.local` (never committed) and Vercel env vars (Production + Preview):

| Variable | Status | Used by |
|---|---|---|
| `RESEND_API_KEY` | ✅ live (send-only key in Vercel) | `/api/contact` |
| `CONTACT_EMAIL` | ✅ `saetasprevencion@gmail.com` | `/api/contact` |
| `ANTHROPIC_API_KEY` | ⚠️ placeholder — chatbot broken until set | `/api/chat` |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ⚠️ placeholder — not needed for V1 (no online payment) | future checkout |
| `NOTION_API_KEY` / `NOTION_LEADS_DB_ID` | 🔜 to add (lead logging) | `/api/contact`, downloads |

### 2.4 Domains & email

- `www.saetasprevencion.com` — canonical (Vercel, SSL ✅)
- `saetasprevencion.com` — 308 redirect → www
- DNS at GoDaddy (A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com)
- Resend sending domain verified; GoDaddy/M365 mailbox `info@saetasprevencion.com` being
  provisioned (root-domain MX, no conflict with Resend's `send` subdomain)

---

## 3. Feature inventory & decisions

Decisions below were confirmed with the owner (2026-07-03).

### 3.1 Store (Tienda en Línea)
- **Catalog:** physical products (PPE/equipment), digital products (templates/courses),
  and pre-priced service packages (trainings, audits).
- **Payments at launch: none.** Checkout submits an **order request** (email to owner +
  optional WhatsApp handoff); payment is coordinated offline. PayPal (client ID already
  provisioned) and digital-file delivery are Phase 3+.
- Content (products, prices) lives **in code**; updates are made through Claude Code
  sessions — no CMS.

### 3.2 Chatbot (IA para SYSO)
- Open to visitors (no login) with **basic protections**:
  - per-IP rate limiting,
  - per-conversation message cap,
  - cost-efficient model (Haiku-class) instead of a premium model.
- System prompt: LATAM SYSO regulation expert; always answers in Spanish; refers users to
  Saetas Prevención contact channels.

### 3.3 Leads
- **Every lead is emailed AND logged to a Notion database** ("Leads"):
  - Contact form (already emails; Notion logging to add),
  - PDF download forms (currently data goes nowhere — must email + log),
  - Chatbot contact handoffs (future).

### 3.4 Analytics
- **Vercel Analytics** (`@vercel/analytics`) — privacy-friendly, no-cookie.
- GA4 placeholder in `layout.tsx` will be **removed**. Cookie banner retained pending a
  review of what actually requires consent.

### 3.5 Content management
- No CMS. Repo is the source of truth; owner edits via Claude Code + git push.

---

## 4. Phase plan

**V1 definition (owner decision): "Content & credibility first"** — the site is promoted to
clients when the content is polished and trustworthy; store and chatbot may remain labeled
beta.

### Phase 0 — Infrastructure ✅ DONE (2026-07-03)
- [x] Vercel project + GitHub CI/CD (`main` → production)
- [x] Custom domain + SSL + apex→www redirect
- [x] Resend domain verified; contact form delivering end-to-end
- [x] Env vars in Vercel (Production + Preview)

### Phase 1 — V1 launch: content & credibility 🔜 CURRENT
- [x] **"Clientes" section** — customer-logo marquee (design from owner's Lovable project):
      32 real client logos live, sourced from the owner's own showcase at beacons.ai/saeta_
      (owner confirmed the roster, removed one unclear entry). Logos normalized to 120px
      WebP in `/public/clientes/`. Pending nice-to-have: replace individual logos with
      higher-res official versions if clients supply them.
- [ ] Real content pass on every section (replace demo/placeholder copy)
- [ ] Real product/service photos (replace image placeholders)
- [ ] `og-image.png` (referenced in metadata but missing — breaks social sharing)
- [ ] Client references / testimonials / certifications in SobreNosotros
- [ ] SEO polish: per-section copy review, sitemap check, structured data (LocalBusiness)
- [ ] Vercel Analytics installed; GA4 placeholder removed
- [ ] Leads → Notion database (contact + download forms) with email notification for downloads
- [ ] Switch `CONTACT_EMAIL` to `info@saetasprevencion.com` once mailbox is live (optional)

### Phase 2 — Chatbot goes live
- [ ] Real `ANTHROPIC_API_KEY` in `.env.local` + Vercel
- [ ] Cost-efficient model + per-IP rate limiting + message cap per conversation
- [ ] "Beta" label removed once stable

### Phase 3 — Store: order-request checkout
- [ ] Real catalog (physical + digital + service packages) with photos and prices
- [ ] Checkout = order request: email to owner + Notion log + WhatsApp handoff
- [ ] Product type drives the form (shipping address only for physical, etc.)

### Phase 4+ — Backlog (not scheduled)
- PayPal online payment (client ID ready; integrate `@paypal/react-paypal-js`)
- Digital product delivery (auto email with download link after payment)
- Service scheduling/booking flow
- Additional payment methods (bank transfer instructions, local QR)
- English version (explicitly out of scope for now)

---

## 5. Non-functional requirements

| Concern | Requirement |
|---|---|
| Performance | Static-first rendering; keep Lighthouse ≥ 90 on mobile; Vercel Web Vitals monitored |
| Security | Secrets only in env vars; API routes validate input (zod); chatbot rate-limited; no PII stored beyond leads (Notion + email) |
| Cost | Vercel Hobby/Pro tier; Anthropic spend bounded by model choice + rate limits; Resend free tier (3k emails/mo) |
| Availability | Vercel-managed; no self-hosted infrastructure |
| Maintainability | Single repo, no CMS/DB until Phase 3+ requires it; changes flow through git |

---

## 6. Open items / risks

1. **Chatbot is publicly broken** until a real Anthropic key is configured (Phase 2).
2. **Repo is public** — no secrets inside, but consider flipping to private.
3. **Resend full-access key** currently in `.env.local` — replace with a send-only key and
   delete the full-access key in the Resend dashboard (hygiene).
4. **Cookie banner vs. actual cookies** — with GA4 removed and Vercel Analytics cookieless,
   review whether the banner is still needed.
5. **Test artifacts** — two test emails were sent during setup; the store still shows demo
   products until Phase 3.
