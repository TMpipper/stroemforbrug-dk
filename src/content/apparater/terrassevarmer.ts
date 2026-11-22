import type { ApplianceData } from "@/lib/types";

/**
 * Terrassevarmer på el (infrarød, halogen, carbon). Ingen EU-energimærke. Effekten = forbruget, når den er tændt.
 * Tal: Bolius (typer; halogen ≈ 40 % lys og næsten dobbelt effekt for samme varme; gasvarmer ≈ 1 kg gas i timen;
 * infrarøde rør holder ca. 7.000 timer), ANWB (1.400 W pr. ca. 6 m²; to varmere, 4 timer, 24 aftener ≈ 270 kWh),
 * Bauhaus Termo Proffs (1.800 W, carbonrør, IP65, 10–12 m²).
 * Beregneren: timer pr. uge × 26 uger (april–september).
 */
const terrassevarmer: ApplianceData = {
  slug: "terrassevarmer",
  meta: {
    category: "have",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["terrassevarmer", "terrassevarmer el", "infrarød terrassevarmer", "varmelampe", "udendørs varmer", "halogen terrassevarmer", "carbon terrassevarmer", "parasolvarmer"],
  },
  name: "Terrassevarmer",
  title: "Terrassevarmer strømforbrug (2026) → watt og kWh pr. aften",
  description:
    "Se hvor meget strøm en el-terrassevarmer bruger i timen, pr. aften og over en sæson – infrarød, halogen og carbon – og hvordan den klarer sig mod gas.",
  heading: "Strømforbrug for en terrassevarmer: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En el-terrassevarmer bruger typisk 1,2–3 kWh i timen, fordi den bruger hele sin effekt, så længe den er tændt. En model på 1.800 W koster omkring {{kr 1,8}} i timen ved månedens elpris, og en aften på fire timer cirka {{kr 7,2}}. Med tre timer om ugen fra april til september bliver det omkring 140 kWh, eller {{kr 140}} for sæsonen.",
  kwhRange: [30, 600],
  typicalKwh: 140,
  wattage: 1800,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0, 0, 0.3, 1.1, 2.0, 2.2, 2.0, 2.1, 1.6, 0.6, 0.1, 0],
  content: `<h2>Hvor meget strøm bruger en terrassevarmer?</h2>
<p>En el-terrassevarmer er et af de enkleste apparater, der findes: et varmelegeme bag en reflektor, der sender infrarød stråling ned på dig og bordet. Der er ingen termostat, der slår fra, for luften udenfor bliver aldrig varm nok. Derfor bruger den hele sin effekt, så længe den er tændt. En terrassevarmer på 1.800 W bruger 1,8 kWh i timen, en på 2.200 W bruger 2,2 kWh – det er hele regnestykket.</p>
<p>Ved månedens elpris koster en time med en varmer på 1.800 W omkring {{kr 1,8}}. En hyggelig aften på terrassen fra kl. 19 til 23 koster dermed cirka {{kr 7,2}}. Den hollandske bilistorganisation ANWB regner med et eksempel, hvor to terrassevarmere på 1.400 W kører fire timer på 24 aftener om året: det giver omkring 270 kWh, svarende til {{kr 270}}.</p>
<p>Beregneren regner med tre timer om ugen i de 26 uger fra april til september. Det giver omkring 140 kWh om året for en varmer på 1.800 W, eller {{kr 140}}. Bruger du den hver aften i sommerferien, kan det let blive det dobbelte.</p>

<h2>Forbrug efter effekt</h2>
<table>
<thead><tr><th>Effekt</th><th>kWh i timen</th><th>Pris i timen</th><th>Pris for en aften (4 timer)</th><th>Pris for en sæson (3 t × 26 uger)</th></tr></thead>
<tbody>
<tr><td>1.200 W (lille vægmodel)</td><td>1,2 kWh</td><td>{{kr 1,2}}</td><td>{{kr 4,8}}</td><td>{{kr 94}}</td></tr>
<tr><td>1.800 W (typisk væg- eller parasolmodel)</td><td>1,8 kWh</td><td>{{kr 1,8}}</td><td>{{kr 7,2}}</td><td>{{kr 140}}</td></tr>
<tr><td>2.200 W</td><td>2,2 kWh</td><td>{{kr 2,2}}</td><td>{{kr 8,8}}</td><td>{{kr 172}}</td></tr>
<tr><td>3.000 W (standermodel)</td><td>3 kWh</td><td>{{kr 3}}</td><td>{{kr 12}}</td><td>{{kr 234}}</td></tr>
</tbody>
</table>
<p>Mange terrassevarmere har to eller tre trin, så en model på 1.800 W også kan køre på for eksempel 600 eller 1.200 W. På lavere trin falder forbruget i samme forhold – men varmen gør det også. Tabellen viser fuld effekt.</p>

<h2>Infrarød, halogen eller carbon?</h2>
<p>Bolius deler el-terrassevarmere op i tre typer. Fælles for dem er, at de varmer ved stråling: de varmer de mennesker og flader, strålingen rammer, ikke luften. Det er derfor, de overhovedet virker udendørs, hvor varm luft straks blæser væk.</p>
<p><strong>Halogenvarmere</strong> lyser kraftigt orange eller gult. Bolius skriver, at omkring 40 procent af energien går til lys frem for varme, så de skal bruge næsten dobbelt så mange watt for at give samme varme som en infrarød varmer. De er billige at købe, men dyre i drift.</p>
<p><strong>Infrarøde varmere med kvarts- eller carbonrør</strong> lyser svagere og omsætter mere af strømmen til varmestråling. Bolius nævner, at infrarøde rør holder omkring 7.000 timer. Carbonrør giver en blødere, mere langbølget varme, som mange oplever som mere behagelig.</p>
<p><strong>Reflektorvarmere</strong> med et varmelegeme bag en poleret skærm retter varmen mod et bestemt område og passer godt på en væg eller under et halvtag.</p>
<p>Uanset typen er strømforbruget lig med effekten. Forskellen er, hvor meget af strømmen der ender som varme på dig – og det er den, der afgør, om du kan nøjes med en mindre model.</p>

<h2>Hvor stort et område kan den varme?</h2>
<p>ANWB regner med, at en terrassevarmer på 1.400 W varmer omkring 6 m². Bauhaus oplyser, at deres Termo Proffs på 1.800 W med carbonrør varmer 10–12 m². Tallene afhænger af, hvor højt varmeren hænger, og om der er læ – i blæst forsvinder varmen langt hurtigere fra huden.</p>
<p>Sæt varmeren der, hvor I sidder, og ret den mod bordet. En varmer på 1.800 W, der hænger 2 meter over et bord til fire, giver mere varme end to, der hænger højt over hele terrassen. Læ fra en mur, et hegn eller en markise gør mere for komforten end flere watt.</p>

<h2>El eller gas?</h2>
<p>Gasterrassevarmere bruger ifølge Bolius omkring 1 kg gas i timen, så en flaske på 11 kg rækker til omkring 11 timers brug. De varmer mere luft omkring sig og kan give mere varme end en el-varmer, men en stor del af varmen stiger til vejrs. Gas kræver indkøb og udskiftning af flasker og udleder CO2 direkte på terrassen.</p>
<p>El-terrassevarmeren er enklere: den tændes på et øjeblik, varmer kun, hvor den peger, og koster ikke noget, når den er slukket. Den kræver en stikkontakt eller en fast installation udendørs, og den skal være beregnet til udendørs brug – Bauhaus' Termo Proffs har for eksempel tæthedsklasse IP65. En fast installation skal laves af en autoriseret elinstallatør.</p>

<h2>Hvornår på døgnet bruger terrassevarmeren strøm?</h2>
<p>Terrassevarmeren bruges, når solen er gået ned og det bliver køligt – typisk fra kl. 18 eller 19 og nogle timer frem. Det er desværre præcis i døgnets dyreste periode: fra kl. 17 til 21 er elprisen typisk højest, fordi alle laver mad og tænder lyset samtidig. Den time, du bruger varmeren, kan derfor koste mærkbart mere end gennemsnittet. Forbruget kan ikke flyttes, men du kan slukke, når I går ind, og nøjes med lavere trin den første time, mens det stadig er lunt. Boksen længere oppe på siden viser, hvor dyr aftenen er i dag.</p>

<h2>Hvad bestemmer forbruget over en sæson?</h2>
<p>Fordi effekten er fast, er det kun antallet af timer, der flytter årsforbruget. Tre ting afgør det. Den første er, hvor mange aftener I sidder ude: en familie, der spiser på terrassen fem aftener om ugen i juli og august, bruger let tre–fire gange så mange timer som beregnerens tre timer om ugen. Den anden er, hvor tidligt på foråret og hvor sent på efteråret I bruger den – i april og september er aftenerne kolde, og varmeren kører hele tiden, mens den midt på sommeren ofte kan slukkes efter en time. Den tredje er antallet af varmere: to varmere på 1.800 W bruger 3,6 kWh i timen, og så koster en aften på fire timer {{kr 14,4}}. Tæl derfor varmere og timer sammen, før du regner. Har I en overdækket terrasse med læ på tre sider, kan én varmer på lavt trin ofte gøre det samme arbejde som to på fuld effekt i åben vind.</p>

<h2>Standby og timer</h2>
<p>En simpel terrassevarmer med træksnor eller kontakt bruger intet, når den er slukket. Modeller med fjernbetjening har et lille standbyforbrug, men det er under én watt og betyder intet ved siden af en aften med 1.800 W. Det største spild er en varmer, der bliver glemt. Mange modeller har en timer, der slukker efter en eller to timer – brug den, eller sæt varmeren på en smart stikkontakt med automatisk sluk.</p>

<h2>Sådan holder du terrassevarmerens forbrug nede</h2>
<ol>
<li><strong>Vælg infrarød eller carbon frem for halogen</strong> – du får mere varme pr. kWh.</li>
<li><strong>Brug lavere trin</strong>, når det kun er lidt køligt.</li>
<li><strong>Placer den tæt på jer</strong> og ret den mod bordet.</li>
<li><strong>Skab læ</strong> – vind fjerner varmen fra huden hurtigt.</li>
<li><strong>Brug timeren</strong>, så den ikke kører, når alle er gået ind.</li>
<li><strong>Tag tæpper og en varm trøje frem</strong> – det er gratis og varmer mere end en ekstra varmer.</li>
</ol>
<p>Til stemningen bruger en <a href="/lyskaede/">lyskæde</a> kun få watt, mens en <a href="/varmeblaeser/">varmeblæser</a> eller <a href="/elradiator/">elradiator</a> bruger lige så meget strøm som terrassevarmeren, men ikke virker udendørs, fordi den varmer luften.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en terrassevarmer i timen?",
      answer:
        "Lige så meget som dens effekt: en terrassevarmer på 1.800 W bruger 1,8 kWh i timen, svarende til {{kr 1,8}} ved månedens elpris. Små modeller på 1.200 W bruger 1,2 kWh, store standermodeller op til 3 kWh i timen.",
    },
    {
      question: "Hvad koster det at have en terrassevarmer tændt en hel aften?",
      answer:
        "Fire timer med en varmer på 1.800 W bruger 7,2 kWh og koster cirka {{kr 7,2}}. Bemærk, at aftentimerne fra kl. 17 til 21 typisk er døgnets dyreste.",
    },
    {
      question: "Hvad koster en terrassevarmer i strøm om året?",
      answer:
        "Med tre timer om ugen fra april til september bruger en varmer på 1.800 W omkring 140 kWh, svarende til {{kr 140}}. To varmere på 1.400 W i fire timer på 24 aftener giver omkring 270 kWh, eller {{kr 270}}.",
    },
    {
      question: "Bruger en halogen-terrassevarmer mere strøm end en infrarød?",
      answer:
        "Ifølge Bolius går omkring 40 procent af energien i en halogenvarmer til lys, så den skal bruge næsten dobbelt så mange watt for at give samme varme. En infrarød eller carbonvarmer giver mere varme pr. kWh.",
    },
    {
      question: "Er en gasterrassevarmer billigere end en el-terrassevarmer?",
      answer:
        "Det afhænger af prisen på gas og strøm. En gasvarmer bruger omkring 1 kg gas i timen og varmer mere luft omkring sig, mens el-varmeren kun varmer, hvor den peger, og koster {{kr 1,8}} i timen for en model på 1.800 W.",
    },
    {
      question: "Hvor mange m² kan en terrassevarmer varme?",
      answer:
        "ANWB regner med omkring 6 m² for en varmer på 1.400 W, og Bauhaus oplyser 10–12 m² for deres model på 1.800 W. Læ og placering betyder lige så meget som effekten.",
    },
  ],
  relatedSlugs: ["varmeblaeser", "elradiator", "lyskaede", "koeleboks", "ventilator"],
  sources: [
    { name: "Bolius — Terrassevarmer: hvilken skal du vælge?", url: "https://www.bolius.dk/terrassevarmer-hvilken-skal-du-vaelge-8180" },
    { name: "ANWB — Hoeveel stroom verbruikt een terrasverwarmer?", url: "https://www.anwb.nl/huis/energie/hoeveel-stroom-verbruikt-een-terrasverwarmer" },
    { name: "Bauhaus — Termo Proffs terrassevarmer 1.800 W (specifikationer)", url: "https://www.bauhaus.dk/termo-proffs-terrassevarmer-1800-w" },
  ],
  calculatorConfig: {
    title: "Terrassevarmer forbrugsberegner",
    options: [
      { label: "Lille vægmodel (1.200 W)", kwhPerUse: 1.2 },
      { label: "Typisk væg- eller parasolmodel (1.800 W)", kwhPerUse: 1.8 },
      { label: "Kraftig model (2.200 W)", kwhPerUse: 2.2 },
      { label: "Standermodel (3.000 W)", kwhPerUse: 3.0 },
    ],
    usageLabel: "Timer pr. uge (26 uger fra april til september)",
    usageUnit: "timer pr. uge",
    usageMin: 0.5,
    usageMax: 30,
    usageDefault: 3,
    usageStep: 0.5,
    per: "time",
    perYear: 26,
  },
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default terrassevarmer;
