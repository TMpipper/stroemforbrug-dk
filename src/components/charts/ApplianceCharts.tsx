import type { ApplianceData } from "@/lib/types";
import { seasonalCost, replacementSaving, applianceRank, articleFor } from "@/lib/appliance-insights";
import { EL_PRICE_KR_PER_KWH, formatKr, formatPrice } from "@/lib/pricing";

/**
 * Inline SVG charts for the appliance pages.
 *
 * Server-rendered, so they cost no JavaScript and no extra request, and they
 * scale cleanly at any size. Each one is a real accessible image: role="img"
 * with a <title> and <desc> that state the finding in words, so a screen reader
 * gets the same answer a sighted reader does rather than "graphic".
 *
 * Everything derives from the appliance's own data and the price engine, so the
 * charts move with MARKET and can never disagree with the tables beside them.
 */

const BRAND = "#1e40af";
const BRAND_LIGHT = "#93c5fd";
const ACCENT = "#f59e0b";
const INK = "#57534e";
const GRID = "#e7e5e4";

/* ---------- seasonal profile ---------- */

export function SeasonalChart({ data }: { data: ApplianceData }) {
  const season = seasonalCost(data);
  if (!season.isSeasonal) return null;

  const W = 640, H = 240;
  const padL = 44, padR = 12, padT = 16, padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const max = Math.max(...season.months.map((m) => m.cost));
  const barW = plotW / season.months.length;

  // A round-ish top gridline so the axis reads as money, not pixels
  const step = max > 400 ? 200 : max > 150 ? 50 : max > 60 ? 20 : 5;
  const ticks: number[] = [];
  for (let v = 0; v <= max * 1.05; v += step) ticks.push(v);

  const titleId = `season-title-${data.slug}`;
  const descId = `season-desc-${data.slug}`;

  return (
    <figure className="my-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
      >
        <title id={titleId}>
          {data.name}: strømudgift fordelt på årets måneder
        </title>
        <desc id={descId}>
          {`Søjlediagram over ${data.name.toLowerCase()}ens månedlige strømudgift. ` +
            `${season.peak.month} er dyrest med ${formatKr(season.peak.cost)} kr., ` +
            `${season.low.month.toLowerCase()} billigst med ${formatKr(season.low.cost)} kr. — ` +
            `en forskel på ${season.ratio.toFixed(1).replace(".", ",")} gange.`}
        </desc>

        {ticks.map((t) => {
          const y = padT + plotH - (t / (max * 1.05)) * plotH;
          return (
            <g key={t}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} stroke={GRID} strokeWidth="1" />
              <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="11" fill={INK}>
                {formatKr(t)}
              </text>
            </g>
          );
        })}

        {season.months.map((m, i) => {
          const h = (m.cost / (max * 1.05)) * plotH;
          const x = padL + i * barW + barW * 0.16;
          const w = barW * 0.68;
          const isPeak = m.month === season.peak.month;
          return (
            <g key={m.month}>
              <rect
                x={x}
                y={padT + plotH - h}
                width={w}
                height={Math.max(2, h)}
                rx="2"
                fill={isPeak ? ACCENT : BRAND_LIGHT}
              />
              <text
                x={x + w / 2}
                y={H - padB + 16}
                textAnchor="middle"
                fontSize="11"
                fill={INK}
                fontWeight={isPeak ? 600 : 400}
              >
                {m.short}
              </text>
            </g>
          );
        })}

        <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} stroke={INK} strokeWidth="1" />
        <text x={padL - 8} y={padT - 4} textAnchor="end" fontSize="10" fill={INK}>kr.</text>
      </svg>
      <figcaption className="text-xs text-ink-500 mt-2">
        Månedlig udgift ved {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh.{" "}
        {season.peak.month} er dyrest ({formatKr(season.peak.cost)} kr.),{" "}
        {season.low.month.toLowerCase()} billigst ({formatKr(season.low.cost)} kr.).
        De tolv måneder summer til årsforbruget på {formatKr(data.typicalKwh)} kWh.
      </figcaption>
    </figure>
  );
}

/* ---------- energy label ladder ---------- */

