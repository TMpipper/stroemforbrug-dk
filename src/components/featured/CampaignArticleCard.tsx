// Fælles komponent fra el-feed (examples/site/components/featured/) — ret den dér, ikke her.
import type { CSSProperties } from "react";
import { elFeed } from "@/lib/feed/client";
import {
  CAMPAIGN_END_CARD_MIN_WORDS,
  campaignBarData,
  campaignCardDisclosure,
  campaignCardTexts,
  danishToday,
  type CampaignBarData,
} from "./campaign-bar";

interface Props {
  /** Sitets navn i annonceoplysningen: »Elpriser.dk får provision, hvis du skifter via linket.« */
  siteName: string;
  /** Sitets /go/-sti for selskabet (med eller uden afsluttende skråstreg, som sitet bruger). */
  goPath?: string;
  /** Placeringen, som redirectoren stempler (`pl`): "article" (efter indledningen) eller "article-end". */
  placement?: string;
  /**
   * Brødtekstens ord. Kortet i slutningen (`placement="article-end"`) tegnes ikke på en kort side
   * (under CAMPAIGN_END_CARD_MIN_WORDS), så det aldrig står to gange tæt efter hinanden.
   */
  bodyWords?: number;
  /** Sitets egen kopi af logoet (fx "/logos/ok.png"); ellers feedets. */
  logoSrc?: string;
  /**
   * Kun annonceoplysningen under knappen (én kort linje), uden kampagnens vilkårslinje — til et site,
   * der ikke vil have oplysningsbokse i brødteksten (Elpriser.dk). Fristen står stadig over beløbet.
   */
  compact?: boolean;
  /**
   * Klasse til en omsluttende <div> (fx sitets tekstspalte "container-text"), når kortet står uden for
   * artiklens spalte. Omslaget tegnes kun sammen med kortet — aldrig en tom boks.
   */
  wrapperClassName?: string;
  /** Selskabet, hvis fremhævede plads bærer kampagnen. */
  supplierSlug?: string;
  /** Netområdet, pladsen slås op i. Kampagnen hører til pladsen, ikke området. */
  area?: string;
}

/**
 * Kampagnekortet i artiklerne: et sort annoncekort med selskabets logo, »Annonce«, kampagnen og
 * fristen, velkomstrabatten i stort, én hvid knap og vilkårene —
 * KUN mens feedets fremhævede plads har en aktiv kampagne (samme data og regler som CampaignBar).
 * Ellers tegnes intet: ingen tom boks, intet layoutskift.
 *
 * Serverkomponent: feedets svar ligger i sitets cache under `el-feed:featured`/`el-feed`, og feedet
 * revaliderer `el-feed` lige efter dansk midnat (job day-refresh) — kortet dukker op natten til
 * kampagnens første dag og forsvinder natten efter den sidste uden en bygning. `danishToday()` ved
 * renderingen afviser et gammelt svar uden for kampagnens dage.
 *
 * Farverne er faste (annoncefladen følger ikke sitets tema). Kun hjørnerne kan sættes af sitet med
 * `--campaign-card-radius` (fx 0 på et site uden runde hjørner). Beløb, frist, navn og vilkår er
 * feedets; filen har ingen tal.
 */
export default async function CampaignArticleCard({
  siteName,
  goPath,
  placement = "article",
  bodyWords,
  logoSrc,
  compact = false,
  wrapperClassName,
  supplierSlug = "ok",
  area = "791",
}: Props) {
  if (placement === "article-end" && bodyWords !== undefined && bodyWords < CAMPAIGN_END_CARD_MIN_WORDS) return null;
  let data: CampaignBarData | null = null;
  try {
    data = campaignBarData(await elFeed.featured({ area }), supplierSlug, danishToday());
  } catch {
    return null;
  }
  if (!data) return null;
  const href = `${goPath ?? `/go/${supplierSlug}/`}?pl=${encodeURIComponent(placement)}`;
  return <CampaignArticleCardView data={data} href={href} siteName={siteName} logoSrc={logoSrc} placement={placement} compact={compact} wrapperClassName={wrapperClassName} />;
}

const CARD: CSSProperties = {
  background: "radial-gradient(120% 120% at 90% 0%, #2a2a2a 0%, #0a0a0a 60%)",
  color: "#FFFFFF",
  borderRadius: "var(--campaign-card-radius, 20px)",
  padding: "clamp(18px, 5vw, 24px)",
  margin: 0,
  textAlign: "left",
};
const P: CSSProperties = { margin: 0 };

/** Selve kortet — ren gengivelse af `data`, så det kan testes uden feedet. */
export function CampaignArticleCardView({
  data,
  href,
  siteName,
  logoSrc,
  placement = "article",
  compact = false,
  wrapperClassName,
}: {
  data: CampaignBarData;
  href: string;
  siteName: string;
  logoSrc?: string;
  placement?: string;
  compact?: boolean;
  wrapperClassName?: string;
}) {
  const t = campaignCardTexts(data);
  const logo = logoSrc ?? data.logoUrl;
  const card = (
    <aside
      aria-label={`Annonce: ${data.label} hos ${data.supplierName}`}
      data-campaign-card={placement}
      data-valid-to={data.validTo}
      className="not-prose clear-both"
      style={{ margin: "2rem 0", width: "100%" }}
    >
      <div style={CARD}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          {logo ? (
            <span style={{ display: "inline-flex", alignItems: "center", height: 38, padding: "5px 9px", background: "#FFFFFF", borderRadius: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- fast højde, ingen next/image-domæneopsætning på hvert site */}
              <img src={logo} alt={data.supplierName} width={52} height={26} style={{ height: 26, width: "auto", display: "block" }} />
            </span>
          ) : (
            <span style={{ fontWeight: 800, fontSize: 20 }}>{data.supplierName}</span>
          )}
          <span
            style={{ background: "rgba(255,255,255,.14)", color: "rgba(255,255,255,.85)", fontSize: 12, fontWeight: 600, lineHeight: 1.2, padding: "4px 10px", borderRadius: 999 }}
          >
            Annonce
          </span>
        </div>
        <p style={{ ...P, marginTop: 14, color: "#6FCF97", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", lineHeight: 1.35 }}>
          {t.eyebrow}
        </p>
        <p style={{ ...P, marginTop: 4, color: "#FFFFFF", fontSize: "clamp(3.25rem, 15vw, 4.5rem)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 0.95 }}>
          {data.amount}
        </p>
        <p style={{ ...P, marginTop: 6, color: "rgba(255,255,255,.88)", fontSize: 17, fontWeight: 600, lineHeight: 1.35 }}>{t.line}</p>
        <a
          href={href}
          rel="sponsored nofollow"
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6FCF97] hover:opacity-90"
          style={{
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            width: "100%",
            minHeight: 48,
            padding: "10px 16px",
            background: "#FFFFFF",
            color: "#0A0A0A",
            borderRadius: 999,
            fontSize: 17,
            fontWeight: 700,
            lineHeight: 1.2,
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Se tilbuddet<span className="sr-only"> hos {data.supplierName}</span> <span aria-hidden="true">→</span>
        </a>
        <p style={{ ...P, marginTop: 12, color: "rgba(255,255,255,.55)", fontSize: 12, lineHeight: 1.45 }}>
          {!compact && data.terms ? `${data.terms} ` : ""}
          {campaignCardDisclosure(siteName)}
        </p>
      </div>
    </aside>
  );
  return wrapperClassName ? <div className={wrapperClassName}>{card}</div> : card;
}
