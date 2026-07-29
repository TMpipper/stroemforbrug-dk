import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Hvad koster en kWh i 2026? → Se aktuel pris inkl. afgifter",
  description:
    "En kWh koster i gennemsnit 2,50 kr. inkl. alle afgifter i 2026. Se prisens sammensætning, spotpris vs. fastpris, og hvilke elselskaber der er billigst.",
  alternates: { canonical: `${SITE_CONFIG.url}/hvad-koster-en-kwh/` },
};

const faqs = [
  { question: "Hvad koster 1 kWh strøm i Danmark i 2026?", answer: "I gennemsnit koster 1 kWh ca. 2,50 kr. inkl. spotpris, transport, elafgift og moms. Den rene spotpris svinger mellem 0,50-3,00 kr., men med faste tillæg lander totalen typisk på 2,00-3,50 kr." },
  { question: "Hvad er inkluderet i kWh-prisen?", answer: "Prisen består af: spotpris (ca. 40%), nettarif/transport (ca. 20%), elafgift (0,8 øre/kWh fra 2026), moms (25%), og dit elselskabs tillæg (0-10 øre). Den fulde pris er alt dette lagt sammen." },
  { question: "Hvornår er strømmen billigst?", answer: "Strømmen er billigst om natten (kl. 0-6) og dyrest i aftentimerne (kl. 17-20). Forskellen kan være 0,50-2,00 kr./kWh. Med fleksibel elpris betaler du spotprisen time for time." },
  { question: "Hvad koster en kWh hos Altid Energi?", answer: "Altid Energi tilbyder spotpris + 0 øre tillæg + 0 kr. abonnement, hvilket giver den laveste samlede kWh-pris. I gennemsnit ca. 1,54 kr./kWh (DK1) inkl. transport og afgifter." },
  { question: "Hvad er forskellen på spotpris og fastpris?", answer: "Spotpris varierer time for time med markedet — du betaler den reelle markedspris. Fastpris er en fast kWh-pris (typisk højere) der ikke ændrer sig. De fleste sparer penge med spotpris." },
  { question: "Er elafgiften sænket i 2026?", answer: "Ja, elafgiften er sænket markant til 0,8 øre/kWh (fra 76 øre). Det gør strøm billigere og varmepumper mere fordelagtige end nogensinde." },
  { question: "Hvad koster en kWh inkl. alt?", answer: "Inkl. alle komponenter (spotpris, nettarif, elafgift, PSO-tillæg, moms og elselskabstillæg) koster 1 kWh typisk 2,00-3,50 kr. i 2026. Gennemsnittet er ca. 2,50 kr." },
  { question: "Hvordan finder jeg den billigste kWh-pris?", answer: "Vælg et elselskab med 0 øre tillæg og lavt/intet abonnement (f.eks. Altid Energi). Brug strøm når spotprisen er lav (nat/tidlig morgen). Tjek Eloverblik.dk for dine faktiske priser." },
];

