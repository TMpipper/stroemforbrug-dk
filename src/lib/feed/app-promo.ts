/**
 * Elpriser.dk-appen på søstersiderne — konfiguration, tekster og links i ét sted (19. okt. 2026).
 *
 * Ejerens beslutning 19. okt. 2026: alle energisites må promovere appen og linke til
 * https://elpriser.dk/app/ (almindeligt link, brandede ankre: »Om appen«, »Elpriser.dk-appen«,
 * »Læs mere om appen«). Ellers ingen nye links til elpriser.dk og aldrig mellem søstrene. På
 * pengesiderne står promoen kun UNDER sammenligningen (audit-app-promo).
 *
 * Teksterne er Elpriser.dk's egne (elpriser-dk src/components/app/promo.ts, 17. okt. 2026) — fælles
 * funktionel tekst, ens på alle sites. Reglerne: ingen tal, intet klokkeslæt, intet superlativ, aldrig
 * »uafhængig«/»uvildig«, aldrig widgets, mørkt tema, smart styring eller »dit forbrug«, Android kun
 * som »på vej«, før ANDROID_LIVE er sand. Gas kun bag GAS_LIVE.
 *
 * Målingen: `ct` på butikslinket (App Store Connect → Campaigns, ét token pr. site), /hent-app/?p=<site>
 * bag QR-koden (elpriser-dk tæller `app_redirect`), `app_click` på sitet (AppClickTracker) og
 * utm-parametrene på linket til /app/ (Elpriser.dk's Vercel Analytics).
 *
 * DENNE FIL ER EN KOPI (src/lib/feed/app-promo.ts på sitet). Ret den i el-feed.
 */

/** Appens App Store-id (App Store Connect, »Elpriser.dk«). */
export const APP_STORE_ID = "6819040731";
export const ANDROID_PACKAGE = "dk.elpriser.app";
/** iOS er i butikken (siden 5. okt. 2026). */
export const IOS_LIVE = true;
/** Google Play: sæt til true, når ejeren har trykket Udgiv — så viser alle sites Google Play-badget. */
export const ANDROID_LIVE = false;
/** Gasskærmen er i den udgave, alle kan hente (app 1.2). Indtil da falder konteksten `gas` tilbage til `generic`. */
export const GAS_LIVE = false;
/**
 * App Store Connect → Analytics → Campaigns → provider-token (ejeren, 19. okt. 2026). Ikke hemmeligt (det står i hvert
 * offentligt kampagnelink). null = butikslinket uden kampagne (virker, men tælles ikke pr. site).
 */
export const APP_STORE_PROVIDER_TOKEN: string | null = "129537019";

export const APP_PAGE_URL = "https://elpriser.dk/app/";
/** Appens side i den danske App Store (ejerens link, 19. okt. 2026). Butikslinks åbner altid i et nyt vindue. */
export const APP_STORE_URL = `https://apps.apple.com/dk/app/elpriser-dk/id${APP_STORE_ID}`;
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
/** Appens universal link — det, smart-banneret åbner i appen. */
const APP_LINK_URL = "https://elpriser.dk/app";
const SHORT_LINK = "https://elpriser.dk/hent-app/";
/** Billederne (synkroniseres af feed-sync fra examples/site/public/app-promo/). */
export const ASSET_BASE = "/app-promo";

/** Sitets nøgle — samme navn som elpriser-dk's QR_PLACEMENTS-nøgle og `web-<nøgle>`-tokenet. */
export type AppPromoSiteKey = "elselskaber" | "elselskab" | "billigste" | "stroemforbrug" | "elselskabdk" | "elleverandoer" | "tjekelregning";

/** Sitets egen lille fil `src/lib/app-promo-site.ts` eksporterer `APP_PROMO_SITE` af denne type. */
export interface AppPromoSite {
  key: AppPromoSiteKey;
  /** Domænet uden www, fx "elselskaber.dk" — utm_source på linket til /app/. */
  domain: string;
  /** Sitets egen app-side, fx "/elpris-app/" — til footeren og striben. */
  appPage?: string;
}

