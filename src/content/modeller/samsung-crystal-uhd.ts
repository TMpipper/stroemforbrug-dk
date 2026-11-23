import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungCrystalUhd: ModelData = {
  slug: "samsung-crystal-uhd",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung Crystal UHD U8000H",
  released: "2026-05",
  synonyms: [
    "samsung crystal uhd strømforbrug",
    "samsung u8000h strømforbrug",
    "samsung u7000h watt",
    "samsung u8000f strømforbrug",
    "ue55u8000hk",
    "ue65u8000hk watt",
    "samsung 4k tv strømforbrug",
    "samsung crystal uhd watt",
  ],
  title: "Samsung Crystal UHD strømforbrug (2026) → watt pr. størrelse",
  description:
    "Samsung U8000H og U7000H fra 43 til 85 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og hvad 2026-modellen sparer i forhold til U8000F.",
  intro:
    "Som 55\" og 65\" bruger den 2–7 W mindre end 2025-modellen U8000F. U7000H har præcis de samme tal som U8000H i energimærket.",
  content: `<h2>Hvor mange watt bruger Samsung Crystal UHD?</h2>
<p>U8000H og U7000H er Samsungs enkle 4K-tv for 2026 med almindeligt LED-baggrundslys. De findes fra 43 til 85 tommer, og i EU's produktdatabase EPREL har de to serier helt ens tal i hver størrelse. Forskellen mellem dem ligger i udstyr og design, ikke i strømforbruget. Bogstavet til sidst i modelnummeret (K eller U) skifter heller ikke tallene.</p>
<p>I standardbilledet (SDR) bruger U8000H 51 W som 43", 65 W som 50", 77 W som 55", 102 W som 65", 129 W som 75" og 155 W som 85". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 144 kWh om året, svarende til {{kr 144}}. 65" bruger omkring 190 kWh, svarende til {{kr 190}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>43" (UE43U8000HK)</td><td>51 W</td><td>99 W</td><td>F</td></tr>
<tr><td>50" (UE50U8000HK)</td><td>65 W</td><td>114 W</td><td>F</td></tr>
<tr><td>55" (UE55U8000HK)</td><td>77 W</td><td>120 W</td><td>F</td></tr>
<tr><td>65" (UE65U8000HK)</td><td>102 W</td><td>149 W</td><td>F</td></tr>
<tr><td>75" (UE75U8000HK)</td><td>129 W</td><td>228 W</td><td>F</td></tr>
<tr><td>85" (UE85U8000HK)</td><td>155 W</td><td>272 W</td><td>F</td></tr>
</tbody>
</table>

<h2>Størrelsen koster mere end på de dyre tv</h2>
<p>På et billigt LCD-tv stiger forbruget næsten i takt med skærmarealet. Fra 55" til 65" går U8000H fra 77 til 102 W, og fra 65" til 85" fra 102 til 155 W. Alle størrelser ender derfor i energiklasse F. Regnet om til året koster springet fra 55" til 65" omkring 46 kWh med vores profil, svarende til {{kr 46}}, og 85" bruger omkring 286 kWh om året, svarende til {{kr 286}}.</p>
<p>Det er en anden kurve end på dyrere tv med mere avanceret baggrundslys. <a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> bruger 63 W som 65" og 67 W som 75". Her fylder selve skærmstørrelsen mindre på regningen. Står du og vælger mellem to størrelser af U8000H, er den større skærm altså også en reel udgift over tv'ets levetid.</p>

<h2>2026 mod 2025: U8000H mod U8000F</h2>
<p>Den nye generation er en lille forbedring. 2025-modellen U8000F brugte 79 W som 55" og 109 W som 65" og lå i klasse G. U8000H bruger 77 og 102 W og er rykket op i klasse F. Som 65" er forskellen omkring 13 kWh om året, svarende til {{kr 13}}. Det er ikke nok til at skifte et fungerende tv ud, men har du valget mellem de to i butikken, er den nye en anelse billigere i drift.</p>
<p>Bemærk også, at 2026-udgaven af <a href="/tv/samsung-the-frame/">Samsung The Frame</a> har nøjagtig de samme watt som U8000H i 55", 65", 75" og 85". Med The Frame betaler du for designet og kunsttilstanden, ikke for et lavere forbrug.</p>

<h2>HDR trækker næsten det dobbelte</h2>
<p>I energimærkets HDR-måling bruger U8000H 99–272 W, 46–94 % mere end i standardbilledet. 43" næsten fordobler forbruget fra 51 til 99 W, og 75" går fra 129 til 228 W. 65" stiger mindst af de seks størrelser, fra 102 til 149 W. En film på to timer i HDR på 65" bruger omkring 0,3 kWh, svarende til {{kr 0,3}}. Ser du mest almindeligt tv og streaming i SDR, er det standardtallet, der betyder noget for regningen.</p>

<h2>U8000H mod OLED og de andre tv på siden</h2>
<p>Et billigt LCD-tv er ikke automatisk sparsomt. 65" U8000H bruger 102 W mod 84,6 W for 65" <a href="/tv/lg-oled-c6/">LG OLED C6</a> og 63 W for Bravia 7 II. Mod LG OLED C6 er forskellen omkring 32 kWh om året, svarende til {{kr 32}}, og mod Bravia 7 II omkring 71 kWh, svarende til {{kr 71}}. Over otte-ti år kan driften altså indhente en del af prisforskellen, men sjældent det hele.</p>
<p>I de små størrelser er U8000H til gengæld blandt de billigste tv i drift på vores modelsider, fordi 43" kun bruger 51 W. Det svarer til omkring 97 kWh om året, svarende til {{kr 97}}.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet og slå lyssensoren til; energimærket er målt i den indstilling, tv'et leveres med.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen. Det sparer op til 10 kWh om året.</li>
<li>Sluk boksen, soundbaren og konsollen sammen med tv'et; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung U8000H?",
      answer:
        "Ifølge EU's energimærke 51 W som 43\", 65 W som 50\", 77 W som 55\", 102 W som 65\", 129 W som 75\" og 155 W som 85\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Bruger U7000H mindre strøm end U8000H?",
      answer:
        "Nej. I EU's produktdatabase har U7000H og U8000H de samme watt i alle størrelser, både i SDR og HDR.",
    },
    {
      question: "Hvad koster det at have et 55\" Samsung Crystal UHD tændt?",
      answer:
        "Med fem timers tv om dagen bruger 55\" U8000H omkring 144 kWh om året, svarende til {{kr 144}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger U8000H mindre end U8000F fra 2025?",
      answer:
        "Lidt. 55\" går fra 79 til 77 W og 65\" fra 109 til 102 W. Som 65\" er det omkring 13 kWh om året, svarende til {{kr 13}}.",
    },
    {
      question: "Hvilken energiklasse har Samsung U8000H?",
      answer: "F i alle størrelser i standardbilledet og G i HDR ifølge EU's energimærke. U8000F fra 2025 lå i G.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung UE43U8000HK, EU's energimærke", url: eprel("2571750") },
    { name: "EPREL — Samsung UE50U8000HK, EU's energimærke", url: eprel("2571770") },
    { name: "EPREL — Samsung UE55U8000HK, EU's energimærke", url: eprel("2571795") },
    { name: "EPREL — Samsung UE65U8000HK, EU's energimærke", url: eprel("2571826") },
    { name: "EPREL — Samsung UE75U8000HK, EU's energimærke", url: eprel("2571854") },
    { name: "EPREL — Samsung UE85U8000HK, EU's energimærke", url: eprel("2571875") },
    { name: "EPREL — Samsung UE55U8000FK (2025), EU's energimærke", url: eprel("2205203") },
    { name: "EPREL — Samsung UE65U8000FK (2025), EU's energimærke", url: eprel("2205188") },
    { name: "EPREL — Samsung UE55U7000HK, EU's energimærke", url: eprel("2571786") },
  ],
  variants: [
    { name: "43\" U8000H (UE43U8000HK)", watts: { standby: 0.5, on: 51 }, energyClass: "F", source: 0 },
    { name: "50\" U8000H (UE50U8000HK)", watts: { standby: 0.5, on: 65 }, energyClass: "F", source: 1 },
    { name: "55\" U8000H (UE55U8000HK)", watts: { standby: 0.5, on: 77 }, energyClass: "F", source: 2 },
    { name: "65\" U8000H (UE65U8000HK)", watts: { standby: 0.5, on: 102 }, energyClass: "F", source: 3 },
    { name: "75\" U8000H (UE75U8000HK)", watts: { standby: 0.5, on: 129 }, energyClass: "F", source: 4 },
    { name: "85\" U8000H (UE85U8000HK)", watts: { standby: 0.5, on: 155 }, energyClass: "F", source: 5 },
    { name: "55\" U8000F 2025 (UE55U8000FK)", watts: { standby: 0.5, on: 79 }, energyClass: "G", source: 6 },
    { name: "65\" U8000F 2025 (UE65U8000FK)", watts: { standby: 0.5, on: 109 }, energyClass: "G", source: 7 },
  ],
  publishDate: "2026-12-17",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. U7000H har de samme tal som U8000H. Kilderne står nederst på siden.",
};

export default samsungCrystalUhd;
