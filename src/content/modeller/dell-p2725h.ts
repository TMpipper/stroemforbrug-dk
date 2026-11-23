import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const dellP2725h: ModelData = {
  slug: "dell-p2725h",
  parent: "skaerm",
  brand: "Dell",
  name: "Dell P2725H og P2425H",
  released: "2025-03",
  synonyms: [
    "dell p2725h strømforbrug",
    "dell p2425h watt",
    "dell p2725he strømforbrug",
    "dell p2725d forbrug",
    "dell p2725qe watt",
    "dell kontorskærm strømforbrug",
    "dell 27 tommer skærm watt",
  ],
  title: "Dell P2725H strømforbrug (2026) → watt for P2425H og P2725H",
  description:
    "Dell P2425H, P2725H, P2725D og P2725QE: watt tændt og i standby fra EU-energimærket, kWh om året og hvad USB-C-dockingen koster i netværksstandby.",
  intro:
    "24\" P2425H bruger kun 11,7 W, mindst af alle skærme på vores modelsider. Selv 4K-udgaven P2725QE bruger 25,5 W, på niveau med en 27\" gamingskærm.",
  content: `<h2>Hvor mange watt bruger Dell P2725H?</h2>
<p>P-serien er Dells kontorskærme. P2425H og P2725H er 24" og 27" med Full HD-opløsning, P2725D er 27" med 2560 × 1440 pixel, og P2725QE er 27" med 4K. Et »E« sidst i navnet betyder, at skærmen har en USB-C-dock med netværksstik, så den bærbare kan få strøm, skærmbillede og internet i ét kabel. Alle udgaverne står i EU's produktdatabase EPREL med deres eget energimærke.</p>
<p>I standardbilledet (SDR) bruger P2725H 15,8 W og P2425H 11,7 W. Standby og slukket er 0,3 W. Med seks timer tændt om dagen og standby resten af døgnet bruger P2725H omkring 37 kWh om året, svarende til {{kr 37}}, og P2425H omkring 28 kWh, svarende til {{kr 28}}.</p>
<table>
<thead><tr><th>Model</th><th>Størrelse og opløsning</th><th>Tændt</th><th>Netværksstandby</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>P2425H</td><td>24", Full HD</td><td>11,7 W</td><td>–</td><td>C</td></tr>
<tr><td>P2425HE</td><td>24", Full HD, USB-C-dock</td><td>13,9 W</td><td>1 W</td><td>D</td></tr>
<tr><td>P2725H</td><td>27", Full HD</td><td>15,8 W</td><td>–</td><td>D</td></tr>
<tr><td>P2725HE</td><td>27", Full HD, USB-C-dock</td><td>16,2 W</td><td>1,9 W</td><td>D</td></tr>
<tr><td>P2725D</td><td>27", 2560 × 1440</td><td>18,8 W</td><td>–</td><td>E</td></tr>
<tr><td>P2725DE</td><td>27", 2560 × 1440, USB-C-dock</td><td>19,6 W</td><td>0,6 W</td><td>E</td></tr>
<tr><td>P2725QE</td><td>27", 4K, USB-C-dock</td><td>25,5 W</td><td>0,6 W</td><td>F</td></tr>
</tbody>
</table>

<h2>Flere pixel koster strøm</h2>
<p>Ved samme størrelse stiger forbruget med opløsningen. 27" med Full HD bruger 15,8 W, med 2560 × 1440 pixel 18,8 W og med 4K 25,5 W. Det skyldes, at de små pixel på en skærm med høj opløsning lukker mindre lys igennem, så baggrundslyset skal arbejde hårdere for at nå samme lysstyrke. Fra P2725H til P2725QE er forskellen omkring 21 kWh om året med vores profil, svarende til {{kr 21}}.</p>
<p>Skærmstørrelsen betyder mindre end man tror. Fra 24" til 27" i Full HD går forbruget fra 11,7 til 15,8 W, omkring 9 kWh om året. Til regneark og mail er P2725H og P2425H rigeligt; vælger du 4K, er det for skarpheden, ikke for elregningen.</p>

<h2>USB-C-docken og netværksstandby</h2>
<p>E-udgaverne bruger lidt mere tændt, 0,4–2,2 W, fordi docken og netværkskortet skal have strøm. Den større forskel kommer, når skærmen står i standby med netværket aktivt. P2725HE bruger 1,9 W i netværksstandby mod 0,3 W for P2725H. Står skærmen i netværksstandby 18 timer i døgnet, giver det omkring 12 kWh om året mod 2 kWh, svarende til en forskel på {{kr 10}}.</p>
<p>Docken leverer også strøm til den bærbare. Den strøm tæller ikke med i energimærkets tal for skærmen, men kommer fra samme stikkontakt. Oplader du den bærbare via skærmen, ligger dens forbrug altså oveni. Se for eksempel, hvad en <a href="/laptop/hp-omnibook/">HP OmniBook</a> bruger.</p>

<h2>P-serien mod gamingskærme på siden</h2>
<p>Kontorskærmene er markant mere sparsomme end gamingskærmene på vores modelsider. 27" <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a> bruger 21–26 W, og <a href="/skaerm/samsung-odyssey-oled-g6/">Samsung Odyssey OLED G6</a> 31–41,4 W. Mod Q27G4X med 26 W sparer P2725H omkring 22 kWh om året, svarende til {{kr 22}}. En gamingskærm skal holde høj lysstyrke og opdateringshastighed, og det koster.</p>
<p>Regnet på en almindelig arbejdsdag på otte timer bruger P2725H omkring 0,13 kWh, svarende til {{kr 0,13}}. Med 220 arbejdsdage om året bliver det omkring 28 kWh, svarende til {{kr 28}}, for en skærm på kontoret, der slukkes om aftenen. Forbruget er så lavt, at det næsten ikke kan ses på regningen, selv med en skærm ved hvert skrivebord.</p>
<p>Har du flere skærme på skrivebordet, ganges forbruget. To P2725H bruger omkring 73 kWh om året med vores profil, mere end mange bærbare bruger på et helt år.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Skru lysstyrken ned. Mange kontorskærme leveres lysere, end et almindeligt kontor kræver; 120–200 nit er nok de fleste steder.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug.</li>
<li>Har du en E-udgave og bruger ikke netværksstikket, så slå netværksstandby fra i skærmens menu, hvis muligheden findes.</li>
<li>Sluk skærmen på stikkontakten i weekender og ferier; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Dell P2725H?",
      answer:
        "15,8 W tændt i standardbilledet og 0,3 W i standby ifølge EU's energimærke. Med seks timer om dagen er det omkring 37 kWh om året, svarende til {{kr 37}}.",
    },
    {
      question: "Hvad bruger Dell P2425H?",
      answer:
        "11,7 W tændt og 0,3 W i standby. Det giver omkring 28 kWh om året med seks timer om dagen og energiklasse C.",
    },
    {
      question: "Bruger P2725HE med USB-C mere strøm end P2725H?",
      answer:
        "Lidt mere tændt, 16,2 mod 15,8 W, men i netværksstandby bruger P2725HE 1,9 W mod 0,3 W i almindelig standby. Det kan blive omkring 10 kWh om året.",
    },
    {
      question: "Hvad bruger 4K-skærmen Dell P2725QE?",
      answer:
        "25,5 W tændt og 0,3 W i standby ifølge EU's energimærke, energiklasse F. Det er omkring 58 kWh om året med seks timer om dagen.",
    },
  ],
  sources: [
    { name: "EPREL — Dell P2425H, EU's energimærke", url: eprel("1865623") },
    { name: "EPREL — Dell P2425HE, EU's energimærke", url: eprel("1865677") },
    { name: "EPREL — Dell P2725H, EU's energimærke", url: eprel("1862987") },
    { name: "EPREL — Dell P2725HE, EU's energimærke", url: eprel("1874340") },
    { name: "EPREL — Dell P2725D, EU's energimærke", url: eprel("2173550") },
    { name: "EPREL — Dell P2725DE, EU's energimærke", url: eprel("2173563") },
    { name: "EPREL — Dell P2725QE, EU's energimærke", url: eprel("2173572") },
  ],
  variants: [
    { name: "P2425H (24\", Full HD)", watts: { off: 0.3, standby: 0.3, on: 11.7 }, energyClass: "C", source: 0 },
    { name: "P2425HE (24\", USB-C)", watts: { off: 0.3, standby: 0.3, on: 13.9 }, energyClass: "D", source: 1 },
    { name: "P2725H (27\", Full HD)", watts: { off: 0.3, standby: 0.3, on: 15.8 }, energyClass: "D", source: 2 },
    { name: "P2725HE (27\", USB-C)", watts: { off: 0.3, standby: 0.4, on: 16.2 }, energyClass: "D", source: 3 },
    { name: "P2725D (27\", QHD)", watts: { off: 0.3, standby: 0.3, on: 18.8 }, energyClass: "E", source: 4 },
    { name: "P2725DE (27\", QHD, USB-C)", watts: { off: 0.3, standby: 0.3, on: 19.6 }, energyClass: "E", source: 5 },
    { name: "P2725QE (27\", 4K, USB-C)", watts: { off: 0.3, standby: 0.3, on: 25.5 }, energyClass: "F", source: 6 },
  ],
  publishDate: "2026-12-18",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Dells egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. Netværksstandby for USB-C-udgaverne står i teksten. Kilderne står nederst på siden.",
};

export default dellP2725h;
