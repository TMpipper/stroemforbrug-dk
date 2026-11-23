import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washerdriers2019/${reg}`;
const lg = (m: string) => `https://www.lg.com/dk/vaskemaskine-torretumblere/vaskemaskine-og-torretumbler-i-en/${m}/`;

const lgVaskeToerre: ModelData = {
  slug: "lg-vaske-toerre",
  parent: "vaskemaskine-med-toerretumbler",
  brand: "LG",
  name: "LG vaske-tørremaskine",
  released: "2023-07",
  synonyms: [
    "lg vaske-tørremaskine",
    "lg kombineret vaskemaskine tørretumbler",
    "lg f2y5prp6w",
    "lg f4y5vrp6wy",
    "lg cv94v7s2wn",
    "lg f4y5erp0w",
    "lg slim vaske-tørremaskine",
    "lg vaskemaskine med tørretumbler",
  ],
  title: "LG vaske-tørremaskine strømforbrug (2026) → kWh og pris",
  description:
    "LG vaske-tørremaskine fra 8/5 til 11/6 kg: energimærkets kWh for vask og for vask med tørring, pris om året og sammenlignet med to separate maskiner.",
  intro:
    "En vask med tørring koster 3,08–3,26 kWh på LG's fire vaske-tørremaskiner — syv til otte gange så meget som en vask alene, så tørringen er det, der tæller.",
  content: `<h2>Hvor meget strøm bruger en LG vaske-tørremaskine?</h2>
<p>LG sælger flere kombinerede vaskemaskiner og tørretumblere i Danmark, og de fire på siden står alle på LG's danske hjemmeside. En vaske-tørremaskine har to energimærker i ét: et for vask alene og et for vask med tørring. I EU's produktdatabase EPREL bruger de tre store modeller — F4Y5VRP6WY på 9/6 kg, CV94V7S2WN på 10/6 kg og F4Y5ERP0W på 11/6 kg — 308 kWh pr. 100 vaske med tørring, klasse D. Den smalle F2Y5PRP6W på 8/5 kg bruger 326 kWh, klasse E.</p>
<p>Det er 3,08 og 3,26 kWh for én vask med tørring. Med tre vaske og tørringer om ugen bliver det omkring 480 kWh om året for D-modellerne og 509 kWh for F2Y5PRP6W, svarende til {{kr 480}} og {{kr 509}} ved månedens elpris.</p>
<table>
<thead><tr><th>Model</th><th>Vask / tør</th><th>Kun vask, kWh pr. 100</th><th>Vask og tør, kWh pr. 100</th><th>Klasse vask / vask og tør</th><th>Vand, vask og tør</th></tr></thead>
<tbody>
<tr><td>F2Y5PRP6W (Slim)</td><td>8 / 5 kg</td><td>42</td><td>326</td><td>A / E</td><td>80 l</td></tr>
<tr><td>F4Y5VRP6WY</td><td>9 / 6 kg</td><td>44</td><td>308</td><td>A / D</td><td>90 l</td></tr>
<tr><td>CV94V7S2WN</td><td>10 / 6 kg</td><td>46</td><td>308</td><td>A / D</td><td>90 l</td></tr>
<tr><td>F4Y5ERP0W</td><td>11 / 6 kg</td><td>48</td><td>308</td><td>A / D</td><td>90 l</td></tr>
</tbody>
</table>

<h2>Tørringen er det, der koster</h2>
<p>Som vaskemaskine er alle fire sparsomme: 42–48 kWh pr. 100 vaske, klasse A. Det er tørringen, der trækker op. Hos F4Y5VRP6WY er en vask 0,44 kWh og en vask med tørring 3,08 kWh — tørringen alene koster altså omkring 2,6 kWh. Det er derfor, energiklassen falder fra A til D, når tørringen er med.</p>
<p>Bemærk også, at maskinen kun kan tørre 5 eller 6 kg ad gangen, selv om den vasker 8–11 kg. Fylder du tromlen helt til vask, skal du tage noget ud før tørring eller tørre i to omgange. Energimærket for vask og tørring er målt ved den mindre tørrekapacitet. Vandforbruget stiger også: 80–90 liter for en vask med tørring mod 48–54 liter for en vask alene ifølge EPREL.</p>

<p>Tørreprogrammet kan ofte vælges efter, hvor tørt tøjet skal være. Skabstørt er det, energimærket er målt på; strygetørt tøj, der skal hænge færdigt, kræver kortere tid og mindre strøm. Tør ikke uld og tyndt tøj i samme omgang som håndklæder — de tørrer forskelligt, og maskinen kører, til det vådeste er tørt.</p>

<h2>Vaske-tørre eller to maskiner?</h2>
<p>Har du plads til to maskiner, er en vaskemaskine og en varmepumpetørretumbler markant billigere i drift. LG's egen 11 kg-vaskemaskine F4Y5EYP6W0F på <a href="/vaskemaskine/lg-vaskemaskine/">LG vaskemaskine</a>-siden bruger 0,47 kWh pr. vask, og varmepumpetumbleren RH80V9AV7N på siden om <a href="/varmepumpe-toerretumbler/lg-dual-inverter-toerretumbler/">LG DUAL Inverter</a> bruger 0,96 kWh pr. tørring. Tilsammen er det omkring 1,43 kWh mod 3,08 kWh i en vaske-tørremaskine — under halvdelen. Med tre vaske og tørringer om ugen er forskellen omkring 257 kWh om året, svarende til {{kr 257}}.</p>
<p>Vaske-tørremaskinen giver til gengæld plads. Er der kun ét hul i køkkenet eller badeværelset, og tørrer du det meste på snor, er den et fornuftigt kompromis. Brug tørringen til det, der skal tørres hurtigt, ikke til hver vask.</p>

<h2>LG mod andre vaske-tørremaskiner</h2>
<p>LG's tre D-modeller ligger på linje med <a href="/vaskemaskine-med-toerretumbler/bosch-serie-8-vaske-toerre/">Bosch Serie 8</a> og <a href="/vaskemaskine-med-toerretumbler/siemens-iq700-vaske-toerre/">Siemens iQ700</a>, der begge bruger 305 kWh pr. 100 vaske med tørring på 10,5/6 kg. Forskellen på 3 kWh pr. 100 er under 5 kWh om året. Den smalle F2Y5PRP6W bruger 18 kWh mere pr. 100 end de større LG-modeller og har mindre tørrekapacitet; den er valget, hvor der ikke er plads til en almindelig dybde.</p>

<h2>Hvornår er det billigst?</h2>
<p>En vask med tørring varer flere timer og bruger over 3 kWh, så tidspunktet betyder meget. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Brug udskudt start, så maskinen vasker og tørrer om natten; ventetiden bruger 4 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine-med-toerretumbler/">hvad en vask med tørring koster</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Tør kun det, der skal tørres — hver tørring koster omkring 2,6 kWh.</li>
<li>Læg højst 5–6 kg i til tørring, alt efter modellen.</li>
<li>Centrifugér ved højeste omdrejningstal før tørring; de tre store modeller har centrifugeringsklasse A.</li>
<li>Hæng syntetisk tøj til tørre — det tørrer hurtigt uden maskine.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en LG vaske-tørremaskine?",
      answer:
        "Ifølge energimærket 3,08 kWh pr. vask med tørring for F4Y5VRP6WY, CV94V7S2WN og F4Y5ERP0W og 3,26 kWh for Slim-modellen F2Y5PRP6W. Det svarer til {{kr 3,08}} og {{kr 3,26}} pr. gang.",
    },
    {
      question: "Hvad koster en LG vaske-tørremaskine om året i strøm?",
      answer: "Med tre vaske og tørringer om ugen omkring 480 kWh om året for D-modellerne og 509 kWh for F2Y5PRP6W, svarende til {{kr 480}} og {{kr 509}}.",
    },
    {
      question: "Hvor meget bruger LG F2Y5PRP6W kun til vask?",
      answer: "42 kWh pr. 100 vaske på eco 40-60, altså 0,42 kWh pr. vask i energiklasse A ifølge EPREL, svarende til {{oere 0,42}} pr. vask.",
    },
    {
      question: "Er en vaske-tørremaskine dyrere i drift end to maskiner?",
      answer:
        "Ja. En LG-vaskemaskine på 11 kg (0,47 kWh) og en LG-varmepumpetumbler (0,96 kWh) bruger tilsammen omkring 1,43 kWh mod 3,08 kWh i en LG vaske-tørremaskine — omkring 257 kWh mindre om året med tre vaske og tørringer om ugen.",
    },
    {
      question: "Hvornår er det billigst at vaske og tørre?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — LG F2Y5PRP6W, EU's energimærke", url: eprel("1653521") },
    { name: "EPREL — LG F4Y5VRP6WY, EU's energimærke", url: eprel("1541072") },
    { name: "EPREL — LG CV94V7S2WN, EU's energimærke", url: eprel("1538335") },
    { name: "EPREL — LG F4Y5ERP0W, EU's energimærke", url: eprel("1588333") },
    { name: "LG — F2Y5PRP6W, dansk produktside", url: lg("f2y5prp6w") },
    { name: "LG — F4Y5VRP6WY, dansk produktside", url: lg("f4y5vrp6wy") },
    { name: "LG — CV94V7S2WN, dansk produktside", url: lg("cv94v7s2wn") },
    { name: "LG — F4Y5ERP0W, dansk produktside", url: lg("f4y5erp0w") },
    { name: "EPREL — LG F4Y5EYP6W0F, EU's energimærke (vaskemaskine)", url: "https://eprel.ec.europa.eu/screen/product/washingmachines2019/1765829" },
    { name: "EPREL — LG RH80V9AV7N, EU's energimærke (tørretumbler)", url: "https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/2194839" },
    { name: "EPREL — Bosch WNC254A0SN (Serie 8), EU's energimærke", url: eprel("1304892") },
  ],
  variants: [
    { name: "Slim 8/5 kg (F2Y5PRP6W)", watts: { off: 0.5 }, kwhPer100Cycles: 326, energyClass: "E", source: 0 },
    { name: "9/6 kg (F4Y5VRP6WY)", watts: { off: 0.5 }, kwhPer100Cycles: 308, energyClass: "D", source: 1 },
    { name: "10/6 kg, wifi (CV94V7S2WN)", watts: { off: 0.5 }, kwhPer100Cycles: 308, energyClass: "D", source: 2 },
    { name: "11/6 kg (F4Y5ERP0W)", watts: { off: 0.5 }, kwhPer100Cycles: 308, energyClass: "D", source: 3 },
  ],
  publishDate: "2026-12-28",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget for en fuld vask og tørring (eco 40-60 og tørring til skabstørt) som et vægtet gennemsnit af fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default lgVaskeToerre;
