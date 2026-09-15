import Link from "next/link";
import type { ApplianceData } from "@/lib/types";
import { insightsFor } from "@/lib/appliance-insights";
import { formatKr, formatPrice, EL_PRICE_KR_PER_KWH, PRICE_DK1, PRICE_DK2 } from "@/lib/pricing";

/**
 * The sections that separate this page from the rest of the SERP.
 *
 * Every figure is computed from the appliance's own data and the price engine —
 * nothing here is typed, so all 43 pages stay correct when MARKET is updated.
 * Sections hide themselves when the underlying data does not support them
 * (a router has no meaningful season, a kettle has no standby), so no page
 * carries a block that says nothing.
 */
export default function ApplianceInsights({ data }: { data: ApplianceData }) {
  const i = insightsFor(data);
  const name = data.name.toLowerCase();

  return (
    <>
      {/* ---------- region ---------- */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
          Hvad koster en {name} i din landsdel?
        </h2>
        <p className="text-ink-700 mb-4">
          En {name} koster{" "}
          <strong>{formatKr(i.regional.dk1)} kr. om året i Vestdanmark</strong> og{" "}
          <strong>{formatKr(i.regional.dk2)} kr. i Østdanmark</strong> ved et typisk
          forbrug på {formatKr(data.typicalKwh)} kWh.{" "}
          {/* The percentage is the same on every page — it is a ratio of two prices —
              so the sentence is framed by how much the difference actually matters
              for this appliance rather than repeating "8,4 %" 43 times. */}
          {i.regional.difference < 25 ? (
            <>
              Forskellen er kun {formatKr(i.regional.difference)} kr. om året, så
              landsdelen betyder reelt ingenting for netop dette apparat.
            </>
          ) : i.regional.difference > 200 ? (
            <>
              Her betyder landsdelen noget: {formatKr(i.regional.difference)} kr. om
              året alene på ét apparat, fordi både spotprisen og nettariffen er højere
              øst for Storebælt.
            </>
          ) : (
            <>
              Forskellen på {formatKr(i.regional.difference)} kr. skyldes, at både
              spotprisen og nettariffen er højere øst for Storebælt.
            </>
          )}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left">
                <th className="py-2 pr-3 font-heading font-semibold text-ink-900">Landsdel</th>
                <th className="py-2 px-3 font-heading font-semibold text-ink-900 text-right">Elpris</th>
                <th className="py-2 px-3 font-heading font-semibold text-ink-900 text-right">Pr. år</th>
                <th className="py-2 pl-3 font-heading font-semibold text-ink-900 text-right">Pr. måned</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink-100">
                <td className="py-2 pr-3 text-ink-800">DK1 — vest for Storebælt</td>
                <td className="py-2 px-3 text-right text-ink-600">{formatPrice(PRICE_DK1)} kr./kWh</td>
                <td className="py-2 px-3 text-right font-semibold text-ink-900">{formatKr(i.regional.dk1)} kr.</td>
                <td className="py-2 pl-3 text-right text-ink-600">{formatKr(i.regional.dk1 / 12)} kr.</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 text-ink-800">DK2 — øst for Storebælt</td>
                <td className="py-2 px-3 text-right text-ink-600">{formatPrice(PRICE_DK2)} kr./kWh</td>
                <td className="py-2 px-3 text-right font-semibold text-ink-900">{formatKr(i.regional.dk2)} kr.</td>
                <td className="py-2 pl-3 text-right text-ink-600">{formatKr(i.regional.dk2 / 12)} kr.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400 mt-2">
          Marginal elpris inkl. moms, afgifter og transport for {i.period}. Abonnement
          er ikke medregnet, da det er en fast udgift uanset forbrug.
        </p>
      </section>

      {/* ---------- season ---------- */}
      {i.seasonal.isSeasonal && (
        <section className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
            Hvornår på året koster din {name} mest?
          </h2>
          <p className="text-ink-700 mb-4">
            Forbruget er ikke jævnt fordelt over året. {i.seasonal.peak.month} er
            den dyreste måned med <strong>{formatKr(i.seasonal.peak.cost)} kr.</strong>,
            mens {i.seasonal.low.month.toLowerCase()} kun koster{" "}
            <strong>{formatKr(i.seasonal.low.cost)} kr.</strong> — en forskel på{" "}
            {i.seasonal.ratio.toFixed(1).replace(".", ",")} gange. Det er værd at
            vide, hvis din elregning pludselig stiger om vinteren.
          </p>
          <div className="bg-surface-alt rounded-card p-4">
            <div className="flex items-end gap-1 sm:gap-2 h-32">
              {i.seasonal.months.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className="text-[10px] text-ink-500 mb-1 tabular-nums">
                    {formatKr(m.cost)}
                  </span>
                  <div
                    className="w-full bg-brand-500 rounded-t"
                    style={{ height: `${(m.cost / i.seasonal.peak.cost) * 100}%` }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-1 sm:gap-2 mt-2">
              {i.seasonal.months.map((m) => (
                <div key={m.month} className="flex-1 text-center text-[10px] text-ink-500">
                  {m.short}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink-400 mt-2">
            Månedsfordeling baseret på et typisk brugsmønster for en {name}. De tolv
            måneder summer til årsforbruget på {formatKr(data.typicalKwh)} kWh.
          </p>
        </section>
      )}

      {/* ---------- replacing an old unit ---------- */}
      {i.replacement && (
        <section className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
            Kan det betale sig at udskifte din {name}?
          </h2>
          <p className="text-ink-700 mb-4">
            {i.replacement.usesEnergyClasses ? (
              <>
                En {name} i energiklasse {i.replacement.worstClass} bruger{" "}
                {formatKr(i.replacement.worstKwh)} kWh om året —{" "}
                <strong>{formatKr(i.replacement.worstCost)} kr.</strong> En i klasse{" "}
                {i.replacement.bestClass} bruger {formatKr(i.replacement.bestKwh)} kWh,
                altså <strong>{formatKr(i.replacement.bestCost)} kr.</strong>
              </>
            ) : (
              <>
                Typen betyder mest: {i.replacement.worstClass.toLowerCase()} bruger{" "}
                {formatKr(i.replacement.worstKwh)} kWh om året —{" "}
                <strong>{formatKr(i.replacement.worstCost)} kr.</strong> — mens{" "}
                {i.replacement.bestClass.toLowerCase()} bruger{" "}
                {formatKr(i.replacement.bestKwh)} kWh, altså{" "}
                <strong>{formatKr(i.replacement.bestCost)} kr.</strong>
              </>
            )}{" "}
            Forskellen er <strong>{formatKr(i.replacement.yearlySaving)} kr. om året</strong>.
          </p>
          <div className="bg-brand-50 border border-brand-200 rounded-card p-4">
            <p className="text-sm text-ink-800">
              <strong>Regnestykket:</strong> en ny {name} tjener sig hjem på strøm alene,
              hvis den koster under{" "}
              <strong>{formatKr(i.replacement.breakEvenPrice10yr)} kr.</strong> og holder
              i ti år — eller under {formatKr(i.replacement.breakEvenPrice5yr)} kr. på fem
              år.
            </p>
            <p className="text-xs text-ink-500 mt-2">
              Vi kender ikke prisen på netop den model, du kigger på, så vi vender
              regnestykket om: det her er det beløb, købet må koste, før besparelsen er
              spist op. Beregnet ved {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh og
              uændret brug.
            </p>
          </div>
        </section>
      )}

      {/* ---------- standby ---------- */}
      {i.standby?.isSignificant && (
        <section className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
            Hvor meget af forbruget er standby?
          </h2>
          <p className="text-ink-700">
            {i.standby.isAlwaysOn ? (
              <>
                En {name} er tændt hele døgnet, så de {i.standby.watts} watt er reelt
                hele forbruget:{" "}
                <strong>{formatKr(i.standby.kwhPerYear)} kWh om året</strong>, svarende
                til <strong>{formatKr(i.standby.costPerYear)} kr.</strong> Det er her,
                en mere effektiv model betaler sig — ikke i, hvor tit du bruger den.
              </>
            ) : (
              <>
                De {i.standby.watts} watt, din {name} bruger i standby, bliver til{" "}
                <strong>{formatKr(i.standby.kwhPerYear)} kWh om året</strong> —{" "}
                <strong>{formatKr(i.standby.costPerYear)} kr.</strong>, eller{" "}
                {Math.round(i.standby.share * 100)} % af apparatets samlede forbrug.
                Slukker du på kontakten, sparer du det hele.
              </>
            )}
          </p>
        </section>
      )}

      {/* ---------- rank ---------- */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-medium text-ink-900 mb-3">
          Hvor stor en del af elregningen er en {name}?
        </h2>
        <p className="text-ink-700">
          En {name} er nr. <strong>{i.rank.rank} ud af {i.rank.total}</strong> på vores
          liste over apparaters strømforbrug og står for ca.{" "}
          <strong>{(i.rank.householdShare * 100).toFixed(1).replace(".", ",")} %</strong>{" "}
          af forbruget i en husstand på 4.000 kWh om året.{" "}
          {i.rank.costlier && (
            <>
              Til sammenligning bruger{" "}
              <Link href={`/${i.rank.costlier.slug}/`} className="text-brand-700 underline underline-offset-2">
                en {i.rank.costlier.name.toLowerCase()}
              </Link>{" "}
              mere ({formatKr(i.rank.costlier.typicalKwh)} kWh)
              {i.rank.cheaper && (
                <>
                  , mens{" "}
                  <Link href={`/${i.rank.cheaper.slug}/`} className="text-brand-700 underline underline-offset-2">
                    en {i.rank.cheaper.name.toLowerCase()}
                  </Link>{" "}
                  bruger mindre ({formatKr(i.rank.cheaper.typicalKwh)} kWh)
                </>
              )}
              .
            </>
          )}{" "}
          Se hele listen på{" "}
          <Link href="/stromslugere/" className="text-brand-700 underline underline-offset-2">
            strømslugere i hjemmet
          </Link>
          .
        </p>
      </section>
    </>
  );
}
