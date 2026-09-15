import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CONSUMPTION_BANDS, bandCostRange } from "@/lib/home-insights";
import { EL_PRICE_KR_PER_KWH, formatKr, formatPrice } from "@/lib/pricing";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";
import { withCurrentYear } from "@/lib/pricing";

export const metadata: Metadata = {
  title: withCurrentYear("Gennemsnitligt strømforbrug (2026) → Se forbrug pr. husstand"),
  description:
    "Det gennemsnitlige strømforbrug i Danmark er 3.000-4.500 kWh/år for en husstand uden varmepumpe. Se forbrug pr. person, familie og boligtype.",
  alternates: { canonical: `${SITE_CONFIG.url}/gennemsnitligt/` },
};

const faqs = [
  { question: "Hvad er det gennemsnitlige strømforbrug i Danmark?", answer: "Det gennemsnitlige strømforbrug for en dansk husstand uden varmepumpe er ca. 3.000-4.500 kWh/år, svarende til 5.580-8.370 kr. Med varmepumpe stiger det til 6.000-10.000 kWh/år." },
  { question: "Hvor meget strøm bruger en person om året?", answer: "En enkelt person bruger typisk 1.500-2.500 kWh/år (2.790-4.650 kr.). I en lejlighed er forbruget lavere (1.500-2.000 kWh), i et hus højere (2.000-2.500 kWh)." },
  { question: "Hvor meget strøm bruger en familie på 4?", answer: "En familie på 4 bruger typisk 4.000-5.500 kWh/år uden varmepumpe (7.440-10.230 kr.). Med varmepumpe stiger det til 7.000-11.000 kWh/år." },
  { question: "Er mit strømforbrug normalt?", answer: "Se din seneste elregning og sammenlign med gennemsnittet for din husstandsstørrelse. Under gennemsnittet er godt, over 20% mere end gennemsnittet tyder på besparelsespotentiale." },
  { question: "Hvad koster 1 kWh strøm i 2026?", answer: "Den gennemsnitlige elpris i Danmark er ca. 1,86 kr./kWh inkl. afgifter, transport og moms. Prisen varierer med spotprisen og dit elselskab — de billigste aftaler ligger ca. 10 øre under gennemsnittet på 1,76 kr./kWh før abonnement." },
  { question: "Hvordan kan jeg sænke mit strømforbrug?", answer: "De mest effektive tiltag er: 1) skift gamle hvidevarer til A-mærkede, 2) reducer standby-forbrug, 3) skift til LED-pærer, 4) vælg et billigere elselskab, 5) brug eco-programmer på vaskemaskine og opvaskemaskine." },
];

