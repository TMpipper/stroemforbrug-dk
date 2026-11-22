import type { ApplianceData } from "@/lib/types";

const olieradiator: ApplianceData = {
  slug: "olieradiator",
  meta: {
    category: "varme",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["olieradiator", "oliefyldt radiator", "oliefyldt elradiator", "olieovn", "transportabel radiator", "oil radiator", "de'longhi radiator"],
  },
  name: "Olieradiator",
  article: "en",
  title: "Olieradiator strømforbrug (2026) → Watt, termostat og kWh",
  description: "En olieradiator bruger 0,5-2,5 kWh i timen på fuld effekt. Se hvad termostaten gør ved forbruget, prisen pr. time og regnestykket for en hel vinter.",
  heading: "Strømforbrug for en olieradiator: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En olieradiator bruger lige så mange kWh i timen, som den har kilowatt: en 1.500 W-model bruger 1,5 kWh i timen på fuld effekt og koster {{kr 1,5}} i timen ved {{pris_kwh}}. Med termostaten slået til kører elementet kun en del af tiden, så en typisk vinter med supplerende varme lander omkring 450 kWh, svarende til {{kr 450}}.",
  kwhRange: [100, 1500],
  typicalKwh: 450,
  wattage: 1500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [2.0, 1.8, 1.4, 0.8, 0.3, 0.1, 0, 0.1, 0.4, 1.1, 1.8, 2.2],
  content: `<h2>Olieradiatorens strømforbrug i timen</h2>
<p>En olieradiator er en elradiator med et lukket kammer af olie omkring varmelegemet. Olien skal ikke udskiftes og brændes ikke af; den fungerer som et varmelager, der fordeler varmen fra elementet ud i ribberne. Det betyder også, at regnestykket er enkelt: al den strøm, radiatoren trækker, bliver til varme i rummet. En kilowatttime strøm giver en kilowatttime varme, hverken mere eller mindre.</p>
<p>Derfor står forbruget i timen direkte på typeskiltet. En radiator på 1.000 W bruger 1 kWh i timen, når elementet er tændt, og en model på 2.000 W bruger 2 kWh. Bolius beskriver den typiske oliefyldte radiator som et apparat på omkring 500-1.000 W, beregnet til rum på 8-16 m², mens mange af de modeller, der sælges i byggemarkeder, kan gå op på 1.500-2.500 W ved at koble flere elementer ind.</p>
<table>
<thead><tr><th>Effekttrin</th><th>kWh i timen (element tændt)</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>500 W (laveste trin)</td><td>0,5 kWh</td><td>{{kr 0,5}}</td></tr>
<tr><td>700 W</td><td>0,7 kWh</td><td>{{kr 0,7}}</td></tr>
<tr><td>1.000 W</td><td>1,0 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>1.500 W</td><td>1,5 kWh</td><td>{{kr 1,5}}</td></tr>
<tr><td>2.000 W</td><td>2,0 kWh</td><td>{{kr 2}}</td></tr>
<tr><td>2.500 W</td><td>2,5 kWh</td><td>{{kr 2,5}}</td></tr>
</tbody>
</table>
<p>Tallene i tabellen er det maksimale forbrug på hvert trin. I praksis er det sjældent det, du betaler, fordi termostaten slukker elementet, når rummet har nået den temperatur, du har valgt.</p>

<h2>Effekttrin og termostat: hvad du faktisk betaler</h2>
<p>De fleste olieradiatorer har to ting at skrue på: en trinvælger og en termostat. Trinvælgeren bestemmer, hvor mange watt elementet trækker, når det er tændt. De'Longhi oplyser for eksempel, at deres 1.200 W-model har trinene 500, 700 og 1.200 W, og at 1.500 W-modellen har 700, 800 og 1.500 W. Termostaten bestemmer, hvor længe elementet er tændt.</p>
<p>Et højt trin varmer rummet hurtigere op, men det gør ikke varmen billigere. Når rummet først er varmt, skal radiatoren kun dække varmetabet gennem vægge, vinduer og utætheder, og det tab er det samme, uanset om du bruger 700 eller 1.500 W til at dække det. Termostaten slukker bare oftere på det høje trin. Det, der flytter regningen, er altså den temperatur, du beder om, og hvor dårligt rummet holder på varmen.</p>
<p>Hvor stor en del af tiden elementet kører, kan ingen forudsige uden en måling. I et lille, isoleret soveværelse kan det være en fjerdedel af tiden; i et koldt kælderrum eller et anneks kan elementet køre næsten konstant. På siden her regner vi med, at termostaten holder elementet tændt halvdelen af tiden, som et udgangspunkt, du kan justere i beregneren. En stikmåler mellem radiatoren og stikkontakten giver dig det rigtige tal på en uge.</p>

<h2>Hvad koster en vinter med olieradiator?</h2>
<p>Olieradiatoren bruges oftest som supplement: i et værelse, hvor fjernvarmen ikke slår til, i et sommerhus i skuldersæsonen eller i et udestue-hjørne, man vil kunne sidde i. Derfor regner vi forbruget pr. time og ganger med de dage, den faktisk står tændt. Beregneren tager udgangspunkt i cirka 120 dage om året, hvilket svarer til de koldeste måneder.</p>
<table>
<thead><tr><th>Brug (1.500 W, termostat ca. halvdelen af tiden)</th><th>kWh pr. måned</th><th>Pris pr. måned</th></tr></thead>
<tbody>
<tr><td>2 timer om aftenen</td><td>45 kWh</td><td>{{kr 45}}</td></tr>
<tr><td>4 timer om dagen</td><td>90 kWh</td><td>{{kr 90}}</td></tr>
<tr><td>8 timer om dagen (hjemmekontor)</td><td>180 kWh</td><td>{{kr 180}}</td></tr>
<tr><td>Døgnet rundt i et koldt rum</td><td>540 kWh</td><td>{{kr 540}}</td></tr>
</tbody>
</table>
<p>Den sidste række er grunden til, at olieradiatoren har ry for at være dyr. Det er ikke radiatoren, der er ineffektiv — den omsætter al strømmen til varme — det er rummet, der skal varmes op døgnet rundt med ren elvarme. Står den og holder frosten ude af et uisoleret skur, kan en enkelt radiator bruge mere strøm på en vintermåned end et køleskab bruger på et helt år.</p>

<h2>Olieradiator, varmeblæser eller varmepumpe?</h2>
<p>En olieradiator, en <a href="/varmeblaeser/">varmeblæser</a> og en fastmonteret <a href="/elradiator/">elradiator</a> bruger nøjagtig lige meget strøm pr. kilowatttime varme. Forskellen ligger i, hvordan varmen kommer ud. Blæseren sender varm luft ud med det samme og er god til et koldt badeværelse i ti minutter. Olieradiatoren er langsom til at komme i gang, men giver en jævn strålevarme uden støj og uden at hvirvle støv op, og olien holder på varmen et stykke tid efter, at elementet er slukket.</p>
<p>En luft-til-luft-<a href="/varmepumpe/">varmepumpe</a> er en anden klasse. Den flytter varme udefra ind i huset og giver typisk flere kilowatttimer varme for hver kilowatttime strøm. Skal et rum varmes op hver dag hele vinteren, er det derfor varmepumpen, der flytter regningen, ikke valget mellem to elradiatorer. Olieradiatoren giver mening, hvor behovet er kort, sjældent eller midlertidigt: et gæsteværelse, en vinterweekend i sommerhuset, en ny bolig, hvor varmeanlægget endnu ikke virker.</p>
<p>EU's miljøvenlige design-krav til lokale rumvarmere (forordning 2015/1188) stiller i øvrigt krav til styringen på transportable elvarmere: de skal nå en sæsoneffektivitet på mindst 36 %, og det kan de kun med en elektronisk termostat og funktioner som ugeprogram eller registrering af åbne vinduer. Det siger ikke noget om, hvor meget varme der kommer ud af en kilowatttime, men om hvor godt radiatoren undgår at varme, når ingen har brug for det.</p>

<h2>Strømforbrug på standby</h2>
<p>En olieradiator med mekanisk termostat og drejeknapper bruger ingen strøm, når elementet er slukket. Modeller med display, fjernbetjening eller wifi har en lille elektronik, der står tændt, og den bruger typisk under én watt. Det er så lidt, at det forsvinder i forhold til selve varmen. Det, der koster, er radiatorer, der glemmes tændt i et rum, ingen bruger. Træk stikket ud om foråret, og stil den væk, når fyringssæsonen er slut.</p>

<h2>Hvornår på døgnet bruger du strømmen?</h2>
<p>En olieradiator bruger strøm, når rummet er koldt, og det er ofte om aftenen, hvor elprisen og nettariffen typisk ligger højt. Varmen kan ikke flyttes ret meget: olien holder kun på varmen i en kort periode, så du kan ikke lade radiatoren op om natten og bruge varmen om aftenen, som du kan med en elbil. Et realistisk greb er at lade termostaten eller en timer starte radiatoren en time før, du skal bruge rummet, i stedet for at lade den køre hele dagen. Har du timeafregnet strøm, kan du se dagens dyre timer i oversigten over dagens elpriser ovenfor.</p>

<h2>Sådan sparer du strøm med en olieradiator</h2>
<ul>
<li><strong>Sænk temperaturen en grad</strong> — hver grad mindre giver et mindre varmetab og dermed kortere tid med elementet tændt.</li>
<li><strong>Varm kun det rum, du bruger</strong> — luk døren, så radiatoren ikke forsøger at varme resten af huset.</li>
<li><strong>Brug termostaten, ikke trinvælgeren</strong> — det høje trin varmer hurtigere op, men det er temperaturen, der bestemmer forbruget.</li>
<li><strong>Stil den frit</strong> — en radiator bag sofaen eller under en vindueskarm med gardin varmer møblet i stedet for rummet.</li>
<li><strong>Tæt de største utætheder</strong> — et utæt vindue eller en kold dør kan få elementet til at køre næsten konstant.</li>
<li><strong>Mål en uge</strong> — en stikmåler viser det faktiske forbrug, og så ved du, om radiatoren er et supplement eller en reel varmekilde.</li>
</ul>
<p>Bruger du olieradiatoren som eneste varme i et rum hver dag, så sammenlign dit målte forbrug med prisen på en varmepumpe eller et andet varmeanlæg. Er den kun i brug nogle uger om året, er den til gengæld et billigt apparat at eje, fordi den ikke bruger noget, når den står slukket.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en olieradiator i timen?", answer: "Lige så meget som dens effekt, når elementet er tændt: 1 kWh i timen for en 1.000 W-model og 2 kWh for en 2.000 W-model. Det koster {{kr 1}}-{{kr 2}} i timen ved {{pris_kwh}}. Med termostat kører elementet kun en del af tiden." },
    { question: "Er en olieradiator billigere i drift end en varmeblæser?", answer: "Nej. Begge omsætter én kWh strøm til én kWh varme. Olieradiatoren giver en jævnere og mere stille varme, men varmen koster det samme: {{kr 1}} pr. kWh varme ved månedens elpris." },
    { question: "Hvad koster det at have en olieradiator tændt en hel måned?", answer: "En 1.500 W-radiator, der kører fire timer om dagen med termostaten tændt halvdelen af tiden, bruger cirka 90 kWh om måneden, svarende til {{kr 90}}. Står den tændt døgnet rundt i et koldt rum, kan det blive 540 kWh eller {{kr 540}}." },
    { question: "Sparer jeg strøm ved at bruge et lavere effekttrin?", answer: "Kun lidt. Det lave trin varmer langsommere op, men når rummet er varmt, er det temperaturen og varmetabet, der bestemmer forbruget. At sænke termostaten en grad gør mere end at skifte trin." },
    { question: "Bruger en olieradiator strøm på standby?", answer: "En model med mekanisk termostat bruger intet, når elementet er slukket. Modeller med display eller wifi bruger typisk under én watt, hvilket giver under 9 kWh om året, svarende til under {{kr 9}}." },
    { question: "Kan jeg varme et rum op med en olieradiator om natten, når strømmen er billig?", answer: "Kun i begrænset omfang. Olien holder på varmen i en kort periode, ikke i timevis. Brug hellere en timer, så radiatoren starter kort før du skal bruge rummet, i stedet for at køre hele dagen." },
  ],
  relatedSlugs: ["elradiator", "varmeblaeser", "haandklaedetoerrer", "cirkulationspumpe", "pillefyr"],
  sources: [
    { name: "Bolius — Den oliefyldte el-radiator er en effektiv varmespreder", url: "https://www.bolius.dk/den-oliefyldte-el-radiator-er-en-effektiv-varmespreder-16962" },
    { name: "De'Longhi — Effektindstillinger på olieradiatorer", url: "https://www.delonghi.com/da-dk/faqs/Hvad-er-effektindstillingerne-på-min-olieradiator/a/269722" },
    { name: "Forordning (EU) 2015/1188, bilag II — krav til lokale rumvarmere", url: "https://www.legislation.gov.uk/eur/2015/1188/annex/II" },
  ],
  calculatorConfig: {
    title: "Beregn olieradiatorens strømforbrug",
    options: [
      { label: "1.000 W, termostat tændt ca. halvdelen af tiden", kwhPerUse: 0.5 },
      { label: "1.500 W, termostat tændt ca. halvdelen af tiden", kwhPerUse: 0.75 },
      { label: "2.000 W, termostat tændt ca. halvdelen af tiden", kwhPerUse: 1.0 },
      { label: "1.500 W på fuld effekt (koldt rum)", kwhPerUse: 1.5 },
    ],
    usageLabel: "Timer i brug pr. dag (ca. 120 dage om året)",
    usageUnit: "timer/dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 4,
    usageStep: 0.5,
    per: "time",
    perYear: 120,
  },
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default olieradiator;
