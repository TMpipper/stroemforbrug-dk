import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;

const scandomesticCf: ModelData = {
  slug: "scandomestic-cf",
  parent: "kummefryser",
  brand: "Scandomestic",
  name: "Scandomestic CF kummefryser",
  released: "2023-08",
  synonyms: [
    "scandomestic kummefryser",
    "scandomestic cf300wd",
    "scandomestic cf100wd",
    "scandomestic cf200wd",
    "scandomestic cf400we",
    "scandomestic cf51we",
    "scandomestic fryseboks",
    "kummefryser 300 liter",
  ],
  title: "Scandomestic kummefryser strømforbrug (2026) → kWh og pris",
  description:
    "Scandomestic CF kummefryser fra 51 til 400 liter: energimærkets kWh om året for CF51WE, CF100WD, CF200WD, CF300WD og CF400WE, pris om året og klasse D mod E.",
  intro:
    "CF-serien går fra 51 til 400 liter, og D-modellerne på 100, 200 og 300 liter bruger mindre end Gram FB-seriens kummefrysere i klasse E i samme størrelser.",
  content: `<h2>Hvor meget strøm bruger en Scandomestic kummefryser?</h2>
<p>Scandomestic er et dansk mærke, og CF-serien er kummefrysere i fem størrelser, som hver har sit eget energimærke i EU's produktdatabase EPREL. CF300WD på 299 liter har energiklasse D og bruger 185 kWh om året. CF100WD på 99 liter bruger 135 kWh og CF200WD på 199 liter 160 kWh, begge i klasse D. Den store CF400WE på 400 liter har klasse E og bruger 263 kWh, og den lille CF51WE på 51 liter bruger 153 kWh i klasse E.</p>
<p>185 kWh om året er omkring 0,51 kWh i døgnet, svarende til {{kr 185}} om året ved månedens elpris. Det sidste bogstav i modelnummeret er klassen: WD er klasse D, WE klasse E.</p>
<table>
<thead><tr><th>Model</th><th>Rumfang</th><th>Bredde</th><th>Klasse</th><th>kWh om året</th><th>kWh pr. 100 liter</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>CF51WE</td><td>51 l</td><td>35,5 cm</td><td>E</td><td>153</td><td>300</td><td>42 dB</td></tr>
<tr><td>CF100WD</td><td>99 l</td><td>54,5 cm</td><td>D</td><td>135</td><td>136</td><td>39 dB</td></tr>
<tr><td>CF200WD</td><td>199 l</td><td>82,3 cm</td><td>D</td><td>160</td><td>80</td><td>41 dB</td></tr>
<tr><td>CF300WD</td><td>299 l</td><td>112,5 cm</td><td>D</td><td>185</td><td>62</td><td>39 dB</td></tr>
<tr><td>CF400WE</td><td>400 l</td><td>136,5 cm</td><td>E</td><td>263</td><td>66</td><td>41 dB</td></tr>
</tbody>
</table>

<h2>Større fryser, lavere pris pr. liter</h2>
<p>En kummefryser bruger ikke dobbelt så meget, fordi den er dobbelt så stor. CF300WD har tre gange så meget plads som CF100WD, men bruger kun 50 kWh mere om året. Pr. 100 liter er det omkring 62 kWh mod 136 kWh. Den lille CF51WE er den dyreste i drift pr. liter af de fem: 153 kWh om året for 51 liter, mere end CF100WD med dobbelt så meget plads. Har du brug for en lille fryser, er CF100WD altså det bedre valg, hvis pladsen er der.</p>
<p>CF400WE bryder mønstret, fordi den er i klasse E. Den bruger 78 kWh mere om året end CF300WD for 101 liter mere, og pr. liter ligger den lidt over. Scandomestic har også en CF200WE fra 2025 i klasse E med 200 kWh om året — 40 kWh mere end CF200WD i samme størrelse.</p>

<h2>CF300WD mod Gram og et fryseskab</h2>
<p>Den oplagte sammenligning er <a href="/kummefryser/gram-fb-3297/">Gram FB 3297</a>, der næsten har samme størrelse: 297 liter i klasse E med 231 kWh om året. CF300WD bruger 46 kWh mindre, svarende til {{kr 46}} om året. Gram FB 3097 på 97 liter bruger 168 kWh mod 135 kWh for CF100WD.</p>
<p>Et fryseskab er ikke automatisk dyrere i drift. <a href="/fryser/samsung-rz70h/">Samsung RZ70H</a> på 323 liter bruger 210 kWh i klasse D — 25 kWh mere end CF300WD for 24 liter mere. Til gengæld er det nemmere at finde varerne i et skab med skuffer, og det fylder mindre gulvplads. Vælg efter pladsen og vanerne, og sammenlign kWh-tallet.</p>

<p>Kummefryserens låg åbner opad, og den kolde luft bliver liggende i kassen, når du åbner. Derfor holder en kummefryser kulden godt, også under et kort strømsvigt, så længe låget er lukket. Til gengæld skal du grave efter varerne i bunden. Kurve og en simpel liste på låget gør det lettere at finde tingene hurtigt, så låget står åbent kortere tid.</p>

<h2>Kan den stå i garagen?</h2>
<p>De fire største modeller er ifølge EPREL bygget til klimaklasserne SN, N, ST og T, altså rum mellem 10 og 43 °C. Det dækker et bryggers, en kælder og en isoleret garage. En uisoleret garage, der om vinteren bliver koldere end 10 °C, ligger uden for det, Scandomestic har oplyst. Den lille CF51WE er kun oplyst til klimaklasse T, altså 16–43 °C, og hører til indendørs.</p>
<p>Et køligt rum hjælper på forbruget: energimærket er målt ved 25 °C, og jo køligere rummet er, jo mindre varme skal fryseren fjerne.</p>

<h2>Hvornår er det billigst?</h2>
<p>En kummefryser kører hele døgnet og kan ikke flyttes til billige timer, så årsprisen er mærkets kWh gange din gennemsnitlige elpris. Kummefrysere afrimes typisk i hånden, og is på væggene øger forbruget, så afrim, når laget bliver tykkere end et par millimeter. Se <a href="/kummefryser/">hvad kummefrysere bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Vælg en WD-model (klasse D) frem for WE, når størrelsen findes i begge.</li>
<li>Stil fryseren på −18 °C — koldere koster mere.</li>
<li>Hold låget lukket, og fyld fryseren; tomme hulrum giver mere kold luft at miste.</li>
<li>Placér den køligt, men ikke under 10 °C for CF100WD–CF400WE og 16 °C for CF51WE.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Scandomestic CF300WD?",
      answer: "185 kWh om året i energiklasse D ifølge EPREL, omkring 0,51 kWh i døgnet. Det svarer til {{kr 185}} om året ved månedens elpris.",
    },
    {
      question: "Hvor meget strøm bruger Scandomestic CF100WD?",
      answer: "135 kWh om året i energiklasse D for 99 liter ifølge EPREL, svarende til {{kr 135}} om året.",
    },
    {
      question: "Bruger Scandomestic CF300WD mindre end Gram FB 3297?",
      answer: "Ja, ifølge energimærkerne: 185 kWh om året i klasse D mod 231 kWh i klasse E for Gram FB 3297-95, begge omkring 300 liter.",
    },
    {
      question: "Kan en Scandomestic kummefryser stå i en garage?",
      answer: "CF100WD, CF200WD, CF300WD og CF400WE er oplyst til rum mellem 10 og 43 °C, så en isoleret garage går. CF51WE kræver mindst 16 °C.",
    },
    {
      question: "Hvad betyder WD og WE i modelnummeret?",
      answer: "Det sidste bogstav er energiklassen: WD-modellerne har klasse D, WE-modellerne klasse E ifølge EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — Scandomestic CF51WE, EU's energimærke", url: eprel("1586198") },
    { name: "EPREL — Scandomestic CF100WD, EU's energimærke", url: eprel("1460826") },
    { name: "EPREL — Scandomestic CF200WD, EU's energimærke", url: eprel("1460653") },
    { name: "EPREL — Scandomestic CF300WD, EU's energimærke", url: eprel("1460651") },
    { name: "EPREL — Scandomestic CF400WE, EU's energimærke", url: eprel("1460648") },
    { name: "EPREL — Scandomestic CF200WE, EU's energimærke", url: eprel("2349230") },
    { name: "EPREL — Gram FB 3297-95, EU's energimærke", url: eprel("2464835") },
    { name: "EPREL — Samsung RZ70H32KDV, EU's energimærke", url: eprel("2571067") },
  ],
  variants: [
    { name: "51 l (CF51WE)", watts: {}, annualKwh: 153, energyClass: "E", source: 0 },
    { name: "99 l (CF100WD)", watts: {}, annualKwh: 135, energyClass: "D", source: 1 },
    { name: "199 l (CF200WD)", watts: {}, annualKwh: 160, energyClass: "D", source: 2 },
    { name: "299 l (CF300WD)", watts: {}, annualKwh: 185, energyClass: "D", source: 3 },
    { name: "400 l (CF400WE)", watts: {}, annualKwh: 263, energyClass: "E", source: 4 },
  ],
  publishDate: "2026-12-27",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Scandomestic har oplyst til EU-databasen EPREL: målt ved 25 °C i rummet med lukket låg og −18 °C. Kilderne står nederst på siden.",
};

export default scandomesticCf;
