import type { ApplianceData } from "@/lib/types";

const varmepumpeToerretumbler: ApplianceData = {
  slug: "varmepumpe-toerretumbler",
  meta: {
    category: "vask",
    usage: "per-use",
    hasEuLabel: true,
    shiftable: true,
    motif: "vaskemaskine",
    synonyms: ["varmepumpetørretumbler", "varmepumpe tørretumbler", "tørretumbler med varmepumpe", "varmepumpetumbler", "heat pump dryer", "kondenstørretumbler med varmepumpe", "a+++ tørretumbler"],
  },
  name: "Varmepumpetørretumbler",
  article: "en",
  title: "Varmepumpetørretumbler strømforbrug (2026) → kWh pr. tørring",
  description: "En tørretumbler med varmepumpe bruger ca. 0,8-1,7 kWh pr. tørring. Se det nye energimærke, kWh pr. 100 tørringer og besparelsen mod kondens og aftræk.",
  heading: "Strømforbrug for en varmepumpetørretumbler: kWh, pris pr. tørring og billigste tidspunkt",
  quickAnswer:
    "En tørretumbler med varmepumpe bruger typisk 0,8-1,7 kWh pr. tørring, så en tørring koster {{kr 0,8}}-{{kr 1,7}} ved {{pris_kwh}}. Det er omkring en tredjedel af en gammel kondens- eller aftrækstumbler. Tre tørringer om ugen giver cirka 190 kWh om året, svarende til {{kr 190}}.",
  kwhRange: [110, 350],
  typicalKwh: 190,
  wattage: 800,
  standbyWatts: 0.5,
  // Klassegrænserne i den nye tørretumbler-forordning kunne ikke verificeres i den endelige tekst (22. nov. 2026) — ingen tabel frem for en forkert.
  energyLabels: [],
  models: [
    { brand: "Samsung", model: "DV90DB7845GEU3 (9 kg, 156 tørringer/år)", kwh: 123, energyClass: "A" },
    { brand: "Blomberg", model: "BT8M54W (8 kg, 156 tørringer/år)", kwh: 150, energyClass: "C" },
  ],
  seasonalProfile: [1.25, 1.2, 1.1, 0.95, 0.8, 0.7, 0.65, 0.7, 0.9, 1.05, 1.25, 1.45],
  content: `<h2>Sådan bruger en varmepumpetumbler sin strøm</h2>
<p>En almindelig kondenstumbler varmer luften med et varmelegeme, sender den gennem tøjet og køler den bagefter, så vanddampen bliver til vand i beholderen. Varmen fra den fugtige luft går tabt i rummet, og varmelegemet skal varme ny luft op hele tiden. En tørretumbler med varmepumpe gør det samme arbejde med et lukket kølekredsløb, som i et køleskab: den ene side køler den fugtige luft, så vandet fortættes, og den anden side varmer den tørre luft op igen, før den sendes tilbage i tromlen. Varmen genbruges i stedet for at blive smidt ud.</p>
<p>Det er grunden til, at forbruget falder så meget. Europa-Kommissionen opgiver et gennemsnit for tørretumblere solgt i 2020 på 1,0 kWh pr. tørring med varmepumpe mod 2,7 kWh for aftræks- og kondenstumblere med varmelegeme. Tænk angiver, med Bolius som kilde, at en kondenstumbler med varmepumpe bruger cirka 1-1,7 kWh på at tørre en bomuldsvask, mens kondens- og aftrækstumblere uden varmepumpe bruger cirka 2-3 kWh. Spændet skyldes, at tallene er målt forskelligt: Kommissionens tal er et vægtet gennemsnit af fulde og halve maskiner på eco-programmet, mens Tænks er en fuld bomuldsvask.</p>
<table>
<thead><tr><th>Type</th><th>kWh pr. tørring</th><th>Pris pr. tørring</th><th>3 tørringer om ugen, pr. år</th></tr></thead>
<tbody>
<tr><td>Varmepumpe, nyt mærke klasse A</td><td>0,7-0,8 kWh</td><td>{{kr 0,7}}-{{kr 0,8}}</td><td>{{kr 109}}-{{kr 125}}</td></tr>
<tr><td>Varmepumpe, klasse C (tidligere A+++)</td><td>1,0-1,2 kWh</td><td>{{kr 1}}-{{kr 1,2}}</td><td>{{kr 156}}-{{kr 187}}</td></tr>
<tr><td>Varmepumpe, fuld bomuldsvask</td><td>1,0-1,7 kWh</td><td>{{kr 1}}-{{kr 1,7}}</td><td>{{kr 156}}-{{kr 265}}</td></tr>
<tr><td>Kondenstumbler uden varmepumpe</td><td>2-3 kWh</td><td>{{kr 2}}-{{kr 3}}</td><td>{{kr 312}}-{{kr 468}}</td></tr>
<tr><td>Aftrækstumbler</td><td>2-3 kWh</td><td>{{kr 2}}-{{kr 3}}</td><td>{{kr 312}}-{{kr 468}}</td></tr>
</tbody>
</table>
<p>Vil du sammenligne alle typer side om side, også de gamle modeller, står de på siden om <a href="/toerretumbler/">tørretumblere</a>. Her ser vi på varmepumpemodellen alene: hvad mærket betyder, hvad den sparer, og hvordan den holdes effektiv.</p>

<h2>Det nye energimærke: fra A+++ til C</h2>
<p>Siden 1. juli 2025 har tørretumblere fået det nye EU-energimærke med skalaen A-G. Det skaber forvirring i butikkerne, fordi de bedste modeller før stod som A+++. Tænk forklarer det direkte: tørretumblere, der tidligere fik A+++, får nu typisk C. Maskinen er ikke blevet dårligere; skalaen er blevet strammere, så der er plads til de næste års forbedringer. Samtidig lever kondenstumblere uden varmepumpe ikke længere op til kravene, og aftrækstumblere er så godt som væk fra handlen.</p>
<p>Mærket viser forbruget i kWh pr. 100 tørringer på eco-programmet, vægtet mellem fuld og halv fyldning. Del tallet med 100, så har du forbruget pr. tørring. To eksempler: Blomberg BT8M54W (8 kg) står i klasse C med 96 kWh pr. 100 tørringer, altså knap 1 kWh pr. gang, og Samsung DV90DB7845GEU3 (9 kg) står i klasse A med 79 kWh pr. 100 tørringer.</p>
<p>Klassen beregnes ud fra et indeks, der sammenligner forbruget med en standardværdi for maskinens kapacitet, så en 9 kg-tumbler må bruge lidt mere end en 8 kg i samme klasse. Energimærke-tabellen længere nede viser den højeste værdi, en 8 kg-tumbler må have i hver klasse, omregnet til 156 tørringer om året (tre om ugen). Vi har regnet grænserne ud fra formlen i Kommissionens bilagstekst; de passer med de registrerede modeller, vi har tjekket.</p>

<h2>Hvad sparer du mod kondens og aftræk?</h2>
<p>Med Kommissionens gennemsnit sparer en varmepumpetumbler cirka 1,7 kWh pr. tørring i forhold til en tumbler med varmelegeme. Ved tre tørringer om ugen er det omkring 265 kWh om året, svarende til {{kr 265}} ved månedens elpris. En familie, der tørrer hver dag, sparer det dobbelte: cirka 620 kWh eller {{kr 620}} om året.</p>
<table>
<thead><tr><th>Tørringer om ugen</th><th>Varmepumpe (1,0 kWh)</th><th>Varmelegeme (2,7 kWh)</th><th>Besparelse pr. år</th></tr></thead>
<tbody>
<tr><td>2</td><td>104 kWh</td><td>281 kWh</td><td>{{kr 177}}</td></tr>
<tr><td>3</td><td>156 kWh</td><td>421 kWh</td><td>{{kr 265}}</td></tr>
<tr><td>5</td><td>260 kWh</td><td>702 kWh</td><td>{{kr 442}}</td></tr>
<tr><td>7</td><td>364 kWh</td><td>983 kWh</td><td>{{kr 619}}</td></tr>
</tbody>
</table>
<p>Om skiftet kan betale sig, afhænger af, hvad den gamle maskine fejler. Tænk fraråder at skifte en velfungerende tørretumbler ud alene for strømmens skyld, fordi produktionen af en ny maskine er den største miljøbelastning i dens levetid. Når den gamle alligevel skal udskiftes, er regnestykket enkelt: der findes stort set kun varmepumpemodeller at vælge imellem, og besparelsen i tabellen er det, du får hvert år, så længe maskinen holder. Beregningen længere nede viser, hvor meget en ny maskine må koste at købe, for at strømbesparelsen betaler den hjem på fem eller ti år.</p>

<h2>Længere programmer, lavere temperatur</h2>
<p>Varmepumpen arbejder ved en lavere lufttemperatur end et varmelegeme, og derfor tager et eco-program typisk længere tid — ofte et par timer for en fuld maskine. Det er et bytte, der går i din favør: tiden er gratis, varmen er ikke. Den lavere temperatur er samtidig mere skånsom mod tøjet.</p>
<p>Varmepumpen trækker også færre watt, mens den kører. Hvor en tumbler med varmelegeme kan trække over 2.000 W, ligger en varmepumpemodel ofte under 1.000 W. Det gør den lettere at have kørende samtidig med vaskemaskine og opvasker uden at belaste husets sikringer.</p>
<p>Står tumbleren i et koldt bryggers eller en uopvarmet garage, arbejder varmepumpen dårligere, og programmet bliver længere. Producenterne angiver et temperaturområde for opstillingsrummet i manualen; ligger dit rum under det om vinteren, så overvej at flytte maskinen indenfor.</p>

<h2>Filtrene bestemmer forbruget</h2>
<p>En varmepumpetumbler har typisk to filtre: fnugfilteret i døren og et filter foran varmeveksleren i bunden. Bliver de stoppede, kan luften ikke strømme frit, og maskinen kører længere for at nå samme tørhed. Tænk har målt, at energiforbruget stiger markant, når mikrofilteret ikke bliver renset gennem 20 tørringer. Rens fnugfilteret efter hver tørring og bundfilteret efter producentens anvisning, og skyl varmeveksleren, hvis modellen har en, der kan tages ud.</p>
<p>Vand i beholderen er også et forbrugstegn: en maskine med god kondensklasse sender det meste af vandet i beholderen i stedet for ud i rummet. Kondensklassen står på energimærket ved siden af energiklassen.</p>

<h2>Hvornår på døgnet skal tumbleren køre?</h2>
<p>En tørring er en af de lettere opgaver at flytte i døgnet. Tøjet kan ligge i maskinen, til den starter, og de fleste varmepumpetumblere har en udskudt start. Har du timeafregnet strøm, så lad den starte i de billige timer, som oversigten over dagens priser ovenfor viser — ofte om natten eller midt på dagen, når der er meget sol- og vindstrøm. Undgå perioden kl. 17-21, hvor nettariffen er højere hos de fleste netselskaber.</p>
<p>Fordi programmet er langt, giver det mening at se på et vindue på to-tre timer frem for én enkelt billig time. Kombinerer du det med en <a href="/vaskemaskine/">vaskemaskine</a>, der vasker færdigt lige før, kan begge køre i samme billige periode.</p>

<h2>Sådan får du forbruget ned</h2>
<ol>
<li><strong>Centrifugér ved højt omdrejningstal</strong> — jo mindre vand tøjet har med ind i tumbleren, jo mindre skal fordampes.</li>
<li><strong>Brug eco-programmet</strong> — det er det, energimærket er målt på, og det er lavet til at bruge mindst mulig strøm.</li>
<li><strong>Fyld maskinen, men ikke for meget</strong> — en halv maskine bruger næsten lige så lang tid, og en overfyldt maskine tørrer ujævnt.</li>
<li><strong>Vælg skabstør, ikke ekstra tør</strong> — de sidste procent fugt er de dyreste at fjerne.</li>
<li><strong>Rens begge filtre</strong> — se afsnittet ovenfor.</li>
<li><strong>Tørresnor om sommeren</strong> — den bruger ingen strøm, og ude tørrer tøjet hurtigt fra maj til september.</li>
</ol>
<p>Overvejer du en maskine, der både vasker og tørrer, så se siden om <a href="/vaskemaskine-med-toerretumbler/">vaske-tørremaskiner</a> — de bruger mere strøm pr. tørring end en separat varmepumpetumbler.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en tørretumbler med varmepumpe pr. tørring?", answer: "Typisk 0,8-1,7 kWh pr. tørring, afhængigt af energiklasse og hvor fuld maskinen er. Det koster {{kr 0,8}}-{{kr 1,7}} pr. gang ved {{pris_kwh}}." },
    { question: "Hvorfor står min nye varmepumpetumbler i klasse C, når den gamle var A+++?", answer: "Fordi energimærket for tørretumblere fik ny skala A-G den 1. juli 2025. Modeller, der før fik A+++, får nu typisk C. Det er skalaen, der er strammet, ikke maskinen, der er blevet dårligere." },
    { question: "Hvad sparer en varmepumpetumbler om året?", answer: "Cirka 1,7 kWh pr. tørring i forhold til en tumbler med varmelegeme. Ved tre tørringer om ugen er det omkring 265 kWh, svarende til {{kr 265}} om året." },
    { question: "Hvad betyder kWh pr. 100 tørringer på energimærket?", answer: "Det er forbruget for 100 tørringer på eco-programmet. Del med 100 for at få forbruget pr. gang: 96 kWh pr. 100 tørringer er knap 1 kWh eller {{kr 0,96}} pr. tørring." },
    { question: "Hvorfor tager en varmepumpetumbler længere tid?", answer: "Den tørrer ved lavere temperatur og genbruger varmen i et lukket kredsløb. Programmet bliver længere, men strømforbruget falder til omkring en tredjedel af en tumbler med varmelegeme." },
    { question: "Hvornår er det billigst at køre tørretumbleren?", answer: "Når timeprisen er lav — ofte om natten eller midt på dagen. Brug udskudt start og undgå kl. 17-21, hvor nettariffen er højere. Ved 1 kWh pr. tørring koster hver tørring {{pris_kwh}} gange forbruget." },
  ],
  relatedSlugs: ["toerretumbler", "vaskemaskine-med-toerretumbler", "vaskemaskine", "haandklaedetoerrer"],
  sources: [
    { name: "Europa-Kommissionen — Energimærket for tørretumblere", url: "https://energy-efficient-products.ec.europa.eu/product-list/tumble-dryers_en" },
    { name: "Tænk — Tørretumbler: Sådan køber du den rigtige", url: "https://taenk.dk/test-og-forbrugerliv/hvidevarer/toerretumblere/toerretumbler-saadan-koeber-du-den-rigtige" },
    { name: "Tænk — Blomberg BT8M54W (energiklasse og forbrug)", url: "https://taenk.dk/test/toerretumblere/blomberg-bt8m54w" },
    { name: "Europa-Kommissionen — bilag til forordningen om energimærkning af tørretumblere (udkast, gengivet af Energimyndigheten)", url: "https://www.energimyndigheten.se/496742/globalassets/energieffektivisering_/jag-ar-saljare-eller-tillverkare/dokument/produkter-med-krav/torktumlare-hushall/wd-annexes-el-household-tumble-dryers.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn tørretumblerens strømforbrug",
    options: [
      { label: "Varmepumpe, klasse A", kwhPerUse: 0.75 },
      { label: "Varmepumpe, klasse C (tidligere A+++)", kwhPerUse: 1.1 },
      { label: "Ældre varmepumpe (A+ til A++)", kwhPerUse: 1.5 },
      { label: "Kondenstumbler uden varmepumpe", kwhPerUse: 2.5 },
    ],
    usageLabel: "Tørringer pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 3,
    usageStep: 1,
    per: "tørring",
    perYear: 52,
  },
  publishDate: "2026-11-24",
  updated: "2026-11-22",
};

export default varmepumpeToerretumbler;
