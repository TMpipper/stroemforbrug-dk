import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washingmachines2019/${reg}`;

const mieleW2: ModelData = {
  slug: "miele-w2",
  parent: "vaskemaskine",
  brand: "Miele",
  name: "Miele W2 vaskemaskine",
  released: "2025-03",
  synonyms: [
    "miele w2",
    "miele w2 vaskemaskine",
    "miele wq 1000",
    "miele wq 1000 wps nova edition",
    "miele wq1000",
    "miele wq 1200",
    "miele nova edition vaskemaskine",
    "miele twindos vaskemaskine",
  ],
  title: "Miele W2 vaskemaskine strømforbrug (2026) → kWh pr. vask",
  description:
    "Miele W2 vaskemaskine WQ 1000 WPS Nova Edition på 9 kg: energimærkets kWh pr. vask på eco 40-60, pris om året, søstermodellen WQ 1200 og W2 mod Miele W1.",
  intro:
    "WQ 1000 WPS Nova Edition bruger 0,49 kWh pr. vask, mens søstermodellen WQ 1200 klarer sig med 0,40 kWh — til gengæld centrifugerer den svagere.",
  content: `<h2>Hvor meget strøm bruger Miele W2?</h2>
<p>W2 er Mieles nyere serie af frontbetjente vaskemaskiner, og WQ 1000 WPS Nova Edition er den udgave, Miele har et dansk produktdatablad for. Det er en 9 kg-maskine med 1.600 omdrejninger, automatisk dosering med TwinDos og farvedisplayet M Touch Pro. I EU's produktdatabase EPREL har den energiklasse A og bruger 49 kWh pr. 100 vaske på eco 40-60-programmet, altså 0,49 kWh pr. vask.</p>
<p>Søstermodellen WQ 1200 WPS Nova Edition, som står på Mieles tyske hjemmeside, har også 9 kg og klasse A, men bruger 40 kWh pr. 100 vaske. Med fem vaske om ugen bliver det omkring 127 kWh om året for WQ 1000 og 104 kWh for WQ 1200, svarende til {{kr 127}} og {{kr 104}} ved månedens elpris.</p>
<table>
<thead><tr><th>Model</th><th>Kapacitet</th><th>kWh pr. 100 vaske</th><th>Eco 40-60, fuld</th><th>Centrifugering</th><th>Restfugt</th><th>Dybde</th></tr></thead>
<tbody>
<tr><td>WQ 1000 WPS Nova Edition</td><td>9 kg</td><td>49</td><td>3:49</td><td>A, 1.600 o/min</td><td>44,9 %</td><td>62 cm</td></tr>
<tr><td>WQ 1200 WPS Nova Edition</td><td>9 kg</td><td>40</td><td>3:49</td><td>B, 1.400 o/min</td><td>53,9 %</td><td>70 cm</td></tr>
</tbody>
</table>

<h2>Mindre strøm i vasken, mere i tørretumbleren</h2>
<p>De to W2-modeller viser en afvejning, energimærket ikke selv regner med. WQ 1200 bruger 9 kWh mindre pr. 100 vaske, omkring 23 kWh om året med fem vaske om ugen, svarende til {{kr 23}}. Men WQ 1200 centrifugerer med 1.400 omdrejninger i klasse B og efterlader 53,9 % restfugt efter eco 40-60, mens WQ 1000 når klasse A med 44,9 %. Vandet, der bliver i tøjet, skal en tørretumbler fjerne bagefter, og en tørring bruger mere strøm end en vask.</p>
<p>Tørrer du på tørrestativ eller snor, er WQ 1200 den billigste af de to i drift. Tørrer du det meste i en tumbler som <a href="/varmepumpe-toerretumbler/miele-t1/">Miele T1</a>, kan de ekstra procentpoint vand i tøjet æde en del af besparelsen. Bemærk også, at WQ 1200 er 70 cm dyb mod 62 cm for WQ 1000 ifølge EPREL — det kan betyde noget i et smalt bryggers.</p>

<h2>W2 mod W1</h2>
<p>W2 er ikke automatisk mere sparsom end den ældre W1-serie. På <a href="/vaskemaskine/miele-w1/">Miele W1</a>-siden bruger WWD380 på 9 kg 40 kWh pr. 100 vaske, samme tal som WQ 1200 og 9 kWh mindre end WQ 1000. WWE380 på 8 kg bruger 29 kWh. Ser du kun på strømmen, er en W1 altså mindst lige så god; W2's fordele ligger ifølge Miele i tromlen (InfinityCare), betjeningen og den automatiske dosering. Miele skriver i det danske datablad, at W1- og W2-serierne er testet til 5.000 vaske, svarende til 20 års brug med fem vaske om ugen.</p>
<p>Uden for Miele er der maskiner med markant lavere energimærke. <a href="/vaskemaskine/samsung-ai-wash-vaskemaskine/">Samsung AI Wash</a>-modellen WF90F09C4S på 9 kg bruger 22 kWh pr. 100 vaske, omkring 70 kWh mindre om året end WQ 1000.</p>

