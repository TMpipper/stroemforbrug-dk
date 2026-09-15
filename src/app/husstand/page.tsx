import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";
import { withCurrentYear } from "@/lib/pricing";


const faqs = [
  {
    question: "Hvad er et normalt strømforbrug for en husstand?",
    answer:
      "Uden elvarme er 1.500-2.500 kWh normalt for én person, 2.000-3.500 for to og 3.500-5.000 for en familie på fire. Ligger du mere end omkring 30 % over spændet for din husstandstype, er der som regel en konkret årsag — oftest elvarme, elbil, gammel fryser eller et varmtvandsanlæg.",
  },
  {
    question: "Hvorfor er mit strømforbrug så højt?",
    answer:
      "De fire hyppigste årsager er elopvarmning af et rum eller et helt hus, en elbil der lades hjemme, en gammel fryser eller et køleskab med rim, og en elvandvarmer. Tilsammen forklarer de næsten altid et forbrug, der ligger markant over det normale — belysning og elektronik gør det sjældent.",
  },
  {
    question: "Hvor meget stiger forbruget med en varmepumpe?",
    answer:
      "Typisk 2.000-6.000 kWh om året afhængigt af boligens størrelse, isolering og varmepumpetype. Elregningen stiger altså mærkbart, men varmepumpen erstatter gas eller olie, så den samlede varmeudgift falder.",
  },
  {
    question: "Bruger en stor familie mere strøm pr. person?",
    answer:
      "Nej, som regel mindre. Køleskab, fryser, belysning og opvarmning koster det samme, uanset om der bor to eller fem i boligen, så de faste poster fordeles på flere. Det er derfor, forbruget pr. person falder, selv om husstandens samlede forbrug stiger.",
  },
  {
    question: "Hvordan finder jeg mit eget forbrug?",
    answer:
      "Log ind på Eloverblik.dk med MitID og se dit faktiske forbrug time for time. Ser du et højt og nogenlunde konstant grundforbrug om natten, er der noget, der kører døgnet rundt — typisk en fryser, en vandvarmer eller elektronik i standby.",
  },
];

export const metadata: Metadata = {
  title: withCurrentYear("Strømforbrug husstand (2026) → Se normalt forbrug pr. person"),
  description:
    "En dansk husstand bruger 3.000-4.500 kWh/år uden varmepumpe. Se normalt strømforbrug for 1 person, par og familie — og hvad det koster i kr.",
  alternates: { canonical: `${SITE_CONFIG.url}/husstand/` },
};

