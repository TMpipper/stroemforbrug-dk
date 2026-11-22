import type { ApplianceData } from "@/lib/types";

/**
 * Dehydrator / madtørrer — Consumer NZ målte en Sunbeam Food Lab DT6000 til 0,434 kWh på én time ved 60 °C og tørrede fem
 * fødevarer side om side med en varmluftsovn (4–17,5 timer; ovnen i snit ca. 10 % hurtigere). Consumer NZ's guide regner med
 * 500 W og oplyser temperaturer (urter 35 °C, grønt 45–50 °C, frugt 60 °C, kød/fisk 65–70 °C).
 * Vores skøn: ca. 0,3 kWh/time for en kasse på 500 W ved 50–60 °C, ca. 0,12–0,15 kWh/time for en lille rund på 250 W.
 * Beregneren: kWh pr. tørring, antal tørringer pr. måned × 12. Intet EU-energimærke.
 */
const dehydrator: ApplianceData = {
  slug: "dehydrator",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "ovn",
    synonyms: ["dehydrator", "madtørrer", "frugttørrer", "tørreapparat", "dehydrator strømforbrug", "food dehydrator", "tørre frugt", "beef jerky", "frugtlæder", "svampetørrer"],
  },
  name: "Dehydrator (madtørrer)",
  title: "Dehydrator strømforbrug (2026) → kWh pr. tørring vs. ovn",
  description:
    "Se hvor meget strøm en dehydrator eller madtørrer bruger i timen og pr. tørring, hvad frugt, svampe og jerky koster, og om ovnen kan gøre det billigere.",
  heading: "Strømforbrug for en dehydrator: kWh, pris pr. tørring og billigste tidspunkt",
  quickAnswer:
    "En dehydrator bruger typisk 0,15–0,45 kWh i timen, og da en tørring tager 6–12 timer, bliver det 1–4,5 kWh pr. omgang. En almindelig madtørrer på 500 W, der tørrer æbleskiver i 8 timer, bruger omkring 2,4 kWh, eller {{kr 2,4}} ved månedens elpris. Det er tiden, ikke watt, der gør forbruget stort – og derfor kan det betale sig at lade den køre i de billige timer.",
  kwhRange: [5, 300],
  typicalKwh: 55,
  wattage: 500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.6, 0.6, 0.6, 0.7, 0.8, 1.0, 1.2, 1.6, 1.7, 1.4, 0.9, 0.9],
  content: `<h2>Lav effekt, men mange timer</h2>
<p>En dehydrator – på dansk ofte kaldet en madtørrer eller frugttørrer – er et varmelegeme og en ventilator i en kasse med bakker. Den blæser lun luft hen over frugt, grøntsager, svampe eller kød, så vandet fordamper uden at maden bliver kogt. Temperaturen er lav, fra omkring 35 grader til urter og op til 70 grader til kød og fisk, og effekten er typisk 250–600 W. Det lyder ikke af meget, men en tørring varer 6–12 timer og nogle gange et helt døgn, og så bliver det til mere strøm end de fleste andre køkkenapparater pr. gang.</p>
<p>Den newzealandske forbrugerorganisation Consumer NZ har målt en dehydrator med bakker (Sunbeam Food Lab DT6000) ved 60 grader og fandt 0,434 kWh på en time. Kører den sådan i 10 timer, er det over 4 kWh, eller {{kr 4,3}} ved månedens elpris. En mindre, rund madtørrer med stablede bakker og et svagere varmelegeme bruger efter vores skøn omkring en tredjedel af det.</p>
<p>Tørrer du to gange om måneden med en almindelig madtørrer på 500 W, bliver det omkring 55 kWh om året, eller {{kr 55}}. Det meste falder i august–oktober, når der er æbler, blommer og svampe at tage af.</p>

<h2>Forbrug pr. tørring</h2>
<p>Tabellen viser typiske tørringer. Rækken ved 60 grader bygger på Consumer NZ's måling; de andre er vores skøn ud fra effekten og et termostatstyret element, der ikke kører fuldt hele tiden ved lave temperaturer.</p>
<table>
<thead><tr><th>Tørring</th><th>Temperatur og tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Krydderurter, lille rund madtørrer (ca. 250 W)</td><td>35 grader, 4 timer</td><td>0,6 kWh</td><td>{{kr 0,6}}</td></tr>
<tr><td>Æbleskiver, lille rund madtørrer</td><td>55 grader, 7–8 timer</td><td>1,0 kWh</td><td>{{kr 1}}</td></tr>
<tr><td>Æbleskiver, kasse med bakker (500 W)</td><td>55 grader, 8 timer</td><td>2,4 kWh</td><td>{{kr 2,4}}</td></tr>
<tr><td>Svampe, kasse ved 60 grader (målt tempo)</td><td>60 grader, 10 timer</td><td>4,3 kWh</td><td>{{kr 4,3}}</td></tr>
<tr><td>Bananchips eller jerky, kasse</td><td>60–70 grader, 12–17 timer</td><td>5–7 kWh</td><td>{{kr 5-7}}</td></tr>
</tbody>
</table>
<p>Tiderne svinger meget med, hvor tykke skiverne er, og hvor meget vand maden indeholder. I Consumer NZ's forsøg tog grønkålschips 6,5 timer, frugtlæder af kiwi 6,5 timer, svampeskiver 12 timer og bananchips hele 17,5 timer i dehydratoren.</p>

<h2>Dehydrator eller ovn?</h2>
<p>Det korte svar er, at det afhænger af mængden. Consumer NZ tørrede de samme fødevarer side om side i dehydratoren og i en varmluftsovn, og ovnen var i gennemsnit omkring 10 procent hurtigere. En moderne <a href="/ovn/">ovn</a> på lav temperatur trækker heller ikke sin fulde effekt; termostaten slår elementet til og fra, og ved 50–60 grader er det vores skøn, at en ovn bruger omkring 0,4–0,6 kWh i timen, når lågen står på klem for at lukke fugten ud. Det er i samme størrelse som den målte dehydrator.</p>
<p>Fordelen ved dehydratoren er, at den er bygget til opgaven: luften bevæger sig hen over alle bakker, den holder lave temperaturer præcist, og den er stille og sikker at lade køre om natten. Ovnen er bedre, hvis du kun skal tørre en enkelt plade, og den er der i forvejen. En <a href="/airfryer/">airfryer</a> med tørrefunktion kan tørre en lille portion, men den har kun plads til en eller to bakker.</p>
<p>Consumer NZ's eget regneeksempel gangede ovnens fulde effekt med tiden og kom frem til, at ovnen var flere gange dyrere. Det er en øvre grænse, ikke en måling, og den overdriver forskellen, fordi en ovn ved 60 grader langt fra kører fuldt.</p>

<h2>Effekt, bakker og termostat</h2>
<p>Der er to typer madtørrere. De runde med stablede bakker har ventilatoren i bunden eller toppen og blæser luften op gennem bakkerne. De er billige og fylder lidt, men luften når ikke lige godt ud til alle bakker, så de skal ofte byttes rundt undervejs. Kasserne med skuffer har ventilatoren bagpå og blæser vandret hen over hver bakke. De er mere jævne og har ofte termostat og timer.</p>
<p>Effekten afgør især, hvor hurtigt maskinen kommer op på temperatur, og hvor meget den kan tørre ad gangen. En termostat er vigtigere for forbruget end watt: uden termostat kører elementet fuldt hele tiden, og så bruger den hele sin mærkeeffekt i alle timer. Med termostat slår elementet fra, når luften er varm nok, og ventilatoren alene bruger kun få watt.</p>

<h2>Hvornår på døgnet er det billigst at tørre?</h2>
<p>Dehydratoren er næsten ideel at flytte: den kører i mange timer, maden er ligeglad med, hvornår den bliver tør, og maskinen kan stå og arbejde om natten. Start den om aftenen efter de dyre timer, så de 8–10 timer falder i nattens og morgenens billige timer, eller midt på dagen på en solrig dag. Har du <a href="/solceller/">solceller</a>, er en tørring en god måde at bruge dagens overskud på. Boksen længere oppe på siden viser dagens billigste timer, og en madtørrer med timer kan sættes til at stoppe af sig selv.</p>
<p>Undgå at starte en lang tørring lige før aftensmaden. Så ligger de første timer i den dyreste del af døgnet, og det er netop de timer, hvor maskinen arbejder hårdest for at varme bakkerne op.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Fyld alle bakker</strong> – en halvtom dehydrator bruger næsten det samme som en fuld.</li>
<li><strong>Skær tynde, ens skiver</strong> – tynde skiver tørrer markant hurtigere end tykke, og ens skiver bliver færdige på samme tid.</li>
<li><strong>Vælg den laveste temperatur, opskriften tillader</strong> – urter og grønt skal ikke op på 70 grader.</li>
<li><strong>Brug timeren</strong>, så maskinen stopper, når maden er tør, i stedet for at køre videre i flere timer.</li>
<li><strong>Stil den i et lunt rum</strong> – i et koldt bryggers eller en kold garage skal elementet arbejde mere.</li>
<li><strong>Læg tørringen om natten</strong> eller i dagens billigste timer.</li>
</ol>
<p>Restprodukter fra en <a href="/juicer/">juicer</a> – frugt- og grøntsagsmasse – kan tørres til knækbrød eller frugtlæder og udnytter dermed en tørring, du alligevel kører.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en dehydrator i timen?",
      answer:
        "Typisk 0,15–0,45 kWh i timen. Consumer NZ målte en madtørrer med bakker til 0,434 kWh på en time ved 60 grader, svarende til {{kr 0,43}} i timen ved månedens elpris. En lille rund model bruger mindre.",
    },
    {
      question: "Hvad koster det at tørre frugt i en dehydrator?",
      answer:
        "En omgang æbleskiver i 8 timer i en madtørrer på 500 W bruger omkring 2,4 kWh, eller {{kr 2,4}}. I en lille rund madtørrer er det omkring 1 kWh, eller {{kr 1}}.",
    },
    {
      question: "Er det billigere at tørre i ovnen end i en dehydrator?",
      answer:
        "Ikke nødvendigvis. En ovn på lav temperatur bruger efter vores skøn 0,4–0,6 kWh i timen, i samme størrelse som den målte dehydrator, og ovnen var lidt hurtigere i Consumer NZ's forsøg. Dehydratoren har plads til mere og tørrer mere jævnt.",
    },
    {
      question: "Hvor mange watt bruger en madtørrer?",
      answer:
        "Typisk 250–600 W. Med termostat kører elementet ikke fuldt hele tiden, så det faktiske forbrug ligger under mærkeeffekten, især ved lave temperaturer.",
    },
    {
      question: "Hvornår er det billigst at bruge dehydratoren?",
      answer:
        "Om natten eller midt på dagen på solrige dage, hvor strømmen ofte er billigst. Start den efter aftenens dyre timer, så de mange timers tørring falder i de billige timer.",
    },
    {
      question: "Hvad bruger en dehydrator om året?",
      answer:
        "Med to tørringer om måneden i en madtørrer på 500 W bliver det omkring 55 kWh om året, eller {{kr 55}} ved månedens elpris. Bruger du den hver uge i høstsæsonen, kan det blive mere.",
    },
  ],
  relatedSlugs: ["ovn", "airfryer", "juicer", "slow-cooker", "solceller"],
  sources: [
    { name: "Consumer NZ — Food dehydrator vs fan oven (måling af Sunbeam DT6000)", url: "https://consumer.org.nz/home-and-living/kitchen/food-dehydrators/food-dehydrator-vs-fan-oven" },
    { name: "Consumer NZ — Food dehydrators buying guide (temperaturer og driftsomkostninger)", url: "https://consumer.org.nz/home-and-living/kitchen/food-dehydrators/guide" },
  ],
  calculatorConfig: {
    title: "Dehydrator forbrugsberegner",
    options: [
      { label: "Urter ved 35 grader, 4 timer", kwhPerUse: 0.6 },
      { label: "Lille rund madtørrer, 8 timer", kwhPerUse: 1.0 },
      { label: "Kasse med bakker (500 W), 8 timer", kwhPerUse: 2.4 },
      { label: "Kasse ved 60 grader, 10 timer", kwhPerUse: 4.3 },
    ],
    usageLabel: "Antal tørringer pr. måned",
    usageUnit: "pr. måned",
    usageMin: 1,
    usageMax: 12,
    usageDefault: 2,
    usageStep: 1,
    per: "tørring",
    perYear: 12,
  },
  publishDate: "2026-11-30",
  updated: "2026-11-22",
};

export default dehydrator;
