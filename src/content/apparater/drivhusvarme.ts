import type { ApplianceData } from "@/lib/types";

/**
 * Drivhusvarme — frostvagt, varmeblæser og rørvarmer i et hobbydrivhus. Intet EU-energimærke.
 * Tal: Bio Green Tropic (25/1.000/2.000 W; 1.000 W frostfrit til ca. 2 × 3 m, 2.000 W til ca. 3 × 4 m, brugsanvisning),
 * Cotech frost- og drivhusvagt 200 W, termostat 5-35 °C (Clas Ohlson), rørvarmere ca. 60 W pr. fod og dimensioneringstabel
 * (Two Wests & Elliott), varmetabsfaktor 1,1 for enkelt glas mod 0,6 med bobleplast (Hartley Botanic), frostfrit = 4 °C og
 * bobleplast tager ca. 10 % af lyset (RHS), 5-gradersreglen og bobleplast (Bolius), frostdøgn pr. måned og middel af
 * minimumstemperatur, normal 1991-2020 (DMI Rapport 25-01). Sæsonprofilen er DMI's frostdøgn pr. måned.
 * kWh pr. døgn og pr. vinter er vores skøn (varmetab × gradtimer), ikke målinger.
 */
const drivhusvarme: ApplianceData = {
  slug: "drivhusvarme",
  meta: {
    category: "have",
    usage: "heating",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["drivhusvarme", "drivhusvarmer", "varme i drivhus", "frostvagt", "frostvagt drivhus", "varmeblæser til drivhus", "rørvarmer", "drivhus frostfrit", "bio green varmeblæser", "overvintring drivhus"],
  },
  name: "Drivhusvarmer",
  article: "en",
  title: "Drivhusvarme strømforbrug (2026) → frostvagt og kWh/vinter",
  description:
    "Se hvad det koster at holde drivhuset frostfrit med en frostvagt eller varmeblæser: kWh pr. frostnat og pr. vinter, og hvor meget bobleplast sparer.",
  heading: "Strømforbrug for en drivhusvarmer: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "En drivhusvarmer på 1.000-2.000 W bruger 1-2 kWh i hver time, den er tændt, men med termostat på 4-5 grader kører den kun i de kolde timer. Efter vores skøn bruger et drivhus på 6 m² med bobleplast omkring 4 kWh på et koldt døgn og cirka 360 kWh på en vinter, svarende til {{kr 360}} ved {{pris_kwh}}. Uden bobleplast er det næsten det dobbelte.",
  kwhRange: [50, 3000],
  typicalKwh: 360,
  wattage: 1000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [15.3, 14.8, 12.5, 4.2, 0.5, 0, 0, 0, 0.1, 2.2, 6.0, 12.2],
  content: `<h2>Frostfrit eller varmt: to helt forskellige regninger</h2>
<p>Varme i drivhuset handler for de fleste om at holde frosten ude, så citrustræer, pelargonier, oliven og stiklinger kan overvintre. Det britiske haveselskab RHS sætter frostfrit til 4 grader. Det er en lav temperatur, og den koster forholdsvis lidt, fordi varmeren kun skal arbejde i de timer, hvor det fryser eller er tæt på. Vil du i stedet holde 10-15 grader hele vinteren, er det en helt anden regning: så kører varmeren næsten hver dag fra november til marts.</p>
<p>Der er også en regel at kende. Bolius skriver, at du godt må holde drivhuset frostfrit og varme det op til 5 grader. Over 5 grader skal drivhuset opfylde energikravene for helårsboliger, og over 15 grader gælder alle reglerne for helårsboliger. For et almindeligt hobbydrivhus er frostvagten på 4-5 grader altså både det billigste og det, der passer til reglerne.</p>

<h2>Watt: frostvagt, varmeblæser og rørvarmer</h2>
<p>Varmeren selv omsætter al strømmen til varme, præcis som en <a href="/varmeblaeser/">varmeblæser</a> i huset. Det, der skiller typerne ad, er effekten, og hvor jævnt varmen fordeler sig.</p>
<table>
<thead><tr><th>Varmer</th><th>Effekt</th><th>kWh i timen, når den kører</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Cotech frost- og drivhusvagt</td><td>200 W</td><td>0,2</td><td>{{kr 0,2}}</td></tr>
<tr><td>Rørvarmer, 120 cm</td><td>ca. 240 W</td><td>0,24</td><td>{{kr 0,24}}</td></tr>
<tr><td>Bio Green Tropic, mellemtrin</td><td>1.000 W</td><td>1</td><td>{{kr 1}}</td></tr>
<tr><td>Bio Green Tropic, fuld effekt</td><td>2.000 W</td><td>2</td><td>{{kr 2}}</td></tr>
</tbody>
</table>
<p>Bio Green skriver i brugsanvisningen til Tropic, at 1.000 W giver frostbeskyttelse i et drivhus på cirka 2 × 3 meter, og 2.000 W i et drivhus på cirka 3 × 4 meter. Clas Ohlsons frostvagt fra Cotech har en termostat, der kan stilles trinløst fra 5 til 35 grader. Rørvarmere er tynde varmerør, som monteres lavt langs væggene; den britiske producent Two Wests &amp; Elliott regner med omkring 60 W pr. fod, altså cirka 200 W pr. meter rør.</p>
<p>Kørte en varmeblæser på 2.000 W uden pause et helt døgn, ville den bruge 48 kWh. Det sker kun, hvis termostaten er sat for højt, eller hvis varmeren er for lille til en hård frostnat. Med en termostat på 4-5 grader står den stille det meste af vinteren.</p>

<h2>Hvad bruger et drivhus på en vinter?</h2>
<p>Ingen producent eller haveforening, vi har fundet, oplyser et samlet forbrug pr. vinter, så tallene her er vores skøn. Vi regner med et drivhus på 2 × 3 meter med omkring 24 m² glas. Hartley Botanic bruger en varmetabsfaktor på 1,1 for enkelt glas og 0,6 for glas foret med bobleplast; omregnet giver det efter vores beregning et varmetab på cirka 150 W pr. grad uden bobleplast og 80 W pr. grad med. DMI's normal for middel af minimumstemperaturen er -0,7 grader i januar, -0,9 i februar og 0,4 i december, så en typisk vinternat ligger 4-5 grader under en termostat på 4 grader.</p>
<table>
<thead><tr><th>Drivhus, frostfrit på 4 grader (vores skøn)</th><th>kWh på et koldt døgn</th><th>kWh på en vinter (90 døgn)</th><th>Pris for vinteren</th></tr></thead>
<tbody>
<tr><td>6 m² med bobleplast</td><td>ca. 4</td><td>ca. 360</td><td>{{kr 360}}</td></tr>
<tr><td>6 m² uden bobleplast</td><td>ca. 7,5</td><td>ca. 675</td><td>{{kr 675}}</td></tr>
<tr><td>12 m² med bobleplast</td><td>ca. 6</td><td>ca. 540</td><td>{{kr 540}}</td></tr>
<tr><td>12 m² uden bobleplast</td><td>ca. 11,5</td><td>ca. 1.035</td><td>{{kr 1035}}</td></tr>
</tbody>
</table>
<p>Et koldt døgn betyder her en nat med frost eller næsten frost, hvor varmeren kører i de mørke timer. De 90 døgn er et rundt tal for december til februar; DMI's normal for 1991-2020 er 67,7 frostdøgn om året på landsplan, hvoraf 42 falder i de tre vintermåneder. En mild vinter som 2024, hvor DMI talte 37,3 frostdøgn, kan halvere regningen, mens en hård vinter med lange frostperioder kan fordoble den.</p>

<h2>Bobleplast: næsten halvdelen af varmen</h2>
<p>Det, der flytter regningen mest, er isoleringen. Hartley Botanics faktorer svarer efter vores omregning til, at bobleplast på indersiden af glasset fjerner omkring 45 procent af varmetabet. Den britiske forhandler Two Wests &amp; Elliott skriver, at isolering kan spare op til halvdelen af varmeudgiften, og deres dimensioneringstabel viser det samme: et drivhus på 6 × 8 fod, cirka 1,8 × 2,4 meter, kræver 936 W isoleret mod 1.170 W uisoleret for at holde frosten ude.</p>
<p>Prisen er lys. RHS skriver, at et lag plast tager omkring 10 procent af lyset, og om vinteren, hvor lyset i forvejen er knapt, er det værd at vide. For planter, der overvintrer i dvale, betyder det sjældent noget. Bolius gør opmærksom på, at isolering med bobleplast ikke overholder energikravene, hvis drivhuset varmes op over 5 grader — endnu en grund til at holde sig til frostvagten.</p>

<h2>Varmeblæser eller rørvarmer?</h2>
<p>En varmeblæser flytter luften rundt, så der ikke opstår kolde lommer og fugt i hjørnerne, og den kan levere meget varme på kort tid. En rørvarmer giver en mere jævn, stille varme tæt på jorden og planterne. RHS skriver, at rørvarmere bruger mindre energi end varmeblæsere, fordi de afgiver varmen lavt og jævnt, og at de passer godt til et drivhus, der kun skal holdes frostfrit.</p>
<p>Uanset type er termostaten det vigtigste. Sid den ved planterne og ikke lige ved varmeren, og kontrollér den med et min/max-termometer de første uger. En termostat, der står 3 grader for højt, kan efter vores skøn øge forbruget med halvdelen, fordi varmeren så også kører i de nætter, hvor det slet ikke fryser. Mange billige varmeblæsere har kun en drejeknap uden gradinddeling; Bio Green skriver selv, at temperaturerne ikke kan markeres på skalaen.</p>

<h2>Kan drivhuset varmes i de billige timer?</h2>
<p>Kun i begrænset omfang. Frosten kommer om natten og tidligt om morgenen, og varmeren skal køre, når det er koldt, ikke når strømmen er billig. Det gode er, at nattens timer ofte er blandt døgnets billigste, mens eftermiddagens og aftenens spidstimer kl. 17-21 er de dyreste. En frostvagt bruger derfor typisk strøm i de timer, hvor prisen er lav, uden at du skal gøre noget.</p>
<p>Det, du selv kan gøre, er at lade solen lade drivhuset op om dagen. Lukker du døre og lemme tidligt på eftermiddagen på klare vinterdage, holder glasset på lidt af dagens varme, og varmeren starter senere. Et par sorte vandtønder inde i drivhuset gør det samme i lille skala. Skal du sidde ude om aftenen, er det en anden sag; så hører varmen til under en <a href="/terrassevarmer/">terrassevarmer</a> og ikke i drivhuset.</p>

<h2>Gode råd til en billigere vinter i drivhuset</h2>
<ul>
<li><strong>Hold dig til 4-5 grader</strong> — frostfrit er nok for de fleste planter i dvale, og det er det, reglerne tillader uden energikrav.</li>
<li><strong>Sæt bobleplast op</strong> — det fjerner efter vores beregning næsten halvdelen af varmetabet.</li>
<li><strong>Skær ned på pladsen</strong> — samler du planterne i den ene ende bag en plastvæg, skal der kun varmes en del af drivhuset.</li>
<li><strong>Tjek termostaten</strong> med et min/max-termometer ved planterne.</li>
<li><strong>Tæt sprækker</strong> ved døre og lemme; træk koster mere end glasset.</li>
<li><strong>Brug forlængerledninger og stik til udendørs brug</strong>, og hold varmeren tør. Har du også høns, er samme forsigtighed nødvendig i et <a href="/hoensehus/">hønsehus</a> om vinteren.</li>
</ul>`,
  faqs: [
    { question: "Hvad koster det at holde et drivhus frostfrit om vinteren?", answer: "Efter vores skøn bruger et drivhus på 6 m² med bobleplast cirka 360 kWh på en vinter med termostat på 4 grader, svarende til {{kr 360}} ved {{pris_kwh}}. Uden bobleplast er det omkring det dobbelte." },
    { question: "Hvor mange watt skal en drivhusvarmer have?", answer: "Bio Green angiver 1.000 W til frostbeskyttelse af et drivhus på cirka 2 × 3 meter og 2.000 W til cirka 3 × 4 meter. Med bobleplast kan en mindre varmer være nok." },
    { question: "Hvor meget sparer bobleplast i drivhuset?", answer: "Efter vores omregning af Hartley Botanics varmetabsfaktorer fjerner bobleplast omkring 45 procent af varmetabet. Til gengæld tager plasten ifølge RHS omkring 10 procent af lyset." },
    { question: "Må jeg varme mit drivhus op?", answer: "Bolius skriver, at du må holde drivhuset frostfrit og varme det op til 5 grader. Over 5 grader skal drivhuset opfylde energikravene for helårsboliger." },
    { question: "Hvad bruger en varmeblæser på 2.000 W i drivhuset på et døgn?", answer: "Kørte den hele døgnet uden pause, ville den bruge 48 kWh, svarende til {{kr 48}}. Med termostat på 4-5 grader kører den kun en lille del af tiden." },
    { question: "Er en rørvarmer billigere end en varmeblæser?", answer: "RHS skriver, at rørvarmere bruger mindre energi end varmeblæsere. De har lav effekt, cirka 200 W pr. meter rør, og afgiver varmen jævnt tæt på planterne." },
  ],
  relatedSlugs: ["varmeblaeser", "terrassevarmer", "hoensehus", "elradiator", "infraroedt-varmepanel"],
  sources: [
    { name: "Bio Green — brugsanvisning Tropic 2000 W", url: "https://cdn.shopify.com/s/files/1/0249/5889/4131/files/Bio_Green_Tropic_Heater_Operating_Instructions.pdf" },
    { name: "Clas Ohlson — Cotech frost- og drivhusvagt 200 W", url: "https://www.clasohlson.com/no/Frost--og-drivhusvakt-200-W/p/36-7867" },
    { name: "Two Wests & Elliott — Electric tubular heaters", url: "https://www.twowests.co.uk/a/blog/electric-tubular-heaters" },
    { name: "Two Wests & Elliott — How much electricity does a greenhouse heater use", url: "https://twowests.co.uk/a/blog/how-much-electricity-does-a-greenhouse-heater-use" },
    { name: "Hartley Botanic — Greenhouse heating calculator", url: "https://hartley-botanic.co.uk/guides/greenhouse-power-calculator/" },
    { name: "RHS — Heating greenhouses efficiently", url: "https://www.rhs.org.uk/garden-features/heating-greenhouses-efficiently" },
    { name: "Bolius — Sådan holder du dit drivhus varmt hele året", url: "https://www.bolius.dk/saadan-holder-du-dit-drivhus-varmt-hele-aaret-19529/" },
    { name: "DMI — Danmarks Klima 2024 (DMI Rapport 25-01)", url: "https://www.dmi.dk/fileadmin/Rapporter/2025/DMIRap25-01.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn drivhusvarmens strømforbrug",
    options: [
      { label: "6 m² med bobleplast, frostfrit (ca. 4 kWh pr. koldt døgn, vores skøn)", kwhPerUse: 4 },
      { label: "6 m² uden bobleplast, frostfrit (ca. 7,5 kWh)", kwhPerUse: 7.5 },
      { label: "12 m² med bobleplast, frostfrit (ca. 6 kWh)", kwhPerUse: 6 },
      { label: "12 m² uden bobleplast, frostfrit (ca. 11,5 kWh)", kwhPerUse: 11.5 },
      { label: "6 m² med bobleplast holdt på 10 grader (ca. 14 kWh)", kwhPerUse: 14 },
    ],
    usageLabel: "Døgn med varme pr. vinter",
    usageUnit: "døgn/år",
    usageMin: 10,
    usageMax: 200,
    usageDefault: 90,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-22",
  updated: "2026-11-23",
};

export default drivhusvarme;
