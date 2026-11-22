import type { ApplianceData } from "@/lib/types";

const husbatteri: ApplianceData = {
  slug: "husbatteri",
  meta: {
    category: "energi",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "batteri",
    synonyms: [
      "husbatteri",
      "husstandsbatteri",
      "hjemmebatteri",
      "batteri til solceller",
      "solcellebatteri",
      "batterilager",
      "tesla powerwall",
      "husbatteri tab",
      "husbatteri standby",
    ],
  },
  name: "Husbatteri",
  article: "et",
  title: "Husbatteri strømforbrug (2026) → Tab, tomgang og egetforbrug",
  description:
    "Et husbatteri bruger selv strøm: tab ved op- og afladning og tomgang i inverteren. Se hvor mange kWh der forsvinder om året, og hvad der bestemmer tallet.",
  heading: "Strømforbrug for et husbatteri: kWh i døgnet og pris om året",
  quickAnswer:
    "Et husbatteri giver ikke al strømmen tilbage. Teknologisk Institut målte en samlet virkningsgrad på ca. 70-75 procent for systemer på omkring 5 kWh, så hver fjerde kWh, der lagres, går tabt — det meste i inverteren. Med én cyklus om dagen i sommerhalvåret og tomgang resten af tiden giver det efter vores beregning ca. 270 kWh om året, svarende til højst {{kr 270}} ved {{pris_kwh}}. Siden handler om batteriets eget forbrug, ikke om, hvad det kan spare.",
  kwhRange: [100, 600],
  typicalKwh: 270,
  wattage: 15,
  standbyWatts: 15,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.6, 0.7, 0.95, 1.2, 1.35, 1.4, 1.4, 1.3, 1.1, 0.85, 0.6, 0.55],
  content: `<h2>Et batteri, der selv bruger strøm</h2>
<p>Et husbatteri lagrer strøm, typisk fra <a href="/solceller/">solceller</a>, så den kan bruges senere på dagen eller om natten. Det lyder tabsfrit, men det er det ikke. Strømmen fra solcellerne er jævnstrøm; den skal omformes, lagres kemisk i battericellerne, tages ud igen og omformes til vekselstrøm, før den kan bruges i huset. Hvert trin taber lidt, og elektronikken, der styrer det hele, bruger strøm, også når batteriet hverken lader eller aflader.</p>
<p>Denne side handler om det forbrug: hvor mange kWh batteriet selv bruger på et år. Om et husbatteri kan betale sig for dig, afhænger af prisen, dit forbrug og dine solceller — det regnestykke laver vi ikke her. Forbrugerrådet Tænk skriver, at et husstandsbatteri er dyrt og for de fleste svært at tjene hjem, men at det kan give mening, hvis du har solceller, en elbil og et højt forbrug.</p>

<h2>Hvor går tabet hen?</h2>
<p>Teknologisk Institut har målt på husbatterier til énfamiliehuse i et forsøg med solcellestrøm. Systemerne var på omkring 5 kWh, hvoraf ca. 4 kWh kunne bruges, og den samlede virkningsgrad for en hel cyklus — fra solcellestrøm ind til vekselstrøm ud — lå på ca. 70-75 procent. Selve battericellerne tabte kun omkring 3 procent; resten af tabet skete i inverteren, som omformer strømmen. Ifølge instituttet skete ca. 30 procent af tabet, mens inverteren var ubelastet, altså i tomgang.</p>
<table>
<thead><tr><th>Del af systemet (Teknologisk Institut)</th><th>Virkningsgrad eller andel</th></tr></thead>
<tbody>
<tr><td>Battericellerne alene</td><td>ca. 97 procent</td></tr>
<tr><td>Hele cyklussen, solcellestrøm ind til vekselstrøm ud</td><td>ca. 70-75 procent</td></tr>
<tr><td>Andel af tabet i tomgang</td><td>ca. 30 procent</td></tr>
</tbody>
</table>
<p>Det er den vigtigste pointe for strømforbruget: inverteren er den store post, og et batteri, der står og venter, bruger stadig strøm. Instituttet anbefaler derfor at spørge leverandøren om tomgangstabet, før du køber.</p>

<h2>Producentens tal: Tesla Powerwall 3</h2>
<p>Større batterier med indbygget inverter opgiver ofte en virkningsgrad i databladet. Tesla angiver for Powerwall 3, der har 13,5 kWh brugbar kapacitet, en virkningsgrad på 89 procent fra solceller gennem batteriet og ud til huset eller nettet — målt ved typisk drift med solcelleoverskud, 25 grader, et nyt batteri og 3,3 kW. Når solcellestrømmen går direkte til huset uden om batteriet, er virkningsgraden 97,5 procent. Batteriet har 10 års garanti.</p>
<p>89 procent er markant bedre end de 70-75 procent i instituttets forsøg, men tallene er ikke målt på samme måde: Teslas tal er en producentangivelse under faste betingelser, og det fortæller ikke, hvad batteriet bruger i tomgang. Om vinteren, når batteriet sjældent bliver fyldt, er det tomgangen, der dominerer.</p>

<h2>Hvad bruger et husbatteri om året?</h2>
<p>Instituttet regnede med omkring én cyklus om dagen i sommerhalvåret. Om vinteren laver solcellerne for lidt overskud til at fylde batteriet, og så står det meste af tiden i tomgang. Vi har regnet et år ud fra de tal. Tomgangen på 10-20 W er vores skøn, fordi producenterne sjældent opgiver den:</p>
<table>
<thead><tr><th>System (vores beregning)</th><th>kWh tabt i døgnet, gennemsnit</th><th>kWh om året</th><th>Højst om året</th></tr></thead>
<tbody>
<tr><td>Tomgang alene, ca. 15 W</td><td>0,36</td><td>ca. 130</td><td>{{kr 130}}</td></tr>
<tr><td>Ca. 5 kWh, 4 kWh pr. cyklus i sommerhalvåret, 70-75 procent</td><td>0,74</td><td>ca. 270</td><td>{{kr 270}}</td></tr>
<tr><td>13,5 kWh, 89 procent, ca. 6 kWh i døgnet det meste af året, plus tomgang</td><td>1,0</td><td>ca. 365</td><td>{{kr 365}}</td></tr>
<tr><td>13,5 kWh, fuld cyklus hver dag hele året, 11 procent tab</td><td>1,5</td><td>ca. 550</td><td>{{kr 550}}</td></tr>
</tbody>
</table>
<p>Den anden række er det typiske tal i beregneren: 182 dage med ca. 1,1 kWh tab og 183 dage med tomgang. Et batteri, der bruges mere — for eksempel til at flytte netstrøm fra billige til dyre timer også om vinteren — taber flere kWh, fordi der går mere strøm igennem det.</p>

<h2>Hvad er tabet værd?</h2>
<p>Vi regner tabet med den kWh-pris, du betaler for strøm fra nettet. Det er en øvre grænse. Er det solcelleoverskud, der går tabt, ville det ellers være solgt til nettet til en lavere pris, og så er tabet reelt mindre værd. Er det netstrøm, du har købt i en billig time for at bruge senere, er tabet værd præcis det, du betalte. Derfor står tallene ovenfor som »højst«.</p>
<p>Tabet er en del af regnestykket, hvis du sammenligner batteriet med andre måder at bruge solcelleoverskud på. En <a href="/elpatron/">elpatron</a> i varmtvandsbeholderen gemmer overskuddet som varmt vand; i instituttets forsøg kom ca. 77 procent ud igen som varmt vand, omtrent som batteriets virkningsgrad. En <a href="/elbil/">elbil</a>, der lader på overskuddet, lagrer det i sit eget batteri med laderens tab.</p>

<h2>Hvornår bruger batteriet strømmen?</h2>
<p>Tabet ved op- og afladning sker, når batteriet arbejder: om dagen, når det lader, og om aftenen, når det aflader. Tomgangen løber døgnet rundt. Der er ingen strøm at flytte — batteriets eget forbrug er det, det koster at have det tændt. Styres batteriet efter timeprisen, flytter det husets forbrug, men dets eget tab følger med, hver gang strømmen går igennem.</p>

<h2>Sådan holder du batteriets eget forbrug nede</h2>
<ul>
<li><strong>Spørg om tomgangstabet</strong>, før du køber, som Teknologisk Institut anbefaler.</li>
<li><strong>Vælg den rigtige størrelse</strong> — instituttet regnede med ca. 1 kWh batteri pr. kWp solceller og en inverter på halvdelen til tre fjerdedele af anlæggets spidseffekt.</li>
<li><strong>Brug solcellestrømmen direkte</strong>, når du kan — den går uden om batteriet og taber mindst.</li>
<li><strong>Overvej dvaletilstand om vinteren</strong>, hvis dit system har en, så tomgangen falder i de måneder, hvor batteriet sjældent fyldes.</li>
<li><strong>Tjek appen</strong> — mange systemer viser energi ind og ud, så du kan se dit eget tab.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et husbatteri selv?", answer: "Teknologisk Institut målte en samlet virkningsgrad på ca. 70-75 procent for systemer på omkring 5 kWh. Med én cyklus om dagen i sommerhalvåret og tomgang resten af året bliver det efter vores beregning ca. 270 kWh, svarende til højst {{kr 270}} ved {{pris_kwh}}." },
    { question: "Hvor stort er tabet i et husbatteri?", answer: "I instituttets forsøg ca. 25-30 procent af strømmen, der gik igennem. Battericellerne tabte kun ca. 3 procent; resten skete i inverteren. Tesla angiver 89 procent for Powerwall 3 fra solceller gennem batteriet." },
    { question: "Bruger et husbatteri strøm, når det ikke lader?", answer: "Ja. Inverteren og styringen bruger strøm i tomgang. Ifølge Teknologisk Institut skete ca. 30 procent af tabet, mens inverteren var ubelastet. Vi skønner tomgangen til 10-20 W." },
    { question: "Kan et husbatteri betale sig?", answer: "Det regner vi ikke på her. Forbrugerrådet Tænk skriver, at det for de fleste er dyrt og svært at tjene hjem, men kan give mening med solceller, elbil og et højt forbrug." },
    { question: "Hvorfor står tabet som »højst« i kroner?", answer: "Fordi vi regner med den pris, du betaler for strøm fra nettet. Er det solcelleoverskud, der går tabt, ville det ellers være solgt til en lavere pris, så tabet er reelt mindre værd." },
  ],
  relatedSlugs: ["solceller", "elpatron", "elbil", "ladestander"],
  sources: [
    { name: "Teknologisk Institut — Lagring af solcelle-el fra énfamiliehus på batterier og/eller varmepumpe", url: "https://www.teknologisk.dk/_/media/65762%5FLagring%20af%20solcelle%2Del%20fra%20enfamiliehus%20p%E5%20batterier%20og%20eller%20varmepumpe.pdf" },
    { name: "Tesla — Powerwall 3 datasheet", url: "https://digitalassets.tesla.com/tesla-contents/image/upload/powerwall-3-datasheet-na-en.pdf" },
    { name: "Forbrugerrådet Tænk — Husstandsbatteri: det skal du overveje", url: "https://taenk.dk/forbrugerliv/bolig/husstandsbatteri-det-skal-du-overveje" },
  ],
  calculatorConfig: {
    title: "Beregn husbatteriets eget forbrug",
    options: [
      { label: "Tomgang alene, ca. 15 W (0,36 kWh/døgn)", kwhPerUse: 0.36 },
      { label: "Ca. 5 kWh, cyklus i sommerhalvåret (0,74 kWh/døgn)", kwhPerUse: 0.74 },
      { label: "13,5 kWh, cyklus det meste af året (1,0 kWh/døgn)", kwhPerUse: 1.0 },
      { label: "13,5 kWh, fuld cyklus hver dag (1,5 kWh/døgn)", kwhPerUse: 1.5 },
    ],
    usageLabel: "Dage i drift pr. år",
    usageUnit: "dage/år",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-09",
  updated: "2026-11-22",
};

export default husbatteri;
