import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/airconditioners/${reg}`;

const mitsubishiHero: ModelData = {
  slug: "mitsubishi-hero",
  parent: "varmepumpe",
  group: "luft-til-luft",
  brand: "Mitsubishi Electric",
  name: "Mitsubishi Electric Hero 2.0",
  released: "2019-12",
  synonyms: [
    "mitsubishi hero 2.0 strømforbrug",
    "mitsubishi hero varmepumpe",
    "mitsubishi ln25 strømforbrug",
    "mitsubishi ln35",
    "mitsubishi ln50",
    "msz-ln25vg2",
    "muz-ln25vghz2",
    "mitsubishi electric luft til luft strømforbrug",
  ],
  title: "Mitsubishi Hero 2.0 strømforbrug (2026) → kWh pr. størrelse",
  description:
    "Mitsubishi Electric Hero 2.0 (MSZ-LN) luft-til-luft varmepumpe i tre størrelser: energimærkets kWh om året til varme, SCOP i koldt klima og pris.",
  intro:
    "LN25 og LN35 har energiklasse A+++, mens LN50 falder til A++ med SCOP 4,6 — den store udgave betaler for sin ekstra varme med en lavere virkningsgrad.",
  content: `<h2>Hvor meget strøm bruger Mitsubishi Electric Hero 2.0?</h2>
<p>Hero 2.0 er Mitsubishi Electrics nordiske udgave af vægmodellen MSZ-LN, sat sammen med udedelen MUZ-LN…VGHZ2, hvor HZ står for Hyper Heating — udedelen er bygget til at holde varmeydelsen oppe i frost. Indedelen findes i hvid, sølv, rød og sort (W, V, R og B), og alle farver har samme tal i EU's produktdatabase EPREL. Siden bruger de hvide udgaver.</p>
<table>
<thead><tr><th>Model</th><th>Varmelast (Pdesignh)</th><th>SCOP gennemsnit</th><th>kWh om året</th><th>Klasse</th><th>SCOP koldt klima</th><th>kWh koldt klima</th></tr></thead>
<tbody>
<tr><td>LN25VG2</td><td>3,2 kW</td><td>5,2</td><td>861</td><td>A+++</td><td>4,0 (4,7 kW)</td><td>2.466</td></tr>
<tr><td>LN35VG2</td><td>4,0 kW</td><td>5,1</td><td>1.098</td><td>A+++</td><td>3,9 (5,9 kW)</td><td>3.162</td></tr>
<tr><td>LN50VG2</td><td>6,0 kW</td><td>4,6</td><td>1.826</td><td>A++</td><td>3,4 (8,8 kW)</td><td>5.299</td></tr>
</tbody>
</table>
<p>Ved månedens elpris koster energimærkets årsforbrug {{kr 861}} for LN25, {{kr 1098}} for LN35 og {{kr 1826}} for LN50. Tallene er kun til opvarmning; køling har sit eget mærke.</p>

<h2>Større pumpe, lavere virkningsgrad</h2>
<p>Energimærket regner med, at pumpen skal levere sin varmelast ved −10 °C og i alt svarende til 1.400 timer ved fuld last over sæsonen. For LN25 giver det omkring 4.480 kWh varme om året, for LN35 5.600 kWh og for LN50 8.400 kWh. Varmen stiger altså i takt med størrelsen, men forbruget stiger hurtigere for LN50, fordi SCOP falder fra 5,2 og 5,1 til 4,6. LN50 leverer 1,9 gange så meget varme som LN25 og bruger 2,1 gange så meget strøm.</p>
<p>Det er typisk for vægmodeller: den store størrelse presser mere varme gennem samme type indedel og kører oftere ved høj last, hvor virkningsgraden er lavere. Har du et stort, åbent rum, er LN50 stadig det rigtige valg frem for en LN35, der kører for fuld kraft hele vinteren. Men har du to adskilte rum, er to mindre pumper med SCOP over 5 værd at regne på, fordi varmen så ikke skal presses fra ét rum ud i resten af huset.</p>

<h2>Hvad tallet for koldt klima fortæller</h2>
<p>Mitsubishi Electric har registreret alle tre størrelser i EU's kolde referenceklima, dimensioneret ved −22 °C. Her er sæsonen længere og varmelasten større (4,7, 5,9 og 8,8 kW), og SCOP falder til 4,0, 3,9 og 3,4. Derfor står der 2.466–5.299 kWh om året. Tallet er ikke en prognose for en dansk vinter, men det viser, hvor meget virkningsgraden taber i frost. LN25 taber 1,2 point fra gennemsnit til koldt klima, LN50 1,2 point fra et lavere udgangspunkt.</p>
<p>Danmark ligger tættere på mærkets gennemsnitlige klima. I en mild vinter kan dit forbrug lande under mærket; i en lang periode med frost trækker både større varmebehov og lavere SCOP i den anden retning.</p>

