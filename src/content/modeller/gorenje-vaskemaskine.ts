import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const gorenje = (path: string) => `https://dk.gorenje.com/produkter/vask-og-tor/vaskemaskiner/${path}`;

const gorenjeVaskemaskine: ModelData = {
  slug: "gorenje-vaskemaskine",
  parent: "vaskemaskine",
  brand: "Gorenje",
  name: "Gorenje vaskemaskine",
  released: "2026-05",
  synonyms: [
    "gorenje vaskemaskine strømforbrug",
    "gorenje vaskemaskine forbrug pr vask",
    "gorenje wg2p84a32",
    "gorenje wg484a31",
    "gorenje g2wp9aw",
    "gorenje w2g494a11",
    "gorenje wg6x4ap3",
    "gorenje wg2p114a22",
    "gorenje wpe84as",
  ],
  title: "Gorenje vaskemaskine strømforbrug (2026) → kWh pr. vask",
  description:
    "Gorenje vaskemaskine fra 8 til 11 kg: energimærkets kWh pr. vask på eco 40-60 for syv danske modeller, pris om året, vand pr. vask og billigste tid at vaske.",
  intro:
    "Alle syv Gorenje-maskiner har energiklasse A, men forbruget spænder fra 0,33 til 0,47 kWh pr. vask. To 8 kg-maskiner kan altså bruge vidt forskelligt, selv om tromlen er lige stor.",
  content: `<h2>Hvor meget strøm bruger en Gorenje vaskemaskine?</h2>
<p>Siden dækker syv af de frontbetjente vaskemaskiner på Gorenjes danske hjemmeside, fra 8 til 11 kg. Hver har sit eget energimærke i EU's produktdatabase EPREL, og alle har energiklasse A. Klassen dækker dog et bredt spænd: fra 33 til 47 kWh pr. 100 vaske på eco 40-60-programmet.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>WG2P84A32</td><td>8 kg</td><td>33</td><td>3:38</td><td>43 l</td><td>86</td></tr>
<tr><td>WG484A31</td><td>8 kg</td><td>33</td><td>3:29</td><td>41 l</td><td>86</td></tr>
<tr><td>WPE84AS</td><td>8 kg</td><td>47</td><td>3:38</td><td>45 l</td><td>122</td></tr>
<tr><td>G2WP9AW</td><td>9 kg</td><td>40</td><td>3:48</td><td>45 l</td><td>104</td></tr>
<tr><td>W2G494A11</td><td>9 kg</td><td>41</td><td>3:30</td><td>43 l</td><td>107</td></tr>
<tr><td>WG6X4AP3</td><td>10,5 kg</td><td>47</td><td>3:40</td><td>37 l</td><td>122</td></tr>
<tr><td>WG2P114A22</td><td>11 kg</td><td>42</td><td>3:59</td><td>50 l</td><td>109</td></tr>
</tbody>
</table>
<p>Årstallet er regnet med fem vaske om ugen. Ved månedens elpris koster de to sparsomme 8 kg-maskiner {{kr 86}} om året, 9 kg-modellerne {{kr 104-107}} og 11 kg-modellen WG2P114A22 {{kr 109}}. WPE84AS og WG6X4AP3 koster {{kr 122}}.</p>

<h2>To 8 kg-maskiner, 36 kWh til forskel</h2>
<p>WG2P84A32 og WG484A31 bruger 0,33 kWh pr. vask, mens WPE84AS med samme 8 kg bruger 0,47 kWh. Med fem vaske om ugen er forskellen omkring 36 kWh om året, svarende til {{kr 36}} ved månedens elpris. Det er ikke en stor sum, men den kommer hvert år, så længe maskinen holder, og alle tre står i energiklasse A. Kig derfor på kWh-tallet på energimærket, ikke kun bogstavet.</p>
<p>11 kg-modellen WG2P114A22 er god til familier: den bruger 0,42 kWh på en fuld 11 kg-vask, omkring 0,038 kWh pr. kg tøj, mod 0,041 kWh for WG2P84A32 og 0,059 kWh for WPE84AS. Gevinsten kræver, at du fylder tromlen. WG6X4AP3 på 10,5 kg bruger mere strøm pr. vask end 11 kg-modellen, men mindst vand af de syv: 37 liter.</p>

<h2>Centrifugering og tørretumbler</h2>
<p>Alle syv centrifugerer i klasse B og efterlader omkring 53–54 % restfugt i tøjet efter eco 40-60 ifølge EPREL. Det vand skal en tørretumbler have ud bagefter. Maskiner i klasse A, som LG's 11 kg-modeller, efterlader omkring 45 %. Tørrer du det meste i en <a href="/varmepumpe-toerretumbler/">varmepumpetørretumbler</a>, betyder centrifugeringen lidt for den samlede regning; tørrer du på snor, betyder den næsten intet.</p>
<p>Slukket bruger alle syv 0,49 W. Under udskudt start bruger WG2P84A32, G2WP9AW, WG2P114A22 og WPE84AS 4 W, mens WG484A31, W2G494A11 og WG6X4AP3 bruger 1,16 W. Otte timers ventetid på 4 W er omkring 0,03 kWh.</p>

<h2>Gorenje mod andre vaskemaskiner på siden</h2>
<p>Gorenjes 8 kg-modeller på 33 kWh pr. 100 vaske bruger 13 kWh mindre pr. 100 vaske end <a href="/vaskemaskine/bosch-serie-2-vaskemaskine/">Bosch Serie 2</a> WGE03400SN på 8 kg (46 kWh), omkring 34 kWh om året. 9 kg-modellen G2WP9AW bruger 9 kWh mindre pr. 100 vaske end <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a> WGG244ZTSN på 9 kg (49 kWh). <a href="/vaskemaskine/miele-w1/">Miele W1</a> WWE380 på 8 kg ligger lavere med 29 kWh, 4 kWh under Gorenjes sparsomme 8 kg-modeller, omkring 10 kWh om året.</p>
<p>Forskellene er små i kroner: fra {{kr 10}} til {{kr 36}} om året mellem de modeller, der er nævnt her. Vælg efter kapacitet, programmer og centrifugering, og brug energimærkets kWh-tal til at skille de ellers ens maskiner ad.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Næsten al strømmen i en vask går til at varme vandet, og en vaskemaskine er let at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen og brug udskudt start, så den kører om natten eller tidligt om morgenen. Se <a href="/elpriser/">dagens timepriser</a> og <a href="/vaskemaskine/">hvad en vask koster ved forskellige temperaturer</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standardprogram — det er det, energimærket er målt på.</li>
<li>Fyld tromlen: en fuld vask er billigere pr. kg end to halve.</li>
<li>Vask ved 30 eller 40 grader, når tøjet ikke er meget snavset; en 60-graders vask bruger typisk det dobbelte.</li>
<li>Start med udskudt start uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Gorenje vaskemaskine pr. vask?",
      answer:
        "Ifølge energimærket 0,33–0,47 kWh pr. vask på eco 40-60 for de syv modeller på siden: 0,33 kWh for WG2P84A32 og WG484A31, 0,40–0,42 kWh for 9 og 11 kg-modellerne og 0,47 kWh for WPE84AS og WG6X4AP3.",
    },
    {
      question: "Hvad koster en Gorenje vaskemaskine om året i strøm?",
      answer: "Med fem vaske om ugen omkring 86–122 kWh om året afhængigt af model, svarende til {{kr 86}} til {{kr 122}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har Gorenje WG2P84A32?",
      answer: "Energiklasse A med 33 kWh pr. 100 vaske, 8 kg og 43 liter vand pr. eco 40-60-vask ifølge EPREL. Centrifugeringen er klasse B.",
    },
    {
      question: "Hvorfor bruger to 8 kg-maskiner fra Gorenje forskelligt?",
      answer:
        "Energiklasse A dækker et bredt spænd. WG2P84A32 bruger 33 kWh pr. 100 vaske, WPE84AS 47 kWh — omkring 36 kWh om året til forskel, svarende til {{kr 36}}.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 1,16–4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Gorenje WG2P84A32, EU's energimærke", url: eprel("2664135") },
    { name: "EPREL — Gorenje WG484A31, EU's energimærke", url: eprel("2462452") },
    { name: "EPREL — Gorenje WPE84AS, EU's energimærke", url: eprel("2298890") },
    { name: "EPREL — Gorenje G2WP9AW, EU's energimærke", url: eprel("2661119") },
    { name: "EPREL — Gorenje W2G494A11, EU's energimærke", url: eprel("2540799") },
    { name: "EPREL — Gorenje WG6X4AP3, EU's energimærke", url: eprel("2662954") },
    { name: "EPREL — Gorenje WG2P114A22, EU's energimærke", url: eprel("2667055") },
    { name: "Gorenje — vaskemaskiner, dansk sortiment", url: gorenje("c/gowash01") },
    { name: "Gorenje — WG2P84A32, dansk produktside", url: gorenje("WASHER-WG2P84A32-GOR/p/000000000020017827") },
    { name: "Gorenje — WG2P114A22, dansk produktside", url: gorenje("WASHER-WG2P114A22-GOR/p/000000000020017836") },
  ],
  variants: [
    { name: "8 kg (WG2P84A32)", watts: { off: 0.49 }, kwhPer100Cycles: 33, energyClass: "A", source: 0 },
    { name: "8 kg (WG484A31)", watts: { off: 0.49 }, kwhPer100Cycles: 33, energyClass: "A", source: 1 },
    { name: "8 kg (WPE84AS)", watts: { off: 0.49 }, kwhPer100Cycles: 47, energyClass: "A", source: 2 },
    { name: "9 kg (G2WP9AW)", watts: { off: 0.49 }, kwhPer100Cycles: 40, energyClass: "A", source: 3 },
    { name: "9 kg (W2G494A11)", watts: { off: 0.49 }, kwhPer100Cycles: 41, energyClass: "A", source: 4 },
    { name: "10,5 kg (WG6X4AP3)", watts: { off: 0.49 }, kwhPer100Cycles: 47, energyClass: "A", source: 5 },
    { name: "11 kg (WG2P114A22)", watts: { off: 0.49 }, kwhPer100Cycles: 42, energyClass: "A", source: 6 },
  ],
  publishDate: "2026-12-31",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default gorenjeVaskemaskine;