export default function GennemsnitligtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Gennemsnitligt strømforbrug", url: `${SITE_CONFIG.url}/gennemsnitligt/` },
            ]),
            faqSchema(faqs),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Gennemsnitligt strømforbrug" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Gennemsnitligt strømforbrug i Danmark 2026
        </h1>

        <QuickAnswer>
          <p>
            Det gennemsnitlige strømforbrug for en dansk husstand uden varmepumpe
            er 3.000-4.500 kWh om året, svarende til 5.580-8.370 kr. ved en
            elpris på 1,86 kr./kWh. Med varmepumpe stiger det til 6.000-10.000
            kWh/år (15.000-25.000 kr.).
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Gennemsnitligt strømforbrug pr. husstandstype</h2>
          <p>
            Strømforbruget varierer markant afhængigt af husstandens størrelse,
            boligtype og opvarmningsform. Tabellen nedenfor viser det typiske
            forbrug for danske husstande i 2026.
          </p>
          <table>
            <thead>
              <tr>
                <th>Husstandstype</th>
                <th>kWh/år (uden VP)</th>
                <th>kWh/år (med VP)</th>
                <th>Pris/år</th>
              </tr>
            </thead>
            <tbody>
              {CONSUMPTION_BANDS.map((b) => {
                const [lo, hi] = bandCostRange(b);
                return (
                  <tr key={b.label}>
                    <td>
                      <strong>
                        {b.href ? <Link href={b.href}>{b.label}</Link> : b.label}
                      </strong>
                    </td>
                    <td>
                      {b.withoutHeatPump[0].toLocaleString("da-DK")}-
                      {b.withoutHeatPump[1].toLocaleString("da-DK")}
                    </td>
                    <td>
                      {b.withHeatPump
                        ? `${b.withHeatPump[0].toLocaleString("da-DK")}-${b.withHeatPump[1].toLocaleString("da-DK")}`
                        : "—"}
                    </td>
                    <td>
                      {formatKr(lo)}-{formatKr(hi)} kr.
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p>
            <em>
              VP = varmepumpe. Priser beregnet med 1,86 kr./kWh. Husstande med
              varmepumpe har markant højere elforbrug, men lavere samlet
              varmepris fordi varmepumpen erstatter gas/olie.
            </em>
          </p>

          <h2>Hvad bruger mest strøm i husstanden?</h2>
          <p>
            I en gennemsnitlig dansk husstand uden varmepumpe fordeler
            strømforbruget sig typisk sådan:
          </p>
          <ol>
            <li>
              <strong>
                <Link href="/koeleskab/">Køl og frys</Link>
              </strong>{" "}
              — 15-25% af det samlede forbrug (kører 24/7)
            </li>
            <li>
              <strong>Madlavning</strong> — 10-15% (
              <Link href="/ovn/">ovn</Link>,{" "}
              <Link href="/opvaskemaskine/">opvaskemaskine</Link>)
            </li>
            <li>
              <strong>Tøjvask og tørring</strong> — 10-15% (
              <Link href="/vaskemaskine/">vaskemaskine</Link> +{" "}
              <Link href="/toerretumbler/">tørretumbler</Link>)
            </li>
            <li>
              <strong>Underholdning</strong> — 10-15% (
              <Link href="/tv/">tv</Link>, <Link href="/computer/">computer</Link>
              , <Link href="/router/">router</Link>)
            </li>
            <li>
              <strong>Belysning</strong> — 10-15%
            </li>
            <li>
              <strong>Øvrige apparater</strong> — 15-25%
            </li>
          </ol>

          <h2>Er dit strømforbrug normalt?</h2>
          <p>
            For at vurdere om dit forbrug er normalt, find din seneste
            årsopgørelse og sammenlign med tabellen ovenfor. Er dit forbrug
            mere end 20% over gennemsnittet for din husstandstype, er der
            sandsynligvis besparelsespotentiale — typisk i form af gamle
            hvidevarer, standby-forbrug eller dårlige vaner.
          </p>
          <p>
            Brug vores <Link href="/beregner/">strømberegner</Link> til at
            beregne hvad hvert enkelt apparat koster dig — det giver det bedste
            overblik over hvor du kan spare.
          </p>
        </div>

        <AffiliateCta />

        {/* FAQ */}
        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">
            Ofte stillede spørgsmål
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-ink-200 rounded-card">
                <summary className="cursor-pointer px-5 py-4 font-medium text-ink-900 hover:bg-surface-alt transition-colors rounded-card">
                  {faq.question}
                </summary>
                <div className="px-5 pb-4 text-sm text-ink-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <h2>Gennemsnit er et dårligt mål for en enkelt husstand</h2>
          <p>
            Et gennemsnit på tværs af alle danske husstande dækker over enormt
            forskellige boliger. En lejlighed med fjernvarme og en enlig beboer og et
            parcelhus med varmepumpe, elbil og fem personer indgår i samme tal — og
            ligger op til ti gange fra hinanden. Derfor siger &quot;gennemsnittet&quot;
            meget lidt om, hvorvidt netop dit forbrug er fornuftigt.
          </p>
          <p>
            Sammenlign i stedet med din egen husstandstype i tabellen ovenfor, og
            bemærk, om du har elvarme eller elbil. De to ting flytter mere end alt
            andet tilsammen. Vil du vide, om dit forbrug er for højt, er{" "}
            <Link href="/husstand/">normalt forbrug pr. husstand</Link> den rigtige
            side.
          </p>

          <h2>Hvorfor svinger forbruget over året?</h2>
          <p>
            Danske husstande bruger markant mere strøm om vinteren end om sommeren, og
            det skyldes tre ting, der forstærker hinanden: der er mørkt flere timer i
            døgnet, varmen skal holdes ved lige, og køl og frys arbejder omvendt
            mindre, fordi køkkenet er køligere.
          </p>
          <table>
            <thead>
              <tr><th>Periode</th><th>Andel af årsforbruget</th><th>Hvad driver det</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>December-februar</strong></td><td>ca. 30-35 %</td><td>Belysning, opvarmning, tørretumbler frem for tørresnor</td></tr>
              <tr><td><strong>Marts-maj</strong></td><td>ca. 24 %</td><td>Aftagende varmebehov</td></tr>
              <tr><td><strong>Juni-august</strong></td><td>ca. 16-18 %</td><td>Lavest — lange lyse dage, tøj tørrer ude</td></tr>
              <tr><td><strong>September-november</strong></td><td>ca. 25 %</td><td>Stigende varme- og lysbehov</td></tr>
            </tbody>
          </table>
          <p>
            Har du varmepumpe, er udsvinget langt kraftigere — se{" "}
            <Link href="/varmepumpe/luft-til-vand/">luft-til-vand varmepumpe</Link>, hvor
            januar typisk koster ti gange så meget som juli.
          </p>

          <h2>Er gennemsnittet faldet eller steget?</h2>
          <p>
            Selve elforbruget pr. husstand har været svagt faldende i en årrække, fordi
            hvidevarer, belysning og elektronik er blevet markant mere effektive. En
            LED-pære bruger under en tiendedel af en glødepære, og et køleskab fra 2026
            bruger omtrent halvdelen af et fra 2010.
          </p>
          <p>
            Den udvikling bliver dog mere end opvejet af elektrificeringen. Hver gang en
            husstand skifter gasfyr ud med en <Link href="/varmepumpe/">varmepumpe</Link>{" "}
            eller en benzinbil med en <Link href="/elbil/">elbil</Link>, flytter energi
            fra et andet marked over på elregningen. Den samlede energiudgift falder,
            men elforbruget stiger — og det er derfor, et stigende elforbrug ikke i sig
            selv er et dårligt tegn.
          </p>

          <h2>Hvad betyder det for din elregning?</h2>
          <p>
            Ved den aktuelle elpris på {formatPrice(EL_PRICE_KR_PER_KWH)} kr./kWh koster
            hver 1.000 kWh omkring {formatKr(1000 * EL_PRICE_KR_PER_KWH)} kr. om året.
            Ligger du 1.000 kWh over gennemsnittet for din husstandstype, er det altså
            den regning, det handler om — og det er som regel én konkret årsag, ikke
            mange små.
          </p>

        </div>
      </article>
    </>
  );
}
