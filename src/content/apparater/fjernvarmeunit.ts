import type { ApplianceData } from "@/lib/types";

const fjernvarmeunit: ApplianceData = {
  slug: "fjernvarmeunit",
  meta: {
    category: "varme",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: [
      "fjernvarmeunit",
      "fjernvarmeanlæg",
      "fjernvarmeinstallation",
      "fjernvarme strømforbrug",
      "fjernvarme elforbrug",
      "fjernvarmeveksler",
      "unit til fjernvarme",
      "termix",
      "danfoss ecl",
    ],
  },
  name: "Fjernvarmeunit",
  article: "en",
  title: "Fjernvarmeunit strømforbrug (2026) → Pumpe og styring",
  description:
    "En fjernvarmeunit bruger kun strøm til pumpen og styringen — fra ca. 120 kWh om året med en ny pumpe til omkring 500 kWh med en gammel. Se fordelingen.",
  heading: "Strømforbrug for en fjernvarmeunit: kWh i døgnet og pris om året",
  quickAnswer:
    "Fjernvarmen kommer færdigvarm ind i huset, så unitten bruger kun strøm til cirkulationspumpen og den elektroniske styring. Med en ny pumpe og vejrkompensering bliver det efter vores beregning ca. 0,33 kWh i døgnet eller 120 kWh om året, svarende til {{kr 120}} ved {{pris_kwh}}. Sidder der en gammel pumpe fra før 1995, bruger den ifølge Bolius 482 kWh om året alene.",
  kwhRange: [60, 600],
  typicalKwh: 120,
  wattage: 15,
  standbyWatts: 3,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.25, 1.2, 1.15, 1.05, 0.85, 0.7, 0.65, 0.65, 0.8, 1.05, 1.3, 1.35],
  content: `<h2>Varmen kommer udefra — strømmen bruges indenfor</h2>
<p>Har du fjernvarme, er der ingen brænder, kompressor eller varmelegeme i huset. Det varme vand kommer fra fjernvarmeværket gennem stikledningen, og i unitten — kassen på væggen i bryggerset eller teknikrummet — afleveres varmen til husets radiatorer, gulvvarme og varme brugsvand. Unitten består typisk af en eller to pladevarmevekslere, ventiler, en regulator, en ekspansionsbeholder og en cirkulationspumpe.</p>
<p>Det er kun pumpen og elektronikken, der bruger strøm. Varmen betaler du til fjernvarmeværket; strømmen til at sende den rundt i huset står på elregningen. Det er derfor, en fjernvarmeunit har et af de mindste strømforbrug blandt varmeanlæg — men også derfor, en gammel pumpe kan gøre den til en overraskende post.</p>

<h2>Hvad bruger pumpen og styringen?</h2>
<p>Wavins datablad for fjernvarmeunitten Calefa SPLIT er et godt eksempel på en moderne unit. Den har en Grundfos UPM 3-pumpe og kan leveres med en Danfoss ECL 110-styring til vejrkompensering, og for styringen oplyser databladet et effektforbrug på 3 W i standby og højst 55 W. Wavin skriver desuden, at vejrkompensering til styring af temperaturen i varmekredsen er et lovkrav.</p>
<table>
<thead><tr><th>Del</th><th>Effekt</th><th>kWh om året (døgnet rundt)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Styring i standby (Danfoss ECL 110, Wavins datablad)</td><td>3 W</td><td>26</td><td>{{kr 26}}</td></tr>
<tr><td>Ny, automatisk styret pumpe (Bolius: ned til ca. 120 kWh om året)</td><td>ca. 10-14 W i snit</td><td>ca. 90-120</td><td>{{kr 90-120}}</td></tr>
<tr><td>Ældre pumpe på laveste trin (vores skøn)</td><td>ca. 40 W</td><td>ca. 350</td><td>{{kr 350}}</td></tr>
<tr><td>Pumpe fra før 1995 (Bolius)</td><td>55 W</td><td>482</td><td>{{kr 482}}</td></tr>
</tbody>
</table>
<p>Tabellen viser, at pumpens alder betyder langt mere end selve unitten. En ny unit med automatisk pumpe og vejrkompensering ligger omkring 0,3 kWh i døgnet; en gammel unit med en pumpe på fast trin kan bruge fire gange så meget. Bolius' råd fra listen over hjemmets store strømslugere er, at en pumpe med trinvælger fra 1 til 3 eller et manuelt håndtag er for gammel og bør skiftes ud, og at det kan betale sig at skifte, hvis pumpen bruger 50 W eller mere på laveste trin — uanset alder.</p>

<h2>Direkte og indirekte units</h2>
<p>Der findes to hovedtyper. I en direkte unit løber fjernvarmevandet ud i husets radiatorer, og så er det ofte trykket fra fjernvarmenettet, der skubber vandet rundt; nogle direkte anlæg har slet ingen pumpe, mens andre har en pumpe til gulvvarmen eller en blandesløjfe. I en indirekte unit som Calefa SPLIT skiller en varmeveksler fjernvarmevandet fra husets eget vand, og så skal en pumpe i unitten sende husets vand rundt. Indirekte units er de mest udbredte i nyere installationer.</p>
<p>Det varme brugsvand laves enten i en varmeveksler, der varmer vandet, mens det løber — så bruger brugsvandet ingen strøm — eller i en varmtvandsbeholder, der varmes af fjernvarmen. Har beholderen en cirkulationsledning, så der hurtigt kommer varmt vand ud af hanen, sidder der ofte en lille brugsvandspumpe ved siden af, og den kører typisk døgnet rundt.</p>

<h2>Sommerlukning: pumpen kan holde ferie</h2>
<p>Om sommeren er der ikke brug for varme i radiatorerne. Bolius skriver, at hvis fjernvarmeunitten ikke allerede er indstillet til at sommerlukke, kan det gøres forholdsvis nemt, og at du så kun betaler for det varme brugsvand. Med sommerlukning står varmekredsens pumpe stille eller kører kun kort for at motionere, og forbruget falder. Vores sæsonprofil har derfor et lavere forbrug fra maj til september. Kører din pumpe med samme hastighed hele året, er forbruget det samme hver måned.</p>
<p>Bolius har også svaret på, om det kan betale sig at slukke fjernvarmen om sommeren og lave varmt vand med el i stedet: svaret er nej. En <a href="/elpatron/">elpatron</a> bruger langt mere strøm på at varme vandet, end unitten bruger på at sende det rundt.</p>

<h2>Fjernvarme mod andre varmeanlæg</h2>
<p>Sammenlignet med et <a href="/gasfyr/">gasfyr</a> er strømforbruget i samme størrelsesorden: en ny gaskedel med indbygget pumpe bruger efter vores beregning omkring 90 kWh om året. Et oliefyr eller pillefyr bruger mere, fordi brænderen har blæser og motorer. En <a href="/varmepumpe/">varmepumpe</a> er en helt anden størrelse, fordi den laver al varmen med strøm. Ifølge Bolius blev omkring 66 procent af de danske boliger i 2023 opvarmet med fjernvarme, så for de fleste er unittens pumpe det eneste strømforbrug i varmeanlægget.</p>

<h2>Hvornår bruger unitten strømmen?</h2>
<p>Pumpen kører, når huset skal have varme, og det er hele døgnet i fyringssæsonen. Der er ingen strøm at flytte til billige timer, og forbruget er så lille, at det kun er få kroner om året. Det, der kan spares, ligger i pumpen og i indstillingen, ikke i tidspunktet.</p>

<h2>Sådan sænker du unittens strømforbrug</h2>
<ul>
<li><strong>Skift en gammel pumpe</strong> — har din <a href="/cirkulationspumpe/">cirkulationspumpe</a> en trinvælger og intet display, er den sandsynligvis af den gamle type.</li>
<li><strong>Brug pumpens automatik</strong> frem for en fast kurve, så den skruer ned, når termostaterne lukker.</li>
<li><strong>Sommerluk</strong> varmekredsen fra maj til september.</li>
<li><strong>Få anlægget indreguleret</strong> — et anlæg i balance kan nøjes med et lavere pumpetryk og giver samtidig en bedre afkøling, som mange fjernvarmeværker belønner.</li>
<li><strong>Tjek brugsvandspumpen</strong> — en cirkulationspumpe til det varme brugsvand kan ofte sættes på en timer, så den ikke kører om natten.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger en fjernvarmeunit?", answer: "En ny unit med automatisk pumpe og vejrkompensering bruger efter vores beregning ca. 0,33 kWh i døgnet eller ca. 120 kWh om året, svarende til {{kr 120}} ved {{pris_kwh}}. Med en gammel pumpe kan det blive omkring 500 kWh." },
    { question: "Hvad bruger strøm i en fjernvarmeunit?", answer: "Kun cirkulationspumpen og den elektroniske styring. Varmen kommer færdigvarm fra fjernvarmeværket. Wavin opgiver 3 W i standby for styringen i deres Calefa SPLIT-unit." },
    { question: "Kan det betale sig at skifte pumpen i fjernvarmeunitten?", answer: "Ofte ja. Bolius angiver 482 kWh om året for en pumpe fra før 1995 og ned til ca. 120 kWh for en ny. Forskellen på ca. 360 kWh svarer til {{kr 360}} om året." },
    { question: "Bruger fjernvarmeunitten strøm om sommeren?", answer: "Mindre, hvis den er sommerlukket, så varmekredsens pumpe står stille. Bolius skriver, at det er forholdsvis nemt at indstille, og at du så kun betaler for det varme brugsvand." },
    { question: "Bruger fjernvarme mindre strøm end et gasfyr?", answer: "Omtrent det samme. En ny gaskedel med indbygget pumpe bruger efter vores beregning ca. 90 kWh om året, en ny fjernvarmeunit ca. 120 kWh. Begge ligger langt under en varmepumpe." },
  ],
  relatedSlugs: ["cirkulationspumpe", "gasfyr", "varmepumpe", "varmtvandsbeholder", "gulvvarme"],
  sources: [
    { name: "Wavin — Datablad, Calefa SPLIT indirekte fjernvarmeunit (august 2025)", url: "https://mediahub.wavin.com/asset/bed17b00-dad2-4d6b-a7df-fc6770a99015/Datablad-Calefa-Split.pdf" },
    { name: "Bolius — Her er 10 store strømslugere i dit hjem", url: "https://www.bolius.dk/her-er-10-store-stroemslugere-i-dit-hjem-672" },
    { name: "Bolius — El-vandvarmer om sommeren, fjernvarme om vinteren?", url: "https://www.bolius.dk/el-vandvarmer-om-sommeren-fjernvarme-om-vinteren-99346" },
    { name: "Bolius — Har du naturgas eller oliefyr? Nu får du besked, om du kan få fjernvarme", url: "https://www.bolius.dk/har-du-naturgas-eller-oliefyr-nu-faar-du-besked-om-du-kan-faa-fjernvarme-98019" },
  ],
  calculatorConfig: {
    title: "Beregn fjernvarmeunittens strømforbrug",
    options: [
      { label: "Ny unit, automatisk pumpe og vejrkompensering (ca. 0,33 kWh/døgn)", kwhPerUse: 0.33 },
      { label: "Ny pumpe på fast kurve (ca. 0,5 kWh/døgn)", kwhPerUse: 0.5 },
      { label: "Ældre pumpe på laveste trin (ca. 1,0 kWh/døgn)", kwhPerUse: 1.0 },
      { label: "Pumpe fra før 1995 plus styring (ca. 1,4 kWh/døgn)", kwhPerUse: 1.4 },
    ],
    usageLabel: "Dage i drift pr. år",
    usageUnit: "dage/år",
    usageMin: 120,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-08",
  updated: "2026-11-22",
};

export default fjernvarmeunit;
