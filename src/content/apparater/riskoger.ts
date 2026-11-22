import type { ApplianceData } from "@/lib/types";

/**
 * Riskoger — producentens målte tal pr. kogning efter japansk standard: Tiger JBH-G102 (1 l) 140 Wh pr. kogning og
 * 19,1 Wh pr. time varmhold, JBH-G182 (1,8 l) 197 Wh og 26,1 Wh/time, JRT-A100 154 Wh og 16,5 Wh/time (alle Eco).
 * Stiftung Warentest (test.de, april 2026, 13 riskogere) regner årsforbruget på 2 × 200 g ris om ugen inkl. standby.
 * Gryde-sammenligningen bygger på Øko-Tests kartoffelmåling (0,22 kWh i gryde med låg på induktion) — vores skøn for ris.
 * Beregneren: kWh pr. kogning, antal kogninger pr. uge × 52. Intet EU-energimærke.
 */
const riskoger: ApplianceData = {
  slug: "riskoger",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["riskoger", "ris koger", "riskoger strømforbrug", "rice cooker", "riskogere", "elektrisk riskoger", "tiger riskoger", "zojirushi", "koge ris"],
  },
  name: "Riskoger",
  title: "Riskoger strømforbrug (2026) → kWh pr. kogning og varmhold",
  description:
    "Se hvor meget strøm en riskoger bruger pr. kogning og i varmhold, hvad 1 og 1,8 liter koster, og om det er billigere end at koge risene i en gryde.",
  heading: "Strømforbrug for en riskoger: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "En riskoger bruger typisk 0,14–0,2 kWh pr. kogning, alt efter størrelse, og 16–26 Wh for hver time, den holder risene varme bagefter. En kogning i en riskoger på 1 liter med en times varmhold koster omkring {{kr 0,16}} ved månedens elpris. Koger du ris to gange om ugen, bliver det cirka 17 kWh om året, eller {{kr 17}}.",
  kwhRange: [5, 60],
  typicalKwh: 17,
  wattage: 600,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.03, 1.02, 1.0, 1.0, 0.98, 0.96, 0.95, 0.96, 1.0, 1.02, 1.03, 1.05],
  content: `<h2>Riskogerens forbrug: kogning og varmhold</h2>
<p>En riskoger er en lille gryde med et varmeelement i bunden og en føler, der mærker, hvornår vandet er kogt væk eller suget op af risene. Så slår den over på varmhold. Effekten står typisk på 300–1.100 W på mærkepladen, men den trækker kun fuld effekt, mens vandet bringes i kog. Resten af tiden regulerer elektronikken ned, og derfor er forbruget pr. kogning lavere, end mærkeeffekten lader ane.</p>
<p>Japanske producenter skal oplyse det målte forbrug pr. kogning og pr. times varmhold, og de tal er de bedste, der findes. Tigers riskoger på 1 liter (JBH-G102) bruger 140 Wh pr. kogning og 19,1 Wh i timen på varmhold. Den store udgave på 1,8 liter (JBH-G182) bruger 197 Wh pr. kogning og 26,1 Wh i timen. En tredje model på 1 liter (JRT-A100) med en mærkeeffekt på hele 1.080 W ligger på 154 Wh pr. kogning og 16,5 Wh i timen. En kogning koster altså omkring {{kr 0,14-0,2}} ved månedens elpris.</p>
<p>Koger du ris to gange om ugen og lader risene stå en time på varmhold, bliver det cirka 17 kWh om året, svarende til {{kr 17}}. Det er det samme niveau, som Stiftung Warentest kommer frem til i sin test af 13 riskogere fra april 2026, hvor årsforbruget er regnet på to portioner ris á 200 gram om ugen inklusive standby.</p>

<h2>Forbrug efter størrelse og varmhold</h2>
<p>Tabellen viser, hvad en kogning koster for de almindelige størrelser. Tallene for selve kogningen kommer fra producentens målinger. Varmholdet er lagt til efter de målte watt pr. time.</p>
<table>
<thead><tr><th>Riskoger og brug</th><th>kWh pr. gang</th><th>Pris pr. gang</th><th>kWh om året ved 2 gange om ugen</th></tr></thead>
<tbody>
<tr><td>1 liter, slukket lige efter kogning</td><td>0,14 kWh</td><td>{{kr 0,14}}</td><td>15 kWh</td></tr>
<tr><td>1 liter + 1 time varmhold</td><td>0,16 kWh</td><td>{{kr 0,16}}</td><td>17 kWh</td></tr>
<tr><td>1,8 liter, slukket lige efter kogning</td><td>0,20 kWh</td><td>{{kr 0,2}}</td><td>21 kWh</td></tr>
<tr><td>1,8 liter + 2 timers varmhold</td><td>0,25 kWh</td><td>{{kr 0,25}}</td><td>26 kWh</td></tr>
<tr><td>1,8 liter + 10 timers varmhold</td><td>0,46 kWh</td><td>{{kr 0,46}}</td><td>48 kWh</td></tr>
</tbody>
</table>
<p>Den nederste linje er med vilje: i mange asiatiske husholdninger står riskogeren tændt på varmhold fra morgen til aften. Så bliver varmholdet større end selve kogningen. Japanske producenter regner årsforbruget med daglig kogning og mange timers varmhold, og derfor står der 79–134 kWh om året på databladet for de to Tiger-modeller. Et dansk køkken, der koger ris et par gange om ugen, ligger langt under.</p>

<h2>Mærkeeffekten fortæller ikke, hvad kogningen koster</h2>
<p>Det er fristende at gange mærkeeffekten med kogetiden, men det giver et alt for højt tal. Tigers model med 1.080 W bruger kun 154 Wh pr. kogning, selv om en kogning med blødsætning og efterdampning tager 40–60 minutter. Elementet kører fuldt i begyndelsen, mens vandet varmes op, og derefter skruer elektronikken ned og lader risene trække. En stor mærkeeffekt betyder mest, at vandet hurtigere kommer i kog.</p>
<p>Billige riskogere med en enkelt kontakt og uden mikroprocessor er bygget mere simpelt: elementet kører, til vandet er væk, og så klikker kontakten over på varmhold. Der findes ikke målte tal for dem på samme måde som for de japanske modeller, men da de skal varme den samme mængde vand og ris op, er det vores skøn, at de ligger på samme niveau pr. kogning – omkring 0,1–0,2 kWh for en portion til to-fire personer.</p>

<h2>Riskoger mod gryde og mikroovn</h2>
<p>Det meste af energien går til at varme vand og ris op til kogepunktet, og det koster det samme, uanset om det sker i en riskoger eller i en gryde. Forskellen ligger i, hvad der går tabt undervejs. Øko-Test har målt, at et halvt kilo kartofler kogt i en gryde med låg på induktion brugte 0,22 kWh, mens den samme gryde uden låg på en keramisk plade brugte 0,43 kWh. Ris koges med mindre vand end kartofler, så vores skøn er, at ris i en gryde med låg på <a href="/induktion/">induktion</a> bruger omtrent det samme som i en riskoger, mens en gammel keramisk kogeplade og en gryde uden låg kan bruge dobbelt så meget.</p>
<p>Riskogerens fordel er derfor ikke først og fremmest strømmen, men at den passer sig selv og slukker af sig selv. Du risikerer ikke, at gryden står og koger videre på en varm plade. Til en enkelt portion kan en <a href="/mikroovn/">mikroovn</a> også koge ris, men den skal køre i 12–15 minutter på høj effekt, og så er besparelsen mod riskogeren lille.</p>

<h2>Varmhold: det skjulte forbrug</h2>
<p>Varmholdet holder risene på omkring 60–75 grader, så de ikke bliver kolde eller fordærves. Det bruger 16–26 W ifølge Tigers målinger – mindre end en almindelig pære gjorde i gamle dage, men det løber op, hvis det står på hele dagen. Stiftung Warentest testede varmholdet over fem timer, og en riskoger på 1,8 liter bruger cirka 0,13 kWh på de fem timer, eller {{kr 0,13}}.</p>
<p>Skal risene først bruges længe efter, er det bedre at slukke og køle dem hurtigt ned i køleskabet. Kogte ris, der står lunkne i mange timer, er en kendt kilde til madforgiftning. Varm dem i stedet op i mikroovnen, når de skal spises.</p>

<h2>Hvornår på døgnet bruges riskogeren?</h2>
<p>Ris er aftensmad i de fleste danske hjem, og så foregår kogningen netop i de timer, hvor elprisen typisk er højest. Det kan godt betale sig at tænke over, men beløbet er lille: en kogning er under 0,2 kWh. Mange riskogere har et ur, så du kan sætte risene over om eftermiddagen og lade dem være færdige til aftensmaden. Det flytter selve kogningen, men til gengæld står de længere på varmhold, så gevinsten bliver begrænset. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Standby: bruger riskogeren strøm i stikket?</h2>
<p>En simpel riskoger med vippekontakt bruger intet, når den ikke er tændt. Modeller med display, ur og forvalg har et lille standbyforbrug, som EU's regler for husholdningsapparater holder under én watt. Det er under 9 kWh om året selv i værste fald, og da riskogeren ofte står fremme på bordet, er det nemt at trække stikket ud mellem brugene.</p>

<h2>Sådan holder du riskogerens forbrug nede</h2>
<ol>
<li><strong>Brug den rigtige størrelse</strong> – en riskoger på 1,8 liter bruger cirka 40 procent mere pr. kogning end en på 1 liter, også når den kun er halvt fyldt.</li>
<li><strong>Sluk for varmholdet</strong>, når risene er på bordet, eller vælg en model, hvor varmholdet kan slås fra.</li>
<li><strong>Kog til to dage ad gangen</strong> – kølede ris kan steges eller varmes op, og så sparer du en hel kogning.</li>
<li><strong>Brug Eco-programmet</strong>, hvis riskogeren har et; producenternes målte tal gælder netop det program.</li>
<li><strong>Læg låget på og lad være at åbne</strong> under kogningen – det gælder både riskogeren og gryden.</li>
</ol>
<p>Har du en <a href="/slow-cooker/">slow cooker</a>, kan den ikke erstatte riskogeren, men den bruger strømmen på en lignende, sparsom måde. Laver du ris og grøntsager i samme maskine, er en <a href="/koekkenmaskine/">køkkenmaskine med varme</a> et alternativ, men den bruger mere strøm pr. ret.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en riskoger pr. gang?",
      answer:
        "En riskoger bruger typisk 0,14–0,2 kWh pr. kogning. Tigers målinger viser 140 Wh for en model på 1 liter og 197 Wh for en på 1,8 liter. Det koster omkring {{kr 0,14-0,2}} ved månedens elpris.",
    },
    {
      question: "Hvor mange watt bruger en riskoger?",
      answer:
        "Mærkeeffekten ligger typisk på 300–1.100 W, men den bruges kun, mens vandet varmes op. I varmhold bruger riskogeren 16–26 W ifølge producentens målinger.",
    },
    {
      question: "Er det billigere at koge ris i en riskoger end i en gryde?",
      answer:
        "Omtrent det samme, hvis gryden har låg og står på induktion. En gryde uden låg på en ældre keramisk plade kan bruge op mod dobbelt så meget. Riskogerens fordel er mest, at den slukker af sig selv.",
    },
    {
      question: "Bruger varmholdet meget strøm?",
      answer:
        "Nej, 16–26 Wh i timen. Fem timers varmhold i en stor riskoger er cirka 0,13 kWh, eller {{kr 0,13}}. Men står den på varmhold hele dagen, bliver varmholdet større end selve kogningen.",
    },
    {
      question: "Hvad koster en riskoger i strøm om året?",
      answer:
        "Med to kogninger om ugen og en times varmhold bruger en riskoger på 1 liter omkring 17 kWh om året, hvilket koster cirka {{kr 17}} ved månedens elpris.",
    },
  ],
  relatedSlugs: ["induktion", "mikroovn", "slow-cooker", "koekkenmaskine", "sous-vide"],
  sources: [
    { name: "Tiger Corporation — JBH-G102/G182, specifikationer (Wh pr. kogning og varmhold)", url: "https://www.tiger-corporation.com/en/jpn/product/rice-cooker/jbh-g2" },
    { name: "Tiger Corporation — JRT-A100, specifikationer", url: "https://www.tiger-corporation.com/en/jpn/product/rice-cooker/jrt-a/specs/" },
    { name: "Stiftung Warentest — Reiskocher im Test (april 2026)", url: "https://www.test.de/Reiskocher-im-Test-5880425-0/" },
    { name: "Øko-Test — Stromverbrauch: Wie viel kosten Kaffeekochen, Pizzabacken & Co (2024)", url: "https://www.oekotest.de/freizeit-technik/Stromverbrauch-Wie-viel-Cent-kosten-eigentlich-Kaffeekochen-Pizzabacken-Co-_11247_1.html" },
  ],
  calculatorConfig: {
    title: "Riskoger forbrugsberegner",
    options: [
      { label: "1 liter, slukket efter kogning", kwhPerUse: 0.14 },
      { label: "1 liter + 1 time varmhold", kwhPerUse: 0.16 },
      { label: "1,8 liter, slukket efter kogning", kwhPerUse: 0.2 },
      { label: "1,8 liter + 2 timers varmhold", kwhPerUse: 0.25 },
    ],
    usageLabel: "Antal kogninger pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 2,
    usageStep: 1,
    per: "gang",
    perYear: 52,
  },
  publishDate: "2026-11-30",
  updated: "2026-11-22",
};

export default riskoger;