<h2>Automatisk dosering og standby</h2>
<p>TwinDos doserer vaskemidlet selv. Miele oplyser i databladet en besparelse på op til 40 % vaskemiddel mod manuel dosering, baseret på egne tests. Det sparer ikke strøm direkte, men for meget vaskemiddel kan give ekstra skyl. Begge modeller bruger 0,5 W slukket, 2 W i netværksforbundet standby, når de er koblet på Miele@home, og 4 W under udskudt start. På WQ 1000 kan startforvalget ifølge Miele sættes op til 24 timer frem. Står maskinen i netværksstandby hele døgnet, er de 2 W omkring 17 kWh om året — sluk den på knappen, når du ikke bruger appen.</p>

<h2>Hvornår er det billigst at vaske?</h2>
<p>Varmt vand er det, der koster: et 60-graders bomuldsprogram bruger typisk omkring det dobbelte af eco 40-60. Tidspunktet betyder også noget. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Brug startforvalget, så maskinen kører om natten. Otte timers ventetid på 4 W er omkring 0,03 kWh. Se <a href="/elpriser/">dagens timepriser</a>, og læs om <a href="/vaskemaskine/">det billigste tidspunkt at vaske</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Brug eco 40-60 som standard; SmartMatic-programmet tilpasser sig ifølge Miele selv efter tøjet.</li>
<li>Centrifugér ved 1.600 omdrejninger, hvis tøjet skal i tørretumbler.</li>
<li>Fyld tromlen — to halve vaske koster mere end én fuld.</li>
<li>Brug startforvalget til at flytte vasken uden for kl. 17–21.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Miele WQ 1000 WPS Nova Edition?",
      answer:
        "Ifølge energimærket 0,49 kWh pr. vask på eco 40-60 (49 kWh pr. 100 vaske), energiklasse A og 9 kg. Det svarer til {{oere 0,49}} pr. vask og {{kr 127}} om året med fem vaske om ugen.",
    },
    {
      question: "Bruger Miele WQ 1200 mindre strøm end WQ 1000?",
      answer:
        "Ja, i vasken: 40 mod 49 kWh pr. 100 vaske ifølge EPREL. Men WQ 1200 centrifugerer i klasse B med 53,9 % restfugt mod klasse A og 44,9 % for WQ 1000, så en tørretumbler bruger mere bagefter.",
    },
    {
      question: "Er Miele W2 mere sparsom end W1?",
      answer: "Ikke nødvendigvis. W1-modellen WWD380 på 9 kg bruger 40 kWh pr. 100 vaske mod 49 kWh for W2-modellen WQ 1000, ifølge energimærkerne.",
    },
    {
      question: "Hvor meget bruger Miele W2 i standby?",
      answer: "0,5 W slukket, 2 W i netværksforbundet standby med wifi og 4 W under udskudt start ifølge EPREL.",
    },
    {
      question: "Hvornår er det billigst at vaske?",
      answer: "Typisk om natten og uden for kl. 17–21, hvor nettariffen er højest. På WQ 1000 kan startforvalget ifølge Miele sættes op til 24 timer frem.",
    },
  ],
  sources: [
    { name: "EPREL — Miele WQ 1000 WPS Nova Edition, EU's energimærke", url: eprel("2035600") },
    { name: "EPREL — Miele WQ 1200 WPS Nova Edition, EU's energimærke", url: eprel("2035603") },
    { name: "Miele — WQ 1000 WPS Nova Edition, produktdatablad (dansk)", url: "https://media.miele.com/downloads/k-/da/FS_12697710_DKD_DK-da.pdf" },
    { name: "Miele — WQ 1200 WPS Nova Edition (tysk produktside)", url: "https://www.miele.de/product/12698680" },
    { name: "EPREL — Miele WWD380 (W1), EU's energimærke", url: eprel("2053652") },
    { name: "EPREL — Samsung WF90F09C4S, EU's energimærke", url: eprel("2193691") },
  ],
  variants: [
    { name: "9 kg, 1.600 o/min (WQ 1000 WPS Nova Edition)", watts: { off: 0.5 }, kwhPer100Cycles: 49, energyClass: "A", source: 0 },
    { name: "9 kg, 1.400 o/min (WQ 1200 WPS Nova Edition)", watts: { off: 0.5 }, kwhPer100Cycles: 40, energyClass: "A", source: 1 },
  ],
  publishDate: "2026-12-25",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget på eco 40-60-programmet, vægtet mellem fuld, halv og kvart fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleW2;
