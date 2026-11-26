import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;

const daikinPerfera: ModelData = {
  slug: "daikin-perfera",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Daikin",
  name: "Daikin Perfera Optimised Heating",
  released: "2022-01",
  synonyms: [
    "daikin perfera strømforbrug",
    "daikin perfera optimised heating",
    "daikin ftxtm30 strømforbrug",
    "daikin ftxtm40",
    "ftxtm30a",
    "rxtm30a",
    "daikin perfera nordisk",
    "daikin luft til luft varmepumpe strømforbrug",
  ],
  title: "Daikin Perfera strømforbrug (2026) → energimærke og pris",
  description:
    "Daikin Perfera Optimised Heating (FTXTM30 og FTXTM40) luft-til-luft varmepumpe: kWh om året til varme, SCOP i gennemsnitligt og koldt klima og pris.",
  intro:
    "Den store FTXTM40 giver mere varme pr. kWh end den lille, SCOP 5,5 mod 5,4 for FTXTM30 — usædvanligt, fordi virkningsgraden normalt falder med størrelsen.",
  content: `<h2>Hvor meget strøm bruger Daikin Perfera Optimised Heating?</h2>
<p>Perfera Optimised Heating er Daikins nordiske udgave af vægmodellen Perfera: indedel FTXTM og udedel RXTM, bygget til opvarmning i kolde vintre. Daikin skriver på sin danske side, at den garanterer varme ned til −30 °C udenfor. Siden dækker de to størrelser FTXTM30A og FTXTM40A med udedelene RXTM30A og RXTM40A, som Daikin har registreret i EU's produktdatabase EPREL.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>FTXTM30A</td><td>3,0 kW</td><td>5,4</td><td>785</td><td>A+++</td><td>4,2 (4,4 kW)</td><td>2.176</td></tr>
<tr><td>FTXTM40A</td><td>3,8 kW</td><td>5,5</td><td>967</td><td>A+++</td><td>4,4 (5,6 kW)</td><td>2.639</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 785}} for FTXTM30A og {{kr 967}} for FTXTM40A. Det er kun opvarmning; køling om sommeren står på mærkets anden halvdel.</p>

<h2>Lavere kWh betyder ikke altid mere effektiv</h2>
<p>På mærket bruger FTXTM30A færre kWh end de to modeller på 3,2 kW fra Panasonic og Mitsubishi Electric, som vi har sider om, men en del af forklaringen er, at Daikin har sat varmelasten til 3,0 kW. Mærket regner med 1.400 timer ved fuld last i det gennemsnitlige klima, så FTXTM30A forudsættes at levere omkring 4.200 kWh varme om året. <a href="/varmepumpe/panasonic-hz/">Panasonic HZ25ZKE</a> og <a href="/varmepumpe/mitsubishi-hero/">Mitsubishi Electric Hero 2.0 LN25</a> er begge regnet til 3,2 kW og dermed 4.480 kWh varme. Sammenlign derfor SCOP, når du sammenligner virkningsgrad: 5,4 for FTXTM30A, 5,3 for HZ25ZKE og 5,2 for LN25.</p>
<p>FTXTM40A er regnet til 3,8 kW og omkring 5.320 kWh varme, som den leverer med SCOP 5,5. Det betyder, at den store udgave giver lidt mere varme pr. kWh strøm end den lille — omvendt af, hvad man ser hos de fleste vægmodeller. Har du brug for mellem 3 og 4 kW, er der altså ingen virkningsgrad at spare ved at vælge den mindste.</p>

<h2>Perfera i koldt klima</h2>
<p>Daikin har også registreret begge størrelser i EU's kolde referenceklima, dimensioneret ved −22 °C. Varmelasten er her 4,4 og 5,6 kW, sæsonen svarer til 2.100 timer ved fuld last, og SCOP falder til 4,2 og 4,4. Årsforbruget bliver 2.176 og 2.639 kWh. Det er ikke et tal for en dansk vinter, men det viser, at FTXTM holder en SCOP over 4 i frost, og at FTXTM40A også her ligger over den lille.</p>
<p>Danmark ligger tættere på mærkets gennemsnitlige klima. En mild vinter kan give et forbrug under mærket; en lang periode med frost giver både mere varmebehov og lavere virkningsgrad og trækker forbruget op mod tallet for koldt klima.</p>

<h2>Dit forbrug afhænger af huset</h2>
<p>Energimærket er en standardberegning: et bestemt varmebehov, et bestemt klima og en indetemperatur på 20 °C. Dit eget forbrug afhænger af, hvor meget af husets varme pumpen skal levere. I de fleste huse er en luft-til-luft varmepumpe et supplement til fjernvarme, olie, gas, elradiatorer eller brændeovn og varmer stuen og de nærmeste rum. Så leverer den mindre varme end mærkets forudsætning, og forbruget bliver tilsvarende lavere. Som eneste varmekilde i et sommerhus eller et hus med åben planløsning kan den komme op på mærkets tal eller over, især i et ældre hus med stort varmetab.</p>
<p>Placeringen tæller også: en indedel, der hænger, så luften kan nå de andre rum, og en udedel, der ikke står i læ af en mur, hvor den kolde luft samler sig, giver en bedre SCOP i praksis. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a>.</p>

<h2>Forvarm i de billige timer</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En varmepumpe kan ikke stå slukket i de dyre timer, men den kan flytte en del af forbruget: hæv temperaturen en grad i de billige timer om natten og midt på dagen, og lad den falde lidt i spidsbelastningen. Huset lagrer varmen i vægge, gulve og møbler, og jo tungere huset er, jo mere kan du flytte uden at mærke det. Perfera kan styres med Daikins Onecta-app, hvor et ugeprogram klarer det for dig. Se, hvordan varmepumper generelt bruger strøm, på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>, og dagens timepriser på <a href="/elpriser/">elpriser i dag</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Daikin Perfera FTXTM30?",
      answer:
        "785 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 5,4 og energiklasse A+++. Det svarer til {{kr 785}} om året ved månedens elpris.",
    },
    {
      question: "Er FTXTM40 mere effektiv end FTXTM30?",
      answer:
        "En smule: FTXTM40A har SCOP 5,5 og FTXTM30A 5,4 i det gennemsnitlige klima, og i det kolde klima 4,4 mod 4,2. FTXTM40A bruger flere kWh, fordi den regnes til en større varmelast (3,8 mod 3,0 kW).",
    },
    {
      question: "Hvor meget bruger Daikin Perfera i koldt klima?",
      answer:
        "I EU's kolde referenceklima (−22 °C) bruger FTXTM30A 2.176 kWh og FTXTM40A 2.639 kWh om året med SCOP 4,2 og 4,4.",
    },
    {
      question: "Hvorfor bruger Perfera færre kWh end Panasonic HZ25ZKE?",
      answer:
        "Mest fordi mærket regner FTXTM30A til 3,0 kW varmelast mod 3,2 kW for HZ25ZKE. SCOP er næsten den samme: 5,4 mod 5,3. Sammenlign SCOP, når du vil vide, hvilken der giver mest varme pr. kWh.",
    },
    {
      question: "Hvad koster det at køre Daikin Perfera FTXTM40 om året?",
      answer:
        "Energimærkets 967 kWh til opvarmning svarer til {{kr 967}} om året ved månedens elpris. Som supplement til en anden varmekilde bliver forbruget lavere.",
    },
  ],
  sources: [
    { name: "EPREL — Daikin FTXTM30A2V1B / RXTM30A2V1B, EU's energimærke", url: eprel("2629925") },
    { name: "EPREL — Daikin FTXTM40A2V1B / RXTM40A2V1B, EU's energimærke", url: eprel("2629929") },
    {
      name: "Daikin — Perfera Optimised Heating, dansk produktside",
      url: "https://www.daikin.dk/dk_dk/produktgrupper/luft-til-luft-varmepumpe/Optimised-Heating-X-serien/optimeret-opvarmning-perfera.html",
    },
  ],
  variants: [
    { name: "FTXTM30A, 3,0 kW", watts: {}, annualKwh: 785, energyClass: "A+++", source: 0 },
    { name: "FTXTM40A, 3,8 kW", watts: {}, annualKwh: 967, energyClass: "A+++", source: 1 },
  ],
  publishDate: "2027-01-04",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default daikinPerfera;
