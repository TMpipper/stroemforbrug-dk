import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import Breadcrumb from "@/components/layout/Breadcrumb";
import QuickAnswer from "@/components/content/QuickAnswer";
import AffiliateCta from "@/components/marketing/AffiliateCta";

export const metadata: Metadata = {
  title: "Spare strøm 2026 → 15 tips der sænker din elregning",
  description:
    "15 konkrete sparetips der kan sænke din elregning med 2.000-5.000 kr./år. Se hvilke tiltag der giver størst besparelse — fra hvidevarer til standby-forbrug og valg af elselskab.",
  alternates: { canonical: `${SITE_CONFIG.url}/sparetips/` },
};

const faqs = [
  { question: "Hvad er det nemmeste tip til at spare strøm?", answer: "Det nemmeste tip er at slukke for standby-forbrug. Ved at slukke tv, computer og andre apparater helt (ikke bare standby) kan du spare 400-800 kr./år uden at ændre dine vaner." },
  { question: "Hvor meget kan man spare ved at skifte til LED-pærer?", answer: "Ved at skifte alle pærer i hjemmet til LED kan du spare 500-1.200 kr./år. En LED-pære bruger ca. 80% mindre strøm end en glødepære og holder 15-25 gange længere." },
  { question: "Er det billigere at vaske tøj om natten?", answer: "Ja, med spotpris-aftale er strøm typisk 30-50% billigere om natten (kl. 0-6). En vask der koster 2,50 kr. om aftenen kan koste under 1,50 kr. om natten. Over et år giver det 200-400 kr. i besparelse." },
  { question: "Hvor meget sparer man ved at sænke vasketemperaturen?", answer: "Ved at vaske på 30°C i stedet for 60°C bruger vaskemaskinen ca. 60% mindre strøm pr. vask. For en familie med 5 ugentlige vaske giver det ca. 300-500 kr. i besparelse om året." },
  { question: "Kan man spare strøm ved at skifte elselskab?", answer: "Ja, forskellen mellem det billigste og gennemsnitlige elselskab er ca. 1,00 kr./kWh. For en husstand med 4.000 kWh/år svarer det til 4.000 kr. i besparelse — det er det enkelt-tiltag der giver mest." },
  { question: "Hvor meget strøm bruger en gammel kummefryser?", answer: "En gammel kummefryser (15+ år) bruger typisk 400-600 kWh/år (1.000-1.500 kr.). En ny A-mærket model bruger kun 150-200 kWh/år. Udskiftning sparer dig 500-1.000 kr./år." },
  { question: "Hvad koster det at have opladeren i stikkontakten?", answer: "En mobiloplader i stikkontakten uden telefon bruger ca. 0,5 W, hvilket koster under 10 kr./år. Det er altså ikke en stor strømsluger, men alle småforbrug lægges sammen." },
  { question: "Hvor meget kan jeg samlet spare på min elregning?", answer: "Ved at kombinere alle 15 tips kan en gennemsnitlig familie spare 3.000-6.000 kr./år. De tre vigtigste tiltag er: skift elselskab (op til 4.000 kr.), reducer standby (400-800 kr.) og skift til LED (500-1.200 kr.)." },
];

