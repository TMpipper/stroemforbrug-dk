import type { ApplianceData } from "@/lib/types";

/**
 * Løvblæser og løvsuger — med ledning eller batteri. Intet EU-energimærke.
 * Tal: Bosch UniversalGardenTidy 3000 (1.600-3.000 W, regulerbar), Bosch UniversalGardenTidy 2300 (1.600-2.300 W, 45 l),
 * Bosch UniversalLeafBlower 18V-130 (18 V 2,5 Ah, op til 18 min), Kärcher LBL 4 Battery (36 V: 15 min på 2,5 Ah,
 * 30 min på 5 Ah). Batteriets Wh = V × Ah; opladningstab ca. 15 % og timer pr. år er vores skøn.
 * shiftable: false — ledningsmodellen bruger strømmen, mens man blæser; batteriets opladning kan flyttes (står i teksten).
 */
const loevblaeser: ApplianceData = {
  slug: "loevblaeser",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "robotklipper",
    synonyms: ["løvblæser", "loevblaeser", "løvsuger", "bladblæser", "elektrisk løvblæser", "batteri løvblæser", "løvsuger med ledning", "blæser til blade"],
  },
  name: "Løvblæser",
  article: "en",
  title: "Løvblæser strømforbrug (2026) → watt i timen og løvsuger",
  description:
    "Se hvor meget strøm en løvblæser eller løvsuger bruger i timen: ledning på op til 3.000 W mod batteri på 18 og 36 V, og hvad et efterår koster.",
  heading: "Strømforbrug for en løvblæser: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En løvsuger med ledning bruger op til 2-3 kWh i timen på fuld kraft, svarende til {{kr 2,3}}-{{kr 3}} i timen ved {{pris_kwh}}. Med otte timer i løbet af efteråret bliver det omkring 18 kWh, eller {{kr 18}}. En batteriløvblæser på 36 V bruger kun cirka 0,4 kWh i timen, men batteriet holder ofte under en halv time.",
  kwhRange: [0.5, 100],
  typicalKwh: 18,
  wattage: 2300,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.2, 0, 0.6, 1.0, 0.4, 0.2, 0.2, 0.4, 1.0, 3.4, 3.6, 1.0],
  content: `<h2>Havens kraftigste lille maskine</h2>
<p>En løvblæser ser uskyldig ud, men en model med ledning har en af de største motorer blandt haveredskaberne. Det er en kraftig ventilator, der skal flytte meget luft hurtigt, og når den samtidig skal suge blade op og hakke dem i stykker, kræver det effekt. Bosch oplyser 1.600-3.000 W for UniversalGardenTidy 3000 og 1.600-2.300 W for UniversalGardenTidy 2300, der begge kan både blæse og suge. Effekten kan reguleres, og spændet viser, hvad motoren trækker fra laveste til højeste trin.</p>
<p>Ved fuld kraft bruger en løvsuger på 3.000 W altså 3 kWh i timen — lige så meget som en <a href="/varmeblaeser/">varmeblæser</a> på højeste trin eller en kogeplade på fuld varme. Det er ikke meget, fordi du sjældent blæser i timevis, men det er langt mere end en <a href="/haekkeklipper/">hækkeklipper</a>, der klarer sig med en sjettedel af effekten.</p>

<h2>Watt og pris i timen</h2>
<table>
<thead><tr><th>Løvblæser</th><th>kWh i timen</th><th>Pris i timen</th><th>8 timer om året</th></tr></thead>
<tbody>
<tr><td>Batteri 18 V, 2,5 Ah</td><td>0,17</td><td>{{kr 0,17}}</td><td>{{kr 1,36}}</td></tr>
<tr><td>Batteri 36 V</td><td>0,4</td><td>{{kr 0,4}}</td><td>{{kr 3,2}}</td></tr>
<tr><td>Ledning, op til 2.300 W</td><td>2,3</td><td>{{kr 2,3}}</td><td>{{kr 18,4}}</td></tr>
<tr><td>Ledning, op til 3.000 W</td><td>3</td><td>{{kr 3}}</td><td>{{kr 24}}</td></tr>
</tbody>
</table>
<p>Ledningsmodellernes tal er regnet med højeste trin hele tiden. På laveste trin bruger de samme modeller 1,6 kWh i timen. Batteritallene er vores omregning af batteriets kapacitet og producentens oplyste køretid, plus omkring 15 procent tab i opladeren.</p>

<h2>Batteriet: lavt forbrug, kort køretid</h2>
<p>Batterimodellerne bruger langt mindre strøm, fordi de har en mindre og mere effektiv motor — og fordi de simpelthen blæser mindre luft. Kärcher oplyser, at LBL 4 Battery på 36 V kører op til 15 minutter på et 2,5 Ah-batteri og op til 30 minutter på et 5 Ah-batteri. Det svarer til 90 og 180 Wh, så motoren bruger omkring 0,36 kWh i timen fra batteriet. Bosch oplyser op til 18 minutter for UniversalLeafBlower 18V-130 med et 18 V-batteri på 2,5 Ah, svarende til 45 Wh.</p>
<p>For en villahave med en terrasse og en indkørsel kan det være nok. Har du store træer og en stor græsplæne, rækker et batteri sjældent hele vejen, og du skal have et ekstra batteri eller holde pause. Her er det køretiden, ikke strømprisen, der afgør valget: en fuld opladning af et 36 V-batteri på 5 Ah bruger omkring 0,2 kWh og koster cirka {{kr 0,2}}.</p>

<h2>Blæse eller suge?</h2>
<p>En løvsuger bruger samme motor som blæseren, men vender luftstrømmen og sender bladene gennem et hjul, der hakker dem i småstykker og samler dem i en pose. Bosch oplyser en opsamlingspose på 45 liter for UniversalGardenTidy 2300. Hakkede blade fylder mindre og bliver hurtigere til kompost, men sugefunktionen bruger typisk fuld effekt, og våde blade kan stoppe røret til. Blæser du bladene sammen i en bunke og river dem op, bruger du kortere tid på højeste trin.</p>

<h2>Hvornår bruger løvblæseren strøm?</h2>
<p>En løvblæser med ledning bruger strøm, mens du blæser, og det kan ikke flyttes til natten — både af hensyn til naboerne og fordi du skal se, hvad du laver. I oktober og november bliver det mørkt tidligt, så mange bruger blæseren i weekenden eller lige efter arbejde. Undgå helst tiden fra kl. 17 til 21, hvor nettariffen er højest; en lørdag formiddag er ofte billigere. Boksen længere oppe på siden viser, hvordan prisen fordeler sig over dagen i dag.</p>
<p>Har du en batterimodel, er det opladningen, der bruger strømmen, og den kan du flytte. Sæt batteriet i opladeren om natten eller i en billig time, og brug det næste dag.</p>

<h2>Hvad bestemmer forbruget over et efterår?</h2>
<ul>
<li><strong>Antallet af træer</strong> — én stor bøg eller eg kan smide mere løv end en hel række små træer. Det er mængden af løv, der bestemmer, hvor mange timer du står med blæseren.</li>
<li><strong>Trinnet</strong> — brug laveste trin på fliser og terrasse, og gem højeste trin til våde blade på græsset.</li>
<li><strong>Vådt løv</strong> — tørre blade flytter sig let, våde klistrer til underlaget. Vent til en tør dag, hvis du kan.</li>
<li><strong>Vinden</strong> — blæs med vinden, ikke mod den.</li>
<li><strong>Hyppigheden</strong> — det er hurtigere at fjerne et tyndt lag ugentligt end et tykt lag efter en storm.</li>
</ul>

<h2>Løvblæseren og havens øvrige forbrug</h2>
<p>Selv en kraftig løvsuger bruger kun en lille del af husstandens strøm over et år. Otte timer på 2.300 W svarer til omkring 18 kWh. Til sammenligning bruger en <a href="/elplaeneklipper/">elplæneklipper</a> med ledning omtrent det samme over en hel sæson, mens en poolpumpe eller en affugter i kælderen kan bruge flere hundrede kWh. Løvblæseren er altså ikke en strømsluger på årsbasis, men den trækker meget, mens den kører, og den tæller med, hvis du står med den i flere timer hver weekend i efteråret.</p>
<p>Brug en forlængerledning til udendørs brug med et passende tværsnit. En løvsuger på 3.000 W trækker omkring 13 ampere, så den skal sidde i en stikkontakt med en sikring på mindst 13 eller 16 ampere og helst ikke dele gruppe med andre store forbrugere.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Brug laveste trin, hvor det er nok.</li>
<li>Blæs bladene sammen og riv dem op i stedet for at suge alt.</li>
<li>Vælg en tør dag og blæs med vinden.</li>
<li>Lad bladene ligge i bede og under buske, hvor de gør gavn som dække.</li>
<li>Lad batteriet i de billige timer, hvis du har en batterimodel.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dit efterår med løvblæseren koster.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en løvblæser?",
      answer:
        "En løvsuger med ledning bruger typisk 1.600-3.000 W afhængigt af trinnet. Bosch oplyser 1.600-3.000 W for UniversalGardenTidy 3000. På fuld kraft bruger den 3 kWh i timen, svarende til {{kr 3}}.",
    },
    {
      question: "Hvad koster det at bruge en løvblæser en time?",
      answer:
        "En ledningsmodel på 2.300 W koster omkring {{kr 2,3}} i timen på højeste trin. En batterimodel på 36 V bruger cirka 0,4 kWh i timen, svarende til {{kr 0,4}}.",
    },
    {
      question: "Hvor længe holder batteriet i en løvblæser?",
      answer:
        "Kärcher oplyser op til 15 minutter for LBL 4 Battery på et 2,5 Ah-batteri og op til 30 minutter på et 5 Ah-batteri. Bosch oplyser op til 18 minutter for UniversalLeafBlower 18V-130.",
    },
    {
      question: "Bruger en løvsuger mere strøm end en løvblæser?",
      answer:
        "Det er typisk samme motor, men sugefunktionen bruges ofte på fuld effekt, og det tager tid at fylde posen. Blæser du bladene sammen og river dem op, bruger du kortere tid på højeste trin.",
    },
    {
      question: "Hvad koster en løvblæser i strøm om året?",
      answer:
        "Med otte timer på 2.300 W bliver det omkring 18 kWh, eller {{kr 18}}. En batterimodel bruger typisk under 5 kWh på samme tid.",
    },
  ],
  relatedSlugs: ["elplaeneklipper", "haekkeklipper", "robotplaeneklipper", "hoejtryksrenser", "varmeblaeser"],
  sources: [
    { name: "Bosch — Løvsugere og løvblæsere (UniversalGardenTidy 3000)", url: "https://www.bosch-diy.com/gb/en/garden-tools/garden-vacuums-leaf-blowers" },
    { name: "Bosch — UniversalGardenTidy 2300", url: "https://www.bosch-diy.com/se/sv/p/universalgardentidy-2300-06008b1002" },
    { name: "Bosch — UniversalLeafBlower 18V-130", url: "https://www.bosch-diy.com/dk/da/p/universalleafblower-18v-130-06008a0600" },
    { name: "Kärcher — LBL 4 Battery", url: "https://www.kaercher.com/int/home-garden/garden-tools/battery-leaf-blowers-and-blower-vacs/lbl-4-battery-14451500.html" },
  ],
  calculatorConfig: {
    title: "Beregn løvblæserens strømforbrug",
    options: [
      { label: "Batteri 18 V (ca. 0,17 kWh/time)", kwhPerUse: 0.17 },
      { label: "Batteri 36 V (ca. 0,4 kWh/time)", kwhPerUse: 0.4 },
      { label: "Ledning, op til 2.300 W", kwhPerUse: 2.3 },
      { label: "Ledning, op til 3.000 W", kwhPerUse: 3 },
    ],
    usageLabel: "Timer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 40,
    usageDefault: 8,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-14",
  updated: "2026-11-22",
};

export default loevblaeser;
