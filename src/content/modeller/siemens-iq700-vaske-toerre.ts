import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/washerdriers2019/${reg}`;
const sheet = (m: string) => `https://media3.bsh-group.com/Documents/specsheet/da-DK/${m}.pdf`;

const siemensIq700VaskeToerre: ModelData = {
  slug: "siemens-iq700-vaske-toerre",
  parent: "vaskemaskine-med-toerretumbler",
  brand: "Siemens",
  name: "Siemens iQ700 vaske-tørremaskine",
  released: "2024-04",
  synonyms: [
    "siemens iq700 vaske-tørremaskine",
    "siemens wn54c2a0dn",
    "wn54c2a0dn strømforbrug",
    "siemens vaske tørremaskine strømforbrug",
    "siemens iq700 washer dryer",
    "siemens kombimaskine vask og tør",
    "siemens wn54g2a0dn",
    "siemens vasketørretumbler kwh",
  ],
  title: "Siemens iQ700 vaske-tørremaskine strømforbrug (2026) → kWh",
  description:
    "Siemens iQ700 vaske-tørremaskine WN54C2A0DN (10,5/6 kg): energimærkets kWh for vask med tørring og for vask alene, pris om året, og hvad tørringen koster.",
  intro:
    "Det er tørringen, der koster: en vask alene bruger 0,52 kWh, men vask og tørring i samme maskine 3,05 kWh — omkring seks gange så meget.",
  content: `<h2>Hvor meget strøm bruger Siemens iQ700 vaske-tørremaskine?</h2>
<p>Siemens' iQ700 vaske-tørremaskine hedder WN54C2A0DN i Danmark. Den vasker op til 10,5 kg og vasker og tørrer op til 6 kg i én omgang. En vaske-tørremaskine har to energiklasser på EU's energimærke: én for vask og tørring samlet og én for vask alene. Ifølge EU's produktdatabase EPREL og Siemens' danske datablad har WN54C2A0DN klasse D for vask og tørring og klasse A for vask alene.</p>
<p>Vask og tørring bruger 305 kWh pr. 100 omgange, altså 3,05 kWh, hver gang 6 kg tøj bliver vasket og tørret. Programmet tager 8 timer og 20 minutter ved fuld fyldning og bruger 75 liter vand. Med tre omgange om ugen bliver det omkring 476 kWh om året, svarende til {{kr 476}}. Vasker du uden at tørre, bruger maskinen 52 kWh pr. 100 vaske på eco 40-60, eller 0,52 kWh pr. vask, og 50 liter vand. Eco-vasken tager 4 timer.</p>

<h2>iQ700, iQ500 og iQ300 side om side</h2>
<p>Siemens sælger flere vaske-tørremaskiner i Danmark med næsten samme tal. Ifølge Siemens' danske datablade er WN54C2A0DN den eneste iQ700; WN54G-modellerne med samme kapacitet hører til iQ500.</p>
<table>
<thead><tr><th>Model</th><th>Serie</th><th>Kapacitet vask/tør</th><th>Vask og tør pr. 100</th><th>Vask pr. 100</th><th>Program vask og tør</th><th>Vand vask og tør</th></tr></thead>
<tbody>
<tr><td>WN54C2A0DN</td><td>iQ700</td><td>10,5/6 kg</td><td>305 kWh</td><td>52 kWh</td><td>8:20</td><td>75 l</td></tr>
<tr><td>WN54G2A0DN</td><td>iQ500</td><td>10,5/6 kg</td><td>306 kWh</td><td>51 kWh</td><td>8:40</td><td>82 l</td></tr>
<tr><td>WN54G20PDN</td><td>iQ500</td><td>10,5/6 kg</td><td>307 kWh</td><td>52 kWh</td><td>8:59</td><td>89 l</td></tr>
<tr><td>WN44A100DN</td><td>iQ300</td><td>9/5 kg</td><td>266 kWh</td><td>49 kWh</td><td>8:35</td><td>74 l</td></tr>
</tbody>
</table>
<p>Forbruget er stort set det samme i de tre store maskiner: 1–2 kWh pr. 100 omgange svarer til 2–3 kWh om året med tre omgange om ugen. Forskellen ligger i vand og tid. iQ700 bruger mindst vand og har det korteste program for vask og tørring, og den har Home Connect, så den kan startes og følges fra telefonen. WN44A100DN bruger mindre pr. omgang, men tørrer også kun 5 kg.</p>
<p>iQ700 har samme tal som <a href="/vaskemaskine-med-toerretumbler/bosch-serie-8-vaske-toerre/">Bosch Serie 8 vaske-tørremaskine</a>: 10,5/6 kg, 305 kWh pr. 100 omgange i klasse D, 75 liter og 8 timer og 20 minutter. De to mærker hører til samme koncern og deler meget af teknikken.</p>

<h2>Hvad koster tørringen?</h2>
<p>En vask alene koster 0,52 kWh, vask og tørring 3,05 kWh. Tørringen står altså for godt 2,5 kWh pr. omgang. Også vandforbruget stiger: vask og tørring bruger 75 liter mod 50 liter for vasken alene, så tørringen bruger både strøm og vand. En separat <a href="/varmepumpe-toerretumbler/">varmepumpetørretumbler</a> bruger typisk 0,8–1,3 kWh pr. tørring af 8–9 kg tøj ifølge energimærkerne — under halvdelen af, hvad tørringen koster her, og for mere tøj.</p>
<p>Har du plads til to maskiner, er en vaskemaskine og en varmepumpetørretumbler derfor billigere i drift end en vaske-tørremaskine. Har du ikke, er en vaske-tørremaskine et praktisk kompromis. Du behøver ikke tørre hver gang: hæng tøjet op, når det er muligt, og brug tørringen til håndklæder og sengetøj. Siemens' datablad nævner et enkelttørringsprogram, så du kan også bare tørre.</p>

<h2>10,5 kg vask, 6 kg tørring</h2>
<p>Maskinen kan vaske 10,5 kg, men kun tørre 6 kg ad gangen. Vasker du fuldt, skal du tage noget ud, før du tørrer, eller tørre i to omgange. Energimærkets tal for vask og tørring gælder for 6 kg tøj, vægtet mellem fuld og halv fyldning; en halv fyldning tager 4 timer og 20 minutter. Centrifugeringen er på op til 1.400 omdrejninger, centrifugeringsklasse B, og tøjet har 53 % restfugt efter vasken ifølge EPREL. Det er den fugt, tørringen skal fjerne. autoDry stopper tørringen ved den valgte tørhedsgrad; vælg skabstørt frem for ekstra tørt, når du kan.</p>

<h2>Hvornår er det billigst?</h2>
<p>En vask med tørring varer over 8 timer og bruger over 3 kWh, så det betyder meget, hvornår den kører. Elprisen skifter time for time, og nettariffen er typisk højest mellem 17 og 21. Med udskudt start eller Home Connect kan maskinen køre om natten, når prisen ofte er lavest. Ventetiden koster 4 W ifølge EPREL, slukket 0,5 W og netværksforbundet standby 2 W. Se <a href="/elpriser/">dagens timepriser</a>, og læs, <a href="/vaskemaskine-med-toerretumbler/">hvornår vaske-tørremaskinen er billigst at bruge</a>.</p>

<h2>Gode råd</h2>
<ul>
<li>Tør kun, når det er nødvendigt; vasken alene bruger en sjettedel af vask og tørring.</li>
<li>Tør højst 6 kg ad gangen.</li>
<li>Lad det lange program køre om natten med udskudt start.</li>
<li>Slå netværksforbindelsen fra, hvis du ikke bruger appen.</li>
</ul>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger Siemens WN54C2A0DN pr. vask og tørring?",
      answer: "3,05 kWh for en vask med tørring af 6 kg tøj ifølge energimærket (305 kWh pr. 100 omgange, klasse D). Det svarer til {{kr 3,05}} pr. omgang ved månedens elpris.",
    },
    {
      question: "Hvor meget bruger Siemens iQ700 til en vask uden tørring?",
      answer: "0,52 kWh pr. vask på eco 40-60 (52 kWh pr. 100 vaske, klasse A). Det svarer til {{kr 0,52}} pr. vask.",
    },
    {
      question: "Hvad koster Siemens iQ700 vaske-tørremaskine om året?",
      answer: "Med tre vaske med tørring om ugen bruger den omkring 476 kWh om året, svarende til {{kr 476}} ved månedens elpris.",
    },
    {
      question: "Er WN54G2A0DN også en iQ700?",
      answer: "Nej. Ifølge Siemens' danske datablad er WN54G2A0DN en iQ500. Den har næsten samme forbrug — 306 kWh pr. 100 omgange — men bruger mere vand og har et længere program.",
    },
    {
      question: "Er en vaske-tørremaskine dyrere end to maskiner?",
      answer: "Ja, i drift. Tørringen koster godt 2,5 kWh pr. omgang i iQ700, mens en varmepumpetørretumbler typisk bruger 0,8–1,3 kWh pr. tørring ifølge energimærkerne.",
    },
  ],
  sources: [
    { name: "EPREL — Siemens WN54C2A0DN (iQ700), EU's energimærke", url: eprel("1450876") },
    { name: "Siemens — WN54C2A0DN, produktdatablad (dansk)", url: sheet("WN54C2A0DN") },
    { name: "EPREL — Siemens WN54G2A0DN (iQ500), EU's energimærke", url: eprel("1292658") },
    { name: "Siemens — WN54G2A0DN, produktdatablad (dansk)", url: sheet("WN54G2A0DN") },
    { name: "EPREL — Siemens WN54G20PDN (iQ500), EU's energimærke", url: eprel("2388829") },
    { name: "EPREL — Siemens WN44A100DN (iQ300), EU's energimærke", url: eprel("2458737") },
  ],
  variants: [
    { name: "10,5/6 kg (WN54C2A0DN)", watts: { off: 0.5 }, kwhPer100Cycles: 305, energyClass: "D", source: 0 },
  ],
  publishDate: "2026-12-04",
  updated: "2026-11-22",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Energimærket måler forbruget for en fuld vask og tørring (eco 40-60 og tørring til skabstørt) som et vægtet gennemsnit af fuld og halv fyldning; slukket er effekten i watt. Kilderne står nederst på siden.",
};

export default siemensIq700VaskeToerre;
