import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/tumbledryers20232534/${reg}`;

const mieleTq1000: ModelData = {
  slug: "miele-tq-1000",
  parent: "varmepumpe-toerretumbler",
  brand: "Miele",
  name: "Miele TQ 1000 WP tørretumbler",
  released: "2025-06",
  synonyms: [
    "miele tq 1000",
    "miele tq 1000 wp",
    "miele tq 1000 wp nova edition",
    "miele tq1000",
    "miele nova edition tørretumbler",
    "miele tørretumbler 9 kg klasse b",
  ],
  title: "Miele TQ 1000 WP strømforbrug (2026) → kWh pr. tørring",
  description:
    "Miele TQ 1000 WP Nova Edition varmepumpetørretumbler på 9 kg: energimærkets kWh pr. tørring i klasse B, pris om året, programtid og billigste tidspunkt.",
  intro:
    "TQ 1000 WP bruger 15 kWh mindre pr. 100 tørringer end Mieles egen 9 kg-model i T1-serien — og har samme energimærke som Bosch Serie 8, men er en halv time hurtigere.",
  content: `<h2>Hvor meget strøm bruger Miele TQ 1000 WP?</h2>
<p>Miele TQ 1000 WP Nova Edition er en varmepumpetørretumbler på 9 kg, som Miele registrerede i EU's produktdatabase EPREL i juni 2025. Den har energiklasse B på det nye energimærke for tørretumblere og bruger 92 kWh pr. 100 tørringer på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning. Det er 0,92 kWh pr. tørring, svarende til {{kr 0,92}}.</p>
<p>Med tre tørringer om ugen bliver det omkring 144 kWh om året, svarende til {{kr 144}}. Ved fuld fyldning tager eco-programmet 3 timer og 51 minutter og ved halv fyldning 2 timer og 12 minutter ifølge EPREL. Pr. kg tøj er forbruget godt 0,10 kWh. To halve tørringer tager tilsammen 4 timer og 24 minutter mod 3 timer og 51 minutter for én fuld, så det betaler sig at samle tøjet.</p>

<h2>TQ 1000 mod T1 og andre 9 kg-tumblere</h2>
<p>Mieles mere kendte <a href="/varmepumpe-toerretumbler/miele-t1/">T1-serie</a> har energiklasse C. Dens 9 kg-model, TWD640WP, bruger 107 kWh pr. 100 tørringer, altså 15 kWh mere end TQ 1000 WP. Med tre tørringer om ugen er det omkring 23 kWh om året i TQ 1000's favør, svarende til {{kr 23}}. Til gengæld er T1 hurtigere: 3 timer og 7 minutter ved fuld fyldning.</p>
<table>
<thead><tr><th>Model (9 kg)</th><th>Klasse</th><th>kWh pr. 100 tørringer</th><th>Program, fuld fyldning</th></tr></thead>
<tbody>
<tr><td>Miele TQ 1000 WP</td><td>B</td><td>92</td><td>3:51</td></tr>
<tr><td>Miele T1 (TWD640WP)</td><td>C</td><td>107</td><td>3:07</td></tr>
<tr><td>Bosch Serie 8 (WQB246DSSN)</td><td>B</td><td>92</td><td>4:25</td></tr>
<tr><td>AEG 9000 (TR944P96P)</td><td>B</td><td>92</td><td>3:25</td></tr>
<tr><td>AEG 9000 (TR944P97X)</td><td>A</td><td>79</td><td>4:15</td></tr>
</tbody>
</table>
<p>Klasse B med 92 kWh går igen hos <a href="/varmepumpe-toerretumbler/bosch-serie-8-toerretumbler/">Bosch Serie 8</a> og <a href="/varmepumpe-toerretumbler/aeg-9000-toerretumbler/">AEG 9000</a>-modellen TR944P96P. Strømmen er den samme; tiden er ikke. TQ 1000 WP er 34 minutter hurtigere end Bosch Serie 8 og 26 minutter langsommere end AEG's TR944P96P. Vil du helt ned i forbrug, har AEG's TR944P97X klasse A og 79 kWh, omkring 20 kWh mindre om året end TQ 1000 WP med tre tørringer om ugen.</p>

