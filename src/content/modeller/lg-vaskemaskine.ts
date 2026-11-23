import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const lg = (m: string) => `https://www.lg.com/dk/vaskemaskine-torretumblere/frontlaessede-vaskemaskiner/${m}/`;

const lgVaskemaskine: ModelData = {
  slug: "lg-vaskemaskine",
  parent: "vaskemaskine",
  brand: "LG",
  name: "LG vaskemaskine",
  released: "2024-04",
  synonyms: [
    "lg vaskemaskine",
    "lg fv94ens2wn",
    "lg f4y5eyp6w0f",
    "lg f4a1009nwk",
    "lg ai dd vaskemaskine",
    "lg vaskemaskine 11 kg",
    "lg vaskemaskine 9 kg",
    "lg turbowash 360",
  ],
  title: "LG vaskemaskine strømforbrug (2026) → kWh pr. vask og pris",
  description:
    "LG vaskemaskine på 9 og 11 kg: energimærkets kWh pr. vask på eco 40-60 for FV94ENS2WN, F4Y5EYP6W0F og F4A1009NWK, pris om året og billigste tid at vaske.",
  intro:
    "De tre LG-maskiner har alle energiklasse A, og de to 11 kg-modeller bruger mindre strøm pr. vask end 9 kg-modellen, selv om tromlen er større.",
  content: `<h2>Hvor meget strøm bruger en LG vaskemaskine?</h2>
<p>Siden dækker tre af LG's frontbetjente vaskemaskiner i Danmark: FV94ENS2WN og F4Y5EYP6W0F på 11 kg og F4A1009NWK på 9 kg. Alle tre står på LG's danske hjemmeside, og hver har sit eget energimærke i EU's produktdatabase EPREL. De to 11 kg-maskiner bruger 47 kWh pr. 100 vaske på eco 40-60-programmet, altså 0,47 kWh pr. vask. 9 kg-maskinen F4A1009NWK bruger 49 kWh, altså 0,49 kWh pr. vask.</p>
<p>Med fem vaske om ugen bliver det omkring 122 kWh om året for 11 kg-modellerne og 127 kWh for 9 kg-modellen, svarende til {{kr 122}} og {{kr 127}} ved månedens elpris. Forskellen på de to størrelser er 5 kWh om året — det er udstyret og tromlen, ikke strømregningen, der skiller dem ad.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th><th>Centrifugering</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>FV94ENS2WN</td><td>11 kg</td><td>47</td><td>4:00</td><td>54 l</td><td>A (44,9 %)</td><td>71 dB</td></tr>
<tr><td>F4Y5EYP6W0F</td><td>11 kg</td><td>47</td><td>4:00</td><td>54 l</td><td>A (44,9 %)</td><td>71 dB</td></tr>
<tr><td>F4A1009NWK</td><td>9 kg</td><td>49</td><td>3:48</td><td>50 l</td><td>B (53,9 %)</td><td>74 dB</td></tr>
</tbody>
</table>

<h2>11 kg bruger mindre pr. kg end 9 kg</h2>
<p>Det lyder bagvendt, men den store tromle er den sparsomme af de tre. FV94ENS2WN og F4Y5EYP6W0F bruger 0,47 kWh på en fuld 11 kg-vask, mens F4A1009NWK bruger 0,49 kWh på 9 kg. Pr. kg tøj er det omkring 21 % mindre for 11 kg-modellerne. Gevinsten kræver dog, at du faktisk fylder tromlen. Energimærket er et vægtet gennemsnit af fuld, halv og kvart fyldning, og ved kvart fyldning tager eco 40-60 2 timer og 37 minutter på 11 kg-modellerne og 2 timer og 54 minutter på 9 kg-modellen ifølge EPREL.</p>
<p>Forskellen mellem de to 11 kg-maskiner ligger i udstyret. FV94ENS2WN har ifølge LG's danske produktside TurboWash360 og wifi, og LG har oplyst 2 W i netværksforbundet standby til EPREL. F4Y5EYP6W0F har Steam og AI DD, men ingen netværksstandby i databasen. Energimærket er det samme.</p>

<h2>Centrifugeringen betyder noget for tørretumbleren</h2>
<p>Her skiller F4A1009NWK sig ud. De to 11 kg-maskiner centrifugerer i klasse A og efterlader 44,9 % restfugt i tøjet efter eco 40-60. 9 kg-modellen ligger i klasse B med 53,9 %. De 9 procentpoint ekstra vand skal tørretumbleren have ud bagefter, og en tørring bruger mere strøm end en vask. Tørrer du det meste i en tumbler som <a href="/varmepumpe-toerretumbler/lg-dual-inverter-toerretumbler/">LG DUAL Inverter</a>, giver en A-centrifugering kortere tørretid. Tørrer du på snor, betyder det mindre.</p>
<p>9 kg-modellen larmer også lidt mere under centrifugeringen: 74 dB mod 71 dB, hvilket placerer den i støjklasse B.</p>

<h2>LG mod andre vaskemaskiner på siden</h2>
<p>LG's 11 kg-modeller ligger på linje med <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a>, hvor WGK264ZLSN på 11 kg også bruger 47 kWh pr. 100 vaske. F4A1009NWK på 9 kg bruger det samme som Bosch' WGG244ZTSN på 9 kg: 49 kWh. Vil du ned i forbrug, skal du se på maskiner med en varmepumpe eller ekstra sparsomme eco-programmer. <a href="/vaskemaskine/miele-w1/">Miele W1</a>-modellen WWE380 på 8 kg bruger 29 kWh pr. 100 vaske, omkring 47 kWh mindre om året end LG's 11 kg-modeller med fem vaske om ugen, svarende til {{kr 47}}.</p>
<p>Det er ikke en stor sum pr. år, så valget handler mest om kapacitet, centrifugering og pris ved købet. Vasker du for en familie med fire eller flere, er 11 kg ofte det mest fornuftige, fordi du kan samle tøjet i færre, fulde vaske.</p>

<h2>Varmt vand er det, der koster</h2>
<p>Næsten al strømmen i en vask går til at varme vandet. Eco 40-60 vasker normalt snavset bomuld ved lav temperatur i lang tid, og det er grunden til, at programmet tager fire timer på 11 kg-modellerne. Et 60-graders bomuldsprogram bruger typisk omkring det dobbelte, et 30-graders mindre. Damp-programmerne (Steam), som alle tre har, bruger ekstra strøm til at lave damp; brug dem, når tøjet har brug for det, ikke som standard. Se <a href="/vaskemaskine/">hvad en vask koster ved forskellige temperaturer</a>.</p>
<p>Slukket og i standby bruger alle tre 0,5 W. Under udskudt start bruger de 4 W.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>En vaskemaskine er et af de lette apparater at flytte til billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen og brug udskudt start, så den kører om natten eller tidligt om morgenen. Otte timers ventetid på 4 W er omkring 0,03 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine/">det billigste tidspunkt at vaske</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standardprogram — det er det, energimærket er målt på.</li>
<li>Fyld tromlen: en fuld 11 kg-vask er billigere pr. kg end to halve.</li>
<li>Vælg en model med centrifugeringsklasse A, hvis tøjet skal i tørretumbleren.</li>
<li>Start med udskudt start uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en LG vaskemaskine pr. vask?",
      answer:
        "Ifølge energimærket 0,47 kWh pr. vask på eco 40-60 for 11 kg-modellerne FV94ENS2WN og F4Y5EYP6W0F og 0,49 kWh for 9 kg-modellen F4A1009NWK. Det svarer til {{oere 0,47}} og {{oere 0,49}} pr. vask.",
    },
    {
      question: "Hvad koster en LG vaskemaskine om året i strøm?",
      answer: "Med fem vaske om ugen omkring 122 kWh om året for 11 kg-modellerne og 127 kWh for 9 kg-modellen, svarende til {{kr 122}} og {{kr 127}} ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har LG FV94ENS2WN?",
      answer: "Energiklasse A med 47 kWh pr. 100 vaske, 11 kg og 54 liter vand pr. eco 40-60-vask ifølge EPREL. Centrifugeringen er klasse A.",
    },
    {
      question: "Er der forskel på LG FV94ENS2WN og F4Y5EYP6W0F?",
      answer:
        "Ikke i forbruget: begge har 47 kWh pr. 100 vaske og 11 kg. FV94ENS2WN har TurboWash360 og wifi ifølge LG, og 2 W i netværksforbundet standby ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — LG FV94ENS2WN, EU's energimærke", url: eprel("1577446") },
    { name: "EPREL — LG F4Y5EYP6W0F, EU's energimærke", url: eprel("1765829") },
    { name: "EPREL — LG F4A1009NWK, EU's energimærke", url: eprel("2005944") },
    { name: "LG — FV94ENS2WN, dansk produktside", url: lg("fv94ens2wn") },
    { name: "LG — F4Y5EYP6W0F, dansk produktside", url: lg("f4y5eyp6w0f") },
    { name: "LG — F4A1009NWK, dansk produktside", url: lg("f4a1009nwk") },
    { name: "EPREL — Bosch WGK264ZLSN (Serie 6), EU's energimærke", url: eprel("2365311") },
    { name: "EPREL — Miele WWE380 (W1), EU's energimærke", url: eprel("2060681") },
  ],
  variants: [
    { name: "11 kg, wifi (FV94ENS2WN)", watts: { off: 0.5 }, kwhPer100Cycles: 47, energyClass: "A", source: 0 },
    { name: "11 kg (F4Y5EYP6W0F)", watts: { off: 0.5 }, kwhPer100Cycles: 47, energyClass: "A", source: 1 },
    { name: "9 kg (F4A1009NWK)", watts: { off: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 2 },
  ],
  publishDate: "2026-12-23",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default lgVaskemaskine;
