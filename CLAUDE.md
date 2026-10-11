@AGENTS.md

# CLAUDE.md — stroemforbrug.dk

## Project

**Strømforbrug.dk** — et site af **Elpriser.dk** (ejerens beslutning 2026-10-11): apparaternes strømforbrug, hvad det koster, og hvornår på
dagen det er billigst at bruge dem. Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind v4, ISR 300 s. Ingen database:
forbrugstallene er TypeScript, **hver pris kommer fra el-feed** (Elpriser.dk's feed) ved visningen. Vercel-projekt `stroemforbrug-dk`, scope
`mondomedia`, GitHub `TMpipper/stroemforbrug-dk`.

## Commands

```bash
npm run dev            # Dev server (Turbopack); .env.local skal have EL_FEED_URL
npm run build          # prebuild (audit-upstream, audit-feed, prices-updated) → next build → postbuild (alle HTML-audits)
npm run audit          # lint + alle audits inkl. audit-mobile (Playwright mod next start)
npm run deploy         # rm .next → vercel pull → vercel build --prod → npm run audit → vercel deploy --prebuilt --prod
npm run post-deploy    # indexnow
npm run feed-sync      # henter kontrakt/klient/regelsæt/marginalpris/widget fra ../el-feed (EL_FEED_DIR); UPSTREAM.json låser dem
npm run prices         # udskriver byggets priser fra feedet
```

**Deploy sker kun via CLI** (`vercel.json` har git-deploy slået fra) — lokalt med `npm run deploy` eller fra GitHub Actions
(`.github/workflows/deploy.yml`: ved push til main og hver morgen 05:30 UTC; kræver repo-hemmeligheden `VERCEL_TOKEN`).

## Familien (undtagelsen fra "sites linker aldrig til hinanden")

- Links til **elpriser.dk er tilladt og dofollow** — bomærke + »En del af Elpriser.dk« i header og footer (`brand/Logo.tsx`,
  `data-family-link`), `parentOrganization` i Organization-schemaet, Elpriser.dk's kort som iframe (`components/widget/ElpriserWidget`).
- Links til ALLE andre egne domæner (elselskab.dk, elselskaber.dk, billigste-elselskab.nu, tjekelregning.dk, elleverandoer.dk,
  elselskabdanmark.dk) er forbudt; `audit-claims` fejler på dem.
- Vinklen er forskellig fra Elpriser.dk's 36 apparatsider: her **forbrug + tidspunkt** ("Strømforbrug for en X: kWh, pris pr. gang og
  billigste tidspunkt"), dér pris pr. time og husstandens regning. H1'er må ikke spejle Elpriser.dk's "Hvor meget strøm bruger en X?".

## Data layer

| File | Purpose |
|------|---------|
| `src/lib/feed/{types,client,compare,marginal,site-adapter}.ts` | **Kopier fra el-feed** (`npm run feed-sync`, sha256 i `UPSTREAM.json`, `audit-upstream` i prebuild). Rettes ALDRIG her — ret i el-feed, deploy, sync. |
| `src/lib/prices.ts` | **Sitets prismotor.** `getPrices()` = marginalpris DK1/DK2 (fælles regel `marginalFromFeed`), billigste rene varige aftale + typisk aftale pr. landsdel med `scopeText`, `savingPerKwh` (marginal mod marginal — den eneste krydsning). `tokenPrices()`, `calculatorPrices()`, `calculatorDeal()`. |
| `src/lib/hourly-today.ts` | `getToday(region)`: dagens timepriser fra feedets `timepris` → billigste/dyreste 3-timers vindue, gennemsnit, i morgen. |
| `src/lib/tokens.ts` | `{{pris_kwh}}`, `{{kr 2000}}`, `{{kr 4000 /md}}`, `{{oere 0,1}}` … `renderWith(t, html)`; `wrapTables()`; ukendte tokens bliver stående, så audit-prices ser dem. |
| `src/lib/cost.ts`, `src/lib/format.ts` | kWh × pris med **prisen som påkrævet argument**; dansk formatering (`formatKr`, `formatPrice`, `kr`, `krPerKwh`, `danishDate`, `withCurrentYear`). |
| `src/lib/pages.ts` | `pageMeta(path)`: udgivet/gennemgået pr. side (`RELAUNCH` = 2026-10-11). `src/lib/prices-updated.ts` (genereret i prebuild) = feedets dataalder, vises kun i grundlagssætningen. |
| `src/lib/partners.ts` | de 7 selskaber med `/go/`-aftale. Aldrig grundlaget for "billigst". |
| `src/lib/appliances*.ts`, `appliance-insights.ts`, `home-insights.ts`, `sources.ts` | forbrugstal, afledte sektioner (pris som argument), husstande, verificerede kilder. |
| `src/lib/heavy-run.ts` | de apparater, der får Elpriser.dk's kort under tidspunkt-blokken. |

## Pages & components

- Kromme: `layout/{Header,MobileNav,DisclaimerBar,Footer,nav}`, `brand/Logo` — Elpriser.dk's, tilpasset. Én annonceoplysning (bjælken + dialog).
- Byggesten: `marketing/{PageHero,FaqBand,FaqList,WhoHowWhy,AuthorBox,Breadcrumb,Wave,EditorByline,SectionHeading}`, `ui/{Table,Callout,Chip,Badge,CheckList}`, `visuals/*` (kodetegnede motiver, `lib/visuals/defaults.ts`).
- Apparatside `[apparat]/page.tsx`: PageHero → QuickAnswer → nøgletal → `ForbrugBeregner` (priser som props, DK1/DK2) → `PriceBasis` →
  **`BestTimeToday`** (+ `ElpriserWidget` på de tunge) → prosa (`renderWith` + `wrapTables`) → `ApplianceInsights` → `SwitchCta` → tabeller
  → relaterede → `FaqBand` → `WhoHowWhy` (den ENE kildeliste) → `AuthorBox`.
- Nye sider 2026-10-11: `/elpriser/` (to kort + "hvad koster én gang i dag"), `/apparater/` (indeks), `/metode/`.
- `PriceBasis` står én gang på hver prisside: grundlagssætningen + `data-dk1/dk2/dk/...`, som `audit-prices` læser i den byggede HTML.

## Rules (fejler bygget)

- **Computed, never typed**: ingen "x,xx kr./kWh" eller kr.-beløb ved siden af et kWh-tal i kilden; tokens eller udtryk. OG-kort bærer ingen pris.
- Marginal (apparat) og all-in (regning) blandes aldrig; superlativer står med omfang i samme sætning; ingen "grøn strøm"; ingen "Kilde:"-linje i designet.
- Titler ≤ 60 tegn uden sitenavn og uden pris; beskrivelser 120–158. Danske køn: `articleFor()`/`possessiveFor()` (fem intetkønsord har `article: "et"`).
- Datoer: aldrig `new Date()` som dato; `pageMeta()` flyttes kun ved indholdsændring.
- Eksterne links `target="_blank" rel="noopener noreferrer nofollow"`; affiliate kun via `/go/[slug]`.
- Env-værdier sættes med `printf '%s'`, aldrig `echo`. `git fetch` før build.

## Company

Elpriser.dk ApS (aldrig "Mondo Media ApS" i brugerfladen), CVR 43489984, Hestehave 15, 6400 Sønderborg, mail@elpriser.dk.
