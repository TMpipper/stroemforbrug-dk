import type { ApplianceData } from "@/lib/types";

/**
 * Trappelift — batteridrevet siddelift på skinne til lige og buede trapper. Intet EU-energimærke.
 * Tal: Acorn (ca. 23 kWh/år lige trappe, 35 kWh/år buet), Age UK Mobility om Handicare (ca. 0,06 kWh i døgnet),
 * Handicare 1100 brugsanvisning (netforbrug 0-36 W, 1,0 A), Savaria om Handicare 1100 (motor 0,4 hk, 24 V-batteri),
 * Stannah 600 Siena (lader 24 V DC/750 mA), ThyssenKrupp Flow2A (lader 230 V/0,35 A ind, 35 V/1,7 A ud; 2 × 12 V NP7-12,
 * ladetid 16 timer, ca. 10 ture på batteri ved 125 kg og én etage; parkér ved ladepunkt). Ankestyrelsens principafgørelse
 * 13-17 og Københavns Kommune (boligændring efter servicelovens § 116, gratis ved bevilling).
 * Energi pr. tur (motor ca. 300 W i ca. 40 s, og batteriets loft) og turtal er vores skøn/omregning.
 */
const trappelift: ApplianceData = {
  slug: "trappelift",
  meta: {
    category: "pleje",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "stik",
    synonyms: ["trappelift", "trappestol", "stolelift", "siddelift", "trappelift buet trappe", "stannah", "handicare trappelift", "trappelift lige trappe", "lift til trappe"],
  },
  name: "Trappelift",
  article: "en",
  title: "Trappelift strømforbrug (2026) → batteri, lader og kWh/år",
  description:
    "En trappelift bruger 20-35 kWh om året, mest til laderen, der holder batteriet fuldt. Se watt for motor og lader, energi pr. tur og lige mod buet trappe.",
  heading: "Strømforbrug for en trappelift: kWh i døgnet og pris om året",
  quickAnswer:
    "En trappelift kører på batteri og lader op, når den holder ved ladepunktet. Producenten Acorn regner med cirka 23 kWh om året for en lift på en lige trappe og 35 kWh for en buet, svarende til {{kr 23}}-{{kr 35}} ved {{pris_kwh}}. Det er omkring 0,06 kWh i døgnet. Selve turen op ad trappen koster under en øre.",
  kwhRange: [15, 60],
  typicalKwh: 23,
  wattage: 300,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Batteriet kører liften, laderen bruger strømmen</h2>
<p>En moderne trappelift er ikke koblet direkte til stikkontakten, mens den kører. Den har batterier i stolen, og en lader holder dem opladet, når liften holder ved et ladepunkt i bunden eller toppen af trappen. Det gør liften uafhængig af, om strømmen går, og det betyder, at strømforbruget fra stikkontakten mest er laderens: den løbende opladning plus det, der skal erstatte de ture, liften har kørt.</p>
<p>Producenterne oplyser forskellige tal for laderen. Handicare skriver i brugsanvisningen til 1100, at liften bruger 0-36 W fra stikkontakten, og den nordamerikanske version 20 W. Stannahs model 600 Siena har en lader, der leverer 24 V og 750 mA til liften, cirka 18 W. ThyssenKrupps Flow2A har en lader på 35 V og 1,7 A. Det er de højeste værdier, når batterierne lader op efter brug; det meste af døgnet trækker laderen langt mindre.</p>

<h2>kWh om året: lige og buet trappe</h2>
<p>Den britiske producent Acorn regner med cirka 23 kWh om året for en trappelift på en lige trappe og 35 kWh om året for en lift på en buet trappe. En artikel hos Age UK Mobility om Handicares lifte nævner omkring 0,06 kWh i døgnet, hvilket giver næsten det samme: cirka 22 kWh om året. Ingen af kilderne oplyser, hvor mange ture der er regnet med.</p>
<table>
<thead><tr><th>Trappelift</th><th>kWh i døgnet</th><th>kWh om året</th><th>Pris om året</th><th>Pris om måneden</th></tr></thead>
<tbody>
<tr><td>Lige trappe (Acorn)</td><td>0,063</td><td>23</td><td>{{kr 23}}</td><td>{{kr 23 /md}}</td></tr>
<tr><td>Handicare (Age UK Mobility)</td><td>0,06</td><td>22</td><td>{{kr 22}}</td><td>{{kr 22 /md}}</td></tr>
<tr><td>Buet trappe (Acorn)</td><td>0,096</td><td>35</td><td>{{kr 35}}</td><td>{{kr 35 /md}}</td></tr>
</tbody>
</table>
<p>En buet trappelift bruger mere, fordi skinnen er længere, stolen skal dreje og ofte køre en vandret strækning ved reposen, og fordi motoren arbejder i flere retninger. Til sammenligning bruger et nyt køleskab typisk flere gange så meget om året. Trappeliften er altså en lille post på elregningen, også selv om den er tilsluttet døgnet rundt.</p>

<h2>Hvad koster én tur op ad trappen?</h2>
<p>Savaria angiver motoren i Handicare 1100 til 0,4 hestekræfter, hvilket svarer til omkring 300 W. En tur op ad en almindelig trappe på én etage tager efter vores skøn 30-60 sekunder. Det giver cirka 0,003-0,005 kWh pr. tur, altså en brøkdel af en øre: {{oere 0,005}} for en lang tur.</p>
<p>ThyssenKrupps brugsanvisning til Flow2A giver et andet loft. Liften har to 12 V-batterier af typen NP7-12, der lader i 16 timer, og batterierne rækker til cirka 10 ture, hvis strømmen går, med en person på 125 kg og én etage. To batterier på 12 V og 7 Ah, som typebetegnelsen angiver, rummer omkring 0,17 kWh; delt på 10 ture er det højst 0,017 kWh pr. tur. Det er vores omregning og en øvre grænse, fordi batterierne ikke tømmes helt.</p>
<table>
<thead><tr><th>Brug (vores skøn)</th><th>Ture om dagen</th><th>kWh til turene om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Få ture</td><td>4</td><td>ca. 6</td><td>{{kr 6}}</td></tr>
<tr><td>Almindelig brug</td><td>8</td><td>ca. 12</td><td>{{kr 12}}</td></tr>
<tr><td>Mange ture</td><td>16</td><td>ca. 23</td><td>{{kr 23}}</td></tr>
</tbody>
</table>
<p>Tabellen regner med 0,004 kWh pr. tur og uden tab i lader og batteri. Ved almindelig brug er turene altså omkring halvdelen af Acorns årstal for en lige trappe. Resten er laderens og elektronikkens hvileforbrug, som efter vores omregning svarer til godt 1 W i gennemsnit. Forbruget vokser derfor kun lidt, selv om liften bruges meget.</p>

<h2>Parkér ved ladepunktet</h2>
<p>ThyssenKrupp skriver i brugsanvisningen til Flow2A, at liften skal parkeres ved et ladepunkt, så batterierne forbliver opladede. Lader du stolen stå midt på trappen, lader den ikke, og efter nogle dage kan batterierne være så flade, at liften ikke kører. Det giver ikke en lavere elregning at lade være med at lade: batterierne skal alligevel fyldes op igen bagefter.</p>
<p>Det er heller ingen god idé at slukke for stikkontakten for at spare <a href="/standby/">standby</a>. Besparelsen er højst nogle få kroner om måneden, og liften skal være klar, når den skal bruges, også hvis strømmen går. Batterierne er netop der for at gøre liften sikker ved strømsvigt.</p>

<h2>Trappelift fra kommunen</h2>
<p>Har du svært ved at komme op og ned ad trappen, kan kommunen bevilge en trappelift som en boligændring. Københavns Kommune skriver, at boligændringer gives efter servicelovens § 116, og at du ikke skal betale for hjælpemidler og boligændringer, du får bevilget. Ankestyrelsen har i principafgørelse 13-17 slået fast, at en trappelift almindeligvis ikke er en så omfattende og bekostelig ændring af boligen, at den alene kan begrunde, at kommunen skal undersøge, om borgeren i stedet kan flytte.</p>
<p>Strømmen til liften betaler du normalt selv, og vi har ikke fundet regler om, at kommunen dækker den. Med 20-35 kWh om året er det en lille udgift. Har du også en el-<a href="/plejeseng/">plejeseng</a> i hjemmet, er de to tilsammen stadig et af de mindste forbrug i huset, medmindre sengen har en madraspumpe.</p>

<h2>Bruger trappeliften strøm i de dyre timer?</h2>
<p>Laderen lader op lige efter, at liften har kørt, og den holder batterierne fulde resten af tiden. Kører du op og i seng kl. 22, lader liften i de følgende timer, som ofte er billigere end aftenens spidstimer kl. 17-21. Du kan ikke styre det, og det giver ingen mening at prøve: forskellen mellem billige og dyre timer er højst få øre om dagen. Det, der flytter mest, er trappens form, og efter vores vurdering også liftens alder og batteriernes stand.</p>

<h2>Gode råd om trappeliftens strøm</h2>
<ul>
<li><strong>Parkér altid ved ladepunktet</strong>, så batterierne holdes opladede.</li>
<li><strong>Lad stikket sidde</strong> — besparelsen ved at slukke er nogle få kroner om måneden.</li>
<li><strong>Få skiftet batterierne</strong> ved servicebesøget, når de bliver svage; et dårligt batteri koster både strøm og sikkerhed.</li>
<li><strong>Sammenlign lige og buet</strong> — en buet lift bruger efter Acorns tal cirka halvanden gang så meget.</li>
<li><strong>Mål det</strong> med en stikmåler i en uge, hvis du vil kende dit eget forbrug.</li>
</ul>`,
  faqs: [
    { question: "Hvad koster en trappelift i strøm om året?", answer: "Acorn regner med cirka 23 kWh om året for en lige trappe og 35 kWh for en buet, svarende til {{kr 23}}-{{kr 35}} ved {{pris_kwh}}." },
    { question: "Hvad koster én tur med trappeliften?", answer: "Efter vores skøn bruger en tur på én etage 0,003-0,005 kWh, altså en brøkdel af en øre. Det meste af årsforbruget er laderens hvileforbrug." },
    { question: "Kører trappeliften, hvis strømmen går?", answer: "Ja, de fleste trappelifte kører på batteri. ThyssenKrupp oplyser for Flow2A, at batterierne rækker til cirka 10 ture ved en etage og en person på 125 kg." },
    { question: "Skal trappeliften stå ved ladepunktet?", answer: "Ja. ThyssenKrupp skriver, at liften skal parkeres ved et ladepunkt, så batterierne forbliver opladede. Ellers kan liften gå i stå." },
    { question: "Betaler kommunen for en trappelift?", answer: "Kommunen kan bevilge en trappelift som boligændring efter servicelovens § 116, og så betaler du ikke for den. Strømmen betaler du normalt selv; den er 20-35 kWh om året." },
  ],
  relatedSlugs: ["plejeseng", "varmetaeppe", "router", "koeleskab"],
  sources: [
    { name: "Acorn Stairlifts — Do stairlifts use a lot of electricity", url: "https://acornstairlifts.com/faqs/do-stairlifts-use-a-lot-of-electricity" },
    { name: "Age UK Mobility — Why a stairlift is an energy-efficient addition to your home", url: "https://www.ageukmobility.co.uk/information-advice/mobility-news/article/why-a-stairlift-is-an-energy-efficient-low-cost-addition-to-your-home/" },
    { name: "Handicare — brugsanvisning 1100 SlideTrack", url: "https://cdn.shopify.com/s/files/1/0676/4743/9124/files/Handicare_1100_Slidetrack_User_Manual_15022021-1.pdf" },
    { name: "Savaria — Handicare 1100, produktdata", url: "https://savaria.com/stairlifts/products/straight-handicare-1100" },
    { name: "Stannah — brugervejledning 600 Siena", url: "https://cdn.shopify.com/s/files/1/0676/4743/9124/files/Stannah_600_Sienna_User-guide.pdf" },
    { name: "ThyssenKrupp — brugsanvisning Flow2A", url: "https://cdn.shopify.com/s/files/1/0676/4743/9124/files/Flow2A_User-Manual_V2.1.pdf" },
    { name: "Ankestyrelsen — principafgørelse 13-17 om trappelift", url: "https://www.retsinformation.dk/api/pdf/187052" },
    { name: "Københavns Kommune — Tekniske hjælpemidler, boligændringer og forbrugsgoder", url: "https://kk.dk/borger/aeldre-65/hjaelpemidler-til-aeldre/tekniske-hjaelpemidler-boligaendringer-og-forbrugsgoder" },
  ],
  calculatorConfig: {
    title: "Beregn trappeliftens strømforbrug",
    options: [
      { label: "Lige trappe (Acorn: ca. 23 kWh om året)", kwhPerUse: 0.063 },
      { label: "Buet trappe (Acorn: ca. 35 kWh om året)", kwhPerUse: 0.096 },
      { label: "Ældre lift med slidte batterier (vores skøn)", kwhPerUse: 0.15 },
    ],
    usageLabel: "Døgn tilsluttet pr. år",
    usageUnit: "døgn/år",
    usageMin: 1,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 1,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-19",
  updated: "2026-11-23",
};

export default trappelift;
