import type { ApplianceData } from "@/lib/types";

/**
 * Sandwichgrill / toastjern / kontaktgrill — testundtipps.de (aug. 2026, beregnet, ikke målt): kontaktgrill 2.000 W 4 min.
 * forvarmning (ca. 0,13 kWh) + 5 min. grill ved 40–50 % termostat = 0,20 kWh for to sandwich; 1.000 W 7 min. + 6 min. = 0,17 kWh;
 * bøffer i to omgange 0,41 kWh; ovn klasse A 0,49 kWh; standby 1 W = 8,8 kWh/år; tre gange om ugen 30–60 kWh/år.
 * Stiftung Warentest måler forvarmning og tilberedning i sin kontaktgrilltest (tallene bag betalingsmur).
 * Den lille sandwichtoaster (750 W, 0,1 kWh) er vores skøn. Beregneren: kWh pr. gang, antal pr. uge × 52. Intet EU-energimærke.
 */
const sandwichgrill: ApplianceData = {
  slug: "sandwichgrill",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["sandwichgrill", "sandwich grill", "toastjern", "sandwichtoaster", "sandwichmaker", "kontaktgrill", "panini grill", "paninigrill", "toast maskine", "croque monsieur"],
  },
  name: "Sandwichgrill",
  title: "Sandwichgrill strømforbrug (2026) → kWh pr. toast og grill",
  description:
    "Se hvor meget strøm en sandwichgrill, et toastjern eller en kontaktgrill bruger pr. gang, hvad forvarmningen koster, og hvordan den klarer sig mod ovnen.",
  heading: "Strømforbrug for en sandwichgrill: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En sandwichgrill eller kontaktgrill bruger typisk 0,1–0,2 kWh på to toast, inklusive forvarmning, og omkring 0,4 kWh, hvis du griller bøffer i to omgange. To toast koster derfor cirka {{kr 0,17}} ved månedens elpris. Bruger du den to gange om ugen, bliver det omkring 18 kWh om året, eller {{kr 18}}.",
  kwhRange: [3, 70],
  typicalKwh: 18,
  wattage: 1500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.05, 1.05, 1.0, 1.0, 0.95, 0.95, 0.95, 0.95, 1.0, 1.0, 1.05, 1.05],
  content: `<h2>Toastjern, sandwichgrill og kontaktgrill</h2>
<p>Under navnet sandwichgrill gemmer sig tre slags apparater. Det klassiske toastjern har to plader med trekantede fordybninger, der lukker toasten, og effekten er typisk 700–900 W. Paninigrillen eller kontaktgrillen har flade eller riflede plader, et hængsel, der kan løfte sig over tykt brød, og ofte 1.000–2.000 W. De største kontaktgrills kan foldes helt ud og bruges som en lille bordgrill til bøffer og grøntsager. Fælles for dem er, at pladerne skal varmes op, før maden kommer i, og at maden får varme fra begge sider på én gang. Det gør dem hurtige og sparsomme sammenlignet med ovnen.</p>
<p>Det tyske ratgeber-site testundtipps.de har regnet på forbruget ud fra effekt, forvarmning og termostatens arbejde. En kontaktgrill på 2.000 W bruger efter deres beregning 0,20 kWh på to sandwich, og en på 1.000 W bruger 0,17 kWh, fordi den er længere tid om at blive varm. Det svarer til {{kr 0,17-0,2}} ved månedens elpris. Laver du toast to gange om ugen, bliver det cirka 18 kWh om året, eller {{kr 18}}.</p>

<h2>Forbrug pr. gang</h2>
<p>Tallene for kontaktgrillene er testundtipps.de's beregninger, ikke målinger. Toastjernet på 750 W er vores eget skøn ud fra samme fremgangsmåde.</p>
<table>
<thead><tr><th>Apparat og ret</th><th>Forvarmning + tilberedning</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Toastjern, 750 W, 2 toast</td><td>4 + 4 min.</td><td>0,10 kWh</td><td>{{kr 0,1}}</td></tr>
<tr><td>Kontaktgrill, 1.000 W, 2 sandwich</td><td>7 + 6 min.</td><td>0,17 kWh</td><td>{{kr 0,17}}</td></tr>
<tr><td>Kontaktgrill, 2.000 W, 2 sandwich</td><td>4 + 5 min.</td><td>0,20 kWh</td><td>{{kr 0,2}}</td></tr>
<tr><td>Kontaktgrill, 2.000 W, bøffer i to omgange</td><td>5 + 16 min.</td><td>0,41 kWh</td><td>{{kr 0,41}}</td></tr>
</tbody>
</table>
<p>Testundtipps.de regner med, at termostaten holder elementet tændt 30–50 procent af tiden, når pladerne først er varme. Det er derfor, en grill på 2.000 W ikke bruger 2 kWh i timen, selv om den kunne. Med tre toast-frokoster om ugen lander de på 30–60 kWh om året.</p>

<h2>Forvarmningen er den største post</h2>
<p>På en kontaktgrill på 2.000 W går omkring 0,13 kWh til forvarmningen alene – to tredjedele af hele forbruget, når der kun skal laves to sandwich. Det betyder, at én stor omgang er langt billigere pr. toast end mange små. Laver du toast til hele familien, så læg dem i, så snart pladerne er varme, og lav alle i træk, mens grillen er varm.</p>
<p>Den svage grill er ikke sparsommere: på 1.000 W tager forvarmningen næsten dobbelt så lang tid, og i beregningen ender den kun lidt under den kraftige. Det, der gør en forskel, er pladernes størrelse. En stor grill med plads til fire sandwich har mere metal, der skal varmes op, og den bruger mere til en enkelt toast end et lille toastjern. Stiftung Warentest har i november 2026 målt netop forvarmning og tilberedning på ti kontaktgrills fra 1.800 W, men de enkelte tal ligger bag betalingsmur.</p>

<h2>Sandwichgrill mod ovn og pande</h2>
<p>Til et par toast eller et stykke kyllingebryst er kontaktgrillen klart mere sparsom end <a href="/ovn/">ovnen</a>. Testundtipps.de regner et kyllingebryst i en ny ovn i energiklasse A til 0,49 kWh, i en ovn i klasse B til 0,68 kWh og i en ældre ovn til over 1 kWh, mod 0,41 kWh i kontaktgrillen – og grillens tal gælder bøffer i to omgange. Til toast er forskellen endnu større, fordi ovnen skal varme et helt ovnrum op for to skiver brød.</p>
<p>En pande på en kogeplade ligger tættere på grillen. En elkogeplade i 20 minutter er i samme beregning sat til 0,33 kWh, og på induktion er tallet lavere. Til ristet brød uden fyld er en <a href="/broedrister/">brødrister</a> den mest sparsomme af de apparater, der er nævnt her – omkring 0,1 kWh for fem minutter – og en <a href="/airfryer/">airfryer</a> kan også lave toast, men den skal varme mere luft op end grillens plader.</p>

<h2>Hvornår på døgnet bruges grillen?</h2>
<p>Toast er typisk frokost eller en hurtig aftensmad. Frokosten ligger heldigt: midt på dagen er elprisen ofte lavere end om aftenen, især på solrige dage. Bruges grillen til aftensmaden, ligger forbruget i de dyreste timer, men med et par tiendedele kWh pr. gang er det en lille udgift. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Standby: kan et toastjern bruge mere i stikket end ved brug?</h2>
<p>Et simpelt toastjern uden afbryder er enten tændt eller trukket ud af stikket. Kontaktgrills med tænd/sluk-knap, display eller digital temperatur kan have et standbyforbrug. Testundtipps.de regner et eksempel med 1 W hele året og kommer til 8,8 kWh – omtrent halvdelen af, hvad grillen bruger til at lave toast to gange om ugen. EU's regler for husholdningsapparater holder standby under én watt, men det er stadig nemmere at tage stikket ud, når grillen står i skabet.</p>
<p>Husk også, at et toastjern uden afbryder bliver ved med at holde pladerne varme, hvis det står i stikket efter brug. Så bruger det strøm hele tiden, indtil nogen opdager det.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Lav alle toast i træk</strong>, mens pladerne er varme – forvarmningen er den største post.</li>
<li><strong>Hav toasten klar</strong>, før grillen tændes, så den ikke står og venter.</li>
<li><strong>Vælg størrelse efter brug</strong> – til én person er et lille toastjern mere sparsomt end en stor kontaktgrill.</li>
<li><strong>Luk låget</strong> mellem omgangene, så pladerne holder på varmen.</li>
<li><strong>Tag stikket ud</strong> efter brug, især på modeller uden afbryder.</li>
<li><strong>Brug grillen i stedet for ovnen</strong> til kyllingebryst, grøntsager og små portioner.</li>
</ol>
<p>Laver du vafler til desserten, bruger et <a href="/vaffeljern/">vaffeljern</a> strøm på samme måde: forvarmning og derefter termostat. Til større mængder kød og grøntsager er en <a href="/elgrill/">elgrill</a> på terrassen eller bordet det næste skridt op.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en sandwichgrill?",
      answer:
        "Typisk 0,1–0,2 kWh for to toast inklusive forvarmning, beregnet ud fra effekt og termostat. Det koster omkring {{kr 0,1-0,2}} ved månedens elpris. Bøffer i to omgange bruger omkring 0,41 kWh.",
    },
    {
      question: "Hvor mange watt har et toastjern?",
      answer:
        "Et klassisk toastjern har typisk 700–900 W, mens kontaktgrills og paninigrills har 1.000–2.000 W. Den kraftige grill bliver hurtigere varm, så forbruget pr. gang er ikke dobbelt så stort.",
    },
    {
      question: "Er en kontaktgrill billigere end ovnen?",
      answer:
        "Ja, til små portioner. Et kyllingebryst er beregnet til 0,49 kWh i en ny ovn i klasse A og over 1 kWh i en ældre ovn, mod 0,41 kWh for bøffer i to omgange på en kontaktgrill. Til toast er forskellen endnu større.",
    },
    {
      question: "Hvad koster forvarmningen af en sandwichgrill?",
      answer:
        "Omkring 0,13 kWh på en kontaktgrill på 2.000 W, eller {{kr 0,13}} ved månedens elpris. Det er to tredjedele af forbruget for to sandwich, så det kan betale sig at lave alle toast i træk.",
    },
    {
      question: "Hvad bruger en sandwichgrill om året?",
      answer:
        "Med toast to gange om ugen omkring 18 kWh om året, eller {{kr 18}} ved månedens elpris. Med tre gange om ugen og større retter 30–60 kWh.",
    },
  ],
  relatedSlugs: ["vaffeljern", "broedrister", "elgrill", "ovn", "airfryer"],
  sources: [
    { name: "testundtipps.de — Kontaktgrill Stromverbrauch (beregning, aug. 2026)", url: "https://testundtipps.de/kueche-lifestyle/kuechengeraete/kontaktgrill/kontaktgrill-stromverbrauch" },
    { name: "Stiftung Warentest — Kontaktgrills im Test (10 klapgrills fra 1.800 W, nov. 2026; måleværdier bag betalingsmur)", url: "https://www.test.de/Kontaktgrills-im-Test-5391139-0/" },
  ],
  calculatorConfig: {
    title: "Sandwichgrill forbrugsberegner",
    options: [
      { label: "Toastjern 750 W, 2 toast", kwhPerUse: 0.1 },
      { label: "Kontaktgrill 1.000 W, 2 sandwich", kwhPerUse: 0.17 },
      { label: "Kontaktgrill 2.000 W, 2 sandwich", kwhPerUse: 0.2 },
      { label: "Kontaktgrill 2.000 W, bøffer i to omgange", kwhPerUse: 0.41 },
    ],
    usageLabel: "Antal gange pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 2,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-12-01",
  updated: "2026-11-22",
};

export default sandwichgrill;
