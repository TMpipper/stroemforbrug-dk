import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Spar på strømmen 2026 → Komplet guide til lavere elregning",
  description:
    "Komplet guide til at spare på strømmen i 2026. Tjek dit forbrug på Eloverblik.dk, prioritér de store besparelser, og gå rum for rum. Spar 3.000-6.000 kr./år.",
  alternates: { canonical: `${SITE_CONFIG.url}/spare-paa-stroemmen/` },
};

const faqs = [
  { question: "Hvordan kan man spare på strømmen?", answer: "Start med at tjekke dit forbrug på Eloverblik.dk. Skift derefter til billigste elselskab (sparer op til 4.000 kr./år), reducer standby-forbrug, skift til LED-pærer, og brug eco-programmer på hvidevarer. Samlet kan du spare 3.000-6.000 kr./år." },
  { question: "Hvad koster det at spare på strømmen?", answer: "De fleste sparetiltag er gratis (ændre vaner, eco-programmer, slukke standby). LED-pærer koster 15-30 kr./stk. og er tjent hjem på få måneder. Udskiftning af gamle hvidevarer kræver investering men betaler sig inden for 3-5 år." },
  { question: "Hvor tjekker jeg mit strømforbrug?", answer: "Log ind på Eloverblik.dk med MitID. Her kan du se dit forbrug time for time, dag for dag og måned for måned. Du kan også se din gennemsnitlige kWh-pris og sammenligne med landsgennemsnittet." },
  { question: "Hvad bruger mest strøm i køkkenet?", answer: "Køleskabet er den største strømsluger i køkkenet fordi det kører 24/7 (200-500 kWh/år). Derefter kommer ovnen (150-300 kWh/år) og opvaskemaskinen (200-300 kWh/år). Brug eco-program og undgå at åbne køleskabet unødvendigt." },
  { question: "Kan man spare strøm i badeværelset?", answer: "Ja, de største besparelser i badeværelset er: kortere brusebade (sparer varmt vand og evt. el til varmtvandsbeholder), sluk lys når du forlader rummet, og brug en hårtørrer på lav effekt. En varmtvandsbeholder kan bruge 1.500-3.000 kWh/år." },
  { question: "Sparer det at slukke for computeren om natten?", answer: "Ja, en stationær computer i standby bruger 2-10 W (17-88 kWh/år, op til 219 kr.). Sluk den helt om natten og i weekender. Endnu bedre: brug dvale-tilstand der bruger under 1 W og starter op på sekunder." },
  { question: "Er det dyrt at oplade telefonen?", answer: "Nej, det koster ca. 3-5 kr./år at oplade en smartphone dagligt. En opladning bruger ca. 0,01 kWh. Selv med 2 telefoner og en tablet er den samlede udgift under 15 kr./år." },
  { question: "Hvad er den største enkeltbesparelse?", answer: "Skift til det billigste elselskab. Forskellen mellem gennemsnitsprisen (2,50 kr./kWh) og billigste udbyder (ca. 1,54 kr./kWh) er ca. 1,00 kr./kWh. For en familie med 4.000 kWh/år svarer det til 4.000 kr./år i besparelse." },
];

