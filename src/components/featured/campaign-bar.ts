// Fælles komponent fra el-feed (examples/site/components/featured/) — ret den dér, ikke her.
import type { FeedFeaturedResponse } from "@/lib/feed/types";

/**
 * Kampagnebjælken øverst på hver side (CampaignBar.tsx) — reglerne, uden JSX, så de kan testes.
 *
 * Bjælken står KUN, når feedets fremhævede plads for selskabet har en aktiv kampagne
 * (`item.campaign`, som feedet kun sender på kampagnens danske datoer) OG pladsens aftale har en
 * velkomstrabat med en frist, der ikke er passeret. Beløb og frist er rækkens egne
 * (`firstTimeDiscountKr`, `prices.validTo`); kampagnens navn er pladsens (`campaign.label`).
 * Ingen af dem står i denne fil — der må ikke stå et ciffer i teksterne her.
 */
export interface CampaignBarData {
  /** Kampagnens navn fra feedets plads, fx »Black Week«. */
  label: string;
  supplierName: string;
  /** »600 kr.« — rækkens velkomstrabat, formateret på dansk. */
  amount: string;
  /** »søndag 29. november« — rækkens frist med ugedag, regnet af datoen. */
  deadline: string;
  /** Rækkens frist, ÅÅÅÅ-MM-DD (til test og data-attribut). */
  validTo: string;
  /** Kampagnens vilkårslinje fra feedets plads (uden beløb) — eller null. */
  terms: string | null;
  /** Selskabets logo fra feedet — eller null. */
  logoUrl: string | null;
}

/** I dag i dansk tid, ÅÅÅÅ-MM-DD. */
export function danishToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Copenhagen", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

const KR = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 0 });

/** »søndag 29. november« for en ÅÅÅÅ-MM-DD-dato (ugedagen regnes, aldrig skrevet). */
export function deadlineLabel(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("da-DK", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
}

/**
 * Bjælkens data, eller null. `today` er den danske dato ved renderingen: et svar i sitets cache
 * fra en anden dag (hvis midnatsbeskeden gik tabt) kan aldrig vise en kampagne uden for dens dage.
 */
export function campaignBarData(
  featured: Pick<FeedFeaturedResponse, "items"> | null | undefined,
  supplierSlug: string,
  today: string,
): CampaignBarData | null {
  const item = featured?.items.find((i) => i.product.supplier.slug === supplierSlug);
  const c = item?.campaign;
  if (!item || !c) return null;
  if (today < c.startsOn || today > c.endsOn) return null;
  const p = item.product;
  const validTo = p.prices.validTo;
  if (!(p.firstTimeDiscountKr > 0) || !validTo || validTo < today) return null;
  return {
    label: c.label,
    supplierName: p.supplier.name,
    amount: `${KR.format(p.firstTimeDiscountKr)} kr.`,
    deadline: deadlineLabel(validTo),
    validTo,
    terms: c.terms ?? null,
    logoUrl: p.supplier.logoUrl ?? null,
  };
}

/** Bjælkens tekst uden »Annonce« og knap: »Black Week: 600 kr. i velkomstrabat hos OK – til og med søndag 29. november«. */
export function campaignBarText(d: CampaignBarData): string {
  return `${d.label}: ${d.amount} i velkomstrabat hos ${d.supplierName} – til og med ${d.deadline}`;
}

/** »29. nov.« for en ÅÅÅÅ-MM-DD-dato — kortets korte frist. */
export function shortDateLabel(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("da-DK", { day: "numeric", month: "short", timeZone: "UTC" });
}

/**
 * Artikelkortets (CampaignArticleCard.tsx) linjer — alle regnet af `data`: »Black Week · Kun til 29. nov.«
 * (vises med store bogstaver via CSS), »i velkomstrabat, når du skifter til OK«.
 */
export function campaignCardTexts(d: CampaignBarData): { eyebrow: string; line: string } {
  return {
    eyebrow: `${d.label} · Kun til ${shortDateLabel(d.validTo)}`,
    line: `i velkomstrabat, når du skifter til ${d.supplierName}`,
  };
}

/** Kortets annonceoplysning under knappen: »<Site> får provision, hvis du skifter via linket.« */
export function campaignCardDisclosure(siteName: string): string {
  return `${siteName} får provision, hvis du skifter via linket.`;
}

/** Under så mange ord i brødteksten står kortet kun én gang (efter indledningen) — aldrig to gange tæt efter hinanden. */
export const CAMPAIGN_END_CARD_MIN_WORDS = 600;

/** Ord i en tekst eller i html (tags og entiteter tælles ikke). */
export function articleWordCount(textOrHtml: string | null | undefined): number {
  if (!textOrHtml) return 0;
  const text = textOrHtml.replace(/<[^>]*>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}
