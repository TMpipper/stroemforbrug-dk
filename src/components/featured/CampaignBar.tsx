// Fælles komponent fra el-feed (examples/site/components/featured/) — ret den dér, ikke her.
import type { CSSProperties } from "react";
import { elFeed } from "@/lib/feed/client";
import { campaignBarData, campaignBarText, danishToday, type CampaignBarData } from "./campaign-bar";

/**
 * Bjælkens farver som CSS-variabler: sitet kan sætte `--campaign-bar-bg`, `--campaign-bar-fg` og
 * `--campaign-bar-tag-bg` i sin globals.css; ellers følger den app-promoens alias-blok
 * (`--app-promo-ink`), som hvert søstersite allerede har sat til sine egne tokens.
 */
const VARS = {
  "--cb-bg": "var(--campaign-bar-bg, var(--app-promo-ink, #0B2A4A))",
  "--cb-fg": "var(--campaign-bar-fg, #FFFFFF)",
  "--cb-tag-bg": "var(--campaign-bar-tag-bg, rgba(255, 255, 255, 0.16))",
  background: "var(--cb-bg)",
  color: "var(--cb-fg)",
} as CSSProperties;

interface Props {
  /** Selskabet, hvis fremhævede plads bærer kampagnen. */
  supplierSlug?: string;
  /** Sitets /go/-sti for selskabet (med eller uden afsluttende skråstreg, som sitet bruger). */
  goPath?: string;
  /** Placeringen, som redirectoren stempler (`pl`). */
  placement?: string;
  /** Netområdet, pladsen slås op i. Kampagnen hører til pladsen, ikke området. */
  area?: string;
  /**
   * Et sekundært, redaktionelt link efter annoncen (fx sitets oversigt over alle kampagnetilbud). Det er
   * ikke en del af annoncen: almindeligt internt link uden `sponsored`.
   */
  more?: { href: string; label: string };
}

/**
 * Kampagnebjælken: én smal linje i fuld bredde øverst på hver side, over headeren — KUN mens
 * feedets fremhævede plads har en aktiv kampagne (`item.campaign`), og pladsens aftale har en
 * velkomstrabat. Ellers tegnes intet (ingen tom boks, intet layoutskift).
 *
 * Serverkomponent: feedets svar ligger i sitets cache under `el-feed:featured`/`el-feed`, og feedet
 * sender `el-feed` lige efter dansk midnat (job day-refresh). Så dukker bjælken op natten til
 * kampagnens første dag og forsvinder natten efter den sidste — uden en bygning.
 *
 * Beløb (`firstTimeDiscountKr`) og frist (`prices.validTo`) er rækkens egne; teksten her har
 * ingen tal. Mærket »Annonce« står først, linket er `rel="sponsored nofollow"`. Kan feedet ikke
 * nås, tegnes intet — en annonce må aldrig vælte siden.
 */
export default async function CampaignBar({ supplierSlug = "ok", goPath, placement = "bar", area = "791", more }: Props) {
  let data: CampaignBarData | null = null;
  try {
    data = campaignBarData(await elFeed.featured({ area }), supplierSlug, danishToday());
  } catch {
    return null;
  }
  if (!data) return null;
  return <CampaignBarView data={data} href={`${goPath ?? `/go/${supplierSlug}/`}?pl=${encodeURIComponent(placement)}`} more={more} />;
}

/** Selve bjælken — ren gengivelse af `data`, så den kan testes uden feedet. */
export function CampaignBarView({ data, href, more }: { data: CampaignBarData; href: string; more?: { href: string; label: string } }) {
  const ad = (
    <a
      href={href}
      rel="sponsored nofollow"
      className="mx-auto flex min-h-11 w-full max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 text-center text-[13px] leading-snug no-underline hover:underline focus-visible:outline-2 focus-visible:-outline-offset-4 sm:text-sm"
      style={{ color: "var(--cb-fg)" }}
    >
      <span className="rounded-sm px-1.5 py-px text-[11px] font-semibold tracking-wide" style={{ background: "var(--cb-tag-bg)" }}>
        Annonce
      </span>
      <span aria-hidden="true">·</span>
      <span>{campaignBarText(data)}</span>
      <span aria-hidden="true">·</span>
      <span className="font-semibold underline underline-offset-2">
        Se tilbuddet <span aria-hidden="true">→</span>
      </span>
    </a>
  );
  return (
    <aside aria-label="Annonce" data-campaign-bar="" data-valid-to={data.validTo} style={VARS} className="relative w-full">
      {more ? (
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-3 px-0 sm:flex-nowrap">
          {ad}
          <a
            href={more.href}
            data-campaign-bar-more=""
            className="inline-flex min-h-8 shrink-0 items-center px-4 pb-2 sm:min-h-11 text-[13px] leading-snug font-semibold underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:-outline-offset-4 sm:py-2 sm:text-sm"
            style={{ color: "var(--cb-fg)" }}
          >
            {more.label}
          </a>
        </div>
      ) : (
        ad
      )}
    </aside>
  );
}
