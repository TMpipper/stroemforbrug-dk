import type { ApplianceData } from "@/lib/types";

/**
 * Kogeplade (enkelt/dobbelt bordkogeplade, støbejern, glaskeramik eller induktion) — Severin DK 1014 (testberichte.de): dobbelt
 * kogeplade 2.500 W, plader på 15 cm (ca. 1.000 W) og 18 cm (ca. 1.500 W). Siemens: 1,5 l vand i kog i gennemsnit 0,18 kWh på
 * induktion og 0,22 kWh på glaskeramik; kogeplader har intet energimærke. Stiftung Warentest (2013): 1 l vand koger på 4½ min. på
 * induktion med booster mod ca. 6 min. på andre plader; en husstand med 10 kWh om ugen på almindelige plader bruger ca. 8 kWh med
 * induktion. Øko-Test (schweizisk måling): espressokande på passende støbejernsplade 36 kWh/år, på for stor 92 kWh/år; to æg i gryde
 * med lidt vand på induktion 0,09 kWh, med meget vand uden låg 0,27–0,3. EU-ecodesign 66/2014: elkogeplader < 195 Wh/kg fra 2019.
 * Forbrug pr. 30 min. madlavning er vores skøn. Beregneren: kWh pr. madlavning, antal pr. uge × 52.
 */
