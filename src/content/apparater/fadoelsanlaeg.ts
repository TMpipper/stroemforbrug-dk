import type { ApplianceData } from "@/lib/types";

/**
 * Fadølsanlæg til hjemmet (PerfectDraft, 6 l fustage) — PerfectDraft (producentens blog): ca. 0,8 kWh i døgnet afhængigt af
 * rumtemperatur, øllet holdes ved ca. 3 °C; anden blog: 40–70 W og 0,8–1,7 kWh i døgnet, Pro op til 130 W. Expert Reviews' test af
 * PerfectDraft Pro: original-modellen i gennemsnit 40 W (top 70 W), Pro maks. 130 W og gennemsnit 72 W ved 25 °C; Pro køler en fustage
 * fra ca. 24 °C på ca. 7 timer (original 12+ timer), forkølet i køleskab under 3 timer; 3–7 °C på maskinen; en fustage holdt ca. 3 uger;
 * deres køleskab til sammenligning 0,31 kWh/døgn. Pro ≈ 1,7 kWh/døgn og 1,0 kWh/døgn ved 40 W er regnet (W × 24 t).
 * Driftsdage om året (150) er vores skøn. Beregneren: kWh pr. døgn, dage i drift om året × 1.
 */
const fadoelsanlaeg: ApplianceData = {
  slug: "fadoelsanlaeg",
  meta: {
    category: "koekken",
    usage: "always-on",
    hasEuLabel: false,
    motif: "koeleskab",
    synonyms: ["fadølsanlæg", "fadoelsanlaeg", "fadøl anlæg", "perfectdraft", "perfect draft", "philips perfectdraft", "fadølsmaskine", "ølanlæg", "fadøl derhjemme", "beer tap", "fadølsanlæg hjemme"],
  },
  name: "Fadølsanlæg",
  article: "et",
  title: "Fadølsanlæg strømforbrug (2026) → kWh i døgnet og pr. fad",
  description:
    "Se hvor meget strøm et fadølsanlæg som PerfectDraft bruger i døgnet og pr. fustage, hvad rummets temperatur betyder, og hvad en sommer med fadøl koster.",
  heading: "Strømforbrug for et fadølsanlæg: kWh i døgnet og pris om året",
  quickAnswer:
    "Et fadølsanlæg til hjemmet som PerfectDraft bruger omkring 0,8–1,7 kWh i døgnet, så længe det står tændt, alt efter model og rummets temperatur. Et døgn koster cirka {{kr 0,8-1,7}} ved månedens elpris, og en fustage, der holder tre uger, omkring {{kr 17}}. Står anlægget tændt 150 dage om året, bliver det cirka 120 kWh, eller {{kr 120}}.",
  kwhRange: [20, 620],
  typicalKwh: 120,
  wattage: 70,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.85, 0.85, 0.9, 0.95, 1.05, 1.15, 1.25, 1.2, 1.0, 0.9, 0.9, 1.0],
  content: `<h2>Et lille køleskab til én fustage</h2>
<p>Et fadølsanlæg til hjemmet er i bund og grund et lille køleskab, der er bygget til én fustage, med en hane på toppen. Det mest udbredte er PerfectDraft, der tager fustager på 6 liter. Anlægget køler øllet ned til omkring 3 grader og holder det der, så længe fustagen sidder i. Det bruger strøm hele døgnet, også når ingen tapper, ligesom et køleskab.</p>
<p>Derfor giver det ikke mening at tale om forbrug pr. glas. Det, der tæller, er, hvor mange døgn anlægget står tændt. En fustage på 6 liter er cirka 18 almindelige glas, og har du gæster en weekend, er den tømt hurtigt. Drikker du et glas eller to om aftenen, kan den samme fustage sidde i flere uger, og så er det strømmen til køling, der løber op.</p>

<h2>Forbrug i døgnet efter model og rum</h2>
<p>PerfectDraft oplyser selv, at anlægget bruger omkring 0,8 kWh i døgnet, afhængigt af rummets temperatur, og i et andet indlæg 40–70 W og 0,8–1,7 kWh i døgnet. Det britiske testmagasin Expert Reviews har målt forbruget: den oprindelige model brugte i gennemsnit 40 W med toppe på 70 W, mens den større PerfectDraft Pro brugte op til 130 W og i gennemsnit 72 W ved 25 grader i rummet.</p>
<table>
<thead><tr><th>Anlæg og rum</th><th>kWh i døgnet</th><th>Pris i døgnet</th><th>Pris pr. fustage (3 uger)</th></tr></thead>
<tbody>
<tr><td>PerfectDraft, køligt rum (producentens tal)</td><td>0,8 kWh</td><td>{{kr 0,8}}</td><td>{{kr 17}}</td></tr>
<tr><td>PerfectDraft, målt gennemsnit 40 W</td><td>1,0 kWh</td><td>{{kr 1}}</td><td>{{kr 21}}</td></tr>
<tr><td>PerfectDraft Pro ved 25 grader, målt gennemsnit 72 W</td><td>1,7 kWh</td><td>{{kr 1,7}}</td><td>{{kr 36}}</td></tr>
</tbody>
</table>
<p>Prisen pr. fustage er regnet på tre uger, som Expert Reviews' fustage holdt i testen. Til sammenligning brugte et almindeligt <a href="/koeleskab/">køleskab</a> i samme test 0,31 kWh i døgnet, selv om det rummer langt mere. Et fadølsanlæg er altså ikke et sparsomt køleapparat. Det skal holde øllet koldere end et køleskab, og efter vores vurdering er det et lille apparat med meget overflade i forhold til de 6 liter, det rummer.</p>

<h2>Nedkølingen af en ny fustage</h2>
<p>Når en ny fustage sættes i, skal den køles fra stuetemperatur ned til omkring 3 grader. Ifølge Expert Reviews tog det cirka 7 timer for Pro-modellen fra omkring 24 grader og over 12 timer for den oprindelige model. Har du plads, så stil fustagen i køleskabet dagen før. Så var Pro-modellen klar på under 3 timer i testen, og en stor del af nedkølingen er klaret af køleskabet, der gør det mere effektivt. Det er vores skøn, at det sparer omkring 0,3–0,5 kWh pr. fustage, og samtidig kan du tappe hurtigere.</p>

<h2>Rummets temperatur betyder meget</h2>
<p>Et fadølsanlæg skal flytte varmen fra fustagen ud i rummet. Jo varmere rummet er, jo mere skal kompressoren eller køleelementet arbejde. PerfectDraft skriver selv, at et varmt rum øger forbruget, og forskellen mellem 0,8 og 1,7 kWh i døgnet er netop forskellen mellem en kølig stue og en varm terrasse eller et køkken med sol. Stil anlægget i skygge og væk fra ovn og opvaskemaskine, og lad der være luft omkring det.</p>
<p>Temperaturen på øllet kan typisk stilles mellem 3 og 7 grader på maskinen. Hver grad varmere øl betyder lidt mindre arbejde, og mange foretrækker alligevel 5–6 grader til de mere smagfulde øltyper.</p>

<h2>Hvad koster en sommer med fadøl?</h2>
<p>Står anlægget tændt i sommerhalvåret og til jul – omkring 150 dage om året, som er vores skøn for en typisk husstand – bliver det cirka 120 kWh, eller {{kr 120}} ved månedens elpris. Står det tændt hele året, bliver det 290–620 kWh, afhængigt af model og rum. Det er mange gange, hvad Expert Reviews' køleskab brugte på et år, så sluk for anlægget, når fustagen er tom, og der ikke står en ny klar.</p>

<p>Til sammenligning koster det næsten intet ekstra at køle flasker eller dåser i det køleskab, du allerede har. Køleskabet kører alligevel, og når øllet først er koldt, skal det kun holdes koldt. Det er vores skøn, at seks liter øl på flaske i køleskabet koster under en tiendedel af den strøm, et fadølsanlæg bruger på tre uger. Skal øllet med i haven eller på tur, er en <a href="/koeleboks/">køleboks</a> med strøm et andet bud, men den kører også konstant, mens den er tændt.</p>

<h2>Hvornår på døgnet?</h2>
<p>Et fadølsanlæg kører hele døgnet, så det kan ikke flyttes til de billige timer. Det følger døgnets gennemsnitspris. Det eneste, der kan flyttes, er nedkølingen af en ny fustage: sæt den i om formiddagen eller natten, så de første timers hårde arbejde ligger uden for aftenens dyreste timer. Boksen længere oppe på siden viser døgnets gennemsnit i dag.</p>

<h2>Sådan holder du fadølsanlæggets forbrug nede</h2>
<ol>
<li><strong>Forkøl fustagen</strong> i køleskabet, før den sættes i anlægget.</li>
<li><strong>Stil anlægget køligt</strong> og i skygge med luft omkring.</li>
<li><strong>Sluk, når fustagen er tom</strong>, og der ikke skal tappes i flere dage.</li>
<li><strong>Vælg 5–6 grader</strong> i stedet for 3, hvis øllet tåler det.</li>
<li><strong>Tøm fustagen inden for få uger</strong> – det er antallet af døgn, der koster, ikke antallet af glas.</li>
</ol>
<p>Skal der også være is i drinksene, kan du se, hvad det koster på vores side om <a href="/isterningmaskine/">isterningmaskinen</a>. Har du et <a href="/vinkoeleskab/">vinkøleskab</a> til flaskerne, kører det også hele døgnet og kan sammenlignes direkte.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en PerfectDraft?",
      answer:
        "Omkring 0,8–1,7 kWh i døgnet. Producenten oplyser cirka 0,8 kWh, og Expert Reviews målte et gennemsnit på 40 W for den oprindelige model og 72 W for Pro-modellen ved 25 grader. Et døgn koster {{kr 0,8-1,7}} ved månedens elpris.",
    },
    {
      question: "Hvad koster en fustage i strøm?",
      answer:
        "Holder fustagen tre uger, bliver det omkring 17–36 kWh, alt efter model og rum, eller {{kr 17-36}} ved månedens elpris. Jo hurtigere den tømmes, jo mindre koster den.",
    },
    {
      question: "Hvor lang tid tager det at køle en ny fustage?",
      answer:
        "Expert Reviews målte cirka 7 timer for PerfectDraft Pro fra omkring 24 grader og over 12 timer for den oprindelige model. En fustage fra køleskabet var klar på under 3 timer.",
    },
    {
      question: "Bruger et fadølsanlæg mere strøm end et køleskab?",
      answer:
        "Ja, i døgnet. Expert Reviews' køleskab brugte 0,31 kWh i døgnet mod 0,8–1,7 kWh for fadølsanlægget. Anlægget køler koldere, og det er et lille apparat med meget overflade i forhold til indholdet.",
    },
    {
      question: "Hvad koster et fadølsanlæg i strøm om året?",
      answer:
        "Står det tændt 150 dage om året, bliver det omkring 120 kWh, hvilket koster cirka {{kr 120}} ved månedens elpris. Tændt hele året kan det blive 290–620 kWh.",
    },
  ],
  relatedSlugs: ["koeleskab", "vinkoeleskab", "koeleboks", "isterningmaskine", "vandkoeler"],
  sources: [
    { name: "PerfectDraft — How much electricity does a PerfectDraft machine use? (ca. 0,8 kWh i døgnet)", url: "https://www.perfectdraft.com/en-gb/blog/post/how-much-electricity-perfectdraft-machine-uses" },
    { name: "PerfectDraft — How much electricity does a PerfectDraft use? (40–70 W, 0,8–1,7 kWh, Pro op til 130 W)", url: "https://www.perfectdraft.com/en-gb/blog/post/how-much-electricity-perfectdraft-use" },
    { name: "Expert Reviews — PerfectDraft Pro review (målt effekt, nedkøling, fustage)", url: "https://www.expertreviews.co.uk/home-garden/kitchen/perfectdraft-pro-review" },
  ],
  calculatorConfig: {
    title: "Fadølsanlæg forbrugsberegner",
    options: [
      { label: "PerfectDraft, køligt rum", kwhPerUse: 0.8 },
      { label: "PerfectDraft, gennemsnit 40 W", kwhPerUse: 1.0 },
      { label: "PerfectDraft Pro ved 25 grader", kwhPerUse: 1.7 },
    ],
    usageLabel: "Dage i drift om året",
    usageUnit: "dage",
    usageMin: 10,
    usageMax: 365,
    usageDefault: 150,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-05",
  updated: "2026-11-22",
};

export default fadoelsanlaeg;
