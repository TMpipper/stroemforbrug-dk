@AGENTS.md

# CLAUDE.md — stroemforbrug.dk

## Project

**Strømforbrug.dk** — Danish electricity consumption information site. Exact-match domain authority on "strømforbrug" keywords. Fully static (no database). All content in TypeScript. Deployed to Vercel under `mondomedia` scope.

## Commands

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint
```

Deploy to Vercel:
```bash
vercel deploy --prod --yes --scope mondomedia
```

## Architecture

**Next.js 16** (App Router) + **React 19** + **TypeScript** (strict) + **Tailwind v4** (CSS-based theming via `@theme inline` in `globals.css`). **Vercel Analytics** enabled.

### Data Layer (all static — no DB)

| File | Purpose |
|------|---------|
| `src/lib/config.ts` | SITE_CONFIG, ELECTRICITY_PRICE_KR_PER_KWH, affiliate pricing |
| `src/lib/types.ts` | ApplianceData, CalculatorConfig, FAQ, etc. |
| `src/lib/appliances.ts` | Barrel file — exports APPLIANCES, getAppliance(), getAllSlugs() |
| `src/lib/appliances-core.ts` | First 5 appliances: varmepumpe, opvaskemaskine, tv, koeleskab, toerretumbler |
| `src/lib/appliances-extra.ts` | Additional appliances (airfryer, kummefryser, etc.) |
| `src/lib/schema.ts` | JSON-LD generators: breadcrumb, FAQ, article, howTo |

### Page Structure

- **Homepage** (`/`) — Pillar page with appliance ranking table, editorial content
- **Calculator** (`/beregner/`) — Central interactive strømberegner
- **Gennemsnitligt** (`/gennemsnitligt/`) — Average consumption hub
- **Husstand** (`/husstand/`) — Household consumption overview
- **Varmepumpe** (`/varmepumpe/`) — Dedicated hub (reserved slug, own page)
- **Appliance pages** (`/[apparat]/`) — Dynamic, from appliances data
- **Affiliate redirect** (`/go/[slug]`) — Tracking URL redirect
- **EEAT pages**: `/om-os/`, `/kontakt/`, `/privatlivspolitik/`

### Components

| Component | Purpose |
|-----------|---------|
| `ForbrugBeregner` | Interactive calculator (client component) |
| `QuickAnswer` | AEO-optimized answer box |
| `AffiliateCta` | Contextual energy provider CTA |
| `RelatedAppliances` | Internal link grid |
| `Breadcrumb` | With BreadcrumbList data |
| `Header` / `Footer` | Site chrome |

### Reserved Slugs

These slugs are handled by their own routes (NOT the `[apparat]` dynamic route):
beregner, gennemsnitligt, husstand, varmepumpe, sparetips, om-os, kontakt, privatlivspolitik, go

### Adding a New Appliance

1. Add ApplianceData object to `appliances-extra.ts`
2. Page auto-generates via `[apparat]/page.tsx`
3. Auto-added to sitemap via `getAllSlugs()`
4. Content should be 2,000+ words with tables, FAQ, calculator config
5. Always research competitor content and factual kWh data first

## Conventions

- **Danish language** — all UI and content
- **Trailing slashes** enabled in `next.config.ts`
- **Fonts** — Inter (body) + Space Grotesk (headings)
- **Colors** — Blue brand (#1e40af), Yellow accent (#eab308), CTA blue (#1d4ed8)
- **Import paths** — `@/` maps to `src/`
- **Next.js 16 async params** — `params: Promise<{ slug: string }>` — always `await params`
- **AEO format** — start every H2 with a 40-60 word direct answer paragraph
- **Electricity price** — use `ELECTRICITY_PRICE_KR_PER_KWH` (2.50) from config, never hardcode
- **External links** — always `target="_blank" rel="noopener noreferrer nofollow"`
- **Affiliate links** — route through `/go/[slug]`, never expose raw tracking URLs

## Company Details

- **Company:** Mondo Media ApS
- **CVR:** 43489984
- **Address:** Hestehave 15, 6400 Sønderborg, Danmark
- **Email:** hej@stroemforbrug.dk
