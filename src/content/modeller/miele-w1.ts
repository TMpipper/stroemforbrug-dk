import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;

const mieleW1: ModelData = {
  slug: "miele-w1",
  parent: "vaskemaskine",
  brand: "Miele",
  name: "Miele W1 vaskemaskine",
  released: "2024-09",
  synonyms: ["miele w1", "miele vaskemaskine", "miele wwe380", "miele wwd380", "miele wsa123", "miele wwa128", "miele wsj883", "miele powerwash", "miele twindos"],
  title: "Miele W1 vaskemaskine strømforbrug (2026) → kWh og pris",
  description:
    "Miele W1 vaskemaskiner fra WWA128 til WWE380: energimærkets kWh pr. vask på eco 40-60, pris om året, og hvorfor den mest sparsomme bruger en tredjedel mindre.",
  intro:
    "Forskellen inden for W1-serien er større end mellem mange mærker: WWE380 bruger 29 kWh pr. 100 vaske, de billigste modeller 43 kWh.",
  content: `<h2>Hvor meget strøm bruger en Miele W1?</h2>
<p>Mieles W1-serie er de fritstående frontbetjente vaskemaskiner, og hver model har sit eget energimærke i EU's produktdatabase EPREL. De seks modeller på siden har alle energiklasse A, men forbruget spænder fra 29 til 43 kWh pr. 100 vaske på eco 40-60-programmet. Det svarer til 0,28–0,43 kWh pr. vask, og med fem vaske om ugen til mellem 75 og 112 kWh om året, svarende til {{kr 75-112}}.</p>
<p>Energiklasse A dækker et bredt spænd. Klassen regnes ud fra et energieffektivitetsindeks, hvor grænsen for A er 52. WWE380 har et indeks på 31,2 og er ifølge Mieles eget datablad 40 % mere økonomisk end grænsen for klasse A — det er det, Miele kalder »A -40 %«.</p>

<h2>Modellerne side om side</h2>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Centrifugering</th><th>Vand pr. vask</th></tr></thead>
<tbody>
<tr><td>WWA128 WCS Active</td><td>8 kg</td><td>43</td><td>1.400 o/min, klasse B</td><td>48 l</td></tr>
<tr><td>WSA123 WCS Active</td><td>8 kg</td><td>43</td><td>1.400 o/min, klasse B</td><td>48 l</td></tr>
<tr><td>WWD380 PWash&amp;Steam</td><td>9 kg</td><td>40</td><td>1.400 o/min, klasse B</td><td>50 l</td></tr>
<tr><td>WEC395 PWash&amp;Steam</td><td>8 kg</td><td>38</td><td>1.600 o/min, klasse A</td><td>48 l</td></tr>
<tr><td>WSJ883 PWash&amp;TDos&amp;Steam</td><td>9 kg</td><td>40</td><td>1.600 o/min, klasse A</td><td>50 l</td></tr>
<tr><td>WWE380 PWash&amp;Steam</td><td>8 kg</td><td>29</td><td>1.400 o/min, klasse B</td><td>48 l</td></tr>
</tbody>
</table>
<p>Den mest sparsomme, WWE380, bruger 14 kWh mindre pr. 100 vaske end WWA128 og WSA123. Med fem vaske om ugen er det omkring 36 kWh om året, svarende til {{kr 36}}. Over en vaskemaskines levetid bliver det til en mærkbar sum. WWA128 fra 2025 og WSA123 fra 2024 har i øvrigt præcis de samme tal, så den nyere af de to er ikke mere sparsom.</p>

<h2>Eco-programmet: lav temperatur, lang tid</h2>
<p>Hemmeligheden bag de lave tal er temperaturen. EPREL oplyser, hvor varmt vandet højst bliver i eco 40-60: i WWE380 28 °C ved fuld fyldning, 26 °C ved halv og 24 °C ved kvart fyldning. I WWA128 er det 35 °C ved fuld fyldning. Programmet bruger tiden i stedet — 3 timer og 39 minutter for 8 kg-modellerne og 3:49 for 9 kg — for at vaske rent ved lavere temperatur. Det er opvarmningen af vandet, der koster strøm, og WWE380 er tilsluttet med 2,10–2,40 kW ifølge Miele.</p>
<p>Varmere programmer bruger mere, og energimærket viser ikke, hvor meget. EU's regler kræver dog, at brugsanvisningen oplyser vejledende forbrug for de vigtigste programmer, så slå tallene op dér, hvis du ofte vasker ved 60 eller 90 grader. Brug eco 40-60 til det tøj, der normalt kan vaskes ved 40 eller 60 grader.</p>

<h2>Centrifugering og tørretumbler</h2>
<p>WEC395 og WSJ883 centrifugerer med op til 1.600 omdrejninger og har centrifugeringsklasse A. Ifølge EPREL efterlader de 44,9 % restfugt i tøjet mod 53,9 % for de andre fire. Bruger du <a href="/varmepumpe-toerretumbler/">tørretumbler</a>, er det en reel fordel: jo mindre vand der er tilbage i tøjet, jo mindre skal tumbleren fjerne, og jo kortere tid skal den køre.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Vasken er et af de nemmeste apparater at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Alle W1-modellerne har startforvalg — på WWE380 op til 24 timer — så du kan fylde maskinen om aftenen og lade den køre om natten. Mens maskinen venter, bruger den 3–3,6 W ifølge EPREL, altså omkring 0,03 kWh på otte timer. Se <a href="/elpriser/">dagens timepriser</a> og læs, <a href="/vaskemaskine/">hvornår vaskemaskinen er billigst at bruge</a>.</p>
<p>Fire af modellerne kan kobles på nettet via Miele@home. I netværksforbundet standby bruger de 0,6–0,8 W, og slukket 0,3–0,4 W. Det er små tal, men slukker du maskinen helt efter vasken, bruger den mindst.</p>

<h2>Miele W1 mod Bosch Serie 6</h2>
<p>Sammenlignet med <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a> er W1-modellerne generelt mere sparsomme. En 9 kg Bosch Serie 6 (WGG244ZTSN) bruger 49 kWh pr. 100 vaske, en 9 kg Miele WWD380 40 kWh. Med fem vaske om ugen er forskellen omkring 23 kWh om året, svarende til {{kr 23}}. Bosch Serie 6 findes til gengæld op til 11 kg.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standard; det er det program, tallene på mærket gælder for.</li>
<li>Flyt vasken væk fra kl. 17–21 med startforvalget.</li>
<li>Centrifugér med fuld hastighed, hvis tøjet skal i tørretumbleren bagefter.</li>
<li>Sammenlign modelnumre, ikke kun serienavnet: inden for W1 er forskellen op til 14 kWh pr. 100 vaske.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Miele W1 vaskemaskine pr. vask?",
      answer: "Fra 0,28 kWh (WWE380) til 0,43 kWh (WWA128 og WSA123) pr. vask på eco 40-60-programmet ifølge energimærket. Det svarer til {{oere 0,28}}–{{oere 0,43}} pr. vask.",
    },
    {
      question: "Hvad koster en Miele W1 vaskemaskine om året?",
      answer: "Med fem vaske om ugen bruger den 75–112 kWh om året afhængigt af modellen, svarende til {{kr 75-112}} ved månedens elpris.",
    },
    {
      question: "Hvad betyder »A -40 %« hos Miele?",
      answer: "At maskinen er 40 % mere økonomisk end grænseværdien for energiklasse A. Grænsen for A er et energieffektivitetsindeks på 52, og WWE380 har 31,2.",
    },
    {
      question: "Hvilken Miele W1 bruger mindst strøm?",
      answer: "Af de seks modeller på siden bruger WWE380 mindst: 29 kWh pr. 100 vaske. Det er omkring 36 kWh mindre om året end WWA128 med fem vaske om ugen.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Startforvalget lader dig fylde maskinen om aftenen, og ventetiden bruger kun 3–3,6 W.",
    },
  ],
  sources: [
    { name: "EPREL — Miele WWA128 WCS 8kg Active, EU's energimærke", url: eprel("2303334") },
    { name: "EPREL — Miele WSA123 WCS 8kg Active, EU's energimærke", url: eprel("2066018") },
    { name: "EPREL — Miele WWD380 WCS PWash&Steam&9kg, EU's energimærke", url: eprel("2053652") },
    { name: "EPREL — Miele WEC395 WCS PWash&Steam&8kg, EU's energimærke", url: eprel("2098700") },
    { name: "EPREL — Miele WSJ883 WCS PWash&TDos&Steam, EU's energimærke", url: eprel("2106659") },
    { name: "EPREL — Miele WWE380 WCS PWash&Steam&8kg, EU's energimærke", url: eprel("2060681") },
    { name: "Miele — WWE380 WCS PWash&Steam&8kg, produktdatablad (dansk)", url: "https://media.miele.com/downloads/k-/da/FS_12707030_DKD_DK-da.pdf" },
    { name: "EPREL — Bosch WGG244ZTSN (Serie 6, 9 kg), EU's energimærke", url: eprel("1705908") },
  ],
  variants: [
    { name: "8 kg (WWA128)", watts: { off: 0.3 }, kwhPer100Cycles: 43, energyClass: "A", source: 0 },
    { name: "8 kg (WSA123)", watts: { off: 0.3 }, kwhPer100Cycles: 43, energyClass: "A", source: 1 },
    { name: "9 kg (WWD380)", watts: { off: 0.3 }, kwhPer100Cycles: 40, energyClass: "A", source: 2 },
    { name: "8 kg (WEC395)", watts: { off: 0.3 }, kwhPer100Cycles: 38, energyClass: "A", source: 3 },
    { name: "9 kg (WSJ883)", watts: { off: 0.4 }, kwhPer100Cycles: 40, energyClass: "A", source: 4 },
    { name: "8 kg (WWE380)", watts: { off: 0.4 }, kwhPer100Cycles: 29, energyClass: "A", source: 5 },
  ],
  publishDate: "2026-11-26",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet som et vægtet gennemsnit af fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleW1;
