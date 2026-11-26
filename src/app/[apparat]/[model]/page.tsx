import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { getPrices, tokenPrices } from "@/lib/prices";
import { collapseAbbreviationPeriods, renderWith, wrapTables } from "@/lib/tokens";
import { getAppliance } from "@/lib/appliances";
import { hubFor } from "@/lib/catalogue";
import { isReserved } from "@/lib/routes";
import {
  allModels, annualKwh, chargeKwh, formatWatt, wattRange, getModel, isModelPublished, keyFigure, MODE_LABEL, modelPath, modelsFor, possessive, profileFor, unitKwh,
  type ModeKey,
} from "@/lib/models";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { formatKr, formatKrExact, withCurrentYear } from "@/lib/format";
import { applianceMotif } from "@/lib/visuals/defaults";
import PageHero from "@/components/marketing/PageHero";
import QuickAnswer from "@/components/content/QuickAnswer";
import PriceBasis from "@/components/content/PriceBasis";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";

/**
 * Modelsiden: /<apparat>/<model>/ (ejeren 22. nov. 2026). Producentens målte watt står som de er; kWh om året,
 * pris om året og pris pr. opladning regnes her af dem og af månedens marginalpris — ingen tal er skrevet.
 * Ingen forhandlerlinks (ejerens valg).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  // Apparater med egen rute (/varmepumpe/) bygger deres modelsider dér (src/app/varmepumpe/[model]/).
  return allModels()
    .filter((m) => !isReserved(m.parent))
    .map((m) => ({ apparat: m.parent, model: m.slug }));
}

type Params = Promise<{ apparat: string; model: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { apparat, model } = await params;
  const m = getModel(apparat, model);
  if (!m) return {};
  const url = `${SITE_CONFIG.url}${modelPath(m)}`;
  return {
    title: withCurrentYear(m.title),
    description: withCurrentYear(m.description),
    alternates: { canonical: url },
    // En model før sin udgivelsesdag er bygget, men ikke til indeksering (som apparaterne: ikke i sitemap/lister).
    robots: isModelPublished(m) ? undefined : { index: false, follow: true },
    openGraph: { title: withCurrentYear(m.title), description: withCurrentYear(m.description), url, type: "article", locale: SITE_CONFIG.locale },
  };
}

const da = (n: number, d = 1) => n.toLocaleString("da-DK", { maximumFractionDigits: d });

export default async function ModelPage({ params }: { params: Params }) {
  const { apparat, model } = await params;
  const m = getModel(apparat, model);
  const parent = getAppliance(apparat);
  if (!m || !parent) notFound();

  const prices = await getPrices();
  const t = tokenPrices(prices);
  const path = modelPath(m);
  const url = `${SITE_CONFIG.url}${path}`;
  const hub = hubFor(parent);
  const profile = profileFor(m.parent);

  const rows = m.variants.map((v) => {
    const year = annualKwh(v, m.parent);
    const charge = chargeKwh(v);
    const unit = unitKwh(v, m.parent);
    return { v, year, charge, unit };
  });
  const hasBattery = rows.some((r) => r.charge !== null);
  const unitLabel = rows.find((r) => r.unit)?.unit?.label;
  const isCar = m.variants.some((v) => v.whPerKm !== undefined);
  const hasLabel = m.variants.some((v) => v.kwhPer100Cycles !== undefined);
  const hasClass = m.variants.some((v) => v.energyClass);
  // Køle-/fryseapparater: energimærkets kWh/år står direkte på mærket — ingen profil at gange med.
  const isLabelYear = m.variants.every((v) => v.annualKwh !== undefined);
  // Opvarmning bruges i fyringssæsonen — et døgngennemsnit over hele året ville snyde (varmepumper, 26. nov. 2026).
  const seasonal = m.parent === "varmepumpe";
  const modes = (["off", "sleep", "standby", "idle", "on"] as ModeKey[]).filter((k) => m.variants.some((v) => v.watts[k] !== undefined));
  const lo = rows.reduce((a, b) => (b.year < a.year ? b : a));
  const hi = rows.reduce((a, b) => (b.year > a.year ? b : a));
  const krYear = (kwh: number) => (kwh * t.dk < 10 ? formatKrExact(kwh * t.dk) : formatKr(kwh * t.dk));
  const oere = (kwh: number) => da(kwh * t.dk * 100, kwh * t.dk * 100 < 10 ? 1 : 0);

  const heading = isLabelYear
    ? `${m.name} strømforbrug: kWh om året efter energimærket og pris`
    : isCar
    ? `${m.name} strømforbrug: kWh pr. 100 km, pris pr. km og om året`
    : hasLabel
      ? `${m.name} strømforbrug: kWh pr. ${profile.cycleLabel ?? "program"} og pris om året`
      : `${m.name} strømforbrug: watt, kWh om året og pris${hasBattery ? " pr. opladning" : ""}`;
  const idle = rows.map((r) => r.v.watts.idle ?? r.v.watts.on).filter((x) => x !== undefined) as number[];
  const idleWord = m.variants.some((v) => v.watts.idle !== undefined) ? "tændt i tomgang" : "i brug";
  const measuredBy = m.measuredBy ?? `ifølge ${possessive(m.brand)} egne målinger ved 230 V`;
  const range = (xs: number[], d: number) => {
    const a = Math.min(...xs), b = Math.max(...xs);
    return a === b ? da(a, d) : `${da(a, d)}–${da(b, d)}`;
  };
  const units = rows.flatMap((r) => (r.unit ? [r.unit.kwh] : []));
  const lead = isCar
    ? `${m.name} bruger ${range(units, 1)} kWh pr. 100 km ${measuredBy}`
    : hasLabel
      ? `${m.name} bruger ${range(units, 2)} kWh pr. ${profile.cycleLabel ?? "program"} ${measuredBy}`
      : `${m.name} bruger ${idle.length ? `${wattRange(idle)} ${idleWord}` : "meget lidt"} ${measuredBy}`;
  const answer = isLabelYear
    ? `${m.name} bruger ${range(rows.map((r) => r.year), 0)} kWh om året ${measuredBy} — ca. ${krYear(lo.year)}${hi.year !== lo.year ? `–${krYear(hi.year)}` : ""} kr. om året ved månedens elpris${seasonal ? " — det meste af det i fyringssæsonen." : `, eller ${range(rows.map((r) => (r.year / 365) * t.dk * 100), 0)} øre i døgnet.`}`
    : `${lead} og omkring ${da(lo.year, lo.year >= 100 ? 0 : 1)}${hi.year !== lo.year ? `–${da(hi.year, hi.year >= 100 ? 0 : 1)}` : ""} kWh om året med ${profile.short}` +
    ` — ca. ${krYear(lo.year)}${hi.year !== lo.year ? `–${krYear(hi.year)}` : ""} kr. om året ved månedens elpris` +
    (isCar ? `, eller ${range(units.map((k) => k * t.dk), 0)} kr. pr. 100 km.` : "") +
    (hasBattery ? `. En fuld opladning koster ${rows.filter((r) => r.charge).map((r) => `${oere(r.charge!)} øre (${r.v.name})`).join(" og ")}.` : isCar ? "" : ".");

  // Sammenligningen: alle udgivne modeller under samme apparat, samme profil — så de kan stilles op mod hinanden.
  const family = modelsFor(m.parent)
    .filter((x) => (x.group ?? "") === (m.group ?? ""))
    .flatMap((x) => x.variants.map((v) => ({ m: x, v, year: annualKwh(v, x.parent) })))
    .sort((a, b) => a.year - b.year);

  // »{{kr 77}}.« må ikke blive »kr..« — samme rettelse som FaqBand laver på svarene.
  const content = collapseAbbreviationPeriods(wrapTables(renderWith(t, m.content)));
  const intro = collapseAbbreviationPeriods(renderWith(t, m.intro));
  const faqs = m.faqs.map((f) => ({ ...f, answer: collapseAbbreviationPeriods(renderWith(t, f.answer)) }));
  const crumbs = [
    { name: "Apparater", href: "/apparater/" },
    ...(hub ? [{ name: hub.label, href: `/apparater/${hub.slug}/` }] : []),
    { name: parent.name, href: `/${parent.slug}/` },
    { name: m.name },
  ];

  const schemas = [
    breadcrumbSchema([{ name: "Forside", url: SITE_CONFIG.url }, ...crumbs.map((c) => ({ name: c.name, url: c.href ? `${SITE_CONFIG.url}${c.href}` : url }))]),
    faqSchema(faqs),
    articleSchema({ title: heading, description: withCurrentYear(m.description), url, datePublished: m.publishDate, dateModified: m.updated }),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <PageHero crumbs={crumbs} eyebrow={`${m.brand} · ${parent.name}`} title={heading} lastUpdated={m.updated} motif={applianceMotif(parent.slug)} />

      <article className="container-text py-10 md:py-14">
        <QuickAnswer>
          <p>
            {answer} {intro}
          </p>
        </QuickAnswer>

        <section aria-labelledby="officielle-tal" className="mt-10" data-model-figures>
          <h2 id="officielle-tal" className="font-heading text-2xl font-semibold text-ink">
            {possessive(m.brand)} egne tal for {m.name}
          </h2>
          <p className="mt-2 text-ink-body">
            {m.figuresNote ?? `Målt af ${m.brand} ved 230 V — samme spænding som en dansk stikkontakt. Kilderne står nederst på siden.`}
          </p>
          <div className="scroll-hint not-prose my-6 overflow-x-auto rounded-card bg-surface shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-bg-blue">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink">Variant</th>
                  {modes.map((k) => (
                    <th key={k} scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">{MODE_LABEL[k]}</th>
                  ))}
                  {isCar && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">WLTP</th>}
                  {hasLabel && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Pr. 100 programmer</th>}
                  {isLabelYear && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Energimærke kWh/år</th>}
                  {hasClass && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Energiklasse</th>}
                  {hasBattery && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Batteri</th>}
                  {m.variants.some((v) => v.adapterW) && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Målt med oplader</th>}
                  {m.variants.some((v) => v.adapterNoLoadW !== undefined) && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Oplader uden last</th>}
                </tr>
              </thead>
              <tbody>
                {m.variants.map((v) => (
                  <tr key={v.name} className="border-t border-border">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-ink">{v.name}</th>
                    {modes.map((k) => (
                      <td key={k} className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.watts[k] !== undefined ? formatWatt(v.watts[k]!) : "–"}</td>
                    ))}
                    {isCar && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.whPerKm !== undefined ? `${da(v.whPerKm / 10)} kWh/100 km` : "–"}</td>}
                    {hasLabel && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.kwhPer100Cycles !== undefined ? `${da(v.kwhPer100Cycles)} kWh` : "–"}</td>}
                    {isLabelYear && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{da(v.annualKwh!, 0)} kWh</td>}
                    {hasClass && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.energyClass ?? "–"}</td>}
                    {hasBattery && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.batteryWh ? (v.batteryWh >= 1000 ? `${da(v.batteryWh / 1000)} kWh` : `${da(v.batteryWh)} Wh`) : "–"}</td>}
                    {m.variants.some((x) => x.adapterW) && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.adapterW ? `${v.adapterW} W` : "–"}</td>}
                    {m.variants.some((x) => x.adapterNoLoadW !== undefined) && <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{v.adapterNoLoadW !== undefined ? formatWatt(v.adapterNoLoadW) : "–"}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="pris-om-aaret" className="mt-10">
          <h2 id="pris-om-aaret" className="font-heading text-2xl font-semibold text-ink">
            Forbrug og pris om året{hasBattery ? " og pr. opladning" : ""}
          </h2>
          <p className="mt-2 text-ink-body">{profile.text}</p>
          <div className="scroll-hint not-prose my-6 overflow-x-auto rounded-card bg-surface shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-bg-blue">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink">Variant</th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">kWh/år</th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Pris/år</th>
                  {unitLabel && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">{unitLabel}</th>}
                  {hasBattery && <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Én fuld opladning</th>}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ v, year, charge, unit }) => (
                  <tr key={v.name} className="border-t border-border">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-semibold text-ink">{v.name}</th>
                    <td className="px-4 py-3 text-right tabular text-ink-body">{da(year, year >= 100 ? 0 : 1)}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-right tabular font-semibold text-ink">{krYear(year)} kr.</td>
                    {unitLabel && (
                      <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">
                        {unit ? (unit.kwh * t.dk >= 10 ? `${formatKr(unit.kwh * t.dk)} kr.` : `${oere(unit.kwh)} øre`) : "–"}
                      </td>
                    )}
                    {hasBattery && (
                      <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">
                        {charge ? (charge * t.dk >= 10 ? `${da(charge, 1)} kWh · ${formatKr(charge * t.dk)} kr.` : `${da(charge, 3)} kWh · ${oere(charge)} øre`) : "–"}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PriceBasis prices={prices} />
        </section>

        <div className="prose-content mt-10" dangerouslySetInnerHTML={{ __html: content }} />

        {family.length > m.variants.length && (
          <section aria-labelledby="sammenlign" className="mt-12">
            <h2 id="sammenlign" className="font-heading text-2xl font-semibold text-ink">Sammenlignet med andre modeller</h2>
            <p className="mt-2 text-ink-body">
              {m.group ? `Kun ${m.group}-varmepumper, alle efter energimærkets årsforbrug, sorteret efter forbrug.` : "Samme brugsprofil for alle, sorteret efter forbrug."}
            </p>
            <div className="scroll-hint not-prose my-6 overflow-x-auto rounded-card bg-surface shadow-card">
              <table className="w-full text-sm">
                <thead className="bg-bg-blue">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink">Model</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">{keyFigure(m.variants[0], m.parent)?.label ?? "Effekt"}</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">kWh/år</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Pris/år</th>
                  </tr>
                </thead>
                <tbody>
                  {family.map(({ m: x, v, year }) => (
                    <tr key={`${x.slug}-${v.name}`} className={`border-t border-border ${x.slug === m.slug ? "bg-brand-50" : ""}`}>
                      <th scope="row" className="whitespace-nowrap px-4 py-3 text-left font-medium">
                        {x.slug === m.slug ? (
                          <span className="text-ink">{x.name} {v.name}</span>
                        ) : (
                          <Link href={modelPath(x)} className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent">{x.name} {v.name}</Link>
                        )}
                      </th>
                      <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink-body">{keyFigure(v, x.parent)?.text ?? "–"}</td>
                      <td className="px-4 py-3 text-right tabular text-ink-body">{da(year, year >= 100 ? 0 : 1)}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-right tabular text-ink">{krYear(year)} kr.</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <p className="mt-10 text-ink-body">
          Mere om typen generelt: <Link href={`/${parent.slug}/`} className="content-link">{parent.name.toLowerCase()} — strømforbrug og pris</Link>.
        </p>
      </article>

      <FaqBand faqs={faqs} />
      <WhoHowWhy path={path} prices={prices} sources={m.sources} />
      <AuthorBox />
    </>
  );
}
