import type { ApplianceData } from "@/lib/types";

/**
 * Motorvarmer og kabinevarmer til bil (230 V). Intet EU-energimærke.
 * Tal: DEFA Teknisk Håndbok Motorvarmere 2009 (175-2.000 W; kølevandsvarmere 550-2.000 W, olievarmere 175-370 W,
 * kontaktvarmere 300-400 W; WarmUp: 90 min ved 0 °C ≈ +30 °C med 600 W, 195 min ved -17 °C; koldstarttest ved -20 °C:
 * 15-30 % mindre benzin og 8-12 % mindre diesel de første km), DEFA produktkatalog 2024 (Termini 1000/1200/1400 W,
 * Termini 2100 1.350/2.100 W; termisk balance efter ca. 3 timer ved -15 °C, længere tid = unødigt forbrug),
 * Calix MVP 908 (550 W), Calix M7T 236 (750 W + anbefalet tid: 3 t ved -20, 2 t ved -10, 1,5 t ved -5, 1 t ved 0 og +10 °C),
 * FDM (motor- og kabinevarmer frem for tomgang; tomgangsgrænse oftest 1 min, højst 3).
 * Morgener pr. år er vores skøn. shiftable: false — varmen skal komme lige før afgang (forklaret i teksten).
 */
const motorvarmer: ApplianceData = {
  slug: "motorvarmer",
  meta: {
    category: "transport",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["motorvarmer", "kabinevarmer", "motorvarmer bil", "motorvarmer med timer", "defa motorvarmer", "calix motorvarmer", "bilvarmer", "kupévarmer", "elektrisk forvarmer"],
  },
  name: "Motorvarmer",
  article: "en",
  title: "Motorvarmer strømforbrug (2026) → kWh pr. morgen og timer",
  description:
    "Se hvor meget strøm en motorvarmer og en kabinevarmer bruger pr. morgen: 550-750 W i 1-3 timer efter frosten, og hvorfor den aldrig skal stå på hele natten.",
  heading: "Strømforbrug for en motorvarmer: kWh, pris pr. morgen og dyreste timer",
  quickAnswer:
    "En motorvarmer på 550 W, der kører en time før afgang ved 0 grader, bruger 0,55 kWh og koster cirka {{kr 0,55}} ved {{pris_kwh}}. Med 60 kolde morgener om året bliver det omkring 33 kWh, eller {{kr 33}}. Står den tændt hele natten, kan den samme morgen let koste ti gange så meget, uden at motoren bliver varmere.",
  kwhRange: [5, 400],
  typicalKwh: 33,
  wattage: 550,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [2.6, 2.4, 1.6, 0.5, 0, 0, 0, 0, 0, 0.5, 1.6, 2.4],
  content: `<h2>Hvad gør en motorvarmer?</h2>
<p>En motorvarmer er et varmelegeme, der sidder i bilens kølesystem, i bundkarret eller direkte på motorblokken. Du sætter bilen til en stikkontakt med en ledning, og varmelegemet varmer motoren op, før du starter. En forvarmet motor starter lettere, slides mindre og bruger mindre brændstof de første kilometer. Mange har samtidig en kabinevarmer, en lille elektrisk varmeblæser i kabinen, så ruderne er fri for is, og sæderne ikke er iskolde.</p>
<p>Effekten afhænger af typen. DEFA, der laver motorvarmere til mange bilmærker, skriver i sin tekniske håndbog, at deres motorvarmere har 175-2.000 W: varmere i kølevandet 550-2.000 W, varmere i olien 175-370 W og kontaktvarmere på motorblokken 300-400 W. Calix oplyser 550 W for MVP 908 og 750 W for M7T 236. DEFAs kabinevarmere i Termini-serien har 1.000-1.400 W, de største op til 2.100 W. Den samme slags varme på 230 V kender du fra <a href="/campingvogn/">campingvognen</a>, hvor varmeanlægget kan køre på strøm fra campingpladsens stik.</p>

<h2>Hvor længe skal motorvarmeren være tændt?</h2>
<p>Det er tiden, der afgør forbruget, og her siger producenterne det samme: kortere end de fleste tror. Calix anbefaler i manualen til M7T 236 én time ved 0 grader og ved plus 10 grader, halvanden time ved minus 5, to timer ved minus 10 og tre timer ved minus 20 grader. DEFA skriver, at deres automatiske styring tænder 90 minutter før afgang ved 0 grader og 195 minutter før ved minus 17 grader eller koldere.</p>
<table>
<thead><tr><th>Udetemperatur</th><th>Tid (Calix)</th><th>kWh med 550 W</th><th>Pris med 550 W</th><th>kWh med 750 W</th><th>Pris med 750 W</th></tr></thead>
<tbody>
<tr><td>+10 °C til 0 °C</td><td>1 time</td><td>0,55</td><td>{{kr 0,55}}</td><td>0,75</td><td>{{kr 0,75}}</td></tr>
<tr><td>-5 °C</td><td>1,5 timer</td><td>0,83</td><td>{{kr 0,83}}</td><td>1,13</td><td>{{kr 1,13}}</td></tr>
<tr><td>-10 °C</td><td>2 timer</td><td>1,1</td><td>{{kr 1,1}}</td><td>1,5</td><td>{{kr 1,5}}</td></tr>
<tr><td>-20 °C</td><td>3 timer</td><td>1,65</td><td>{{kr 1,65}}</td><td>2,25</td><td>{{kr 2,25}}</td></tr>
</tbody>
</table>
<p>En dansk vinter har mange morgener omkring frysepunktet og få under minus 10 grader, så en time er det almindelige. Beregneren regner med 60 morgener om året, hvilket er vores skøn for en bil, der bruges til arbejde hver dag i de kolde måneder.</p>

<h2>Hele natten er spild</h2>
<p>Den største fejl er at sætte motorvarmeren til om aftenen og lade den stå hele natten. DEFA skriver, at motoren efter cirka tre timer ved minus 15 grader har nået en balance, hvor den taber lige så meget varme, som varmeren tilfører. Motorvarmeren kan godt stå tilsluttet længere uden at tage skade, men ifølge DEFA giver det et unødigt strømforbrug. Ti timer med en varmer på 550 W bruger 5,5 kWh og koster {{kr 5,5}} — ti gange så meget som den ene time, der er nok ved 0 grader.</p>
<p>Derfor bør motorvarmeren altid styres af et ur, en timer eller en app. En simpel mekanisk timer i stikkontakten gør det, men en styring, der regner tiden ud efter udetemperaturen, rammer bedre. Det er sådan, DEFAs automatik virker: jo koldere, desto tidligere tænder den.</p>

<h2>Kabinevarmeren: mere strøm, kortere tid</h2>
<p>En kabinevarmer har typisk en højere effekt end motorvarmeren, men har en termostat og behøver ikke køre så længe. Kører en kabinevarmer på 1.200 W en time sammen med en motorvarmer på 550 W, bruger de tilsammen 1,75 kWh — svarende til {{kr 1,75}}. Du kan nøjes med at lade kabinevarmeren køre den sidste halve time, eller kun bruge den, når frosten er hård. Med en forvarmet motor bliver bilens eget varmeanlæg også hurtigere varmt, når du kører.</p>

<h2>Hvornår bruger motorvarmeren strøm?</h2>
<p>En motorvarmer er det modsatte af et apparat, der kan flyttes til billige timer. Varmen skal være der lige før du kører, og en motor, der blev varmet op kl. 3 om natten, er kold igen kl. 7. Forbruget falder derfor altid i timerne før afgang — for de fleste mellem kl. 5 og 8 om morgenen. De timer ligger uden for den dyreste periode fra kl. 17 til 21, hvor nettariffen er højest, men spotprisen stiger ofte om morgenen, når landet vågner. Boksen længere oppe på siden viser, hvad timerne koster i dag.</p>
<p>Det, du kan gøre, er at holde tiden kort. Skal du først køre om eftermiddagen, så sæt uret efter det tidspunkt — og brug motorvarmeren før hjemturen fra arbejdet, hvis der er en stikkontakt på parkeringspladsen.</p>

<h2>Hvad sparer du på brændstof og slid?</h2>
<p>En kold motor bruger mere brændstof, fordi olien er tyk, og motoren kører med en fed blanding, indtil den er varm. DEFA skriver i sin håndbog, at en koldstarttest ved minus 20 grader med tre timers forvarmning gav et benzinforbrug, der var omkring 15-30 procent lavere de første kilometer, og et dieselforbrug, der var 8-12 procent lavere. DEFA skriver også, at en forvarmet motor starter lettere og slides mindre.</p>
<p>FDM anbefaler en motor- og kabinevarmer frem for at lade bilen stå i tomgang for at blive varm. Tomgang er både dårligt for motoren og i de fleste kommuner kun tilladt i et minut, i få tilfælde op til tre, og du kan få en bøde.</p>

<h2>Og elbilen?</h2>
<p>En <a href="/elbil/">elbil</a> har ingen motorvarmer, men kan forvarme kabinen og batteriet, mens den står til opladning. Når bilen er tilsluttet, kan forvarmningen tage strømmen fra nettet i stedet for fra batteriet, og den kan styres fra bilens app med en afgangstid — samme princip som en motorvarmer med ur. Kører du på <a href="/el-scooter/">el-scooter</a> om vinteren, gælder et lignende råd: lad batteriet indendørs, så det ikke er iskoldt, når du kører. Står elbilen ved en <a href="/ladestander/">ladestander</a>, er det derfor også her en god idé at forvarme lige før afgang og ikke længere.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Brug altid et ur eller en timer — aldrig hele natten.</li>
<li>Følg producentens tider: en time ved 0 grader er typisk nok.</li>
<li>Lad kabinevarmeren køre kortere end motorvarmeren.</li>
<li>Tjek ledningen og stikket hver vinter; en slidt ledning udendørs er farlig.</li>
<li>Brug en udendørs stikkontakt med fejlstrømsafbryder.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad din motorvarmer koster med dine morgener og din temperatur.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en motorvarmer?",
      answer:
        "Typisk 550-750 W, mens den er tændt. En time med en varmer på 550 W bruger 0,55 kWh og koster {{kr 0,55}}. DEFAs motorvarmere spænder fra 175 til 2.000 W afhængigt af type og motor.",
    },
    {
      question: "Hvor længe skal motorvarmeren være tændt?",
      answer:
        "Calix anbefaler én time ved 0 grader, halvanden time ved minus 5, to timer ved minus 10 og tre timer ved minus 20 grader. Længere tid giver ikke en varmere motor.",
    },
    {
      question: "Hvad koster det at have motorvarmeren tændt hele natten?",
      answer:
        "Ti timer med en varmer på 550 W bruger 5,5 kWh og koster {{kr 5,5}}. DEFA skriver, at motoren har nået balance efter cirka tre timer ved minus 15 grader, så resten er spild.",
    },
    {
      question: "Hvad koster en motorvarmer om året?",
      answer:
        "Med 60 kolde morgener og en time pr. gang bruger en varmer på 550 W omkring 33 kWh, svarende til {{kr 33}}. Med en kabinevarmer på 1.200 W oveni bliver det cirka det tredobbelte.",
    },
    {
      question: "Kan jeg lade motorvarmeren køre om natten, når strømmen er billig?",
      answer:
        "Nej, varmen forsvinder igen, før du kører. Motorvarmeren skal køre lige før afgang, og det gør tiden — ikke timeprisen — til det vigtigste.",
    },
    {
      question: "Sparer en motorvarmer brændstof?",
      answer:
        "Ja, de første kilometer. DEFA skriver, at en koldstarttest ved minus 20 grader gav omkring 15-30 procent lavere benzinforbrug og 8-12 procent lavere dieselforbrug de første kilometer.",
    },
  ],
  relatedSlugs: ["elbil", "ladestander", "varmeblaeser", "campingvogn", "el-scooter"],
  sources: [
    { name: "DEFA — Teknisk håndbok motorvarmere (effekter, styring, koldstarttest)", url: "https://www.defa.com/content/uploads/Documentation/Downloads/Technical-information/Electrical-preheating/Norwegian/Tekninsk-H%C3%A5ndbok-Motorvarmere-2009.pdf" },
    { name: "DEFA — Produktkatalog 2024 (Termini kabinevarmere, termisk balance)", url: "https://www.defa.com/content/uploads/Documentation/Marketing-Materials/490587_No_Auto_Industry.2024.Digital.pdf" },
    { name: "Calix — MVP 908 motorvarmer (550 W)", url: "https://calix.se/download/44/engine-heaters/4444/re908.pdf" },
    { name: "Calix — M7T 236 motorvarmer (750 W, anbefalet tid)", url: "https://calix.se/download/44/engine-heaters/4189/re236.pdf" },
    { name: "FDM — Kold tomgang skader bilen og kan give en bøde", url: "https://fdm.dk/nyheder/bilist/2016-01-kold-tomgang-skader-bilen-kan-give-en-boede" },
  ],
  calculatorConfig: {
    title: "Beregn motorvarmerens strømforbrug",
    options: [
      { label: "Motorvarmer 550 W, 1 time (omkring 0 °C)", kwhPerUse: 0.55 },
      { label: "Motorvarmer 750 W, 2 timer (omkring -10 °C)", kwhPerUse: 1.5 },
      { label: "Motorvarmer 550 W + kabinevarmer 1.200 W, 1 time", kwhPerUse: 1.75 },
      { label: "Motorvarmer 750 W, 3 timer (omkring -20 °C)", kwhPerUse: 2.25 },
    ],
    usageLabel: "Kolde morgener pr. år",
    usageUnit: "morgener/år",
    usageMin: 5,
    usageMax: 180,
    usageDefault: 60,
    usageStep: 1,
    per: "morgen",
    perYear: 1,
  },
  publishDate: "2026-12-17",
  updated: "2026-11-22",
};

export default motorvarmer;
