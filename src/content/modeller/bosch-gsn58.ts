import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const boschGsn58: ModelData = {
  slug: "bosch-gsn58",
  parent: "fryser",
  brand: "Bosch",
  name: "Bosch GSN58 fryseskab",
  released: "2020-03",
  synonyms: [
    "bosch gsn58awdp",
    "bosch gsn58awcp",
    "bosch gsn58awev",
    "bosch gsn58 strømforbrug",
    "bosch fryseskab strømforbrug",
    "bosch nofrost fryser 191 cm",
    "siemens gs58nawcp",
    "bosch serie 6 fryseskab",
  ],
  title: "Bosch GSN58 fryseskab strømforbrug (2026) → kWh og pris",
  description:
    "Bosch GSN58 fryseskab på 366 liter: energimærkets kWh om året i klasse E, D og C, pris om året, og hvorfor den nyeste udgave bruger en tredjedel mindre.",
  intro:
    "Kabinettet er det samme i alle udgaver — 191 cm højt, 70 cm bredt og 366 liter — men energimærket spænder fra 178 til 278 kWh om året.",
  content: `<h2>Hvor meget strøm bruger Bosch GSN58?</h2>
<p>Bosch GSN58 er et stort fritstående fryseskab på 366 liter med NoFrost: fryseren afrimer automatisk ifølge EU's produktdatabase EPREL, så der ikke bygger sig is op på væggene. Det har været på markedet siden 2019 i flere udgaver, og de har alle samme mål — 191 cm høje, 70 cm brede og 78 cm dybe — men ikke samme forbrug. I EPREL står GSN58AWEV med 278 kWh om året i klasse E, GSN58AWDP og GSN58AWDPH med 222 kWh i klasse D, og den nyeste, GSN58AWCP fra januar 2024, med 178 kWh i klasse C.</p>
<p>Med 222 kWh om året bruger D-udgaverne omkring 0,61 kWh i døgnet, svarende til {{kr 222}} om året ved månedens elpris. C-udgaven sparer 44 kWh om året i forhold til D-udgaven og 100 kWh i forhold til E-udgaven, svarende til {{kr 44}} og {{kr 100}} om året.</p>

<h2>Tre energiklasser i samme kabinet</h2>
<table>
<thead><tr><th>Model</th><th>På markedet</th><th>Klasse</th><th>kWh om året</th><th>Indeks</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>GSN58AWEV</td><td>2020</td><td>E</td><td>278</td><td>100</td><td>39 dB</td></tr>
<tr><td>GSN58AWDP</td><td>2020</td><td>D</td><td>222</td><td>80</td><td>38 dB</td></tr>
<tr><td>GSN58AWDPH</td><td>2020</td><td>D</td><td>222</td><td>80</td><td>38 dB</td></tr>
<tr><td>GSN58AWCP</td><td>2024</td><td>C</td><td>178</td><td>64</td><td>38 dB</td></tr>
</tbody>
</table>
<p>Siemens sælger det samme skab som GS58NA-serien med de samme tal: GS58NAWDV i klasse D med 222 kWh og GS58NAWCP i klasse C med 178 kWh. Står du med to næsten ens modelnumre, er det altså værd at slå op, hvilken klasse netop den udgave har.</p>
<p>Over ti år er forskellen mellem C- og E-udgaven 1.000 kWh. Det er mere end ti års forbrug for et lille køleskab som Gram KS 771054 på 158 liter, der bruger 93 kWh om året.</p>

<h2>Hvad påvirker en frysers forbrug?</h2>
<p>Energimærket er målt med lukket dør og −18 °C i fryseren. En fryser, der står i et køligt rum, skal fjerne mindre varme og bruger mindre; en fryser i et varmt bryggers med vaskemaskine og tørretumbler bruger mere. GSN58 er bygget til klimaklasserne SN til T, altså rum fra 10 til 43 °C, så den kan stå i et uopvarmet bryggers eller en kælder, så længe temperaturen ikke falder under 10 °C.</p>
<p>Fyldningen betyder mindre, end mange tror: frossen mad holder på kulden, når døren åbnes, så en fyldt fryser taber mindre kulde pr. åbning end en tom. Men det er ikke en grund til at købe et stort skab, du ikke fylder. Stiller du termostaten koldere end −18 °C, bruger skabet mere, uden at maden holder sig bedre. Hurtigindfrysningen, som skabet har, skal kun bruges, når du lægger meget ind på én gang.</p>

<h2>Fryseskab eller kombiskab?</h2>
<p>Mange husstande har et køleskab uden fryser og et fryseskab ved siden af. Et kombineret køle-/fryseskab som <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> bruger 149 kWh om året for 214 liter køl og 94 liter frost. GSN58 alene bruger 178–222 kWh i de nyere udgaver, men har næsten fire gange så meget frost. Har I brug for den plads — fx til hjemmelavet mad, bær fra haven eller storindkøb — er et stort fryseskab det rigtige. Står det halvtomt, er et kombiskab billigere at have kørende.</p>
<p>Overvejer du en <a href="/kummefryser/">kummefryser</a> i stedet, så er den ikke automatisk mere sparsom: Gram FB 3297 på 297 liter bruger 231 kWh om året ifølge EPREL — mere end GSN58AWCP, selvom den er mindre. Fordelen ved en kummefryser er, at kulden ikke falder ud, når låget åbnes; ulempen er, at den skal afrimes manuelt.</p>

<h2>Hvornår er det billigst?</h2>
<p>En fryser kører hele døgnet, og du kan ikke flytte forbruget til billige timer. Prisen om året er mærkets kWh gange din gennemsnitlige elpris. Det, du kan gøre, er at holde −18 °C, lukke døren hurtigt og give skabet luft omkring sig. Se mere om <a href="/fryser/">fryseres strømforbrug generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg den nyeste C-udgave, hvis du har valget: den bruger 44 kWh mindre om året end D-udgaven.</li>
<li>Hold −18 °C — koldere koster uden at gavne.</li>
<li>Stil skabet væk fra varme apparater og direkte sol.</li>
<li>Slå hurtigindfrysning fra, når maden er frossen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Bosch GSN58AWDP om året?",
      answer: "222 kWh om året ifølge energimærket i EU's database EPREL, energiklasse D. Det svarer til {{kr 222}} om året eller omkring 0,61 kWh i døgnet.",
    },
    {
      question: "Hvilken Bosch GSN58 bruger mindst strøm?",
      answer: "GSN58AWCP fra 2024 i klasse C: 178 kWh om året. Det er 44 kWh mindre end D-udgaverne og 100 kWh mindre end GSN58AWEV i klasse E.",
    },
    {
      question: "Er Bosch GSN58 NoFrost?",
      answer: "Ja. EPREL oplyser automatisk afrimning for fryseren, så du skal ikke selv fjerne is.",
    },
    {
      question: "Kan Bosch GSN58 stå i en kold kælder eller garage?",
      answer: "Ja, hvis temperaturen holder sig mellem 10 og 43 °C. Bosch har oplyst klimaklasserne SN til T til EPREL.",
    },
    {
      question: "Hvad koster Bosch GSN58AWCP om året?",
      answer: "Med 178 kWh om året svarer det til {{kr 178}} ved månedens elpris.",
    },
  ],
  sources: [
    { name: "EPREL — Bosch GSN58AWEV, EU's energimærke", url: eprel("260281") },
    { name: "EPREL — Bosch GSN58AWDP, EU's energimærke", url: eprel("260253") },
    { name: "EPREL — Bosch GSN58AWDPH, EU's energimærke", url: eprel("260280") },
    { name: "EPREL — Bosch GSN58AWCP, EU's energimærke", url: eprel("1808314") },
    { name: "EPREL — Siemens GS58NAWDV, EU's energimærke", url: eprel("260246") },
    { name: "EPREL — Siemens GS58NAWCP, EU's energimærke", url: eprel("2269419") },
  ],
  variants: [
    { name: "366 l (GSN58AWEV)", watts: {}, annualKwh: 278, energyClass: "E", source: 0 },
    { name: "366 l (GSN58AWDP)", watts: {}, annualKwh: 222, energyClass: "D", source: 1 },
    { name: "366 l (GSN58AWDPH)", watts: {}, annualKwh: 222, energyClass: "D", source: 2 },
    { name: "366 l (GSN58AWCP)", watts: {}, annualKwh: 178, energyClass: "C", source: 3 },
  ],
  publishDate: "2026-12-05",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Bosch har oplyst til EU-databasen EPREL for hver udgave: målt med lukket dør og −18 °C. Kilderne står nederst på siden.",
};

export default boschGsn58;
