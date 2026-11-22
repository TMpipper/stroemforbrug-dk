import type { ApplianceData } from "@/lib/types";

const ipad: ApplianceData = {
  slug: "ipad",
  meta: {
    category: "it",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["ipad", "tablet", "tablet opladning", "ipad pro", "ipad air", "ipad mini", "android tablet", "samsung galaxy tab"],
  },
  name: "iPad og tablet",
  article: "en",
  title: "iPad og tablet strømforbrug (2026) → Wh, opladning og år",
  description: "En iPad bruger ca. 0,02-0,05 kWh på en fuld opladning. Se prisen pr. opladning for iPad, Air, Pro og mini, forbruget om året og hvad opladeren bruger.",
  heading: "Strømforbrug for en iPad og tablet: kWh, pris pr. opladning og billigste tidspunkt",
  quickAnswer:
    "En almindelig iPad har et batteri på knap 29 Wh og bruger cirka 0,034 kWh fra stikkontakten på en fuld opladning. Det koster {{oere 0,034}} ved {{pris_kwh}}. Fire opladninger om ugen hele året giver omkring 7 kWh, svarende til {{kr 7}}.",
  kwhRange: [2, 20],
  typicalKwh: 7,
  wattage: 20,
  standbyWatts: 0.05,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.05, 1.0, 0.95, 0.9, 0.9, 1.0, 1.0, 0.95, 1.0, 1.05, 1.1],
  content: `<h2>Batteriet bestemmer forbruget</h2>
<p>En tablet er et af de mest sparsomme apparater i hjemmet. Den er bygget til at holde en hel dag på et batteri, og det batteri er lille målt i energi. Apple oplyser batteriets størrelse i watt-timer (Wh) i de tekniske specifikationer for hver iPad, og det tal er det bedste udgangspunkt for at regne forbruget ud. Fra stikkontakten bruger en opladning lidt mere end batteriet rummer, fordi opladeren og batteriet taber energi som varme. Apple har målt deres 20 W USB-C-oplader til en effektivitet på 87,8 procent, og vi regner med cirka 85 procent for hele opladningen.</p>
<table>
<thead><tr><th>Model</th><th>Batteri</th><th>kWh pr. fuld opladning (ca.)</th><th>Pris pr. opladning</th></tr></thead>
<tbody>
<tr><td>iPad mini</td><td>18,9 Wh</td><td>0,022 kWh</td><td>{{oere 0,022}}</td></tr>
<tr><td>iPad 11" og iPad Air 11"</td><td>28,93 Wh</td><td>0,034 kWh</td><td>{{oere 0,034}}</td></tr>
<tr><td>iPad Pro 11"</td><td>31,29 Wh</td><td>0,037 kWh</td><td>{{oere 0,037}}</td></tr>
<tr><td>iPad Air 13"</td><td>36,59 Wh</td><td>0,043 kWh</td><td>{{oere 0,043}}</td></tr>
<tr><td>iPad Pro 13"</td><td>38,99 Wh</td><td>0,046 kWh</td><td>{{oere 0,046}}</td></tr>
</tbody>
</table>
<p>Selv den største iPad koster få øre at lade helt op. En Android-tablet i samme størrelse har typisk et batteri i samme størrelsesorden, så tallene giver et godt billede af tablets generelt. Kig efter batteriets Wh i specifikationerne; står der kun mAh, så gang med batteriets spænding (ofte omkring 3,8 V) og del med 1.000 for at få Wh.</p>

<h2>Hvad bruger en iPad om året?</h2>
<p>Hvor ofte du lader, afhænger af, hvor meget du bruger tabletten. En tablet, der bruges til avis, mails og lidt video hver dag, lades måske tre-fire gange om ugen. En tablet til børnenes film på en lang køretur kan blive tømt på en dag. Tabellen viser, hvad det giver over et år for en almindelig iPad med et batteri på knap 29 Wh.</p>
<table>
<thead><tr><th>Opladninger</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 om ugen</td><td>1,8 kWh</td><td>{{kr 1,8}}</td></tr>
<tr><td>4 om ugen</td><td>7,1 kWh</td><td>{{kr 7,1}}</td></tr>
<tr><td>1 om dagen</td><td>12,4 kWh</td><td>{{kr 12,4}}</td></tr>
<tr><td>2 om dagen (to tablets i familien)</td><td>24,8 kWh</td><td>{{kr 24,8}}</td></tr>
</tbody>
</table>
<p>Selv med en opladning hver dag hele året bruger tabletten mindre strøm, end et <a href="/koeleskab/">køleskab</a> bruger på et par måneder. Det er derfor ikke her, elregningen skal ned — men tallet er nyttigt, hvis du vil sammenligne med en bærbar computer eller et tv.</p>

<h2>Strømforbrug, mens den står tændt</h2>
<p>Apple har i miljørapporten for iPad (10. generation) målt, hvor meget tabletten bruger i de forskellige tilstande ved 230 volt. Med skærmen tændt og uden aktivitet trækker den 3,01 watt, og i dvale med skærmen slukket 0,37 watt. Opladeren alene, uden en tablet tilsluttet, bruger 0,05 watt. Det er tal, der viser, hvor lidt en tablet kræver: selv med skærmen tændt bruger den mindre end en tiendedel af en <a href="/skaerm/">computerskærm</a>.</p>
<p>Opladeren, der sidder i stikkontakten hele året, bruger altså omkring 0,4 kWh om året uden at lade noget. Det er så lidt, at det ikke giver mening at tage den ud af stikket for strømmens skyld, men det skader heller ikke.</p>

<h2>Tablet, bærbar eller tv?</h2>
<p>Til at se film og læse er en tablet den mest sparsomme skærm af de tre. En <a href="/laptop/">bærbar computer</a> har et større batteri, typisk 40-100 Wh, og en kraftigere processor, så den bruger mere pr. time. Et <a href="/tv/">tv</a> bruger langt mere, fordi skærmen er stor og lys. Ser du en film alene i sengen, er tabletten derfor den måde at gøre det på, der bruger mindst strøm. Den kan dog ikke erstatte tv'et, når hele familien ser med, og forskellen i kroner pr. film er under en krone.</p>
<p>Sammenlignet med en <a href="/mobil-opladning/">mobiltelefon</a> har en iPad typisk et batteri, der er omkring dobbelt så stort, men den lades ofte sjældnere. Over et år ender de to ofte i samme størrelsesorden.</p>

<h2>Hvornår skal tabletten lades?</h2>
<p>En tablet er let at lade, når strømmen er billig: du kan lade om natten og bruge den om dagen. Har du timeafregnet strøm, kan en smart-stikdåse eller en timer starte opladningen i nattetimerne, når prisen ofte er lav. Forskellen i kroner er dog meget lille: en fuld opladning koster få øre, så en dyr eller billig time ændrer kun brøkdele af en øre. Oversigten over dagens billigste timer længere oppe viser, hvornår prisen er lavest.</p>

<h2>Hurtigladning og opladere</h2>
<p>En iPad kan lades med opladere fra 20 W og opefter, og en kraftigere oplader lader hurtigere. Det ændrer ikke ret meget på, hvor mange kWh opladningen bruger — batteriet skal fyldes med det samme antal watt-timer uanset hvad. En god oplader har dog et lavere tab og et lavt forbrug i tomgang. Apple oplyser 87,8 procent effektivitet og 0,05 watt i tomgang for sin 20 W-oplader. Billige opladere uden mærke kan have et højere tab, og de kan være et sikkerhedsproblem. Brug en oplader fra producenten eller et anerkendt mærke.</p>
<p>Lader du tabletten fra en <a href="/laptop/">bærbar</a> via USB-C, er det computeren, der leverer strømmen, og tabet kommer oven i computerens eget forbrug. Det er stadig små tal, men det er lidt mindre effektivt end at sætte tabletten direkte i stikkontakten.</p>

<h2>Sådan regner du din egen tablet ud</h2>
<p>Find batteriets Wh i specifikationerne, og del med 0,85 — så har du omtrent, hvor mange Wh en fuld opladning bruger fra stikkontakten. Del med 1.000 for at få kWh. Gang med antallet af fulde opladninger om året. Lader du fra 30 til 100 procent, er det 70 procent af en fuld opladning. En Android-tablet med et batteri på 7.000 mAh ved 3,85 V har cirka 27 Wh og bruger dermed omtrent det samme som en almindelig iPad.</p>

<h2>Batteriets levetid betyder mere end strømmen</h2>
<p>Det, der koster med en tablet, er ikke strømmen, men den dag batteriet er slidt, og tabletten skal skiftes eller have nyt batteri. Batterier slides af mange fulde opladninger, af varme og af at stå på 100 procent i lang tid. Undgå at lade tabletten i solen eller under en dyne, og har din tablet en indstilling, der skåner batteriet ved at vente med de sidste procent, så lad den være slået til. Skal tabletten ligge ubrugt i en længere periode, er det skånsomt at lade den ligge halvt opladet.</p>

<h2>Børnenes tablet og skoleiPad</h2>
<p>I mange familier er der flere tablets: en til hver af børnene, en skoleiPad og måske en ældre, der bruges til opskrifter i køkkenet. Selv fire tablets, der hver lades én gang om dagen, bruger kun omkring 50 kWh om året, svarende til {{kr 50}}. Det er stadig et lille forbrug, men det viser, at det er antallet af apparater og opladninger, der tæller.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Skru ned for lysstyrken</strong> — skærmen bruger en stor del af strømmen, og en lavere lysstyrke giver længere tid på batteriet.</li>
<li><strong>Lad tabletten gå i dvale</strong> — sæt automatisk lås til et par minutter.</li>
<li><strong>Brug den oplader, der passer</strong> — en certificeret USB-C-oplader har lavt tomgangsforbrug.</li>
<li><strong>Lad om natten</strong>, hvis du har timeafregnet strøm.</li>
<li><strong>Tænk på batteriet</strong> — undgå varme og lange perioder på 100 procent.</li>
</ul>
<p>Er du nysgerrig efter, hvor meget dine øvrige småapparater bruger, så se guiden om <a href="/standby/">standby</a>, hvor de mange små forbrug lægges sammen.</p>`,
  faqs: [
    { question: "Hvad koster det at lade en iPad?", answer: "En almindelig iPad med et batteri på knap 29 Wh bruger cirka 0,034 kWh fra stikkontakten og koster {{oere 0,034}} pr. fuld opladning ved {{pris_kwh}}." },
    { question: "Hvor meget strøm bruger en iPad om året?", answer: "Med fire opladninger om ugen bruger en almindelig iPad cirka 7 kWh om året, svarende til {{kr 7}}. Med en opladning om dagen er det cirka 12 kWh eller {{kr 12}}." },
    { question: "Hvor mange watt bruger en iPad, når den er tændt?", answer: "Apple har målt iPad (10. generation) til 3,01 W med skærmen tændt og uden aktivitet og 0,37 W i dvale. En time med skærmen tændt koster under {{oere 0,004}}." },
    { question: "Bruger opladeren strøm, når den sidder i stikket uden tablet?", answer: "Kun meget lidt. Apple har målt sin 20 W-oplader til 0,05 W uden noget tilsluttet. Det er cirka 0,4 kWh om året, svarende til {{kr 0,4}}." },
    { question: "Bruger en iPad Pro mere strøm end en almindelig iPad?", answer: "En iPad Pro 13\" har et batteri på 38,99 Wh mod 28,93 Wh for en almindelig iPad. En fuld opladning koster derfor {{oere 0,046}} mod {{oere 0,034}}." },
    { question: "Er det billigere at se film på en tablet end på tv?", answer: "Ja. En tablet bruger få watt, mens et tv bruger flere gange så meget. Forskellen pr. film er dog under en krone." },
  ],
  relatedSlugs: ["mobil-opladning", "laptop", "skaerm", "elcykel", "xbox"],
  sources: [
    { name: "Apple — Product Environmental Report, iPad (10. generation)", url: "https://www.apple.com/environment/pdf/products/ipad/iPad_PER_Oct2022.pdf" },
    { name: "Apple — iPad 11\" tekniske specifikationer", url: "https://www.apple.com/ipad-11/specs/" },
    { name: "Apple — iPad Pro tekniske specifikationer", url: "https://www.apple.com/ipad-pro/specs/" },
    { name: "Apple — iPad mini tekniske specifikationer", url: "https://www.apple.com/ipad-mini/specs/" },
  ],
  calculatorConfig: {
    title: "Beregn tablettens strømforbrug",
    options: [
      { label: "iPad mini (18,9 Wh)", kwhPerUse: 0.022 },
      { label: "iPad 11\" eller iPad Air 11\" (28,93 Wh)", kwhPerUse: 0.034 },
      { label: "iPad Pro 11\" (31,29 Wh)", kwhPerUse: 0.037 },
      { label: "iPad Air 13\" eller iPad Pro 13\" (ca. 37-39 Wh)", kwhPerUse: 0.045 },
    ],
    usageLabel: "Fulde opladninger pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 4,
    usageStep: 1,
    per: "opladning",
    perYear: 52,
  },
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default ipad;
