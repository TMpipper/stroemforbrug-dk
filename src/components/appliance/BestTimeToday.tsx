import { SITE_CONFIG } from "@/lib/config";
import type { ApplianceData } from "@/lib/types";
import { articleFor, possessiveFor } from "@/lib/appliance-insights";
import { formatKrExact, formatPrice, danishDate } from "@/lib/format";
import { hourSpan, type TodayPrices } from "@/lib/hourly-today";

/**
 * »Billigst at bruge X i dag« — sidens differentiator: hvornår på dagen apparatet er billigst at bruge,
 * regnet på dagens timepriser fra Elpriser.dk's feed (markedets grundlag time for time, uden tillæg og
 * abonnement) × apparatets forbrug pr. gang. Apparater, der kører hele døgnet (køleskab, router …),
 * får døgnets gennemsnit i stedet for et vindue — der er intet at flytte.
 *
 * Ingen »lige nu«-påstand: siden er ISR (op til 5 min gammel). Teksten siger kl. HH–HH og »i dag«;
 * Elpriser.dk's kort bærer det levende tal på de sider, der har det.
 */
const ALWAYS_ON = new Set(["koeleskab", "fryser", "kummefryser", "router", "akvarium", "varmtvandsbeholder", "robotstoevsuger", "gulvvarme", "gulvvarme-el", "jordvarme", "varmepumpe", "solceller", "led-paere", "lyskaede"]);

export function isAlwaysOn(a: ApplianceData): boolean {
  return ALWAYS_ON.has(a.slug);
}

export type BothToday = { DK1: TodayPrices; DK2: TodayPrices };

export default function BestTimeToday({ data, today }: { data: ApplianceData; today: BothToday }) {
  const name = data.name.toLowerCase();
  const poss = possessiveFor(data);
  const art = articleFor(data);
  const perUse = data.calculatorConfig.options[0]?.kwhPerUse ?? null;
  const unit = data.calculatorConfig.usageUnit.replace(/^pr\.\s*/, "");
  const regions = [
    { key: "DK1" as const, label: "Vestdanmark", t: today.DK1 },
    { key: "DK2" as const, label: "Østdanmark", t: today.DK2 },
  ];
  const d = today.DK1;
  const alwaysOn = isAlwaysOn(data);
  const kr = (kwh: number, price: number) => formatKrExact(kwh * price);

  return (
    <section data-best-time={alwaysOn ? "always-on" : "window"} data-region="DK1" aria-labelledby="bedste-tidspunkt" className="my-10 rounded-card bg-bg-blue p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Timepriser i dag · {danishDate(d.day)}</p>
      <h2 id="bedste-tidspunkt" className="mt-1 font-heading text-2xl font-semibold text-ink">
        {alwaysOn ? `Hvad koster ${poss} ${name} i dag?` : `Hvornår er det billigst at bruge ${poss} ${name} i dag?`}
      </h2>

      {alwaysOn ? (
        <p className="mt-3 text-ink-body">
          {art.charAt(0).toUpperCase() + art.slice(1)} {name} kører hele døgnet, så det er døgnets gennemsnit, der tæller — ikke den enkelte
          time. I dag er gennemsnittet <strong className="tabular">{formatPrice(d.avg)} kr./kWh</strong> i Vestdanmark og{" "}
          <strong className="tabular">{formatPrice(today.DK2.avg)} kr./kWh</strong> i Østdanmark, med {hourSpan(d.cheapest)} som døgnets
          billigste timer og {hourSpan(d.dearest)} som de dyreste.
        </p>
      ) : (
        <>
          <p className="mt-3 text-ink-body">
            Billigst <strong>{hourSpan(d.cheapest)}</strong>, dyrest <strong>{hourSpan(d.dearest)}</strong> i Vestdanmark
            {today.DK2.cheapest.start !== d.cheapest.start ? ` (i Østdanmark ${hourSpan(today.DK2.cheapest)})` : ""}.
            {perUse ? (
              <>
                {" "}
                Én gang ({perUse.toFixed(1).replace(".", ",")} kWh) koster <strong className="tabular">{kr(perUse, d.cheapest.krPerKwh)} kr.</strong> i
                det billigste vindue mod <strong className="tabular">{kr(perUse, d.dearest.krPerKwh)} kr.</strong> i det dyreste — en forskel på{" "}
                {Math.round(((d.dearest.krPerKwh - d.cheapest.krPerKwh) / d.dearest.krPerKwh) * 100)} %.
              </>
            ) : null}
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Dagens timepriser">
            {regions.flatMap(({ key, label, t }) => [
              <div key={`${key}-b`} className="rounded-card bg-surface p-3 shadow-sm">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">Billigst · {label}</dt>
                <dd className="mt-1 text-base font-semibold text-ink tabular">{hourSpan(t.cheapest)}</dd>
                <dd className="text-xs text-ink-muted tabular">
                  {formatPrice(t.cheapest.krPerKwh)} kr./kWh{perUse ? ` · ${kr(perUse, t.cheapest.krPerKwh)} kr. pr. ${unit}` : ""}
                </dd>
              </div>,
              <div key={`${key}-d`} className="rounded-card bg-surface p-3 shadow-sm">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">Dyrest · {label}</dt>
                <dd className="mt-1 text-base font-semibold text-ink tabular">{hourSpan(t.dearest)}</dd>
                <dd className="text-xs text-ink-muted tabular">
                  {formatPrice(t.dearest.krPerKwh)} kr./kWh{perUse ? ` · ${kr(perUse, t.dearest.krPerKwh)} kr. pr. ${unit}` : ""}
                </dd>
              </div>,
            ])}
          </dl>
          {d.tomorrowAvailable && d.tomorrowCheapest ? (
            <p className="mt-3 text-sm text-ink-body">
              I morgen er det billigste vindue {hourSpan(d.tomorrowCheapest)} i Vestdanmark ({formatPrice(d.tomorrowCheapest.krPerKwh)} kr./kWh).
            </p>
          ) : (
            <p className="mt-3 text-sm text-ink-muted">Morgendagens priser kommer omkring kl. 14, når Nord Pools auktion er afgjort.</p>
          )}
        </>
      )}

      <p className="mt-4 text-xs text-ink-muted">
        Timepriser fra Elpriser.dk: spotpris, nettarif, Energinets tariffer og elafgift pr. time, inkl. moms, uden abonnement og uden
        selskabets tillæg — {d.areaLabel}
        {d.regionRepresentative ? " som repræsentativt netområde" : ""} i vest, {today.DK2.areaLabel} i øst.{" "}
        <a href={SITE_CONFIG.parent.url} data-family-link className="content-link">
          Se alle timer og dit eget postnummer på Elpriser.dk
        </a>
        .
      </p>
    </section>
  );
}