export default function SparetipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Forside", url: SITE_CONFIG.url },
              { name: "Sparetips", url: `${SITE_CONFIG.url}/sparetips/` },
            ]),
            faqSchema(faqs),
            articleSchema({
              title: "Spare strøm 2026 — 15 tips der sænker din elregning",
              description: "15 konkrete sparetips der kan sænke din elregning med 2.000-5.000 kr./år.",
              url: `${SITE_CONFIG.url}/sparetips/`,
              datePublished: "2026-07-29",
              dateModified: SITE_CONFIG.lastUpdated,
            }),
          ]),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb items={[{ name: "Sparetips" }]} />

        <p className="text-xs text-ink-400 mb-4">
          Af {SITE_CONFIG.editorName} &middot; Opdateret{" "}
          {new Date(SITE_CONFIG.lastUpdated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl font-medium text-ink-900 mb-6 leading-tight">
          Spare strøm 2026 — 15 tips der sænker din elregning
        </h1>

        <QuickAnswer>
          <p>
            De 15 tips i denne guide kan tilsammen spare en gennemsnitlig dansk
            familie 3.000-6.000 kr. om året på elregningen. De tre mest effektive
            tiltag er: skift til billigste elselskab (op til 4.000 kr./år), sluk
            standby-forbrug (400-800 kr./år) og skift alle pærer til LED
            (500-1.200 kr./år).
          </p>
        </QuickAnswer>

        <div className="prose-editorial">
          <h2>Oversigt: 15 sparetips rangeret efter besparelse</h2>
          <p>
            Ikke alle sparetips giver lige stor effekt. Vi har rangeret alle 15
            tips efter den typiske årlige besparelse for en gennemsnitlig dansk
            husstand med et forbrug på ca. 4.000 kWh/år og en elpris på 2,50
            kr./kWh. Start med de øverste for størst gevinst.
          </p>
          <table>
            <thead>
              <tr><th>#</th><th>Sparetip</th><th>Årlig besparelse</th><th>Indsats</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong>Skift til billigste elselskab</strong></td><td>1.000-4.000 kr.</td><td>Lav (10 min.)</td></tr>
              <tr><td>2</td><td><strong>Skift til LED-pærer overalt</strong></td><td>500-1.200 kr.</td><td>Lav</td></tr>
              <tr><td>3</td><td><strong>Sluk standby-forbrug</strong></td><td>400-800 kr.</td><td>Lav</td></tr>
              <tr><td>4</td><td><strong>Udskift gammel kummefryser/fryser</strong></td><td>500-1.000 kr.</td><td>Høj (investering)</td></tr>
              <tr><td>5</td><td><strong>Brug eco-program på hvidevarer</strong></td><td>300-600 kr.</td><td>Lav</td></tr>
              <tr><td>6</td><td><strong>Vask ved 30°C i stedet for 60°C</strong></td><td>300-500 kr.</td><td>Lav</td></tr>
              <tr><td>7</td><td><strong>Kør hvidevarer om natten</strong></td><td>200-400 kr.</td><td>Lav</td></tr>
              <tr><td>8</td><td><strong>Fyld vaskemaskine og opvaskemaskine helt</strong></td><td>200-400 kr.</td><td>Lav</td></tr>
              <tr><td>9</td><td><strong>Afrim fryser hver 6. måned</strong></td><td>150-300 kr.</td><td>Mellem</td></tr>
              <tr><td>10</td><td><strong>Indstil køleskab til 5°C (ikke koldere)</strong></td><td>100-250 kr.</td><td>Lav</td></tr>
              <tr><td>11</td><td><strong>Tørretumbler → tørrestativ</strong></td><td>300-700 kr.</td><td>Mellem</td></tr>
              <tr><td>12</td><td><strong>Brug elkedel i stedet for komfur</strong></td><td>100-200 kr.</td><td>Lav</td></tr>
              <tr><td>13</td><td><strong>Sluk lys i tomme rum</strong></td><td>100-200 kr.</td><td>Lav</td></tr>
              <tr><td>14</td><td><strong>Brug låg på gryden</strong></td><td>50-150 kr.</td><td>Lav</td></tr>
              <tr><td>15</td><td><strong>Luk for varmen ved ovndøren tidligt</strong></td><td>50-100 kr.</td><td>Lav</td></tr>
            </tbody>
          </table>
          <p>
            <em>Besparelserne er beregnet med en gennemsnitspris på 2,50 kr./kWh. Med
            det billigste elselskab (Altid Energi, ca. 1,54 kr./kWh) er de
            absolutte besparelser lavere, men den procentvise effekt er den samme.</em>
          </p>

          <h2>Hvidevarer — de store strømslugere</h2>
          <p>
            Hvidevarer udgør 40-60% af en husstands samlede strømforbrug. Ved at
            udskifte ældre modeller, bruge eco-programmer og ændre vaner omkring
            vask og tørring kan du spare 1.000-2.500 kr./år. Her er de vigtigste
            tiltag for dine hvidevarer.
          </p>

          <h3>Tip 5: Brug eco-program på opvaskemaskine og vaskemaskine</h3>
          <p>
            Eco-programmet på din <Link href="/opvaskemaskine/">opvaskemaskine</Link> bruger
            30-40% mindre strøm end standardprogrammet. Det skyldes at vandet
            opvarmes langsommere og til lavere temperatur. Tilsvarende bruger
            eco-programmet på <Link href="/vaskemaskine/">vaskemaskinen</Link> markant
            mindre energi. Selvom programmet tager længere tid, er besparelsen reel
            — og tøjet bliver lige så rent.
          </p>

          <h3>Tip 6: Vask ved 30°C i stedet for 60°C</h3>
          <p>
            Opvarmning af vand er det der bruger mest strøm i en vaskemaskine. Ved
            at sænke temperaturen fra 60°C til 30°C reducerer du strømforbruget pr.
            vask med ca. 60%. Moderne vaskemidler er designet til at virke effektivt
            ved 30°C, så tøjet bliver stadig rent. Kun sengetøj og håndklæder bør
            vaskes ved 60°C af hygiejniske grunde.
          </p>

          <h3>Tip 4: Udskift gammel kummefryser eller fryser</h3>
          <p>
            En <Link href="/kummefryser/">kummefryser</Link> eller <Link href="/fryser/">fryser</Link> der
            er 15+ år gammel bruger typisk 400-600 kWh/år (1.000-1.500 kr.). En ny
            A-mærket model bruger kun 150-200 kWh/år. Udskiftningen betaler sig
            selv inden for 3-4 år — og derefter sparer du 500-1.000 kr. hvert år.
          </p>

          <h3>Tip 8: Fyld maskinen helt</h3>
          <p>
            En halvfyldt vaskemaskine eller opvaskemaskine bruger næsten lige så
            meget strøm som en fuldt lastet. Ved altid at fylde maskinen helt
            reducerer du antallet af vaske og dermed det samlede forbrug. En
            familie kan spare 200-400 kr./år blot ved at undgå halvfulde maskiner.
          </p>

          <h3>Tip 11: Drop tørretumbleren</h3>
          <p>
            En <Link href="/toerretumbler/">tørretumbler</Link> bruger 300-500
            kWh/år (750-1.250 kr.). Ved at bruge tørrestativ i stedet — inde om
            vinteren, ude om sommeren — eliminerer du hele det forbrug. Hvis du ikke
            kan undvære tørretumbleren helt, så brug den kun til håndklæder og
            sengetøj og hæng resten til tørre.
          </p>

          <h2>Belysning — nemt og billigt at spare</h2>
          <p>
            Belysning står for 10-15% af det samlede strømforbrug i en dansk
            husstand. Skiftet fra glødepærer og halogenpærer til LED er det mest
            omkostningseffektive energitiltag overhovedet — investeringen er
            tjent hjem på få måneder.
          </p>

          <h3>Tip 2: Skift alle pærer til LED</h3>
          <p>
            En <Link href="/led-paere/">LED-pære</Link> bruger ca. 6-10 W mod
            en glødepæres 40-60 W — det er en reduktion på 80%. En husstand med
            20 pærer der brænder 4 timer/dag sparer ca. 700-1.000 kWh/år ved at
            skifte til LED. Det svarer til 1.750-2.500 kr./år med en elpris på
            2,50 kr./kWh. LED-pærer koster fra 15-30 kr. og holder 15.000-25.000
            timer.
          </p>

          <h3>Tip 13: Sluk lys i tomme rum</h3>
          <p>
            Det lyder banalt, men mange familier har lys tændt i rum der ikke
            bruges. En enkelt 10 W LED-pære der brænder unødvendigt 8 timer/dag
            koster ca. 73 kr./år. Med 3-4 pærer i den situation løber det op i
            200-300 kr./år. Bevægelsessensorer er en smart løsning til gange,
            badeværelser og trapper.
          </p>

          <h2>Standby-forbrug — den usynlige strømsluger</h2>
          <p>
            <Link href="/standby/">Standby-forbrug</Link> koster den gennemsnitlige
            danske husstand 400-800 kr. om året. Apparater i standby bruger strøm
            24 timer i døgnet, 365 dage om året — selvom de tilsyneladende er
            slukket. Det er penge du kan spare uden at miste komfort.
          </p>

          <h3>Tip 3: Sluk standby med stikdåse eller smart plug</h3>
          <p>
            Den nemmeste måde at eliminere standby-forbrug er at tilslutte
            apparater til en stikdåse med afbryder. Et typisk <Link href="/tv/">tv</Link> bruger
            0,5-2 W i standby (4-17 kWh/år), en <Link href="/playstation/">spillekonsol</Link> op
            til 10 W (87 kWh/år), og en <Link href="/computer/">computer</Link> 2-5 W
            (17-44 kWh/år). Samlet kan en husstands standby-forbrug nemt nå
            200-350 kWh/år. Sluk stikdåsen når du går i seng — det tager 2
            sekunder og sparer 400-800 kr.
          </p>
          <p>
            Smart plugs med timer kan automatisere processen, så du ikke
            behøver tænke over det. De koster 50-100 kr. og er tjent hjem på
            få måneder.
          </p>

          <h2>Vaner i køkkenet — mange små besparelser</h2>
          <p>
            Køkkenet er det rum i boligen hvor der bruges mest strøm (undtagen
            varmepumpen). Ved at ændre simple vaner omkring madlavning,
            opbevaring og brug af køkkenapparater kan du spare 300-700 kr./år.
            Det kræver ingen investeringer — kun nye vaner.
          </p>

          <h3>Tip 10: Indstil køleskabet til 5°C</h3>
          <p>
            Mange <Link href="/koeleskab/">køleskabe</Link> er indstillet koldere end
            nødvendigt. Fødevarestyrelsen anbefaler max 5°C, og hvert grad koldere
            øger strømforbruget med ca. 5%. Tjek temperaturen med et termometer og
            indstil køleskabet korrekt. Det sparer 100-250 kr./år.
          </p>

          <h3>Tip 9: Afrim fryseren regelmæssigt</h3>
          <p>
            Is i fryseren fungerer som isolering der tvinger kompressoren til at
            arbejde hårdere. En fryser med 5 mm is bruger op til 30% mere strøm.
            Afrim fryseren hver 6. måned — det tager en time og sparer 150-300
            kr./år. Moderne no-frost frysere afrimer automatisk, men bruger lidt
            mere strøm til gengæld.
          </p>

          <h3>Tip 12: Brug elkedel til at koge vand</h3>
          <p>
            En <Link href="/elkedel/">elkedel</Link> koger vand hurtigere og mere
            effektivt end en gryde på komfuret. En elkedel bruger ca. 0,1 kWh pr.
            liter vand, mens en gryde bruger 0,15-0,20 kWh. Koger du 3 liter vand
            om dagen, sparer du 50-100 kr./år. Bonus-tip: Kog kun den mængde vand
            du har brug for.
          </p>

          <h3>Tip 14: Brug låg på gryden</h3>
          <p>
            En gryde med låg bruger op til 30% mindre strøm end en gryde uden låg,
            fordi varmen holdes inde. Over et år giver det en besparelse på 50-150
            kr. for en husstand der laver mad dagligt. Det koster ingenting og
            kræver kun at du husker låget.
          </p>

          <h3>Tip 15: Sluk ovnen 10 minutter før tid</h3>
          <p>
            En <Link href="/ovn/">ovn</Link> holder temperaturen i 10-15 minutter
            efter at den er slukket. Ved at slukke ovnen 10 minutter før retten
            er færdig, sparer du 50-100 kr./år. Ovnen bruger typisk 1,5-2,0 kWh
            pr. brug — de sidste 10 minutter er gratis varme.
          </p>

          <h2>Skift elselskab — den største enkeltbesparelse</h2>
          <p>
            At skifte til det billigste elselskab er det enkelt-tiltag der giver
            den absolut største besparelse. Forskellen mellem gennemsnitsprisen
            (2,50 kr./kWh) og det billigste elselskab (Altid Energi, ca. 1,54
            kr./kWh) er næsten 1,00 kr./kWh — det er 4.000 kr./år for en familie
            der bruger 4.000 kWh.
          </p>

          <h3>Tip 1: Vælg et elselskab med 0 kr. tillæg</h3>
          <p>
            De billigste elselskaber tilbyder spotpris + 0 øre tillæg + 0 kr.
            abonnement. Det betyder at du betaler den rene Nord Pool-spotpris plus
            faste afgifter — uden ekstra avance til elselskabet. Se hvad du
            betaler i dag på <a href="https://eloverblik.dk" target="_blank" rel="noopener noreferrer nofollow">Eloverblik.dk</a>,
            og sammenlign med de billigste udbydere.
          </p>

          <h3>Tip 7: Kør hvidevarer om natten</h3>
          <p>
            Med en spotprisaftale varierer kWh-prisen time for time. Om natten
            (kl. 0-6) er spotprisen typisk 30-50% lavere end i spidstimerne
            (kl. 17-20). De fleste <Link href="/vaskemaskine/">vaskemaskiner</Link> og
            <Link href="/opvaskemaskine/"> opvaskemaskiner</Link> har en
            udskudt start-funktion, så du kan indstille dem til at køre kl. 2-3
            om natten. Over et år sparer du 200-400 kr.
          </p>

          <h2>Hvad skal du gøre først?</h2>
          <p>
            Start med at tjekke dit nuværende forbrug og pris. Log ind på
            <a href="https://eloverblik.dk" target="_blank" rel="noopener noreferrer nofollow"> Eloverblik.dk</a> med
            MitID og se dit årsforbrug. Brug derefter vores <Link href="/beregner/">strømberegner</Link> til
            at beregne hvad hvert apparat koster dig. Prioritér derefter ud fra
            tabellen øverst i denne artikel — start med de tiltag der giver størst
            besparelse med mindst indsats.
          </p>
          <p>
            Se også vores guide til <Link href="/spare-paa-stroemmen/">spar på strømmen</Link> for
            en rum-for-rum gennemgang, og vores oversigt over <Link href="/stromslugere/">strømslugere i hjemmet</Link> for
            at finde ud af præcis hvor din strøm forsvinder hen.
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
