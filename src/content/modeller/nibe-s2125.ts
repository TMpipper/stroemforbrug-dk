import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/spaceheaters/${reg}`;

const nibeS2125: ModelData = {
  slug: "nibe-s2125",
  parent: "varmepumpe",
  group: "luft-til-vand",
  brand: "NIBE",
  name: "NIBE S2125",
  released: "2021-11",
  synonyms: [
    "nibe s2125 strømforbrug",
    "nibe s2125-8",
    "nibe s2125-12",
    "nibe s2125-14",
    "nibe s2125-16",
    "nibe luft til vand varmepumpe strømforbrug",
    "nibe varmepumpe kwh om året",
    "nibe s2125 energimærke",
  ],
  title: "NIBE S2125 strømforbrug (2026) → kWh om året pr. størrelse",
  description:
    "NIBE S2125 luft-til-vand varmepumpe i fire størrelser: energimærkets kWh om året til rumvarme ved 35 og 55 °C, kold vinter, energiklasse og pris.",
  intro:
    "Tallet er rumvarme ved 55 °C fremløb til radiatorer; med gulvvarme ved 35 °C bruger samme S2125-8 omkring en fjerdedel mindre ifølge mærket.",
  content: `<h2>Hvor meget strøm bruger NIBE S2125?</h2>
<p>S2125 er NIBEs udedel til luft-til-vand: den henter varme i udeluften og afleverer den som varmt vand til radiatorer eller gulvvarme, og den bruger propan (R290) som kølemiddel. NIBE oplyser fremløb op til 75 °C og op til 65 °C ved −25 °C ude. Udedelen arbejder sammen med en indedel eller en styring fra NIBE, men energimærket i EU's produktdatabase EPREL er registreret for udedelen alene. Siden dækker S2125-8, -12, -14 og -16.</p>
<table>
<thead><tr><th>Model</th><th>Ydelse 55 °C</th><th>ηs 55 °C</th><th>kWh om året 55 °C</th><th>Klasse 55 °C</th><th>ηs 35 °C</th><th>kWh om året 35 °C</th><th>Lydeffekt ude</th></tr></thead>
<tbody>
<tr><td>S2125-8</td><td>5 kW</td><td>146 %</td><td>2.939</td><td>A++</td><td>196 %</td><td>2.196</td><td>49 dB(A)</td></tr>
<tr><td>S2125-12</td><td>8 kW</td><td>150 %</td><td>4.102</td><td>A+++</td><td>195 %</td><td>2.835 (7 kW)</td><td>49 dB(A)</td></tr>
<tr><td>S2125-14</td><td>11 kW</td><td>159 %</td><td>5.598</td><td>A+++</td><td>208 %</td><td>4.309</td><td>52 dB(A)</td></tr>
<tr><td>S2125-16</td><td>11 kW</td><td>160 %</td><td>5.571</td><td>A+++</td><td>210 %</td><td>4.264</td><td>55 dB(A)</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster mærkets årsforbrug ved 55 °C {{kr 2939}} for S2125-8, {{kr 4102}} for S2125-12 og {{kr 5571}}–{{kr 5598}} for de to store. Varmt brugsvand er ikke med i tallene; det kommer oveni, når pumpen også laver vand til bruseren.</p>

<h2>35 eller 55 °C: radiatorer mod gulvvarme</h2>
<p>EU-mærket for luft-til-vand giver to sæt tal: 55 °C fremløb, som passer til radiatorer, og 35 °C, som passer til gulvvarme. ηs er sæsonvirkningsgraden — jo højere procent, jo mindre strøm for den samme varme. For S2125-8 er ydelsen 5 kW i begge tilfælde, så tallene kan sammenlignes direkte: 2.939 kWh ved 55 °C mod 2.196 kWh ved 35 °C, altså 743 kWh mindre med gulvvarme, svarende til {{kr 743}} om året ved månedens elpris. For S2125-14 er forskellen 1.289 kWh.</p>
<p>Har du radiatorer, kan du ofte komme under 55 °C det meste af året, fordi den høje temperatur kun er nødvendig på de koldeste dage. Pumpen styrer fremløbet efter udetemperaturen, og hver grad lavere giver lidt bedre virkningsgrad. Større radiatorer eller en ventilationskonvektor i det koldeste rum kan sænke temperaturen yderligere.</p>

<h2>Hvad mærket regner med, og hvad det betyder for dit hus</h2>
<p>Mærkets ydelse (Prated) er den varme, pumpen er dimensioneret til at levere ved −10 °C i EU's gennemsnitlige klima. Årsforbruget forudsætter, at huset har netop det varmebehov. Et velisoleret parcelhus på 140 m² har typisk et langt mindre varmebehov end et utæt hus fra 1960'erne af samme størrelse, og forbruget følger huset, ikke pumpen. Vælger du en for stor pumpe, kører den mere i korte intervaller; vælger du en for lille, hjælper elpatronen til på de koldeste dage, og den bruger én kWh strøm pr. kWh varme. Begge dele gør dit forbrug højere end mærket.</p>
<p>NIBE har også registreret S2125 i EU's kolde referenceklima. Ved 55 °C bruger S2125-8 her 4.055 kWh, S2125-12 6.189 kWh, S2125-14 8.981 kWh og S2125-16 9.606 kWh, med ηs på 123–141 %. Danmark ligger tættere på det gennemsnitlige klima, men tallet viser, hvad en lang frostvinter kan koste.</p>

