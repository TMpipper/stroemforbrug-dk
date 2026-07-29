import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Hvad koster det at lade en elbil? 2026 → Se pris pr. kWh",
  description:
    "Det koster 75-175 kr. at lade en elbil fuldt op derhjemme i 2026 (2,50 kr./kWh). Se pris pr. km, sammenlign hjemmeladning vs. offentlig ladning, og beregn din månedlige udgift.",
  alternates: { canonical: `${SITE_CONFIG.url}/hvad-koster-det-at-lade-en-elbil/` },
};

const faqs = [
  { question: "Hvad koster det at lade en elbil derhjemme?", answer: "Med en gennemsnitlig elpris på 2,50 kr./kWh koster det 75-175 kr. at lade en elbil fuldt op derhjemme, afhængigt af batteristørrelse (30-70 kWh). Med det billigste elselskab (1,54 kr./kWh) koster det kun 46-108 kr." },
  { question: "Hvad koster det pr. km at køre elbil?", answer: "En elbil bruger typisk 15-20 kWh/100 km. Med en elpris på 2,50 kr./kWh koster det 0,38-0,50 kr./km — ca. 3-4 gange billigere end en benzinbil (1,20-1,60 kr./km)." },
  { question: "Er det billigere at lade hjemme eller offentligt?", answer: "Hjemmeladning er altid billigst: 2,00-3,00 kr./kWh. Offentlig AC-ladning koster 3,50-5,00 kr./kWh, og hurtigladning (DC) koster 4,50-8,00 kr./kWh. Hjemmeladning sparer dig 40-70% sammenlignet med hurtigladning." },
  { question: "Hvor lang tid tager det at lade en elbil derhjemme?", answer: "Med en standard hjemmelader (7,4 kW / 1-faset 32A) tager en fuld opladning 5-10 timer. Med en 11 kW 3-faset lader tager det 3-6 timer. Med almindelig stikkontakt (2,3 kW) tager det 15-30 timer — det frarådes til daglig brug." },
  { question: "Hvad koster en hjemmelader til elbil?", answer: "En hjemmelader (wallbox) koster 5.000-15.000 kr. inkl. installation. Det er en engangsinvestering der betaler sig hjem hurtigt, da hjemmeladning er markant billigere end offentlig ladning. Vælg en med smart styring for at lade om natten." },
  { question: "Hvad koster det i strøm at køre 15.000 km om året?", answer: "Med et gennemsnitligt forbrug på 17 kWh/100 km og 15.000 km/år bruger du ca. 2.550 kWh. Med 2,50 kr./kWh koster det 6.375 kr./år — mod ca. 15.000-18.000 kr. for en benzinbil. Du sparer 9.000-12.000 kr./år." },
  { question: "Stiger min elregning meget med en elbil?", answer: "Ja, en elbil øger dit årlige elforbrug med typisk 2.000-3.500 kWh (5.000-8.750 kr./år). Men det er stadig langt billigere end benzin/diesel. For at minimere udgiften, lad om natten med spotpris og vælg billigste elselskab." },
  { question: "Kan man lade en elbil med solceller?", answer: "Ja, solceller og elbil er en perfekt kombination. Et typisk solcelleanlæg producerer 4.000-8.000 kWh/år — mere end nok til at dække elbilens forbrug. Med en smart lader kan du programmere bilen til at lade når solcellerne producerer mest." },
];

