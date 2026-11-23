import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const philipsOled760: ModelData = {
  slug: "philips-oled760",
  parent: "tv",
  brand: "Philips",
  name: "Philips OLED760 og OLED761",
  released: "2026-07",
  synonyms: [
    "philips oled760 strømforbrug",
    "philips oled761 watt",
    "philips ambilight oled strømforbrug",
    "55oled760 watt",
    "65oled761 strømforbrug",
    "philips ambilight tv forbrug",
    "philips oled tv watt",
  ],
  title: "Philips OLED760 strømforbrug (2026) → watt i SDR og HDR",
  description:
    "Philips Ambilight OLED760 fra 2025 og OLED761 fra 2026 i 48 til 77 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og forskellen pr. størrelse.",
  intro:
    "Som 55\" bruger den nye OLED761 7 W mere end OLED760 fra 2025. Usædvanligt nok bruger OLED760 mindre i HDR end i standardbilledet.",
  content: `<h2>Hvor mange watt bruger Philips OLED760?</h2>
<p>OLED760 er Philips' OLED-tv med Ambilight fra 2025, og OLED761 er efterfølgeren fra 2026. Ambilight er lysene bag på tv'et, der lyser væggen op i billedets farver. OLED760 findes i 48", 55", 65" og 77", OLED761 i 55", 65" og 77". Begge er 4K og står i EU's produktdatabase EPREL med deres eget energimærke.</p>
<p>I standardbilledet (SDR) bruger OLED760 60 W som 48", 77 W som 55", 102 W som 65" og 124 W som 77". OLED761 bruger 84 W som 55", 100 W som 65" og 134 W som 77". Standby er 0,3–0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" OLED760 omkring 144 kWh om året, svarende til {{kr 144}}, og 55" OLED761 omkring 157 kWh, svarende til {{kr 157}}.</p>
<table>
<thead><tr><th>Model</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>48OLED760 (2025)</td><td>60 W</td><td>51 W</td><td>F</td></tr>
<tr><td>55OLED760 (2025)</td><td>77 W</td><td>71 W</td><td>F</td></tr>
<tr><td>65OLED760 (2025)</td><td>102 W</td><td>89 W</td><td>F</td></tr>
<tr><td>77OLED760 (2025)</td><td>124 W</td><td>105 W</td><td>F</td></tr>
<tr><td>55OLED761 (2026)</td><td>84 W</td><td>89 W</td><td>G</td></tr>
<tr><td>65OLED761 (2026)</td><td>100 W</td><td>102 W</td><td>F</td></tr>
<tr><td>77OLED761 (2026)</td><td>134 W</td><td>142 W</td><td>F</td></tr>
</tbody>
</table>

<h2>OLED761 mod OLED760: ikke altid bedre</h2>
<p>Den nye generation er ikke mere sparsom i alle størrelser. 55" OLED761 bruger 84 W mod 77 W for OLED760 og er rykket ned fra energiklasse F til G. 77" bruger 134 mod 124 W. Kun 65" er en anelse bedre, 100 mod 102 W, og har fået lavere standby, 0,3 W. Med vores profil bruger 55" OLED761 omkring 13 kWh mere om året end OLED760, svarende til {{kr 13}}, og 77" omkring 17 kWh mere.</p>
<p>Den mindste størrelse, 48" OLED760, bruger kun 60 W og omkring 113 kWh om året, svarende til {{kr 113}}. Den findes ikke i OLED761-serien, så vil du have et lille OLED-tv med Ambilight til soveværelset eller et mindre stuehus, er det den mest sparsomme Philips på siden.</p>
<p>Står du og vælger mellem de to, er OLED760 altså det mest sparsomme valg som 55" og 77". 55" OLED761 bruger i øvrigt det samme som 55" OLED811 fra 2026, der også ligger på 84 W.</p>

<h2>Mindre i HDR end i SDR</h2>
<p>OLED760 bruger mindre i energimærkets HDR-måling end i standardbilledet, 51–105 W mod 60–124 W, og det er usædvanligt for et tv. Energimærket måler HDR med en standardiseret video i den billedindstilling, tv'et selv vælger til HDR, og hos Philips er den tilsyneladende sat mørkere end standardbilledet. Philips forklarer det ikke i EPREL. OLED761 opfører sig mere normalt med 89–142 W i HDR, 2–6 % over SDR. Uanset model gælder det, at lyse scener og høj lysstyrke trækker mere, fordi hver pixel på et OLED-tv selv lyser.</p>
<p>Ambilight bruger også lidt strøm. Energimærket oplyser ikke, hvor meget lysene bag tv'et bidrager, så slår du Ambilight fra, kan forbruget ligge lidt under tallene her.</p>

<h2>Philips mod LG, Sony og LCD-tv</h2>
<p>Som 55" er Philips ikke blandt de mest sparsomme OLED-tv på vores modelsider. <a href="/tv/lg-oled-g6/">LG OLED G6</a> bruger 63,9 W og <a href="/tv/lg-oled-c6/">LG OLED C6</a> 75,6 W mod 77 W for OLED760 og 84 W for OLED761. Mod G6 bruger 55" OLED761 omkring 37 kWh mere om året, svarende til {{kr 37}}.</p>
<p>Som 65" ligger OLED761 med 100 W over <a href="/tv/sony-bravia-8-ii/">Sony Bravia 8 II</a> med 87 W. LCD-tv'et <a href="/tv/lg-qned85/">LG QNED85</a> bruger 84,6 W som 65", omkring 27 kWh mindre om året end OLED761 med vores profil.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet og lad lyssensoren dæmpe skærmen i mørke rum.</li>
<li>Slå Ambilight fra, når du ikke har glæde af det, for eksempel om dagen.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen; 2 W i stedet for 0,3–0,5 W giver op til 12 kWh om året. Se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Philips OLED760?",
      answer:
        "Ifølge EU's energimærke 60 W som 48\", 77 W som 55\", 102 W som 65\" og 124 W som 77\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvor mange watt bruger Philips OLED761?",
      answer: "84 W som 55\", 100 W som 65\" og 134 W som 77\" i standardbilledet. Standby er 0,3–0,5 W.",
    },
    {
      question: "Hvad koster det at have en 65\" Philips OLED tændt?",
      answer:
        "Med fem timers tv om dagen bruger 65\" OLED761 omkring 185 kWh om året, svarende til {{kr 185}} ved månedens elpris på {{pris_kwh}}. 65\" OLED760 bruger omkring 190 kWh.",
    },
    {
      question: "Hvorfor bruger OLED760 mindre i HDR end i SDR?",
      answer:
        "Energimærket måler HDR i den billedindstilling, tv'et selv vælger til HDR-indhold. Philips forklarer det ikke, men en sandsynlig grund er, at den indstilling er mørkere end standardbilledet. Målingen giver 51–105 W mod 60–124 W.",
    },
    {
      question: "Tæller Ambilight med i energimærket?",
      answer:
        "Energimærket oplyser ikke, hvor meget Ambilight bidrager. Slår du lysene fra, kan forbruget ligge lidt under energimærkets tal.",
    },
  ],
  sources: [
    { name: "EPREL — Philips 48OLED760/12, EU's energimærke", url: eprel("2260991") },
    { name: "EPREL — Philips 55OLED760/12, EU's energimærke", url: eprel("2262789") },
    { name: "EPREL — Philips 65OLED760/12, EU's energimærke", url: eprel("2262794") },
    { name: "EPREL — Philips 77OLED760/12, EU's energimærke", url: eprel("2262802") },
    { name: "EPREL — Philips 55OLED761/12, EU's energimærke", url: eprel("2682076") },
    { name: "EPREL — Philips 65OLED761/12, EU's energimærke", url: eprel("2709830") },
    { name: "EPREL — Philips 77OLED761/12, EU's energimærke", url: eprel("2776476") },
    { name: "EPREL — Philips 55OLED811/12, EU's energimærke", url: eprel("2687106") },
  ],
  variants: [
    { name: "48\" OLED760 (48OLED760/12)", watts: { standby: 0.5, on: 60 }, energyClass: "F", source: 0 },
    { name: "55\" OLED760 (55OLED760/12)", watts: { standby: 0.5, on: 77 }, energyClass: "F", source: 1 },
    { name: "65\" OLED760 (65OLED760/12)", watts: { standby: 0.5, on: 102 }, energyClass: "F", source: 2 },
    { name: "77\" OLED760 (77OLED760/12)", watts: { standby: 0.5, on: 124 }, energyClass: "F", source: 3 },
    { name: "55\" OLED761 (55OLED761/12)", watts: { standby: 0.5, on: 84 }, energyClass: "G", source: 4 },
    { name: "65\" OLED761 (65OLED761/12)", watts: { standby: 0.3, on: 100 }, energyClass: "F", source: 5 },
    { name: "77\" OLED761 (77OLED761/12)", watts: { standby: 0.3, on: 134 }, energyClass: "F", source: 6 },
  ],
  publishDate: "2026-12-21",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Philips' egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Energimærket oplyser ikke, hvor meget Ambilight bidrager. Kilderne står nederst på siden.",
};

export default philipsOled760;
