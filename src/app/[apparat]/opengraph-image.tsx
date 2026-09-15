import { ImageResponse } from "next/og";
import { getAppliance, getPublishedSlugs } from "@/lib/appliances";
import { applianceRank, seasonalCost } from "@/lib/appliance-insights";
import { EL_PRICE_KR_PER_KWH, formatKr, formatPrice, MARKET } from "@/lib/pricing";

/**
 * A share card per appliance, built from that appliance's own figures.
 *
 * 43 distinct cards rather than one generic image: someone sharing the
 * tørretumbler page gets its kWh, its yearly cost and its rank among the 43,
 * which is both more useful and more clickable than a logo. Generated at build
 * time from the price engine, so the numbers on a shared card never contradict
 * the page it links to.
 */

export const alt = "Strømforbrug og årlig pris";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#1e40af";
const ACCENT = "#eab308";

const RESERVED = new Set([
  "beregner", "gennemsnitligt", "husstand", "varmepumpe",
  "sparetips", "om-os", "kontakt", "privatlivspolitik", "go",
]);

export function generateStaticParams() {
  return getPublishedSlugs()
    .filter((slug) => !RESERVED.has(slug))
    .map((apparat) => ({ apparat }));
}

/**
 * Names the appliance in the image's alt text. The static `alt` export is the
 * same string for all 43 cards; this makes each one say what it actually shows,
 * for screen readers and for image search.
 */
export function generateImageMetadata({ params }: { params: { apparat: string } }) {
  const data = getAppliance(params.apparat);
  return [
    {
      id: "og",
      size,
      contentType,
      alt: data
        ? `${data.name}: typisk strømforbrug i kWh og pris om året, fordelt over årets måneder`
        : alt,
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ apparat: string }> }) {
  const { apparat } = await params;
  const data = getAppliance(apparat);

  if (!data) {
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: BRAND, color: "white", fontSize: 64, fontFamily: "sans-serif" }}>
          Strømforbrug.dk
        </div>
      ),
      size,
    );
  }

  const cost = data.typicalKwh * EL_PRICE_KR_PER_KWH;
  const rank = applianceRank(data);
  const season = seasonalCost(data);
  const peak = Math.max(...season.months.map((m) => m.cost));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BRAND,
          color: "white",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 12, height: 12, background: ACCENT, borderRadius: 999, display: "flex" }} />
          <div style={{ fontSize: 24, letterSpacing: 2, opacity: 0.85 }}>STRØMFORBRUG.DK</div>
        </div>

        {/* data.heading already carries the right Danish article per appliance
            — "et køleskab" vs "en tørretumbler" — so never build this sentence here. */}
        <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, marginTop: 20, display: "flex" }}>
          {data.heading}
        </div>

        <div style={{ display: "flex", gap: 22, marginTop: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.10)", borderRadius: 16, padding: "22px 26px", flex: 1 }}>
            <div style={{ fontSize: 20, opacity: 0.8, display: "flex" }}>Typisk forbrug</div>
            <div style={{ fontSize: 46, fontWeight: 700, marginTop: 6, display: "flex" }}>{formatKr(data.typicalKwh)} kWh</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", background: ACCENT, color: "#1c1917", borderRadius: 16, padding: "22px 26px", flex: 1 }}>
            <div style={{ fontSize: 20, opacity: 0.75, display: "flex" }}>Pris om året</div>
            <div style={{ fontSize: 46, fontWeight: 700, marginTop: 6, display: "flex" }}>{formatKr(cost)} kr.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.10)", borderRadius: 16, padding: "22px 26px", flex: 1 }}>
            <div style={{ fontSize: 20, opacity: 0.8, display: "flex" }}>Blandt 43 apparater</div>
            <div style={{ fontSize: 46, fontWeight: 700, marginTop: 6, display: "flex" }}>nr. {rank.rank}</div>
          </div>
        </div>

        {/* Twelve-month profile — the one visual no competitor has per appliance.
            Peak month picked out in accent so the seasonality reads at thumbnail size. */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", paddingTop: 18 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 9, height: 104 }}>
            {season.months.map((m) => {
              const isPeak = m.month === season.peak.month;
              return (
                <div key={m.month} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1, height: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      height: `${Math.max(8, (m.cost / peak) * 100)}%`,
                      background: isPeak ? ACCENT : "rgba(255,255,255,0.45)",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                </div>
              );
            })}
          </div>
          {/* baseline */}
          <div style={{ display: "flex", height: 2, background: "rgba(255,255,255,0.35)", marginTop: 3 }} />
          <div style={{ display: "flex", gap: 9, marginTop: 7 }}>
            {season.months.map((m) => (
              <div
                key={m.month}
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  fontSize: 17,
                  opacity: m.month === season.peak.month ? 1 : 0.6,
                }}
              >
                {m.short.slice(0, 1).toUpperCase()}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, opacity: 0.75, marginTop: 12 }}>
            <div style={{ display: "flex" }}>
              Dyreste måned: {season.peak.month.toLowerCase()} — {formatKr(season.peak.cost)} kr.
            </div>
            <div style={{ display: "flex" }}>{formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh · {MARKET.period}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
