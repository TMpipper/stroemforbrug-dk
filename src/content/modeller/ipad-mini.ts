import type { ModelData } from "@/lib/models";

const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const ipadMini: ModelData = {
  slug: "ipad-mini",
  parent: "ipad",
  brand: "Apple",
  name: "iPad mini",
  released: "2026-10",
  synonyms: ["ipad mini 2026", "ipad mini a20 pro", "ipad mini a17 pro", "ipad mini oled", "ipad mini 8,5 tommer", "ipad mini 8,3 tommer", "ipad mini 7", "lille ipad strømforbrug"],
  title: "iPad mini strømforbrug (2026) → watt og pris pr. opladning",
  description:
    "iPad mini med A20 Pro (2026) og A17 Pro (2024): Apples egne watt-tal ved 230 V, hvad én fuld opladning koster, kWh om året, og hvad OLED-skærmen sparer.",
  intro:
    "Den nye iPad mini med OLED-skærm bruger 1,52 W i tomgang, en femtedel mindre end forgængeren, og er den mest sparsomme i tomgang af Apples tablets på siden.",
  content: `<h2>Hvor mange watt bruger en iPad mini?</h2>
<p>Apple har målt begge de seneste iPad mini-modeller ved 230 volt, samme spænding som i en dansk stikkontakt. Den nye iPad mini med A20 Pro-chip fra oktober 2026 bruger 1,52 W tændt med skærmen tændt i tomgang, 0,20 W i dvale og 0,51 W slukket. Forgængeren med A17 Pro fra 2024 bruger 1,89 W i tomgang, 0,21 W i dvale og 0,91 W slukket. Målingerne følger ENERGY STAR-metoden med fuldt opladet batteri og iPad'en tilsluttet Apples 20 W USB-C-oplader; lysstyrken er låst, og automatisk lysstyrke er slået fra.</p>
<p>Den nye model har en 8,5 tommer OLED-skærm, hvor hver pixel lyser selv, mens A17 Pro-modellen har en 8,3 tommer LCD-skærm med LED-baggrundslys. Det kan være en del af forklaringen på, at den nye bruger mindre, selvom skærmen er lidt større.</p>

<h2>Hvad koster det at oplade en iPad mini?</h2>
<p>Batteriet rummer 18,9 Wh i A20 Pro-modellen og 19,3 Wh i A17 Pro-modellen ifølge Apples tekniske specifikationer. Apples 20 W-oplader omsætter 87,8 % af strømmen fra stikket til strøm i batteriet ved 230 V. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,022 kWh for begge, svarende til {{oere 0,022}}.</p>
<p>Med fire fulde opladninger om ugen, som er profilen for alle tablets på siden, bliver det omkring 4,5 kWh om året — {{kr 4,5}} om året ved månedens elpris. Det er det laveste blandt Apples tablets på siden, fordi batteriet er det mindste. Den nye model har et lidt mindre batteri end den gamle, men skærmen bruger mindre, så batteriet rækker længere.</p>

<h2>Gammel eller ny iPad mini?</h2>
<p>I EU's produktdatabase EPREL har den nye iPad mini (A3595 og A3596) energiklasse D og en batteritid på 78 timer pr. fuld opladning i EU's standardiserede brugstest. A17 Pro-modellen (A2993 og A2995) har energiklasse E og 67 timer. Energiklassen bygger på den standardiserede batteritest; den nye model holder altså længere på en opladning og har en bedre klasse. Begge har reparationsklasse C, og Apple har oplyst mindst fem års softwareopdateringer til EPREL. Den nye model er ifølge Apple også vandtæt efter IP67.</p>
<p>I kroner om året er forskellen ubetydelig — begge koster omkring det samme at oplade. Har du en iPad mini med A17 Pro, der fungerer, er der ingen strømgrund til at skifte. En tablet, der bliver brugt i mange år, er bedre for både økonomien og miljøet end en ny.</p>

<h2>iPad mini sammenlignet med de store iPads</h2>
<table>
<thead><tr><th>Model</th><th>Tomgang</th><th>Batteri</th><th>kWh pr. opladning</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>iPad mini (A20 Pro)</td><td>1,52 W</td><td>18,9 Wh</td><td>0,022</td><td>4,5</td></tr>
<tr><td>iPad mini (A17 Pro)</td><td>1,89 W</td><td>19,3 Wh</td><td>0,022</td><td>4,6</td></tr>
<tr><td>iPad (A16)</td><td>2,89 W</td><td>28,93 Wh</td><td>0,033</td><td>6,9</td></tr>
<tr><td>iPad Pro M5 11"</td><td>2,48 W</td><td>31,29 Wh</td><td>0,036</td><td>7,4</td></tr>
</tbody>
</table>
<p>Den <a href="/ipad/ipad-a16/">almindelige iPad (A16)</a> bruger næsten dobbelt så meget i tomgang som den nye iPad mini og har et batteri, der er halvanden gang så stort. <a href="/ipad/ipad-pro-m5/">iPad Pro M5</a> har også OLED og ligger lavt i tomgang, men med en meget større skærm. Alle er i den billige ende af husholdningens apparater: selv iPad Pro 13 tommer bruger under 10 kWh om året med profilen her.</p>

<h2>Opladeren og standby</h2>
<p>Apples 20 W-oplader bruger 0,05 W uden last ved 230 V — under 0,5 kWh om året, hvis den sidder i stikket hele tiden. Bruger du en anden oplader, kan tabet være lidt anderledes, men forskellen er brøkdele af en kWh om året. Det er ligegyldigt for prisen, hvornår på døgnet du lader. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a> og om <a href="/ipad/">iPads og tablets generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug mørk tilstand og automatisk lysstyrke på den nye OLED-model.</li>
<li>Lad, når det passer dig; en fuld opladning koster få øre.</li>
<li>Skift ikke en fungerende iPad mini ud for strømmens skyld.</li>
<li>Saml gamle opladere ud af stikkontakterne.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iPad mini?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger iPad mini (A20 Pro) fra 2026 1,52 W og iPad mini (A17 Pro) fra 2024 1,89 W tændt i tomgang med skærmen tændt. I dvale bruger begge 0,20–0,21 W.",
    },
    {
      question: "Hvad koster det at oplade en iPad mini?",
      answer: "En fuld opladning trækker omkring 0,022 kWh fra stikket, når opladerens tab er medregnet. Det koster ca. {{oere 0,022}} ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger en iPad mini om året?",
      answer: "Med fire fulde opladninger om ugen omkring 4,5 kWh om året, svarende til {{kr 4,5}}.",
    },
    {
      question: "Hvor stort er batteriet i iPad mini?",
      answer: "18,9 Wh i iPad mini (A20 Pro) og 19,3 Wh i iPad mini (A17 Pro) ifølge Apples tekniske specifikationer. EPREL oplyser 4.900 og 5.034 mAh.",
    },
    {
      question: "Bruger den nye iPad mini mindre strøm end den gamle?",
      answer: "Ja, i tomgang: 1,52 W mod 1,89 W. En fuld opladning koster næsten det samme, men batteriet holder længere — 78 mod 67 timer i EU's test — og den nye har energiklasse D mod E.",
    },
  ],
  sources: [
    { name: "Apple — iPad mini (A20 Pro) Product Environmental Report, oktober 2026", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_mini_PER_Oct2026.pdf" },
    { name: "Apple — iPad mini (A17 Pro) Product Environmental Report, oktober 2024", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_mini_PER_Oct2024.pdf" },
    { name: "Apple Support — iPad mini (A20 Pro), tekniske specifikationer", url: "https://support.apple.com/en-gb/149482" },
    { name: "Apple Support — iPad mini (A17 Pro), tekniske specifikationer", url: "https://support.apple.com/en-gb/121456" },
    { name: "EPREL — Apple A3595 (iPad mini A20 Pro), EU's energimærke for tablets", url: epreltab("2774812") },
    { name: "EPREL — Apple A2993 (iPad mini A17 Pro), EU's energimærke for tablets", url: epreltab("2261243") },
  ],
  variants: [
    { name: "8,5\" A20 Pro (2026)", watts: { off: 0.51, sleep: 0.2, idle: 1.52 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 18.9, source: 0 },
    { name: "8,3\" A17 Pro (2024)", watts: { off: 0.91, sleep: 0.21, idle: 1.89 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 19.3, source: 1 },
  ],
  publishDate: "2026-12-05",
  updated: "2026-11-22",
  figuresNote:
    "Målt af Apple ved 230 V — samme spænding som en dansk stikkontakt — med fuldt batteri og Apples 20 W USB-C-oplader tilsluttet; batteriets Wh er fra Apples tekniske specifikationer. Kilderne står nederst på siden.",
};

export default ipadMini;
