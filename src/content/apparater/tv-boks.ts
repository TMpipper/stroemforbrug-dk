import type { ApplianceData } from "@/lib/types";

const tvBoks: ApplianceData = {
  slug: "tv-boks",
  meta: {
    category: "underholdning",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "tv",
    synonyms: ["tv-boks", "tv boks", "settopboks", "apple tv", "google tv streamer", "chromecast", "streamingboks", "dekoder", "tv-boks standby"],
  },
  name: "Tv-boks",
  article: "en",
  title: "Tv-boks strømforbrug (2026) → streaming, kabel og standby",
  description: "En Apple TV bruger 2-3 watt, mens en ældre operatørboks kan trække 15 watt døgnet rundt. Se kWh om året for streaming-, kabel- og IP-bokse og standby.",
  heading: "Strømforbrug for en tv-boks: kWh og pris",
  quickAnswer:
    "En moderne streamingboks som Apple TV 4K bruger 2,3 watt under streaming og 0,5 watt i dvale ved 230 volt, ifølge Apple. Det giver under 10 kWh om året. Operatørernes tv-bokse bruger mere: i EU's opgørelse lå IP-bokse i gennemsnit på 30,7 kWh om året og kabelbokse på 70,4 kWh. En typisk IP-boks koster dermed omkring {{kr 31}} om året, en ældre kabelboks over {{kr 70}}.",
  kwhRange: [5, 180],
  typicalKwh: 31,
  wattage: 11,
  standbyWatts: 3.1,
  energyLabels: [],
  models: [],
  seasonalProfile: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  content: `<h2>Hvor meget strøm bruger en tv-boks?</h2>
<p>Tv-bokse findes i to slags. Streamingbokse som Apple TV og Google TV Streamer er små computere, der henter film og serier fra internettet. Operatørernes bokse — fra kabel-, fiber- og parabolselskaber — modtager tv-kanalerne og kan ofte optage. Begge slags står tilsluttet hele døgnet, så det er både forbruget, mens du ser tv, og forbruget, mens boksen venter, der tæller.</p>
<table>
<thead><tr><th>Boks og tilstand</th><th>Watt</th><th>Pris i døgnet, hvis den kørte hele tiden</th></tr></thead>
<tbody>
<tr><td>Apple TV 4K (3. gen.), streaming 4K</td><td>2,3 W</td><td>{{oere 0,055}}</td></tr>
<tr><td>Apple TV 4K (3. gen.), dvale med netværk</td><td>0,5 W</td><td>{{oere 0,012}}</td></tr>
<tr><td>Google TV Streamer, aktiv</td><td>1,82 W</td><td>{{oere 0,044}}</td></tr>
<tr><td>Google TV Streamer, dvale</td><td>0,85 W</td><td>{{oere 0,02}}</td></tr>
<tr><td>Operatørboks, tændt (gennemsnit)</td><td>11 W</td><td>{{oere 0,264}}</td></tr>
<tr><td>Operatørboks, standby (gennemsnit)</td><td>4,8 W</td><td>{{oere 0,115}}</td></tr>
</tbody>
</table>
<p>Apples og Googles tal er målt ved 230 volt og står i producenternes miljørapporter. Tallene for operatørbokse er gennemsnit fra den uafhængige inspektørrapport om EU's frivillige aftale for avancerede tv-bokse, der dækkede de bokse, operatørerne udleverede i 2018-19.</p>

<h2>Streamingboks eller operatørens boks</h2>
<p>Forskellen er stor. Google oplyser selv et årsforbrug på cirka 9 kWh for sin TV Streamer ved godt fire timers streaming om dagen. Apple TV ligger i samme område: med fire timers streaming og dvale resten af døgnet regner vi os frem til cirka 7 kWh om året. Operatørernes bokse bruger i gennemsnit flere gange så meget, fordi de har tuner, harddisk til optagelser og en standby, der holder dem klar til at modtage opdateringer og programguide.</p>
<table>
<thead><tr><th>Boks</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Apple TV 4K, 4 timer streaming om dagen (vores skøn ud fra Apples tal)</td><td>7 kWh</td><td>{{kr 7}}</td></tr>
<tr><td>Google TV Streamer (Googles skøn)</td><td>9 kWh</td><td>{{kr 9}}</td></tr>
<tr><td>Antenne-tv-boks, gennemsnit</td><td>20,5 kWh</td><td>{{kr 20,5}}</td></tr>
<tr><td>IP-tv-boks (fiber og bredbånd), gennemsnit</td><td>30,7 kWh</td><td>{{kr 30,7}}</td></tr>
<tr><td>Kabel-tv-boks, gennemsnit</td><td>70,4 kWh</td><td>{{kr 70,4}}</td></tr>
<tr><td>Parabolboks, gennemsnit</td><td>80,2 kWh</td><td>{{kr 80,2}}</td></tr>
</tbody>
</table>
<p>Gennemsnittene for operatørbokse dækker store forskelle. I rapportens oversigt over enkelte modeller spænder årsforbruget fra cirka 6 til over 180 kWh. EU-gennemsnittet for alle bokse faldt fra 85,8 kWh i 2012-13 til 51,6 kWh i 2018-19 — et fald på 40 %. En boks, du har haft i mange år, ligger derfor ofte i den dyre ende.</p>

<p>Mange hjem har både en operatørboks og en streamingboks eller et smart-tv med apps. Bruger du næsten kun streamingtjenester, kan operatørboksen være overflødig, men den står stadig tilsluttet og bruger strøm døgnet rundt. Spørg dit tv-selskab, om du kan se kanalerne i en app på tv'et eller streamingboksen i stedet. Så kan den gamle boks afleveres, og forbruget falder til det, den lille boks bruger.</p>

<h2>Standby og automatisk slukning</h2>
<p>Den frivillige EU-aftale målte bokse efter et fast døgn: 4,5 timer tændt, 15 timer på standby og 4,5 timer i automatisk dvale, efter at boksen har stået tændt uden at blive brugt. Aftalen krævede, at boksen som standard gik i dvale efter højst fire timer uden betjening. Bokse, der levede op til aftalen, brugte i gennemsnit 11 watt tændt, 4,8 watt på standby og 3,1 watt i automatisk dvale. Bokse, der ikke gjorde, brugte 16, 15,7 og 12,5 watt.</p>
<p>En gammel boks med næsten 16 watt på standby bruger knap 140 kWh om året alene på at vente — svarende til {{kr 140}}. Aftalen blev afsluttet i 2020, og netværksstandby for nye bokse er i dag reguleret af EU's almindelige regler for standby. Apple TV går som standard i dvale efter 15 minutter uden aktivitet.</p>

<h2>Tv-boksen i tv-hjørnet</h2>
<p>Tv-boksen er sjældent det eneste, der står og venter. <a href="/tv/">Tv'et</a> selv har standby, en <a href="/soundbar/">soundbar</a> med wifi kan bruge 3-6 watt i hvile, og en konsol eller en <a href="/projektor/">projektor</a> er måske også tilsluttet. Har dit tv indbyggede apps, kan du overveje, om du har brug for en separat streamingboks — og omvendt kan en lille streamingboks erstatte en ældre operatørboks, hvis dit selskab tilbyder tv via app.</p>

<h2>Hvad bestemmer, hvor meget strøm din tv-boks bruger?</h2>
<ul>
<li><strong>Typen</strong> — streamingbokse bruger få watt, kabel- og parabolbokse mest.</li>
<li><strong>Standby-tilstanden</strong> — hurtig opstart og baggrundsopdateringer holder boksen vågen.</li>
<li><strong>Optagelse</strong> — en indbygget harddisk til optagelser trækker ekstra.</li>
<li><strong>Alderen</strong> — ældre bokse bruger typisk mere end nye, især på standby.</li>
<li><strong>Automatisk slukning</strong> — en boks, der står tændt hele natten, bruger lige så meget som under brug.</li>
</ul>

<h2>Sådan sparer du strøm på din tv-boks</h2>
<ol>
<li><strong>Slå automatisk dvale til</strong>, hvis boksen har den, og vælg den korteste ventetid.</li>
<li><strong>Vælg energisparende standby</strong> i stedet for hurtig opstart.</li>
<li><strong>Bed om en ny boks</strong>, hvis din er mange år gammel — nye bokse bruger markant mindre.</li>
<li><strong>Brug tv'ets egne apps</strong>, hvis du ikke har brug for boksens funktioner.</li>
<li><strong>Sluk hele tv-hjørnet</strong> på en stikdåse med afbryder, hvis boksen kan tåle det — tjek, at optagelser og opdateringer ikke går tabt.</li>
</ol>
<p>En tv-boks er sjældent den største post i hjemmet, men den er en af dem, der kører hele året uden at nogen tænker over den. Læs mere om de små døgnforbrug i guiden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en Apple TV?", answer: "Apple TV 4K (3. gen.) bruger 2,3 W under 4K-streaming og 0,5 W i dvale ved 230 V, ifølge Apple. Med fire timers streaming om dagen er det cirka 7 kWh om året, svarende til {{kr 7}}." },
    { question: "Hvor meget strøm bruger Google TV Streamer?", answer: "Google oplyser 1,82 W aktiv og 0,85 W i dvale ved 230 V og et årsforbrug på cirka 9 kWh, svarende til {{kr 9}}." },
    { question: "Hvor meget strøm bruger en tv-boks fra operatøren?", answer: "I EU's opgørelse brugte IP-bokse i gennemsnit 30,7 kWh om året og kabelbokse 70,4 kWh. Det svarer til {{kr 30,7}} og {{kr 70,4}}." },
    { question: "Hvad koster en tv-boks på standby?", answer: "Nyere operatørbokse bruger omkring 3-5 W på standby, ældre op til 16 W. 16 W hele året er knap 140 kWh, svarende til {{kr 140}}." },
    { question: "Kan jeg slukke tv-boksen på stikkontakten?", answer: "Ofte ja, men nogle bokse skal hente programguide og opdateringer og starter langsomt bagefter. En boks med 4,8 W standby sparer cirka 35 kWh om året ved at være slukket 20 timer i døgnet, svarende til {{kr 35}}." },
  ],
  relatedSlugs: ["tv", "soundbar", "projektor", "router", "nintendo-switch", "xbox"],
  sources: [
    { name: "Apple — Apple TV 4K (3. gen.) Product Environmental Report (strømforbrug ved 230 V)", url: "https://www.apple.com/environment/pdf/products/appletv/Apple_TV_4K_PER_Oct2022.pdf" },
    { name: "Google — Google TV Streamer (4K) Product Environmental Report", url: "https://www.gstatic.com/gumdrop/sustainability/google-tv-streamer-4k-product-environmental-report.pdf" },
    { name: "Energimyndigheten — Independent inspectors' report, EU Voluntary Agreement on Complex Set Top Boxes 2018-19", url: "https://www.energimyndigheten.se/globalassets/energieffektivisering_/jag-ar-saljare-eller-tillverkare/produktgrupper/18-nov-2020-rapport-oberoende-inspektorer-sjalvreglering-avancerade-digitalboxar-2018-19.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn din tv-boks' strømforbrug",
    options: [
      { label: "Apple TV 4K, 4 t streaming og dvale resten (vores skøn)", kwhPerUse: 0.019 },
      { label: "Google TV Streamer (ca. 9 kWh/år)", kwhPerUse: 0.025 },
      { label: "IP-tv-boks, gennemsnit (30,7 kWh/år)", kwhPerUse: 0.084 },
      { label: "Kabel-tv-boks, gennemsnit (70,4 kWh/år)", kwhPerUse: 0.193 },
      { label: "Parabolboks, gennemsnit (80,2 kWh/år)", kwhPerUse: 0.22 },
    ],
    usageLabel: "Dage tilsluttet pr. år",
    usageUnit: "dage/år",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-12",
  updated: "2026-11-22",
};

export default tvBoks;
