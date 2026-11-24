import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const lgUltragearOled: ModelData = {
  slug: "lg-ultragear-oled",
  parent: "skaerm",
  brand: "LG",
  name: "LG UltraGear OLED",
  released: "2025-07",
  synonyms: [
    "lg ultragear oled strømforbrug",
    "lg 27gx704a watt",
    "lg 27gx790a strømforbrug",
    "lg 32gx850a watt",
    "lg 45gx950a strømforbrug",
    "lg 27gs95qe forbrug",
    "lg oled gamingskærm watt",
  ],
  title: "LG UltraGear OLED strømforbrug (2026) → watt og kWh om året",
  description:
    "LG UltraGear OLED-skærme i 27, 32 og 45 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og hvad 4K og de brede 45 tommer koster i strøm.",
  intro:
    "27\" UltraGear OLED bruger 22,5–25,2 W i standardbilledet, 32\" med 4K omkring 32 W og de brede 45\" omkring 45 W. Flere af skærmene bruger ikke mere i HDR end i SDR.",
  content: `<h2>Hvor mange watt bruger LG UltraGear OLED?</h2>
<p>UltraGear er LG's serie af gamingskærme, og OLED-modellerne er toppen af serien. De bruger LG's egne OLED-paneler, hvor hver pixel lyser selv, så der ikke er et baggrundslys. LG sælger skærmene under deres modelkoder, og det er de samme koder, der står i EU's produktdatabase EPREL. Vi har samlet de udgaver, der sælges mest i Danmark: 27" med 2560 × 1440 pixel (27GX704A, 27GX700A, 27GX790A og den ældre 27GS95QE), 32" med 4K (32GX850A, 32GX870A og 32GS95UE) og 45" med 5120 × 2160 eller 3440 × 1440 pixel (45GX950A og 45GX90SA).</p>
<p>I standardbilledet (SDR) bruger 27GX704A 23,5 W, 32GX850A 31,8 W og 45GX950A 44,7 W. Standby er 0,5 W og slukket 0,3 W. Med seks timer tændt om dagen og standby resten af døgnet bruger 27GX704A omkring 55 kWh om året, svarende til {{kr 55}}. 32GX850A bruger omkring 73 kWh, svarende til {{kr 73}}, og 45GX950A omkring 101 kWh, svarende til {{kr 101}}.</p>
<table>
<thead><tr><th>Model</th><th>Størrelse og opløsning</th><th>SDR</th><th>HDR</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>27GX700A (2025)</td><td>27", 2560 × 1440</td><td>22,5 W</td><td>24,6 W</td><td>F</td></tr>
<tr><td>27GX704A (2025)</td><td>27", 2560 × 1440</td><td>23,5 W</td><td>22,5 W</td><td>F</td></tr>
<tr><td>27GX790A (2024)</td><td>27", 2560 × 1440</td><td>24,7 W</td><td>29,8 W</td><td>F</td></tr>
<tr><td>27GS95QE (2023)</td><td>27", 2560 × 1440</td><td>25,2 W</td><td>28,3 W</td><td>F</td></tr>
<tr><td>32GX850A (2025)</td><td>32", 3840 × 2160</td><td>31,8 W</td><td>31,6 W</td><td>F</td></tr>
<tr><td>32GS95UE (2024)</td><td>32", 3840 × 2160</td><td>31,8 W</td><td>36,4 W</td><td>F</td></tr>
<tr><td>32GX870A (2025)</td><td>32", 3840 × 2160</td><td>32,9 W</td><td>35,9 W</td><td>G</td></tr>
<tr><td>45GX950A (2025)</td><td>45", 5120 × 2160</td><td>44,7 W</td><td>44,7 W</td><td>F</td></tr>
<tr><td>45GX90SA (2025)</td><td>45", 3440 × 1440</td><td>46,1 W</td><td>52,5 W</td><td>F</td></tr>
</tbody>
</table>

<h2>27 tommer: små forskelle mellem årgangene</h2>
<p>De fire 27"-modeller ligger inden for 2,7 W af hinanden. Den nyeste, 27GX700A, bruger 22,5 W, og den ældste, 27GS95QE fra 2023, bruger 25,2 W. Med vores profil er forskellen omkring 6 kWh om året, svarende til {{kr 6}}. Vælger du mellem dem, er det billedet, opdateringshastigheden og prisen, der bør afgøre det, ikke strømmen. LG har i 2026 registreret 27GX7D4A med præcis de samme tal som 27GX704A.</p>
<p>Opløsningen er den samme på alle fire, og de bruger alle lidt mere end en almindelig kontorskærm i samme størrelse. Til sammenligning bruger 27" <a href="/skaerm/dell-p2725h/">Dell P2725H</a> 15,8 W, omkring 17 kWh mindre om året end 27GX704A.</p>

<h2>HDR koster næsten ingenting ekstra</h2>
<p>På LCD-skærme stiger forbruget typisk kraftigt i HDR, fordi baggrundslyset skal skrues helt op. På UltraGear OLED er forskellen lille, og for tre af modellerne er HDR-tallet endda lavere end SDR-tallet: 27GX704A bruger 22,5 W i HDR mod 23,5 W i SDR, 32GX850A 31,6 mod 31,8 W, og 45GX950A står med 44,7 W i begge. Det skyldes, at en OLED-skærm kun bruger strøm på de pixel, der lyser, og at et HDR-billede ofte har store mørke flader.</p>
<p>Den største stigning har 45GX90SA, der går fra 46,1 til 52,5 W, og 27GX790A, der går fra 24,7 til 29,8 W. Selv her er tillægget kun 5–6 W, langt fra de dobbelte tal, man ser på mange tv i HDR.</p>

<h2>UltraGear OLED mod andre gamingskærme på siden</h2>
<p>27" UltraGear OLED ligger på niveau med de andre OLED-skærme i samme størrelse. <a href="/skaerm/asus-xg27aqdmg/">ASUS XG27AQDMG</a> bruger 24,4–25 W, og QD-OLED-udgaverne af <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a> bruger 21–24 W. <a href="/skaerm/samsung-odyssey-oled-g6/">Samsung Odyssey OLED G6</a> bruger 31–41,4 W; udgaven med 500 Hz er den, der bruger mest af de to. Mod den sparer 27GX704A omkring 39 kWh om året, svarende til {{kr 39}}.</p>
<p>På 32" bruger 32GX850A de samme 31,8 W som 32GS95UE og lidt mindre end <a href="/skaerm/asus-xg32ucwmg/">ASUS XG32UCWMG</a> med 33,1 W. Den brede 34" <a href="/skaerm/alienware-aw3425dw/">Alienware AW3425DW</a> bruger 31 W, og de 45" fra LG bruger altså omkring 14–15 W mere end en 34" ultrawide. Til gengæld får du en væsentlig større skærm.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug skærmens mørke tilstand i Windows og spil: OLED bruger mindre strøm på mørke flader.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug. Det sparer strøm og skåner OLED-panelet mod indbrænding.</li>
<li>Lad skærmen køre sine plejeprogrammer for panelet, når du slukker den. De bruger lidt strøm i kort tid, men beskytter OLED-panelet.</li>
<li>Sluk på stikkontakten, når du er væk i længere tid; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger LG UltraGear OLED 27\"?",
      answer:
        "22,5–25,2 W i standardbilledet ifølge EU's energimærke, afhængigt af model. 27GX704A bruger 23,5 W og omkring 55 kWh om året med seks timer om dagen.",
    },
    {
      question: "Hvad bruger LG 32GX850A?",
      answer:
        "31,8 W i standardbilledet og 31,6 W i HDR. Med seks timer om dagen er det omkring 73 kWh om året, svarende til {{kr 73}}.",
    },
    {
      question: "Bruger UltraGear OLED mere strøm i HDR?",
      answer:
        "Kun lidt. 27GX704A, 32GX850A og 45GX950A bruger det samme eller mindre i HDR. Den største stigning har 45GX90SA, fra 46,1 til 52,5 W.",
    },
    {
      question: "Hvad koster det at bruge en 45\" LG UltraGear OLED?",
      answer:
        "45GX950A bruger 44,7 W og omkring 101 kWh om året med seks timer om dagen, svarende til {{kr 101}} ved {{pris_kwh}}.",
    },
  ],
  sources: [
    { name: "EPREL — LG 27GX700A, EU's energimærke", url: eprel("2369505") },
    { name: "EPREL — LG 27GX704A, EU's energimærke", url: eprel("2408077") },
    { name: "EPREL — LG 27GX790A, EU's energimærke", url: eprel("2179094") },
    { name: "EPREL — LG 27GS95QE, EU's energimærke", url: eprel("1820242") },
    { name: "EPREL — LG 32GX850A, EU's energimærke", url: eprel("2408074") },
    { name: "EPREL — LG 32GS95UE, EU's energimærke", url: eprel("1948174") },
    { name: "EPREL — LG 32GX870A, EU's energimærke", url: eprel("2281532") },
    { name: "EPREL — LG 45GX950A, EU's energimærke", url: eprel("2245820") },
    { name: "EPREL — LG 45GX90SA, EU's energimærke", url: eprel("2249037") },
    { name: "EPREL — LG 27GX7D4A (2026), EU's energimærke", url: eprel("2583557") },
  ],
  variants: [
    { name: "27GX700A (27\", QHD)", watts: { off: 0.3, standby: 0.5, on: 22.5 }, energyClass: "F", source: 0 },
    { name: "27GX704A (27\", QHD)", watts: { off: 0.3, standby: 0.5, on: 23.5 }, energyClass: "F", source: 1 },
    { name: "27GX790A (27\", QHD)", watts: { off: 0.3, standby: 0.5, on: 24.7 }, energyClass: "F", source: 2 },
    { name: "27GS95QE (27\", QHD)", watts: { off: 0.3, standby: 0.5, on: 25.2 }, energyClass: "F", source: 3 },
    { name: "32GX850A (32\", 4K)", watts: { off: 0.3, standby: 0.5, on: 31.8 }, energyClass: "F", source: 4 },
    { name: "32GS95UE (32\", 4K)", watts: { off: 0.3, standby: 0.5, on: 31.8 }, energyClass: "F", source: 5 },
    { name: "32GX870A (32\", 4K)", watts: { off: 0.3, standby: 0.5, on: 32.9 }, energyClass: "G", source: 6 },
    { name: "45GX950A (45\", 5K2K)", watts: { off: 0.3, standby: 0.5, on: 44.7 }, energyClass: "F", source: 7 },
    { name: "45GX90SA (45\", 3440 × 1440)", watts: { off: 0, standby: 0.5, on: 46.1 }, energyClass: "F", source: 8 },
  ],
  publishDate: "2026-12-29",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er LG's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. HDR-tallene står i teksten. Kilderne står nederst på siden.",
};

export default lgUltragearOled;
