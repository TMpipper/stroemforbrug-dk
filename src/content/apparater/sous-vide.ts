import type { ApplianceData } from "@/lib/types";

/**
 * Sous vide — Amazing Food Made Easy målte 36 cirkulatorer og vandbade i 8 liter vand: første time ved 60 °C 0,39–0,53 kWh
 * for stavene (0,27–0,41 for lukkede vandbade), heatere 750–1.500 W. SO-VIDA-testen: 8 l ved 74 °C i 24 timer = 4,66 kWh med
 * låg, 3,43 kWh med låg + isolering, 5,12 kWh med kuglelåg. testsieger.de: Princess 267003 (1.200 W) 0,6 kWh på knap 3,5 timer.
 * Vores skøn: holdeforbrug ved 60 °C med låg ≈ 0,1–0,13 kWh/time (skaleret fra 74 °C-målingen efter temperaturforskellen).
 * Beregneren: kWh pr. tilberedning, antal pr. måned × 12. Intet EU-energimærke.
 */
const sousVide: ApplianceData = {
  slug: "sous-vide",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    motif: "elkedel",
    synonyms: ["sous vide", "sousvide", "sous-vide", "sous vide stav", "sous vide stick", "sous vide strømforbrug pr time", "anova", "vakuumkogning", "præcisionskoger", "joule"],
  },
  name: "Sous vide",
  article: "en",
  title: "Sous vide strømforbrug (2026) → kWh pr. time og 24 timer",
  description:
    "Se hvor meget strøm en sous vide-stav bruger den første time, pr. time bagefter og på 24 timer – og hvor meget låg og isolering sparer på langtidskogning.",
  heading: "Strømforbrug for en sous vide: kWh, pris pr. gang og billigste tidspunkt",
  quickAnswer:
    "En sous vide-stav bruger typisk 0,4–0,5 kWh den første time, fordi vandet skal varmes op, og derefter omkring 0,1–0,15 kWh i timen, når gryden har låg. En bøf på to timer koster derfor cirka {{kr 0,6}} ved månedens elpris, mens et stykke kød på 24 timer bruger 2,5–4,5 kWh, eller {{kr 2,5-4,5}}, afhængigt af temperatur og isolering.",
  kwhRange: [5, 400],
  typicalKwh: 40,
  wattage: 1000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.05, 1.0, 0.95, 0.9, 0.85, 0.85, 0.9, 1.0, 1.1, 1.15, 1.15],
  content: `<h2>Sous vide bruger mest strøm på at varme vandet op</h2>
<p>En sous vide-stav er et varmelegeme med en lille pumpe, der sidder i en gryde vand og holder temperaturen helt præcist, fx 56 grader til en bøf eller 64 grader til æg. Maden ligger i en lukket pose i vandet. Hele forbruget er altså vand, der skal varmes op og holdes varmt, og det betyder, at mængden af vand og tiden er det, der afgør regningen – ikke stavens watt.</p>
<p>Det amerikanske site Amazing Food Made Easy har målt over 30 sous vide-stave og vandbade under de samme forhold: 8 liter vand ved stuetemperatur, varmet op til 60 grader og holdt der i en time. Stavene brugte 0,39–0,53 kWh på den første time, uanset om varmelegemet var på 750 eller 1.500 W. Det svarer til {{kr 0,39-0,53}} ved månedens elpris. Det meste af det er selve opvarmningen: at varme 8 liter vand 36 grader op kræver i sig selv omkring 0,34 kWh, før der er regnet varmetab med.</p>
<p>Efter opvarmningen skal staven kun dække varmetabet fra gryden. Med låg på er det vores skøn ud fra målingerne, at det ligger omkring 0,1–0,13 kWh i timen ved 60 grader. Det tyske testsite testsieger.de målte en stav på 1.200 W til 0,6 kWh på knap tre en halv time, hvilket passer godt med det billede.</p>

<h2>Forbrug efter tilberedningstid</h2>
<p>Tabellen viser, hvad en typisk tilberedning i 6–8 liter vand med låg koster. Første time og 24-timers målingerne er målt; mellemtrinene er vores skøn ud fra opvarmning plus holdeforbrug.</p>
<table>
<thead><tr><th>Tilberedning</th><th>Tid</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Laks eller æg, 8 liter vand (målt)</td><td>1 time</td><td>0,45 kWh</td><td>{{kr 0,45}}</td></tr>
<tr><td>Bøf eller kyllingebryst</td><td>1–2 timer</td><td>0,6 kWh</td><td>{{kr 0,6}}</td></tr>
<tr><td>Svinemørbrad, andebryst, grøntsager</td><td>3–4 timer</td><td>0,8 kWh</td><td>{{kr 0,8}}</td></tr>
<tr><td>Langtidskogt kød ved 60 grader, låg</td><td>24 timer</td><td>3,2 kWh</td><td>{{kr 3,2}}</td></tr>
<tr><td>Ved 74 grader, almindeligt låg (målt)</td><td>24 timer</td><td>4,66 kWh</td><td>{{kr 4,66}}</td></tr>
<tr><td>Ved 74 grader, låg og isolering (målt)</td><td>24 timer</td><td>3,43 kWh</td><td>{{kr 3,43}}</td></tr>
</tbody>
</table>
<p>En bøf eller et stykke laks er altså billig mad i strøm. Det er de lange tilberedninger – oksebryst, spareribs og andelår på 24–72 timer – der gør sous vide til et apparat, man mærker på elregningen. Tre døgn ved høj temperatur uden isolering kan nærme sig 14 kWh, mens det samme med god isolering kan komme ned under det halve.</p>

<h2>Låg og isolering sparer mest på de lange tilberedninger</h2>
<p>Varmetabet fra en åben gryde kommer især fra fordampning: varmt vand, der damper væk, tager meget energi med sig. Amazing Food Made Easy målte 24 timer ved 74 grader i en plastbeholder med 8 liter vand og prøvede forskellige låg. Med et lag flydende plastkugler brugte staven 5,12 kWh, med et almindeligt låg 4,66 kWh, og med låg plus en isolerende kappe rundt om beholderen 3,43 kWh. Kappen sparede omkring en fjerdedel, og kuglerne lod næsten fire gange så meget vand fordampe som låget.</p>
<p>For en tilberedning på en time eller to betyder isoleringen næsten intet, fordi opvarmningen fylder det meste. Men laver du ofte retter på et døgn eller mere, kan en køleboks med hul i låget eller et par håndklæder rundt om gryden spare mere end en kWh pr. døgn. I Anovas brugerforum er der gengivet en måling med 7 liter vand ved 66 grader i 48 timer: 2,9 kWh med håndklæder og tæpper rundt om beholderen mod 7,2 kWh uden. Det er en privat måling, men den peger samme vej.</p>

<h2>Stav eller lukket vandbad?</h2>
<p>De fleste i Danmark bruger en stav, som spændes fast på en gryde. Der findes også lukkede vandbade, hvor varmen og vandet er bygget sammen i en isoleret kasse. I Amazing Food Made Easys måling brugte de lukkede vandbade fra 0,27 til 0,41 kWh den første time og 0,46–0,75 kWh på to timer, mens de bedste stave lå på 0,7–0,8 kWh og de dårligste over 1 kWh på de samme to timer. Det er en reel forskel, men den skyldes isoleringen og låget, ikke staven. Sætter du en god stav i en isoleret beholder, kommer du tæt på vandbadet.</p>

<h2>Betyder 800 eller 1.200 W noget?</h2>
<p>Stavens watt afgør, hvor hurtigt vandet bliver varmt, ikke hvor meget energi det kræver. Testsieger.de målte, at en stav på 1.200 W varmede 3 liter vand op til 60 grader på knap ti minutter. En stav på 800 W tager lidt længere tid om den samme mængde, men energien til at varme vandet op er den samme. Derfor ligger alle stavene i målingen inden for få tiendedele kWh af hinanden, selv om effekten varierer med en faktor to. Vælg staven efter præcision, støj og app, og brug ikke watt som et mål for strømforbruget.</p>

<h2>Hvornår på døgnet er det billigst at bruge sous vide?</h2>
<p>Sous vide er et af de køkkenapparater, hvor tidspunktet kan styres. Opvarmningen er den dyre del, og den kan du lægge i en billig time. En langtidsret på et døgn kan startes om natten eller midt på dagen, så den er klar til aftensmaden dagen efter, og så falder hovedparten af forbruget uden for aftenens dyre timer. Mange stave har en app med timer, så opvarmningen kan sættes til at starte senere. Boksen længere oppe på siden viser dagens billigste timer.</p>
<p>Til en bøf, der skal på bordet kl. 18, er der mindre at hente: vandet skal varmes op lige før. Her er det billigste trick at fylde gryden med varmt vand fra hanen. Har du fjernvarme, er varmen fra hanen typisk billigere end strøm, og staven skal så kun klare de sidste grader.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Brug så lidt vand som muligt</strong> – kun nok til at dække poserne. Hver liter, der skal varmes 40 grader op, koster omkring 0,05 kWh.</li>
<li><strong>Læg låg på</strong> – med hul til staven, eller dæk med film. Det sparer på fordampningen.</li>
<li><strong>Isolér til de lange retter</strong> – en køleboks, en isolerende kappe eller håndklæder rundt om gryden.</li>
<li><strong>Start med varmt vand fra hanen</strong>, hvis du har fjernvarme.</li>
<li><strong>Læg flere retter i samme bad</strong> – to poser kød på én gang koster næsten det samme som én.</li>
<li><strong>Brun kort og varmt bagefter</strong> – på en meget varm pande på <a href="/induktion/">induktion</a> eller på en <a href="/elgrill/">elgrill</a>, kun et minut pr. side.</li>
</ol>
<p>Sammenlignet med at stege et stykke kød i <a href="/ovn/">ovnen</a> ved lav temperatur i flere timer er sous vide oftest den sparsomme løsning, fordi vand i en lukket gryde holder bedre på varmen end luften i et stort ovnrum. En <a href="/slow-cooker/">slow cooker</a> er et alternativ til grydretter, men den kan ikke holde en præcis temperatur.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger sous vide pr. time?",
      answer:
        "Den første time bruger en sous vide-stav typisk 0,4–0,5 kWh, fordi vandet skal varmes op. Derefter er det vores skøn ud fra målingerne, at den bruger omkring 0,1–0,15 kWh i timen ved 60 grader med låg på gryden, eller {{kr 0,1-0,15}} i timen.",
    },
    {
      question: "Hvad koster sous vide i 24 timer?",
      answer:
        "Et døgn ved 60 grader med låg bruger omkring 3 kWh. Ved 74 grader blev der målt 4,66 kWh med låg og 3,43 kWh med låg og isolering. Det svarer til {{kr 3,43-4,66}} ved månedens elpris.",
    },
    {
      question: "Bruger en sous vide-stav på 1.200 W mere strøm end en på 800 W?",
      answer:
        "Næsten ikke. Den kraftige stav varmer vandet hurtigere op, men energien er den samme. I en måling af over 30 stave lå forbruget den første time på 0,39–0,53 kWh, uanset effekten.",
    },
    {
      question: "Kan man spare strøm ved sous vide?",
      answer:
        "Ja. Brug mindre vand, læg låg på, isolér gryden til lange retter og start med varmt vand fra hanen, hvis du har fjernvarme. Ved 24 timer sparede isolering omkring en fjerdedel i en måling.",
    },
    {
      question: "Hvornår er det billigst at starte en sous vide-ret?",
      answer:
        "Læg opvarmningen i en billig time, typisk om natten eller midt på dagen. Lange retter kan startes, så de er klar dagen efter, og så falder det meste af forbruget uden for aftenens dyre timer.",
    },
    {
      question: "Hvor meget strøm bruger sous vide om året?",
      answer:
        "Med fire retter på 3–4 timer om måneden bruger sous vide omkring 40 kWh om året, eller {{kr 40}} ved månedens elpris. Laver du ofte retter på et døgn, kan det blive flere hundrede kWh.",
    },
  ],
  relatedSlugs: ["ovn", "induktion", "slow-cooker", "elgrill", "riskoger"],
  sources: [
    { name: "Amazing Food Made Easy — Sous Vide Machine Benchmark Results (8 l, 60 °C)", url: "https://www.amazingfoodmadeeasy.com/info/modernist-cooking-blog/more/sous-vide-machine-benchmark-results" },
    { name: "Amazing Food Made Easy — SO-VIDA Sleeve Heating and Power Consumption Test (24 timer, 74 °C)", url: "https://www.amazingfoodmadeeasy.com/info/modernist-cooking-blog/more/so-vida-sleeve-heating-and-power-consumption-test" },
    { name: "testsieger.de — Test Princess 267003 Sous Vide Stick", url: "https://www.testsieger.de/testportal/test-princess-267003-sous-vide-stick/" },
    { name: "Anova Community — Basic insulation versus non-insulated container stats", url: "https://community.anovaculinary.com/t/basic-insulation-versus-non-insulated-container-stats/32460" },
  ],
  calculatorConfig: {
    title: "Sous vide forbrugsberegner",
    options: [
      { label: "Bøf eller fisk, 1–2 timer", kwhPerUse: 0.6 },
      { label: "Mørbrad eller andebryst, 3–4 timer", kwhPerUse: 0.8 },
      { label: "24 timer i isoleret beholder", kwhPerUse: 2.4 },
      { label: "24 timer i gryde med låg", kwhPerUse: 3.2 },
    ],
    usageLabel: "Antal retter pr. måned",
    usageUnit: "pr. måned",
    usageMin: 1,
    usageMax: 20,
    usageDefault: 4,
    usageStep: 1,
    per: "gang",
    perYear: 12,
  },
  publishDate: "2026-11-30",
  updated: "2026-11-22",
};

export default sousVide;