export const SITE_KEYS: readonly AppPromoSiteKey[] = ["elselskaber", "elselskab", "billigste", "stroemforbrug", "elselskabdk", "elleverandoer", "tjekelregning"];

/** Kampagnetokenet i App Store Connect (≤ 30 tegn): ét pr. site. */
export function campaignToken(site: AppPromoSiteKey): string {
  return `web-${site}`;
}

/** Butikkens produktside med sitets kampagnetoken, når provider-tokenet findes; ellers det rene link. */
export function storeUrl(site: AppPromoSiteKey, providerToken: string | null = APP_STORE_PROVIDER_TOKEN): string {
  if (!providerToken) return APP_STORE_URL;
  // Ejerens link med kampagnen som parametre — App Store Connect tæller pt/ct på enhver apps.apple.com-adresse.
  return `${APP_STORE_URL}?pt=${encodeURIComponent(providerToken)}&ct=${campaignToken(site)}&mt=8`;
}

/** Det korte link bag QR-koden: elpriser.dk tæller scanningen og sender videre til butikken med sitets token. */
export function qrUrl(site: AppPromoSiteKey): string {
  return `${SHORT_LINK}?p=${site}`;
}

/** Linket til /app/ på Elpriser.dk — utm, så Elpriser.dk's analytics ser site og placering. Aldrig `ref=` (influencerkoden). */
export function appPageUrl(site: Pick<AppPromoSite, "domain">, placement: string): string {
  const q = new URLSearchParams({ utm_source: site.domain, utm_medium: "app-promo", utm_campaign: placement });
  return `${APP_PAGE_URL}?${q.toString()}`;
}

/** Safaris smart-banner (`<meta name="apple-itunes-app">`): appen åbnes på I dag med `from=web-<site>` (appens install_ref). */
export function smartBannerContent(site: AppPromoSiteKey, providerToken: string | null = APP_STORE_PROVIDER_TOKEN): string {
  const affiliate = providerToken ? `, affiliate-data=pt=${encodeURIComponent(providerToken)}&ct=${campaignToken(site)}` : "";
  return `app-id=${APP_STORE_ID}${affiliate}, app-argument=${APP_LINK_URL}?from=${campaignToken(site)}`;
}

/** Hvad et klik på et `[data-app-cta]`-element ramte — til `app_click`. */
export function appClickTarget(href: string | null, kind: string, origin: string): string {
  if (!href) return kind;
  try {
    const url = new URL(href, origin);
    if (url.hostname === "apps.apple.com") return "appstore";
    if (url.hostname === "play.google.com") return "playstore";
    if (url.hostname === "elpriser.dk" && /^\/hent-app\/?$/.test(url.pathname)) return "hent-app";
    if (url.hostname === "elpriser.dk" && /^\/app(\/|$)/.test(url.pathname)) return "elpriser-app-page";
    if (url.origin === new URL(origin).origin) return "site-app-page";
  } catch {
    /* ugyldigt href — måles som det, attributten siger */
  }
  return kind;
}

// ── Teksterne ────────────────────────────────────────────────────────────────────────────────

export type AppPromoContext = "generic" | "price-now" | "tomorrow" | "cheapest-hours" | "compare" | "alarm" | "city" | "gas";

export interface PromoCopy {
  heading: string;
  line: string;
  bullets: readonly [string, string, string];
  /** Den ene linje i striben øverst på siden. */
  strip: string;
}

export const PROMO_EYEBROW = "Elpriser.dk-appen";
export const PROMO_SUBHEADING = "Med appen kan du";
export const PROMO_BUTTON = "Hent appen";
export const PROMO_SECONDARY = "Om appen";
export const PROMO_TRUST = "Gratis, uden reklamer og uden konto.";
export const PROMO_ANDROID = "Android-udgaven er på vej.";
export const PROMO_QR_TITLE = "Scan med din telefon";
export const PROMO_QR_TEXT = "Koden åbner App Store på telefonen.";
export const PROMO_LIVE_LABEL = "Lige nu i appen";

