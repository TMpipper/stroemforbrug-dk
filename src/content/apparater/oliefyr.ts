import type { ApplianceData } from "@/lib/types";

const oliefyr: ApplianceData = {
  slug: "oliefyr",
  meta: {
    category: "varme",
    usage: "heating",
    hasEuLabel: false, // kedelmærket (811/2013) handler om brændslet, ikke strømmen — som pillefyr
    shiftable: false,
    motif: "radiator",
    synonyms: [
      "oliefyr",
      "oliekedel",
      "oliebrænder",
      "kondenserende oliefyr",
      "oliefyr strømforbrug",
      "oliefyr elforbrug",
      "olieopvarmning",
      "viessmann vitoladens",
    ],
  },
  name: "Oliefyr",
  article: "et",
  title: "Oliefyr strømforbrug (2026) → Brænder, pumpe og styring",
  description:
    "Et oliefyr bruger strøm til brænder, blæser og styring — efter vores beregning ca. 150-250 kWh om året. Se watt i drift, og hvad en gammel pumpe lægger oveni.",
  heading: "Strømforbrug for et oliefyr: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et moderne oliefyr bruger 36-226 watt strøm, mens brænderen kører, og 3-6 watt på standby, ifølge Viessmanns produktdata. Over et år giver det efter vores beregning ca. 150-250 kWh, og vi regner med 200 kWh som typisk — svarende til {{kr 200}} ved {{pris_kwh}} eller omkring {{kr 200 /md}} om måneden. Selve varmen kommer fra olien; cirkulationspumpen, der sender varmen rundt i huset, kommer oven i.",
  kwhRange: [120, 900],
  typicalKwh: 200,
  wattage: 105,
  standbyWatts: 6,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.7, 1.5, 1.25, 0.9, 0.6, 0.45, 0.4, 0.4, 0.55, 0.95, 1.45, 1.85],
  content: `<h2>Olien giver varmen, strømmen driver fyret</h2>
<p>Et oliefyr består af en oliebrænder og en kedel. Bolius forklarer, at brænderen på ældre fyr sidder på fronten af kedlen, mens den i moderne fyr er bygget ind. Uanset typen kan fyret ikke køre uden strøm: en motor driver blæseren, der giver forbrændingsluft, og oliepumpen, der presser olien ud gennem dysen; en tændingstransformator laver gnisten; og en elektronisk styring holder øje med flammen, temperaturen og det varme brugsvand. Mange fyr har desuden en magnetventil og en forvarmer til olien.</p>
<p>Denne side handler kun om den strøm. Olien er brændstoffet, og den står på din olieregning, ikke på elregningen. Cirkulationspumpen, der sender det varme vand rundt i radiatorerne, er et selvstændigt apparat med sin egen side.</p>

<h2>Producentens tal: watt i drift og på standby</h2>
<p>Viessmann offentliggør i sine produktkennwerte for 2025 den elektriske effekt for hvert fyr, ved fuld last, ved 30 procent last og på standby. Tallene herunder er for tre af deres oliefyr til parcelhuse; alle tre er kondenserende kedler, men brænderne er forskellige:</p>
<table>
<thead><tr><th>Oliefyr (Viessmann)</th><th>Brænder</th><th>Fuld last</th><th>30 procent last</th><th>Standby</th></tr></thead>
<tbody>
<tr><td>Vitoladens 300-C, type J3RB, 10-19 kW</td><td>Modulerende</td><td>105 W</td><td>36 W</td><td>6 W</td></tr>
<tr><td>Vitoladens 300-C, type BC3B, 13-19 kW</td><td>To trin</td><td>180 W</td><td>58 W</td><td>6 W</td></tr>
<tr><td>Vitorondens 200-T, 20 kW</td><td>Kondenserende kedel, større brænder</td><td>226 W</td><td>60 W</td><td>3 W</td></tr>
</tbody>
</table>
<p>Forskellen mellem den første og den anden række er brænderen. En modulerende brænder kan skrue ned og køre roligt i mange timer på lav effekt, mens en totrinsbrænder skifter mellem to faste trin og bruger mere strøm på blæseren, når den kører. Det er beskedne effekter, men fyret kører i tusindvis af timer om året, og standby løber hele tiden.</p>

<h2>Hvad bruger et oliefyr om året?</h2>
<p>Der findes ingen fælles måling af oliefyrs årlige elforbrug, så vi har regnet det ud fra Viessmanns tal og et parcelhus, der bruger omkring 18.000 kWh varme om året til rum og brugsvand. Regnestykket er et skøn, ikke en måling:</p>
<table>
<thead><tr><th>Fyr (ca. 18.000 kWh varme om året)</th><th>Driftstimer (skøn)</th><th>kWh om året (skøn)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Modulerende brænder, ca. 6 kW i snit</td><td>ca. 3.000 à 45 W + standby</td><td>ca. 170</td><td>{{kr 170}}</td></tr>
<tr><td>Totrinsbrænder</td><td>ca. 1.800 à 90 W + standby</td><td>ca. 205</td><td>{{kr 205}}</td></tr>
<tr><td>Ældre fyr med ét trin, ca. 20 kW</td><td>ca. 1.000 à 226 W + standby</td><td>ca. 250</td><td>{{kr 250}}</td></tr>
<tr><td>Ældre fyr plus gammel separat pumpe</td><td>Som ovenfor + pumpe døgnet rundt</td><td>ca. 730</td><td>{{kr 730}}</td></tr>
</tbody>
</table>
<p>Det overraskende ved tabellen er, at fyrene ligger tæt. Brænderen bruger strøm, mens den kører, og en lille brænder kører længere end en stor, så forskellen jævner sig delvist ud. Det, der flytter årsforbruget, er cirkulationspumpen i den sidste række. Bolius regner med 482 kWh om året for en pumpe fra før 1995, der kører med 55 W døgnet rundt — mere end to gange det, selve fyret bruger. En ny pumpe kan ifølge Bolius komme ned på omkring 120 kWh. Har du et gammelt oliefyr, er <a href="/cirkulationspumpe/">cirkulationspumpen</a> derfor det første sted at kigge.</p>

<h2>Energimærket handler om olien, ikke om strømmen</h2>
<p>Oliefyr er omfattet af EU's energimærkning af rumvarmere, forordning 811/2013, som gælder kedler op til 70 kW. Mærkets klasse bygger på fyrets sæsonvirkningsgrad — hvor godt det udnytter olien over et år — og strømforbruget indgår kun som en mindre del af regnestykket. To fyr i samme klasse kan altså have forskelligt elforbrug.</p>
<p>Leder du efter strømforbruget, så kig i produktdatabladet. Producenten skal opgive hjælpeelforbruget ved fuld last, ved dellast og på standby, og det er de tal, der står i tabellen ovenfor. Derfor viser vi ingen energimærke-tabel med kWh strøm på denne side.</p>

<h2>Kondenserende fyr, forbud og alternativer</h2>
<p>Bolius skriver, at der findes to slags oliefyr: det almindelige og det kondenserende, som udnytter olien bedre, men kræver ny skorsten eller nyt aftræk. Fra 2013 må der ikke installeres oliefyr i nye huse, og fra 1. juli 2016 heller ikke i eksisterende huse, hvor der er mulighed for naturgas eller fjernvarme. Pr. 1. januar 2022 stod oliefyr ifølge Bolius for 6,6 procent af opvarmningen i danske boliger, og andelen er faldende.</p>
<p>Mange, der har oliefyr, overvejer derfor en <a href="/varmepumpe/">varmepumpe</a>. Her er regnestykket helt anderledes: en varmepumpe bruger strøm til al varmen, typisk flere tusinde kWh om året, mens oliefyret bruger olie til varmen og kun et par hundrede kWh strøm. Strømtillægget på denne side er altså en mindre post i sammenligningen — men det er en post, der forsvinder sammen med fyret. Har du naturgas i stedet, er tallene for et <a href="/gasfyr/">gasfyr</a> lavere, fordi en gasbrænder ikke har oliepumpe og forvarmer.</p>

<h2>Kan strømmen flyttes til billige timer?</h2>
<p>Næsten ikke. Fyret kører, når huset har brug for varme, og strømforbruget følger varmen. Om sommeren laver mange oliefyr kun varmt brugsvand, og så starter fyret ofte for at holde beholderen varm. Har beholderen en <a href="/elpatron/">elpatron</a>, kan fyret slukkes i sommermånederne, men så bruger patronen langt mere strøm end fyret — den laver al varmen med el. Det regnestykke afhænger af olie- og elprisen, og strømmen til fyret er kun en lille del af det.</p>

<h2>Sådan måler og sænker du fyrets strømforbrug</h2>
<p>Et oliefyr er fast tilsluttet, så en stikmåler kan ikke bruges. Aflæs i stedet elmåleren en nat, hvor resten af huset er stille: en time med fyret tændt og en time med fyret slukket på kontakten. Forskellen er fyrets og pumpens forbrug i den time. Gør det både en kold nat og en mild dag.</p>
<ul>
<li><strong>Skift en gammel cirkulationspumpe</strong> — den bruger ofte mere end selve fyret.</li>
<li><strong>Få fyret serviceret</strong>, så brænderen er indstillet og ikke starter og stopper unødigt.</li>
<li><strong>Brug vejrkompensering</strong>, så fyret kører med lav fremløbstemperatur, når det er mildt.</li>
<li><strong>Tjek standby</strong> — et fyr på 3-6 W standby bruger 25-50 kWh om året, svarende til {{kr 25-50}}, bare ved at være tændt.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et oliefyr?", answer: "Ifølge Viessmanns produktdata 36-226 W, mens brænderen kører, og 3-6 W på standby. Over et år bliver det efter vores beregning ca. 150-250 kWh, svarende til {{kr 150-250}} ved {{pris_kwh}}." },
    { question: "Er cirkulationspumpen med i oliefyrets strømforbrug?", answer: "Nej, ikke i tallene på denne side. En gammel pumpe fra før 1995 bruger ifølge Bolius 482 kWh om året, svarende til {{kr 482}} — mere end selve fyret." },
    { question: "Bruger et oliefyr strøm om sommeren?", answer: "Ja, hvis det laver varmt brugsvand. Det starter for at holde beholderen varm, og standby kører hele tiden. Vi regner med et lavere forbrug fra maj til september." },
    { question: "Viser energimærket oliefyrets strømforbrug?", answer: "Ikke direkte. Klassen bygger på, hvor godt fyret udnytter olien. Strømforbruget ved fuld last, dellast og standby står i produktdatabladet." },
    { question: "Bruger et kondenserende oliefyr mere strøm?", answer: "Ikke nødvendigvis. Det afhænger mest af brænderen: Viessmanns modulerende brænder bruger 36 W ved 30 procent last mod 58 W for totrinsbrænderen i samme kedel." },
  ],
  relatedSlugs: ["gasfyr", "cirkulationspumpe", "pillefyr", "varmepumpe", "jordvarme"],
  sources: [
    { name: "Viessmann — Produktkennwerte, Lieferprogramm 2025 (5793687 DE 4/2025)", url: "https://www.heizungsdiscount24.de/pdf/Viessmann-Vitoladens-300-C-Planungsanleitung.pdf" },
    { name: "Bolius — Opvarmning med oliefyr", url: "https://www.bolius.dk/opvarmning-med-oliefyr-17062" },
    { name: "Bolius — Her er 10 store strømslugere i dit hjem", url: "https://www.bolius.dk/her-er-10-store-stroemslugere-i-dit-hjem-672" },
    { name: "Forordning (EU) nr. 811/2013, artikel 1 — energimærkning af rumvarmere", url: "https://www.legislation.gov.uk/eur/2013/811/article/1" },
  ],
  calculatorConfig: {
    title: "Beregn oliefyrets strømforbrug",
    options: [
      { label: "Modulerende brænder (ca. 0,45 kWh/døgn)", kwhPerUse: 0.45 },
      { label: "Totrinsbrænder (ca. 0,55 kWh/døgn)", kwhPerUse: 0.55 },
      { label: "Ældre fyr med ét trin (ca. 0,7 kWh/døgn)", kwhPerUse: 0.7 },
      { label: "Ældre fyr plus gammel pumpe (ca. 2 kWh/døgn)", kwhPerUse: 2.0 },
    ],
    usageLabel: "Dage i drift pr. år",
    usageUnit: "dage/år",
    usageMin: 120,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-07",
  updated: "2026-11-22",
};

export default oliefyr;
