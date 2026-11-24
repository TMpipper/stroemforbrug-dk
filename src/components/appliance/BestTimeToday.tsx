import { SITE_CONFIG } from "@/lib/config";
import type { ApplianceData } from "@/lib/types";
import { articleFor, possessiveFor } from "@/lib/appliance-insights";
import { formatKrExact, formatPrice, danishDate } from "@/lib/format";
import { hourSpan, hourlyBasisAttrs, type TodayPrices } from "@/lib/hourly-today";
import { calcModel, isShiftable, metaOf } from "@/lib/catalogue";
import { playStoreUrl, storeUrl } from "@/lib/feed/app-promo";
import { APP_PROMO_SITE } from "@/lib/app-promo-site";

/**
 * »Billigst at bruge X i dag« — sidens differentiator: hvornår på dagen apparatet er billigst at bruge,
 * regnet på dagens timepriser fra Elpriser.dk's feed (markedets grundlag time for time, uden tillæg og
 * abonnement) × apparatets forbrug pr. gang. Apparater, der kører hele døgnet (køleskab, router …),
 * får døgnets gennemsnit i stedet for et vindue — der er intet at flytte.
 *
 * Ingen »lige nu«-påstand: siden er ISR (op til 5 min gammel). Teksten siger kl. HH–HH og »i dag«;
 * Elpriser.dk's kort bærer det levende tal på de sider, der har det.
 */
/** Kører apparatet hele døgnet (køleskab, router, varmepumpe …)? Så tæller døgnets gennemsnit, ikke timen. */
export function isAlwaysOn(a: ApplianceData): boolean {
  const u = metaOf(a).usage;
  return u === "always-on" || u === "heating" || u === "production";
}

/**
 * Tre slags blok: »window« (kan flyttes: opvask, vask, elbil), »always-on« (kører hele døgnet) og »use-time«
 * (bruges, når man har brug for det: tv, lys, elkedel — dér er det de dyre timer, man kan undgå, ikke et
 * natligt vindue, man kan flytte til).
 */
export function bestTimeMode(a: ApplianceData): "window" | "always-on" | "use-time" {
  if (isShiftable(a)) return "window";
  return isAlwaysOn(a) ? "always-on" : "use-time";
}

export type BothToday = { DK1: TodayPrices; DK2: TodayPrices };

export default function BestTimeToday({ data, today }: { data: ApplianceData; today: BothToday }) {
  const name = data.name.toLowerCase();
  const poss = possessiveFor(data);
  const art = articleFor(data);
  const calc = calcModel(data);
  const perUse = calc ? calc.options[calc.defaultIndex].kwhPerUse : null;
  const unit = calc?.per ?? "gang";
  const perUseText = perUse === null ? "" : perUse.toLocaleString("da-DK", { maximumFractionDigits: perUse >= 1 ? 1 : perUse >= 0.1 ? 2 : 3 });
  const regions = [
    { key: "DK1" as const, label: "Vestdanmark", t: today.DK1 },
    { key: "DK2" as const, label: "Østdanmark", t: today.DK2 },
  ];
  const d = today.DK1;
  const mode = bestTimeMode(data);
  const alwaysOn = mode === "always-on";
  const kr = (kwh: number, price: number) => formatKrExact(kwh * price);

  return (
    <section data-best-time={mode} data-region="DK1" {...hourlyBasisAttrs(today)} aria-labelledby="bedste-tidspunkt" className="my-10 rounded-card bg-bg-blue p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Timepriser i dag · {danishDate(d.day)}</p>
      <h2 id="bedste-tidspunkt" className="mt-1 font-heading text-2xl font-semibold text-ink">
        {mode === "always-on"
          ? `Hvad koster ${poss} ${name} i dag?`
          : mode === "use-time"
            ? `Hvad koster det at bruge ${poss} ${name} i dag — time for time?`
            : `Hvornår er det billigst at bruge ${poss} ${name} i dag?`}
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
          {mode === "use-time" ? (
            <p className="mt-3 text-ink-body">
              {art.charAt(0).toUpperCase() + art.slice(1)} {name} bruger man, når man har brug for det — så det, der kan spares, ligger i at
              undgå de dyreste timer, ikke i at flytte brugen til natten. Døgnets gennemsnit i dag er{" "}
              <strong className="tabular">{formatPrice(d.avg)} kr./kWh</strong> i Vestdanmark.
            </p>
          ) : null}
          <p className="mt-3 text-ink-body">
            Billigst <strong>{hourSpan(d.cheapest)}</strong>, dyrest <strong>{hourSpan(d.dearest)}</strong> i Vestdanmark
            {today.DK2.cheapest.start !== d.cheapest.start ? ` (i Østdanmark ${hourSpan(today.DK2.cheapest)})` : ""}.
            {perUse ? (
              <>
                {" "}
                Pr. {unit} ({perUseText} kWh) koster <strong className="tabular">{kr(perUse, d.cheapest.krPerKwh)} kr.</strong> i
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
          {mode === "window" ? (
            // Appens linje ved timerne (ejeren 24. nov. 2026): erstatter `apparat-top`, der gav flest app-klik (14 af 42 på 30 dage) før
            // 22. nov. En linje i blokken, ikke en promo (`data-app-promo`) — kittets ordlyd (»påmindelse før dagens billigste timer«), ingen tal.
            <p data-family-app data-app-line="tidspunkt" className="mt-4 border-t border-ink/10 pt-4 text-ink-body">
              Vil du ikke selv holde øje med timerne? Elpriser.dk-appen giver dig en påmindelse før dagens billigste timer — gratis på iPhone og
              Android.{" "}
              <a
                href={storeUrl(APP_PROMO_SITE.key)}
                data-android-href={playStoreUrl(APP_PROMO_SITE.key)}
                target="_blank"
                rel="noopener"
                data-app-cta="tidspunkt:store"
                className="content-link font-semibold sm:hidden"
              >
                Hent appen gratis
              </a>
              <a href={APP_PROMO_SITE.appPage} data-app-cta="tidspunkt:app-page" className="content-link hidden font-semibold sm:inline">
                Se appen
              </a>
            </p>
          ) : null}
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