<h2>Hero 2.0 mod andre vægmodeller</h2>
<p><a href="/varmepumpe/panasonic-hz/">Panasonic HZ Flagship</a> har samme varmelast på 3,2 kW i HZ25ZKE og bruger 845 kWh i gennemsnitligt klima mod 861 kWh for LN25 — 16 kWh om året til forskel, svarende til {{kr 16}}. I koldt klima er forskellen større: 2.246 mod 2.466 kWh, altså 220 kWh. Til gengæld har Hero 2.0 en større udgave på 6,0 kW, som HZ ikke findes i.</p>
<p>Mitsubishi Electric har sendt efterfølgeren LN…VG3 med udedel VGHZ3 på markedet med næsten de samme tal i EPREL: 860 kWh for LN25, 1.098 kWh for LN35 og 1.826 kWh for LN50. Står der VG3 på din model, gælder siden stort set også for den.</p>

<h2>Som supplement — og i de billige timer</h2>
<p>En luft-til-luft varmepumpe varmer det rum, den hænger i, og de nærmeste rum med åbne døre. I de fleste danske huse er den et supplement til fjernvarme, olie, elradiatorer eller brændeovn, og så bruger den mindre end mærkets tal, fordi de andre kilder tager en del af varmen. Som eneste varmekilde i et sommerhus eller et hus med åben planløsning kan den nå mærket eller mere.</p>
<p>Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Du kan ikke slukke varmepumpen i de dyre timer, men du kan forvarme: hæv indetemperaturen en grad i de billige timer om natten og midt på dagen, og lad den falde lidt i spidsbelastningen. Huset fungerer som lager, og jo tungere vægge og gulve, jo mere kan du flytte. Læs mere om typen på siden om <a href="/varmepumpe/luft-til-luft/">luft-til-luft varmepumper</a> og om varmepumper generelt på <a href="/varmepumpe/">varmepumpens strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Mitsubishi Hero 2.0 LN25?",
      answer:
        "861 kWh om året til opvarmning ifølge energimærket i EU's gennemsnitlige klima, med SCOP 5,2 og energiklasse A+++. Det svarer til {{kr 861}} om året ved månedens elpris.",
    },
    {
      question: "Hvorfor har LN50 en lavere energiklasse end LN25?",
      answer:
        "LN50 regnes til en varmelast på 6,0 kW og har SCOP 4,6 mod 5,2 for LN25. Den leverer næsten dobbelt så meget varme, men bruger lidt mere end dobbelt så meget strøm, og det giver A++ i stedet for A+++.",
    },
    {
      question: "Hvor meget bruger Hero 2.0 i koldt klima?",
      answer:
        "I EU's kolde referenceklima (−22 °C) er tallene 2.466 kWh for LN25, 3.162 kWh for LN35 og 5.299 kWh for LN50 om året. Varmelasten er større og SCOP lavere end i det gennemsnitlige klima.",
    },
    {
      question: "Har farven på indedelen betydning for strømforbruget?",
      answer: "Nej. Hvid, sølv, rød og sort indedel (W, V, R og B) har samme SCOP, energiklasse og årsforbrug i EPREL.",
    },
    {
      question: "Gælder tallene også for MSZ-LN25VG3?",
      answer:
        "Næsten. LN25VG3 med udedel MUZ-LN25VGHZ3 bruger 860 kWh om året mod 861 kWh for VG2, og LN35 og LN50 har de samme tal som VG2 i det gennemsnitlige klima.",
    },
  ],
  sources: [
    { name: "EPREL — Mitsubishi Electric MSZ-LN25VG2W / MUZ-LN25VGHZ2, EU's energimærke", url: eprel("202762") },
    { name: "EPREL — Mitsubishi Electric MSZ-LN35VG2W / MUZ-LN35VGHZ2, EU's energimærke", url: eprel("202770") },
    { name: "EPREL — Mitsubishi Electric MSZ-LN50VG2W / MUZ-LN50VGHZ2, EU's energimærke", url: eprel("1352772") },
    { name: "EPREL — Mitsubishi Electric MSZ-LN25VG3W / MUZ-LN25VGHZ3, EU's energimærke", url: eprel("2496441") },
    { name: "EPREL — Mitsubishi Electric MSZ-LN35VG3W / MUZ-LN35VGHZ3, EU's energimærke", url: eprel("2496449") },
    { name: "EPREL — Mitsubishi Electric MSZ-LN50VG3W / MUZ-LN50VGHZ3, EU's energimærke", url: eprel("2496457") },
  ],
  variants: [
    { name: "LN25VG2, 3,2 kW", watts: {}, annualKwh: 861, energyClass: "A+++", source: 0 },
    { name: "LN35VG2, 4,0 kW", watts: {}, annualKwh: 1098, energyClass: "A+++", source: 1 },
    { name: "LN50VG2, 6,0 kW", watts: {}, annualKwh: 1826, energyClass: "A++", source: 2 },
  ],
  publishDate: "2027-01-03",
  updated: "2026-11-26",
  measuredBy: "til opvarmning ifølge EU's energimærke i gennemsnitligt klima (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærkets årsforbrug til opvarmning i EU's gennemsnitlige klima ved pumpens dimensionerende varmelast (Pdesignh), som producenten har registreret i EPREL. Kilderne står nederst på siden.",
};

export default mitsubishiHero;
