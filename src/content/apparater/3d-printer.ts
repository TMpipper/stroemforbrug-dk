import type { ApplianceData } from "@/lib/types";

const printer3d: ApplianceData = {
  slug: "3d-printer",
  meta: {
    category: "hobby",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "printer3d",
    synonyms: ["3d-printer", "3d printer", "bambu lab", "prusa", "a1 mini", "p1s", "x1 carbon", "filament", "3d-print strøm"],
  },
  name: "3D-printer",
  article: "en",
  title: "3D-printer strømforbrug (2026) → Bambu Lab, Prusa og standby",
  description: "En 3D-printer bruger 80-200 watt i gennemsnit under et print. Se tal for Bambu Lab og Prusa, pris pr. printtime, og hvad standby mellem printene koster.",
  heading: "Strømforbrug for en 3D-printer: kWh og pris",
  quickAnswer:
    "En hjemme-3D-printer som Bambu Lab A1, P1S eller X1C bruger i gennemsnit omkring 95-105 watt, når den printer i PLA, ifølge Bambu Lab. En printtime koster derfor cirka {{oere 0,1}} ved {{pris_kwh}}, og 10 timers print om ugen hele året giver omkring 52 kWh, svarende til {{kr 52}}. ABS og store printere trækker op mod det dobbelte, og en printer, der står tændt mellem opgaverne, bruger 4-27 watt.",
  kwhRange: [5, 400],
  typicalKwh: 52,
  wattage: 100,
  standbyWatts: 5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.05, 1.0, 0.9, 0.85, 0.85, 0.85, 0.95, 1.05, 1.1, 1.15],
  content: `<h2>Hvor mange watt bruger en 3D-printer?</h2>
<p>En 3D-printer bygger emner lag for lag af smeltet plast, og strømmen går mest til at holde to ting varme: dysen, der smelter plasten, og printpladen, som emnet sidder fast på. Når printeren starter, trækker den meget for at nå temperaturen hurtigt — Bambu Lab oplyser op til 1.000 watt for P1S og X1C og 1.300 watt for A1 — men det varer kun få minutter. Resten af printet holder den temperaturen, og så er forbruget langt lavere. Det er gennemsnittet over hele printet, der betyder noget for regningen.</p>
<table>
<thead><tr><th>Printer og materiale</th><th>Gennemsnit under print</th><th>Pris pr. printtime</th></tr></thead>
<tbody>
<tr><td>Bambu Lab A1 mini, PLA</td><td>80 W</td><td>{{oere 0,08}}</td></tr>
<tr><td>Prusa MK-serien, PLA</td><td>80 W</td><td>{{oere 0,08}}</td></tr>
<tr><td>Bambu Lab A1, PLA</td><td>95 W</td><td>{{oere 0,095}}</td></tr>
<tr><td>Bambu Lab P1S og X1C, PLA</td><td>105 W</td><td>{{oere 0,105}}</td></tr>
<tr><td>Prusa MK-serien, ABS</td><td>120 W</td><td>{{oere 0,12}}</td></tr>
<tr><td>Bambu Lab X1C, ABS</td><td>150 W</td><td>{{oere 0,15}}</td></tr>
<tr><td>Bambu Lab A1, ABS</td><td>200 W</td><td>{{oere 0,2}}</td></tr>
<tr><td>Bambu Lab H2D, PLA</td><td>197 W</td><td>{{oere 0,197}}</td></tr>
</tbody>
</table>
<p>Tallene er producenternes egne målinger. Prusa har målt ved en stuetemperatur på 26 grader. Tallene er gennemsnit, og det enkelte print kan ligge over eller under, alt efter emnets størrelse og hvor varmt rummet er.</p>

<h2>Hvorfor materialet betyder så meget</h2>
<p>PLA smelter ved lav temperatur og kan printes på en lun plade, så det er det billigste materiale at printe med, også i strøm. ABS, ASA og polycarbonat kræver en varmere dyse og en meget varmere plade, og de skal helst printes i et lukket kammer, der holder varmen. Derfor bruger samme printer markant mere med de tekniske materialer: Bambu Lab måler A1 til 95 watt med PLA og 200 watt med ABS. På den store H2D bruger polycarbonat 395 watt.</p>
<p>Et koldt værksted eller en kold kælder trækker også forbruget op, fordi printpladen taber varme til omgivelserne. En lukket printer — eller en kasse omkring en åben printer — holder på varmen og sparer strøm på lange print.</p>

<h2>Hvad koster et print?</h2>
<p>Mange print tager mellem en og ti timer, og store emner kan tage et døgn eller mere. Selv lange print er dog billige i strøm sammenlignet med filamentet. Tabellen regner med 100 watt i gennemsnit, svarende til en Bambu Lab-printer med PLA.</p>
<table>
<thead><tr><th>Print</th><th>kWh</th><th>Pris</th></tr></thead>
<tbody>
<tr><td>Lille emne, 2 timer</td><td>0,2 kWh</td><td>{{oere 0,2}}</td></tr>
<tr><td>Mellemstort emne, 8 timer</td><td>0,8 kWh</td><td>{{kr 0,8}}</td></tr>
<tr><td>Stort emne, 24 timer</td><td>2,4 kWh</td><td>{{kr 2,4}}</td></tr>
<tr><td>10 printtimer om ugen i et år</td><td>52 kWh</td><td>{{kr 52}}</td></tr>
<tr><td>30 printtimer om ugen i et år</td><td>156 kWh</td><td>{{kr 156}}</td></tr>
</tbody>
</table>

<h2>Standby mellem printene</h2>
<p>En 3D-printer, der står tændt uden at printe, bruger stadig strøm på skærm, styring, belysning og ventilation. Bambu Lab oplyser 4-5,4 watt for A1, 5,2-6 watt for P1S, 8,5-9,9 watt for X1C og omkring 25-27 watt for den store H2D. En materialeskifter (AMS) lægger knap 1 watt til i hvile. Det lyder ikke af meget, men en X1C, der står tændt hele døgnet, bruger omkring 80 kWh om året alene på at vente, svarende til {{kr 80}}. For H2D er det over 220 kWh, svarende til {{kr 220}}. Har printeren kamera og wifi tændt, så du kan følge den fra telefonen, er det en del af standbyforbruget. Sluk printeren på kontakten, når den ikke skal bruges i flere dage. Samme princip gælder for en almindelig <a href="/printer/">papirprinter</a>, men der er beløbene langt mindre.</p>

<h2>Print i de billige timer</h2>
<p>Lange print er et af de bedste eksempler på forbrug, der kan flyttes. Et print på otte eller ti timer kan startes om aftenen, så det kører gennem natten, hvor strømmen ofte er billigst, og er færdigt om morgenen. De fleste printere kan startes fra en app, og mange har kamera, så du kan følge med. Oversigten over dagens timer længere oppe viser, hvornår prisen er lavest i dag. Lad aldrig en printer køre helt uden opsyn, hvis producenten fraråder det, og sørg for, at den står på et sikkert underlag.</p>
<p>Gemmer du dine printfiler på et <a href="/nas/">netværksdrev</a>, kan printeren hente dem derfra, uden at computeren skal stå tændt.</p>

<h2>Hvad bestemmer, hvor meget strøm din 3D-printer bruger?</h2>
<ul>
<li><strong>Materialet</strong> — PLA er billigst, ABS og polycarbonat kan fordoble forbruget.</li>
<li><strong>Printpladens temperatur og størrelse</strong> — en stor, varm plade er den største enkeltpost.</li>
<li><strong>Rummets temperatur</strong> — et koldt rum koster ekstra varme.</li>
<li><strong>Printtiden</strong> — fin opløsning og høj udfyldning forlænger printet.</li>
<li><strong>Standby</strong> — en printer, der står tændt hele tiden, kan bruge mere end selve printene.</li>
</ul>

<h2>Sådan sparer du strøm på din 3D-printer</h2>
<ol>
<li><strong>Vælg PLA</strong>, når emnet ikke kræver et teknisk materiale.</li>
<li><strong>Brug en lukket printer eller kasse</strong> til lange print og varme materialer.</li>
<li><strong>Print flere emner på én plade</strong>, så opvarmningen deles.</li>
<li><strong>Brug lavere udfyldning</strong>, hvor styrken tillader det — det forkorter printet.</li>
<li><strong>Sluk printeren</strong>, når den ikke skal bruges, i stedet for at lade den stå på standby.</li>
<li><strong>Start lange print i de billige timer</strong>, fx om aftenen.</li>
</ol>`,
  faqs: [
    { question: "Hvor mange watt bruger en 3D-printer?", answer: "En hjemmeprinter som Bambu Lab A1 eller P1S bruger i gennemsnit 95-105 W med PLA og 140-200 W med ABS, ifølge Bambu Lab. En printtime med PLA koster cirka {{oere 0,1}}." },
    { question: "Hvad koster et 3D-print i strøm?", answer: "Et print på 8 timer med 100 W i gennemsnit bruger 0,8 kWh og koster {{kr 0,8}} ved {{pris_kwh}}. Filamentet koster typisk mere end strømmen." },
    { question: "Hvad bruger en 3D-printer på standby?", answer: "Bambu Lab oplyser 4-10 W for A1, P1S og X1C og 25-27 W for H2D. En X1C, der står tændt hele året, bruger cirka 80 kWh, svarende til {{kr 80}}." },
    { question: "Bruger ABS mere strøm end PLA?", answer: "Ja. Bambu Lab måler A1 til 95 W med PLA og 200 W med ABS, fordi ABS kræver en varmere plade og dyse. En printtime med ABS på A1 koster {{oere 0,2}}." },
    { question: "Hvad bruger en Prusa-printer?", answer: "Prusa oplyser omkring 80 W i gennemsnit med PLA og 120 W med ABS for MK-serien. Ti printtimer med PLA koster {{kr 0,8}}." },
  ],
  relatedSlugs: ["printer", "nas", "computer", "laptop", "router", "gaming-pc"],
  sources: [
    { name: "Bambu Lab Wiki — Power consumption (gennemsnit under print, standby og maksimal effekt)", url: "https://wiki.bambulab.com/en/general/power-consumption" },
    { name: "Prusa Knowledge Base — FAQ: strømforbrug for MK-serien med PLA og ABS", url: "https://help.prusa3d.com/en/article/faq-frequently-asked-questions_1932" },
  ],
  calculatorConfig: {
    title: "Beregn din 3D-printers strømforbrug",
    options: [
      { label: "Lille printer med PLA (A1 mini, Prusa MK: ca. 80 W)", kwhPerUse: 0.08 },
      { label: "Bambu Lab A1, P1S eller X1C med PLA (ca. 100 W)", kwhPerUse: 0.1 },
      { label: "Prusa MK med ABS (ca. 120 W)", kwhPerUse: 0.12 },
      { label: "ABS på åben printer eller stor printer (ca. 200 W)", kwhPerUse: 0.2 },
    ],
    usageLabel: "Printtimer pr. uge",
    usageUnit: "timer/uge",
    usageMin: 1,
    usageMax: 120,
    usageDefault: 10,
    usageStep: 1,
    per: "printtime",
    perYear: 52,
  },
  publishDate: "2026-12-11",
  updated: "2026-11-22",
};

export default printer3d;