<h2>Kondensering i klasse A</h2>
<p>TQ 1000 WP har kondenseringsklasse A: 94 % af fugten fra tøjet ender i vandbeholderen eller afløbet og ikke i rummet ifølge EPREL. Det betyder mindre fugt i bryggerset eller badeværelset og mindre behov for udluftning. Støjen er 60 dB i støjklasse A, så den kan stå tæt på opholdsrum.</p>
<p>Tumbleren bruger R290 (propan) som kølemiddel i varmepumpen. Det er det almindelige kølemiddel i nye varmepumpetumblere og har en lav klimapåvirkning sammenlignet med de ældre kølemidler.</p>

<h2>Standby og ventetid</h2>
<p>Slukket bruger TQ 1000 WP 0,3 W, i standby 0,5 W og i netværksforbundet standby 2 W ifølge EPREL. Står den på netværket hele året, er det omkring 17 kWh — ikke langt fra et ottendedel af tumblerens årlige forbrug til selve tørringen. Har du ikke brug for app-styringen, er det en gratis besparelse at slukke på knappen efter brug. Under udskudt start bruger den 4 W, omkring 0,03 kWh på otte timer. Læs mere om <a href="/standby/">standby-forbrug i hjemmet</a>.</p>

<h2>Hvornår er det billigst at tørre tøj?</h2>
<p>Tøjet kan vente i tromlen, og tumbleren er derfor let at flytte til de billige timer. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21 — lige når mange kommer hjem og sætter en maskine i gang. Fyld tumbleren om aftenen, og lad udskudt start køre programmet om natten. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/varmepumpe-toerretumbler/">hvornår tørretumbleren er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Centrifugér ved højeste omdrejningstal, tøjet tåler, før det kommer i tumbleren.</li>
<li>Fyld de 9 kg ud — én fuld tørring er billigere end to halve.</li>
<li>Rens fnugfilteret efter hver tørring; et tilstoppet filter forlænger tiden.</li>
<li>Sluk tumbleren helt efter brug, hvis du ikke bruger app-styringen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Miele TQ 1000 WP?",
      answer: "Ifølge energimærket 0,92 kWh pr. tørring på eco-programmet (92 kWh pr. 100 tørringer, energiklasse B). Det svarer til {{kr 0,92}} pr. tørring.",
    },
    {
      question: "Hvad koster Miele TQ 1000 WP om året i strøm?",
      answer: "Med tre tørringer om ugen omkring 144 kWh om året, svarende til {{kr 144}} ved månedens elpris.",
    },
    {
      question: "Er Miele TQ 1000 en vaskemaskine eller en tørretumbler?",
      answer: "En tørretumbler. TQ 1000 WP Nova Edition er en varmepumpetørretumbler på 9 kg og er registreret som tørretumbler i EU's database EPREL.",
    },
    {
      question: "Bruger Miele TQ 1000 mindre end Miele T1?",
      answer:
        "Ja, i forhold til T1-modellen på 9 kg. TQ 1000 WP bruger 92 kWh pr. 100 tørringer mod 107 kWh for TWD640WP, omkring 23 kWh mindre om året med tre tørringer om ugen.",
    },
    {
      question: "Hvor lang tid tager en tørring i Miele TQ 1000 WP?",
      answer: "Eco-programmet tager 3 timer og 51 minutter ved fuld fyldning og 2 timer og 12 minutter ved halv fyldning ifølge EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — Miele TQ 1000 WP Nova Edition, EU's energimærke", url: eprel("2189211") },
    { name: "EPREL — Miele TWD640WP (T1, 9 kg), EU's energimærke", url: eprel("2702960") },
    { name: "EPREL — Bosch WQB246DSSN (Serie 8), EU's energimærke", url: eprel("2274347") },
    { name: "EPREL — AEG TR944P96P (9000), EU's energimærke", url: eprel("2292132") },
    { name: "EPREL — AEG TR944P97X (9000), EU's energimærke", url: eprel("2377213") },
  ],
  variants: [{ name: "9 kg (TQ 1000 WP Nova Edition)", watts: { off: 0.3 }, kwhPer100Cycles: 92, energyClass: "B", source: 0 }],
  publishDate: "2026-12-15",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Det nye energimærke for tørretumblere (fra 2025) måler forbruget på eco-programmet til skabstørt bomuld, vægtet mellem fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default mieleTq1000;
