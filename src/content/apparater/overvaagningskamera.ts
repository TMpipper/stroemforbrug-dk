import type { ApplianceData } from "@/lib/types";

const overvaagningskamera: ApplianceData = {
  slug: "overvaagningskamera",
  meta: {
    category: "hobby",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "skjold",
    synonyms: ["overvågningskamera", "overvaagningskamera", "ip-kamera", "wifi-kamera", "poe-kamera", "nvr", "videoovervågning", "nest cam", "reolink", "udendørs kamera"],
  },
  name: "Overvågningskamera",
  article: "et",
  title: "Overvågningskamera strømforbrug (2026) → wifi, PoE og NVR",
  description: "Et wifi-kamera bruger 2-5 watt og kører hele døgnet, så det bliver 20-40 kWh om året pr. kamera. Se tal for Nest og Reolink, PoE-kameraer og optagere (NVR).",
  heading: "Strømforbrug for et overvågningskamera: kWh og pris",
  quickAnswer:
    "Et lille wifi-kamera som Google Nest Cam bruger 2,2-2,5 watt ved 230 volt, og Google opgiver selv et årsforbrug på 20-21 kWh. Det svarer til {{kr 21}} om året pr. kamera. Større udendørs kameraer med infrarødt lys bruger op til 10-12 watt, og et anlæg med optager (NVR) og fire PoE-kameraer kan nå flere hundrede kWh om året.",
  kwhRange: [5, 450],
  typicalKwh: 21,
  wattage: 2.5,
  standbyWatts: 0.5,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.05, 1.05, 1.0, 0.95, 0.95, 0.95, 0.95, 0.95, 1.0, 1.0, 1.05, 1.05],
  content: `<h2>Hvor mange watt bruger et overvågningskamera?</h2>
<p>Et overvågningskamera står tændt hele døgnet, så selv et lille forbrug bliver til en mærkbar post over et år. Hvor meget det bruger, afhænger mest af, om det er et lille indendørskamera på wifi, et udendørs kamera med infrarødt nattesyn, eller et kamera med indbygget projektør. Google har målt sine egne kameraer ved 230 volt, og Reolink oplyser, hvad deres kameraer højst bruger ved fuld belastning.</p>
<table>
<thead><tr><th>Kamera og tilstand</th><th>Watt</th><th>Pris i døgnet</th></tr></thead>
<tbody>
<tr><td>Google Nest Cam (indendørs, kablet), dag</td><td>2,49 W</td><td>{{oere 0,06}}</td></tr>
<tr><td>Google Nest Cam (indendørs, kablet), nat</td><td>2,22 W</td><td>{{oere 0,053}}</td></tr>
<tr><td>Google Nest Cam (udendørs eller indendørs), dag</td><td>2,35 W</td><td>{{oere 0,056}}</td></tr>
<tr><td>Google Nest Cam, kamera slået fra</td><td>0,26-0,52 W</td><td>under en halv øre</td></tr>
<tr><td>Reolink E1 indendørs (wifi), højst</td><td>under 5 W</td><td>{{oere 0,12}}</td></tr>
<tr><td>Reolink E1 Outdoor (wifi), højst</td><td>under 12 W</td><td>{{oere 0,288}}</td></tr>
<tr><td>Reolink PoE-kamera under 8 MP, højst</td><td>10 W</td><td>{{oere 0,24}}</td></tr>
<tr><td>Reolink kamera med projektør (PoE), højst</td><td>28 W</td><td>{{oere 0,672}}</td></tr>
</tbody>
</table>
<p>Googles tal er gennemsnit i hver tilstand, målt med kameraet tændt og forbundet til netværket. Reolinks tal er det højeste forbrug, når infrarødt lys, projektør og processor arbejder på fuld kraft, så det reelle forbrug i døgnet ligger lavere. Reolink skriver selv, at forbruget afhænger af infrarødt lys, projektører, chip og sensorer.</p>

<h2>Hvad koster et kamera om året?</h2>
<p>Fordi kameraet aldrig slukker, er det let at regne ud: watt gange 8.760 timer giver årsforbruget i watt-timer. Google opgiver selv et årsforbrug på 21 kWh for Nest Cam (indendørs, kablet) og 20 kWh for Nest Cam (udendørs eller indendørs), beregnet med 12 timer i dagtilstand og 12 timer i nattilstand. For Reolinks kameraer kender vi kun det højeste forbrug; tabellen viser derfor et loft, ikke et gennemsnit.</p>
<table>
<thead><tr><th>Kamera</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Google Nest Cam (indendørs, kablet), Googles tal</td><td>21 kWh</td><td>{{kr 21}}</td></tr>
<tr><td>Google Nest Cam (udendørs eller indendørs), Googles tal</td><td>20 kWh</td><td>{{kr 20}}</td></tr>
<tr><td>Wifi-kamera på højst 5 W, loft</td><td>44 kWh</td><td>{{kr 44}}</td></tr>
<tr><td>PoE-kamera på højst 10 W, loft</td><td>88 kWh</td><td>{{kr 88}}</td></tr>
<tr><td>Fire kameraer à 2,4 W (Nest-niveau)</td><td>84 kWh</td><td>{{kr 84}}</td></tr>
</tbody>
</table>

<h2>Optager (NVR) og PoE</h2>
<p>Større anlæg har ofte en optager — en NVR — som kameraerne er tilsluttet med netværkskabel. Kablet leverer både data og strøm (PoE), så kameraerne ikke skal have hver sin strømforsyning. Reolinks 8-kanals optager RLN8-410 bruger under 10 watt uden harddisk og kameraer. Dertil kommer harddisken, der optager hele tiden, og strømmen til kameraerne, som optageren sender videre gennem kablerne. Reolink gør selv opmærksom på, at optagerens harddisk og bundkort bruger strøm oven i det, kameraerne trækker.</p>
<p>Et anlæg med optager på 10 watt og fire PoE-kameraer, der hver bruger op til 10 watt, kan altså nå 50 watt i alt. Hele døgnet hele året er det op til cirka 440 kWh, svarende til {{kr 440}}. Det reelle tal er lavere, fordi kameraerne sjældent kører på fuld kraft, men det viser, at et større anlæg kan blive en af husets større døgnforbrug. Optager du til et <a href="/nas/">netværksdrev</a> i stedet, får diskene aldrig lov at sove, og så stiger NAS'ets forbrug.</p>

<p>Wifi-kameraer har hver sin lille strømforsyning i stikkontakten, mens PoE-kameraer får strøm gennem netværkskablet fra en optager eller en PoE-switch. For kameraets eget forbrug betyder det ikke meget, hvilken løsning du vælger, men en PoE-switch eller optager har sit eget forbrug, som kommer oven i. Til gengæld er en kablet forbindelse ofte mere stabil end wifi, og kameraet kan sidde, hvor der ikke er en stikkontakt.</p>

<h2>Batterikameraer</h2>
<p>Kameraer på batteri vågner kun, når de registrerer bevægelse, og lades med mellemrum fra en lader eller et lille solpanel. Google måler sin batteridørklokke til omkring 1 kWh om året, og et batterikamera ligger efter vores skøn i samme lave størrelsesorden. Prisen er, at de ikke optager hele tiden, og at de skal lades eller have batteriet skiftet. Det samme gælder for en <a href="/videodoerklokke/">videodørklokke</a> på batteri, mens en kablet dørklokke kører hele døgnet som et almindeligt kamera.</p>

<h2>Hvad bestemmer, hvor meget strøm dit overvågningskamera bruger?</h2>
<ul>
<li><strong>Nattesyn</strong> — infrarøde lysdioder og projektører trækker meget, når de er tændt.</li>
<li><strong>Opløsning og processor</strong> — 4K og 8 MP kræver mere regnekraft end 1080p.</li>
<li><strong>Optagelse</strong> — kontinuerlig optagelse til en optager eller NAS holder diske i gang.</li>
<li><strong>Antal kameraer</strong> — forbruget ganges op med hvert kamera.</li>
<li><strong>Strømforsyningen</strong> — små adaptere er effektive i dag; Google måler sine til 0,03-0,05 watt ved 230 volt uden kamera tilsluttet.</li>
</ul>

<h2>Sådan sparer du strøm på dine kameraer</h2>
<ol>
<li><strong>Brug bevægelsesoptagelse</strong> i stedet for at optage hele døgnet, hvis det er nok til dit behov.</li>
<li><strong>Slå indendørskameraer fra</strong>, når du er hjemme — Nest Cam bruger 0,3-0,5 watt med kameraet slået fra.</li>
<li><strong>Brug projektøren med omtanke</strong>; lad den kun tænde ved bevægelse.</li>
<li><strong>Vælg færre og bedre placerede kameraer</strong> frem for mange.</li>
<li><strong>Brug en effektiv optager</strong> eller cloud-optagelse i stedet for en ældre computer, der står tændt.</li>
</ol>
<p>Læs mere om de små forbrug, der løber hele døgnet, i guiden om <a href="/standby/">standby</a>.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger et overvågningskamera?", answer: "Et lille wifi-kamera som Google Nest Cam bruger 2,2-2,5 W. Udendørs kameraer med nattesyn bruger op til 10-12 W ifølge Reolink, og kameraer med projektør op til 28 W." },
    { question: "Hvad koster et overvågningskamera om året?", answer: "Google opgiver 20-21 kWh om året for Nest Cam, svarende til {{kr 21}}. Et PoE-kamera på højst 10 W kan nå 88 kWh, svarende til {{kr 88}}." },
    { question: "Hvor meget strøm bruger en NVR-optager?", answer: "Reolinks RLN8-410 bruger under 10 W uden harddisk og kameraer. Med harddisk og fire PoE-kameraer kan anlægget nå op mod 50 W, op til cirka 440 kWh om året eller {{kr 440}}." },
    { question: "Bruger et kamera mere strøm om natten?", answer: "Det afhænger af kameraet. Nest Cam bruger lidt mindre om natten (2,22 W mod 2,49 W om dagen), mens kameraer med kraftigt infrarødt lys eller projektør bruger mere." },
    { question: "Bruger batterikameraer strøm?", answer: "Kun til opladning, og det er meget lidt. Google måler sin batteridørklokke til cirka 1 kWh om året, og et batterikamera ligger efter vores skøn i samme størrelsesorden: omkring {{kr 1}} om året." },
  ],
  relatedSlugs: ["videodoerklokke", "nas", "router", "computer", "laptop", "ladestander"],
  sources: [
    { name: "Google — Nest Cam (indendørs, kablet) Product Environmental Report (230 V)", url: "https://www.gstatic.com/gumdrop/sustainability/nest-cam-indoor-wired-product-enviromental-report.pdf" },
    { name: "Google — Nest Cam (udendørs eller indendørs, kablet) Product Environmental Report (230 V)", url: "https://www.gstatic.com/gumdrop/sustainability/nest-cam-outdoor-indoor-wired-product-enviromental-report.pdf" },
    { name: "Reolink Support — What is the Power Consumption of Reolink PoE Cameras", url: "https://support.reolink.com/hc/en-us/articles/900000593323-What-is-the-Power-Consumption-of-Reolink-PoE-Cameras/" },
    { name: "Reolink Support — What is the Power Consumption of Reolink Plug-in Wi-Fi Cameras", url: "https://support.reolink.com/articles/57366279999385-What-is-the-Power-Consumption-of-Reolink-Plug-in-Wi-Fi-Cameras" },
    { name: "Reolink — RLK8-410B4 NVR-kit specifikationer (optager under 10 W uden harddisk og PoE)", url: "https://reolink.com/files/docs/specs/RLK8-410B4-NVR-Kit-Specifications.pdf" },
    { name: "Reolink — Overview of Monitoring PoE Camera Power Usage via Reolink NVRs", url: "https://support.reolink.com/articles/39154522558617-Overview-of-Monitoring-PoE-Camera-Power-Usage-via-Reolink-NVRs/" },
    { name: "Google — Nest Doorbell (battery) Product Environmental Report (årsforbrug ved opladning)", url: "https://www.gstatic.com/gumdrop/sustainability/nest-doorbell-battery-product-enviromental-report.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn dit overvågningskameras strømforbrug",
    options: [
      { label: "Lille wifi-kamera, Nest-niveau (ca. 2,4 W)", kwhPerUse: 0.0575 },
      { label: "Wifi-kamera på højst 5 W (loft)", kwhPerUse: 0.12 },
      { label: "PoE-kamera på højst 10 W (loft)", kwhPerUse: 0.24 },
      { label: "Optager og fire PoE-kameraer (loft, ca. 50 W)", kwhPerUse: 1.2 },
    ],
    usageLabel: "Dage tændt pr. år",
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

export default overvaagningskamera;