const PLACE = "{placePhrase}";

/** Elpriser.dk's matrix ordret — undtagen `price-now`, hvis linje dér siger »den samme pris som siden her«. */
export const PROMO: Record<AppPromoContext, PromoCopy> = {
  generic: {
    heading: "Hold øje med dine strømpriser",
    line: "Vidste du, at du kan holde øje med elpriserne kvit og frit i Elpriser.dk-appen?",
    bullets: [
      "se den rigtige elpris for dit postnummer – time for time og kvarter for kvarter, alt inklusive",
      "få besked, når morgendagens priser er klar, og en påmindelse før dagens billigste timer",
      "sammenligne hele elmarkedet sorteret efter din pris",
    ],
    strip: "Prisen lige nu, morgendagens kvarterer og en prisalarm for dit postnummer – gratis og uden reklamer.",
  },
  "price-now": {
    heading: "Elprisen lige nu – i lommen",
    line: "Appen samler spotpris, nettarif, Energinets tariffer, elafgift og moms i én pris for dit postnummer.",
    bullets: [
      "se prisen lige nu og døgnets billigste og dyreste timer",
      "skifte mellem time og kvarter med ét tryk",
      "få en morgenbesked med dagens priser, hvis du vil",
    ],
    strip: "Elprisen lige nu og kvarter for kvarter for dit postnummer – i lommen. Gratis og uden reklamer.",
  },
  tomorrow: {
    heading: "Få besked, når morgendagens priser er klar",
    line: "Morgendagens priser kommer først om eftermiddagen – appen siger til, så snart de er ude for dit postnummer, så du kan planlægge aftenen og natten.",
    bullets: [
      "få en besked, når morgendagens priser er offentliggjort",
      "se morgendagen kvarter for kvarter for dit eget netområde",
      "få en påmindelse, før dagens billigste timer begynder",
    ],
    strip: "Få besked, så snart morgendagens priser er ude for dit postnummer. Gratis og uden reklamer.",
  },
  "cheapest-hours": {
    heading: "De billigste timer – uden at kigge efter dem",
    line: "Appen finder døgnets billigste timer for dit postnummer og minder dig om dem, før de begynder.",
    bullets: [
      "se døgnets billigste og dyreste timer for dit eget netområde",
      "få en påmindelse, før de billigste timer begynder",
      "sætte en prisalarm ved den grænse, du selv vælger",
    ],
    strip: "Døgnets billigste timer for dit postnummer – og en påmindelse, før de begynder. Gratis og uden reklamer.",
  },
  compare: {
    heading: "Hele elmarkedet – sorteret efter din pris",
    line: "Under Sammenlign i appen står alle elaftaler for dit netområde efter, hvad de ville koste dig – også dem, appen ikke tjener på.",
    bullets: [
      "sammenligne hele elmarkedet for dit postnummer",
      "se hele regningen med tillæg og abonnement, ikke kun spotprisen",
      "følge elprisen time for time, når du har skiftet",
    ],
    strip: "Hele elmarkedet for dit postnummer, sorteret efter din pris – i lommen. Gratis og uden reklamer.",
  },
  alarm: {
    heading: "Prisalarm ved din egen grænse",
    line: "Sæt en grænse i appen, og få besked, når elprisen falder under den.",
    bullets: [
      "sætte en prisalarm ved den grænse, du selv vælger",
      "få en morgenbesked med dagens billigste og dyreste timer",
      "slå hver besked til og fra, som du vil",
    ],
    strip: "En prisalarm ved din egen grænse og en morgenbesked med dagens priser. Gratis og uden reklamer.",
  },
  city: {
    heading: `Elprisen ${PLACE} – i lommen`,
    line: `Appen regner med dit netselskabs tarif, så prisen passer til din adresse ${PLACE} – ikke kun landsdelen.`,
    bullets: [
      "se prisen lige nu for dit postnummer – alt inklusive",
      "få besked, når morgendagens priser er klar",
      "sammenligne elaftalerne for dit netområde efter din pris",
    ],
    strip: `Prisen ${PLACE} med dit netselskabs tarif – lige nu og i morgen. Gratis og uden reklamer.`,
  },
  gas: {
    heading: "Gasprisen i lommen – hver måned",
    line: "Appen viser den laveste samlede gaspris for de varige gasaftaler og siger til, når næste måneds pris kan regnes, og når engrosprisen flytter sig.",
    bullets: [
      "se den laveste samlede gaspris pr. m³ og pr. kWh for de varige gasaftaler",
      "få besked, når næste måneds gaspris kan regnes af månedens gasdage",
      "få en alarm, når engrosprisen stiger eller falder mere, end du vil have",
    ],
    strip: "Næste måneds gaspris og en alarm, når engrosprisen flytter sig – i lommen. Gratis og uden reklamer.",
  },
};

