import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const philipsAmbilightPus8000: ModelData = {
  slug: "philips-ambilight-pus8000",
  parent: "tv",
  brand: "Philips",
  name: "Philips Ambilight PUS8001, PUS8010 og PUS8510",
  released: "2026-01",
  synonyms: [
    "philips ambilight strømforbrug",
    "philips pus8001 strømforbrug",
    "55pus8001 watt",
    "philips pus8010 strømforbrug",
    "philips pus8510 watt",
    "65pus8510 strømforbrug",
    "philips ambilight tv watt",
  ],
  title: "Philips Ambilight strømforbrug (2026) → PUS8001 og PUS8010",
  description:
    "Philips Ambilight PUS8001 fra 2026 og PUS8010 og PUS8510 fra 2025: watt i SDR og HDR fra EU-energimærket, kWh om året og hvorfor 2025-modellen bruger mindre.",
  intro:
    "Den nye PUS8001 bruger mere end 2025-modellen PUS8010 i alle størrelser: 77 mod 63 W som 55\" og 102 mod 78 W som 65\". Til gengæld stiger PUS8001 mindre i HDR.",
  content: `<h2>Hvor mange watt bruger Philips Ambilight PUS8000?</h2>
<p>Philips' LED-tv i 8000-serien har Ambilight, lys bag skærmen, der følger billedet. Serien dækker flere modeller, og vi har samlet tre modeller fra serien: PUS8001 fra 2026, PUS8010 fra 2025 og PUS8510 fra 2025, der har et QLED-panel med quantum dots. På PUS8001 er Ambilight tresidet ifølge Philips. I EU's produktdatabase EPREL har de europæiske udgaver (/12) de samme tal som de øvrige udgaver af samme størrelse.</p>
<p>I standardbilledet (SDR) bruger PUS8001 51 W som 43", 66 W som 50", 77 W som 55" og 102 W som 65". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" PUS8001 omkring 144 kWh om året, svarende til {{kr 144}}. 55" PUS8010 bruger omkring 118 kWh, svarende til {{kr 118}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>PUS8001 (2026)</th><th>PUS8010 (2025)</th><th>PUS8510 (2025, QLED)</th></tr></thead>
<tbody>
<tr><td>43"</td><td>51 W (F)</td><td>42 W (E)</td><td>50 W (F)</td></tr>
<tr><td>50"</td><td>66 W (F)</td><td>48 W (E)</td><td>58 W (F)</td></tr>
<tr><td>55"</td><td>77 W (F)</td><td>63 W (E)</td><td>68 W (F)</td></tr>
<tr><td>65"</td><td>102 W (F)</td><td>78 W (E)</td><td>84 W (E)</td></tr>
<tr><td>75"</td><td>–</td><td>–</td><td>102 W (E)</td></tr>
<tr><td>85"</td><td>–</td><td>–</td><td>103 W (D)</td></tr>
</tbody>
</table>
<p>Watt i standardbilledet (SDR) med energiklassen i parentes.</p>

<h2>Den nye årgang bruger mere</h2>
<p>Usædvanligt nok bruger 2026-modellen PUS8001 mere strøm end 2025-modellen PUS8010 i alle fire størrelser. Forskellen er 9 W som 43", 18 W som 50", 14 W som 55" og 24 W som 65". Med vores profil er det omkring 26 kWh om året for 55", svarende til {{kr 26}}, og omkring 44 kWh for 65", svarende til {{kr 44}}. PUS8010 står i energiklasse E i alle størrelser, PUS8001 i F.</p>
<p>Kan du stadig finde PUS8010, er den altså det sparsomme valg af de to. Over otte år med et 65" tv bliver forskellen omkring 350 kWh, svarende til {{kr 350}}, og det er et beløb, der kan opveje en del af prisforskellen ved købet.</p>

<h2>PUS8510 med QLED</h2>
<p>PUS8510 ligger mellem de to i de mindre størrelser: 68 W som 55" og 84 W som 65". Den findes også som 75" og 85", og her er tallene næsten ens: 102 og 103 W. 85" får derfor energiklasse D, den bedste klasse blandt de tre Ambilight-modeller her. Med vores profil bruger 85" PUS8510 omkring 191 kWh om året, svarende til {{kr 191}}. Philips sælger også PUS8500, PUS8550 og PUS8560 med samme tal i EPREL som PUS8510 i samme størrelse.</p>

<h2>HDR og Ambilight</h2>
<p>Energimærkets HDR-måling viser et andet mønster. PUS8010 og PUS8510 bruger 76–186 W i HDR, 59–98 % mere end i standardbilledet. PUS8001 stiger meget mindre: 55 W som 43" og 161 W som 65". For 55" PUS8001 står HDR-tallet i EPREL som 76 W, 1 W lavere end SDR-tallet; vi gengiver tallet, som Philips har indberettet det. Ser du mest HDR, er forskellen mellem årgangene altså mindre, end SDR-tallene viser: som 55" bruger PUS8001 76 W i HDR mod 121 W for PUS8010.</p>
<p>Ambilight-lyset bruger også strøm. Hvor meget det lægger til, oplyser Philips ikke for sig i energimærket, og energimærket siger heller ikke, om lyset var tændt under målingen. Vil du være sikker på at holde forbruget nede, så slå Ambilight fra, når du ikke ser film.</p>

<h2>Ambilight-tv mod andre tv på siden</h2>
<p>Som 55" bruger PUS8001 de samme 77 W som <a href="/tv/philips-oled760/">Philips OLED760</a> og <a href="/tv/samsung-crystal-uhd/">Samsung Crystal UHD U8000H</a>. PUS8010 med 63 W er på niveau med <a href="/tv/hisense-u7s/">Hisense U7S</a> og <a href="/tv/tcl-c7l/">TCL C7L</a>, der begge bruger 64 W som 55". <a href="/tv/sony-bravia-5/">Sony Bravia 5</a> bruger 57 W som 55", omkring 37 kWh mindre om året end PUS8001.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet og lad lyssensoren styre lysstyrken.</li>
<li>Slå Ambilight fra eller skru ned for det til almindeligt tv.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen; det sparer omkring 10 kWh om året. Se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Philips PUS8001?",
      answer:
        "Ifølge EU's energimærke 51 W som 43\", 66 W som 50\", 77 W som 55\" og 102 W som 65\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Bruger PUS8001 mere strøm end PUS8010?",
      answer:
        "Ja, i standardbilledet: 77 mod 63 W som 55\" og 102 mod 78 W som 65\". Det er omkring 26 og 44 kWh mere om året med fem timers tv om dagen.",
    },
    {
      question: "Hvad koster det at have et 65\" Philips Ambilight tændt?",
      answer:
        "65\" PUS8001 bruger omkring 190 kWh om året, svarende til {{kr 190}}. 65\" PUS8010 bruger omkring 146 kWh og PUS8510 omkring 157 kWh, regnet ved {{pris_kwh}}.",
    },
    {
      question: "Bruger Ambilight meget strøm?",
      answer:
        "Det oplyser Philips ikke for sig i energimærket, og vi har ingen officielle tal for det. Slår du Ambilight fra, når du ikke ser film, er du sikker på ikke at bruge strøm på det.",
    },
    {
      question: "Hvilken energiklasse har Philips PUS8510?",
      answer: "F som 43\", 50\" og 55\", E som 65\" og 75\" og D som 85\" i standardbilledet.",
    },
  ],
  sources: [
    { name: "EPREL — Philips 43PUS8001/12, EU's energimærke", url: eprel("2607861") },
    { name: "EPREL — Philips 50PUS8001/12, EU's energimærke", url: eprel("2607867") },
    { name: "EPREL — Philips 55PUS8001/12, EU's energimærke", url: eprel("2607077") },
    { name: "EPREL — Philips 65PUS8001/12, EU's energimærke", url: eprel("2607874") },
    { name: "EPREL — Philips 43PUS8010/12, EU's energimærke", url: eprel("2231071") },
    { name: "EPREL — Philips 50PUS8010/12, EU's energimærke", url: eprel("2229866") },
    { name: "EPREL — Philips 55PUS8010/12, EU's energimærke", url: eprel("2229869") },
    { name: "EPREL — Philips 65PUS8010/12, EU's energimærke", url: eprel("2233449") },
    { name: "EPREL — Philips 43PUS8510/12, EU's energimærke", url: eprel("2232897") },
    { name: "EPREL — Philips 50PUS8510/12, EU's energimærke", url: eprel("2232899") },
    { name: "EPREL — Philips 55PUS8510/12, EU's energimærke", url: eprel("2243374") },
    { name: "EPREL — Philips 65PUS8510/12, EU's energimærke", url: eprel("2249055") },
    { name: "EPREL — Philips 75PUS8510/12, EU's energimærke", url: eprel("2250122") },
    { name: "EPREL — Philips 85PUS8510/12, EU's energimærke", url: eprel("2249304") },
    { name: "Philips — 55PUS8001/12 Ambilight-tv, produktside", url: "https://www.philips.ie/c-p/55PUS8001_12/led-4k-ambilight-tv" },
  ],
  variants: [
    { name: "PUS8001 43\" (43PUS8001/12)", watts: { standby: 0.5, on: 51 }, energyClass: "F", source: 0 },
    { name: "PUS8001 50\" (50PUS8001/12)", watts: { standby: 0.5, on: 66 }, energyClass: "F", source: 1 },
    { name: "PUS8001 55\" (55PUS8001/12)", watts: { standby: 0.5, on: 77 }, energyClass: "F", source: 2 },
    { name: "PUS8001 65\" (65PUS8001/12)", watts: { standby: 0.5, on: 102 }, energyClass: "F", source: 3 },
    { name: "PUS8010 43\" 2025 (43PUS8010/12)", watts: { standby: 0.5, on: 42 }, energyClass: "E", source: 4 },
    { name: "PUS8010 50\" 2025 (50PUS8010/12)", watts: { standby: 0.5, on: 48 }, energyClass: "E", source: 5 },
    { name: "PUS8010 55\" 2025 (55PUS8010/12)", watts: { standby: 0.5, on: 63 }, energyClass: "E", source: 6 },
    { name: "PUS8010 65\" 2025 (65PUS8010/12)", watts: { standby: 0.5, on: 78 }, energyClass: "E", source: 7 },
    { name: "PUS8510 43\" 2025 (43PUS8510/12)", watts: { standby: 0.5, on: 50 }, energyClass: "F", source: 8 },
    { name: "PUS8510 50\" 2025 (50PUS8510/12)", watts: { standby: 0.5, on: 58 }, energyClass: "F", source: 9 },
    { name: "PUS8510 55\" 2025 (55PUS8510/12)", watts: { standby: 0.5, on: 68 }, energyClass: "F", source: 10 },
    { name: "PUS8510 65\" 2025 (65PUS8510/12)", watts: { standby: 0.5, on: 84 }, energyClass: "E", source: 11 },
    { name: "PUS8510 75\" 2025 (75PUS8510/12)", watts: { standby: 0.5, on: 102 }, energyClass: "E", source: 12 },
    { name: "PUS8510 85\" 2025 (85PUS8510/12)", watts: { standby: 0.5, on: 103 }, energyClass: "D", source: 13 },
  ],
  publishDate: "2027-01-01",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Philips' egne oplysninger til EU's energimærke (indberettet af TP Vision): forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. HDR-tallene står i teksten. Kilderne står nederst på siden.",
};

export default philipsAmbilightPus8000;
