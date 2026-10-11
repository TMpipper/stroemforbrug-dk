import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import PageHero from "@/components/marketing/PageHero";
import FaqBand from "@/components/marketing/FaqBand";
import WhoHowWhy from "@/components/marketing/WhoHowWhy";
import AuthorBox from "@/components/marketing/AuthorBox";
import PriceBasis from "@/components/content/PriceBasis";
import ElpriserWidget from "@/components/widget/ElpriserWidget";
import { getPrices, tokenPrices } from "@/lib/prices";
import { getBothToday, hourSpan } from "@/lib/hourly-today";
import { getAppliance } from "@/lib/appliances";
import { formatKrExact, formatPrice, withCurrentYear } from "@/lib/format";
import { pageMeta } from "@/lib/pages";
import { motifForPath } from "@/lib/visuals/defaults";

const PATH = "/elpriser/";

export const metadata: Metadata = {
  title: withCurrentYear("Elpriser time for time (2026) → Billigste timer i dag"),
  description:
    "Elpriser time for time for Vest- og Østdanmark i dag og i morgen, og hvad én vask, én opvask eller én opladning koster i den billige og den dyre time.",
  alternates: { canonical: `${SITE_CONFIG.url}${PATH}` },
};

/** De apparater, hvor timen betyder mest — én gang hver. */
const SHOWCASE = ["vaskemaskine", "opvaskemaskine", "toerretumbler", "ovn", "elbil", "varmepumpe", "gulvvarme-el", "pool"];

function faqsFor(today: Awaited<ReturnType<typeof getBothToday>>) {
  const d = today.DK1;
  return [
    { question: "Hvornår er strømmen billigst i dag?", answer: `I dag er de tre billigste timer ${hourSpan(d.cheapest)} i Vestdanmark og ${hourSpan(today.DK2.cheapest)} i Østdanmark; de dyreste er ${hourSpan(d.dearest)} i vest. Priserne er markedets grundlag time for time — spotpris, nettarif, Energinets tariffer og elafgift inkl. moms, uden abonnement og tillæg.` },
    { question: "Hvad er forskellen på den billigste og dyreste time?", answer: `I Vestdanmark koster en kWh ${formatPrice(d.min)} kr. i dagens billigste time og ${formatPrice(d.max)} kr. i den dyreste — ${Math.round(((d.max - d.min) / d.max) * 100)} % forskel. Det er den forskel, en timer på vaskemaskinen eller opladeren kan hente.` },
    { question: "Hvornår kommer morgendagens elpriser?", answer: "Nord Pools day-ahead-auktion afgøres ved middagstid, og Energinet udgiver priserne for i morgen omkring kl. 14. Så snart feedet har dem, viser kortet her og tidspunkt-blokkene på apparatsiderne i morgen." },
    { question: "Gælder priserne for mit elselskab?", answer: "Timepriserne er markedets grundlag — det alle spotaftaler bygger på. Dit elselskab lægger sit tillæg og abonnement oveni, men forskellen mellem timerne er den samme, så det billigste tidspunkt er det samme uanset aftale. Har du en fastprisaftale, betaler du den samme pris hele døgnet." },
    { question: "Hvorfor er der to priser — vest og øst?", answer: "Danmark er delt i to prisområder ved Storebælt, DK1 og DK2, med hver sin spotpris, og nettariffen afhænger af dit netselskab. Kortet viser landsdelens repræsentative netområde; på Elpriser.dk kan du slå dit eget postnummer op." },
    { question: "Hvor kommer tallene fra?", answer: "Fra Elpriser.dk's feed, som hver dag henter spotpriserne fra Energi Data Service (Nord Pool day-ahead), nettarifferne fra DataHub og Energinets tariffer og elafgiften med gyldighedsperioder. Strømforbrug.dk er et site af Elpriser.dk og bruger de samme tal." },
  ];
}

