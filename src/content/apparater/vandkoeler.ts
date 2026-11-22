import type { ApplianceData } from "@/lib/types";

/**
 * Vandkøler / vanddispenser (flaske på toppen eller tilsluttet vandrør) — ENERGY STAR (USA, krav gældende fra 23. marts 2022, målt
 * »On Mode with No Water Draw«): kun kold eller kogende/kold ≤ 0,16 kWh/døgn; varm og kold med tank, lille kapacitet ≤ 0,68, stor
 * ≤ 0,80 kWh/døgn; varm og kold »on demand« ≤ 0,18 kWh/døgn; certificerede er ca. 22 % mere effektive end standardmodeller.
 * Standardmodel med varm tank ≈ 0,68 ÷ 0,78 ≈ 0,87 → 0,9 kWh/døgn er vores omregning. Tapning (1 l fra 10 til 90 °C ≈ 0,09 kWh)
 * er regnet. Intet EU-energimærke for vandkølere. Beregneren: kWh pr. døgn, dage i drift om året × 1.
 */
const vandkoeler: ApplianceData = {
  slug: "vandkoeler",
  meta: {
    category: "koekken",
    usage: "always-on",
    hasEuLabel: false,
    motif: "elkedel",
    synonyms: ["vandkøler", "vandkoeler", "vanddispenser", "vand dispenser", "water cooler", "vandautomat", "vandkøler med varmt vand", "vandkøler kontor", "drikkevandskøler", "vanddunk dispenser"],
  },
  name: "Vandkøler",
  article: "en",
  title: "Vandkøler strømforbrug (2026) → kold og varmt vand i kWh",
  description:
    "Se hvor meget strøm en vandkøler eller vanddispenser bruger i døgnet – kun koldt vand eller både koldt og varmt – og hvad tanken med varmt vand koster.",
  heading: "Strømforbrug for en vandkøler: kWh i døgnet og pris om året",
  quickAnswer:
    "En vandkøler med både koldt og varmt vand i tanke bruger typisk 0,7–0,9 kWh i døgnet, også når ingen tapper. Det koster cirka {{kr 0,8}} i døgnet og omkring {{kr 290}} om året ved månedens elpris. En model med kun koldt vand eller med varmt vand efter behov bruger under 0,2 kWh i døgnet.",
  kwhRange: [40, 450],
  typicalKwh: 290,
  wattage: 500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.98, 0.97, 0.98, 0.99, 1.01, 1.04, 1.06, 1.05, 1.0, 0.98, 0.97, 0.97],
  content: `<h2>To tanke, der holdes kolde og varme døgnet rundt</h2>
<p>En vandkøler – også kaldet vanddispenser eller vandautomat – står på gulvet eller køkkenbordet med en stor vanddunk på toppen eller er tilsluttet vandrøret. De fleste har to haner: én med koldt vand fra en lille køletank og én med varmt vand fra en tank med et varmelegeme. Begge tanke holdes på temperatur hele døgnet, så der altid er koldt og varmt vand klar. Det er det, der koster: forbruget går ikke til de glas, der tappes, men til at holde tankene kolde og varme, mens ingen bruger dem.</p>
<p>Varmtvandstanken er den store post. Den holder typisk vandet på 85–95 grader til te og kaffe, og den mister hele tiden varme til rummet. Køletanken skal kun holde vandet på 5–10 grader og bruger meget mindre.</p>

<h2>Forbrug i døgnet efter type</h2>
<p>Der er intet EU-energimærke for vandkølere, men det amerikanske ENERGY STAR-program har krav, der viser, hvor de effektive modeller ligger. Forbruget måles i døgnet, mens kølerne står tændt uden at blive brugt. Kravene gælder fra marts 2022.</p>
<table>
<thead><tr><th>Type vandkøler</th><th>kWh i døgnet</th><th>Pris i døgnet</th><th>kWh om året</th></tr></thead>
<tbody>
<tr><td>Kun koldt vand (ENERGY STAR-krav)</td><td>0,16 kWh</td><td>{{kr 0,16}}</td><td>58 kWh</td></tr>
<tr><td>Koldt og varmt efter behov, uden varm tank (ENERGY STAR-krav)</td><td>0,18 kWh</td><td>{{kr 0,18}}</td><td>66 kWh</td></tr>
<tr><td>Koldt og varmt med tanke, lille (ENERGY STAR-krav)</td><td>0,68 kWh</td><td>{{kr 0,68}}</td><td>248 kWh</td></tr>
<tr><td>Koldt og varmt med tanke, stor (ENERGY STAR-krav)</td><td>0,8 kWh</td><td>{{kr 0,8}}</td><td>292 kWh</td></tr>
<tr><td>Almindelig model med tanke, ikke certificeret (vores omregning)</td><td>0,9 kWh</td><td>{{kr 0,9}}</td><td>329 kWh</td></tr>
</tbody>
</table>
<p>ENERGY STAR oplyser, at certificerede vandkølere i gennemsnit er omkring 22 procent mere effektive end standardmodeller. Regner man den vej tilbage fra kravet til en lille model med tanke, bruger en almindelig model omkring 0,87 kWh i døgnet. Vi har afrundet til 0,9 kWh, og det er vores omregning, ikke en måling.</p>

<h2>Hvad koster tapningen?</h2>
<p>Tallene ovenfor er uden tapning. Når du tapper varmt vand, kommer der koldt vand ind i tanken, og det skal varmes op. At varme en liter vand fra 10 til 90 grader kræver omkring 0,09 kWh, eller {{kr 0,09}} ved månedens elpris – det samme, som hvis vandet blev kogt i en <a href="/elkedel/">elkedel</a>. Koldt vand er billigere: at køle en liter fra vandhanens temperatur ned til 8 grader kræver kun en lille smule strøm. Det er altså tomgangen, ikke brugen, der bestemmer regningen for en vandkøler i et hjem.</p>
<p>På en arbejdsplads, hvor der tappes mange liter om dagen, fordeler tomgangen sig på mange flere kopper. I et hjem med et par kopper te om dagen er en vandkøler med varm tank derimod en dyr måde at få varmt vand på.</p>

<h2>Vandkøler, elkedel eller kogende vand-hane?</h2>
<p>En elkedel bruger kun strøm, når den koger, og koger kun det vand, du skal bruge. Koger du en liter fire gange om dagen, bliver det omkring 0,4 kWh i døgnet – under halvdelen af en vandkøler med varm tank. En <a href="/quooker/">kogende vand-hane</a> har også en tank, der holdes varm hele døgnet, men den står i en isoleret beholder under køkkenbordet – se, hvad den bruger i døgnet, på vores side om kogende vand-hanen.</p>
<p>Til koldt vand er køleskabet den sparsomme løsning: en kande vand i <a href="/koeleskab/">køleskabet</a> koster stort set ingenting ekstra. En vandkøler med kun koldt vand er rimelig at bruge, hvis der drikkes meget vand, men vælg en model uden varm tank, hvis du ikke bruger det varme vand.</p>

<h2>Sluk for det varme vand</h2>
<p>Mange vandkølere har en kontakt bag på, der slukker for varmtvandstanken hver for sig. Bruger du kun det kolde vand, så sluk for den varme del. Forskellen er stor: en model med kun koldt vand må bruge 0,16 kWh i døgnet efter ENERGY STAR-kravet, mens modeller med varm tank må bruge 0,68–0,8 kWh. Forskellen er 190–230 kWh om året, svarende til {{kr 190-230}} ved månedens elpris.</p>
<p>Sluk også for hele køleren, når du er på ferie, eller når den står i et sommerhus uden for sæsonen. Den bruger strøm til at holde tankene på temperatur, også når der ikke er nogen hjemme.</p>

<h2>Hvornår på døgnet?</h2>
<p>En vandkøler kører hele døgnet, så forbruget følger døgnets gennemsnitspris og kan ikke flyttes til de billige timer. Det eneste, der kan styres, er, hvornår varmtvandstanken er tændt. Med en smart stikkontakt kan hele køleren slukkes om natten, hvis ingen har brug for vand, men så skal den varme tank varmes op igen om morgenen. Boksen længere oppe på siden viser døgnets gennemsnitspris i dag.</p>

<h2>Sådan holder du vandkølerens forbrug nede</h2>
<ol>
<li><strong>Sluk for varmtvandstanken</strong>, hvis du kun drikker koldt vand.</li>
<li><strong>Vælg en model uden varm tank</strong> eller med varmt vand efter behov.</li>
<li><strong>Stil køleren væk fra sol og varme</strong>, og lad der være luft bag den.</li>
<li><strong>Sluk den</strong>, når du er væk i flere dage.</li>
<li><strong>Kog vand i elkedlen</strong> til te og kaffe i stedet for at holde en tank varm hele døgnet.</li>
</ol>
<p>Laver du cafe latte, kan du se, hvad mælken koster på vores side om <a href="/maelkeskummer/">mælkeskummeren</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en vandkøler?",
      answer:
        "En vandkøler med både koldt og varmt vand i tanke bruger typisk 0,7–0,9 kWh i døgnet, også uden tapning. Det koster cirka {{kr 0,8}} i døgnet ved månedens elpris. En model med kun koldt vand bruger omkring 0,16 kWh.",
    },
    {
      question: "Hvad koster en vandkøler om året?",
      answer:
        "En model med varm og kold tank bruger omkring 290 kWh om året, hvilket koster cirka {{kr 290}} ved månedens elpris. Med kun koldt vand bliver det omkring 58 kWh.",
    },
    {
      question: "Kan jeg spare strøm ved at slukke for det varme vand?",
      answer:
        "Ja, det er den største besparelse. ENERGY STAR-kravet er 0,16 kWh i døgnet for kun koldt vand mod 0,68–0,8 kWh for modeller med varm tank. Forskellen er 190–230 kWh om året.",
    },
    {
      question: "Er en vandkøler dyrere end en elkedel?",
      answer:
        "Ja, i et hjem. En elkedel bruger kun strøm, når den koger. Fire liter kogt vand om dagen er omkring 0,4 kWh, under halvdelen af en vandkøler med varm tank, der står tændt hele døgnet.",
    },
    {
      question: "Har vandkølere et energimærke?",
      answer:
        "Nej, der er intet EU-energimærke for vandkølere. Det amerikanske ENERGY STAR-program har krav til forbruget i døgnet, som kan bruges som målestok.",
    },
  ],
  relatedSlugs: ["quooker", "elkedel", "koeleskab", "fadoelsanlaeg", "maelkeskummer"],
  sources: [
    { name: "ENERGY STAR — Water Coolers: krav til kWh i døgnet (gældende fra 23. marts 2022)", url: "https://www.energystar.gov/products/water_coolers" },
  ],
  calculatorConfig: {
    title: "Vandkøler forbrugsberegner",
    options: [
      { label: "Kun koldt vand", kwhPerUse: 0.16 },
      { label: "Koldt og varmt efter behov", kwhPerUse: 0.18 },
      { label: "Koldt og varmt med tanke, lille", kwhPerUse: 0.68 },
      { label: "Koldt og varmt med tanke, stor", kwhPerUse: 0.8 },
      { label: "Almindelig model med tanke", kwhPerUse: 0.9 },
    ],
    usageLabel: "Dage i drift om året",
    usageUnit: "dage",
    usageMin: 10,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-05",
  updated: "2026-11-22",
};

export default vandkoeler;
