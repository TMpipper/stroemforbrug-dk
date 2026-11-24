import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const sonyBravia5: ModelData = {
  slug: "sony-bravia-5",
  parent: "tv",
  brand: "Sony",
  name: "Sony Bravia 5",
  released: "2024-06",
  synonyms: [
    "sony bravia 5 strømforbrug",
    "sony bravia 5 watt",
    "k-55xr50 strømforbrug",
    "k-65xr50 watt",
    "sony xr50 forbrug",
    "sony bravia 5 85 tommer strømforbrug",
    "sony mini led tv strømforbrug",
  ],
  title: "Sony Bravia 5 strømforbrug (2026) → watt og energiklasse C",
  description:
    "Sony Bravia 5 (XR50) i 55 til 98 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og hvorfor de store størrelser får energiklasse C.",
  intro:
    "Bravia 5 bruger 57 W som 55\" og 100 W som 98\" i standardbilledet. I HDR stiger forbruget kun 28–46 %, langt mindre end på de fleste andre LCD-tv på siden.",
  content: `<h2>Hvor mange watt bruger Sony Bravia 5?</h2>
<p>Bravia 5 er Sonys LCD-tv med Mini LED-baggrundslys i mellemklassen, under <a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> og OLED-modellen <a href="/tv/sony-bravia-8-ii/">Sony Bravia 8 II</a>. Det kom i 2024 og sælges stadig i 55", 65", 75", 85" og 98". Modelnummeret er K-55XR50 og så videre. I EU's produktdatabase EPREL har vi fundet registreringerne med tillægget /1 fra august 2025, og det er dem, tallene her kommer fra.</p>
<p>I standardbilledet (SDR) bruger Bravia 5 57 W som 55", 66 W som 65", 78 W som 75", 83 W som 85" og 100 W som 98". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 108 kWh om året, svarende til {{kr 108}}, og 65" omkring 124 kWh, svarende til {{kr 124}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>55" (K-55XR50)</td><td>57 W</td><td>73 W</td><td>E</td><td>108</td></tr>
<tr><td>65" (K-65XR50)</td><td>66 W</td><td>90 W</td><td>D</td><td>124</td></tr>
<tr><td>75" (K-75XR50)</td><td>78 W</td><td>106 W</td><td>D</td><td>146</td></tr>
<tr><td>85" (K-85XR50)</td><td>83 W</td><td>121 W</td><td>C</td><td>155</td></tr>
<tr><td>98" (K-98XR50)</td><td>100 W</td><td>138 W</td><td>C</td><td>186</td></tr>
</tbody>
</table>
<p>*Fem timer i standardbilledet om dagen og standby resten af døgnet, alle årets dage.</p>

<h2>Store skærme i energiklasse C</h2>
<p>Energiklassen regnes ud fra forbruget i forhold til skærmens areal. Fordi Bravia 5 bruger så lidt i de store størrelser, får 85" og 98" klasse C, og 65" og 75" klasse D. Det er de bedste klasser blandt LCD-tv'ene på vores modelsider, på linje med Bravia 7 II. Fra 55" til 98" stiger forbruget med 43 W, selvom skærmarealet er mere end tre gange så stort.</p>
<p>98" Bravia 5 bruger omkring 186 kWh om året med vores profil, svarende til {{kr 186}}. Det er mindre end 65" <a href="/tv/samsung-crystal-uhd/">Samsung Crystal UHD U8000H</a>, der bruger 102 W og omkring 190 kWh. Skal du have en meget stor skærm, er Bravia 5 altså et tv, hvor størrelsen ikke slår voldsomt igennem på elregningen.</p>

<h2>Lille tillæg i HDR</h2>
<p>På mange LCD-tv med Mini LED stiger forbruget voldsomt i HDR, fordi baggrundslyset skrues helt op. På Bravia 5 viser energimærkets HDR-måling 73–138 W, kun 28–46 % mere end i standardbilledet. En film på to timer i HDR på 65" bruger omkring 0,18 kWh, svarende til {{kr 0,18}}. Til sammenligning bruger 65" <a href="/tv/tcl-c7l/">TCL C7L</a> 300 W i HDR, så den samme film koster mere end tre gange så meget i strøm.</p>
<p>Det betyder, at Bravia 5 er et godt valg, hvis du ser mange film og serier i HDR og gerne vil kende forbruget på forhånd. Forskellen mellem SDR og HDR er så lille, at tallene i tabellen giver et godt billede af regningen, uanset hvad du ser.</p>

<h2>Bravia 5 mod Bravia 7 II og andre tv på siden</h2>
<p>Som 55" bruger Bravia 5 57 W og dermed lidt mindre end Bravia 7 II med 60 W. Fra 65" og op vender det: Bravia 7 II bruger 63 W som 65", 67 W som 75", 72 W som 85" og 88 W som 98", alle sammen mindre end Bravia 5. Som 85" er forskellen 11 W, omkring 20 kWh om året, svarende til {{kr 20}}. Det dyrere tv er altså det mest sparsomme af de to i de store størrelser.</p>
<p>Mod <a href="/tv/samsung-qn80h/">Samsung QN80H</a> sparer 65" Bravia 5 19 W i standardbilledet, omkring 35 kWh om året. Mod 55" TCL C7L med 64 W er forskellen 7 W, omkring 13 kWh om året, svarende til {{kr 13}}.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet med lyssensoren slået til; det er sådan, energimærket er målt.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen eller med stemmen. Det sparer omkring 10 kWh om året; se mere om <a href="/standby/">standbyforbrug</a>.</li>
<li>Sluk tv'et helt, når I går i seng, i stedet for at lade det slukke sig selv efter flere timer.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Sony Bravia 5?",
      answer:
        "Ifølge EU's energimærke 57 W som 55\", 66 W som 65\", 78 W som 75\", 83 W som 85\" og 100 W som 98\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at have et 65\" Bravia 5 tændt?",
      answer:
        "Med fem timers tv om dagen og standby resten af døgnet bruger 65\" omkring 124 kWh om året, svarende til {{kr 124}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Hvad bruger Sony Bravia 5 i HDR?",
      answer: "73–138 W afhængigt af størrelse ifølge energimærkets HDR-måling, kun 28–46 % mere end i standardbilledet.",
    },
    {
      question: "Bruger Bravia 5 mindre strøm end Bravia 7 II?",
      answer:
        "Kun som 55\", hvor Bravia 5 bruger 57 W mod 60 W. Fra 65\" og op bruger Bravia 7 II mindre, for eksempel 72 mod 83 W som 85\".",
    },
    {
      question: "Hvilken energiklasse har Sony Bravia 5?",
      answer: "E som 55\", D som 65\" og 75\" og C som 85\" og 98\" i standardbilledet. I HDR står de i E eller F.",
    },
  ],
  sources: [
    { name: "EPREL — Sony K-55XR50/1, EU's energimærke", url: eprel("2389612") },
    { name: "EPREL — Sony K-65XR50/1, EU's energimærke", url: eprel("2389614") },
    { name: "EPREL — Sony K-75XR50/1, EU's energimærke", url: eprel("2389616") },
    { name: "EPREL — Sony K-85XR50/1, EU's energimærke", url: eprel("2389617") },
    { name: "EPREL — Sony K-98XR50/1, EU's energimærke", url: eprel("2389619") },
  ],
  variants: [
    { name: "55\" (K-55XR50)", watts: { standby: 0.5, on: 57 }, energyClass: "E", source: 0 },
    { name: "65\" (K-65XR50)", watts: { standby: 0.5, on: 66 }, energyClass: "D", source: 1 },
    { name: "75\" (K-75XR50)", watts: { standby: 0.5, on: 78 }, energyClass: "D", source: 2 },
    { name: "85\" (K-85XR50)", watts: { standby: 0.5, on: 83 }, energyClass: "C", source: 3 },
    { name: "98\" (K-98XR50)", watts: { standby: 0.5, on: 100 }, energyClass: "C", source: 4 },
  ],
  publishDate: "2026-12-31",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Sonys egne oplysninger til EU's energimærke for registreringerne med tillægget /1: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. HDR-tallene står i teksten. Kilderne står nederst på siden.",
};

export default sonyBravia5;
