import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;
const samsung = (path: string) => `https://www.samsung.com/dk/washers-and-dryers/washing-machines/${path}/`;

const samsungAiWashVaskemaskine: ModelData = {
  slug: "samsung-ai-wash-vaskemaskine",
  parent: "vaskemaskine",
  brand: "Samsung",
  name: "Samsung AI Wash vaskemaskine",
  released: "2025-02",
  synonyms: [
    "samsung vaskemaskine",
    "samsung bespoke ai vaskemaskine",
    "samsung ai wash",
    "samsung bespoke ai home",
    "samsung wf90f09c4su3",
    "samsung wf90f11c4su3",
    "samsung ww11db8b95gbu3",
    "samsung ww95dg6u85lku3",
    "samsung 6400 series vaskemaskine",
    "samsung 8400 series vaskemaskine",
  ],
  title: "Samsung AI Wash vaskemaskine strømforbrug (2026) → pr. vask",
  description:
    "Samsung AI Wash vaskemaskine på 9 og 11 kg: energimærkets kWh pr. vask for 6400 Series, Bespoke 8400 Series og Bespoke AI Home, pris om året og billigste tid.",
  intro:
    "Samsungs fire AI Wash-maskiner har alle energiklasse A, men forbruget spænder fra 0,22 til 0,44 kWh pr. vask — 9 kg-modellen i Bespoke AI Home bruger halvt så meget som 6400 Series på samme kapacitet.",
  content: `<h2>Hvor meget strøm bruger en Samsung AI Wash vaskemaskine?</h2>
<p>Samsung sælger sine nyere frontbetjente vaskemaskiner i Danmark under navnet AI Wash, og de fire på siden står alle på Samsungs danske hjemmeside. I EU's produktdatabase EPREL har de hvert sit energimærke. Vaskemaskine 6400 Series WW95DG6U85LK på 9 kg bruger 44 kWh pr. 100 vaske på eco 40-60-programmet. Bespoke 8400 Series WW11DB8B95GB på 11 kg bruger 32 kWh. De to nyeste, Bespoke AI Home WF90F09C4S på 9 kg og WF90F11C4S på 11 kg, bruger 22 og 32 kWh.</p>
<p>Med fem vaske om ugen bliver det omkring 114 kWh om året for 6400 Series, 83 kWh for de to 11 kg-modeller og 57 kWh for WF90F09C4S, svarende til {{kr 114}}, {{kr 83}} og {{kr 57}} ved månedens elpris. Mellem den dyreste og den billigste af de fire i drift er der 57 kWh om året.</p>
<table>
<thead><tr><th>Model</th><th>Serie</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Vand pr. vask</th></tr></thead>
<tbody>
<tr><td>WW95DG6U85LK</td><td>6400 Series</td><td>9 kg</td><td>44</td><td>3:48</td><td>50 l</td></tr>
<tr><td>WW11DB8B95GB</td><td>Bespoke 8400 Series</td><td>11 kg</td><td>32</td><td>4:00</td><td>54 l</td></tr>
<tr><td>WF90F09C4S</td><td>Bespoke AI Home</td><td>9 kg</td><td>22</td><td>3:48</td><td>50 l</td></tr>
<tr><td>WF90F11C4S</td><td>Bespoke AI Home</td><td>11 kg</td><td>32</td><td>4:00</td><td>89 l</td></tr>
</tbody>
</table>

<h2>Samme klasse, meget forskelligt forbrug</h2>
<p>Energiklasse A dækker et bredt spænd, og det ses tydeligt her. Alle fire har A på mærket, men WF90F09C4S bruger halvt så meget strøm pr. vask som WW95DG6U85LK, selv om begge tager 9 kg og har samme programtid på 3 timer og 48 minutter. Kig derfor på tallet i kWh pr. 100 vaske, ikke kun på bogstavet. Tallet står midt på EU-mærket under skalaen.</p>
<p>22 kWh pr. 100 vaske er det laveste tal blandt vaskemaskinerne på vores sider. Til sammenligning bruger <a href="/vaskemaskine/miele-w1/">Miele W1</a>-modellen WWE380 på 8 kg 29 kWh, og LG's 11 kg-modeller på <a href="/vaskemaskine/lg-vaskemaskine/">LG vaskemaskine</a>-siden bruger 47 kWh. Bespoke-modellerne på 11 kg bruger 32 kWh og dermed 15 kWh mindre pr. 100 vaske end LG's 11 kg-maskiner — omkring 39 kWh om året med fem vaske om ugen, svarende til {{kr 39}}.</p>

<h2>Vand, centrifugering og standby</h2>
<p>Alle fire centrifugerer med op til 1.400 omdrejninger og ligger i centrifugeringsklasse B med 53,9 % restfugt efter eco 40-60. Det er mere vand i tøjet end i en klasse A-maskine, så skal tøjet i tørretumbler, bruger tumbleren lidt længere tid. Samsungs varmepumpetumbler <a href="/varmepumpe-toerretumbler/samsung-dv90dg/">DV90DG</a> passer i størrelse til 9 kg-modellerne.</p>
<p>WF90F11C4S skiller sig ud på vandet: Samsung har oplyst 89 liter pr. eco 40-60-vask til EPREL mod 54 liter for WW11DB8B95GB på samme kapacitet. Vand er ikke strøm, men koster også, hvis du betaler efter måler. Alle fire er wifi-forbundne og bruger 2 W i netværksforbundet standby ifølge EPREL, 0,5 W slukket og 4 W under udskudt start. Står maskinen i netværksstandby hele året, er de 2 W omkring 17 kWh — næsten en tredjedel af årsforbruget for WF90F09C4S. Slukker du maskinen helt efter vasken, undgår du det.</p>

<h2>Varmt vand er det, der koster</h2>
<p>Næsten al strømmen i en vask går til at varme vandet. Eco 40-60 vasker snavset bomuld ved lav temperatur i lang tid, og derfor er programmet så langt. Et 60-graders bomuldsprogram bruger typisk omkring det dobbelte, et 30-graders mindre. Har du en sparsom maskine som WF90F09C4S, betyder valget af program relativt mere: en enkelt varm vask kan koste det samme som flere eco-vaske. Se <a href="/vaskemaskine/">hvad en vask koster ved forskellige temperaturer</a>.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Vaskemaskinen er let at flytte til billige timer, og alle fire har udskudt start. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Fyld maskinen om aftenen, og lad den køre om natten eller tidligt om morgenen. Otte timers ventetid på 4 W er omkring 0,03 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine/">det billigste tidspunkt at vaske</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Sammenlign kWh pr. 100 vaske — klasse A alene siger ikke nok.</li>
<li>Brug eco 40-60 som standard; det er det, mærket er målt på.</li>
<li>Fyld tromlen, og vask varmt kun til håndklæder og sengetøj.</li>
<li>Sluk maskinen helt, når den er færdig, så netværksstandbyen ikke kører.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en Samsung AI Wash vaskemaskine?",
      answer:
        "Ifølge energimærket fra 0,22 kWh pr. vask for WF90F09C4S til 0,44 kWh for WW95DG6U85LK på eco 40-60. De to 11 kg-modeller bruger 0,32 kWh. Det svarer til {{oere 0,22-0,44}} pr. vask.",
    },
    {
      question: "Hvad koster Samsung WF90F09C4S om året i strøm?",
      answer: "Med fem vaske om ugen omkring 57 kWh om året, svarende til {{kr 57}} ved månedens elpris. Den har 22 kWh pr. 100 vaske ifølge EPREL.",
    },
    {
      question: "Hvilken energiklasse har Samsung WW11DB8B95GB?",
      answer: "Energiklasse A med 32 kWh pr. 100 vaske, 11 kg og 54 liter vand pr. eco 40-60-vask ifølge EPREL.",
    },
    {
      question: "Bruger Samsung Bespoke mindre strøm end 6400 Series?",
      answer:
        "Ja, ifølge energimærkerne. Bespoke AI Home WF90F09C4S bruger 22 kWh pr. 100 vaske og 6400 Series WW95DG6U85LK 44 kWh, begge 9 kg. Med fem vaske om ugen er forskellen omkring 57 kWh om året.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. Brug udskudt start; ventetiden bruger 4 W.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung WW95DG6U85LK, EU's energimærke", url: eprel("1947648") },
    { name: "EPREL — Samsung WW11DB8B95GB, EU's energimærke", url: eprel("1936846") },
    { name: "EPREL — Samsung WF90F09C4S, EU's energimærke", url: eprel("2193691") },
    { name: "EPREL — Samsung WF90F11C4S, EU's energimærke", url: eprel("2193692") },
    {
      name: "Samsung — Vaskemaskine 6400 Series WW95DG6U85LKU3 (dansk produktside)",
      url: samsung("ww6400d-front-loading-smartthings-ai-energy-mode-a-10-percent-extra-energy-efficiency-9kg-white-ww95dg6u85lku3"),
    },
    {
      name: "Samsung — Bespoke Vaskemaskine 8400 Series WW11DB8B95GBU3 (dansk produktside)",
      url: samsung("ww8400d-front-loading-smartthings-ai-energy-made-a-40-percent-extra-energy-efficiency-ai-ecobubble-12kg-black-ww11db8b95gbu3"),
    },
    {
      name: "Samsung — Bespoke Vaskemaskine AI Home 9 kg WF90F09C4SU3 (dansk produktside)",
      url: samsung("wf90f24-front-load-washer-a-55-percent-energy-efficiency-ai-home-ai-wash-9kg-silver-wf90f09c4su3"),
    },
    {
      name: "Samsung — Bespoke AI Vaskemaskine WF90F11C4SU3 (dansk produktside)",
      url: samsung("wf90f24-front-load-washer-a-55-percent-energy-efficiency-ai-home-ai-wash-11kg-silver-wf90f11c4su3"),
    },
    { name: "EPREL — Miele WWE380 (W1), EU's energimærke", url: eprel("2060681") },
    { name: "EPREL — LG FV94ENS2WN, EU's energimærke", url: eprel("1577446") },
  ],
  variants: [
    { name: "9 kg, 6400 Series (WW95DG6U85LK)", watts: { off: 0.5 }, kwhPer100Cycles: 44, energyClass: "A", source: 0 },
    { name: "11 kg, Bespoke 8400 Series (WW11DB8B95GB)", watts: { off: 0.5 }, kwhPer100Cycles: 32, energyClass: "A", source: 1 },
    { name: "9 kg, Bespoke AI Home (WF90F09C4S)", watts: { off: 0.5 }, kwhPer100Cycles: 22, energyClass: "A", source: 2 },
    { name: "11 kg, Bespoke AI Home (WF90F11C4S)", watts: { off: 0.5 }, kwhPer100Cycles: 32, energyClass: "A", source: 3 },
  ],
  publishDate: "2026-12-24",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default samsungAiWashVaskemaskine;
