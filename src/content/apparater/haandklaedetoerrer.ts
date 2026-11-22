import type { ApplianceData } from "@/lib/types";

const haandklaedetoerrer: ApplianceData = {
  slug: "haandklaedetoerrer",
  meta: {
    category: "varme",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    motif: "radiator",
    synonyms: ["håndklædetørrer", "haandklaedetoerrer", "el-håndklædetørrer", "elektrisk håndklædetørrer", "håndklæderadiator", "towel warmer", "pax håndklædetørrer"],
  },
  name: "Håndklædetørrer",
  article: "en",
  title: "Håndklædetørrer strømforbrug (2026) → Watt, timer og kWh/år",
  description: "En el-håndklædetørrer bruger 40-120 watt. Se hvad det giver om året, når den står tændt døgnet rundt, og hvor meget en timer sparer på badeværelset.",
  heading: "Strømforbrug for en håndklædetørrer: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En elektrisk håndklædetørrer bruger typisk 40-120 watt, og en time koster {{oere 0,04}}-{{oere 0,12}} ved {{pris_kwh}}. Står en 120 W-model tændt hele året, bruger den cirka 1.050 kWh, svarende til {{kr 1050}}. Med en timer, der kører 11 timer om dagen, bruger en 60 W-model omkring 250 kWh eller {{kr 250}}.",
  kwhRange: [50, 1050],
  typicalKwh: 250,
  wattage: 60,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.3, 1.25, 1.15, 1.0, 0.85, 0.7, 0.65, 0.7, 0.85, 1.0, 1.2, 1.35],
  content: `<h2>Et lille apparat, der aldrig slukker</h2>
<p>En elektrisk håndklædetørrer trækker ikke mange watt. De modeller, PAX sælger i Norden, er mærket med 40-80 W, og de ældre og større modeller ligger højere. Det svarer til en gammeldags glødepære. Alligevel står håndklædetørreren på Bolius' liste over de store strømslugere i hjemmet, og grunden er enkel: mange står tændt døgnet rundt, hele året.</p>
<p>Bolius regner med en håndklædetørrer på 120 W, der aldrig slukkes. Det giver 120 W gange 8.760 timer, eller cirka 1.050 kWh om året. Til sammenligning bruger et nyt køleskab typisk et par hundrede kWh om året. Det er altså ikke effekten, der gør håndklædetørreren dyr, men timerne.</p>
<table>
<thead><tr><th>Effekt</th><th>Pris i timen</th><th>kWh om året, tændt døgnet rundt</th><th>Pris om året, døgnet rundt</th></tr></thead>
<tbody>
<tr><td>40 W</td><td>{{oere 0,04}}</td><td>350 kWh</td><td>{{kr 350}}</td></tr>
<tr><td>60 W</td><td>{{oere 0,06}}</td><td>526 kWh</td><td>{{kr 526}}</td></tr>
<tr><td>80 W</td><td>{{oere 0,08}}</td><td>701 kWh</td><td>{{kr 701}}</td></tr>
<tr><td>120 W</td><td>{{oere 0,12}}</td><td>1.051 kWh</td><td>{{kr 1051}}</td></tr>
</tbody>
</table>
<p>Tabellen viser det maksimale forbrug, hvor varmelegemet er tændt hele tiden. Det er normalt for en simpel håndklædetørrer uden termostat: den er enten tændt eller slukket. Modeller med termostat eller effektregulering kan bruge mindre, men de fleste billige modeller har ingen af delene.</p>

<h2>Timeren er den store besparelse</h2>
<p>Den vigtigste ting, du kan gøre, er at lade håndklædetørreren køre på tid. Bolius anbefaler netop at vælge en model med timer, så den slukker, når håndklæderne er tørre. Flere af PAX' modeller har en indbygget timer, der kan sættes til at køre et bestemt antal timer eller gentage sig hver dag, og til de modeller uden timer kan en ur-kontakt eller en smart-stikdåse gøre det samme — hvis tørreren er tilsluttet med stik. En fastmonteret tørrer skal en elinstallatør koble om.</p>
<table>
<thead><tr><th>Brug (60 W)</th><th>Timer om dagen</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Efter morgenbad og aftenbad</td><td>4</td><td>88 kWh</td><td>{{kr 88}}</td></tr>
<tr><td>Morgen til eftermiddag</td><td>8</td><td>175 kWh</td><td>{{kr 175}}</td></tr>
<tr><td>Det meste af døgnet</td><td>16</td><td>350 kWh</td><td>{{kr 350}}</td></tr>
<tr><td>Altid tændt</td><td>24</td><td>526 kWh</td><td>{{kr 526}}</td></tr>
</tbody>
</table>
<p>Fire timer om dagen er nok til, at et fugtigt håndklæde tørrer efter morgenbadet. Går du fra døgndrift til fire timer om dagen med en 60 W-tørrer, sparer du cirka 440 kWh om året, svarende til {{kr 440}}. Med en 120 W-tørrer er besparelsen det dobbelte.</p>

<h2>Håndklædetørrer på el eller vand</h2>
<p>Ikke alle håndklædetørrere bruger strøm. En vandbåren håndklæderadiator er koblet på husets centralvarme eller fjernvarme og bliver varm sammen med de andre radiatorer, og Bolius skriver, at en håndklædetørrer, der opvarmes med vand, bruger mindre energi end en eldrevet. Ulempen er, at den kun er varm, når varmeanlægget kører, så om sommeren er den kold — medmindre der er monteret en el-patron, der overtager. En el-patron er et varmelegeme i radiatorens vand, og den bruger strøm på samme måde som en ren el-håndklædetørrer.</p>
<p>Har du <a href="/gulvvarme/">gulvvarme</a> på badeværelset, tørrer håndklæderne ofte fint på en almindelig stang over det varme gulv. Så er håndklædetørreren et ekstra forbrug, ikke en nødvendighed. Bruger du den for at holde badeværelset varmt, så tænk på den som en lille udgave af en <a href="/olieradiator/">olieradiator</a>: den omsætter al strømmen til varme, og det er ren elvarme, som er en dyr måde at varme et rum på.</p>

<h2>Hvad betyder sommeren?</h2>
<p>Mange glemmer at slukke håndklædetørreren, når det bliver varmt. Om sommeren tørrer håndklæderne ofte af sig selv på en stang, og en håndklædetørrer, der står tændt fra maj til september, bruger med 60 W cirka 220 kWh på de fem måneder, svarende til {{kr 220}}. Det er derfor, vores sæsonprofil viser et lavere forbrug om sommeren: vi regner med, at en del slukker den. Gør du ikke det, er forbruget det samme hele året.</p>
<p>Omvendt hjælper håndklædetørreren om vinteren med at holde badeværelset tørt, så der ikke kommer skimmel og dug på spejlet. Er det problemet, så tjek først, om badeværelsets udsugning virker. En tør luft på badeværelset kommer fra ventilationen, ikke fra varmen.</p>

<h2>Hvorfor er der ingen energimærkning?</h2>
<p>Håndklædetørrere har intet EU-energimærke, og typeskiltet siger kun, hvor mange watt varmelegemet har. To modeller med samme watt bruger lige meget strøm pr. time — forskellen ligger i, hvor mange timer de kører, og om de har termostat eller timer. Når du sammenligner modeller i butikken, så kig derfor på watt, og om der er indbygget timer, frem for på design og størrelse alene. En stor tørrer med mange rør er ikke nødvendigvis den, der bruger mest; det afhænger af varmelegemet.</p>
<p>PAX skriver i sin monteringsvejledning, at rørene kan nå omkring 60 °C. Det er varmt nok til at tørre et håndklæde på et par timer, og det er også grunden til, at producenten anbefaler, at det nederste rør sidder mindst 60 cm over gulvet, af hensyn til små børn.</p>

<h2>Bruger håndklædetørreren strøm i de dyre timer?</h2>
<p>En håndklædetørrer, der står tændt døgnet rundt, bruger strøm i alle døgnets timer — også i de dyre timer om aftenen, hvor nettariffen er højere. Forbruget i en time er småt, men summen over et år er ikke. Har du en timer, kan du lade den køre om morgenen efter badet og nogle timer om natten, hvor timeprisen ofte er lavere, og slukke i spidsperioden kl. 17-21. Prisforskellen gør ikke den store forskel pr. dag, men det, der virkelig tæller, er antallet af timer, den er tændt.</p>

<h2>Sådan regner du din egen håndklædetørrer ud</h2>
<p>Find watt-tallet på typeskiltet, som typisk sidder på tilslutningsboksen i den ene side. Gang watt med de timer, tørreren er tændt i døgnet, og del med 1.000 — så har du kWh i døgnet. Gang med 365 for et helt år. En tørrer på 50 W, der kører 10 timer om dagen, bruger 0,5 kWh i døgnet og cirka 183 kWh om året, svarende til {{kr 183}}. Står der ingen watt på skiltet, eller sidder tørreren med en el-patron i en vandbåren radiator, er en stikmåler eller en aflæsning af elmåleren før og efter et døgn den sikre vej. Beregneren længere oppe på siden gør det samme regnestykke for dig, hvis du vælger den effekt, der passer bedst til din model.</p>

<h2>Gode råd til en lavere regning</h2>
<ul>
<li><strong>Sæt en timer på</strong> — fire timer om dagen tørrer et håndklæde, døgndrift gør ikke.</li>
<li><strong>Sluk om sommeren</strong> — fra maj til september tørrer håndklæderne fint uden.</li>
<li><strong>Hæng håndklædet ud</strong> — et udfoldet håndklæde tørrer hurtigere end et sammenfoldet, så tørreren kan slukke tidligere.</li>
<li><strong>Vælg en model med timer eller termostat</strong>, hvis du skal købe ny.</li>
<li><strong>Brug gulvvarmen</strong>, hvis du har den — en stang over et varmt gulv gør ofte samme arbejde.</li>
<li><strong>Mål den</strong> — en stikmåler på en tørrer med stik viser, hvor mange kWh den bruger på en uge.</li>
</ul>
<p>Overvej også, hvad håndklædetørreren skal bruges til. Skal den bare tørre håndklæder, er fire timer om dagen nok. Skal den varme badeværelset, så sammenlign forbruget med de andre måder at varme rummet på, for eksempel en varmepumpe eller fjernvarme, hvis huset har det.</p>`,
  faqs: [
    { question: "Hvor meget strøm bruger en håndklædetørrer?", answer: "En el-håndklædetørrer bruger typisk 40-120 watt. Står en 120 W-model tændt hele året, bliver det cirka 1.050 kWh, svarende til {{kr 1050}} ved {{pris_kwh}}." },
    { question: "Hvad koster det at have håndklædetørreren tændt hele døgnet?", answer: "En 60 W-tørrer bruger 1,44 kWh i døgnet, svarende til {{kr 1,44}}. Over et år er det cirka 526 kWh eller {{kr 526}}." },
    { question: "Hvor meget sparer jeg med en timer på håndklædetørreren?", answer: "Går du fra døgndrift til fire timer om dagen med en 60 W-model, sparer du omkring 440 kWh om året, svarende til {{kr 440}}." },
    { question: "Er en vandbåren håndklædetørrer billigere end en elektrisk?", answer: "Bolius skriver, at en håndklædetørrer, der opvarmes med vand, bruger mindre energi end en eldrevet. Den er dog kun varm, når centralvarmen kører, medmindre den har en el-patron." },
    { question: "Har håndklædetørrere et energimærke?", answer: "Nej. Der er intet EU-energimærke for håndklædetørrere. Sammenlign på watt og på, om der er timer eller termostat." },
    { question: "Skal håndklædetørreren være slukket om sommeren?", answer: "Det er en af de nemmeste besparelser. En 60 W-tørrer, der står tændt fra maj til september, bruger cirka 220 kWh, svarende til {{kr 220}}." },
  ],
  relatedSlugs: ["gulvvarme", "olieradiator", "varmepumpe-toerretumbler", "vaskemaskine-med-toerretumbler", "spabad", "cirkulationspumpe"],
  sources: [
    { name: "Bolius — Her er 10 store strømslugere i dit hjem", url: "https://www.bolius.dk/her-er-10-store-stroemslugere-i-dit-hjem-672" },
    { name: "Bolius — Find strømslugerne i dit hjem", url: "https://www.bolius.dk/find-stroemslugerne-i-dit-hjem-672" },
    { name: "PAX — monterings- og brugsvejledning for håndklædetørrere (Salsa, Samba, Tango, Foxtrot)", url: "https://www.kfast.se/wp-content/uploads/2025/12/Handdukstork-Hus-3.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn håndklædetørrerens strømforbrug",
    options: [
      { label: "Lille model (40 W)", kwhPerUse: 0.04 },
      { label: "Almindelig model (60 W)", kwhPerUse: 0.06 },
      { label: "Stor model (80 W)", kwhPerUse: 0.08 },
      { label: "Ældre eller meget stor model (120 W)", kwhPerUse: 0.12 },
    ],
    usageLabel: "Timer tændt pr. dag",
    usageUnit: "timer/dag",
    usageMin: 1,
    usageMax: 24,
    usageDefault: 12,
    usageStep: 1,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-25",
  updated: "2026-11-22",
};

export default haandklaedetoerrer;
