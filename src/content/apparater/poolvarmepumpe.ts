import type { ApplianceData } from "@/lib/types";

const poolvarmepumpe: ApplianceData = {
  slug: "poolvarmepumpe",
  meta: {
    category: "poolSpa",
    usage: "heating",
    hasEuLabel: false,
    shiftable: true,
    motif: "varmepumpe",
    synonyms: [
      "poolvarmepumpe",
      "varmepumpe til pool",
      "poolvarme",
      "pool varmepumpe strømforbrug",
      "inverter poolvarmepumpe",
      "opvarmning af pool",
      "varmepumpe til swimmingpool",
      "pool heat pump",
    ],
  },
  name: "Poolvarmepumpe",
  article: "en",
  title: "Poolvarmepumpe strømforbrug (2026) → COP, opstart og sæson",
  description:
    "En poolvarmepumpe henter 5-15 kWh varme ud af luften for hver kWh strøm. Se forbruget til opstart, pr. døgn og for en sæson, og hvorfor overdækning tæller.",
  heading: "Strømforbrug for en poolvarmepumpe: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "En poolvarmepumpe til en pool på 30-55 m³ bruger ifølge producenten Vagner Pool 0,23-1,81 kW strøm ved 15 graders luft og giver 4,8-7,7 gange så meget varme. Efter vores skøn bruger den ca. 6 kWh i døgnet for at holde poolen varm, eller ca. 840 kWh på en sæson på 20 uger — svarende til {{kr 840}} ved {{pris_kwh}}. Opvarmningen fra koldt vand kommer oveni, og en overdækning om natten er det, der flytter mest.",
  kwhRange: [250, 2500],
  typicalKwh: 840,
  wattage: 1810,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0, 0.3, 2.2, 2.4, 2.4, 2.4, 2.0, 0.3, 0, 0],
  content: `<h2>Sådan varmer en poolvarmepumpe vandet</h2>
<p>En poolvarmepumpe er en luft-til-vand-varmepumpe bygget til ét formål: at varme bassinvandet. En ventilator suger udeluft gennem en fordamper, et kølemiddel optager varmen, en kompressor hæver temperaturen, og i en varmeveksler af titanium afleveres varmen til poolvandet, som poolpumpen sender igennem. Princippet er det samme som i en <a href="/varmepumpe/">varmepumpe</a> til huset, men poolvandet skal kun op på 26-30 grader, og det gør pumpen meget effektiv.</p>
<p>Effektiviteten måles som COP: hvor mange kWh varme pumpen afleverer for hver kWh strøm. En elektrisk varmer i poolen har en COP på 1. En poolvarmepumpe ligger typisk mellem 4 og 15, afhængigt af lufttemperaturen og af, hvor hårdt pumpen arbejder.</p>

<h2>Producentens tal: effekt og COP</h2>
<p>Producenten Vagner Pool opgiver i manualen til sin serie af inverter-poolvarmepumper med kølemidlet R32 både varmeeffekt, COP og strømforbrug ved forskellige lufttemperaturer. For modellen IPHCR33, der er beregnet til pools på 30-55 m³, ser det sådan ud:</p>
<table>
<thead><tr><th>Vagner Pool IPHCR33</th><th>Varmeeffekt</th><th>COP (fuld til lav hastighed)</th><th>COP ved 50 procent</th></tr></thead>
<tbody>
<tr><td>Luft 26 grader, vand 26 grader</td><td>13,0 kW</td><td>7,3-15,4</td><td>11,0</td></tr>
<tr><td>Luft 15 grader, vand 26 grader</td><td>8,7 kW</td><td>4,8-7,7</td><td>6,8</td></tr>
</tbody>
</table>
<p>Ved 15 graders luft bruger pumpen 0,23-1,81 kW strøm. Kører den på fuld effekt, er det 1,81 kWh i timen, svarende til {{kr 1,81}}; på laveste trin 0,23 kWh, svarende til {{kr 0,23}}. Manualen angiver, at pumpen kan arbejde fra -7 til 43 grader, men at det ideelle område er 15-25 grader. Pumpen har en Smart-indstilling, der regulerer mellem 20 og 100 procent, og en Silence-indstilling, der holder sig mellem 20 og 80 procent.</p>
<p>Tabellen viser det vigtigste ved en inverterpumpe: den er mest effektiv, når den kører langsomt. COP ved halv effekt er højere end ved fuld effekt, så en pumpe, der får lov til at køre mange timer roligt, bruger mindre strøm end en, der skal indhente det tabte på kort tid.</p>

<h2>Opstart: at varme en kold pool op</h2>
<p>Den største enkeltpost i sæsonen er opstarten. Det kræver 1,163 kWh at varme én kubikmeter vand én grad. En pool på 45 m³, der skal fra 12 til 28 grader, skal altså have 45 × 16 × 1,163 kWh, eller ca. 837 kWh varme. Med en gennemsnitlig COP på 5 i et køligt forår bliver det efter vores beregning ca. 167 kWh strøm, svarende til {{kr 167}} — og flere døgn med pumpen på fuld kraft.</p>
<table>
<thead><tr><th>Pool (12 → 28 grader)</th><th>kWh varme</th><th>kWh strøm ved COP 5</th><th>Pris for opstarten</th></tr></thead>
<tbody>
<tr><td>20 m³</td><td>ca. 372</td><td>ca. 74</td><td>{{kr 74}}</td></tr>
<tr><td>45 m³</td><td>ca. 837</td><td>ca. 167</td><td>{{kr 167}}</td></tr>
<tr><td>60 m³</td><td>ca. 1.117</td><td>ca. 223</td><td>{{kr 223}}</td></tr>
</tbody>
</table>
<p>Regnestykket forudsætter, at intet tabes undervejs. I praksis taber poolen varme, mens den varmes op, så starter du i maj, tager det længere og koster mere end i juni.</p>

<h2>Holde poolen varm: døgnforbruget</h2>
<p>Når vandet er varmt, skal pumpen kun erstatte det, poolen taber. Det afhænger af vejret, vinden og især af overdækningen. Producenten Dantherm skriver, at op til 90 procent af varmetabet fra en udendørs pool sker ved fordampning fra overfladen, og at en inverterpumpe kan bruge op til 50 procent mindre strøm, når poolen først har nået temperaturen. Vores skøn for en pool på omkring 45 m³ i en dansk sommer:</p>
<table>
<thead><tr><th>Drift (pool ca. 45 m³, vores skøn)</th><th>kWh i døgnet</th><th>Pris pr. døgn</th><th>Pris pr. uge</th></tr></thead>
<tbody>
<tr><td>Overdækket om natten, læ</td><td>ca. 4</td><td>{{kr 4}}</td><td>{{kr 28}}</td></tr>
<tr><td>Overdækket om natten, almindelig sommer</td><td>ca. 6</td><td>{{kr 6}}</td><td>{{kr 42}}</td></tr>
<tr><td>Uden overdækning</td><td>ca. 9</td><td>{{kr 9}}</td><td>{{kr 63}}</td></tr>
<tr><td>Uden overdækning, kølig og blæsende periode</td><td>ca. 12</td><td>{{kr 12}}</td><td>{{kr 84}}</td></tr>
</tbody>
</table>
<p>Over en sæson på 20 uger giver den typiske række ca. 840 kWh, som er tallet i beregneren. Det er et skøn, ikke en måling: en pool i læ med solfangerfolie kan klare sig med langt mindre, og en pool uden overdækning i en kold sommer kan bruge det dobbelte. Pumpen kommer oven i strømmen til <a href="/poolpumpe/">poolpumpen</a>, der skal sende vandet igennem varmepumpen.</p>

<h2>Hvornår skal poolvarmepumpen køre?</h2>
<p>Poolen er et stort varmelager. 45 m³ vand falder kun langsomt i temperatur, så pumpen behøver ikke køre i bestemte timer for at holde vandet behageligt. Det giver to muligheder. Du kan lægge driften i dagens billige timer, hvor elprisen typisk er lavest — oversigten over dagens timer ovenfor viser, hvornår det er i dag. Eller du kan lægge den i dagens varmeste timer, hvor luften er varmest og COP højest. Om eftermiddagen er luften som regel varmere end om natten, og ifølge Vagners tal giver pumpen 13,0 kW varme ved 26 graders luft mod 8,7 kW ved 15 grader.</p>
<p>Det bedste valg afhænger af dagen: på en solrig dag med billige middagstimer passer de to ting sammen. Kører pumpen om natten, mens poolen er overdækket, er tabet til gengæld mindst. Med en timer eller en styring, der kan følge timeprisen, kan du afprøve, hvad der giver lavest forbrug i din have.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Overdæk poolen</strong> — når fordampningen står for op til 90 procent af tabet, er overdækningen det vigtigste greb.</li>
<li><strong>Vælg en lidt lavere temperatur</strong> — hver grad koster både ved opstarten og i døgnforbruget.</li>
<li><strong>Start sæsonen senere</strong> — en opstart i juni kræver mindre strøm end i maj, fordi luften er varmere.</li>
<li><strong>Brug inverterens lave trin</strong> — ifølge producentens tal er COP højest ved lav hastighed.</li>
<li><strong>Læ for vinden</strong> — en hæk eller et hegn mindsker både fordampning og varmetab.</li>
<li><strong>Sammenlign med spabadet</strong> — et <a href="/spabad/">spabad</a> har langt mindre vand, men holdes meget varmere og bruger derfor mere pr. m³.</li>
</ul>
<p>Har du en <a href="/pool/">pool</a> og overvejer, om varmepumpen kan betale sig, så regn sæsonens strømforbrug ud med beregneren og sammenlign med, hvor mange uger du faktisk bader.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en poolvarmepumpe?", answer: "Vagner Pools IPHCR33 bruger 0,23-1,81 kW ved 15 graders luft. Efter vores skøn bruger en pool på ca. 45 m³ med overdækning om natten ca. 6 kWh i døgnet, svarende til {{kr 6}} ved {{pris_kwh}}." },
    { question: "Hvad koster det at varme en pool op med varmepumpe?", answer: "En pool på 45 m³ fra 12 til 28 grader skal have ca. 837 kWh varme. Ved COP 5 er det ca. 167 kWh strøm, svarende til {{kr 167}}, hvis intet tabes undervejs." },
    { question: "Hvad betyder COP på en poolvarmepumpe?", answer: "Hvor mange kWh varme pumpen giver for hver kWh strøm. Vagner angiver COP 4,8-7,7 ved 15 graders luft og 7,3-15,4 ved 26 grader. En elektrisk poolvarmer har COP 1." },
    { question: "Hvornår skal poolvarmepumpen køre?", answer: "Poolen gemmer varmen, så driften kan flyttes til dagens billige timer eller til de varmeste timer, hvor COP er højest. Med overdækning om natten er tabet mindst." },
    { question: "Hvor meget sparer en overdækning på poolen?", answer: "Meget. Dantherm skriver, at op til 90 procent af varmetabet fra en udendørs pool sker ved fordampning fra overfladen, som overdækningen stopper." },
  ],
  relatedSlugs: ["pool", "poolpumpe", "spabad", "varmepumpe", "vildmarksbad"],
  sources: [
    { name: "Vagner Pool — Manual, R32 Inverter poolvarmepumper IPHCR15-IPHCR100T", url: "https://www.vagnerpool.com/web/data/navody/MANUAL_R32_INVERTER_EN.pdf" },
    { name: "Dantherm — Heat pumps: the ultimate solution for efficient outdoor pool heating", url: "https://www.danthermgroup.com/uk/insights/heat-pumps-the-ultimate-solution-for-efficient-outdoor-pool-heating" },
  ],
  calculatorConfig: {
    title: "Beregn poolvarmepumpens strømforbrug",
    options: [
      { label: "Overdækket om natten, læ (ca. 4 kWh/døgn)", kwhPerUse: 4 },
      { label: "Overdækket om natten, almindelig sommer (ca. 6 kWh/døgn)", kwhPerUse: 6 },
      { label: "Uden overdækning (ca. 9 kWh/døgn)", kwhPerUse: 9 },
      { label: "Uden overdækning, køligt og blæsende (ca. 12 kWh/døgn)", kwhPerUse: 12 },
    ],
    usageLabel: "Uger i sæsonen",
    usageUnit: "uger",
    usageMin: 4,
    usageMax: 30,
    usageDefault: 20,
    usageStep: 1,
    per: "døgn",
    perYear: 7,
  },
  publishDate: "2026-12-08",
  updated: "2026-11-22",
};

export default poolvarmepumpe;
