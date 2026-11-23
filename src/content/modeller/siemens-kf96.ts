import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const siemensKf96: ModelData = {
  slug: "siemens-kf96",
  parent: "koeleskab",
  brand: "Siemens",
  name: "Siemens KF96 køle-/fryseskab",
  released: "2024-04",
  synonyms: [
    "siemens kf96",
    "siemens kf96rsbea",
    "siemens kf96nvpea",
    "siemens kf96daxea",
    "siemens kf96iapea",
    "siemens french door køleskab",
    "siemens multi door køleskab",
    "siemens køleskab 90 cm",
  ],
  title: "Siemens KF96 strømforbrug (2026) → kWh om året og pris",
  description:
    "Siemens KF96 køle-/fryseskab med franske døre: energimærkets kWh om året for KF96RSBEA, KF96NVPEA, KF96DAXEA og KF96IAPEA i iQ300, iQ500 og iQ700, og pris.",
  intro:
    "Alle fire KF96-udgaver har energiklasse E og bruger 320–333 kWh om året — iQ300, iQ500 eller iQ700 flytter kun forbruget med 13 kWh.",
  content: `<h2>Hvor meget strøm bruger Siemens KF96?</h2>
<p>Siemens KF96 er en familie af store, fritstående køle-/fryseskabe med franske døre, 183 cm høje og 90,5 cm brede. De findes i tre serier ifølge Siemens' danske datablade, og i EU's produktdatabase EPREL har hver udgave sit eget energimærke. Alle fire på siden har energiklasse E. KF96RSBEA i iQ700 med glasdøre bruger 320 kWh om året for 572 liter. KF96DAXEA og KF96IAPEA i iQ500 bruger 327 kWh for 574 liter. KF96NVPEA i iQ300 bruger 333 kWh for 605 liter.</p>
<p>320 kWh om året er omkring 0,88 kWh i døgnet, svarende til {{kr 320}} om året ved månedens elpris. Mellem den laveste og den højeste af de fire er der kun 13 kWh om året, svarende til {{kr 13}}.</p>
<table>
<thead><tr><th>Model</th><th>Serie</th><th>Køl / frys</th><th>Klasse</th><th>kWh om året</th><th>Støj</th></tr></thead>
<tbody>
<tr><td>KF96RSBEA</td><td>iQ700</td><td>401 / 171 l</td><td>E</td><td>320</td><td>39 dB</td></tr>
<tr><td>KF96DAXEA</td><td>iQ500</td><td>375 / 199 l</td><td>E</td><td>327</td><td>39 dB</td></tr>
<tr><td>KF96IAPEA</td><td>iQ500</td><td>375 / 199 l</td><td>E</td><td>327</td><td>39 dB</td></tr>
<tr><td>KF96NVPEA</td><td>iQ300</td><td>405 / 200 l</td><td>E</td><td>333</td><td>38 dB</td></tr>
</tbody>
</table>

<h2>Serien ændrer udstyret, ikke klassen</h2>
<p>Forskellen på iQ300, iQ500 og iQ700 ligger i udstyret. KF96NVPEA i iQ300 har ifølge databladet hyperFresh-skuffer og superCooling. De to iQ500-modeller har is- og vanddispenser — KF96DAXEA med fast vandtilslutning — og Total noFrost. KF96RSBEA i iQ700 har glasdøre, belyst bagvæg og et separat rum til drikkevarer. Energimærket er E for dem alle, og energieffektivitetsindekset er 97–100 i EPREL.</p>
<p>Pr. liter er de også ens: omkring 55–57 kWh om året pr. 100 liter. KF96NVPEA har mest plads af de fire og bruger kun 6 kWh mere end iQ500-modellerne for 31 liter ekstra. Har du brug for fryseplads, giver iQ300- og iQ500-modellerne omkring 200 liter frys mod 171 liter i iQ700.</p>

<p>Vælg serie efter, hvad du faktisk bruger. Is- og vanddispenseren er praktisk, men kræver på KF96DAXEA en vandtilslutning bag skabet, og filteret skal skiftes jævnligt. Har du brug for meget fryseplads, er KF96NVPEA i iQ300 det enkleste valg af de fire, med 200 liter frys og samme energiklasse som de dyrere modeller. Strømmen afgør ikke valget mellem serierne; det gør udstyret og pladsen.</p>

<h2>Store skabe koster mere — men ikke pr. liter</h2>
<p>Et skab på 570–605 liter bruger mere end et almindeligt kombiskab, fordi der er mere at holde koldt. <a href="/koeleskab/bosch-kge36/">Bosch KGE36</a> på 308 liter bruger 149 kWh om året i klasse C. Pr. liter er KF96 tæt på: 55–57 kWh pr. 100 liter mod omkring 48 for KGE36. Den store forskel ligger i klassen, ikke i formatet.</p>
<p>Blandt de store skabe på siden ligger KF96 under <a href="/koeleskab/lg-gsgv80/">LG GSGV80</a> i klasse E, som bruger 350 kWh for 635 liter, men over GSGV80's D-udgave med 280 kWh. Samsungs amerikanerkøleskab RS70F findes i klasse B med 180 kWh om året for 634 liter — 140 kWh mindre end KF96RSBEA, svarende til {{kr 140}} om året. Vil du have et stort skab med lavt forbrug, er klassen det første, du skal se på.</p>

<h2>Hvad energimærket forudsætter</h2>
<p>Siemens har oplyst klimaklasserne SN og T til EPREL, altså rum mellem 10 og 43 °C. Energimærket er målt ved 25 °C i rummet med lukkede døre og termostaten på standard. Et skab med franske døre åbnes ofte, og is- og vanddispenseren på iQ500-modellerne lader dig hente vand uden at åbne døren. Skabene er 73–74 cm dybe og kræver luft bagved og ovenover, så varmen kan slippe væk.</p>

<h2>Hvornår er det billigst?</h2>
<p>Et køle-/fryseskab kører hele døgnet og kan ikke flyttes til billige timer, så årsprisen er mærkets kWh gange din gennemsnitlige elpris. Det, du kan styre, er hvor meget kompressoren arbejder: hold dørene lukket, lad varm mad køle af først, og stil temperaturen fornuftigt. Se <a href="/koeleskab/">hvad køleskabe bruger generelt</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Sammenlign kWh-tallet: alle KF96 er klasse E, men andre store skabe findes i klasse B–D.</li>
<li>Stil køl på 4–5 °C og frys på −18 °C.</li>
<li>Brug dispenseren til vand i stedet for at åbne døren.</li>
<li>Skift vandfilteret som angivet, så dispenseren og ismaskinen virker, som de skal.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Siemens KF96RSBEA?",
      answer: "320 kWh om året i energiklasse E ifølge EPREL og Siemens' danske datablad, omkring 0,88 kWh i døgnet. Det svarer til {{kr 320}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken Siemens KF96 bruger mindst strøm?",
      answer: "Af de fire på siden KF96RSBEA i iQ700 med 320 kWh om året. KF96DAXEA og KF96IAPEA bruger 327 kWh og KF96NVPEA 333 kWh — alle i klasse E.",
    },
    {
      question: "Hvor stort er Siemens KF96NVPEA?",
      answer: "605 liter med 405 liter køl og 200 liter frys, 183 cm højt og 90,5 cm bredt ifølge Siemens' danske datablad.",
    },
    {
      question: "Bruger Siemens KF96 mere strøm end et amerikanerkøleskab?",
      answer: "Ikke nødvendigvis. LG GSGV80 i klasse E bruger 350 kWh om året, KF96 320–333 kWh. Men der findes amerikanerkøleskabe i klasse B med omkring 180 kWh.",
    },
    {
      question: "Kan Siemens KF96 stå i et koldt rum?",
      answer: "Ned til 10 °C og op til 43 °C. Det er klimaklasserne SN og T, som Siemens har oplyst til EPREL.",
    },
  ],
  sources: [
    { name: "EPREL — Siemens KF96RSBEA, EU's energimærke", url: eprel("788807") },
    { name: "EPREL — Siemens KF96DAXEA, EU's energimærke", url: eprel("1297250") },
    { name: "EPREL — Siemens KF96IAPEA, EU's energimærke", url: eprel("1297247") },
    { name: "EPREL — Siemens KF96NVPEA, EU's energimærke", url: eprel("380091") },
    { name: "Siemens — KF96RSBEA, produktdatablad (dansk)", url: sheet("KF96RSBEA") },
    { name: "Siemens — KF96DAXEA, produktdatablad (dansk)", url: sheet("KF96DAXEA") },
    { name: "Siemens — KF96IAPEA, produktdatablad (dansk)", url: sheet("KF96IAPEA") },
    { name: "Siemens — KF96NVPEA, produktdatablad (dansk)", url: sheet("KF96NVPEA") },
    { name: "EPREL — Samsung RS70F66KBF, EU's energimærke", url: eprel("2244093") },
    { name: "EPREL — LG GSGV80EPLL, EU's energimærke", url: eprel("1621201") },
  ],
  variants: [
    { name: "572 l, iQ700 (KF96RSBEA)", watts: {}, annualKwh: 320, energyClass: "E", source: 0 },
    { name: "574 l, iQ500 (KF96DAXEA)", watts: {}, annualKwh: 327, energyClass: "E", source: 1 },
    { name: "574 l, iQ500 (KF96IAPEA)", watts: {}, annualKwh: 327, energyClass: "E", source: 2 },
    { name: "605 l, iQ300 (KF96NVPEA)", watts: {}, annualKwh: 333, energyClass: "E", source: 3 },
  ],
  publishDate: "2026-12-28",
  updated: "2026-11-23",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug i kWh, som Siemens har oplyst til EU-databasen EPREL og i sine danske datablade: målt ved 25 °C i rummet med lukkede døre og termostaten på standard. Kilderne står nederst på siden.",
};

export default siemensKf96;
