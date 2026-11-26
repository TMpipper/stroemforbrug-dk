import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;

const mitsubishiMszFt: ModelData = {
  slug: "mitsubishi-msz-ft",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Mitsubishi Electric",
  name: "Mitsubishi Electric MSZ-FT",
  released: "2025-06",
  synonyms: [
    "mitsubishi msz-ft strømforbrug",
    "mitsubishi ft25 strømforbrug",
    "mitsubishi ft35",
    "mitsubishi ft50",
    "msz-ft25vgk2",
    "muz-ft25vghz2",
    "mitsubishi msz-ft25vg",
    "mitsubishi kompakt varmepumpe",
  ],
  title: "Mitsubishi MSZ-FT strømforbrug (2026) → kWh og energiklasse",
  description:
    "Mitsubishi Electric MSZ-FT25, FT35 og FT50 luft-til-luft varmepumpe: energimærkets kWh om året til varme, SCOP i koldt klima, energiklasse og pris.",
  intro:
    "Ved samme varmelast på 3,2 kW bruger FT25 112 kWh mere om året end Hero 2.0 LN25 i det gennemsnitlige klima og 300 kWh mere i det kolde.",
  content: `<h2>Hvor meget strøm bruger Mitsubishi Electric MSZ-FT?</h2>
<p>MSZ-FT er Mitsubishi Electrics kompakte vægmodel med udedelen MUZ-FT…VGHZ2, der som de andre HZ-udedele er bygget til varme i frost. Siden dækker den aktuelle udgave FT…VGK2 i de tre størrelser FT25, FT35 og FT50, som Mitsubishi Electric har registreret i EU's produktdatabase EPREL i 2025. Den tidligere udgave FT…VG og FT…VGK med udedel VGHZ har næsten de samme tal.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>FT25VGK2</td><td>3,2 kW</td><td>4,6</td><td>973</td><td>A++</td><td>3,5 (4,7 kW)</td><td>2.766</td></tr>
<tr><td>FT35VGK2</td><td>4,0 kW</td><td>4,6</td><td>1.217</td><td>A++</td><td>3,5 (5,9 kW)</td><td>3.438</td></tr>
<tr><td>FT50VGK2</td><td>5,0 kW</td><td>4,3</td><td>1.625</td><td>A+</td><td>3,3 (7,4 kW)</td><td>4.707</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 973}} for FT25, {{kr 1217}} for FT35 og {{kr 1625}} for FT50. Tallene gælder opvarmning; køling har sit eget mærke.</p>

<h2>Lavere SCOP koster i drift</h2>
<p>FT er den kompakte af de tre Mitsubishi Electric-serier, vi har sider om, og det er også den med lavest SCOP af de tre. Ved samme varmelast på 3,2 kW har FT25 SCOP 4,6, <a href="/varmepumpe/mitsubishi-hero/">Hero 2.0 LN25</a> 5,2 og <a href="/varmepumpe/mitsubishi-msz-rz/">MSZ-RZ25</a> 5,3. I det gennemsnitlige klima bruger FT25 973 kWh mod 861 og 844 kWh — 112 og 129 kWh mere om året. I EU's kolde klima er forskellen større: 2.766 kWh for FT25 mod 2.466 for LN25 og 2.365 for RZ25, altså 300 og 401 kWh mere.</p>
<p>Om forskellen betyder noget for dig, afhænger af, hvor meget pumpen kører. Er den husets vigtigste varmekilde, svarer 300 kWh om året til {{kr 300}} ved månedens elpris, og over pumpens levetid løber det op. Er den et supplement, der kører i stuen nogle timer om dagen, bliver forskellen mindre, og så kan FT sagtens være det rigtige valg.</p>

<h2>FT50: A+ og klasse B i koldt klima</h2>
<p>FT50 er regnet til 5,0 kW og har SCOP 4,3 og energiklasse A+ i det gennemsnitlige klima. I det kolde klima, dimensioneret ved −22 °C, falder SCOP til 3,3 og klassen til B, og årsforbruget bliver 4.707 kWh. FT50 ender altså med lavest virkningsgrad af de tre størrelser i frost og som den eneste i klasse B. Har du et stort, åbent rum, der skal varmes det meste af vinteren, er en 6,0 kW-udgave i en serie med højere SCOP værd at sammenligne med: LN50 og RZ50 bruger 1.826 og 1.784 kWh i det gennemsnitlige klima for 6,0 kW varmelast, mens FT50 bruger 1.625 kWh for 5,0 kW.</p>

<h2>Mærket, huset og den danske vinter</h2>
<p>Energimærket forudsætter, at pumpen dækker sin varmelast ved −10 °C og i alt svarende til 1.400 timer ved fuld last — for FT25 omkring 4.480 kWh varme om året. Dit eget forbrug afhænger af, hvor meget af husets varme pumpen faktisk leverer. Som supplement til fjernvarme, oliefyr, elradiatorer eller brændeovn bruger den mindre end mærket. Som eneste varmekilde i et sommerhus eller et hus med stort varmetab kan den nå mærkets tal eller mere.</p>
<p>Danmark ligger tættere på EU's gennemsnitlige klima end på det kolde. I en mild vinter kan dit forbrug lande under mærket; i en lang periode med frost stiger både varmebehovet og pumpens forbrug pr. kWh varme. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a>.</p>

<h2>Flyt varmen væk fra spidsbelastningen</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En varmepumpe kan ikke slukkes i de dyre timer uden at stuen bliver kold, men den kan forvarme: hæv temperaturen en grad i de billige timer om natten og midt på dagen, og lad den falde lidt om aftenen. Husets vægge og gulve lagrer varmen. Jo lavere SCOP pumpen har, jo mere er hver flyttet kWh værd, fordi den samme varme koster flere kWh. Se, hvordan varmepumper generelt bruger strøm, på siden om <a href="/varmepumpe/">varmepumpens strømforbrug</a>, og dagens timepriser på <a href="/elpriser/">elpriser i dag</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Mitsubishi MSZ-FT25?",
      answer:
        "973 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 4,6 og energiklasse A++. Det svarer til {{kr 973}} om året ved månedens elpris.",
    },
    {
      question: "Hvor meget mere bruger MSZ-FT end Hero 2.0?",
      answer:
        "Ved samme varmelast på 3,2 kW bruger FT25 112 kWh mere om året end LN25 i gennemsnitligt klima og 300 kWh mere i koldt klima ifølge de to energimærker.",
    },
    {
      question: "Hvilken energiklasse har MSZ-FT50?",
      answer:
        "A+ til opvarmning i gennemsnitligt klima med SCOP 4,3, og B i EU's kolde klima med SCOP 3,3. FT25 og FT35 har A++ i gennemsnitligt klima.",
    },
    {
      question: "Gælder tallene for den ældre MSZ-FT25VG?",
      answer:
        "Næsten. FT25VG og FT25VGK med udedel MUZ-FT25VGHZ har de samme 973 kWh om året i EPREL, og FT35VG har 1.216 kWh mod 1.217 kWh for FT35VGK2.",
    },
  ],
  sources: [
    { name: "EPREL — Mitsubishi Electric MSZ-FT25VGK2 / MUZ-FT25VGHZ2, EU's energimærke", url: eprel("2378912") },
    { name: "EPREL — Mitsubishi Electric MSZ-FT35VGK2 / MUZ-FT35VGHZ2, EU's energimærke", url: eprel("2378913") },
    { name: "EPREL — Mitsubishi Electric MSZ-FT50VGK2 / MUZ-FT50VGHZ2, EU's energimærke", url: eprel("2378914") },
    { name: "EPREL — Mitsubishi Electric MSZ-FT25VG / MUZ-FT25VGHZ, EU's energimærke", url: eprel("293229") },
    { name: "EPREL — Mitsubishi Electric MSZ-FT35VG / MUZ-FT35VGHZ, EU's energimærke", url: eprel("293231") },
  ],
  variants: [
    { name: "FT25VGK2, 3,2 kW", watts: {}, annualKwh: 973, energyClass: "A++", source: 0 },
    { name: "FT35VGK2, 4,0 kW", watts: {}, annualKwh: 1217, energyClass: "A++", source: 1 },
    { name: "FT50VGK2, 5,0 kW", watts: {}, annualKwh: 1625, energyClass: "A+", source: 2 },
  ],
  publishDate: "2027-01-07",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default mitsubishiMszFt;
