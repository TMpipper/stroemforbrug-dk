import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungOdysseyG5: ModelData = {
  slug: "samsung-odyssey-g5",
  parent: "skaerm",
  brand: "Samsung",
  name: "Samsung Odyssey G5",
  released: "2025-11",
  synonyms: [
    "samsung odyssey g5 strømforbrug",
    "odyssey g5 g50f watt",
    "ls27fg502euxen strømforbrug",
    "samsung g55h watt",
    "odyssey g5 34 tommer strømforbrug",
    "samsung g55c forbrug",
    "samsung gamingskærm strømforbrug",
  ],
  title: "Samsung Odyssey G5 strømforbrug (2026) → G50F, G55H og G55C",
  description:
    "Samsung Odyssey G5 i 27, 32 og 34 tommer: watt i SDR og HDR fra EU-energimærket for G50F, G55H og G55C, kWh om året og hvad 32 tommer koster ekstra.",
  intro:
    "27\" Odyssey G5 G50F bruger 21 W i standardbilledet, på niveau med de mest sparsomme gamingskærme på vores modelsider. 32\" og 34\" bruger 26–33 W.",
  content: `<h2>Hvor mange watt bruger Samsung Odyssey G5?</h2>
<p>Odyssey G5 er Samsungs gamingskærme i den billige ende med LCD-panel og 2560 × 1440 pixel, eller 3440 × 1440 på de brede 34". Navnet dækker flere generationer, og Samsung skriver generationen som et bogstav sidst i modelnavnet: G50F er fra 2025, G55H fra 2026 og G55C fra 2023. I EU's produktdatabase EPREL står skærmene under Samsungs modelkoder, for eksempel S27FG502EU for 27" G50F. Koden indgår i Samsungs fulde varenummer, her LS27FG502EUXEN.</p>
<p>I standardbilledet (SDR) bruger 27" G50F 21 W og 32" G50F 26,4 W. Standby er 0,5 W og slukket 0,3 W. Med seks timer tændt om dagen og standby resten af døgnet bruger 27" G50F omkring 49 kWh om året, svarende til {{kr 49}}, og 32" omkring 61 kWh, svarende til {{kr 61}}.</p>
<table>
<thead><tr><th>Model</th><th>Størrelse og opløsning</th><th>SDR</th><th>HDR</th><th>Klasse</th></tr></thead>
<tbody>
<tr><td>G50F (S27FG502EU, 2025)</td><td>27", 2560 × 1440</td><td>21 W</td><td>36 W</td><td>E</td></tr>
<tr><td>G50F (S32FG502EU, 2025)</td><td>32", 2560 × 1440</td><td>26,4 W</td><td>51 W</td><td>E</td></tr>
<tr><td>G55H (S27HG550EU, 2026)</td><td>27", 2560 × 1440</td><td>26 W</td><td>38 W</td><td>F</td></tr>
<tr><td>G55H (S32HG552EU, 2026)</td><td>32", 2560 × 1440</td><td>31 W</td><td>47 W</td><td>F</td></tr>
<tr><td>G55H (S34HG550EU, 2026)</td><td>34", 3440 × 1440</td><td>32,4 W</td><td>51 W</td><td>G</td></tr>
<tr><td>G55C (S27CG552EU, 2023)</td><td>27", 2560 × 1440</td><td>26 W</td><td>41 W</td><td>F</td></tr>
<tr><td>G55C (S32CG552EU, 2023)</td><td>32", 2560 × 1440</td><td>33,2 W</td><td>64 W</td><td>G</td></tr>
<tr><td>G55T (C34G55TWWP)</td><td>34", 3440 × 1440</td><td>32,4 W</td><td>50 W</td><td>G</td></tr>
</tbody>
</table>

<h2>G50F er den sparsomme af udgaverne</h2>
<p>Af udgaverne her bruger G50F mindst i begge størrelser. 27" G50F bruger 21 W mod 26 W for både G55H og G55C, og 32" G50F bruger 26,4 W mod 31 og 33,2 W. Med vores profil sparer 27" G50F omkring 11 kWh om året i forhold til 27" G55H, svarende til {{kr 11}}. Det er ikke meget for én skærm, men har du to skærme på skrivebordet, fordobles det.</p>
<p>Den nye G55H fra 2026 bruger altså ikke mindre end den ældre G55C som 27"; begge står med 26 W. Som 32" bruger G55H 2,2 W mindre end G55C, omkring 5 kWh om året. Strømmen er ikke et argument for den nye årgang i den lille størrelse.</p>

<h2>Hvad koster 32 og 34 tommer?</h2>
<p>At gå fra 27" til 32" med samme opløsning koster 5–7 W ekstra. For G50F er det 5,4 W, omkring 12 kWh om året med vores profil, svarende til {{kr 12}}. Skærmen bliver større, men pixel bliver ikke flere, så det ekstra forbrug går til at lyse et større areal op.</p>
<p>De brede 34"-udgaver bruger 32,4 W, både den nye G55H og den ældre G55T. Det er omkring 74 kWh om året, svarende til {{kr 74}}. Til sammenligning bruger den brede OLED-skærm <a href="/skaerm/alienware-aw3425dw/">Alienware AW3425DW</a> 31 W i samme størrelse.</p>

<h2>HDR: mere lys, mere strøm</h2>
<p>I HDR skruer skærmene op for baggrundslyset, og energimærkets HDR-måling giver 36–64 W. 27" G50F går fra 21 til 36 W, 71 % mere. 32" G55C går fra 33,2 til 64 W, næsten det dobbelte. Spiller du meget med HDR slået til i Windows og spil, er det disse tal, der tæller. På en OLED-skærm som <a href="/skaerm/lg-ultragear-oled/">LG UltraGear OLED</a> er tillægget i HDR langt mindre, fordi kun de lyse pixel bruger strøm.</p>

<h2>Odyssey G5 mod andre skærme på siden</h2>
<p>27" G50F ligger på niveau med <a href="/skaerm/aoc-q27g4/">AOC Q27G4</a>, hvor Q27G4XF og Q27G4XN også bruger 21 W. <a href="/skaerm/samsung-odyssey-oled-g6/">Samsung Odyssey OLED G6</a> bruger 31–41,4 W, og mod G60SF med 41,4 W sparer 27" G50F omkring 45 kWh om året, svarende til {{kr 45}}. Kontorskærmen <a href="/skaerm/dell-p2725h/">Dell P2725D</a> med samme opløsning bruger 18,8 W, lidt mindre end G50F, men har ikke en gamingskærms opdateringshastighed.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Skru ned for lysstyrken; mange skærme leveres lysere, end et almindeligt rum kræver.</li>
<li>Slå HDR fra i Windows, når du ikke spiller eller ser HDR-video.</li>
<li>Lad computeren slukke skærmen efter få minutter uden brug.</li>
<li>Sluk på stikkontakten i ferier; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere skærme på siden om <a href="/skaerm/">skærmes strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung Odyssey G5?",
      answer:
        "27\" G50F bruger 21 W og 32\" G50F 26,4 W i standardbilledet ifølge EU's energimærke. G55-udgaverne bruger 26–33,2 W. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at bruge en 27\" Odyssey G5 om året?",
      answer:
        "Med seks timer tændt om dagen bruger 27\" G50F omkring 49 kWh om året, svarende til {{kr 49}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger Odyssey G5 G55H mindre end G50F?",
      answer:
        "Nej. Som 27\" bruger G55H 26 W mod 21 W for G50F, og som 32\" 31 W mod 26,4 W.",
    },
    {
      question: "Hvad bruger Odyssey G5 i HDR?",
      answer: "36–64 W afhængigt af model og størrelse ifølge energimærkets HDR-måling. 27\" G50F bruger 36 W i HDR mod 21 W i standardbilledet.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung S27FG502EU (Odyssey G5 G50F), EU's energimærke", url: eprel("2435795") },
    { name: "EPREL — Samsung S32FG502EU (Odyssey G5 G50F), EU's energimærke", url: eprel("2435801") },
    { name: "EPREL — Samsung S27HG550EU (Odyssey G5 G55H), EU's energimærke", url: eprel("2767687") },
    { name: "EPREL — Samsung S32HG552EU (Odyssey G5 G55H), EU's energimærke", url: eprel("2767690") },
    { name: "EPREL — Samsung S34HG550EU (Odyssey G5 G55H), EU's energimærke", url: eprel("2767691") },
    { name: "EPREL — Samsung S27CG552EU (Odyssey G5 G55C), EU's energimærke", url: eprel("1777999") },
    { name: "EPREL — Samsung S32CG552EU (Odyssey G5 G55C), EU's energimærke", url: eprel("1778001") },
    { name: "EPREL — Samsung C34G55TWWP (Odyssey G5 34\"), EU's energimærke", url: eprel("1420448") },
    { name: "Samsung — Odyssey G5 G50F (LS27FG502EUXEN), produktside", url: "https://www.samsung.com/it/monitors/gaming/odyssey-g5-g50f-27-inch-180hz-qhd-ls27fg502euxen/" },
  ],
  variants: [
    { name: "G50F 27\" (S27FG502EU)", watts: { off: 0.3, standby: 0.5, on: 21 }, energyClass: "E", source: 0 },
    { name: "G50F 32\" (S32FG502EU)", watts: { off: 0.3, standby: 0.5, on: 26.4 }, energyClass: "E", source: 1 },
    { name: "G55H 27\" (S27HG550EU)", watts: { off: 0.3, standby: 0.5, on: 26 }, energyClass: "F", source: 2 },
    { name: "G55H 32\" (S32HG552EU)", watts: { off: 0.3, standby: 0.5, on: 31 }, energyClass: "F", source: 3 },
    { name: "G55H 34\" (S34HG550EU)", watts: { off: 0.3, standby: 0.5, on: 32.4 }, energyClass: "G", source: 4 },
    { name: "G55C 27\" (S27CG552EU)", watts: { off: 0.3, standby: 0.5, on: 26 }, energyClass: "F", source: 5 },
    { name: "G55C 32\" (S32CG552EU)", watts: { off: 0.3, standby: 0.5, on: 33.2 }, energyClass: "G", source: 6 },
    { name: "G55T 34\" (C34G55TWWP)", watts: { off: 0.3, standby: 0.5, on: 32.4 }, energyClass: "G", source: 7 },
  ],
  publishDate: "2026-12-31",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, skærmen leveres med, standby og slukket. HDR-tallene står i teksten. Kilderne står nederst på siden.",
};

export default samsungOdysseyG5;