export default function SparePaaStroemmenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Spar på strømmen", url: `${SITE_CONFIG.url}/spare-paa-stroemmen/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Spar på strømmen 2026 — Komplet guide til lavere elregning",
              description: "Komplet guide til at spare på strømmen rum for rum. Spar 3.000-6.000 kr./år.",
              url: `${SITE_CONFIG.url}/spare-paa-stroemmen/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Spar på strømmen" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Spar på strømmen 2026 — Komplet guide til lavere elregning
        </h1>

        <QuickAnswer>
          <p>
            For at spare på strømmen skal du først tjekke dit nuværende forbrug
            på <a href="https://eloverblik.dk" target="_blank" rel="noopener noreferrer nofollow">Eloverblik.dk</a>.
            Derefter prioriterer du de største besparelser: skift elselskab
            (op til 4.000 kr./år), reducer standby (400-800 kr./år), skift til
            LED (500-1.200 kr./år), og brug eco-programmer på hvidevarer
            (300-600 kr./år). Samlet kan en gennemsnitlig familie spare
            3.000-6.000 kr. om året.
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Trin 1: Kortlæg dit nuværende forbrug</h2>
          <p>
            Før du kan spare på strømmen, skal du vide hvor meget du bruger og
            hvad der bruger det. Det vigtigste redskab er Eloverblik.dk — en
            gratis tjeneste fra Energinet hvor du kan se dit forbrug time for
            time. Log ind med MitID og noter dit årsforbrug i kWh.
          </p>
          <p>
            Sammenlign dit forbrug med <Link href="/gennemsnitligt/">gennemsnittet for din husstandstype</Link>.
            Ligger du over gennemsnittet, er der næsten sikkert besparelsespotentiale.
            Brug vores <Link href="/beregner/">strømberegner</Link> til at beregne
            hvad hvert enkelt apparat koster dig, og identificér dine
            <Link href="/stromslugere/"> strømslugere</Link>.
          </p>
          <table>
            <thead>
              <tr><th>Husstandstype</th><th>Gennemsnit (kWh/år)</th><th>Over gennemsnit?</th></tr>
            </thead>
            <tbody>
              <tr><td><strong><Link href="/husstand/1-person/">1 person, lejlighed</Link></strong></td><td>1.500-2.000</td><td>Bespar 10-30%</td></tr>
              <tr><td><strong><Link href="/husstand/2-personer/">2 personer</Link></strong></td><td>2.000-3.000</td><td>Bespar 10-30%</td></tr>
              <tr><td><strong><Link href="/husstand/familie/">Familie (3-4 pers.)</Link></strong></td><td>3.500-5.000</td><td>Bespar 15-35%</td></tr>
              <tr><td><strong>Stor familie (5+)</strong></td><td>4.500-6.000</td><td>Bespar 15-35%</td></tr>
            </tbody>
          </table>

          <h2>Trin 2: Tag de store besparelser først</h2>
          <p>
            De tre tiltag der giver størst besparelse kræver næsten ingen indsats.
            Tilsammen kan de spare en gennemsnitlig familie 2.000-6.000 kr./år.
            Start her — resten er bonus.
          </p>
          <table>
            <thead>
              <tr><th>Tiltag</th><th>Årlig besparelse</th><th>Tidsforb.</th><th>Investering</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Skift elselskab</strong></td><td>1.000-4.000 kr.</td><td>10 min.</td><td>0 kr.</td></tr>
              <tr><td><strong>Skift til LED</strong></td><td>500-1.200 kr.</td><td>30 min.</td><td>300-600 kr.</td></tr>
              <tr><td><strong>Sluk standby</strong></td><td>400-800 kr.</td><td>5 min.</td><td>60-150 kr. (stikdåse)</td></tr>
            </tbody>
          </table>
          <p>
            Se vores detaljerede guide til <Link href="/sparetips/">15 sparetips rangeret efter besparelse</Link> for
            den fulde prioritering.
          </p>

          <h2>Køkkenet — det rum der bruger mest strøm</h2>
          <p>
            Køkkenet tegner sig for 30-40% af det samlede elforbrug i en
            husstand uden varmepumpe. Køleskab, fryser, ovn, opvaskemaskine og
            diverse småapparater bruger tilsammen 600-1.200 kWh/år. Her er de
            vigtigste besparelser rum for rum.
          </p>

          <h3>Køleskab og fryser</h3>
          <p>
            <Link href="/koeleskab/">Køleskabet</Link> kører 24/7 og er en af de
            største strømslugere. Indstil det til 5°C (hvert grad koldere koster
            5% mere strøm). Hold døren lukket — 10 sekunders åben dør kræver 45
            minutters ekstra kompressorkørsel. Rengør kondensatoren bagpå hvert
            halve år. Og vigtigst: er dit køleskab over 10 år gammelt, kan en
            udskiftning til A-mærket model spare 500-875 kr./år.
          </p>
          <p>
            Har du en <Link href="/kummefryser/">kummefryser</Link> i kælderen?
            Tjek om den virkelig er nødvendig — og om den er mere end 10 år
            gammel. En gammel kummefryser bruger 400-600 kWh/år mod 150-200 kWh
            for en ny model. Afrim fryseren hver 6. måned — 5 mm is øger
            forbruget med op til 30%.
          </p>

          <h3>Ovn og madlavning</h3>
          <p>
            <Link href="/ovn/">Ovnen</Link> bruger 1,5-2,0 kWh pr. brug. Sluk den
            10 minutter før retten er færdig — eftervarmen klarer resten. Brug
            varmluft i stedet for over/under-varme (20°C lavere temperatur). Og
            overvej en <Link href="/airfryer/">airfryer</Link> til mindre portioner
            — den bruger kun 0,5-1,0 kWh og er hurtigere.
          </p>
          <p>
            Brug altid låg på gryderne (sparer 30% strøm), kog vand i
            <Link href="/elkedel/"> elkedlen</Link> i stedet for på komfuret, og
            brug <Link href="/induktion/">induktionskomfuret</Link> effektivt —
            match grydestørrelse med pladesstørrelse.
          </p>

          <h3>Opvaskemaskine</h3>
          <p>
            <Link href="/opvaskemaskine/">Opvaskemaskinen</Link> bruger 1,0-1,5
            kWh pr. vask på standardprogrammet. Skift til eco-program og spar
            30-40%. Fyld maskinen helt hver gang — en halvfyldt maskine bruger
            næsten lige så meget. Kør den om natten med udskudt start hvis du
            har spotprisaftale — strømmen er 30-50% billigere kl. 0-6.
          </p>

          <h2>Bryggers og vaskerum</h2>
          <p>
            Vask og tørring af tøj er overraskende dyrt i strøm. En
            <Link href="/vaskemaskine/"> vaskemaskine</Link> og
            <Link href="/toerretumbler/"> tørretumbler</Link> bruger tilsammen
            450-750 kWh/år (1.125-1.875 kr.). Her er de vigtigste besparelser.
          </p>
          <ul>
            <li><strong>Vask ved 30°C</strong> — sparer 60% strøm sammenlignet med 60°C. Moderne vaskemidler virker fint ved 30°C.</li>
            <li><strong>Brug eco-program</strong> — tager længere tid men bruger markant mindre strøm og vand.</li>
            <li><strong>Fyld maskinen helt</strong> — en halvfyldt maskine bruger næsten lige så meget som en fuld.</li>
            <li><strong>Drop tørretumbleren</strong> — brug tørrestativ og spar 300-500 kWh/år (750-1.250 kr.).</li>
            <li><strong>Centrifuger først</strong> — jo højere centrifugehastighed, jo mindre energi bruger tørretumbleren.</li>
            <li><strong>Kør om natten</strong> — billigere strøm med spotprisaftale (30-50% besparelse kl. 0-6).</li>
          </ul>

          <h2>Stuen — standby er fjenden</h2>
          <p>
            Stuen er det rum med højest <Link href="/standby/">standby-forbrug</Link>.
            Et typisk stue-setup med <Link href="/tv/">tv</Link>, soundbar,
            <Link href="/playstation/"> spillekonsol</Link>, streaming-boks og
            subwoofer bruger tilsammen 10-40 W i standby — det er 88-350 kWh/år
            (219-876 kr.) i ren spild.
          </p>
          <p>
            Tilslut alle stue-apparater til en stikdåse med afbryder, og sluk
            med ét tryk når du er færdig. Smart plugs med timer er endnu bedre —
            de slukker automatisk kl. 23 og tænder kl. 7. Undtagelse:
            <Link href="/router/"> routeren</Link> bør have sin egen stikdåse og
            køre 24/7.
          </p>
          <p>
            Overvej også din tv-størrelse. Et 75&quot; tv bruger ca. dobbelt så
            meget som et 55&quot; tv. Og brug den automatiske lysstyrkesensor —
            den sænker forbruget med 10-20% i dæmpet belysning.
          </p>

          <h2>Kontor og hjemmearbejde</h2>
          <p>
            Arbejder du hjemme, bruger din <Link href="/computer/">computer</Link> og
            skærm 150-400 kWh/år. En <Link href="/laptop/">laptop</Link> er markant
            mere energivenlig end en stationær computer (30-70 vs. 150-400 kWh/år).
            Sluk computeren helt om natten — dvale-tilstand bruger under 1 W, mens
            standby bruger 2-10 W.
          </p>
          <ul>
            <li><strong>Brug laptop fremfor stationær</strong> — sparer 200-300 kWh/år (500-750 kr.).</li>
            <li><strong>Reducér skærmens lysstyrke</strong> — spar 10-20% på skærmens strømforbrug.</li>
            <li><strong>Sluk printer og skærm</strong> — brug stikdåse med afbryder til alt kontorudstyr.</li>
            <li><strong>Aktivér dvaletilstand</strong> — computeren sover efter 5-10 min. uden brug.</li>
          </ul>

          <h2>Badeværelset</h2>
          <p>
            Badeværelset bruger typisk ikke meget strøm direkte, men hvis du har
            en elektrisk <Link href="/varmtvandsbeholder/">varmtvandsbeholder</Link>,
            kan den bruge 1.500-3.000 kWh/år (3.750-7.500 kr.) — det er en af
            hjemmets absolut største strømslugere.
          </p>
          <ul>
            <li><strong>Sænk temperaturen</strong> på varmtvandsbeholderen til 55-60°C (under 55°C er der risiko for legionella).</li>
            <li><strong>Isolér beholderen</strong> med en isoleringskappe — sparer 5-10% varmetab.</li>
            <li><strong>Kortere brusebade</strong> — hvert minut bruger ca. 0,5-1,0 kWh varmt vand.</li>
            <li><strong>Hårtørreren</strong> bruger 1.000-2.200 W men kun 5-10 minutter ad gangen — det er ca. 30-80 kWh/år.</li>
          </ul>

          <h2>Belysning i hele huset</h2>
          <p>
            Belysning udgør 10-15% af det samlede forbrug. Det vigtigste tiltag
            er at skifte alle pærer til <Link href="/led-paere/">LED</Link>. En
            husstand med 20 LED-pærer bruger ca. 200-300 kWh/år, mens 20
            glødepærer bruger 1.000-1.500 kWh/år. Forskellen er 2.000-3.000
            kr./år — LED-skiftet er tjent hjem på få måneder.
          </p>
          <ul>
            <li><strong>Skift alle pærer til LED</strong> — 80% lavere forbrug end glødepærer.</li>
            <li><strong>Sluk i tomme rum</strong> — bevægelsessensorer i gange, trapper og badeværelse.</li>
            <li><strong>Brug dæmpere</strong> — dæmpet LED bruger mindre end fuld styrke.</li>
            <li><strong>Udnyt dagslys</strong> — placer arbejdspladsen ved vinduet.</li>
          </ul>

          <h2>Samlet besparelsesplan</h2>
          <p>
            Her er en prioriteret handlingsplan fra størst til mindst besparelse.
            Start oppefra og arbejd dig nedefter. De fleste kan gennemføre de
            første 5 tiltag på en weekend og spare 2.000-5.000 kr./år fra dag ét.
          </p>
          <table>
            <thead>
              <tr><th>Prioritet</th><th>Tiltag</th><th>Besparelse/år</th><th>Rum</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong>Skift elselskab</strong></td><td>1.000-4.000 kr.</td><td>—</td></tr>
              <tr><td>2</td><td><strong>Skift til LED-pærer</strong></td><td>500-1.200 kr.</td><td>Alle</td></tr>
              <tr><td>3</td><td><strong>Sluk standby (stikdåser)</strong></td><td>400-800 kr.</td><td>Stue + kontor</td></tr>
              <tr><td>4</td><td><strong>Eco-program på hvidevarer</strong></td><td>300-600 kr.</td><td>Køkken + bryggers</td></tr>
              <tr><td>5</td><td><strong>Vask ved 30°C</strong></td><td>300-500 kr.</td><td>Bryggers</td></tr>
              <tr><td>6</td><td><strong>Drop tørretumbleren</strong></td><td>300-700 kr.</td><td>Bryggers</td></tr>
              <tr><td>7</td><td><strong>Udskift gammel køleskab/fryser</strong></td><td>500-1.000 kr.</td><td>Køkken</td></tr>
              <tr><td>8</td><td><strong>Køleskab til 5°C</strong></td><td>100-250 kr.</td><td>Køkken</td></tr>
              <tr><td>9</td><td><strong>Kør hvidevarer om natten</strong></td><td>200-400 kr.</td><td>Køkken + bryggers</td></tr>
              <tr><td>10</td><td><strong>Fyld maskinen helt</strong></td><td>200-400 kr.</td><td>Køkken + bryggers</td></tr>
            </tbody>
          </table>
          <p>
            <em>Alle besparelser beregnet med 2,50 kr./kWh. Med Altid Energi
            (1,54 kr./kWh) er de absolutte tal lavere, men du sparer allerede på
            tiltag #1.</em>
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
