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
| `src/lib/pricing.ts` | **Canonical price engine.** MARKET inputs, marginal elpris, formatters, `assertPriceModel()` |
| `src/lib/offers.ts` | The 7 elaftaler + campaign engine, `bestOfferFor(kwh)`, `assertOffers()` |
| `src/lib/config.ts` | SITE_CONFIG; re-exports the price constants from `pricing.ts` |
| `src/lib/types.ts` | ApplianceData, CalculatorConfig, FAQ, etc. |
| `src/lib/appliances.ts` | Barrel file — exports APPLIANCES, getAppliance(), getAllSlugs() |
| `src/lib/appliances-core.ts` | First 5 appliances: varmepumpe, opvaskemaskine, tv, koeleskab, toerretumbler |
| `src/lib/appliances-extra.ts` | Additional appliances (airfryer, kummefryser, etc.) |
| `src/lib/appliance-insights.ts` | Computed depth per appliance: region, season, replacement, standby, ranking |
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
| `ApplianceInsights` | The 5 computed sections that differentiate the page from the SERP |
| `AffiliateCta` | Contextual energy provider CTA |
| `RelatedAppliances` | Internal link grid |
| `Breadcrumb` | With BreadcrumbList data |
| `Header` / `Footer` | Site chrome |

### Reserved Slugs

These slugs are handled by their own routes (NOT the `[apparat]` dynamic route):
beregner, gennemsnitligt, husstand, varmepumpe, sparetips, om-os, kontakt, privatlivspolitik, go

### Adding a New Appliance

1. Add ApplianceData object to `appliances-extra.ts` (or a `phase*` file)
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
- **SEO titles** — `Main keyword (YEAR) → supporting text`. No brand suffix: `layout.tsx`
  sets `template: "%s"` deliberately. Write the year as a literal `(2026)` in the data
  and wrap the title in `withCurrentYear()` so it never goes stale.
- **Depth comes from computation, not prose.** `appliance-insights.ts` derives the
  region/season/replacement/standby/ranking sections from data the appliance already
  carries, so all 43 pages stay correct when MARKET changes. Sections hide themselves
  when the data does not support them. Two rules learned the hard way:
  never present a replacement saving as a discount off `typicalKwh` (the energy labels
  describe heavier use, so it can exceed the appliance's own cost — show both endpoints
  with their own kr./år instead), and check `usesEnergyClasses` before calling a label
  an "energimærke" — 17 appliances use descriptive labels like "Gaming/avanceret"
- **Electricity price** — import from `pricing.ts`, never type a price or a cost into prose.
  `EL_PRICE_KR_PER_KWH` (marginal, currently 1,86) is what appliances cost to run;
  `TYPICAL_ALL_IN_KR_PER_KWH` (1,95) includes abonnement and is the baseline for savings;
  `CHEAPEST_MARGINAL_KR_PER_KWH` (1,76) is the cheapest aftale before abonnement.
  Never compare a marginal price against an all-in one — that overstates savings.
  Petrol, diesel, public charging, gas and fjernvarme prices are NOT tied to the elpris.
- **Run `npm run audit-prices`** after touching any figure. Drift fails; a hardcoded
  but still-correct number warns. It also catches expired campaigns.
- **External links** — always `target="_blank" rel="noopener noreferrer nofollow"`
- **Affiliate links** — route through `/go/[slug]`, never expose raw tracking URLs

## Company Details

- **Company:** Elpriser.dk ApS (never "Mondo Media ApS" in user-facing text)
- **CVR:** 43489984
- **Address:** Hestehave 15, 6400 Sønderborg, Danmark
- **Email:** mail@elpriser.dk (the one contact address on the energy sites since 2026-09-25; hej@stroemforbrug.dk has no mailbox — the domain has no MX)
