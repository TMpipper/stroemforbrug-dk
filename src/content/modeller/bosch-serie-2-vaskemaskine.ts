import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const boschSerie2Vaskemaskine: ModelData = {
  slug: "bosch-serie-2-vaskemaskine",
  parent: "vaskemaskine",
  brand: "Bosch",
  name: "Bosch Serie 2 vaskemaskine",
  released: "2024-04",
  synonyms: [
    "bosch serie 2 vaskemaskine",
    "bosch wge03400sn",
    "bosch wge02400sn",
    "bosch wge0340lsn",
    "bosch vaskemaskine 8 kg",
    "bosch vaskemaskine 7 kg",
    "bosch series 2 vaskemaskine",
    "bosch billig vaskemaskine",
  ],
  title: "Bosch Serie 2 vaskemaskine strømforbrug (2026) → pr. vask",
  description:
    "Bosch Serie 2 vaskemaskine på 7 og 8 kg: energimærkets kWh pr. vask for WGE03400SN, WGE02400SN og WGE0340LSN, pris om året, standby og billigste tid at vaske.",
  intro:
    "De tre Serie 2-maskiner har energiklasse A og bruger 0,40–0,47 kWh pr. vask; pr. kg tøj er 7 kg- og 8 kg-modellen næsten lige sparsomme.",
  content: `<h2>Hvor meget strøm bruger Bosch Serie 2?</h2>
<p>Serie 2 er den første af Bosch' fire vaskemaskineserier (2, 4, 6 og 8), og de tre på siden står alle i Bosch' danske produktdatablade. I EU's produktdatabase EPREL har de hver sit energimærke. WGE03400SN på 8 kg bruger 46 kWh pr. 100 vaske på eco 40-60-programmet, altså 0,46 kWh pr. vask. WGE02400SN på 7 kg bruger 40 kWh. Den nyeste, WGE0340LSN på 8 kg fra juni 2026, bruger 47 kWh. Alle tre har energiklasse A.</p>
<p>Med fem vaske om ugen bliver det omkring 120 kWh om året for WGE03400SN, 104 kWh for WGE02400SN og 122 kWh for WGE0340LSN, svarende til {{kr 120}}, {{kr 104}} og {{kr 122}} ved månedens elpris.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th><th>Slukket</th><th>Udskudt start</th></tr></thead>
<tbody>
<tr><td>WGE03400SN</td><td>8 kg</td><td>46</td><td>3:33</td><td>47 l</td><td>0,15 W</td><td>0,55 W</td></tr>
<tr><td>WGE02400SN</td><td>7 kg</td><td>40</td><td>2:55</td><td>44 l</td><td>0,5 W</td><td>4 W</td></tr>
<tr><td>WGE0340LSN (2026)</td><td>8 kg</td><td>47</td><td>3:25</td><td>44 l</td><td>0,5 W</td><td>4 W</td></tr>
</tbody>
</table>

<h2>7 kg eller 8 kg?</h2>
<p>WGE02400SN bruger 6 kWh mindre pr. 100 vaske end WGE03400SN, men tager også 1 kg mindre tøj. Pr. kg er de næsten ens: omkring 5,7 kWh pr. 100 vaske for begge. Den lille maskine sparer altså kun strøm, hvis dine vaske alligevel ikke fylder 8 kg. Vasker du for en familie, giver 8 kg færre vaske og dermed samme eller lavere forbrug over året. 7 kg-modellen er til gengæld hurtigere: eco 40-60 tager 2 timer og 55 minutter ved fuld fyldning mod 3 timer og 33 minutter.</p>
<p>Den nye WGE0340LSN fra 2026 erstatter ikke WGE03400SN med et lavere forbrug. Den bruger 1 kWh mere pr. 100 vaske, men 3 liter mindre vand og 8 minutter kortere tid på eco 40-60. Forskellen på 1 kWh er under 3 kWh om året — ikke noget, der skal afgøre valget.</p>

<h2>Lavt standbyforbrug på WGE03400SN</h2>
<p>WGE03400SN bruger ifølge EPREL 0,15 W slukket — samme lave tal som Serie 6-modellen WGG244ZTSN — og kun 0,55 W under udskudt start. De to andre bruger 0,5 W slukket og 4 W under udskudt start, som de fleste vaskemaskiner. Det betyder noget, hvis du ofte bruger udskudt start: otte timers ventetid koster 0,004 kWh på WGE03400SN og 0,03 kWh på de andre. Det er småting pr. gang, men det gør det helt gratis at flytte vasken til natten.</p>
<p>Alle tre centrifugerer i klasse B med omkring 53 % restfugt, og ingen af dem har et netværksstandby oplyst i EPREL. Skal tøjet i tørretumbler, er centrifugeringen værd at tænke over: en maskine i klasse A efterlader mindre vand i tøjet.</p>

<h2>Serie 2 mod dyrere maskiner</h2>
<p>Serie 2 er ikke dyrere i drift end <a href="/vaskemaskine/bosch-serie-6/">Bosch Serie 6</a>. Serie 6-modellen WGG244ZTSN på 9 kg bruger 49 kWh pr. 100 vaske, 3 kWh mere end WGE03400SN for 1 kg ekstra tromle. Det, du betaler for i Serie 6, er især udstyr og kapacitet. Vil du længere ned i forbrug, skal du op i en anden klasse af maskiner: <a href="/vaskemaskine/samsung-ai-wash-vaskemaskine/">Samsung AI Wash</a>-modellen WF90F09C4S på 9 kg bruger 22 kWh pr. 100 vaske, omkring 62 kWh mindre om året end WGE03400SN med fem vaske om ugen.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Varmt vand er det, der koster: et 60-graders bomuldsprogram bruger typisk omkring det dobbelte af eco 40-60, og Hygiene Plus vasker ifølge Bosch hygiejnisk allerede ved 40 °C. Tidspunktet betyder også noget. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og brug udskudt start, så den kører om natten. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine/">det billigste tidspunkt at vaske</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standard — Speed Perfect er hurtigere, men ikke målt på energimærket.</li>
<li>Vælg 8 kg, hvis du vasker for flere end to; pr. kg koster det det samme.</li>
<li>Brug udskudt start uden for kl. 17–21.</li>
<li>Rens fnugfilteret og sæbeskuffen jævnligt, så pumpe og skyl virker som de skal.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch WGE03400SN?",
      answer:
        "Ifølge energimærket 46 kWh pr. 100 vaske på eco 40-60, altså 0,46 kWh pr. vask, energiklasse A og 8 kg. Det svarer til {{oere 0,46}} pr. vask og {{kr 120}} om året med fem vaske om ugen.",
    },
    {
      question: "Hvad koster en Bosch Serie 2 vaskemaskine om året i strøm?",
      answer: "Med fem vaske om ugen omkring 104 kWh for WGE02400SN, 120 kWh for WGE03400SN og 122 kWh for WGE0340LSN, svarende til {{kr 104}}, {{kr 120}} og {{kr 122}} ved månedens elpris.",
    },
    {
      question: "Hvad er forskellen på WGE03400SN og WGE0340LSN?",
      answer:
        "Begge er 8 kg og klasse A. WGE0340LSN fra 2026 bruger 47 kWh pr. 100 vaske mod 46 kWh, men 44 liter vand mod 47 liter og 8 minutter kortere eco-program ifølge EPREL.",
    },
    {
      question: "Hvor meget bruger Bosch Serie 2 i standby?",
      answer: "WGE03400SN bruger 0,15 W slukket og 0,55 W under udskudt start. WGE02400SN og WGE0340LSN bruger 0,5 W slukket og 4 W under udskudt start, ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Alle tre har udskudt start.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch WGE03400SN, EU's energimærke", url: eprel("1675161") },
    { name: "EPREL — Bosch WGE02400SN, EU's energimærke", url: eprel("1675164") },
    { name: "EPREL — Bosch WGE0340LSN, EU's energimærke", url: eprel("2620765") },
    { name: "Bosch — WGE03400SN, produktdatablad (dansk)", url: sheet("WGE03400SN") },
    { name: "Bosch — WGE02400SN, produktdatablad (dansk)", url: sheet("WGE02400SN") },
    { name: "Bosch — WGE0340LSN, produktdatablad (dansk)", url: sheet("WGE0340LSN") },
    { name: "EPREL — Bosch WGG244ZTSN (Serie 6), EU's energimærke", url: eprel("1705908") },
    { name: "EPREL — Samsung WF90F09C4S, EU's energimærke", url: eprel("2193691") },
  ],
  variants: [
    { name: "8 kg (WGE03400SN)", watts: { off: 0.15, standby: 0.5 }, kwhPer100Cycles: 46, energyClass: "A", source: 0 },
    { name: "7 kg (WGE02400SN)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 40, energyClass: "A", source: 1 },
    { name: "8 kg, 2026 (WGE0340LSN)", watts: { off: 0.5, standby: 0.5 }, kwhPer100Cycles: 47, energyClass: "A", source: 2 },
  ],
  publishDate: "2026-12-26",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket og standby er effekten i watt. Kilderne står nederst på siden.",
};

export default boschSerie2Vaskemaskine;
