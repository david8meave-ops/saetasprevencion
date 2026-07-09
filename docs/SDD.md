# Software Design Document (SDD) — Saetas Prevención Web

| | |
|---|---|
| **Project** | saeta-prevencion — corporate website + store + AI assistant |
| **Owner** | David Meave (david8meave@gmail.com) |
| **Production URL** | https://www.saetasprevencion.com |
| **Repository** | https://github.com/david8meave-ops/saetasprevencion |
| **Hosting** | Vercel (`david8meave-ops-projects/saeta-prevencion`) |
| **Document status** | v1.1 — 2026-07-04 (reflects `feature/tema-industrial`) |

---

## 1. Purpose & business goals

Saetas Prevención is an occupational health & safety (SYSO/SSO) consultancy operating in
**Bolivia and Costa Rica**. The website serves a **balanced mix of three pillars**, all
first-class:

1. **Lead generation** — contact form, WhatsApp CTAs, gated PDF downloads.
2. **Online store** — physical products, digital products, and pre-priced service packages.
3. **AI chatbot ("IA para SYSO")** — differentiator that answers safety-regulation
   questions and funnels users toward consulting engagements.

**Audience:** companies in Bolivia and Costa Rica needing SYSO compliance (Bolivia NTS-009,
RM 849/14, RM 0329/21, MTEPS; Costa Rica Ley 6727; ISO 45001). Site language: **Spanish
only** — no i18n planned.

---

## 2. Architecture

### 2.1 Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS 4; **Archivo** (headings) + **Inter** (body) via next/font |
| Animation | framer-motion — fade-in-once only; no infinite loops |
| Forms/validation | react-hook-form + zod |
| Email | Resend (`no-reply@saetasprevencion.com`, domain verified: DKIM/SPF/MX ✅) |
| AI | Anthropic API (`/api/chat`) |
| State | React Context (`CartContext`) — no external state library |
| Hosting/CI | Vercel; push to `main` → production, other branches → preview |

### 2.2 Design system (defined 2026-07-03, from industrial-B2B brand research)

Based on measured analysis of 3M, Honeywell, DuPont, Emerson, Danaher, Saint-Gobain,
IBNORCA (BO) and INTECO (CR). Reference layout: 3M (www.3m.co.cr).

| Token | Value | Use |
|---|---|---|
| Navy | `#16294F` | Headings, footer, utility bar, dark accents (from logo) |
| Green (primary) | `#006B52` | CTAs, links, icons — 4.9:1 contrast on white (from logo) |
| Green light | `#00C896` | Micro-accents/hovers on dark backgrounds only |
| Ink / muted | `#1A202C` / `#4A5568` | Body text |
| Canvas | `#FFFFFF` / `#F4F6F8` | Alternating section backgrounds |
| Yellow | `#F5C518` | **Only** "Pronto" chips (safety-signage nod) |

Rules: white/light canvas (dark only on footer); rectangular buttons (6–8px radius);
lucide line icons (no emojis); real industrial photography; visible form labels.
Official logo: `public/logo.webp` (circle arcs + cross + arced wordmark) on a white
circular badge when placed over dark backgrounds.

### 2.3 Routes & structure

```
src/app/
  page.tsx            # Landing: Hero (full-width photo banner) → Trabajos recientes
                      #   (article reel, mockups) → Servicios → Clientes reel → CTA band
  sobre-nosotros/     # Banner "Negocios seguros son negocios que perduran" +
                      #   Acerca de Saetas + Contáctanos info card (email/phones/map)
  contacto/           # Contact form (all "Solicitar asesoría" CTAs land here)
  descargables/       # "Próximamente" — gated PDF downloads
  tienda/             # "Próximamente" — store + cart + checkout stub
  ia-syso/            # "Próximamente" — SYSO chatbot UI
  api/contact/        # Form → Resend email
  api/chat/           # Chatbot → Anthropic API
src/components/
  layout/    Navbar (utility bar + white nav + CTA), Footer (Empresa/Secciones/Síguenos),
             FloatingActions (WhatsApp picker + 20s "asesoría urgente" nudge + scroll-top)
  sections/  Hero, ServiciosRecientes, Servicios, Clientes, CtaBand, AcercaDe,
             ContactoInfo, Contactanos, Descargables, TiendaEnLinea, IAparaSYSO
public/clientes/   # 44 real client logos (WebP ~120px; beacons.ai, official sites, FB/IG, owner files)
public/industria/  # 8 industrial photos (Unsplash placeholders — replace with own)
docs/SDD.md        # this document
```

### 2.4 Environments & secrets

`.env.local` (never committed) and Vercel env vars (Production + Preview):

| Variable | Status | Used by |
|---|---|---|
| `RESEND_API_KEY` | ✅ live (send-only key in Vercel) | `/api/contact` |
| `CONTACT_EMAIL` | ✅ `saetasprevencion@gmail.com` | `/api/contact` |
| `ANTHROPIC_API_KEY` | ⚠️ placeholder — chatbot broken until set | `/api/chat` |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ⚠️ placeholder — not needed until online payment | future checkout |
| `NOTION_API_KEY` / `NOTION_LEADS_DB_ID` | 🔜 to add (lead logging) | `/api/contact`, downloads |

### 2.5 Domains & email

- `www.saetasprevencion.com` — canonical (Vercel, SSL ✅); apex 308-redirects to www
- DNS at GoDaddy; Resend sending domain verified; mailbox `info@saetasprevencion.com`
  (GoDaddy/M365) is the public contact address shown on the site

### 2.6 Git workflow

**No direct pushes to `main`** (it auto-deploys to production). Every change goes on a
`feature/*` branch → Vercel preview → owner review → merge to `main`.

---

## 3. Feature inventory & decisions