export default function ElbilLadningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Hvad koster det at lade en elbil", url: `${SITE_CONFIG.url}/hvad-koster-det-at-lade-en-elbil/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Hvad koster det at lade en elbil? 2026",
              description: "Det koster 75-175 kr. at lade en elbil fuldt op derhjemme med en elpris på 2,50 kr./kWh.",
              url: `${SITE_CONFIG.url}/hvad-koster-det-at-lade-en-elbil/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Hvad koster det at lade en elbil" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Hvad koster det at lade en elbil? 2026
        </h1>

        <QuickAnswer>
          <p>
            Det koster 75-175 kr. at lade en elbil fuldt op derhjemme med en
            gennemsnitlig elpris på 2,50 kr./kWh. Pr. kilometer koster det
            0,38-0,50 kr. — ca. 3-4 gange billigere end benzin. Med det
            billigste elselskab (Altid Energi, 1,54 kr./kWh) falder prisen til
            46-108 kr. pr. fuld opladning.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Opladningspris for 5 populære elbiler</h2>
          <p>
            Prisen for at lade en elbil afhænger af batteristørrelse, forbrug og
            kWh-pris. Nedenstående tabel viser hvad det koster at lade 5 af de
            mest populære elbiler i Danmark fuldt op derhjemme — både med
            gennemsnitspris (2,50 kr./kWh) og med Altid Energi (1,54 kr./kWh).
          </p>
          <table>
            <thead>
              <tr><th>Elbil</th><th>Batteri (kWh)</th><th>Rækkevidde (km)</th><th>Pris fuld ladning</th><th>Pris m/ Altid Energi</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Tesla Model 3 LR</strong></td><td>75</td><td>~580</td><td>188 kr.</td><td>116 kr.</td></tr>
              <tr><td><strong>VW ID.4 Pro</strong></td><td>77</td><td>~520</td><td>193 kr.</td><td>119 kr.</td></tr>
              <tr><td><strong>Hyundai Kona Electric</strong></td><td>64</td><td>~460</td><td>160 kr.</td><td>99 kr.</td></tr>
              <tr><td><strong>Skoda Enyaq iV 80</strong></td><td>77</td><td>~510</td><td>193 kr.</td><td>119 kr.</td></tr>
              <tr><td><strong>Peugeot e-208</strong></td><td>50</td><td>~360</td><td>125 kr.</td><td>77 kr.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Rækkevidde er WLTP-tal. I praksis er rækkevidden 10-20% lavere,
            især om vinteren. Ladepris inkluderer et typisk ladetab på 10-15%.</em>
          </p>

          <h2>Hjemmeladning vs. offentlig ladning vs. hurtigladning</h2>
          <p>
            Der er tre måder at lade en elbil på, og prisforskellen er markant.
            Hjemmeladning er altid billigst, mens offentlig hurtigladning (DC)
            kan koste 3-4 gange mere pr. kWh. For daglig pendling er en
            hjemmelader den bedste investering du kan gøre.
          </p>
          <table>
            <thead>
              <tr><th>Ladetype</th><th>Effekt</th><th>Pris/kWh</th><th>Fuld ladning (75 kWh)</th><th>Tid</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Hjemme (wallbox)</strong></td><td>7,4-11 kW</td><td>2,00-3,00 kr.</td><td>150-225 kr.</td><td>5-10 timer</td></tr>
              <tr><td><strong>Hjemme (stikkontakt)</strong></td><td>2,3 kW</td><td>2,00-3,00 kr.</td><td>150-225 kr.</td><td>20-32 timer</td></tr>
              <tr><td><strong>Offentlig AC</strong></td><td>11-22 kW</td><td>3,50-5,00 kr.</td><td>263-375 kr.</td><td>3-7 timer</td></tr>
              <tr><td><strong>Hurtigladning (DC)</strong></td><td>50-150 kW</td><td>4,50-8,00 kr.</td><td>338-600 kr.</td><td>25-60 min.</td></tr>
              <tr><td><strong>Supercharger (Tesla)</strong></td><td>150-250 kW</td><td>3,50-5,50 kr.</td><td>263-413 kr.</td><td>15-40 min.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Hjemmeladning via stikkontakt (Schuko) frarådes til daglig brug
            pga. risiko for overophedning. Investér i en dedikeret wallbox
            (hjemmelader).</em>
          </p>

          <h2>Pris pr. kilometer — elbil vs. benzin vs. diesel</h2>
          <p>
            Den reelle besparelse ved at køre elbil fremgår tydeligt når du
            sammenligner pris pr. kilometer. En elbil koster 0,38-0,50 kr./km
            med hjemmeladning, mens en benzinbil koster 1,20-1,60 kr./km. Det
            er en besparelse på 60-75% pr. kilometer.
          </p>
          <table>
            <thead>
              <tr><th>Drivmiddel</th><th>Forbrug</th><th>Pris pr. enhed</th><th>Pris pr. km</th><th>15.000 km/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Elbil (hjemme)</strong></td><td>17 kWh/100 km</td><td>2,50 kr./kWh</td><td>0,43 kr.</td><td>6.375 kr.</td></tr>
              <tr><td><strong>Elbil (Altid Energi)</strong></td><td>17 kWh/100 km</td><td>1,54 kr./kWh</td><td>0,26 kr.</td><td>3.927 kr.</td></tr>
              <tr><td><strong>Elbil (hurtiglader)</strong></td><td>17 kWh/100 km</td><td>6,00 kr./kWh</td><td>1,02 kr.</td><td>15.300 kr.</td></tr>
              <tr><td><strong>Benzinbil</strong></td><td>6,5 l/100 km</td><td>13,50 kr./l</td><td>0,88 kr.</td><td>13.163 kr.</td></tr>
              <tr><td><strong>Dieselbil</strong></td><td>5,5 l/100 km</td><td>12,50 kr./l</td><td>0,69 kr.</td><td>10.313 kr.</td></tr>
            </tbody>
          </table>
          <p>
            <em>Bemærk: Hvis du udelukkende hurtiglader, forsvinder besparelsen
            næsten. Nøglen til billig elbilkørsel er hjemmeladning om natten.</em>
          </p>

          <h2>Månedlig ladeudgift — realistiske tal</h2>
          <p>
            De fleste danskere kører 10.000-20.000 km om året. Her er de
            månedlige strømudgifter for en elbil der kører 15.000 km/år med
            hjemmeladning ved forskellige elpriser.
          </p>
          <table>
            <thead>
              <tr><th>Elpris</th><th>kWh/år</th><th>Pris/måned</th><th>Pris/år</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1,54 kr./kWh (Altid Energi)</strong></td><td>2.550</td><td>327 kr.</td><td>3.927 kr.</td></tr>
              <tr><td><strong>2,00 kr./kWh (nat-ladning)</strong></td><td>2.550</td><td>425 kr.</td><td>5.100 kr.</td></tr>
              <tr><td><strong>2,50 kr./kWh (gennemsnit)</strong></td><td>2.550</td><td>531 kr.</td><td>6.375 kr.</td></tr>
              <tr><td><strong>3,00 kr./kWh (dyr periode)</strong></td><td>2.550</td><td>638 kr.</td><td>7.650 kr.</td></tr>
            </tbody>
          </table>
          <p>
            Til sammenligning bruger en benzinbil ca. 975 l benzin om året ved
            15.000 km (6,5 l/100 km), svarende til ca. 13.163 kr./år ved 13,50
            kr./l. Besparelsen ved elbil er 5.500-9.200 kr./år afhængigt af
            din elpris.
          </p>

          <h2>Spar mest muligt på elbil-ladning</h2>
          <p>
            Med de rette valg kan du reducere dine ladeudgifter med op til 60%
            sammenlignet med gennemsnittet. Her er de vigtigste tiltag for at
            lade din elbil billigst muligt.
          </p>

          <h3>1. Vælg billigste elselskab</h3>
          <p>
            Skift til et elselskab med 0 øre tillæg og 0 kr. abonnement (f.eks.
            Altid Energi). Forskellen mellem 2,50 kr./kWh og 1,54 kr./kWh er
            næsten 1,00 kr./kWh — det sparer dig ca. 2.450 kr./år på
            elbil-ladning alene. Læs mere om <Link href="/hvad-koster-en-kwh/">hvad en kWh koster</Link>.
          </p>

          <h3>2. Lad om natten med spotpris</h3>
          <p>
            Med en spotprisaftale varierer kWh-prisen time for time. Om natten
            (kl. 0-6) er spotprisen typisk 30-50% lavere end i spidstimerne.
            De fleste hjemmeladere og elbiler har en timer-funktion, så du kan
            indstille ladningen til at starte kl. 1-2 om natten og være færdig
            inden morgen.
          </p>

          <h3>3. Investér i en smart hjemmelader</h3>
          <p>
            En smart hjemmelader (wallbox) med app-styring koster 5.000-15.000
            kr. inkl. installation. Den kan automatisk lade når strømmen er
            billigst og stoppe under spidstimerne. Over 10 år sparer en smart
            lader dig 10.000-25.000 kr. sammenlignet med lad-når-som-helst.
          </p>

          <h3>4. Overvej solceller</h3>
          <p>
            Et typisk solcelleanlæg (6-10 kWp) producerer 4.000-8.000 kWh/år —
            mere end nok til at dække elbilens forbrug på ca. 2.550 kWh/år.
            Med smart styring kan elbilen lade når solcellerne producerer mest
            (midt på dagen), og du betaler 0 kr./kWh for den strøm. Overskydende
            solstrøm sælges til nettet.
          </p>

          <h2>Elbilens effekt på din samlede elregning</h2>
          <p>
            En elbil øger dit årlige elforbrug markant. For en husstand der i
            forvejen bruger 4.000 kWh/år vil en elbil tilføje ca. 2.000-3.500
            kWh — en stigning på 50-88%. Det er vigtigt at medregne denne
            stigning når du vælger elselskab og planlægger dit budget.
          </p>
          <table>
            <thead>
              <tr><th>Scenario</th><th>Forbrug/år</th><th>Pris/år (2,50 kr.)</th><th>Pris/år (1,54 kr.)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Husstand uden elbil</strong></td><td>4.000 kWh</td><td>10.000 kr.</td><td>6.160 kr.</td></tr>
              <tr><td><strong>Husstand + elbil (10.000 km)</strong></td><td>5.700 kWh</td><td>14.250 kr.</td><td>8.778 kr.</td></tr>
              <tr><td><strong>Husstand + elbil (15.000 km)</strong></td><td>6.550 kWh</td><td>16.375 kr.</td><td>10.087 kr.</td></tr>
              <tr><td><strong>Husstand + elbil (20.000 km)</strong></td><td>7.400 kWh</td><td>18.500 kr.</td><td>11.396 kr.</td></tr>
            </tbody>
          </table>
          <p>
            Selvom elregningen stiger, sparer du stadig markant sammenlignet med
            benzin. En benzinbil der kører 15.000 km koster ca. 13.163 kr./år i
            brændstof — elbilen koster kun 6.375 kr. i strøm (eller 3.927 kr. med
            Altid Energi). Nettobesparelsen er 7.000-9.200 kr./år.
          </p>

          <h2>Hvad med varmepumpe og elbil?</h2>
          <p>
            Mange husstande med <Link href="/varmepumpe/">varmepumpe</Link> og elbil
            har et samlet elforbrug på 8.000-14.000 kWh/år. Det gør valg af
            elselskab endnu vigtigere — forskellen mellem 2,50 kr./kWh og 1,54
            kr./kWh er op til 13.440 kr./år ved 14.000 kWh. Har du både
            varmepumpe og elbil, er det den absolut vigtigste besparelse at
            vælge det billigste elselskab.
          </p>
          <p>
            Se mere om <Link href="/elbil/">elbilens strømforbrug</Link>,
            <Link href="/varmepumpe/"> varmepumpens strømforbrug</Link> og
            brug vores <Link href="/beregner/">strømberegner</Link> til at beregne
            din samlede årlige udgift.
          </p>
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
