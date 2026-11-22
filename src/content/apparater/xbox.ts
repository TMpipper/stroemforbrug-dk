import type { ApplianceData } from "@/lib/types";

const xbox: ApplianceData = {
  slug: "xbox",
  meta: {
    category: "underholdning",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "tv",
    synonyms: ["xbox", "xbox series x", "xbox series s", "xbox one", "spillekonsol", "xbox standby", "xbox instant-on", "xbox sleep"],
  },
  name: "Xbox",
  article: "en",
  title: "Xbox strømforbrug (2026) → Series X/S, Sleep og Shutdown",
  description: "En Xbox Series X bruger op til ca. 150 watt i spil, en Series S omkring 75. Se kWh om året, hvad Sleep-tilstanden koster, og hvorfor Shutdown sparer mest.",
  heading: "Strømforbrug for en Xbox: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En Xbox Series X bruger omkring 154 watt i et krævende spil og en Series S omkring 74 watt, ifølge Microsofts egne målinger. En times spil på Series X koster {{oere 0,154}} ved {{pris_kwh}}, og to timer om dagen hele året giver cirka 110 kWh, svarende til {{kr 110}}. Står konsollen i Sleep (tidligere Instant-on) resten af døgnet, kan standby koste næsten lige så meget som spillet.",
  kwhRange: [30, 250],
  typicalKwh: 110,
  wattage: 154,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.0, 0.95, 0.85, 0.8, 0.9, 0.9, 0.95, 1.05, 1.1, 1.25],
  content: `<h2>Hvor mange watt bruger en Xbox?</h2>
<p>Microsoft har selv offentliggjort målinger af, hvor meget strøm Xbox Series X og Series S bruger i forskellige tilstande. Målingerne er lavet i Microsofts laboratorium som grundlag for spiludviklere, der vil gøre deres spil mere energieffektive, og de viser, at forbruget svinger meget efter, hvad konsollen laver. Et krævende spil presser grafikchippen og får forbruget op, mens menuer og videostreaming bruger langt mindre.</p>
<table>
<thead><tr><th>Konsol og tilstand</th><th>Watt</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>Series X, aktivt spil</td><td>154 W</td><td>{{oere 0,154}}</td></tr>
<tr><td>Series X, hovedmenu</td><td>123 W</td><td>{{oere 0,123}}</td></tr>
<tr><td>Series S, aktivt spil</td><td>74 W</td><td>{{oere 0,074}}</td></tr>
<tr><td>Series S, hovedmenu</td><td>63 W</td><td>{{oere 0,063}}</td></tr>
<tr><td>Series S, streaming af film</td><td>ca. 31-41 W</td><td>{{oere 0,031}}-{{oere 0,041}}</td></tr>
<tr><td>Sleep (tidligere Instant-on)</td><td>ca. 10-15 W</td><td>{{oere 0,01}}-{{oere 0,015}}</td></tr>
<tr><td>Shutdown (energisparetilstand)</td><td>under 1 W</td><td>under en halv øre</td></tr>
</tbody>
</table>
<p>Tallene for spil og menu er Microsofts egne. Tallene for streaming og standby kommer fra den amerikanske miljøorganisation NRDC, der målte konsollerne kort efter lanceringen, og fra pressens målinger af Sleep-tilstanden. NRDC målte Series S til 53-57 W i de spil, de testede — lavere end Microsofts 74 W, fordi Microsoft har målt med et særligt krævende testspil. Det reelle tal afhænger af spillet.</p>

<h2>Series X, Series S og Xbox One</h2>
<p>Series X er den kraftige model med 4K-grafik, og den bruger omtrent dobbelt så meget strøm som Series S, når der spilles. Series S er bygget til lavere opløsning og har en mindre grafikchip; Microsoft måler den til 77 W, når den kører 1440p. Vælger du konsol ud fra strømforbruget alene, er Series S den sparsomme af de to, men forskellen er i praksis få kroner om måneden, hvis du spiller et par timer om dagen.</p>
<p>Den ældre Xbox One fra 2013 er et andet regnestykke. Den brugte mindre strøm i spil end Series X, men NRDC fandt i 2014, at dens standby med stemmestyring og hurtig opstart brugte over 15 watt, og at næsten halvdelen af konsollens årlige strømforbrug gik til at stå på standby. Har du stadig en Xbox One, er standby-indstillingen derfor det vigtigste at kigge på.</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Series X, 1 time spil om dagen</td><td>56 kWh</td><td>{{kr 56}}</td></tr>
<tr><td>Series X, 2 timer spil om dagen</td><td>112 kWh</td><td>{{kr 112}}</td></tr>
<tr><td>Series S, 2 timer spil om dagen</td><td>54 kWh</td><td>{{kr 54}}</td></tr>
<tr><td>Sleep resten af døgnet (ca. 13 W i 22 timer)</td><td>104 kWh</td><td>{{kr 104}}</td></tr>
<tr><td>Shutdown resten af døgnet (0,5 W i 22 timer)</td><td>4 kWh</td><td>{{kr 4}}</td></tr>
</tbody>
</table>

<h2>Sleep eller Shutdown: den største forskel</h2>
<p>Xbox Series X og S har to måder at slukke på. I Sleep — som tidligere hed Instant-on — står konsollen klar: den starter på få sekunder, den henter opdateringer om natten, og den kan huske flere spil med Quick Resume, så du kan fortsætte, hvor du slap. Prisen er, at den bruger 10-15 watt hele tiden. I Shutdown, som Microsoft kalder energisparetilstanden, slukker konsollen næsten helt og bruger under 1 W. Den starter lidt langsommere, og Quick Resume-spillene bliver lukket.</p>
<p>Forskellen ser lille ud i watt, men den løber op, fordi konsollen står slukket det meste af døgnet. Spiller du to timer om dagen, står den i standby i 22 timer. Med Sleep er det omkring 104 kWh om året — næsten det samme som selve spillet på en Series X. Med Shutdown er det omkring 4 kWh. Skiftet sparer altså cirka 100 kWh om året, svarende til {{kr 100}}, uden at du spiller mindre.</p>
<p>NRDC skrev i 2020, at konsoller solgt i Europa leveres med energisparetilstanden valgt fra fabrikken. Har du selv slået Sleep til for at få hurtigere opstart, eller har du købt en konsol fra et andet marked, kan du tjekke strømindstillingen i konsollens generelle indstillinger.</p>

<h2>Streaming på Xbox</h2>
<p>Mange bruger konsollen til Netflix og andre streamingtjenester, og her er Xbox ikke den mest sparsomme løsning. NRDC målte Series S til cirka 31 W med Netflix og 41 W med Prime Video. Et moderne smart-<a href="/tv/">tv</a> med indbyggede apps eller en lille streamingboks bruger kun få watt ekstra til det samme. Ser du to timer film om dagen gennem konsollen, er det 20-30 kWh om året, svarende til {{kr 20}}-{{kr 30}}. Det er ikke meget, men det er et forbrug, du kan undgå ved at bruge tv'ets egne apps.</p>

<h2>Hvad bestemmer, hvor meget strøm din Xbox bruger?</h2>
<ul>
<li><strong>Spillet</strong> — grafiktunge spil i 4K og med høj billedfrekvens trækker mest. Ældre eller simple spil bruger mindre.</li>
<li><strong>Standby-indstillingen</strong> — Sleep eller Shutdown er den største enkeltfaktor over et år.</li>
<li><strong>Timer om dagen</strong> — forbruget pr. time er lille, så det er antallet af timer, der flytter regningen.</li>
<li><strong>Menuer og pauser</strong> — konsollen bruger næsten lige så meget i en menu som i et spil, så en konsol, der står og venter i hovedmenuen, er dyrere end man tror.</li>
<li><strong>Tv og lyd</strong> — konsollen er kun en del af forbruget. Tv'et ved siden af bruger ofte lige så meget, og en soundbar lægger mere til.</li>
</ul>
<p>Sammenligner du med en <a href="/playstation/">PlayStation 5</a>, ligger de to konsoller i samme størrelsesorden i spil. En <a href="/gaming-pc/">gaming-pc</a> med et kraftigt grafikkort kan bruge flere gange så meget.</p>

<h2>Kan du spille i de billige timer?</h2>
<p>Gaming bliver sjældent flyttet efter elprisen — du spiller, når du har tid. Men det, der kan flyttes, er opdateringerne. I Sleep henter konsollen spil og systemopdateringer om natten, ofte i de timer, hvor elprisen er lav. I Shutdown henter den dem først, når du tænder den. Det betyder ikke meget for regningen, da en opdatering kun tager kort tid; det, der betyder noget, er de mange timer i standby. Er du i tvivl om dagens dyre timer, viser oversigten længere oppe, hvornår prisen er højest — typisk mellem kl. 17 og 21, hvor de fleste også spiller.</p>

<h2>Controllere og tilbehør</h2>
<p>De trådløse controllere bruger også lidt strøm. En controller med genopladeligt batteri lades typisk gennem USB fra konsollen eller en lille oplader, og en fuld opladning er et meget lille forbrug sammenlignet med konsollen. Står konsollen i Sleep, kan den levere strøm til USB-portene og lade controllere, mens du ikke spiller — det er praktisk, men det er også en grund til, at Sleep bruger mere end Shutdown. Ekstra harddiske, headset-stationer og ladestationer ved siden af konsollen har ofte deres egen strømforsyning, der står tændt hele døgnet. Sæt dem på samme stikdåse som konsollen, så de slukker sammen.</p>

<h2>Sådan sparer du strøm på din Xbox</h2>
<ol>
<li><strong>Vælg Shutdown (energisparetilstand)</strong> i strømindstillingerne. Det sparer cirka 100 kWh om året mod Sleep.</li>
<li><strong>Lad konsollen slukke af sig selv</strong> efter en periode uden aktivitet — det vælges i de samme strømindstillinger.</li>
<li><strong>Sluk i stedet for at pause</strong>, når du går fra konsollen i længere tid.</li>
<li><strong>Brug tv'ets apps til film</strong> i stedet for konsollen.</li>
<li><strong>Sluk tv og soundbar</strong> sammen med konsollen — de står ofte på standby ved siden af.</li>
<li><strong>Brug HDMI-CEC med omtanke</strong> — det kan tænde tv og konsol samtidig, også når du kun vil se tv.</li>
</ol>
<p>Læs mere om de små forbrug, der løber hele døgnet, i guiden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger en Xbox Series X?", answer: "Omkring 154 W i et krævende spil og 123 W i hovedmenuen, ifølge Microsofts egne målinger. En time i spil koster {{oere 0,154}} ved {{pris_kwh}}." },
    { question: "Hvor meget strøm bruger en Xbox Series S?", answer: "Microsoft måler Series S til omkring 74 W i spil og 63 W i menuen. To timer spil om dagen giver cirka 54 kWh om året, svarende til {{kr 54}}." },
    { question: "Hvad koster Sleep-tilstanden (Instant-on) om året?", answer: "Med 10-15 W i 22 timer om dagen bruger Sleep omkring 80-120 kWh om året, svarende til {{kr 80}}-{{kr 120}}. Shutdown bruger under 1 W, cirka 4 kWh eller {{kr 4}}." },
    { question: "Skal jeg bruge Sleep eller Shutdown på min Xbox?", answer: "Shutdown sparer cirka 100 kWh om året, svarende til {{kr 100}}. Til gengæld starter konsollen langsommere, og Quick Resume-spil bliver lukket." },
    { question: "Bruger en Xbox meget strøm til Netflix?", answer: "NRDC målte Series S til cirka 31 W med Netflix. To timer om dagen giver cirka 23 kWh om året, svarende til {{kr 23}}. Tv'ets egne apps bruger typisk mindre." },
    { question: "Bruger Xbox One mere strøm end Series X?", answer: "I spil bruger Xbox One mindre end Series X, men dens standby med hurtig opstart brugte over 15 W ifølge NRDC. Står den i den tilstand hele året, er det over 130 kWh, svarende til {{kr 130}}." },
  ],
  relatedSlugs: ["playstation", "tv", "gaming-pc", "skaerm", "ipad", "router"],
  sources: [
    { name: "Microsoft Learn — Xbox lab platform baselines (strømforbrug i spil og menu)", url: "https://learn.microsoft.com/en-us/gaming/sustainability/lab-platform-baselines" },
    { name: "NRDC — Latest game consoles: environmental winners or losers? (2020)", url: "https://www.nrdc.org/bio/noah-horowitz/latest-game-consoles-environmental-winners-or-losers" },
    { name: "NRDC — Latest-generation video game consoles: how much energy do they waste when you're not playing? (2014)", url: "https://www.nrdc.org/experts/pierre-delforge/latest-generation-video-game-consoles-how-much-energy-do-they-waste-when" },
  ],
  calculatorConfig: {
    title: "Beregn din Xbox' strømforbrug",
    options: [
      { label: "Xbox Series X i spil (ca. 154 W)", kwhPerUse: 0.154 },
      { label: "Xbox Series S i spil (ca. 74 W)", kwhPerUse: 0.074 },
      { label: "Streaming af film (ca. 40 W)", kwhPerUse: 0.04 },
    ],
    usageLabel: "Timer i brug pr. dag",
    usageUnit: "timer/dag",
    usageMin: 0.5,
    usageMax: 12,
    usageDefault: 2,
    usageStep: 0.5,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default xbox;
