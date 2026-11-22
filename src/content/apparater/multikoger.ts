import type { ApplianceData } from "@/lib/types";

/**
 * Multikoger (Instant Pot-typen: elektrisk trykkoger med slow cook, sauté, ris og varmhold) — testsieger.de (januar 2026):
 * Instant Pot 7-in-1 5,7 l, 1.000 W, ca. 0,48 kWh efter en time. testsieger.de's produktside: Duo 3 l = 700 W.
 * Stiftung Warentest (test.de, 18.12.2006): 500 g kartofler — trykkoger 235 Wh, gryde 295 Wh, mikroovn 157 Wh, stor dampkoger
 * 356–601 Wh. Øko-Test (schweizisk måling): ½ kg kartofler i trykkoger på induktion 0,15 kWh, gryde med låg 0,22, uden låg på
 * keramisk 0,43 kWh. Kort trykkogning (≈ 0,2 kWh) og slow cook-tilstanden (≈ 0,6 kWh) er vores skøn.
 * Beregneren: kWh pr. ret, antal pr. uge × 52. Intet EU-energimærke.
 */
const multikoger: ApplianceData = {
  slug: "multikoger",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["multikoger", "multicooker", "multi cooker", "instant pot", "instantpot", "elektrisk trykkoger", "trykkoger", "pressure cooker", "trykkoger el", "ninja foodi", "multikoger strømforbrug"],
  },
  name: "Multikoger",
  article: "en",
  title: "Multikoger strømforbrug (2026) → trykkogning, kWh pr. ret",
  description:
    "Se hvor meget strøm en multikoger som Instant Pot bruger pr. ret ved trykkogning, slow cook og varmhold – og hvor meget den sparer mod gryde og ovn.",
  heading: "Strømforbrug for en multikoger: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En multikoger bruger typisk 0,2–0,5 kWh pr. ret ved trykkogning. En Instant Pot på 5,7 liter og 1.000 W brugte omkring 0,48 kWh på en time i en test fra januar 2026, svarende til {{kr 0,48}} ved månedens elpris. Laver du to gryderetter om ugen, bliver det cirka 47 kWh om året, eller {{kr 47}}.",
  kwhRange: [5, 150],
  typicalKwh: 47,
  wattage: 1000,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.12, 1.08, 1.02, 0.96, 0.92, 0.86, 0.84, 0.88, 0.98, 1.06, 1.12, 1.16],
  content: `<h2>Sådan bruger en multikoger strømmen</h2>
<p>En multikoger er en elektrisk gryde med et varmeelement i bunden, en indsats af stål og et låg, der kan lukkes tæt. Den mest kendte er Instant Pot, men flere mærker laver den samme type. Den kan trykkoge, slow-cooke, brune kød, koge ris og holde maden varm. Strømmen går til to ting: at varme gryden og indholdet op, og derefter at holde temperaturen, så længe programmet kører.</p>
<p>Ved trykkogning kører elementet på fuld effekt, indtil gryden har bygget tryk op. Det tager typisk 10–15 minutter. Derefter skal elementet kun slå til i korte stød for at holde trykket, fordi gryden er lukket og godt isoleret. Det er derfor, en trykkoger kan koge en gryderet færdig på en tredjedel af tiden uden at bruge mere strøm end en gryde på komfuret.</p>
<p>Det tyske testsite testsieger.de målte i januar 2026 en Instant Pot 7-i-1 på 5,7 liter og 1.000 W. Efter en time var forbruget omkring 0,48 kWh, eller {{kr 0,48}} ved månedens elpris. Den mindste Instant Pot Duo på 3 liter er mærket 700 W, og den varmer en mindre mængde op.</p>

<h2>Forbrug pr. ret</h2>
<p>Hvad en ret koster, afhænger mest af, hvor meget mad og vand gryden skal varme op, og hvor længe programmet kører. Tallene herunder dækker en almindelig aftensmad til tre-fire personer.</p>
<table>
<thead><tr><th>Program og ret</th><th>kWh pr. ret</th><th>Pris pr. ret</th><th>kWh om året ved 2 retter om ugen</th></tr></thead>
<tbody>
<tr><td>Kort trykkogning, fx kartofler eller ris (vores skøn)</td><td>0,2 kWh</td><td>{{kr 0,2}}</td><td>21 kWh</td></tr>
<tr><td>Gryderet eller suppe under tryk, ca. 1 time i alt (målt)</td><td>0,45–0,48 kWh</td><td>{{kr 0,45-0,48}}</td><td>47 kWh</td></tr>
<tr><td>Slow cook, 6 timer (vores skøn)</td><td>0,6 kWh</td><td>{{kr 0,6}}</td><td>62 kWh</td></tr>
<tr><td>Varmhold, pr. time (vores skøn)</td><td>0,03–0,05 kWh</td><td>{{kr 0,03-0,05}}</td><td>–</td></tr>
</tbody>
</table>
<p>Den korte trykkogning er vores skøn ud fra fysikken: at varme to kilo mad og vand op fra køleskabskold til kogepunktet kræver omkring 0,2 kWh, og trykket holdes derefter med meget lidt ekstra. Slow cook og varmhold er skønnet ud fra mærkeeffekten og tallene på vores side om <a href="/slow-cooker/">slow cookeren</a>, der bruger 0,4–1,3 kWh pr. ret.</p>

<h2>Multikoger mod gryde, ovn og mikroovn</h2>
<p>Den bedste uafhængige sammenligning er Stiftung Warentests måling af 500 gram kartofler. En trykkoger brugte 235 Wh, en almindelig gryde 295 Wh, en mikroovn 157 Wh og et stort dampapparat 356–601 Wh. En schweizisk måling, som Øko-Test har gengivet, fandt det samme mønster: en trykkoger på induktion brugte 0,15 kWh, en gryde med låg 0,22 kWh, og en gryde uden låg på en keramisk plade 0,43 kWh.</p>
<p>Trykkogeren sparer altså 20–30 procent mod en gryde med låg og omkring halvdelen mod en gryde uden låg. Den store forskel kommer, når retten ellers skulle stå længe i ovnen. En ovn bruger omkring 1,15 kWh den første time ved 200 grader og 0,8 kWh for hver time derefter, så en steg eller en gryderet på to timer i ovnen bruger omkring 2 kWh. Den samme ret i multikogeren bruger under en fjerdedel. Det er her, multikogeren for alvor kan mærkes på elregningen.</p>
<p>Til ris, kartofler og grøntsager er gevinsten mindre. Har du allerede <a href="/induktion/">induktion</a> og bruger låg på gryden, er forskellen nogle få hundrede wattimer om ugen. Skal du alligevel købe noget til et sommerhus eller et lille køkken uden komfur, kan en multikoger erstatte både gryde og en ekstra <a href="/kogeplade/">kogeplade</a>.</p>

<h2>Slow cook-programmet</h2>
<p>De fleste multikogere kan også slow-cooke, men de er ikke bygget til det på samme måde som en klassisk slow cooker. Varmeelementet sidder kun i bunden, og stålindsatsen holder ikke på varmen som en tung keramikgryde. Til gengæld er låget tæt. Det er vores skøn, at en ret på seks timer bruger omkring 0,6 kWh, altså på niveau med en slow cooker af samme størrelse. Vil du spare, så brug trykprogrammet i stedet: den samme gryderet er færdig på en time og bruger mindre.</p>

<h2>Hvornår på døgnet bruges multikogeren?</h2>
<p>Multikogeren bruges typisk til aftensmaden mellem klokken 17 og 19, hvor elprisen ofte er højest. Den kan ikke flyttes langt, fordi maden skal spises, når den er færdig. Mange multikogere har en udskudt start, men vær forsigtig med at lade kød og mælkeprodukter stå i gryden ved stuetemperatur i flere timer før start. Beløbet er under alle omstændigheder lille: en ret er under en halv kilowatttime. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Varmhold og standby</h2>
<p>Når programmet er færdigt, går de fleste multikogere automatisk over på varmhold. Det holder maden over 60 grader og bruger efter vores skøn 30–50 Wh i timen, fordi gryden er lukket. Står maden på varmhold hele eftermiddagen, kan det løbe op i et par hundrede wattimer, så sluk for varmholdet, hvis du ikke skal bruge det.</p>
<p>Med stikket i bruger en multikoger med display lidt strøm. EU's regler for husholdningsapparater (forordning 2023/826) siger højst 0,5 W i ren standby og 0,8 W med tændt display. Det er højst 7 kWh om året, men det er nemt at undgå ved at trække stikket mellem brugene.</p>

<h2>Sådan får du mest ud af multikogeren</h2>
<ol>
<li><strong>Brug trykprogrammet</strong> i stedet for slow cook, når du har travlt – det er hurtigere og bruger mindre.</li>
<li><strong>Kog ikke for meget vand</strong> – gryden skal kun have den væske, opskriften kræver. Hver liter ekstra vand er omkring 0,1 kWh.</li>
<li><strong>Lad trykket falde naturligt</strong> til gryderetter: maden koger færdig i restvarmen uden at bruge strøm.</li>
<li><strong>Sluk for varmholdet</strong>, når maden er serveret.</li>
<li><strong>Lav dobbelt portion</strong> og frys halvdelen – opvarmningen er det meste af forbruget, og den deles så på to måltider.</li>
</ol>
<p>Vil du dampe grøntsager eller fisk, kan du sammenligne med en indbygget <a href="/dampovn/">dampovn</a>, der bruger mere strøm pr. gang, men kan rumme mere. Til hurtig opvarmning af rester er en <a href="/mikroovn/">mikroovn</a> stadig det sparsomste.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Instant Pot?",
      answer:
        "En Instant Pot på 5,7 liter er mærket 1.000 W og brugte omkring 0,48 kWh på en time i testsieger.de's test fra januar 2026. Det koster cirka {{kr 0,48}} ved månedens elpris. En kort trykkogning af ris eller kartofler bruger mindre.",
    },
    {
      question: "Sparer en multikoger strøm i forhold til en gryde?",
      answer:
        "Ja, typisk 20–30 procent mod en gryde med låg og omkring halvdelen mod en gryde uden låg. Stiftung Warentest målte 235 Wh i trykkoger mod 295 Wh i gryde for 500 gram kartofler. Mod ovnen er besparelsen langt større.",
    },
    {
      question: "Bruger slow cook-programmet meget strøm?",
      answer:
        "Efter vores skøn omkring 0,6 kWh for seks timer, eller {{kr 0,6}}. Det er på niveau med en slow cooker. Den samme gryderet under tryk er færdig på en time og bruger mindre.",
    },
    {
      question: "Hvor mange watt har en multikoger?",
      answer:
        "Typisk 700–1.200 W. Instant Pot Duo på 3 liter er mærket 700 W og modellen på 5,7 liter 1.000 W. Den fulde effekt bruges kun, mens gryden varmes op og bygger tryk.",
    },
    {
      question: "Hvad koster en multikoger i strøm om året?",
      answer:
        "Med to gryderetter om ugen bruger den omkring 47 kWh om året, hvilket koster cirka {{kr 47}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["slow-cooker", "induktion", "kogeplade", "dampovn", "mikroovn"],
  sources: [
    { name: "testsieger.de — Instant Pot Multikocher 5,7 l: Was kann das kleine Kraftpaket wirklich? (januar 2026)", url: "https://www.testsieger.de/testportal/instant-pot-multikocher-57l-was-kann-das-kleine-kraftpaket-wirklich/" },
    { name: "testsieger.de — Instant Pot Multikocher Duo 3 l, 700 W (produktdata)", url: "https://www.testsieger.de/multikocher/1A5U11S3M9X7S-instant-pot-multikocher-duo-3-l-700-watt.html" },
    { name: "Stiftung Warentest — Vitaminschonende Garmethoden: Energieverbrauch für 500 g Kartoffeln (2006)", url: "https://www.test.de/Vitaminschonende-Garmethoden-Dampf-ist-gesund-1487944-1487745/" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "EUR-Lex — Forordning (EU) 2023/826 om standby og slukket tilstand", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0826" },
  ],
  calculatorConfig: {
    title: "Multikoger forbrugsberegner",
    options: [
      { label: "Kort trykkogning (ris, kartofler)", kwhPerUse: 0.2 },
      { label: "Gryderet under tryk, ca. 1 time", kwhPerUse: 0.45 },
      { label: "Slow cook, 6 timer", kwhPerUse: 0.6 },
    ],
    usageLabel: "Antal retter pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 2,
    usageStep: 1,
    per: "ret",
    perYear: 52,
  },
  publishDate: "2026-12-03",
  updated: "2026-11-22",
};

export default multikoger;
