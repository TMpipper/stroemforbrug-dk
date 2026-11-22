import type { ApplianceData } from "@/lib/types";

/**
 * Luftrenser — intet EU-energimærke. Tal: IKEA STARKVIND (1,9–2 W laveste trin, 25/33 W højeste, CADR 50–270 m³/t),
 * Philips 800-serien AC0820 (20 W, CADR 190 m³/t, standby ≤ 0,5 W), Teknologisk Institut/Tænk (29 luftrensere, ingen
 * klar sammenhæng mellem effekt og CADR; Tænk 2024: filtre, udluftning er det vigtigste).
 */
const luftrenser: ApplianceData = {
  slug: "luftrenser",
  meta: {
    category: "klima",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["luftrenser", "luftrensere", "air purifier", "luftfilter", "hepa-filter", "luftrenser allergi", "ikea starkvind", "philips luftrenser"],
  },
  name: "Luftrenser",
  title: "Luftrenser strømforbrug (2026) → watt, kWh og døgndrift",
  description:
    "Se hvor meget strøm en luftrenser bruger på laveste og højeste trin, hvad døgndrift koster om året, og hvorfor filtrene ofte koster mere end strømmen.",
  heading: "Strømforbrug for en luftrenser: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En luftrenser til et almindeligt rum bruger typisk 2–5 W på laveste trin og 20–35 W på højeste. Kører den 12 timer om dagen i automatisk tilstand, bruger den omkring 50 kWh om året, hvilket koster cirka {{kr 53}} ved månedens elpris. På laveste trin hele døgnet er det kun {{kr 18}} om året.",
  kwhRange: [5, 300],
  typicalKwh: 53,
  wattage: 25,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.05, 1.0, 1.05, 1.15, 1.15, 1.05, 0.95, 0.9, 0.85, 0.9, 0.95, 1.0],
  content: `<h2>Hvor meget strøm bruger en luftrenser?</h2>
<p>En luftrenser er i bund og grund en ventilator, der trækker rummets luft gennem et filter. Det er ventilatoren, der bruger strømmen, og den bruger meget lidt på de lave trin og en del mere på de høje. IKEA oplyser for sin STARKVIND, at den bruger omkring 2 W på laveste hastighed og 25–33 W på højeste. Philips' kompakte 800-serie bruger højst 20 W. Det er typisk for luftrensere til et soveværelse eller en stue: få watt, når den kører stille, og 20–35 W, når den skal rense hurtigt.</p>
<p>Fordi mange lader luftrenseren køre mange timer om dagen – eller hele døgnet – er det årsforbruget, der er interessant. På laveste trin hele døgnet bruger en STARKVIND omkring 18 kWh om året, svarende til {{kr 18}}. I automatisk tilstand, hvor den skruer op, når sensoren måler partikler, og ellers kører lavt, er et realistisk gennemsnit 10–15 W. Med 12 timer om dagen bliver det omkring 50 kWh, eller {{kr 53}} om året. Kører den på højeste trin døgnet rundt, når en stor model op over 250 kWh.</p>

<h2>Forbrug efter hastighed</h2>
<table>
<thead><tr><th>Indstilling</th><th>Typisk effekt</th><th>Pris pr. døgn</th><th>Pris om året ved døgndrift</th></tr></thead>
<tbody>
<tr><td>Laveste trin / nattilstand</td><td>2 W</td><td>{{kr 0,048}}</td><td>{{kr 17,5}}</td></tr>
<tr><td>Automatisk tilstand (gennemsnit)</td><td>10–15 W</td><td>{{kr 0,24-0,36}}</td><td>{{kr 88-131}}</td></tr>
<tr><td>Højeste trin, kompakt model</td><td>20 W</td><td>{{kr 0,48}}</td><td>{{kr 175}}</td></tr>
<tr><td>Højeste trin, mellemstor model</td><td>25–33 W</td><td>{{kr 0,6-0,79}}</td><td>{{kr 219-289}}</td></tr>
</tbody>
</table>
<p>Forskellen mellem laveste og højeste trin er en faktor 10–15. Ventilatorens effekt stiger meget hurtigere end luftmængden, når den skruer op, så det koster uforholdsmæssigt meget at køre på max. Til gengæld renser den på max mange gange hurtigere – STARKVIND leverer 50–55 m³ ren luft i timen på laveste trin og 240–270 m³ på højeste.</p>

<h2>CADR pr. watt: det tal, der siger noget</h2>
<p>Luftrensere har ikke noget EU-energimærke, og producenterne oplyser deres tal på mange forskellige måder. Det mest brugbare tal er CADR (clean air delivery rate): hvor mange kubikmeter ren luft luftrenseren leverer i timen. Del CADR med watt, og du får et mål for, hvor meget rensning du får for strømmen. Teknologisk Institut skriver netop, at man skal se på strømforbruget ud over rensehastigheden, når man vælger luftrenser.</p>
<p>Teknologisk Institut testede i 2022 29 luftrensere sammen med Tænk og fandt ingen klar sammenhæng mellem strømforbrug og CADR. Især blandt de mellemstore modeller med en CADR på 200–300 m³ i timen var der stor forskel på, hvor meget strøm de brugte til samme rensning. To luftrensere, der renser lige godt, kan altså have vidt forskelligt forbrug. Philips' 800-serie leverer 190 m³ i timen for 20 W, svarende til omkring 9,5 m³ pr. watt; STARKVIND leverer 270 m³ for 33 W med kun partikelfilter, omkring 8 m³ pr. watt.</p>

<h2>Filtrene koster mere end strømmen</h2>
<p>For de fleste luftrensere er strømmen den mindste udgift. Tænk skriver, at filtre ofte koster flere hundrede kroner stykket at købe, og nogle over tusind, og at de fleste partikelfiltre skal skiftes mindst hvert halve år i et rum, hvor der ryges. Den opfølgende test fra 2024 viste desuden, at kulfiltre kan afgive en stor del af den gas, de har opsamlet, igen – i ét tilfælde 81 procent.</p>
<p>Sammenlign derfor både strømforbrug og filterpris, før du køber. En luftrenser med lavt forbrug, men dyre filtre, der skal skiftes ofte, er ikke billig i drift. Tjek også, om filtrene stadig kan købes. Tænk opfordrer producenterne til at holde filtrene på lager i mange år, for en luftrenser uden filter er ingenting værd.</p>

<h2>UV-lys, ionisator og andre ekstra funktioner</h2>
<p>Mange luftrensere har mere end en ventilator og et filter. UV-C-lys, ionisatorer og elektrostatiske filtre bruger også strøm, og Teknologisk Institut skriver, at de fleste af de testede luftrensere brugte el til sådanne rensningsteknologier ud over ventilatoren. Det er sjældent meget, men det kommer oven i. Teknologisk Institut undersøgte også, om luftrenserne dannede uønskede biprodukter i luften. Har modellen en ionisator eller et UV-lys, du kan slå fra, og har du ikke brug for den, er det en lille strømbesparelse.</p>

<h2>Standby og smarte funktioner</h2>
<p>På standby bruger en luftrenser typisk 0,5 W eller mindre – Philips oplyser højst 0,5 W for 800-serien. Det giver under 5 kWh om året, svarende til {{kr 4,4}}. Modeller med wifi og app har et lidt højere netværksstandbyforbrug, men det er stadig få kWh om året. Det er driften, ikke standby, der bestemmer forbruget.</p>

<h2>Hvornår på døgnet bruger luftrenseren strøm?</h2>
<p>En luftrenser bruges, når der er noget at rense – om natten i soveværelset i pollensæsonen, efter madlavning eller når naboens brændeovn ryger. Den kan ikke rigtig flyttes til billigere timer, og forbruget pr. time er så lille, at forskellen mellem en dyr og en billig time er under én øre på laveste trin. Det, der flytter regningen, er hastigheden: kør på max i en halv time, når luften er dårlig, og lad den derefter køre lavt eller i automatisk tilstand.</p>

<h2>Har du overhovedet brug for en luftrenser?</h2>
<p>»Du får ikke et godt indeklima ved alene at have en luftrenser. Det bedste er simpelthen at lufte ud derhjemme,« siger Forbrugerrådet Tænks testansvarlige. En luftrenser fjerner hverken CO2 eller fugt, og den skifter ikke luften – den renser den samme luft igen og igen. Udluftning gør begge dele på få minutter og koster ingen strøm, mens luftrenseren skal køre i timevis for at rense et helt rum flere gange. Brug den derfor som et supplement i perioder, hvor luften udenfor er dårlig, eller hvor du ikke kan lufte ud. Har du allergi eller astma, eller bor du ved en trafikeret vej, kan en luftrenser med HEPA-filter hjælpe på partiklerne – men den erstatter ikke udluftning.</p>
<p>Har huset et <a href="/ventilationsanlaeg/">ventilationsanlæg med varmegenvinding</a>, filtrerer det allerede udeluften og skifter luften i hele huset for 30–90 W. Det er ofte en bedre løsning end flere luftrensere, hvis du alligevel overvejer ventilation. Er problemet fugt og ikke partikler, er det en <a href="/affugter/">affugter</a>, du har brug for – og er luften for tør om vinteren, en <a href="/luftfugter/">luftfugter</a>.</p>

<h2>Sådan holder du luftrenserens forbrug nede</h2>
<ol>
<li><strong>Brug automatisk tilstand</strong> – så kører den kun hurtigt, når sensoren måler noget.</li>
<li><strong>Vælg den rigtige størrelse</strong> – en luftrenser, der er for lille til rummet, skal køre på max hele tiden.</li>
<li><strong>Luk døren</strong> – luftrenseren renser ét rum, ikke hele huset.</li>
<li><strong>Skift eller rens forfiltret</strong> – et tilstoppet filter gør ventilatoren mindre effektiv.</li>
<li><strong>Sammenlign CADR pr. watt</strong> – to modeller med samme CADR kan have meget forskelligt forbrug.</li>
<li><strong>Sluk, når du lufter ud</strong> – det giver ingen mening at rense luft, der alligevel skiftes.</li>
</ol>
<p>En luftrenser bruger mindre end de fleste andre apparater, der kører mange timer. Til sammenligning bruger en <a href="/ventilator/">ventilator</a> 11–50 W, og en <a href="/router/">router</a>, der også kører døgnet rundt, bruger typisk mere om året end en luftrenser på laveste trin.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en luftrenser?",
      answer:
        "Typisk 2–5 W på laveste trin og 20–35 W på højeste for en luftrenser til et almindeligt rum. IKEA STARKVIND bruger 2 W lavest og 25–33 W højest, og Philips 800-serien højst 20 W.",
    },
    {
      question: "Hvad koster det at have en luftrenser kørende hele døgnet?",
      answer:
        "På laveste trin omkring 18 kWh om året, eller {{kr 18}}. I automatisk tilstand med et gennemsnit på 10–15 W bliver det {{kr 88-131}} om året, og på højeste trin døgnet rundt op til {{kr 289}}.",
    },
    {
      question: "Bruger en luftrenser meget strøm?",
      answer:
        "Nej, ikke sammenlignet med de fleste andre apparater. Selv med 12 timer om dagen i automatisk tilstand bruger den omkring 50 kWh om året, svarende til {{kr 53}}. Filtrene koster ofte mere end strømmen.",
    },
    {
      question: "Hvad betyder CADR?",
      answer:
        "CADR (clean air delivery rate) er, hvor mange kubikmeter ren luft luftrenseren leverer i timen. Del CADR med watt for at sammenligne, hvor meget rensning du får for strømmen. Teknologisk Institut fandt ingen klar sammenhæng mellem forbrug og CADR.",
    },
    {
      question: "Bruger luftrenseren strøm på standby?",
      answer:
        "Typisk 0,5 W eller mindre, altså under 5 kWh om året, svarende til {{kr 4,4}}. Modeller med wifi bruger lidt mere.",
    },
    {
      question: "Har luftrensere et energimærke?",
      answer:
        "Nej, der findes ikke et EU-energimærke for luftrensere. Sammenlign i stedet effekten i watt på højeste og laveste trin og CADR pr. watt.",
    },
  ],
  relatedSlugs: ["luftfugter", "affugter", "ventilationsanlaeg", "ventilator"],
  sources: [
    { name: "IKEA — STARKVIND luftrenser (effekt og CADR pr. hastighed)", url: "https://www.ikea.com/us/en/p/starkvind-air-purifier-white-00461949/" },
    { name: "Philips — 800 Series Air Purifier AC0820 (specifikationer)", url: "https://www.philips.com/c-p/AC0820_32/800-series-air-purifier" },
    { name: "Teknologisk Institut — Mobile Air Purifiers (test af 29 luftrensere, 2022)", url: "https://www.teknologisk.dk/_/media/85520%5FMobile%20Air%20Purifiers%20%2D%20%20Danish%20Technological%20Institute.pdf" },
    { name: "Forbrugerrådet Tænk — Luftrensere er dyre i drift og virker ikke så godt, som du tror", url: "https://taenk.dk/test/luftrensere/luftrenser-luftfilter" },
  ],
  calculatorConfig: {
    title: "Luftrenser forbrugsberegner",
    options: [
      { label: "Laveste trin / nattilstand (ca. 2 W)", kwhPerUse: 0.002 },
      { label: "Automatisk tilstand (ca. 12 W i snit)", kwhPerUse: 0.012 },
      { label: "Højeste trin, kompakt model (ca. 20 W)", kwhPerUse: 0.02 },
      { label: "Højeste trin, mellemstor model (ca. 33 W)", kwhPerUse: 0.033 },
    ],
    usageLabel: "Timer i drift pr. dag",
    usageUnit: "timer pr. dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 12,
    usageStep: 1,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-26",
  updated: "2026-11-22",
};

export default luftrenser;
