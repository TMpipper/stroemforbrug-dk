import Link from "next/link";
import { getPublishedAppliances } from "@/lib/appliances";
import { EL_PRICE_KR_PER_KWH, formatKr, formatKrExact, formatPrice, MARKET } from "@/lib/pricing";

/**
 * Reference tables for the calculator page.
 *
 * /beregner/ was 375 words — a generic slider and the watt × timer ÷ 1.000
 * formula — on a query where people arrive wanting a number, not a formula.
 * These tables answer the lookup directly, computed from the same price engine
 * as everything else.
 */

const WATTAGES = [
  { w: 5, example: "Router i hvile, opladere" },
  { w: 50, example: "Bærbar, LED-belysning i et rum" },
  { w: 100, example: "Stationær computer i tomgang, stort tv" },
  { w: 500, example: "Køleskab i drift, spillekonsol" },
  { w: 1000, example: "Mikroovn, støvsuger" },
  { w: 1500, example: "Varmeblæser, hårtørrer" },
  { w: 2000, example: "Elkedel, elradiator" },
  { w: 3000, example: "Ovn på fuld effekt, induktionskogeplade" },
];

/** What a given effect costs per hour, per day and over a year of daily use. */
export function WattCostTable() {
  return (
    <section className="my-10">
      <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
        Hvad koster 1 time? Watt omregnet til kroner
      </h2>
      <p className="text-ink-700 mb-4">
        Et apparats effekt i watt fortæller, hvor hurtigt det bruger strøm. Tabellen
        omregner de mest almindelige effekter til kroner ved{" "}
        {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh, så du kan slå et tal op uden at
        regne selv.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Effekt</th>
              <th className="text-right py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">1 time</th>
              <th className="text-right py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">1 time dagligt i et år</th>
              <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium hidden sm:table-cell">Typisk apparat</th>
            </tr>
          </thead>
          <tbody>
            {WATTAGES.map((row) => {
              const kwh = row.w / 1000;
              const perHour = kwh * EL_PRICE_KR_PER_KWH;
              const perYear = perHour * 365;
              return (
                <tr key={row.w} className="hover:bg-surface-alt">
                  <td className="py-2 px-3 border-b border-ink-200 font-medium">{formatKr(row.w)} W</td>
                  <td className="py-2 px-3 border-b border-ink-200 text-right tabular-nums">
                    {perHour < 1 ? `${Math.round(perHour * 100)} øre` : `${formatKrExact(perHour)} kr.`}
                  </td>
                  <td className="py-2 px-3 border-b border-ink-200 text-right tabular-nums font-semibold">{formatKr(perYear)} kr.</td>
                  <td className="py-2 px-3 border-b border-ink-200 text-ink-600 hidden sm:table-cell">{row.example}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-400 mt-2">
        Beregnet ved {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh inkl. moms, afgifter og
        transport ({MARKET.period}). Kolonnen længst til højre antager én times brug
        hver dag året rundt.
      </p>
    </section>
  );
}

/** The ten heaviest appliances, as a jumping-off point from the calculator. */
export function QuickLookup() {
  const rows = [...getPublishedAppliances()]
    .sort((a, b) => b.typicalKwh - a.typicalKwh)
    .slice(0, 10);
  return (
    <section className="my-10">
      <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
        Slå et apparat op direkte
      </h2>
      <p className="text-ink-700 mb-4">
        Har du et bestemt apparat i tankerne, er det hurtigere at gå direkte til det.
        Hver side har sin egen beregner med realistiske brugsmønstre for netop det
        apparat — en tørretumbler regnes pr. tørring, ikke pr. time.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Apparat</th>
              <th className="text-right py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Typisk kWh/år</th>
              <th className="text-right py-2 px-3 bg-surface-muted border-b-2 border-ink-200 font-heading font-medium">Pris/år</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => (
              <tr key={a.slug} className="hover:bg-surface-alt">
                <td className="py-2 px-3 border-b border-ink-200">
                  <Link href={`/${a.slug}/`} className="font-medium text-brand-700 hover:underline">{a.name}</Link>
                </td>
                <td className="py-2 px-3 border-b border-ink-200 text-right tabular-nums">{formatKr(a.typicalKwh)}</td>
                <td className="py-2 px-3 border-b border-ink-200 text-right tabular-nums font-semibold">
                  {formatKr(a.typicalKwh * EL_PRICE_KR_PER_KWH)} kr.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
