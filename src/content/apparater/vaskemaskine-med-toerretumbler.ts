import type { ApplianceData } from "@/lib/types";

const vaskemaskineMedToerretumbler: ApplianceData = {
  slug: "vaskemaskine-med-toerretumbler",
  meta: {
    category: "vask",
    usage: "per-use",
    hasEuLabel: true,
    shiftable: true,
    motif: "vaskemaskine",
    synonyms: ["vaske-tørremaskine", "vasketørremaskine", "vaskemaskine med tørretumbler", "kombimaskine vask og tørring", "washer dryer", "vaskemaskine med tørrefunktion", "kombineret vaskemaskine og tørretumbler"],
  },
  name: "Vaske-tørremaskine",
  article: "en",
  title: "Vaske-tørremaskine strømforbrug (2026) → kWh og energimærke",
  description: "En vaske-tørremaskine bruger ca. 1,7-4,6 kWh på en vask med tørring. Se energimærket, kWh pr. 100 cyklusser og om to maskiner bruger mindre end én.",
  heading: "Strømforbrug for en vaske-tørremaskine: kWh, pris pr. vask og tørring og billigste tidspunkt",
  quickAnswer:
    "En vaske-tørremaskine bruger typisk 2,5-3,6 kWh på en vask med tørring, så en omgang koster {{kr 2,5}}-{{kr 3,6}} ved {{pris_kwh}}. Tre om ugen giver omkring 450 kWh om året, svarende til {{kr 450}}. En maskine med varmepumpe kan komme under 2 kWh pr. gang.",
  kwhRange: [250, 750],
  typicalKwh: 450,
  wattage: 2000,
  standbyWatts: 0.5,
  energyLabels: [
    { class: "A", kwhPerYear: 265 },
    { class: "B", kwhPerYear: 322 },
    { class: "C", kwhPerYear: 394 },
    { class: "D", kwhPerYear: 480 },
    { class: "E", kwhPerYear: 588 },
    { class: "F", kwhPerYear: 717 },
  ],
  models: [
    { brand: "AEG", model: "LWR964P16H, varmepumpe (10/6 kg, 156 vask og tørring/år)", kwh: 393, energyClass: "C" },
    { brand: "Bosch", model: "WNA144B0SN (10/6 kg, 156 vask og tørring/år)", kwh: 568, energyClass: "E" },
  ],
  seasonalProfile: [1.2, 1.15, 1.05, 0.95, 0.85, 0.8, 0.75, 0.8, 0.95, 1.05, 1.15, 1.3],
  content: `<h2>To maskiner i én — og to forbrug</h2>
<p>En vaske-tørremaskine er en vaskemaskine med indbygget tørretumbler. Den vasker tøjet og tørrer det bagefter i samme tromle, så du ikke behøver flytte vasketøjet eller have plads til to maskiner. Det er praktisk i en lejlighed eller et lille badeværelse, men det koster strøm: tørringen er den tunge del, og de fleste kombimaskiner tørrer med et varmelegeme, ikke med en varmepumpe.</p>
<p>Energimærket for vaske-tørremaskiner har siden marts 2021 haft skalaen A-G (forordning 2019/2014). Mærket viser to tal: forbruget pr. 100 vaske med tørring og forbruget pr. 100 vaske uden tørring, og to energiklasser — en for hele cyklussen og en for vasken alene. Tallet, der betyder noget for regningen, er det første, hvis du tørrer det meste af tøjet i maskinen.</p>
<table>
<thead><tr><th>Maskine og program</th><th>kWh pr. gang</th><th>Pris pr. gang</th><th>3 gange om ugen, pr. år</th></tr></thead>
<tbody>
<tr><td>Varmepumpe-kombimaskine, vask og tørring (klasse C)</td><td>2,5</td><td>{{kr 2,5}}</td><td>{{kr 393}}</td></tr>
<tr><td>Almindelig kombimaskine, vask og tørring (klasse E)</td><td>3,6</td><td>{{kr 3,6}}</td><td>{{kr 568}}</td></tr>
<tr><td>Kun vask, eco 40-60 (vaskeklasse A)</td><td>0,5</td><td>{{kr 0,5}}</td><td>{{kr 80}}</td></tr>
<tr><td>Kun vask, eco 40-60 (vaskeklasse C)</td><td>0,7</td><td>{{kr 0,7}}</td><td>{{kr 106}}</td></tr>
</tbody>
</table>
<p>Tallene er fra to konkrete maskiner. Bosch WNA144B0SN, en almindelig kombimaskine til 10 kg vask og 6 kg tørring, er registreret med 364 kWh pr. 100 vaske med tørring (klasse E) og 68 kWh pr. 100 vaske uden (klasse C). AEG LWR964P16H, der tørrer med varmepumpe, er registreret med 252 kWh pr. 100 vaske med tørring (klasse C) og 51 kWh pr. 100 vaske uden (klasse A).</p>

<h2>Energimærket forklaret</h2>
<p>Energiklassen for vask og tørring beregnes ud fra et indeks, der sammenligner maskinens forbrug med en standardværdi for dens tørrekapacitet. En maskine, der tørrer 6 kg, må bruge mere end en, der tørrer 4 kg. Energimærke-tabellen længere nede på siden viser det højeste forbrug, en maskine med 6 kg tørrekapacitet må have i hver klasse, omregnet til 156 cyklusser om året (tre om ugen). Vi har regnet grænserne ud fra formlen i forordningens bilag, og de stemmer med de to maskiner ovenfor: Bosch-maskinen ligger lige inden for grænsen for klasse E, AEG-maskinen lige inden for grænsen for klasse C.</p>
<p>Klasse A og B for hele cyklussen er sjældne, fordi tørringen med varmelegeme er svær at gøre effektiv. Det er især maskiner med varmepumpe, der kommer op i C og derover. For vasken alene ligger de fleste nye maskiner i A til C, på samme niveau som en almindelig <a href="/vaskemaskine/">vaskemaskine</a>.</p>

<h2>Bruger to maskiner mindre end én?</h2>
<p>Ja, typisk. En almindelig vaskemaskine i klasse A bruger omkring 0,5 kWh pr. vask på eco-programmet, og en tørretumbler med varmepumpe bruger omkring 1 kWh pr. tørring — se siden om <a href="/varmepumpe-toerretumbler/">varmepumpetørretumblere</a>. Tilsammen er det omkring 1,5 kWh pr. vask med tørring. En kombimaskine bruger typisk 2,5-3,6 kWh på det samme. Ved tre vaske med tørring om ugen er forskellen mellem 150 og 330 kWh om året, svarende til {{kr 150}}-{{kr 330}}.</p>
<table>
<thead><tr><th>Løsning</th><th>kWh pr. vask og tørring</th><th>kWh om året (156 gange)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Vaskemaskine A + varmepumpetumbler</td><td>ca. 1,5</td><td>ca. 234</td><td>{{kr 234}}</td></tr>
<tr><td>Vaske-tørremaskine med varmepumpe (C)</td><td>ca. 2,5</td><td>ca. 393</td><td>{{kr 393}}</td></tr>
<tr><td>Vaske-tørremaskine med varmelegeme (E)</td><td>ca. 3,6</td><td>ca. 568</td><td>{{kr 568}}</td></tr>
</tbody>
</table>
<p>To maskiner kræver til gengæld plads, og de koster mere at købe. Er pladsen der ikke, er kombimaskinen stadig en god løsning — men så kan det betale sig at vælge en model med varmepumpe og at tørre mindre i den.</p>

<h2>Tørrekapaciteten er mindre end vaskekapaciteten</h2>
<p>En vaske-tørremaskine, der er mærket 10/6 kg, kan vaske 10 kg, men kun tørre 6 kg ad gangen. Fylder du tromlen helt op til vask, skal du tage noget tøj ud, før den tørrer, ellers tørrer det ujævnt og tager længere tid. Den hele cyklus tager også lang tid: Bosch oplyser 7 timer og 40 minutter for en fuld vask med tørring på det program, energimærket er målt på. Det er ikke et problem, hvis maskinen kører om natten, men det er værd at vide, hvis du regner med at have rent tøj om en time.</p>
<p>Fordi tørringen bruger mest strøm, er det her, du sparer. Tør kun det, der skal tørres i maskinen — håndklæder og sengetøj, der ellers bliver stive — og hæng resten op. En vask uden tørring koster kun en brøkdel af en vask med tørring.</p>

<h2>Hvornår skal maskinen køre?</h2>
<p>En vaske-tørremaskine er et af de bedste apparater at flytte til de billige timer. Den kører længe, den bruger meget strøm pr. gang, og tøjet er færdigt, når du står op. De fleste maskiner har en udskudt start eller en »færdig kl.«-funktion. Har du timeafregnet strøm, så læg den i nattetimerne eller midt på dagen, når timeprisen ofte er lav, og undgå perioden kl. 17-21, hvor nettariffen er højere. Oversigten over dagens timepriser længere oppe på siden viser, hvornår der er et billigt vindue på flere timer.</p>
<p>Fordi en hel cyklus kan tage seks-otte timer, giver det mening at se på et langt vindue frem for den enkelte billigste time. Starter maskinen kl. 22, er den typisk færdig tidligt om morgenen, og det meste af forbruget ligger i nattens timer.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Tørremetoden</strong> — varmepumpe eller varmelegeme. Det er den største forskel mellem to maskiner, og den kan ses direkte i energiklassen for hele cyklussen.</li>
<li><strong>Temperaturen på vasken</strong> — en vask ved 60 grader bruger mere end eco 40-60 og ved 30 grader, fordi vandet skal varmes op.</li>
<li><strong>Restfugten efter centrifugering</strong> — mærket viser en centrifugeringsklasse. En maskine i klasse A efterlader mindre vand i tøjet end en i klasse C.</li>
<li><strong>Tørhedsgraden</strong> — strygetør bruger mindre end skabstør, og skabstør mindre end ekstra tør.</li>
<li><strong>Mængden</strong> — en halvt fyldt maskine bruger ikke halvt så meget strøm, så vent med at vaske, til du har en fuld vask.</li>
<li><strong>Kondenseringen</strong> — mange kombimaskiner køler den fugtige luft med koldt vand under tørringen. Det bruger ikke ekstra strøm, men vand, og det er en af grundene til, at tørringen tager lang tid.</li>
</ul>
<p>Det er altså især valget af maskine og valget af program, der flytter forbruget. Når maskinen først står der, er programmet og mængden det, du selv styrer.</p>

<h2>Sådan sparer du strøm</h2>
<ol>
<li><strong>Brug eco-programmet</strong> — både til vask og til vask med tørring. Det er det, energimærket er målt på.</li>
<li><strong>Centrifugér ved højt omdrejningstal</strong> før tørring — mindre vand i tøjet betyder kortere tørring.</li>
<li><strong>Tør ikke mere end tørrekapaciteten</strong>, og tag noget ud efter vasken, hvis tromlen var helt fuld.</li>
<li><strong>Vælg skabstør</strong> frem for ekstra tør.</li>
<li><strong>Hæng op, når du kan</strong> — en vask uden tørring bruger omkring en femtedel af strømmen.</li>
<li><strong>Rens fnugfilteret</strong> og hold maskinen ren efter manualen.</li>
<li><strong>Læg den i billige timer</strong> med udskudt start.</li>
</ol>
<p>Skal du alligevel købe ny maskine og har du pladsen, så sammenlign prisen for to maskiner med strømbesparelsen over maskinernes levetid. Har du ikke pladsen, så kig efter en kombimaskine med varmepumpe og en god klasse for hele cyklussen.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en vaske-tørremaskine?", answer: "Typisk 2,5-3,6 kWh på en vask med tørring, ifølge energimærkerne på to aktuelle maskiner. Det koster {{kr 2,5}}-{{kr 3,6}} pr. gang ved {{pris_kwh}}." },
    { question: "Hvad koster en vaske-tørremaskine i strøm om året?", answer: "Med tre vaske med tørring om ugen bruger en almindelig kombimaskine omkring 450-570 kWh om året, svarende til {{kr 450-570}}. En model med varmepumpe ligger omkring 390 kWh eller {{kr 390}}." },
    { question: "Bruger en vaske-tørremaskine mere end en vaskemaskine og en tørretumbler?", answer: "Typisk ja. En vaskemaskine i klasse A og en varmepumpetumbler bruger tilsammen omkring 1,5 kWh pr. vask med tørring mod 2,5-3,6 kWh for en kombimaskine. Ved tre gange om ugen er forskellen {{kr 150-330}} om året." },
    { question: "Hvad betyder de to tal på energimærket?", answer: "Det ene tal er kWh pr. 100 vaske med tørring, det andet kWh pr. 100 vaske uden tørring. Del med 100 for at få forbruget pr. gang: 364 kWh pr. 100 er 3,64 kWh eller {{kr 3,64}} pr. vask med tørring." },
    { question: "Hvorfor kan maskinen vaske mere, end den kan tørre?", answer: "Tørring kræver plads i tromlen, så luften kan komme rundt. En maskine mærket 10/6 kg vasker 10 kg, men tørrer kun 6 kg ad gangen." },
    { question: "Hvornår er det billigst at køre vaske-tørremaskinen?", answer: "Når timeprisen er lav, ofte om natten. En hel cyklus kan tage seks-otte timer, så start den om aftenen efter kl. 21 med udskudt start. Ved 3 kWh pr. gang koster en omgang {{kr 3}} ved månedens elpris." },
  ],
  relatedSlugs: ["vaskemaskine", "varmepumpe-toerretumbler", "toerretumbler", "opvaskemaskine", "haandklaedetoerrer"],
  sources: [
    { name: "Forordning (EU) 2019/2014, bilag II — energiklasser for vaskemaskiner og vaske-tørremaskiner", url: "https://www.legislation.gov.uk/eur/2019/2014/annex/II" },
    { name: "Forordning (EU) 2019/2014, bilag IV — beregning af energieffektivitetsindeks", url: "https://www.legislation.gov.uk/eur/2019/2014/annex/IV" },
    { name: "Bosch — produktdatablad, WNA144B0SN", url: "https://media3.bosch-home.com/Documents/specsheet/da-DK/WNA144B0SN.pdf" },
    { name: "Tænk — AEG LWR964P16H (energiklasse og forbrug)", url: "https://taenk.dk/test/vaske-toerremaskiner/aeg-lwr964p16h" },
  ],
  calculatorConfig: {
    title: "Beregn vaske-tørremaskinens strømforbrug",
    options: [
      { label: "Varmepumpe-kombimaskine, klasse A (ca. 1,7 kWh)", kwhPerUse: 1.7 },
      { label: "Varmepumpe-kombimaskine, klasse C (ca. 2,5 kWh)", kwhPerUse: 2.5 },
      { label: "Kombimaskine, klasse D (ca. 3,1 kWh)", kwhPerUse: 3.1 },
      { label: "Kombimaskine, klasse E (ca. 3,6 kWh)", kwhPerUse: 3.6 },
      { label: "Ældre kombimaskine (ca. 4,6 kWh)", kwhPerUse: 4.6 },
    ],
    usageLabel: "Vaske med tørring pr. uge",
    usageUnit: "pr. uge",
    usageMin: 1,
    usageMax: 14,
    usageDefault: 3,
    usageStep: 1,
    per: "vask og tørring",
    perYear: 52,
  },
  publishDate: "2026-11-29",
  updated: "2026-11-22",
};

export default vaskemaskineMedToerretumbler;
