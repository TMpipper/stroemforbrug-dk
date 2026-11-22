import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const samsungRs70f: ModelData = {
  slug: "samsung-rs70f",
  parent: "koeleskab",
  brand: "Samsung",
  name: "Samsung RS70F amerikanerkøleskab",
  released: "2025-03",
  synonyms: [
    "samsung rs70f",
    "samsung rs70f65kef",
    "samsung rs70f65qet",
    "amerikaner køleskab strømforbrug",
    "amerikanerkøleskab strømforbrug",
    "samsung side by side køleskab",
    "samsung amerikanerkøleskab kwh",
    "rs70f66kbf",
  ],
  title: "Samsung RS70F strømforbrug (2026) → amerikanerkøleskab i kWh",
  description:
    "Samsung RS70F amerikanerkøleskab: energimærkets kWh om året fra klasse E til B, pris om året, og hvorfor samme kabinet kan bruge næsten dobbelt så meget.",
  intro:
    "Det samme kabinet på 178 × 91 cm findes i fire energiklasser: den mest strømkrævende udgave af de seks på siden bruger 364 kWh om året, den mest sparsomme 180 kWh.",
  content: `<h2>Hvor meget strøm bruger et Samsung RS70F?</h2>
<p>Samsung RS70F er et amerikanerkøleskab — et side by side-skab med køl i den ene side og frost i den anden — på 634 til 659 liter. Alle udgaver har samme mål: 178,4 cm høje, 91,2 cm brede og 72,6 cm dybe. Alligevel spænder forbruget i EU's produktdatabase EPREL fra 180 kWh om året for RS70F66KBF i klasse B til 364 kWh for RS70F65QET og RS70F65QEF i klasse E.</p>
<p>Det er en forskel på 184 kWh om året, svarende til {{kr 184}}, og over et køleskabs levetid på ti år eller mere bliver det til en mærkbar sum. Udgaverne ligner hinanden udefra, så det er modelnummeret og energimærket for netop den udgave, du skal kigge efter.</p>

<h2>Seks udgaver, fire energiklasser</h2>
<table>
<thead><tr><th>Model</th><th>Rumfang</th><th>Køl / frost</th><th>Klasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>RS70F65QET</td><td>659 l</td><td>420 / 239 l</td><td>E</td><td>364</td><td>36 dB</td></tr>
<tr><td>RS70F65KEF</td><td>640 l</td><td>420 / 220 l</td><td>E</td><td>349</td><td>36 dB</td></tr>
<tr><td>RS70F65KDF</td><td>640 l</td><td>420 / 220 l</td><td>D</td><td>279</td><td>36 dB</td></tr>
<tr><td>RS70F66KCF</td><td>634 l</td><td>409 / 225 l</td><td>C</td><td>226</td><td>33 dB</td></tr>
<tr><td>RS70F68QBF</td><td>655 l</td><td>416 / 239 l</td><td>B</td><td>185</td><td>34 dB</td></tr>
<tr><td>RS70F66KBF</td><td>634 l</td><td>409 / 225 l</td><td>B</td><td>180</td><td>32 dB</td></tr>
</tbody>
</table>
<p>RS70F65KEF og RS70F65KDF har præcis samme rumfang og indretning ifølge EPREL, men den ene bruger 70 kWh mere om året end den anden, svarende til {{kr 70}}. Udgaverne med lavest forbrug er også de mest stille: RS70F66KBF har 32 dB og støjklasse B mod 36 dB og støjklasse C for E-udgaverne. Energimærket siger ikke, hvad Samsung har gjort anderledes indeni — kun at resultatet er markant forskelligt.</p>
<p>På 66K-udgaverne har EPREL registreret den venstre side som et rum med variabel temperatur, mens 65- og 68-udgaverne har en firestjernet fryser på 181 eller 200 liter plus en tostjernet sektion på 39 liter. Skal du fryse meget ned, så tjek, hvordan den udgave, du kigger på, er indrettet.</p>

<h2>Hvad et amerikanerkøleskab koster i forhold til et almindeligt</h2>
<p>Et amerikanerkøleskab er stort, og stort koster. Et almindeligt kombineret køle-/fryseskab som <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> på 308 liter bruger 149 kWh om året. Selv den mest sparsomme RS70F bruger lidt mere, men har dobbelt så meget plads. Den mest strømkrævende bruger knap 2,5 gange så meget som Bosch-skabet. Har du brug for pladsen, er en RS70F i klasse B eller C et rimeligt valg for strømmen; har du ikke, er et mindre skab billigere at have kørende.</p>
<p>Til sammenligning bruger et rent køleskab uden fryser som <a href="/koeleskab/gram-ks-771254/">Gram KS 771254</a> 98 kWh om året. Det er under en tredjedel af de strømkrævende RS70F-udgaver.</p>

<h2>Hvis skabet har is og vand i døren</h2>
<p>Mange amerikanerkøleskabe har isterningmaskine og vanddispenser, men udstyret varierer fra udgave til udgave. Energimærket er målt med standardindstillingerne, og hvor meget en ismaskine bruger i din daglige brug, står ikke på mærket. Bruger du ismaskinen meget, går der strøm til at fryse vandet, og hver gang du tager is, slipper lidt kulde ud. Har skabet en funktion til at slå ismaskinen fra, kan det betale sig at bruge den, når I ikke bruger is — fx om vinteren.</p>

<h2>Placering og daglig brug</h2>
<p>RS70F er ifølge EPREL bygget til klimaklasse ST (16–38 °C), og 66K-udgaverne også til N. Det skal altså stå i et opvarmet rum; en kold garage eller et uopvarmet bryggers under 16 °C ligger uden for det, Samsung har oplyst. Giv skabet luft bagved og over toppen, og stil det ikke ved ovnen eller i direkte sol, hvor kompressoren skal arbejde mere.</p>
<p>Et køleskab kører hele døgnet, så du kan ikke flytte forbruget til billige timer. Det, du betaler, er mærkets kWh gange din gennemsnitlige elpris. Hold 4 °C i køl og −18 °C i frost, og luk døren hurtigt. Se også <a href="/koeleskab/">køleskabes strømforbrug generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Sammenlign modelnummeret og energimærket, ikke serienavnet: inden for RS70F er forskellen op til 184 kWh om året.</li>
<li>Vælg klasse B eller C, hvis pladsen er afgørende.</li>
<li>Slå ismaskinen fra, når den ikke bruges.</li>
<li>Stil skabet i et rum på mindst 16 °C.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et Samsung RS70F amerikanerkøleskab?",
      answer: "Fra 180 til 364 kWh om året ifølge energimærket, afhængigt af udgaven. Det svarer til {{kr 180}}–{{kr 364}} om året ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger Samsung RS70F65KEF?",
      answer: "349 kWh om året, energiklasse E, med 420 liter køl og 220 liter frost. Det svarer til {{kr 349}} om året eller knap 1 kWh i døgnet.",
    },
    {
      question: "Hvilken Samsung RS70F bruger mindst strøm?",
      answer: "Af de seks udgaver på siden bruger RS70F66KBF mindst: 180 kWh om året i klasse B. RS70F68QBF ligger tæt på med 185 kWh.",
    },
    {
      question: "Bruger et amerikanerkøleskab meget strøm?",
      answer: "Mere end et almindeligt køle-/fryseskab, fordi det er dobbelt så stort. Et RS70F bruger 180–364 kWh om året mod 149 kWh for et Bosch KGE36 på 308 liter.",
    },
    {
      question: "Kan et Samsung RS70F stå i en garage?",
      answer: "Nej, ikke hvis garagen bliver koldere end 16 °C. Samsung har oplyst klimaklasse ST (16–38 °C) til EPREL, og nogle udgaver også N.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung RS70F65QET, EU's energimærke", url: eprel("2244092") },
    { name: "EPREL — Samsung RS70F65KEF, EU's energimærke", url: eprel("2244087") },
    { name: "EPREL — Samsung RS70F65KDF, EU's energimærke", url: eprel("2244085") },
    { name: "EPREL — Samsung RS70F66KCF, EU's energimærke", url: eprel("2244095") },
    { name: "EPREL — Samsung RS70F68QBF, EU's energimærke", url: eprel("2244101") },
    { name: "EPREL — Samsung RS70F66KBF, EU's energimærke", url: eprel("2244093") },
  ],
  variants: [
    { name: "659 l (RS70F65QET)", watts: {}, annualKwh: 364, energyClass: "E", source: 0 },
    { name: "640 l (RS70F65KEF)", watts: {}, annualKwh: 349, energyClass: "E", source: 1 },
    { name: "640 l (RS70F65KDF)", watts: {}, annualKwh: 279, energyClass: "D", source: 2 },
    { name: "634 l (RS70F66KCF)", watts: {}, annualKwh: 226, energyClass: "C", source: 3 },
    { name: "655 l (RS70F68QBF)", watts: {}, annualKwh: 185, energyClass: "B", source: 4 },
    { name: "634 l (RS70F66KBF)", watts: {}, annualKwh: 180, energyClass: "B", source: 5 },
  ],
  publishDate: "2026-12-04",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Samsung har oplyst til EU-databasen EPREL for hver udgave: målt med lukkede døre og standardindstillinger. Kilderne står nederst på siden.",
};

export default samsungRs70f;
