import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;

const mitsubishiMszRz: ModelData = {
  slug: "mitsubishi-msz-rz",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Mitsubishi Electric",
  name: "Mitsubishi Electric MSZ-RZ",
  released: "2025-01",
  synonyms: [
    "mitsubishi msz-rz strømforbrug",
    "mitsubishi rz25 strømforbrug",
    "mitsubishi rz35",
    "mitsubishi rz50",
    "msz-rz25vu",
    "muz-rz25vuhz",
    "mitsubishi varmepumpe r290",
    "mitsubishi electric rz varmepumpe",
  ],
  title: "Mitsubishi MSZ-RZ strømforbrug (2026) → kWh og kold vinter",
  description:
    "Mitsubishi Electric MSZ-RZ25, RZ35 og RZ50 luft-til-luft varmepumpe med R290: energimærkets kWh om året til varme, SCOP i koldt klima og pris om året.",
  intro:
    "Mod Hero 2.0 (MSZ-LN) sparer RZ mest i frost: 101–176 kWh om året i EU's kolde klima, men kun 17–42 kWh i det gennemsnitlige.",
  content: `<h2>Hvor meget strøm bruger Mitsubishi Electric MSZ-RZ?</h2>
<p>MSZ-RZ er Mitsubishi Electrics nyere vægmodel med udedelen MUZ-RZ…VUHZ, hvor HZ igen betyder Hyper Heating til kolde vintre. Det nye er kølemidlet: RZ bruger propan (R290) i stedet for R32, som Hero 2.0 og de andre vægmodeller på vores sider bruger ifølge EPREL. Siden dækker de tre størrelser RZ25, RZ35 og RZ50, som Mitsubishi Electric har registreret i EU's produktdatabase EPREL i 2025.</p>
<p>Kølemidlet ændrer ikke i sig selv strømregningen — det er SCOP på energimærket, der afgør den. Forskellen ligger i kølemidlets GWP-tal, som Mitsubishi Electric har oplyst i EPREL: 3 for propan i RZ mod 550 for R32 i Hero 2.0. EU's regler for kølemidler strammes i de kommende år, så ved et køb nu kan det tælle med ved siden af forbruget.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>RZ25VU</td><td>3,2 kW</td><td>5,3</td><td>844</td><td>A+++</td><td>4,1 (4,7 kW)</td><td>2.365</td></tr>
<tr><td>RZ35VU</td><td>4,0 kW</td><td>5,2</td><td>1.075</td><td>A+++</td><td>4,1 (5,9 kW)</td><td>2.986</td></tr>
<tr><td>RZ50VU</td><td>6,0 kW</td><td>4,7</td><td>1.784</td><td>A++</td><td>3,5 (8,8 kW)</td><td>5.196</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 844}} for RZ25, {{kr 1075}} for RZ35 og {{kr 1784}} for RZ50. Det er kun opvarmning; køling har sit eget mærke.</p>

<h2>RZ mod Hero 2.0: forskellen ligger i frosten</h2>
<p>RZ og <a href="/varmepumpe/mitsubishi-hero/">Hero 2.0 (MSZ-LN)</a> er regnet til de samme varmelaster — 3,2, 4,0 og 6,0 kW — så tallene kan sammenlignes direkte. I EU's gennemsnitlige klima er forskellen lille: RZ25 bruger 844 kWh mod 861 kWh for LN25, RZ35 1.075 mod 1.098 kWh og RZ50 1.784 mod 1.826 kWh. Det er 17–42 kWh om året.</p>
<p>I det kolde referenceklima, dimensioneret ved −22 °C, bliver forskellen større. RZ25 og RZ35 holder SCOP 4,1, hvor LN25 og LN35 har 4,0 og 3,9. RZ25 bruger 2.365 kWh mod 2.466, RZ35 2.986 mod 3.162 og RZ50 5.196 mod 5.299 kWh. Det er 101–176 kWh om året, svarende til {{kr 101}}–{{kr 176}} ved månedens elpris. Jo mere af vinteren pumpen kører i frost, jo mere af den forskel får du med.</p>

<h2>RZ mod Panasonic HZ</h2>
<p>I 3,2 kW-klassen er RZ25 og <a href="/varmepumpe/panasonic-hz/">Panasonic HZ25ZKE</a> næsten lige: 844 og 845 kWh i det gennemsnitlige klima. I det kolde klima bruger HZ25ZKE 2.246 kWh og RZ25 2.365 kWh, fordi HZ har SCOP 4,3 mod 4,1. Til gengæld findes RZ i en 6,0 kW-udgave til store, åbne rum, som HZ-serien ikke har.</p>

<h2>Hvad mærket ikke ved om dit hus</h2>
<p>Energimærket forudsætter, at pumpen dækker sin varmelast ved −10 °C, i alt svarende til 1.400 timer ved fuld last i det gennemsnitlige klima — for RZ25 omkring 4.480 kWh varme om året. Det passer sjældent på et dansk hus. En luft-til-luft varmepumpe er oftest et supplement til fjernvarme, oliefyr, elradiatorer eller brændeovn og varmer stuen og rummene omkring den. Så leverer den mindre varme end mærkets forudsætning og bruger også mindre. Er den husets eneste varmekilde, for eksempel i et sommerhus eller et hus med åben planløsning, kan forbruget nå mærkets tal eller mere.</p>
<p>Danmark ligger tættere på EU's gennemsnitlige klima end på det kolde, men vintrene svinger. I en mild vinter kan du lande under mærket; i en lang frostperiode stiger både varmebehovet og pumpens forbrug pr. kWh varme. Netop dér er RZ's bedre SCOP i koldt klima mest værd. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a>.</p>

<h2>Forvarm i de billige timer</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Du kan ikke slukke varmepumpen i de dyre timer, men du kan forvarme: hæv indetemperaturen en grad i de billige timer om natten og midt på dagen, og lad den falde lidt i spidsbelastningen. Husets vægge, gulve og møbler lagrer varmen, og i et tungt hus kan du flytte en del af forbruget uden at mærke det. Med pumpen på wifi kan et ugeprogram klare det automatisk. Se, hvordan varmepumper generelt bruger strøm, på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Mitsubishi MSZ-RZ25?",
      answer:
        "844 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 5,3 og energiklasse A+++. Det svarer til {{kr 844}} om året ved månedens elpris. I EU's kolde klima er tallet 2.365 kWh med SCOP 4,1.",
    },
    {
      question: "Hvad er forskellen på MSZ-RZ og Hero 2.0 (MSZ-LN)?",
      answer:
        "RZ bruger kølemidlet R290 og har en lidt bedre SCOP, især i koldt klima. Ved samme varmelast bruger RZ 17–42 kWh mindre om året i gennemsnitligt klima og 101–176 kWh mindre i koldt klima ifølge de to energimærker.",
    },
    {
      question: "Hvilken energiklasse har Mitsubishi MSZ-RZ50?",
      answer:
        "A++ til opvarmning i gennemsnitligt klima med SCOP 4,7 og 1.784 kWh om året. RZ25 og RZ35 har A+++.",
    },
    {
      question: "Hvor meget bruger MSZ-RZ i en kold vinter?",
      answer:
        "I EU's kolde referenceklima (−22 °C) bruger RZ25 2.365 kWh, RZ35 2.986 kWh og RZ50 5.196 kWh om året. Danske vintre ligger tættere på det gennemsnitlige klima, men lange frostperioder trækker forbruget op.",
    },
  ],
  sources: [
    { name: "EPREL — Mitsubishi Electric MSZ-RZ25VU / MUZ-RZ25VUHZ, EU's energimærke", url: eprel("2309148") },
    { name: "EPREL — Mitsubishi Electric MSZ-RZ35VU / MUZ-RZ35VUHZ, EU's energimærke", url: eprel("2244550") },
    { name: "EPREL — Mitsubishi Electric MSZ-RZ50VU / MUZ-RZ50VUHZ, EU's energimærke", url: eprel("2244551") },
  ],
  variants: [
    { name: "RZ25VU, 3,2 kW", watts: {}, annualKwh: 844, energyClass: "A+++", source: 0 },
    { name: "RZ35VU, 4,0 kW", watts: {}, annualKwh: 1075, energyClass: "A+++", source: 1 },
    { name: "RZ50VU, 6,0 kW", watts: {}, annualKwh: 1784, energyClass: "A++", source: 2 },
  ],
  publishDate: "2027-01-06",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default mitsubishiMszRz;
