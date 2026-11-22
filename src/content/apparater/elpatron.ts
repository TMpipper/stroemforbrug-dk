import type { ApplianceData } from "@/lib/types";

const elpatron: ApplianceData = {
  slug: "elpatron",
  meta: {
    category: "varmtVand",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: true,
    synonyms: [
      "elpatron",
      "el-patron",
      "elpatron varmtvandsbeholder",
      "elpatron solvarme",
      "elpatron brændeovnskedel",
      "elpatron akkumuleringstank",
      "varmelegeme vandvarmer",
      "elpatron solceller overskud",
    ],
  },
  name: "Elpatron",
  article: "en",
  title: "Elpatron strømforbrug (2026) → kW, opvarmningstid og timer",
  description:
    "En elpatron på 3 kW bruger 3 kWh i timen og varmer en beholder på ca. 100 liter op på knap to timer. Se forbruget pr. dag og år, og hvornår du bør tænde den.",
  heading: "Strømforbrug for en elpatron: watt, pris i timen og billigste tidspunkt",
  quickAnswer:
    "En elpatron bruger lige så mange kWh i timen, som den har kilowatt: en patron på 3 kW bruger 3 kWh i timen og koster {{kr 3}} i timen ved {{pris_kwh}}. Laver den alt det varme vand til en almindelig husstand, kører den efter vores beregning lidt over en time om dagen, og året lander omkring 1.400 kWh, svarende til {{kr 1400}}. Fordi vandet gemmes i beholderen, kan timerne lægges, hvor strømmen er billigst.",
  kwhRange: [150, 3000],
  typicalKwh: 1400,
  wattage: 3000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.05, 1.0, 0.95, 0.85, 0.8, 0.8, 0.9, 1.0, 1.1, 1.3],
  content: `<h2>Hvad er en elpatron?</h2>
<p>En elpatron er et elektrisk varmelegeme, der sidder inde i en vandbeholder. Den har en termostat, der tænder, når vandet er koldere end den indstillede temperatur, og slukker, når det er varmt nok. Den findes i den almindelige el-vandvarmer, hvor den er eneste varmekilde, og den sidder som ekstra varme i beholdere, der ellers varmes af et fyr, af solvarme, af en brændeovnskedel eller af en varmepumpe. Her bruges den om sommeren, når fyret er slukket, eller som backup, når den anden varmekilde ikke slår til.</p>
<p>Elpatronen er ikke selve beholderen. Beholderens størrelse og isolering afgør, hvor meget varme der går tabt, mens vandet venter; elpatronen afgør kun, hvor hurtigt det varmes op. Vil du læse om beholderens varmetab, så se siden om <a href="/varmtvandsbeholder/">varmtvandsbeholderen</a>. Her handler det om patronen og om, hvornår den bruger strømmen.</p>

<h2>Effekt og forbrug i timen</h2>
<p>Metro Therm sælger en reserve-elpatron på 1-3 kW til sine Cabinet- og Modul-beholdere på 60-300 liter, og producentens datablad for el-vandvarmeren model 110 angiver et varmelegeme på 3,0 kW. Det er den typiske størrelse i en husholdningsbeholder. Al strømmen bliver til varme i vandet, så forbruget i timen er det samme som effekten, så længe termostaten holder patronen tændt.</p>
<table>
<thead><tr><th>Elpatron</th><th>kWh i timen (tændt)</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>1 kW</td><td>1</td><td>{{kr 1}}</td></tr>
<tr><td>2 kW</td><td>2</td><td>{{kr 2}}</td></tr>
<tr><td>3 kW (typisk husholdning)</td><td>3</td><td>{{kr 3}}</td></tr>
<tr><td>6 kW (større tank, vores eksempel)</td><td>6</td><td>{{kr 6}}</td></tr>
</tbody>
</table>
<p>En større effekt gør ikke vandet billigere. En patron på 1 kW og en på 3 kW bruger præcis lige mange kWh på at varme den samme beholder op; den lille er bare tre gange så længe om det. Effekten betyder noget for, hvor hurtigt du har varmt vand igen efter et langt bad, og for, hvor få timer du kan nøjes med at varme i — hvilket bliver vigtigt, når du vil ramme de billige timer.</p>

<h2>Hvor længe tager det at varme beholderen op?</h2>
<p>Det kræver 1,163 Wh at varme én liter vand én grad. Metro Therms model 110 rummer 98 liter og er fra fabrikken indstillet til 57 grader. Fra koldt vand på 10 grader skal beholderen altså have 98 × 47 × 1,163 Wh, eller cirka 5,4 kWh. Med patronen på 3 kW tager det lige under to timer, hvis intet går tabt imens. Tabellen viser vores beregning for nogle typiske beholdere:</p>
<table>
<thead><tr><th>Beholder (10 → 57 grader)</th><th>kWh</th><th>Tid med 3 kW</th><th>Pris for en fuld opvarmning</th></tr></thead>
<tbody>
<tr><td>60 liter</td><td>3,3</td><td>ca. 1 time 5 min</td><td>{{kr 3,3}}</td></tr>
<tr><td>98 liter</td><td>5,4</td><td>ca. 1 time 50 min</td><td>{{kr 5,4}}</td></tr>
<tr><td>160 liter</td><td>8,7</td><td>ca. 2 timer 55 min</td><td>{{kr 8,7}}</td></tr>
<tr><td>300 liter</td><td>16,4</td><td>ca. 5 timer 30 min</td><td>{{kr 16,4}}</td></tr>
</tbody>
</table>
<p>I hverdagen tømmes beholderen sjældent helt, så patronen kører i kortere ryk, når der er tappet varmt vand, og et kort øjeblik nu og da for at erstatte det, beholderen taber.</p>

<h2>Forbruget over et år</h2>
<p>Metro Therms datablad for model 110 viser energimærkets regnestykke for en hel el-vandvarmer: belastningsprofil M, energiklasse C og et årligt elforbrug på 1.378 kWh. Profil M svarer ifølge EU-forordning 812/2013 til et tappeprogram på 5,845 kWh varmt vand om dagen. Det er et godt bud på en almindelig husstand, og det er her, vores typiske tal på 1.400 kWh kommer fra: en patron på 3 kW, der i gennemsnit kører godt en time og et kvarter om dagen hele året. Det svarer til {{kr 1400}} om året eller {{kr 1400 /md}} om måneden.</p>
<p>Sidder patronen i en beholder, der ellers varmes af et fyr eller af solvarme, er forbruget et helt andet. Bruges den kun i sommermånederne, når et <a href="/pillefyr/">pillefyr</a> eller en brændeovnskedel er slukket, er det typisk tre til fire måneders varmt vand — efter vores skøn 350-500 kWh med samme husstand. Er der solvarme på taget, laver solen en stor del af vandet om sommeren, og patronen skal kun tage over på grå dage.</p>
<p>Bolius har flere gange svaret på, om det kan betale sig at sætte en elpatron i en gasfyret beholder for at slukke fyret om sommeren. Svaret har været nej: i oktober 2022 regnede Bolius med gennemsnitspriserne for september og fandt, at et bad med el-vandvarmer var dyrere end med naturgas, og i et svar fra april samme år tvivlede Bolius' ekspert på, at en elpatron var en økonomisk fornuftig investering. Det afhænger af elprisen i forhold til gasprisen, så regn efter med dine egne tal.</p>

<h2>Hvornår skal elpatronen køre?</h2>
<p>Det er her, elpatronen adskiller sig fra de fleste apparater i hjemmet. Beholderen er et lager. Det varme vand, du bruger kl. 7, kan være varmet op kl. 3, og så er det nattens pris, der tæller. Med en timer, et relæ eller en smart styring kan patronen holdes slukket i de dyre timer og tændes i de billige. Med 3 kW kan en almindelig beholder varmes op på et par timer, så det er nok at ramme dagens billigste vindue. Oversigten over dagens timepriser ovenfor viser, hvad en time med patronen koster i det billigste og det dyreste vindue i dag.</p>
<p>To forbehold. Beholderen skal være stor nok til at klare dagens forbrug uden at patronen må træde til midt i spidsen. Og vandet skal stadig blive varmt nok: Bolius anbefaler at holde beholderen på mindst 55 grader, så det varme vand i hanen er mindst 50 grader efter 5-10 sekunder. Ved 55 grader dør legionella inden for 5-6 timer, så sænk ikke temperaturen for at spare.</p>

<h2>Elpatron og solceller</h2>
<p>Har du <a href="/solceller/">solceller</a>, kan elpatronen bruge overskudsstrøm, der ellers ville blive solgt. Teknologisk Institut har testet det i et forsøg med et énfamiliehus: en beholder på over 200 liter kan optage et par timers overskud fra et typisk anlæg på 4-5 kW, og samlet kom cirka 77 procent af den lagrede strøm ud igen som varmt vand — omtrent samme virkningsgrad som i de batterier, instituttet målte. Instituttet anbefaler, at elpatronen sidder direkte i beholderen, og at styringen får et signal fra solcellernes inverter, så beholderen er kold, når solen begynder at skinne.</p>
<p>Varmetabet er dog betydeligt i en lille beholder: i forsøget faldt temperaturen fra 50 til 34 grader på en uge. Overskudsvarmen skal derfor bruges inden for et døgn eller to. Sammenlign gerne med et <a href="/husbatteri/">husbatteri</a>, som gemmer strømmen som strøm og har sine egne tab.</p>

<h2>Sådan holder du elpatronens forbrug nede</h2>
<ul>
<li><strong>Styr tidspunktet</strong> — varm vandet op i dagens billige timer, og hold patronen slukket kl. 17-21.</li>
<li><strong>Hold beholderen på 55 grader</strong> — højere giver mere varmetab og kalk, lavere giver risiko for legionella.</li>
<li><strong>Isolér rørene</strong> fra beholderen til tappestederne.</li>
<li><strong>Brug sparebruser</strong> — mindre varmt vand betyder færre timer med patronen tændt.</li>
<li><strong>Afkalk</strong> — kalk på varmelegemet isolerer det fra vandet og kan forkorte patronens levetid.</li>
<li><strong>Overvej alternativet</strong> — bruger du meget lidt varmt vand, kan en <a href="/gennemstroemningsvandvarmer/">gennemstrømningsvandvarmer</a> uden beholder bruge mindre.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger en elpatron i timen?", answer: "Lige så meget som dens effekt: en patron på 3 kW bruger 3 kWh i timen, når den er tændt, svarende til {{kr 3}} ved {{pris_kwh}}. Termostaten slukker den, når vandet er varmt." },
    { question: "Hvor lang tid tager det at varme 100 liter vand med en elpatron på 3 kW?", answer: "Fra 10 til 57 grader skal der bruges ca. 5,4 kWh, så det tager lige under to timer efter vores beregning. Det koster ca. {{kr 5,4}} for en helt kold beholder." },
    { question: "Hvad koster en elpatron om året?", answer: "Laver den alt det varme vand til en almindelig husstand, ca. 1.400 kWh — det tal, Metro Therms el-vandvarmer har på energimærket i profil M. Det svarer til {{kr 1400}} om året. Kun som sommerdrift er det efter vores skøn 350-500 kWh." },
    { question: "Kan jeg styre elpatronen efter elprisen?", answer: "Ja. Beholderen gemmer det varme vand, så patronen kan varme i de billige timer med en timer, et relæ eller en smart styring. Sørg for, at beholderen kan klare dagens forbrug, og at vandet når mindst 55 grader, som Bolius anbefaler." },
    { question: "Kan en elpatron bruge overskud fra solceller?", answer: "Ja. Teknologisk Institut fik i et forsøg ca. 77 procent af den lagrede solcellestrøm ud som varmt vand. Beholderen bør være over 200 liter, og varmen skal bruges inden for et døgn eller to." },
    { question: "Kan det betale sig med en elpatron ved gasfyr om sommeren?", answer: "Bolius har i flere svar konkluderet nej, fordi varmt vand med el har været dyrere end med naturgas. Regnestykket afhænger af forholdet mellem el- og gasprisen." },
  ],
  relatedSlugs: ["varmtvandsbeholder", "gennemstroemningsvandvarmer", "solceller", "husbatteri", "pillefyr"],
  sources: [
    { name: "Metro Therm — Datablad, elvandvarmer model 110 (forordning 812/2013)", url: "https://res.cloudinary.com/evoleska/image/upload/v1690922310/hm3uijuupd4k6vpet7i1.pdf" },
    { name: "Bauhaus — Elpatron Metro Therm 1-3 kW til varmtvandsbeholder", url: "https://www.bauhaus.se/elpatron-metro-therm-1-3-kw-till-varmvattenberedare-847983" },
    { name: "Teknologisk Institut — Lagring af solcelle-el fra énfamiliehus på batterier og/eller varmepumpe", url: "https://www.teknologisk.dk/_/media/65762%5FLagring%20af%20solcelle%2Del%20fra%20enfamiliehus%20p%E5%20batterier%20og%20eller%20varmepumpe.pdf" },
    { name: "Bolius — Gasfyr: Kan det betale sig med el-patron i vandvarmeren?", url: "https://www.bolius.dk/gasfyr-kan-det-betale-sig-med-el-patron-i-vandvarmeren-97993" },
    { name: "Bolius — Gasfyr: Kan det betale sig med el-patron i varmtvandsbeholderen?", url: "https://www.bolius.dk/gasfyr-kan-det-betale-sig-med-el-patron-i-varmtvandsbeholderen-36183" },
    { name: "Bolius — Er der risiko for legionella i vandet, hvis jeg skruer ned for vandvarmeren?", url: "https://www.bolius.dk/er-der-risiko-for-legionella-i-vandet-hvis-jeg-skruer-ned-for-vandvarmeren-20978" },
    { name: "Forordning (EU) nr. 812/2013, bilag VII — belastningsprofiler", url: "https://www.legislation.gov.uk/eur/2013/812/annex/VII" },
  ],
  calculatorConfig: {
    title: "Beregn elpatronens strømforbrug",
    options: [
      { label: "1 kW", kwhPerUse: 1 },
      { label: "2 kW", kwhPerUse: 2 },
      { label: "3 kW (typisk husholdning)", kwhPerUse: 3 },
      { label: "6 kW (større tank)", kwhPerUse: 6 },
    ],
    usageLabel: "Timer tændt pr. dag (hele året)",
    usageUnit: "timer/dag",
    usageMin: 0.25,
    usageMax: 12,
    usageDefault: 1.25,
    usageStep: 0.25,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-12-06",
  updated: "2026-11-22",
};

export default elpatron;