const kogeplade: ApplianceData = {
  slug: "kogeplade",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["kogeplade", "bordkogeplade", "enkelt kogeplade", "dobbelt kogeplade", "elkogeplade", "kogeplade på bordet", "kogeplade el", "rejsekogeplade", "induktionsplade", "mobil kogeplade", "kogeplade støbejern"],
  },
  name: "Kogeplade",
  article: "en",
  title: "Kogeplade strømforbrug (2026) → enkelt, dobbelt og induktion",
  description:
    "Se hvor meget strøm en bordkogeplade bruger pr. måltid – støbejern, glaskeramik og induktion, enkelt og dobbelt – og hvad gryden og låget betyder.",
  heading: "Strømforbrug for en kogeplade: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En bordkogeplade bruger efter vores skøn 0,3–0,5 kWh på en halv times madlavning, og en dobbelt plade med to gryder omkring 0,75 kWh. Et måltid på en enkelt plade med støbejern koster cirka {{kr 0,45}} ved månedens elpris. Med fire måltider om ugen bliver det omkring 95 kWh om året, eller {{kr 95}}.",
  kwhRange: [5, 400],
  typicalKwh: 95,
  wattage: 1500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.95, 0.93, 0.95, 0.98, 1.03, 1.08, 1.12, 1.1, 1.0, 0.97, 0.94, 0.95],
  content: `<h2>Kogeplader på bordet: tre typer</h2>
<p>En bordkogeplade er et lille komfur uden ovn, som sættes i en almindelig stikkontakt. Den bruges i sommerhuset, på kollegieværelset, i kolonihavehuset, i campingvognen eller som ekstra plade til julemaden. Der findes tre typer. Den klassiske har en støbejernsplade med et varmelegeme indeni. Den glaskeramiske har en glasplade med en glødetråd under. Og induktionspladen varmer gryden direkte med et magnetfelt.</p>
<p>Effekten står på mærkepladen. En typisk dobbelt kogeplade som Severin DK 1014 er på 2.500 W i alt, fordelt på en plade på 15 cm med omkring 1.000 W og en på 18 cm med omkring 1.500 W. Enkelte induktionsplader til bordet er typisk på 1.800–2.000 W. Den fulde effekt bruges kun, når pladen står på højeste trin. Når vandet koger, og du skruer ned, slår termostaten pladen til og fra, og forbruget falder.</p>

<h2>Forbrug pr. måltid</h2>
<p>Der findes ingen standardmåling af, hvad en hel madlavning bruger, fordi det afhænger så meget af gryden, låget og hvor længe der koges. Tallene herunder er vores skøn for en halv times madlavning til to-tre personer: opkogning på fuld effekt og derefter simren på lavere trin.</p>
<table>
<thead><tr><th>Kogeplade</th><th>kWh pr. madlavning</th><th>Pris pr. gang</th><th>kWh om året ved 4 gange om ugen</th></tr></thead>
<tbody>
<tr><td>Induktionsplade, 30 min.</td><td>0,32 kWh</td><td>{{kr 0,32}}</td><td>67 kWh</td></tr>
<tr><td>Glaskeramisk plade, 30 min.</td><td>0,4 kWh</td><td>{{kr 0,4}}</td><td>83 kWh</td></tr>
<tr><td>Enkelt plade med støbejern, 30 min.</td><td>0,45 kWh</td><td>{{kr 0,45}}</td><td>94 kWh</td></tr>
<tr><td>Dobbelt plade, to gryder, 30 min.</td><td>0,75 kWh</td><td>{{kr 0,75}}</td><td>156 kWh</td></tr>
</tbody>
</table>
<p>Forskellen mellem typerne bygger på målinger. Siemens oplyser, at det i gennemsnit kræver 0,18 kWh at bringe 1,5 liter vand i kog på induktion og 0,22 kWh på glaskeramik. Stiftung Warentest regner med, at en husstand, der bruger 10 kWh om ugen på almindelige kogeplader, ville bruge omkring 8 kWh med induktion – altså cirka 20 procent mindre. Støbejernspladen er den langsomste, fordi selve pladen skal varmes op, før gryden bliver varm, og den afgiver varme til køkkenet i lang tid efter, at den er slukket.</p>

<h2>Gryden og låget betyder mere end pladen</h2>
<p>Den største forskel ligger ikke i pladens type, men i hvordan den bruges. En schweizisk måling, som Øko-Test har gengivet, viser det tydeligt. To æg kogt i en gryde med lidt vand på induktion brugte 0,09 kWh, mens de samme to æg i en gryde med meget vand og uden låg brugte 0,27–0,3 kWh – over tre gange så meget. En espressokande på en støbejernsplade, der passede i størrelse, brugte 36 kWh om året, mens den samme kande på en for stor plade brugte 92 kWh.</p>
<p>Reglen er enkel: gryden skal dække pladen, bunden skal være plan, og låget skal på. Er pladen større end gryden, varmer den luften omkring gryden. På en støbejernsplade er en buet grydebund særligt dyr, fordi kun en del af bunden rører pladen.</p>

<h2>Kogeplade, elkedel eller multikoger?</h2>
<p>Skal du bare have kogt vand til te, pasta eller kartofler, er en <a href="/elkedel/">elkedel</a> hurtigere og bruger mindre end en bordkogeplade, fordi varmelegemet sidder direkte i vandet. Kog vandet i kedlen og hæld det i gryden. Til gryderetter og ris kan en <a href="/multikoger/">multikoger</a> erstatte både gryde og plade og bruge mindre, fordi den er lukket og isoleret.</p>
<p>Har du et rigtigt køkken, er bordkogepladen mest en ekstra plade. Sammenlign med vores sider om <a href="/induktion/">induktionskogepladen</a> og <a href="/komfur/">komfuret</a>, hvis du overvejer at skifte hele kogefeltet.</p>

<h2>Energikrav, men intet energimærke</h2>
<p>Kogeplader har ikke et EU-energimærke som ovne og køleskabe, og producenterne angiver sjældent forbruget. Siemens skriver direkte, at kogefelter ikke har et energimærke, og at brugeren har stor indflydelse på det faktiske forbrug. EU har dog ecodesignkrav til elektriske kogeplader i husholdninger: siden 2019 må de højst bruge 195 Wh pr. kilo vand i standardtesten, hvor gryder med vand varmes op og holdes varme. Kravet skærer de dårligste fra, men det siger ikke noget om, hvordan pladen bruges derhjemme.</p>

<h2>Sikringen og stikkontakten</h2>
<p>En dobbelt kogeplade på 2.500 W er tæt på, hvad en almindelig gruppe på 10 ampere kan klare – omkring 2.300 W. Står der samtidig en elkedel eller en miniovn på samme gruppe, springer sikringen. Brug ikke forlængerledninger på tromle, der ikke er rullet helt ud, og stil pladen på et underlag, der tåler varme. Bordkogeplader har ingen standby, når knappen står på nul.</p>

<h2>Hvornår på døgnet bruges kogepladen?</h2>
<p>Kogepladen bruges til aftensmaden, og den kan ikke flyttes til billigere timer. Det, du kan gøre, er at bruge mindre i de dyre timer: læg låg på, brug den mindste plade, der passer til gryden, og sluk et par minutter før tid, så restvarmen gør maden færdig. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Sådan sparer du strøm på kogepladen</h2>
<ol>
<li><strong>Låg på gryden</strong> – i Øko-Tests målinger brugte gryder uden låg og med meget vand op til tre gange så meget.</li>
<li><strong>Gryde og plade i samme størrelse</strong>, og en plan bund på støbejern.</li>
<li><strong>Kog vandet i elkedlen</strong> og hæld det i gryden.</li>
<li><strong>Brug lidt vand</strong> til æg, kartofler og grøntsager – de skal ikke svømme.</li>
<li><strong>Sluk tidligt</strong> på støbejern; pladen holder varmen i flere minutter.</li>
</ol>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en kogeplade?",
      answer:
        "Efter vores skøn 0,3–0,5 kWh på en halv times madlavning, alt efter type, og omkring 0,75 kWh for en dobbelt plade med to gryder. Et måltid på støbejern koster cirka {{kr 0,45}} ved månedens elpris.",
    },
    {
      question: "Hvor mange watt bruger en dobbelt kogeplade?",
      answer:
        "Typisk omkring 2.500 W i alt. Severin DK 1014 har en plade på 15 cm med cirka 1.000 W og en på 18 cm med cirka 1.500 W. Fuld effekt bruges kun under opkogning.",
    },
    {
      question: "Bruger en induktionsplade mindre strøm end en almindelig kogeplade?",
      answer:
        "Ja, omkring 20 procent. Siemens oplyser 0,18 kWh for 1,5 liter vand i kog på induktion mod 0,22 kWh på glaskeramik, og Stiftung Warentest regner med cirka 20 procent besparelse over en uge.",
    },
    {
      question: "Har kogeplader et energimærke?",
      answer:
        "Nej. Kogeplader har intet EU-energimærke. Der er et ecodesignkrav om højst 195 Wh pr. kilo vand i standardtesten, men det fortæller ikke, hvad pladen bruger i dit køkken.",
    },
    {
      question: "Hvad koster en kogeplade i strøm om året?",
      answer:
        "Med fire måltider om ugen på en enkelt plade med støbejern bliver det omkring 95 kWh om året, hvilket koster cirka {{kr 95}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["induktion", "komfur", "elkedel", "multikoger", "miniovn"],
  sources: [
    { name: "testberichte.de — Severin Kochplatte DK 1014 (2.500 W, plader på 15 og 18 cm)", url: "https://www.testberichte.de/heim-garten/severin-kochplatte-dk-1014.html" },
    { name: "Siemens — Energieeffiziente Kochfelder (kWh for 1,5 l vand, intet energimærke)", url: "https://www.siemens-home.bsh-group.com/de/inspiration/ratgeber/energiespar-ratgeber/energieeffiziente-kochfelder" },
    { name: "Stiftung Warentest — Leserfrage: Besser kochen mit Induktion (2013)", url: "https://www.test.de/Leserfrage-Besser-kochen-mit-Induktion-4612787-0/" },
    { name: "testundtipps.de — Induktionsplatte: Wie viel Watt? (effekt efter producenternes datablade)", url: "https://testundtipps.de/kueche-lifestyle/kuechengeraete/kochplatten/induktionsplatten/induktionsplatte-watt" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (æg, espressokande)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
    { name: "EUR-Lex — Forordning (EU) 66/2014 om ecodesignkrav til ovne, kogeplader og emhætter", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0066" },
  ],
  calculatorConfig: {
    title: "Kogeplade forbrugsberegner",
    options: [
      { label: "Induktionsplade, 30 min.", kwhPerUse: 0.32 },
      { label: "Glaskeramisk plade, 30 min.", kwhPerUse: 0.4 },
      { label: "Enkelt plade med støbejern, 30 min.", kwhPerUse: 0.45 },
      { label: "Dobbelt plade, to gryder, 30 min.", kwhPerUse: 0.75 },
    ],
    usageLabel: "Måltider pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 4,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-05",
  updated: "2026-11-22",
};

export default kogeplade;
