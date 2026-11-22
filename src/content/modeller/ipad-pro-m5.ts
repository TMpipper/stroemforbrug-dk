import type { ModelData } from "@/lib/models";

const epreltab = (reg: string) => `https://eprel.ec.europa.eu/screen/product/smartphonestablets20231669/${reg}`;

const ipadProM5: ModelData = {
  slug: "ipad-pro-m5",
  parent: "ipad",
  brand: "Apple",
  name: "iPad Pro M5",
  released: "2025-10",
  synonyms: ["ipad pro 2025", "ipad pro m5 11", "ipad pro m5 13", "ipad pro 11 tommer", "ipad pro 13 tommer", "ipad pro oled", "ipad pro a3357", "ipad pro a3360"],
  title: "iPad Pro M5 strømforbrug (2026) → watt og pris pr. opladning",
  description:
    "iPad Pro M5 i 11 og 13 tommer: Apples egne watt-tal ved 230 V, hvad én fuld opladning koster, kWh om året, og hvorfor OLED-skærmen bruger lidt i tomgang.",
  intro:
    "11 tommer bruger kun 2,48 W i tomgang med skærmen tændt — mindre end både den almindelige iPad og iPad Air 11 tommer.",
  content: `<h2>Hvor mange watt bruger en iPad Pro M5?</h2>
<p>Apple har målt iPad Pro M5's forbrug ved 230 volt, samme spænding som i en dansk stikkontakt, og offentliggjort tallene i miljørapporten fra oktober 2025. Tændt med skærmen tændt i tomgang bruger 11 tommer 2,48 W og 13 tommer 2,99 W. I dvale bruger de 0,46 og 0,37 W, og slukket 1,22 og 1,23 W. Målingen følger ENERGY STAR-metoden med fuldt opladet batteri og iPad'en tilsluttet Apples 20 W USB-C-oplader; lysstyrken er låst, og automatisk lysstyrke er slået fra.</p>
<p>iPad Pro har en OLED-skærm (Tandem OLED), hvor hver pixel lyser selv; på mørke flader bruger den derfor mindre end en LCD-skærm med baggrundslys. Under tung last — videoredigering, spil eller 3D — trækker den langt mere, men det tømmer batteriet, og det er opladningen, der viser, hvad det koster.</p>

<h2>Hvad koster det at oplade en iPad Pro M5?</h2>
<p>Batteriet rummer 31,29 Wh i 11 tommer og 38,99 Wh i 13 tommer ifølge Apples tekniske specifikationer. Apples 20 W-oplader omsætter 87,8 % af strømmen fra stikket til strøm i batteriet ved 230 V. En fuld opladning fra tomt til fuldt trækker derfor omkring 0,036 kWh for 11 tommer og 0,044 kWh for 13 tommer, svarende til {{oere 0,036}} og {{oere 0,044}}.</p>
<p>Med fire fulde opladninger om ugen, som er profilen for alle tablets på siden, bliver det omkring 7,4 kWh om året for 11 tommer og 9,2 kWh for 13 tommer. 13 tommer har det største batteri blandt Apples tablets på siden, så en fuld opladning koster lidt mere end på iPad Air — men forskellen er øre om måneden. Apple oplyser, at iPad Pro kan hurtiglade med en kraftigere oplader; det ændrer ikke på, hvor meget strøm batteriet skal have.</p>

<h2>11 eller 13 tommer?</h2>
<p>13 tommer bruger godt en halv watt mere i tomgang og har et batteri, der er en fjerdedel større. I EU's produktdatabase EPREL har 11 tommer (A3357 og A3358) en batteritid på 71 timer pr. fuld opladning i EU's standardiserede brugstest, og 13 tommer (A3360 og A3361) 76 timer. Begge har energiklasse G på EU's energimærke for tablets og reparationsklasse C. Energiklassen bygger på den standardiserede batteritest og siger ikke, hvad det koster at oplade.</p>
<p>Forskellen mellem de to størrelser er under 2 kWh om året, svarende til {{kr 1,8}}. Vælg størrelse efter arbejdet — tegning, video eller noder på 13 tommer, rejser og sofa på 11 tommer.</p>

<h2>iPad Pro M5 sammenlignet med iPad Air og iPad</h2>
<p>I tomgang bruger iPad Pro 11 tommer mindre end både <a href="/ipad/ipad-air-m4/">iPad Air M4</a> 11 tommer (3,01 W) og <a href="/ipad/ipad-a16/">iPad (A16)</a> (2,89 W). Til gengæld bruger den lidt mere i dvale: 0,46 W mod 0,21–0,31 W. Over et år er begge forskelle små: en halv watt i 18 timers dvale om dagen er omkring 3 kWh om året.</p>
<table>
<thead><tr><th>Model</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh pr. opladning</th></tr></thead>
<tbody>
<tr><td>iPad (A16)</td><td>2,89 W</td><td>0,21 W</td><td>28,93 Wh</td><td>0,033</td></tr>
<tr><td>iPad Air M4 11"</td><td>3,01 W</td><td>0,31 W</td><td>28,93 Wh</td><td>0,033</td></tr>
<tr><td>iPad Pro M5 11"</td><td>2,48 W</td><td>0,46 W</td><td>31,29 Wh</td><td>0,036</td></tr>
<tr><td>iPad Pro M5 13"</td><td>2,99 W</td><td>0,37 W</td><td>38,99 Wh</td><td>0,044</td></tr>
</tbody>
</table>
<p>Bruger du iPad Pro som erstatning for en bærbar, sparer du strøm i forhold til selv de mest sparsomme bærbare: en <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> bruger 3,63 W i tomgang og har et batteri på 53,8 Wh.</p>

<h2>Opladeren og standby</h2>
<p>Apples 20 W-oplader bruger 0,05 W uden last ved 230 V — under 0,5 kWh om året, hvis den sidder i stikket hele tiden. Bruger du en anden oplader, kan tabet være lidt anderledes, men forskellen er brøkdele af en kWh om året. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a> og om <a href="/ipad/">iPads og tablets generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug mørk tilstand og automatisk lysstyrke — på en OLED-skærm sparer mørke flader strøm.</li>
<li>Lad, når det passer dig; en fuld opladning koster få øre.</li>
<li>Sluk for baggrundsopdateringer, du ikke bruger, så batteriet holder længere.</li>
<li>Pas på batteriet, så iPad'en holder mange år.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en iPad Pro M5?",
      answer: "Ifølge Apples egne målinger ved 230 V bruger 11 tommer 2,48 W og 13 tommer 2,99 W tændt i tomgang med skærmen tændt. I dvale bruger de 0,46 og 0,37 W.",
    },
    {
      question: "Hvad koster det at oplade en iPad Pro M5?",
      answer: "En fuld opladning trækker omkring 0,036 kWh for 11 tommer og 0,044 kWh for 13 tommer, når opladerens tab er medregnet. Det koster ca. {{oere 0,036}} og {{oere 0,044}}.",
    },
    {
      question: "Hvor meget strøm bruger en iPad Pro M5 om året?",
      answer: "Med fire fulde opladninger om ugen omkring 7,4 kWh for 11 tommer og 9,2 kWh for 13 tommer, svarende til {{kr 7,4}} og {{kr 9,2}} om året.",
    },
    {
      question: "Hvor stort er batteriet i iPad Pro M5?",
      answer: "31,29 Wh i 11 tommer og 38,99 Wh i 13 tommer ifølge Apples tekniske specifikationer. EPREL oplyser 8.160 og 10.209 mAh.",
    },
    {
      question: "Bruger iPad Pro mere strøm end iPad Air?",
      answer: "Ikke i tomgang: iPad Pro 11 tommer bruger 2,48 W mod 3,01 W for iPad Air 11 tommer. Batteriet er lidt større, så en fuld opladning koster lidt mere — 0,036 mod 0,033 kWh.",
    },
  ],
  sources: [
    { name: "Apple — iPad Pro 11-inch og 13-inch (M5) Product Environmental Report, oktober 2025", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_Pro_11_and_13_inch_PER_Oct2025.pdf" },
    { name: "Apple Support — iPad Pro 11-inch (M5), tekniske specifikationer", url: "https://support.apple.com/en-gb/125406" },
    { name: "Apple Support — iPad Pro 13-inch (M5), tekniske specifikationer", url: "https://support.apple.com/en-gb/125407" },
    { name: "EPREL — Apple A3357 (iPad Pro 11-inch M5), EU's energimærke for tablets", url: epreltab("2402629") },
    { name: "EPREL — Apple A3360 (iPad Pro 13-inch M5), EU's energimærke for tablets", url: epreltab("2402632") },
  ],
  variants: [
    { name: "11\" M5", watts: { off: 1.22, sleep: 0.46, idle: 2.48 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 31.29, source: 0 },
    { name: "13\" M5", watts: { off: 1.23, sleep: 0.37, idle: 2.99 }, adapterNoLoadW: 0.05, adapterEfficiency: 0.878, adapterW: 20, batteryWh: 38.99, source: 0 },
  ],
  publishDate: "2026-12-04",
  updated: "2026-11-22",
  figuresNote:
    "Målt af Apple ved 230 V — samme spænding som en dansk stikkontakt — med fuldt batteri og Apples 20 W USB-C-oplader tilsluttet; batteriets Wh er fra Apples tekniske specifikationer. Kilderne står nederst på siden.",
};

export default ipadProM5;
