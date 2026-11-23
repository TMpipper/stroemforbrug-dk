import type { ApplianceData } from "@/lib/types";

/**
 * Barbermaskine — intet EU-energimærke. Tal: Philips' eco passport for Shaver series 7000 (under 1 kWh om året,
 * højst 5,4 W, lader uden last under 0,15 W, 50 min. barbering, 1 time fuld opladning, Li-ion), Braun Series 9 PRO+
 * (60 min. barbering, 60 min. fuld opladning, 5 min. hurtigopladning til én barbering, PowerCase op til 6 uger på
 * 90 min. opladning). Philips' årstal: IEC 62301, 17 barberinger pr. opladning, 21 opladninger om året.
 * kWh pr. opladning (højst 5,4 Wh) og antal opladninger ved andre vaner er vores skøn.
 */
const barbermaskine: ApplianceData = {
  slug: "barbermaskine",
  meta: {
    category: "pleje",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["barbermaskine", "elektrisk barbermaskine", "shaver", "skægtrimmer", "trimmer", "braun series 9", "philips shaver", "folieshaver", "rotationsbarbermaskine"],
  },
  name: "Barbermaskine",
  article: "en",
  title: "Barbermaskine strømforbrug (2026) → opladning og laderen",
  description:
    "En elektrisk barbermaskine bruger under 1 kWh om året ifølge Philips. Se watt under opladning, laderens forbrug uden last og prisen pr. opladning.",
  heading: "Strømforbrug for en barbermaskine: kWh og pris",
  quickAnswer:
    "Philips oplyser, at Shaver series 7000 bruger under 1 kWh om året, svarende til {{kr 1}}. Maskinen trækker højst 5,4 W under opladningen, som tager en time, så en fuld opladning bruger efter vores skøn højst 0,0054 kWh, eller {{oere 0,0054}}. Laderen bruger under 0,15 W, når den sidder i stikket uden maskine.",
  kwhRange: [0.05, 3],
  typicalKwh: 1,
  wattage: 5.4,
  standbyWatts: 0.15,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Et lille batteri og en lille motor</h2>
<p>En elektrisk barbermaskine er en af de mindste strømforbrugere i hjemmet. Motoren skal kun drive skærehovederne i nogle minutter om dagen, og batteriet er lille. Philips oplyser i sit eco passport for Shaver series 7000, at maskinen bruger under 1 kWh om året. Det svarer til {{kr 1}} ved månedens elpris — for et helt års barberinger.</p>
<p>I samme dokument står de tal, der forklarer det lave årsforbrug: maskinen trækker højst 5,4 W, en fuld opladning tager en time, og batteriet holder til mere end 50 minutters barbering. Laderen bruger under 0,15 W, når den sidder i stikkontakten uden at lade. Braun oplyser for Series 9 PRO+ 60 minutters barbering på en opladning, der tager 60 minutter, og at fem minutters hurtigopladning er nok til én barbering.</p>

<h2>Hvad koster en opladning?</h2>
<p>Med højst 5,4 W i en time bruger en fuld opladning af Philips-maskinen højst 5,4 watt-timer, eller 0,0054 kWh, svarende til {{oere 0,0054}}. I praksis falder effekten, når batteriet er ved at være fuldt, så det reelle tal er lavere. Hvor mange opladninger, du har brug for, afhænger af, hvor længe du barberer dig.</p>
<table>
<thead><tr><th>Brug (vores skøn)</th><th>Opladninger om året</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Philips' brugsmønster: 17 barberinger pr. opladning</td><td>21</td><td>ca. 0,11</td><td>{{kr 0,11}}</td></tr>
<tr><td>3 minutter hver dag, 50 minutter pr. opladning</td><td>ca. 22</td><td>ca. 0,12</td><td>{{kr 0,12}}</td></tr>
<tr><td>5 minutter hver dag</td><td>ca. 37</td><td>ca. 0,2</td><td>{{kr 0,2}}</td></tr>
<tr><td>Laderen sidder altid i stikket (under 0,15 W) plus daglig barbering</td><td>—</td><td>højst ca. 1,4</td><td>{{kr 1,4}}</td></tr>
</tbody>
</table>
<p>Den sidste række viser, at laderen kan bruge mere end selve opladningerne. 0,15 W i alle årets 8.760 timer er 1,3 kWh. Philips skriver under 0,15 W, så det reelle tal er lavere. Philips' eget årstal bygger ifølge eco passport på målinger efter IEC 62301 og et typisk brugsmønster med 17 barberinger pr. opladning og 21 opladninger på en time om året. 21 opladninger med højst 5,4 W giver omkring 0,11 kWh — resten af årstallet er laderens forbrug. Forholdet er altså tydeligt: tager du laderen ud af stikket mellem opladningerne, er der næsten intet forbrug tilbage.</p>

<h2>Hurtigopladning og rejseetui</h2>
<p>Mange nyere barbermaskiner kan hurtiglades. Braun oplyser, at fem minutter er nok til én barbering. Hurtigopladning trækker ikke mere strøm i alt — det er det samme batteri, der fyldes — men den betyder, at du ikke behøver at lade maskinen stå i laderen hele tiden for at være sikker på, at den virker om morgenen.</p>
<p>Braun sælger også Series 9 PRO+ med et ladeetui, PowerCase, som ifølge Braun giver op til seks ugers barbering på 90 minutters opladning. Etuiet har sit eget batteri og lader maskinen op undervejs. Det flytter forbruget, men sparer det ikke: strømmen skal stadig ind i etuiet fra stikkontakten, og der er et lille tab hver gang energien flyttes fra et batteri til et andet.</p>

<h2>Rensestation og trimmere</h2>
<p>Nogle barbermaskiner leveres med en rensestation, der skyller skærehovedet med en rensevæske, tørrer det og lader maskinen. Stationen har en lille pumpe og ofte en ventilator, så den bruger lidt strøm, når den kører et program. Producenterne oplyser sjældent, hvor meget, men programmet varer kort, og forbruget er på niveau med en opladning. Sidder stationen i stikkontakten hele tiden, gælder det samme som for laderen: den kan bruge lidt strøm døgnet rundt.</p>
<p>Skægtrimmere, næsehårstrimmere og hårklippere med batteri har samme profil som barbermaskinen. De bruges kortere tid, og batteriet holder ofte i flere uger. Deres årsforbrug er derfor endnu lavere — det meste er laderens tab.</p>

<h2>Barbermaskinen ved siden af badeværelsets andre apparater</h2>
<p>Badeværelset rummer både nogle af hjemmets mindste og største elforbrugere. En barbermaskine og en <a href="/el-tandboerste/">el-tandbørste</a> bruger hver især få kWh om året eller mindre, mens en hårtørrer bruger mere på ti minutter end barbermaskinen gør på et år. Det store forbrug i badeværelset er dog det varme vand i bruseren, der enten kommer fra fjernvarmen, gasfyret eller en varmtvandsbeholder.</p>
<p>Barbermaskinen hører til i samme gruppe som <a href="/traadloes-oplader/">trådløse opladere</a> og smartwatches: apparater, hvor laderen kan bruge mere end apparatet, hvis den sidder i stikket hele året.</p>

<h2>Hvornår skal barbermaskinen lades?</h2>
<p>Opladningen kan lægges, hvor det passer, og mange lader maskinen om aftenen eller natten. Det er her, strømmen ofte er billigst, men for en barbermaskine er forskellen ikke til at se i kroner. Vanen er mere værd for de større apparater med batteri, som elcyklen og den bærbare computer. Oversigten over dagens timepriser højere oppe viser de billige timer.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Lad maskinen, når batteriet er ved at være tomt</strong> — et lithium-ion-batteri har ikke brug for at stå i laderen.</li>
<li><strong>Tag laderen ud af stikket</strong> mellem opladningerne; læs mere om små ladere på siden om <a href="/standby/">standby</a>.</li>
<li><strong>Brug hurtigopladning</strong>, hvis du har glemt at lade, i stedet for at lade maskinen stå i laderen hver nat.</li>
<li><strong>Rens skærehovedet</strong> efter producentens anvisning — et rent hoved klipper lettere og belaster motoren mindre.</li>
<li><strong>Skift skær og folie</strong>, når de er slidte, så hver barbering ikke tager længere tid end nødvendigt.</li>
</ol>
<p>Brug beregneren ovenfor, hvis du vil se, hvad husstandens barbermaskiner og trimmere koster om året. Det bliver et beløb, der er svært at finde på elregningen.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en barbermaskine om året?",
      answer:
        "Philips oplyser under 1 kWh om året for Shaver series 7000, svarende til {{kr 1}}. Lader du kun efter behov og tager laderen ud, er det efter vores skøn omkring 0,1-0,2 kWh.",
    },
    {
      question: "Hvor mange watt bruger en barbermaskine under opladning?",
      answer:
        "Philips oplyser højst 5,4 W for Shaver series 7000, og en fuld opladning tager en time. Det giver højst 0,0054 kWh pr. opladning, svarende til {{oere 0,0054}}.",
    },
    {
      question: "Bruger laderen strøm, når barbermaskinen ikke er i den?",
      answer:
        "Lidt. Philips oplyser under 0,15 W for laderen uden last. Hele året er det højst 1,3 kWh, svarende til {{kr 1,3}}. Tag laderen ud af stikket, når den ikke bruges.",
    },
    {
      question: "Hvor længe holder batteriet i en barbermaskine?",
      answer:
        "Philips oplyser mere end 50 minutters barbering for Shaver series 7000 og Braun 60 minutter for Series 9 PRO+. Braun oplyser også, at fem minutters hurtigopladning er nok til én barbering.",
    },
  ],
  relatedSlugs: ["el-tandboerste", "traadloes-oplader", "mobil-opladning", "smartwatch", "haartoerrere"],
  sources: [
    { name: "Philips — eco passport for Shaver series 7000 (under 1 kWh/år ved 21 opladninger, højst 5,4 W, lader uden last under 0,15 W)", url: "https://www.documents.philips.com/assets/20220414/9a98a96dce8e4951b853ae77013fb900.pdf" },
    { name: "Braun — Series 9 PRO+ (60 min. barbering, 60 min. opladning, 5 min. hurtigopladning, PowerCase)", url: "https://us.braun.com/male-grooming/electric-shavers/series-9-pro-plus" },
  ],
  calculatorConfig: {
    title: "Beregn barbermaskinens strømforbrug",
    options: [
      { label: "Efter Philips' årstal for Shaver series 7000 (under 1 kWh)", kwhPerUse: 1 },
      { label: "Lades efter behov, laderen tages ud (vores skøn: ca. 0,12 kWh)", kwhPerUse: 0.12 },
      { label: "Laderen sidder altid i stikket (vores skøn: højst ca. 1,4 kWh)", kwhPerUse: 1.4 },
    ],
    usageLabel: "Barbermaskiner og trimmere i husstanden",
    usageUnit: "maskiner",
    usageMin: 1,
    usageMax: 6,
    usageDefault: 1,
    usageStep: 1,
    per: "år",
    perYear: 1,
  },
  publishDate: "2026-12-19",
  updated: "2026-11-23",
};

export default barbermaskine;