export type ScreenKey = "postnummer" | "pris-nu" | "kvarter" | "sammenlign" | "alarmer";

/** Skærmbillederne (1080 × 2341) — aldrig »forbrug« (ejerens markedsføringsport). */
export const SCREENS: Record<ScreenKey, { src: string; alt: string }> = {
  postnummer: { src: `${ASSET_BASE}/screens/01-onboarding.png`, alt: "Skærmbillede af appens første skærm, hvor postnummeret indtastes" },
  "pris-nu": { src: `${ASSET_BASE}/screens/02-i-dag.png`, alt: "Skærmbillede af appens I dag-skærm med prisen lige nu og døgnets graf" },
  kvarter: { src: `${ASSET_BASE}/screens/03-kvarter.png`, alt: "Skærmbillede af døgnets graf i kvartersopløsning" },
  sammenlign: { src: `${ASSET_BASE}/screens/05-sammenlign.png`, alt: "Skærmbillede af appens Sammenlign-skærm med elaftaler sorteret efter pris" },
  alarmer: { src: `${ASSET_BASE}/screens/06-alarmer.png`, alt: "Skærmbillede af appens Alarmer-skærm med beskedvalg og prisgrænse" },
};
export const SCREEN_WIDTH = 1080;
export const SCREEN_HEIGHT = 2341;

export const PROMO_SCREENS: Record<AppPromoContext, readonly [ScreenKey, ScreenKey]> = {
  generic: ["pris-nu", "alarmer"],
  "price-now": ["pris-nu", "kvarter"],
  tomorrow: ["pris-nu", "alarmer"],
  "cheapest-hours": ["pris-nu", "alarmer"],
  compare: ["sammenlign", "pris-nu"],
  alarm: ["alarmer", "pris-nu"],
  city: ["postnummer", "pris-nu"],
  gas: ["pris-nu", "alarmer"],
};

export function effectiveContext(ctx: AppPromoContext): AppPromoContext {
  return ctx === "gas" && !GAS_LIVE ? "generic" : ctx;
}

/** Teksterne med stedet sat ind (»i Aarhus«, »på Fyn«); uden et sted står der »for dit postnummer«. */
export function promoCopy(ctx: AppPromoContext, vars: { placePhrase?: string } = {}): PromoCopy {
  const place = vars.placePhrase ?? "for dit postnummer";
  const c = PROMO[effectiveContext(ctx)];
  const fill = (s: string) => s.split(PLACE).join(place);
  return { heading: fill(c.heading), line: fill(c.line), bullets: [fill(c.bullets[0]), fill(c.bullets[1]), fill(c.bullets[2])], strip: fill(c.strip) };
}

/** Skal striben/båndet sige »på vej« om Android? */
export const ANDROID_NOTE: string | null = ANDROID_LIVE ? null : PROMO_ANDROID;