export default function HusstandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Husstand", url: `${SITE_CONFIG.url}/husstand/` },
            ]),
            faqSchema(faqs),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Strømforbrug husstand" }]} />

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Strømforbrug pr. husstand i Danmark
        </h1>

        <QuickAnswer>
          <p>
            En gennemsnitlig dansk husstand bruger 3.000-4.500 kWh strøm om
            året uden varmepumpe. Det svarer til 5.580-8.370 kr. ved 1,86
            kr./kWh. En enlig person bruger ca. 1.500-2.500 kWh, mens en
            familie på 4 bruger 4.000-5.500 kWh.
          </p>
        </QuickAnswer>

        {/* Sub-page links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <Link href="/husstand/1-person/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">1 person</p>
            <p className="text-xs text-ink-500 mt-1">1.500-2.500 kWh</p>
          </Link>
          <Link href="/husstand/2-personer/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">2 personer</p>
            <p className="text-xs text-ink-500 mt-1">2.500-3.500 kWh</p>
          </Link>
          <Link href="/husstand/familie/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Familie (3-4)</p>
            <p className="text-xs text-ink-500 mt-1">4.000-5.500 kWh</p>
          </Link>
          <Link href="/husstand/med-varmepumpe/" className="p-4 rounded-card border border-ink-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-center">
            <p className="font-heading font-medium text-ink-900 text-sm">Med varmepumpe</p>
            <p className="text-xs text-ink-500 mt-1">7.000-11.000 kWh</p>
          </Link>
        </div>

        <div className="prose-editorial">
          <h2>Normalt strømforbrug — hvornår bruger du for meget?</h2>
          <p>
            Det normale strømforbrug afhænger af tre faktorer: antal personer,
            boligtype og opvarmningsform. Herunder ser du det typiske forbrug
            for de mest almindelige husstandstyper i Danmark.
          </p>
          <table>
            <thead>
              <tr>
                <th>Husstand</th>
                <th>Normalt (kWh/år)</th>
                <th>Højt (kWh/år)</th>
                <th>Meget højt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 person</strong></td>
                <td>1.500-2.500</td>
                <td>2.500-3.500</td>
                <td>3.500+</td>
              </tr>
              <tr>
                <td><strong>2 personer</strong></td>
                <td>2.500-3.500</td>
                <td>3.500-4.500</td>
                <td>4.500+</td>
              </tr>
              <tr>
                <td><strong>Familie (3-4)</strong></td>
                <td>3.500-5.000</td>
                <td>5.000-6.500</td>
                <td>6.500+</td>
              </tr>
              <tr>
                <td><strong>Stor familie (5+)</strong></td>
                <td>4.500-6.000</td>
                <td>6.000-8.000</td>
                <td>8.000+</td>
              </tr>
            </tbody>
          </table>
          <p>
            <em>Tallene er uden varmepumpe. Med <Link href="/varmepumpe/">varmepumpe</Link> tilføjes typisk 2.000-6.000 kWh/år afhængigt af type og boligstørrelse.</em>
          </p>

          <h2>Strømforbrug familie på 4</h2>
          <p>
            En typisk dansk familie på 4 i et parcelhus bruger 4.000-5.500 kWh strøm om året
            (uden varmepumpe), svarende til 7.440-10.230 kr. De største poster er{" "}
            <Link href="/koeleskab/">køleskab/fryser</Link> (24/7),{" "}
            <Link href="/toerretumbler/">tørretumbler</Link> og{" "}
            <Link href="/opvaskemaskine/">opvaskemaskine</Link>.
          </p>

          <h2>Strømforbrug 1 person</h2>
          <p>
            Bor du alene i en lejlighed, er et normalt strømforbrug 1.500-2.000 kWh/år
            (2.790-3.720 kr.). I et hus stiger det til 2.000-2.500 kWh/år fordi der er
            flere apparater og større arealer at belyse.
          </p>

          <h2>Strømforbrug husstand med varmepumpe</h2>
          <p>
            Har du en <Link href="/varmepumpe/">varmepumpe</Link>, stiger det samlede elforbrug
            markant — men din samlede energiudgift falder fordi varmepumpen erstatter gas eller
            olie. En familie på 4 med luft-til-vand varmepumpe bruger typisk 8.000-11.000 kWh/år
            i alt (14.880-20.460 kr. i strøm). Selve varmepumpen står for 4.000-6.000 kWh af det
            — 7.440-11.160 kr. — og erstatter et gasfyr til 18.000-24.000 kr./år. Nettobesparelsen
            er typisk 10.500-12.800 kr./år.
          </p>

          <h2>Sådan tjekker du dit eget forbrug</h2>
          <p>
            Log ind på <strong>Eloverblik.dk</strong> med NemID/MitID for at se dit præcise
            strømforbrug time for time. Sammenlign dit årsforbrug med tabellerne ovenfor.
            Er du over det &quot;normale&quot; interval, kan vores{" "}
            <Link href="/beregner/">strømberegner</Link> hjælpe dig med at identificere
            hvilke apparater der bruger mest.
          </p>

          <h2>Hvad driver forskellen mellem to husstande?</h2>
          <p>
            To familier på fire i samme kvarter kan sagtens ligge 4.000 kWh fra
            hinanden. Antallet af personer betyder mindre, end de fleste tror — det er
            fire ting, der afgør det, og de kan alle sammen konstateres på en
            eftermiddag.
          </p>
          <table>
            <thead>
              <tr><th>Faktor</th><th>Typisk betydning</th><th>Sådan tjekker du</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opvarmningsform</strong></td>
                <td>+2.000-6.000 kWh</td>
                <td>Varmes bolig eller rum med el? Det er den største enkeltfaktor overhovedet.</td>
              </tr>
              <tr>
                <td><strong>Elbil</strong></td>
                <td>+2.000-3.500 kWh</td>
                <td>Lades den hjemme, ligger forbruget hos dig — ikke på ladestanderen.</td>
              </tr>
              <tr>
                <td><strong>Varmt vand</strong></td>
                <td>+1.500-4.000 kWh</td>
                <td>Elvandvarmer eller varmtvandsbeholder på el frem for fjernvarme.</td>
              </tr>
              <tr>
                <td><strong>Gamle hvidevarer</strong></td>
                <td>+300-800 kWh</td>
                <td>Fryser eller køleskab fra før 2010 bruger typisk dobbelt så meget som en ny.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Bemærk, hvad der <em>ikke</em> står på listen: belysning, tv og elektronik.
            De fylder i bevidstheden, men sjældent på regningen — se{" "}
            <Link href="/stromslugere/">strømslugere i hjemmet</Link> for rangordenen.
          </p>

          <h2>Sådan finder du ud af, hvor strømmen går</h2>
          <p>
            Ligger dit forbrug over det normale, kan du som regel finde årsagen på under
            en time med data, du allerede har adgang til.
          </p>
          <ol>
            <li>
              <strong>Kig på natteforbruget.</strong> Log ind på Eloverblik.dk og se en
              typisk nat mellem kl. 1 og 5. Det, der kører der, kører hele døgnet.
              Ligger grundforbruget over ca. 0,15 kWh/time, er der noget stort tændt —
              typisk en <Link href="/fryser/">fryser</Link>, en elvandvarmer eller
              elvarme.
            </li>
            <li>
              <strong>Sammenlign sommer og vinter.</strong> Er vinterforbruget mere end
              dobbelt så højt som sommerforbruget, går strømmen til opvarmning. Er de
              næsten ens, ligger forbruget i apparater og varmt vand.
            </li>
            <li>
              <strong>Mål de mistænkte.</strong> Et energimåler-stik til 100-200 kr.
              afgør sagen for ét apparat ad gangen. Start med fryseren og alt, der er
              ældre end ti år.
            </li>
          </ol>
          <p>
            Vil du regne på et enkelt apparat, kan vores{" "}
            <Link href="/beregner/">strømberegner</Link> gøre det for dig — og hver
            apparatside har sin egen beregner med realistiske brugsmønstre.
          </p>

          <h2>Forbrug pr. person falder, når I bliver flere</h2>
          <p>
            Et forbrug på 2.500 kWh lyder lavt for en familie på fire og højt for en
            person alene — og begge dele er rigtigt. Køleskab, fryser, belysning og
            opvarmning koster nogenlunde det samme, uanset hvor mange der bor i
            boligen, så de faste poster fordeles på flere personer.
          </p>
          <p>
            Derfor er forbrug pr. person et dårligt nøgletal at sammenligne husstande
            med. En enlig i hus bruger typisk mere pr. person end en familie på fem i
            samme hus, uden at være mindre påpasselig. Sammenlign med din
            husstandstype, ikke med et gennemsnit pr. dansker.
          </p>

          <h2>Ofte stillede spørgsmål</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

        </div>

        <AffiliateCta />
      </article>
    </>
  );
}
