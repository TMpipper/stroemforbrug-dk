import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const asusXg27aqdmg: ModelData = {
  slug: "asus-xg27aqdmg",
  parent: "skaerm",
  brand: "ASUS",
  name: "ASUS ROG Strix OLED XG27AQDMG",
  released: "2024-05",
  synonyms: ["asus xg27aqdmg", "rog strix oled xg27aqdmg strømforbrug", "xg27aqdmg watt", "asus rog strix oled 27 forbrug", "xg27aqdmgr", "asus oled 240 hz skærm strømforbrug"],
  title: "ASUS XG27AQDMG strømforbrug (2026) → watt for OLED-skærmen",
  description:
    "ASUS ROG Strix OLED XG27AQDMG og XG27AQDMGR: watt tændt, i HDR og i standby fra EU's energimærke, kWh om året og sammenligning med andre OLED-skærme.",
  intro:
    "XG27AQDMG bruger 24,4 W i standardbilledet og kun 25,5 W i HDR. Den nyere XG27AQDMGR bruger 25 W, men 45 W i HDR.",
  content: `<h2>Hvor mange watt bruger ASUS XG27AQDMG?</h2>
<p>ROG Strix OLED XG27AQDMG er en 27"-gamingskærm fra ASUS med WOLED-panel, 2560 × 1440 pixel og 240 Hz. Det synlige billede er 26,5". Panelet er blankt, og ASUS opgiver en lysstyrke på op til 1.300 cd/m² i HDR på små områder.</p>
<p>Ifølge EU's energimærke bruger XG27AQDMG 24,4 W i standardbilledet (SDR), 0,3 W i standby og 0,2 W slukket. Energiklassen er F. ASUS' egne specifikationer angiver strømforbruget til under 25 W, så de to kilder passer sammen. Med seks timer tændt om dagen og standby resten af døgnet bruger skærmen omkring 55 kWh om året, svarende til {{kr 55}} ved månedens elpris.</p>
<table>
<thead><tr><th>Model</th><th>SDR</th><th>HDR</th><th>Standby</th><th>Slukket</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>XG27AQDMG (2024)</td><td>24,4 W</td><td>25,5 W</td><td>0,3 W</td><td>0,2 W</td><td>F</td></tr>
<tr><td>XG27AQDMGR (2025)</td><td>25 W</td><td>45 W</td><td>0,5 W</td><td>0,3 W</td><td>F</td></tr>
</tbody>
</table>

<h2>XG27AQDMG og XG27AQDMGR</h2>
<p>I september 2025 registrerede ASUS en ny udgave i EU's database, XG27AQDMGR. Den bruger stort set det samme i standardbilledet, 25 W, men har indbygget strømforsyning, hvor den oprindelige XG27AQDMG har en ekstern. ASUS' danske side beskriver ikke R-udgaven, så vi ved ikke, om panelet også er ændret.</p>
<p>Den store forskel er HDR. XG27AQDMGR bruger 45 W i HDR mod 25,5 W for den oprindelige model. I standby bruger R-udgaven 0,5 W mod 0,3 W. På et år med vores profil bruger XG27AQDMGR omkring 58 kWh, 3 kWh mere end XG27AQDMG. Det er småpenge, så vælg efter pris og funktioner. Ser du meget HDR-indhold, er den oprindelige XG27AQDMG dog den mest sparsomme af de to, fordi den næsten ikke bruger mere i HDR end i SDR.</p>

<h2>HDR og lysstyrke på OLED</h2>
<p>På en OLED-skærm lyser hver pixel selv, og forbruget følger billedets lysstyrke. Derfor bruger den oprindelige XG27AQDMG næsten det samme i HDR som i SDR i energimærkets måling. Den høje HDR-lysstyrke på 1.300 cd/m² gælder kun små, lyse områder som en eksplosion eller en lampe i et spil, ikke hele skærmen.</p>
<p>Til gengæld bruger en OLED-skærm mere på lyse flader. Arbejder du med hvide dokumenter, regneark og hjemmesider, vil forbruget ligge over energimærkets tal. Mørk tilstand i Windows og browseren sparer strøm og skåner panelet, og skærmen har ASUS OLED Care indbygget for at forebygge indbrænding.</p>

<h2>XG27AQDMG mod andre 27"-OLED-skærme</h2>
<p>Blandt OLED-skærmene på vores sider ligger XG27AQDMG i midten. <a href="/skaerm/aoc-q27g4/">AOC Q27G4ZDR</a> med QD-OLED og 240 Hz bruger 21 W og Q27G4ZD 24 W. <a href="/skaerm/samsung-odyssey-oled-g6/">Samsung Odyssey OLED G6</a> bruger 31 W i 360 Hz-udgaven og 41,4 W med 500 Hz.</p>
<p>Mod Samsung G60SF sparer XG27AQDMG 17 W, omkring 37 kWh om året, svarende til {{kr 37}}. Mod AOC Q27G4ZDR bruger ASUS 3,4 W mere, omkring 7 kWh om året. Forskellene mellem OLED-skærmene er altså små i kroner sammenlignet med, hvad computeren bruger. En <a href="/gaming-pc/">gaming-pc</a>, der skal levere 240 billeder i sekundet, bruger mange gange mere end skærmen.</p>
<p>Overvejer du et lille OLED-tv som computerskærm i stedet, er forskellen stor. 48" <a href="/tv/lg-oled-b6/">LG OLED B6</a> bruger 62,1 W i standardbilledet, to og en halv gang så meget som XG27AQDMG. Med seks timer om dagen er det omkring 80 kWh mere om året. Og sammenlignet med en bærbar som <a href="/laptop/macbook-air-m4/">MacBook Air M4</a>, der bruger 3,63 W i tomgang, er det skærmen, der fylder mest på elregningen ved skrivebordet.</p>

<h2>Standby, USB og gode vaner</h2>
<p>XG27AQDMG har ingen USB-C, men en USB-hub med to USB-A-porte. Lader du mus, headset eller telefon fra skærmen, mens den er i standby, bruger den mere end energimærkets 0,3 W, fordi strømmen går gennem skærmens strømforsyning.</p>
<ul>
<li>Lad computeren slukke skærmen efter få minutter uden brug.</li>
<li>Skru lysstyrken ned til kontorarbejde, og gem den høje lysstyrke til HDR.</li>
<li>Sluk på stikkontakten, hvis skærmen står ubrugt i længere tid; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger ASUS XG27AQDMG?",
      answer:
        "24,4 W i standardbilledet og 25,5 W i HDR ifølge EU's energimærke. Standby er 0,3 W og slukket 0,2 W. ASUS opgiver selv under 25 W.",
    },
    {
      question: "Hvad koster det at have en XG27AQDMG tændt?",
      answer:
        "Med seks timer om dagen bruger den omkring 55 kWh om året, svarende til {{kr 55}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Hvad er forskellen på XG27AQDMG og XG27AQDMGR?",
      answer:
        "XG27AQDMGR er registreret i EU's database i 2025 med indbygget strømforsyning. Den bruger 25 W i standardbilledet ligesom den oprindelige, men 45 W i HDR mod 25,5 W og 0,5 W i standby mod 0,3 W.",
    },
    {
      question: "Bruger XG27AQDMG mere strøm end Samsung Odyssey OLED G6?",
      answer:
        "Nej, mindre. XG27AQDMG bruger 24,4 W mod 31 W for G60SD og 41,4 W for G60SF i standardbilledet ifølge energimærket.",
    },
  ],
  sources: [
    { name: "EPREL — ASUS XG27AQDMG, EU's energimærke", url: eprel("1957748") },
    { name: "EPREL — ASUS XG27AQDMGR, EU's energimærke", url: eprel("2442638") },
    {
      name: "ASUS ROG Danmark — ROG Strix OLED XG27AQDMG, specifikationer",
      url: "https://rog.asus.com/dk/monitors/27-to-31-5-inches/rog-strix-oled-xg27aqdmg/spec/",
    },
  ],
  variants: [
    { name: "XG27AQDMG (2024)", watts: { off: 0.2, standby: 0.3, on: 24.4 }, energyClass: "F", source: 0 },
    { name: "XG27AQDMGR (2025)", watts: { off: 0.3, standby: 0.5, on: 25 }, energyClass: "F", source: 1 },
  ],
  publishDate: "2026-12-09",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er ASUS' egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. Kilderne står nederst på siden.",
};

export default asusXg27aqdmg;