export function EnergyLabelChart({ data }: { data: ApplianceData }) {
  const r = replacementSaving(data);
  if (!r || data.energyLabels.length < 2) return null;

  const rows = [...data.energyLabels].sort((a, b) => a.kwhPerYear - b.kwhPerYear);
  const max = Math.max(...rows.map((x) => x.kwhPerYear));
  const W = 640;
  const rowH = 34;
  const padL = 96, padR = 78, padT = 8;
  const H = padT + rows.length * rowH + 8;
  const plotW = W - padL - padR;

  const titleId = `label-title-${data.slug}`;
  const descId = `label-desc-${data.slug}`;
  const unit = r.usesEnergyClasses ? "energiklasse" : "type";

  return (
    <figure className="my-6">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-labelledby={`${titleId} ${descId}`}>
        <title id={titleId}>{data.name}: forbrug pr. {unit}</title>
        <desc id={descId}>
          {`Vandret søjlediagram. ${r.worstClass} bruger ${formatKr(r.worstKwh)} kWh om året ` +
            `(${formatKr(r.worstCost)} kr.), mens ${r.bestClass} bruger ${formatKr(r.bestKwh)} kWh ` +
            `(${formatKr(r.bestCost)} kr.). Forskellen er ${formatKr(r.yearlySaving)} kr. om året.`}
        </desc>

        {rows.map((row, i) => {
          const y = padT + i * rowH;
          const w = (row.kwhPerYear / max) * plotW;
          const best = i === 0;
          const worst = i === rows.length - 1;
          return (
            <g key={row.class}>
              <text x={padL - 10} y={y + rowH / 2 + 4} textAnchor="end" fontSize="12" fill={INK} fontWeight={best ? 600 : 400}>
                {row.class.length > 14 ? `${row.class.slice(0, 13)}…` : row.class}
              </text>
              <rect
                x={padL}
                y={y + 6}
                width={Math.max(2, w)}
                height={rowH - 14}
                rx="2"
                fill={best ? "#16a34a" : worst ? ACCENT : BRAND_LIGHT}
              />
              <text x={padL + w + 8} y={y + rowH / 2 + 4} fontSize="12" fill={INK}>
                {formatKr(row.kwhPerYear)} kWh
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="text-xs text-ink-500 mt-2">
        Forskellen mellem {r.worstClass.toLowerCase()} og {r.bestClass.toLowerCase()} er{" "}
        <strong>{formatKr(r.yearlySaving)} kr. om året</strong> ved{" "}
        {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh — {formatKr(r.worstCost)} kr. mod{" "}
        {formatKr(r.bestCost)} kr.
      </figcaption>
    </figure>
  );
}

/* ---------- share of a household ---------- */

const REFERENCE_KWH = 4000;

export function HouseholdShareChart({ data }: { data: ApplianceData }) {
  const rank = applianceRank(data);
  const share = Math.min(1, rank.householdShare);
  const W = 640, H = 78;
  const barY = 20, barH = 30;
  const titleId = `share-title-${data.slug}`;
  const descId = `share-desc-${data.slug}`;
  const pct = (rank.householdShare * 100).toFixed(1).replace(".", ",");

  return (
    <figure className="my-6">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-labelledby={`${titleId} ${descId}`}>
        <title id={titleId}>{data.name}s andel af en husstands strømforbrug</title>
        <desc id={descId}>
          {`${articleFor(data) === "et" ? "Et" : "En"} ${data.name.toLowerCase()} bruger ${formatKr(data.typicalKwh)} kWh om året, ` +
            `svarende til ${pct} procent af en husstand på ${formatKr(REFERENCE_KWH)} kWh. ` +
            `Den er nr. ${rank.rank} ud af ${rank.total} apparater på listen.`}
        </desc>

        <rect x="0" y={barY} width={W} height={barH} rx="4" fill={GRID} />
        <rect x="0" y={barY} width={Math.max(3, share * W)} height={barH} rx="4" fill={BRAND} />
        <text x="0" y="12" fontSize="12" fill={INK}>
          {data.name} — {formatKr(data.typicalKwh)} kWh
        </text>
        <text x={W} y="12" textAnchor="end" fontSize="12" fill={INK}>
          Husstand {formatKr(REFERENCE_KWH)} kWh
        </text>
        <text
          x={share > 0.25 ? Math.max(8, share * W - 8) : share * W + 8}
          y={barY + barH / 2 + 4}
          textAnchor={share > 0.25 ? "end" : "start"}
          fontSize="13"
          fontWeight="600"
          fill={share > 0.25 ? "#ffffff" : INK}
        >
          {pct} %
        </text>
      </svg>
      {/* No figcaption: the paragraph directly below states the same two figures,
          and repeating them verbatim reads as a glitch. The <desc> above still
          carries the full description for screen readers. */}
    </figure>
  );
}
