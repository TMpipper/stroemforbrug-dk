import type { ApplianceData } from "@/lib/types";

const soundbar: ApplianceData = {
  slug: "soundbar",
  meta: {
    category: "underholdning",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "tv",
    synonyms: ["soundbar", "lydbjælke", "sonos arc", "sonos beam", "sonos ray", "samsung soundbar", "subwoofer", "soundbar standby", "hjemmebiograf lyd"],
  },
  name: "Soundbar",
  article: "en",
  title: "Soundbar strømforbrug (2026) → afspilning, sub og standby",
  description: "En soundbar bruger mere på at vente end på at spille: en Sonos Arc trækker 4,4 watt i hvile hele døgnet. Se watt for Sonos og Samsung, kWh om året og prisen.",
  heading: "Strømforbrug for en soundbar: watt og pris",
  quickAnswer:
    "En soundbar bruger efter vores skøn omkring 25 watt ved normal lydstyrke, så tre timers tv om dagen giver cirka 30 kWh om året, svarende til {{kr 30}}. Den store post er ofte hvilen: Sonos måler Arc til 4,4 watt og Beam til 6,3 watt, når de ikke spiller, og det løber hele døgnet. 21 timer i hvile om dagen koster en Arc cirka 34 kWh om året, svarende til {{kr 34}}.",
  kwhRange: [5, 200],
  typicalKwh: 30,
  wattage: 25,
  standbyWatts: 4.4,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.15, 1.1, 1.0, 0.95, 0.85, 0.8, 0.95, 0.9, 0.95, 1.05, 1.1, 1.2],
  content: `<h2>Hvor mange watt bruger en soundbar?</h2>
<p>En soundbar er en forstærker og en række højttalere bygget ind i en lang kasse under <a href="/tv/">tv'et</a>. Når den spiller, går strømmen til forstærkeren, og forbruget stiger med lydstyrken og bassen. Producenterne oplyser sjældent, hvad en soundbar bruger ved almindelig tv-lyd. Samsung opgiver et driftsforbrug for hver enhed i deres anlæg, men det er et tal tæt på det maksimale. Ved almindelig lydstyrke i en stue bruger en soundbar langt mindre — efter vores skøn 15-25 watt for selve baren.</p>
<table>
<thead><tr><th>Anlæg</th><th>Opgivet drift</th><th>Pris i timen ved opgivet drift</th></tr></thead>
<tbody>
<tr><td>Samsung HW-Q600H, soundbar</td><td>37 W</td><td>{{oere 0,037}}</td></tr>
<tr><td>Samsung HW-Q600H, soundbar og subwoofer</td><td>65 W</td><td>{{oere 0,065}}</td></tr>
<tr><td>Samsung HW-Q930H, soundbar, subwoofer og to bagerste højttalere</td><td>106 W</td><td>{{oere 0,106}}</td></tr>
<tr><td>Almindelig soundbar ved normal lydstyrke (vores skøn)</td><td>ca. 25 W</td><td>{{oere 0,025}}</td></tr>
</tbody>
</table>
<p>Samsungs tal er fra producentens specifikationsark. Hver enhed i Samsungs anlæg bruger 0,5 watt i standby.</p>

<h2>Hvilen er den store post</h2>
<p>Mange soundbars er koblet til wifi og står klar til at spille musik fra telefonen eller reagere på stemmestyring. Det kræver, at de aldrig slukker helt, men står i en hviletilstand med netværket tændt. Sonos har offentliggjort, hvad deres produkter bruger i hvile ved 230 volt, og tallene er højere, end mange regner med:</p>
<table>
<thead><tr><th>Sonos-produkt</th><th>Watt i hvile</th><th>kWh om året, 21 timer i hvile pr. døgn</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Ray</td><td>2,92 W</td><td>22 kWh</td><td>{{kr 22}}</td></tr>
<tr><td>Arc</td><td>4,4 W</td><td>34 kWh</td><td>{{kr 34}}</td></tr>
<tr><td>Arc Ultra</td><td>4,6 W</td><td>35 kWh</td><td>{{kr 35}}</td></tr>
<tr><td>Beam (2. gen.)</td><td>6,3 W</td><td>48 kWh</td><td>{{kr 48}}</td></tr>
<tr><td>Sub (3. gen.)</td><td>3,8 W</td><td>29 kWh</td><td>{{kr 29}}</td></tr>
<tr><td>Sub Mini</td><td>2,86 W</td><td>22 kWh</td><td>{{kr 22}}</td></tr>
</tbody>
</table>
<p>En Arc med en Sub i hvile bruger altså omkring 63 kWh om året, svarende til {{kr 63}}, uden at spille en tone. Det er mere end den strøm, anlægget bruger på at spille tre timers tv om dagen. Hvilen er en del af produktets funktion — uden den kan anlægget ikke vækkes fra telefonen — men det er godt at vide, at hvert ekstra rum med wifi-højttaler lægger til.</p>

<h2>Hvad koster en soundbar om året?</h2>
<p>Lægger du afspilning og hvile sammen, får du det samlede billede. Tabellen regner med vores skøn på 25 watt ved afspilning og tre timers tv om dagen.</p>
<table>
<thead><tr><th>Anlæg</th><th>Afspilning</th><th>Hvile</th><th>I alt om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Soundbar med 0,5 W standby</td><td>27 kWh</td><td>4 kWh</td><td>31 kWh</td><td>{{kr 31}}</td></tr>
<tr><td>Sonos Arc</td><td>27 kWh</td><td>34 kWh</td><td>61 kWh</td><td>{{kr 61}}</td></tr>
<tr><td>Sonos Arc med Sub</td><td>27 kWh (bar)</td><td>63 kWh</td><td>90 kWh</td><td>{{kr 90}}</td></tr>
</tbody>
</table>
<p>Subwooferens forbrug under afspilning er ikke med i den sidste række, så det reelle tal er lidt højere.</p>

<h2>Hvad betyder lydstyrken?</h2>
<p>En forstærker bruger mest, når lydstyrken og bassen er høj. Ved almindelig tale i en nyhedsudsendelse ligger forbruget tæt på hvileforbruget plus nogle få watt, mens en actionfilm med høj lyd og subwoofer kan trække op mod det, producenten opgiver som driftsforbrug. Samsungs tal for HW-Q600H — 37 watt for baren og 28 watt for subwooferen — er derfor et loft for almindelig brug, ikke et gennemsnit. Vi har ikke fundet producenter, der oplyser forbruget ved normal lydstyrke, og derfor er vores tal på 15-25 watt et skøn.</p>
<p>Selv med Samsungs fulde driftstal er afspilning en overskuelig post: tre timer om dagen på 65 watt er cirka 71 kWh om året, svarende til {{kr 71}}. Det er den øvre grænse for et anlæg med bar og subwoofer, og de fleste ligger et godt stykke under.</p>

<h2>Soundbar sammen med tv, projektor og tv-boks</h2>
<p>En soundbar står sjældent alene. Den tændes og slukkes ofte via tv'ets HDMI-forbindelse, så den følger tv'et. Bruger du en <a href="/projektor/">projektor</a>, er soundbaren næsten altid med, fordi projektoren selv har svag lyd. Og billedet kommer ofte fra en <a href="/tv-boks/">tv-boks</a> eller en konsol, der også står i hvile. Ser du på hele tv-hjørnet, er det summen af de små hvileforbrug, der løber op over et år — ikke de timer, hvor anlægget spiller.</p>

<h2>Hvad bestemmer, hvor meget strøm din soundbar bruger?</h2>
<ul>
<li><strong>Hvileforbruget</strong> — wifi-soundbars bruger 3-6 watt i hvile, enklere modeller 0,5 watt.</li>
<li><strong>Subwoofer og bagerste højttalere</strong> — hver enhed har sin egen forstærker og sin egen hvile.</li>
<li><strong>Lydstyrken</strong> — høj lyd og meget bas trækker mere.</li>
<li><strong>Timer foran tv'et</strong> — afspilning er den mindste post for de fleste.</li>
<li><strong>Stemmestyring</strong> — en mikrofon, der altid lytter, holder elektronikken vågen.</li>
</ul>

<h2>Sådan sparer du strøm på din soundbar</h2>
<ol>
<li><strong>Vælg en model med lav hvile</strong>, hvis du ikke bruger wifi-funktionerne — forskellen kan være 30 kWh om året.</li>
<li><strong>Brug HDMI-styring</strong>, så soundbaren slukker sammen med tv'et.</li>
<li><strong>Sluk på stikdåsen om natten</strong>, hvis du ikke bruger stemmestyring eller musik fra telefonen; anlægget starter blot lidt langsommere.</li>
<li><strong>Undlad en ekstra subwoofer</strong> i et lille rum, hvor den ikke gør en hørbar forskel.</li>
<li><strong>Slå stemmestyring fra</strong>, hvis du ikke bruger den.</li>
</ol>
<p>Læs mere om de mange små døgnforbrug i guiden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger en soundbar?", answer: "Ved normal lydstyrke efter vores skøn omkring 15-25 W. Samsung opgiver 37 W i drift for HW-Q600H og 28 W for subwooferen. En time på 25 W koster {{oere 0,025}}." },
    { question: "Hvad bruger en Sonos Arc på standby?", answer: "Sonos måler Arc til 4,4 W i hvile ved 230 V. 21 timer i hvile om dagen giver cirka 34 kWh om året, svarende til {{kr 34}}." },
    { question: "Bruger en subwoofer strøm, når den ikke spiller?", answer: "Ja. Sonos Sub (3. gen.) bruger 3,8 W i hvile, Sub Mini 2,86 W. Samsungs subwoofere bruger 0,5 W i standby." },
    { question: "Hvad koster en soundbar om året?", answer: "Med tre timers tv om dagen og 0,5 W standby cirka 31 kWh, svarende til {{kr 31}}. En wifi-soundbar med 4,4 W hvile kommer op omkring 61 kWh, svarende til {{kr 61}}." },
    { question: "Skal jeg slukke soundbaren på stikkontakten?", answer: "Det sparer mest på wifi-modeller. En Sonos Beam, der slukkes i otte timer om natten, sparer cirka 18 kWh om året, svarende til {{kr 18}}." },
  ],
  relatedSlugs: ["tv", "projektor", "tv-boks", "playstation", "xbox", "router"],
  sources: [
    { name: "Sonos — Sonos standby power consumption (hvileforbrug pr. produkt ved 230 V)", url: "https://support.sonos.com/en/article/sonos-standby-power-consumption" },
    { name: "Samsung — HW-Q600H specifikationsark (drift og standby)", url: "https://images.samsung.com/is/content/samsung/assets/au/audio-devices/product-specs/HW-Q600H_2026_RetailerSpecSheet_V2.pdf" },
    { name: "Samsung — HW-Q930H specifikationsark (drift og standby)", url: "https://images.samsung.com/is/content/samsung/assets/au/audio-devices/product-specs/HW-Q930H_2026_RetailerSpecSheet_V2-2.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn din soundbars strømforbrug",
    options: [
      { label: "Lille soundbar, normal lydstyrke (ca. 15 W, vores skøn)", kwhPerUse: 0.015 },
      { label: "Soundbar, normal lydstyrke (ca. 25 W, vores skøn)", kwhPerUse: 0.025 },
      { label: "Soundbar med subwoofer, opgivet drift (ca. 65 W)", kwhPerUse: 0.065 },
      { label: "Fuldt anlæg med bagerste højttalere, opgivet drift (ca. 106 W)", kwhPerUse: 0.106 },
    ],
    usageLabel: "Timer i brug pr. dag",
    usageUnit: "timer/dag",
    usageMin: 0.5,
    usageMax: 12,
    usageDefault: 3,
    usageStep: 0.5,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-12-12",
  updated: "2026-11-22",
};

export default soundbar;