export default async function ElpriserPage() {
  const [prices, today] = await Promise.all([getPrices(), getBothToday()]);
  const t = tokenPrices(prices);
  const faqs = faqsFor(today);
  const d = today.DK1;
  const url = `${SITE_CONFIG.url}${PATH}`;
  const showcase = SHOWCASE.map((slug) => getAppliance(slug)).filter((a): a is NonNullable<typeof a> => !!a);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Elpriser time for time", url },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Elpriser time for time — og hvad de betyder for dine apparater",
              description: "Dagens og morgendagens timepriser for Vest- og Østdanmark, og hvad én gang koster i den billige og den dyre time.",
              url,
              datePublished: pageMeta(PATH).published,
              dateModified: pageMeta(PATH).updated,
            }),
          ]),
        }}
      />

      <PageHero
        crumbs={[{ name: "Elpriser time for time" }]}
        eyebrow="Elpriser"
        title="Elpriser time for time — og hvad de betyder for dine apparater"
        lede={`I dag er strømmen billigst ${hourSpan(d.cheapest)} og dyrest ${hourSpan(d.dearest)} i Vestdanmark — ${formatPrice(d.min)} mod ${formatPrice(d.max)} kr./kWh. Kortet herunder er Elpriser.dk&apos;s — skriv dit postnummer for din egen nettarif; tabellen regner, hvad én gang koster i hver ende af døgnet.`}
        lastUpdated={pageMeta(PATH).updated}
        motif={motifForPath(PATH)}
      />

      <div className="container-text py-10 md:py-14">
        {/* Ét kort: det har selv postnummerfeltet, så læseren skifter landsdel og netområde inde i kortet. */}
        <ElpriserWidget sted="dk1" />

        <section className="mt-14" aria-labelledby="apparater-i-dag">
          <h2 id="apparater-i-dag" className="font-heading text-2xl font-semibold text-ink md:text-3xl">
            Hvad koster én gang i dag — i den billige og den dyre time?
          </h2>
          <p className="mt-3 text-ink-body">
            Forbruget pr. gang er hver apparatsides typetal; prisen er dagens timepris i Vestdanmark i det billigste tre-timers vindue
            ({hourSpan(d.cheapest)}, {formatPrice(d.cheapest.krPerKwh)} kr./kWh) og det dyreste ({hourSpan(d.dearest)},{" "}
            {formatPrice(d.dearest.krPerKwh)} kr./kWh). Forskellen er det, en timer kan hente — hver dag.
          </p>
          <div className="not-prose my-6 overflow-x-auto rounded-card bg-surface shadow-card">
            <table className="w-full text-sm">
              <thead className="bg-bg-blue">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink">Apparat</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">kWh pr. gang</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Billigste timer</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Dyreste timer</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink">Forskel</th>
                </tr>
              </thead>
              <tbody>
                {showcase.map((a) => {
                  const kwh = a.calculatorConfig.options[0]?.kwhPerUse ?? 0;
                  const lo = kwh * d.cheapest.krPerKwh;
                  const hi = kwh * d.dearest.krPerKwh;
                  return (
                    <tr key={a.slug} className="border-t border-border">
                      <td className="px-4 py-3 font-semibold text-ink">
                        <Link href={`/${a.slug}/`} className="content-link">{a.name}</Link>
                        <span className="block text-xs font-normal text-ink-muted">{a.calculatorConfig.options[0]?.label}</span>
                      </td>
                      <td className="px-4 py-3 text-right tabular text-ink-body">{kwh.toFixed(1).replace(".", ",")}</td>
                      <td className="px-4 py-3 text-right tabular text-ink-body">{formatKrExact(lo)} kr.</td>
                      <td className="px-4 py-3 text-right tabular text-ink-body">{formatKrExact(hi)} kr.</td>
                      <td className="px-4 py-3 text-right tabular font-semibold text-ink">{formatKrExact(hi - lo)} kr.</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-muted">
            Apparater, der kører hele døgnet — køleskab, fryser, router, varmtvandsbeholder — kan ikke flyttes; for dem tæller døgnets
            gennemsnit ({formatPrice(d.avg)} kr./kWh i vest i dag). Deres sider siger det samme.
          </p>
        </section>

        <div className="prose-content mt-12">
          <h2>Sådan bruger du timepriserne</h2>
          <p>
            Med en spotaftale følger din kWh-pris timen. Nettariffen har sine egne lavlast- og spidslasttider, og de to ligger ofte oven i
            hinanden: aftenen kl. 17–21 er dyr både på spot og net, natten og midt på dagen billig. Det betyder, at vask, opvask, tørring
            og opladning — det forbrug, der er lettest at flytte — næsten altid er billigst at planlægge til natten eller de tidlige
            formiddagstimer. Apparater, der kører døgnet rundt, påvirkes ikke af timen, kun af døgnets gennemsnit.
          </p>
          <p>
            Månedens marginalpris — {formatPrice(t.dk1)} kr./kWh i vest og {formatPrice(t.dk2)} kr./kWh i øst — er det tal, resten af
            Strømforbrug.dk regner årsudgifter med. Timepriserne her er samme grundlag, bare time for time. Har du en fastprisaftale,
            betaler du den samme pris hele døgnet, og så er det kun forbruget, der kan flyttes på.
          </p>
          <h2>Elpriser.dk&apos;s kort på dit eget website</h2>
          <p>
            Kortet ovenfor er Elpriser.dk&apos;s elpris-widget — den samme, enhver kan sætte på sit website gratis. Vælg landsdel eller
            postnummer, og priserne opdateres automatisk hver dag.
          </p>
        </div>
        <PriceBasis prices={prices} className="mt-8" />
      </div>

      <FaqBand faqs={faqs} />
      <WhoHowWhy path={PATH} prices={prices} />
      <AuthorBox />
    </>
  );
}