Decisions confirmed with the owner (2026-07-03/04).

### 3.1 Landing page (3M-pattern)
- Full-width photo hero with overlay headline; **"Trabajos recientes"** article reel
  (9 real case studies at /casos/<slug>, 7 published + 2 hidden pending photos; anonymized clients, watermarked photos); 10 real services (from
  beacons.ai/saeta_); client-logo marquee (44 real clients, all with logos; owner-confirmed, #28 of the
  original 33 removed as unidentifiable); light-gray CTA band.
- "Acerca de" lives on `/sobre-nosotros` (not the landing), 3M-style.

### 3.2 Contact
- Form on its own page `/contacto`; all CTAs ("Solicitar asesoría") route there.
- WhatsApp numbers: Bolivia +591 60547193 / 75758622; Costa Rica +506 70844241 / 70387373 —
  shown on `/sobre-nosotros` info card and utility bar; **not** in the footer.
- Floating WhatsApp button with country picker; shows an animated
  "¿Necesitas asesoría urgente?" nudge 20s after page load.

### 3.3 Store (Tienda en Línea) — "Próximamente"
- Catalog: physical products, digital products, pre-priced service packages.
- **No online payment at launch**: checkout submits an order request; payment offline.
  PayPal (client ID provisioned) is Phase 4+.

### 3.4 Chatbot (IA para SYSO) — "Próximamente"
- Open to visitors with basic protections: per-IP rate limiting, message cap per
  conversation, cost-efficient (Haiku-class) model.

### 3.5 Leads
- Email **and** logged to a Notion "Leads" database (to build): contact form, download
  forms, chatbot handoffs.

### 3.6 Analytics
- **Vercel Analytics** (cookieless). GA4 ruled out; placeholder already removed.

### 3.7 Content management
- No CMS. Repo is the source of truth; owner edits via Claude Code + git (see README
  "Actualización de contenido" for file locations).

---

## 4. Phase plan

**V1 definition: "Content & credibility first"** — promote the site when content is
polished; store and chatbot may remain "Próximamente".

### Phase 0 — Infrastructure ✅ DONE (2026-07-03)
- [x] Vercel project + GitHub CI/CD; custom domain + SSL + apex→www redirect
- [x] Resend domain verified; contact form delivering end-to-end
- [x] Env vars in Vercel (Production + Preview)

### Phase 1 — V1 launch: content & credibility 🔶 IN PROGRESS
- [x] Official logo across the site
- [x] Industrial B2B design system (palette from logo, Archivo/Inter, light canvas)
- [x] 3M-style landing structure (hero banner, trabajos reel, servicios, clientes, CTA band)
- [x] "Clientes" marquee with 32 real client logos
- [x] Real services list (10, from owner's Beacons page)
- [x] `/sobre-nosotros` (banner + acerca + contact info card) and `/contacto` pages
- [x] Footer: Empresa / Secciones / Síguenos + physical address on about page
- [x] Bolivia · Costa Rica positioning (copy, metadata, sitemap)
- [ ] **Owner review of `feature/tema-industrial` preview → merge to `main`** ← current gate
- [ ] Replace Unsplash placeholders in `/public/industria/` with own photos
- [x] Real case-study articles for "Trabajos recientes" (9 written from owner interview; GEDESA + BBVA hidden until photos arrive)
- [ ] Instagram / LinkedIn profile URLs for the footer (currently `#`)
- [ ] `og-image.png` (referenced in metadata but missing — breaks social sharing)
- [ ] Vercel Analytics installed
- [x] Leads → Notion database "Saetas — Leads" (contact + download forms wired; awaiting owner NOTION_API_KEY to activate)

### Phase 2 — Chatbot goes live
- [ ] Real `ANTHROPIC_API_KEY` in `.env.local` + Vercel
- [ ] Cost-efficient model + per-IP rate limiting + message cap
- [ ] Remove "Próximamente" from `/ia-syso`

### Phase 3 — Store: order-request checkout
- [ ] Real catalog with photos and prices
- [ ] Checkout = order request: email + Notion log + WhatsApp handoff
- [ ] Remove "Próximamente" from `/tienda` and `/descargables`

### Phase 4+ — Backlog (not scheduled)
- PayPal online payment; digital product delivery; service scheduling/booking
- Additional payment methods (bank transfer, local QR)
- English version (explicitly out of scope for now)

---

## 5. Non-functional requirements

| Concern | Requirement |
|---|---|
| Performance | Static-first rendering; Lighthouse ≥ 90 mobile; images WebP, lazy, ≤120px logos |
| Accessibility | WCAG AA contrast (green `#006B52` on white = 4.9:1); visible form labels; scroll-margin under fixed header |
| Security | Secrets only in env vars; zod validation on API routes; chatbot rate-limited (Phase 2) |
| Cost | Vercel Hobby/Pro; Anthropic spend bounded by model + limits; Resend free tier |
| Maintainability | Single repo, no CMS/DB until Phase 3+; feature-branch workflow |

---

## 6. Open items / risks

1. **Merge gate:** `feature/logo-oficial` + `feature/tema-industrial` await business-owner
   approval; production still runs the previous dark theme.
2. **Chatbot publicly broken** until a real Anthropic key is configured (page is marked
   "Próximamente", mitigating).
3. **Repo is public** — no secrets inside, but consider flipping to private.
4. **Resend full-access key** may still be in `.env.local` — replace with a send-only key
   and delete the full-access key in the Resend dashboard.
5. **Cookie banner vs. actual cookies** — with GA4 gone and Vercel Analytics cookieless,
   review whether the banner is still needed.
6. **Unsplash placeholders** in hero/reels must be replaced with owned photography before
   heavy promotion (license permits use, but authenticity matters for credibility).