export default function HvadKosterEnKwhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Hvad koster en kWh", url: `${SITE_CONFIG.url}/hvad-koster-en-kwh/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Hvad koster en kWh i 2026?",
              description: "En kWh koster i gennemsnit 2,50 kr. inkl. alle afgifter.",
              url: `${SITE_CONFIG.url}/hvad-koster-en-kwh/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Hvad koster en kWh" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Hvad koster en kWh i 2026?
        </h1>

        <QuickAnswer>
          <p>
            En kWh strøm koster i gennemsnit ca. 2,50 kr. i Danmark i 2026 inkl.
            spotpris, transport, elafgift og moms. Prisen varierer fra ca. 1,50
            kr. om natten til 3,50+ kr. i spidstimerne. Med det billigste
            elselskab (Altid Energi) betaler du ca. 1,54 kr./kWh i gennemsnit.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Sammensætningen af kWh-prisen</h2>
          <p>
            Prisen du betaler for 1 kWh er sammensat af flere komponenter. Spotprisen
            udgør ca. 40% af den samlede pris, mens resten er faste afgifter og transport
            som du betaler uanset elselskab.
          </p>
          <table>
            <thead>
              <tr><th>Komponent</th><th>Typisk pris</th><th>Andel</th><th>Kan du påvirke?</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Spotpris (Nord Pool)</strong></td><td>0,50-2,50 kr.</td><td>~40%</td><td>Ja (brug strøm om natten)</td></tr>
              <tr><td><strong>Nettarif (transport)</strong></td><td>0,30-0,60 kr.</td><td>~20%</td><td>Nej (afhænger af netselskab)</td></tr>
              <tr><td><strong>Elafgift</strong></td><td>0,008 kr.</td><td>&lt;1%</td><td>Nej (fastsat af staten)</td></tr>
              <tr><td><strong>Elselskabstillæg</strong></td><td>0-0,10 kr.</td><td>0-4%</td><td>Ja (vælg billigste selskab)</td></tr>
              <tr><td><strong>Moms (25%)</strong></td><td>~0,50 kr.</td><td>~20%</td><td>Nej</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>~2,50 kr.</strong></td><td>100%</td><td></td></tr>
            </tbody>
          </table>

          <h2>Spotpris vs. fastpris — hvad er billigst?</h2>
          <p>
            De fleste danske elselskaber tilbyder spotpris (du betaler Nord Pools
            timepris) eller fastpris (en fast kWh-pris). Over et helt år er spotpris
            næsten altid billigst — du sparer typisk 10-20% sammenlignet med fastpris.
            Til gengæld varierer din regning fra måned til måned.
          </p>
          <table>
            <thead>
              <tr><th>Pristype</th><th>Gennemsnit kWh</th><th>Fordel</th><th>Ulempe</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Spotpris</strong></td><td>~2,50 kr.</td><td>Billigst over tid</td><td>Varierer time for time</td></tr>
              <tr><td><strong>Fastpris</strong></td><td>~3,00 kr.</td><td>Forudsigelig regning</td><td>Typisk 10-20% dyrere</td></tr>
            </tbody>
          </table>

          <h2>Hvornår er strømmen billigst?</h2>
          <p>
            Med spotpris betaler du den faktiske markedspris time for time. Strømmen er
            billigst om natten (kl. 0-6) og dyrest i aftentimerne (kl. 17-20). Ved at
            køre <Link href="/opvaskemaskine/">opvaskemaskine</Link>,
            <Link href="/vaskemaskine/"> vaskemaskine</Link> og
            <Link href="/toerretumbler/"> tørretumbler</Link> om natten kan du spare
            20-40% på disse apparaters strømudgift.
          </p>
          <table>
            <thead>
              <tr><th>Tidsrum</th><th>Typisk spotpris</th><th>Total kWh-pris</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Nat (00-06)</strong></td><td>0,20-0,80 kr.</td><td>1,50-2,00 kr.</td></tr>
              <tr><td><strong>Morgen (06-09)</strong></td><td>0,80-1,50 kr.</td><td>2,00-2,80 kr.</td></tr>
              <tr><td><strong>Dag (09-17)</strong></td><td>0,50-1,20 kr.</td><td>1,80-2,50 kr.</td></tr>
              <tr><td><strong>Aften (17-20)</strong></td><td>1,00-3,00 kr.</td><td>2,50-4,30 kr.</td></tr>
              <tr><td><strong>Sen aften (20-00)</strong></td><td>0,50-1,00 kr.</td><td>1,80-2,30 kr.</td></tr>
            </tbody>
          </table>

          <h2>Elafgiften i 2026 — historisk lav</h2>
          <p>
            Elafgiften er blevet sænket markant i de seneste år — fra 76 øre/kWh til
            blot 0,8 øre/kWh i 2026. Det gør strøm billigere og betyder at
            <Link href="/varmepumpe/"> varmepumper</Link> og <Link href="/elbil/">elbiler</Link> nu er
            langt mere fordelagtige end for få år siden. For en familie der bruger
            4.000 kWh/år svarer den lavere elafgift til en besparelse på ca.
            3.000 kr./år sammenlignet med 2020-niveauet.
          </p>

          <h2>Hvad koster strøm hos de billigste selskaber?</h2>
          <p>
            Den samlede kWh-pris afhænger af dit elselskabs tillæg og abonnement. Her er
            de billigste udbydere i 2026 (baseret på gennemsnitlig spotpris + tillæg).
          </p>
          <table>
            <thead>
              <tr><th>Elselskab</th><th>Tillæg/kWh</th><th>Abonnement/md.</th><th>Total kWh-pris (gns.)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Altid Energi</strong></td><td>0 øre</td><td>0 kr.</td><td>~1,54 kr.</td></tr>
              <tr><td><strong>SEF Energi</strong></td><td>2 øre</td><td>29 kr.</td><td>~1,65 kr.</td></tr>
              <tr><td><strong>EWII</strong></td><td>4 øre</td><td>0 kr. (intro)</td><td>~1,67 kr.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Forskellen mellem billigste og gennemsnittet kan spare dig 1.000-3.000 kr./år
            afhængigt af dit <Link href="/husstand/">husstandens forbrug</Link>.</em>
          </p>

          <h2>Sådan sænker du din kWh-pris</h2>
          <p>
            Du kan påvirke ca. halvdelen af din kWh-pris. Spotprisen og nettariffen
            kan du ikke ændre, men du kan optimere hvornår du bruger strøm og hvem
            du køber den af.
          </p>
          <ol>
            <li><strong>Skift til billigste elselskab</strong> — 0 øre tillæg + 0 kr. abonnement</li>
            <li><strong>Brug strøm om natten</strong> — timer-funktion på hvidevarer</li>
            <li><strong>Reducer dit forbrug</strong> — se vores <Link href="/beregner/">strømberegner</Link></li>
            <li><strong>Tjek din nettarif</strong> — lavtarifperioder varierer med netselskab</li>
          </ol>
        </div>

        <AffiliateCta />

        <div className="my-10">
          <h2 className="font-heading text-xl font-medium text-ink-900 mb-6">Ofte stillede spørgsmål</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-ink-200 rounded-card">
                <summary className="cursor-pointer px-5 py-4 font-medium text-ink-900 hover:bg-surface-alt transition-colors rounded-card">{faq.question}</summary>
                <div className="px-5 pb-4 text-sm text-ink-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
