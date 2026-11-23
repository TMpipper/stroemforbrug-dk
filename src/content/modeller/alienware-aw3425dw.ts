import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const alienwareAw3425dw: ModelData = {
  slug: "alienware-aw3425dw",
  parent: "skaerm",
  brand: "Alienware",
  name: "Alienware AW3425DW",
  released: "2025-03",
  synonyms: [
    "alienware aw3425dw strømforbrug",
    "aw3425dw watt",
    "alienware aw3425dwm strømforbrug",
    "alienware 34 tommer skærm forbrug",
    "ultrawide skærm strømforbrug",
    "qd-oled ultrawide watt",
    "dell alienware 34 strømforbrug",
  ],
  title: "Alienware AW3425DW strømforbrug (2026) → watt for 34 tommer",
  description:
    "Alienware AW3425DW og AW3425DWM, 34 tommer ultrawide: watt tændt og i standby fra EU-energimærket, kWh om året og OLED mod LCD i SDR og HDR.",
  intro:
    "OLED-udgaven bruger 31 W i både SDR og HDR. LCD-udgaven AW3425DWM bruger 32 W i SDR, men 45 W i HDR.",
  content: `<h2>Hvor mange watt bruger Alienware AW3425DW?</h2>
<p>AW3425DW er Dells 34"-gamingskærm under navnet Alienware. Den er buet, har formatet 21:9 og 3440 × 1440 pixel, og panelet er OLED. Søstermodellen AW3425DWM har samme størrelse og opløsning, men et LCD-panel. Begge står i EU's produktdatabase EPREL fra marts 2025.</p>
<p>Ifølge EU's energimærke bruger AW3425DW 31 W i standardbilledet (SDR), 0,5 W i standby og 0,3 W slukket. Med seks timer tændt om dagen og standby resten af døgnet bliver det omkring 71 kWh om året, svarende til {{kr 71}}. AW3425DWM bruger 32 W tændt og 0,3 W i standby, omkring 72 kWh om året.</p>
<table>
<thead><tr><th>Model</th><th>Panel</th><th>SDR</th><th>HDR</th><th>Standby</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>AW3425DW</td><td>OLED</td><td>31 W</td><td>31 W</td><td>0,5 W</td><td>F</td></tr>
<tr><td>AW3425DWM</td><td>LCD</td><td>32 W</td><td>45 W</td><td>0,3 W</td><td>G</td></tr>
<tr><td>AW2725D (27", til sammenligning)</td><td>OLED</td><td>25,3 W</td><td>25,3 W</td><td>0,5 W</td><td>F</td></tr>
<tr><td>AW2725DF (27", til sammenligning)</td><td>OLED</td><td>27,6 W</td><td>27,6 W</td><td>0,5 W</td><td>G</td></tr>
</tbody>
</table>

<h2>OLED og LCD i 34 tommer</h2>
<p>I standardbilledet er de to udgaver næsten ens, 31 og 32 W. Over et år er forskellen under 1 kWh, fordi LCD-udgaven bruger lidt mindre i standby. I HDR skiller de sig ud: OLED-udgaven bruger fortsat 31 W ifølge energimærket, mens LCD-udgaven går op til 45 W. Et LCD-panel skal skrue baggrundslyset op over hele skærmen for at vise HDR, mens OLED kun lyser kraftigt, hvor billedet er lyst.</p>
<p>Til gengæld afhænger forbruget på OLED-udgaven af indholdet. Mørke spil og film holder forbruget nede, mens et hvidt regneark eller en lys hjemmeside over hele den brede skærm trækker mere end energimærkets 31 W. Bruger du skærmen mest til kontorarbejde i lyse programmer, er forskellen mellem OLED og LCD i praksis mindre, end HDR-tallene antyder.</p>

<h2>Én bred skærm eller to almindelige?</h2>
<p>En 34"-ultrawide erstatter ofte to skærme på skrivebordet. To 27"-kontorskærme som <a href="/skaerm/dell-p2725h/">Dell P2725H</a> bruger tilsammen 31,6 W, næsten præcis det samme som én AW3425DW. To 24" P2425H bruger 23,4 W. Strømmen er altså ikke et argument for eller imod den brede skærm; det er opløsningen og pladsen, der bør afgøre det.</p>
<p>Alienwares 27"-modeller med OLED og 2560 × 1440 pixel, AW2725D og AW2725DF, bruger 25,3 og 27,6 W. Skærmen på 34" har en tredjedel flere pixel og bruger omkring 3–6 W mere, op til 13 kWh om året med vores profil.</p>

<h2>AW3425DW mod andre gamingskærme på siden</h2>
<p>AW3425DW ligger i niveau med de andre store OLED-skærme. <a href="/skaerm/asus-xg32ucwmg/">ASUS XG32UCWMG</a> med 32" og 4K bruger 33,1 W, og <a href="/skaerm/samsung-odyssey-oled-g6/">Samsung Odyssey OLED G6</a> 31–41,4 W, selv om den kun er 27". Mod 500 Hz-udgaven af Odyssey OLED G6 sparer AW3425DW omkring 23 kWh om året, svarende til {{kr 23}}.</p>
<p>Bruger du skærmen både til arbejde og spil, kan timerne løbe op. Med ti timer om dagen bruger AW3425DW omkring 116 kWh om året inklusive standby, svarende til {{kr 116}}, mens to timers spil om aftenen kun giver omkring 27 kWh. Begge tal er regnet med energimærkets watt. Skærmen skal heller ikke stå tændt med et stillestående billede, når du går fra den; det koster strøm og slider på OLED-panelet.</p>
<p>Den høje opdateringshastighed koster mest i computeren. At levere 240 billeder i sekundet i 3440 × 1440 pixel kræver et kraftigt grafikkort, og en <a href="/gaming-pc/">gaming-pc</a> under spil bruger mange gange så meget som skærmen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug mørk tilstand i Windows og i programmerne; det sparer mest på OLED-udgaven.</li>
<li>Skru lysstyrken ned til almindeligt arbejde, og gem HDR til spil og film.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug; det skåner også OLED-panelet.</li>
<li>Sluk på stikkontakten, når skærmen ikke bruges i længere tid; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Alienware AW3425DW?",
      answer:
        "31 W i både standardbilledet og HDR ifølge EU's energimærke. Standby er 0,5 W og slukket 0,3 W. Med seks timer om dagen er det omkring 71 kWh om året, svarende til {{kr 71}}.",
    },
    {
      question: "Hvad bruger LCD-udgaven AW3425DWM?",
      answer: "32 W i standardbilledet og 45 W i HDR ifølge EU's energimærke. Standby og slukket er 0,3 W.",
    },
    {
      question: "Bruger en 34-tommer ultrawide mere end to skærme?",
      answer:
        "Ikke nødvendigvis. To 27\" Dell P2725H bruger tilsammen 31,6 W, næsten det samme som én AW3425DW med 31 W.",
    },
    {
      question: "Hvilken energiklasse har Alienware AW3425DW?",
      answer: "F i både SDR og HDR. LCD-udgaven AW3425DWM står i G ifølge EU's energimærke.",
    },
  ],
  sources: [
    { name: "EPREL — Alienware AW3425DW, EU's energimærke", url: eprel("2220414") },
    { name: "EPREL — Alienware AW3425DWM, EU's energimærke", url: eprel("2166949") },
    { name: "EPREL — Alienware AW2725D, EU's energimærke", url: eprel("2281221") },
    { name: "EPREL — Alienware AW2725DF, EU's energimærke", url: eprel("1833147") },
  ],
  variants: [
    { name: "AW3425DW (OLED)", watts: { off: 0.3, standby: 0.5, on: 31 }, energyClass: "F", source: 0 },
    { name: "AW3425DWM (LCD)", watts: { off: 0.3, standby: 0.3, on: 32 }, energyClass: "G", source: 1 },
  ],
  publishDate: "2026-12-21",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Dells egne oplysninger til EU's energimærke for Alienware-skærmene: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. Kilderne står nederst på siden.",
};

export default alienwareAw3425dw;
