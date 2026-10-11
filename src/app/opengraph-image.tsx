import { ImageResponse } from "next/og";
import { HOUSEHOLD_PROFILES, AVERAGE_PER_PERSON_KWH } from "@/lib/home-insights";
import { getPublishedAppliances } from "@/lib/appliances";
import { formatKr } from "@/lib/format";

/**
 * Share card for the homepage.
 *
 * The site had no og:image at all, so every share on Facebook, LinkedIn, Slack
 * or WhatsApp rendered a blank card. Rather than a stock photo, the card is
 * generated from the appliance data. It carries NO price: the price moves with the
 * feed every day and social caches keep a card for weeks, so the card shows kWh only.
 */

export const alt = "Strømforbrug i Danmark — se hvad dine apparater bruger og koster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#1e40af";
const ACCENT = "#eab308";

export default async function Image() {
  const family = HOUSEHOLD_PROFILES[2];
  const heatPump = HOUSEHOLD_PROFILES[3];
  const count = getPublishedAppliances().length;

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
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: ACCENT, borderRadius: 999, display: "flex" }} />
          <div style={{ fontSize: 26, letterSpacing: 2, opacity: 0.85 }}>STRØMFORBRUG.DK</div>
        </div>

        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 28, display: "flex" }}>
          Hvad bruger dine apparater i strøm?
        </div>

        <div style={{ fontSize: 30, opacity: 0.85, marginTop: 20, display: "flex" }}>
          {count} apparater regnet igennem — kWh, pris og billigste tidspunkt
        </div>

        <div style={{ display: "flex", gap: 24, marginTop: "auto" }}>
          {[
            { label: "Pr. dansker", value: `${formatKr(AVERAGE_PER_PERSON_KWH)} kWh` },
            { label: "Familie på 4", value: `${formatKr(family.totalKwh)} kWh` },
            { label: "Med varmepumpe", value: `${formatKr(heatPump.totalKwh)} kWh` },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.10)",
                borderRadius: 16,
                padding: "24px 28px",
                flex: 1,
              }}
            >
              <div style={{ fontSize: 22, opacity: 0.8, display: "flex" }}>{s.label}</div>
              <div style={{ fontSize: 44, fontWeight: 700, marginTop: 8, display: "flex" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