<h2>S2125 mod en luft-til-luft varmepumpe</h2>
<p>Tallene er af en anden størrelse end for vægmodellerne. <a href="/varmepumpe/panasonic-hz/">Panasonic HZ25ZKE</a> bruger 845 kWh om året, og <a href="/varmepumpe/daikin-perfera/">Daikin Perfera FTXTM30A</a> 785 kWh. Men de varmer typisk ét rum og et par rum ved siden af, mens S2125 skal varme hele huset gennem radiatorer eller gulvvarme og erstatter et oliefyr, et gasfyr eller elvarme. Sammenlign derfor med det, du bruger nu: en luft-til-vand varmepumpe bruger kun en brøkdel af den energi, et oliefyr eller elvarme bruger til samme varme. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-vand/">luft-til-vand varmepumper</a>.</p>

<h2>Flyt varmen til de billige timer</h2>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. En luft-til-vand varmepumpe kan forvarme: hæv fremløbet eller indetemperaturen lidt i de billige timer, og lad den falde i spidsbelastningen. Gulvvarme i beton holder på varmen i mange timer og er velegnet til det. Varmtvandsbeholderen kan også varmes op i de billige timer, så pumpen ikke skal lave brugsvand, når strømmen er dyr. NIBEs styring kan følge timeprisen, hvis den er sat op til det. Se, hvordan varmepumper generelt bruger strøm, på <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger NIBE S2125-8?",
      answer:
        "2.939 kWh om året til rumvarme ved 55 °C (radiatorer) og 2.196 kWh ved 35 °C (gulvvarme) ifølge energimærket i EU's gennemsnitlige klima. Ved 55 °C svarer det til {{kr 2939}} om året ved månedens elpris.",
    },
    {
      question: "Hvilken energiklasse har NIBE S2125?",
      answer:
        "Ved 35 °C har alle fire størrelser A+++. Ved 55 °C har S2125-12, -14 og -16 A+++, mens S2125-8 har A++ med en sæsonvirkningsgrad på 146 %.",
    },
    {
      question: "Er varmt brugsvand med i forbruget for NIBE S2125?",
      answer:
        "Nej. Energimærket for udedelen dækker kun rumvarme. Varmt brugsvand kommer oveni og afhænger af husstandens forbrug og beholderen.",
    },
    {
      question: "Hvad er forskellen på S2125-14 og S2125-16?",
      answer:
        "Begge er regnet til 11 kW ved 55 °C og bruger næsten det samme: 5.598 og 5.571 kWh om året. S2125-16 kan levere mere i frost (14 kW i koldt klima mod 13 kW) og har en lydeffekt på 55 mod 52 dB(A).",
    },
    {
      question: "Hvor meget bruger S2125 i en kold vinter?",
      answer:
        "I EU's kolde referenceklima ved 55 °C bruger S2125-8 4.055 kWh, S2125-12 6.189 kWh og S2125-16 9.606 kWh om året. Danske vintre ligger tættere på det gennemsnitlige klima.",
    },
  ],
  sources: [
    { name: "EPREL — NIBE S2125-8, EU's energimærke", url: eprel("1089804") },
    { name: "EPREL — NIBE S2125-12, EU's energimærke", url: eprel("1089718") },
    { name: "EPREL — NIBE S2125-14, EU's energimærke", url: eprel("2395568") },
    { name: "EPREL — NIBE S2125-16, EU's energimærke", url: eprel("2146741") },
    { name: "NIBE — S2125 luft/vand-varmepumpe, produktside", url: "https://www.nibe.eu/en-eu/products/heat-pumps/air-water-heat-pumps/s2125" },
  ],
  variants: [
    { name: "S2125-8, 5 kW", watts: {}, annualKwh: 2939, energyClass: "A++", source: 0 },
    { name: "S2125-12, 8 kW", watts: {}, annualKwh: 4102, energyClass: "A+++", source: 1 },
    { name: "S2125-14, 11 kW", watts: {}, annualKwh: 5598, energyClass: "A+++", source: 2 },
    { name: "S2125-16, 11 kW", watts: {}, annualKwh: 5571, energyClass: "A+++", source: 3 },
  ],
  publishDate: "2027-01-04",
  updated: "2026-11-26",
  measuredBy: "til rumvarme ved 55 °C ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til rumvarme ved 55 °C fremløb (radiatorer) i EU's gennemsnitlige klima og ved pumpens dimensionerende ydelse, som producenten har registreret i EPREL. Varmt brugsvand er ikke med. Kilderne står nederst på siden.",
};

export default nibeS2125;
