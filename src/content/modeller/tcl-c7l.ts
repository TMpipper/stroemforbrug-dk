import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const tclC7l: ModelData = {
  slug: "tcl-c7l",
  parent: "tv",
  brand: "TCL",
  name: "TCL C7L og C7K",
  released: "2026-03",
  synonyms: [
    "tcl c7l strømforbrug",
    "tcl c7k strømforbrug",
    "tcl 65c7l watt",
    "tcl 55c7k watt",
    "tcl c7 mini led forbrug",
    "tcl 75c7l strømforbrug",
    "tcl c7k 2025 watt",
  ],
  title: "TCL C7L strømforbrug (2026) → watt fra 50 til 98 tommer",
  description:
    "TCL C7L fra 2026 og C7K fra 2025 i 50 til 98 tommer: watt i SDR og HDR fra EU-energimærket, kWh om året og hvorfor 85 tommer bruger mindre end 75.",
  intro:
    "C7L bruger 64 W som 55\" og 85 W som 65\" i standardbilledet, 12–31 W mindre end sidste års C7K. I HDR stiger forbruget til næsten fire gange så meget.",
  content: `<h2>Hvor mange watt bruger TCL C7L?</h2>
<p>C7-serien er TCL's tv med quantum dots og Mini LED-baggrundslys, placeret mellem C6 og <a href="/tv/tcl-c8l/">TCL C8L</a>. 2026-modellen hedder C7L og findes i 55", 65", 75", 85" og 98". Forgængeren C7K fra 2025 sælges stadig og fandtes også som 50". I EU's produktdatabase EPREL er tv'erne registreret med et suffiks efter modelnavnet (X1, X7, X8 og flere), og alle de udgaver af samme størrelse, vi har fundet, har de samme tal i standardbilledet.</p>
<p>I standardbilledet (SDR) bruger C7L 64 W som 55", 85 W som 65", 107 W som 75", 103 W som 85" og 124 W som 98". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 120 kWh om året, svarende til {{kr 120}}, og 65" omkring 159 kWh, svarende til {{kr 159}}.</p>
<table>
<thead><tr><th>Størrelse</th><th>C7L (2026) SDR</th><th>C7L HDR</th><th>C7K (2025) SDR</th><th>C7K HDR</th></tr></thead>
<tbody>
<tr><td>50"</td><td>–</td><td>–</td><td>57 W</td><td>163 W</td></tr>
<tr><td>55"</td><td>64 W</td><td>250 W</td><td>76 W</td><td>242 W</td></tr>
<tr><td>65"</td><td>85 W</td><td>300 W</td><td>100 W</td><td>250 W</td></tr>
<tr><td>75"</td><td>107 W</td><td>370 W</td><td>128 W</td><td>365 W</td></tr>
<tr><td>85"</td><td>103 W</td><td>385 W</td><td>103 W</td><td>390 W</td></tr>
<tr><td>98"</td><td>124 W</td><td>520 W</td><td>155 W</td><td>500 W</td></tr>
</tbody>
</table>

<h2>85 tommer bruger mindre end 75 tommer</h2>
<p>Det overraskende i tabellen er 85". Både C7L og C7K bruger 103 W som 85", mindre end 75"-udgaverne med 107 og 128 W. Derfor får 85" energiklasse D, mens 75" står i E (C7L) eller F (C7K). Skal du vælge mellem de to størrelser, er strømmen altså et argument for den store skærm, i hvert fald i standardbilledet. Med vores profil bruger 85" C7L omkring 191 kWh om året, svarende til {{kr 191}}, mod 199 kWh for 75".</p>
<p>98" C7L bruger 124 W, og det er kun 21 W mere end 85". Til en skærm af den størrelse er det beskedent: omkring 230 kWh om året, svarende til {{kr 230}}.</p>

<h2>C7L mod C7K: den nye bruger mindre</h2>
<p>I standardbilledet er C7L mere sparsom end C7K i alle størrelser undtagen 85", hvor de er ens. Som 55" sparer C7L 12 W, som 65" 15 W, som 75" 21 W og som 98" 31 W. Med vores profil er det omkring 22 kWh om året for 55", 27 kWh for 65" og 38 kWh for 75", svarende til {{kr 38}}. For 98" er forskellen omkring 56 kWh om året, svarende til {{kr 56}}. Finder du C7K billigt, er det værd at regne forskellen med over tv'ets levetid.</p>

<h2>HDR: op til fire gange så meget</h2>
<p>I HDR skruer C7L meget op for baggrundslyset. Energimærkets HDR-måling giver 250–520 W, 3,5–4,2 gange så meget som i standardbilledet. Her bruger C7L endda mere end C7K i fire af fem størrelser, for eksempel 300 mod 250 W som 65". En film på to timer i HDR på 65" C7L bruger omkring 0,6 kWh, svarende til {{kr 0,6}}. Ser du meget HDR, er det dette tal, der bestemmer regningen, ikke SDR-tallet.</p>
<p>Høj lysstyrke i HDR er netop det, Mini LED-tv bliver solgt på. Vil du holde forbruget nede, kan du vælge en mørkere HDR-indstilling eller slå tv'ets dynamiske lysstyrke fra i lyse scener.</p>

<h2>C7L mod andre tv på siden</h2>
<p>I standardbilledet har C7L præcis de samme tal som C6K Pro-udgaverne af <a href="/tv/tcl-c6k/">TCL C6K</a>: 64, 85, 107 og 103 W fra 55" til 85". Det dyrere C8L bruger det samme som 55" og mindre som 65" (67 W) og 75" (85 W). Som 55" og 65" bruger <a href="/tv/samsung-qn80h/">Samsung QN80H</a> også 64 og 85 W, så C7L ligger på niveau med Samsungs Neo QLED i mellemklassen. <a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> bruger 63 W som 65", omkring 40 kWh mindre om året end C7L.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li>Brug standard- eller eco-billedet og lad lyssensoren styre lysstyrken; det er sådan, energimærket er målt.</li>
<li>Slå HDR fra på almindelige tv-kanaler, hvis tv'et selv skifter til et lysere billede.</li>
<li>Slå netværksstandby fra, hvis du ikke tænder tv'et fra mobilen; det sparer omkring 10 kWh om året. Se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger TCL C7L?",
      answer:
        "Ifølge EU's energimærke 64 W som 55\", 85 W som 65\", 107 W som 75\", 103 W som 85\" og 124 W som 98\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at have et 65\" TCL C7L tændt?",
      answer:
        "Med fem timers tv om dagen og standby resten af døgnet bruger 65\" omkring 159 kWh om året, svarende til {{kr 159}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger C7L mindre strøm end C7K?",
      answer:
        "Ja, i standardbilledet: 12 W mindre som 55\", 15 W som 65\", 21 W som 75\" og 31 W som 98\". Som 85\" bruger begge 103 W.",
    },
    {
      question: "Hvorfor bruger 85\" C7L mindre end 75\"?",
      answer:
        "Det oplyser TCL ikke, men tallene i EU's database er sådan: 103 W for 85\" mod 107 W for 75\". 85\" får derfor energiklasse D.",
    },
    {
      question: "Hvad bruger TCL C7L i HDR?",
      answer: "250–520 W afhængigt af størrelse ifølge energimærkets HDR-måling, 3,5–4,2 gange så meget som i standardbilledet.",
    },
  ],
  sources: [
    { name: "EPREL — TCL 55C7LX7, EU's energimærke", url: eprel("2662295") },
    { name: "EPREL — TCL 65C7LX8, EU's energimærke", url: eprel("2662296") },
    { name: "EPREL — TCL 75C7LX7, EU's energimærke", url: eprel("2662297") },
    { name: "EPREL — TCL 85C7LX8, EU's energimærke", url: eprel("2662298") },
    { name: "EPREL — TCL 98C7LX7, EU's energimærke", url: eprel("2662299") },
    { name: "EPREL — TCL 50C7KX7 (2025), EU's energimærke", url: eprel("2271089") },
    { name: "EPREL — TCL 55C7KX7 (2025), EU's energimærke", url: eprel("2271098") },
    { name: "EPREL — TCL 65C7KX7 (2025), EU's energimærke", url: eprel("2271108") },
    { name: "EPREL — TCL 75C7KX7 (2025), EU's energimærke", url: eprel("2271122") },
    { name: "EPREL — TCL 85C7KX8 (2025), EU's energimærke", url: eprel("2271134") },
    { name: "EPREL — TCL 98C7KX7 (2025), EU's energimærke", url: eprel("2204593") },
  ],
  variants: [
    { name: "C7L 55\" (55C7L)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 0 },
    { name: "C7L 65\" (65C7L)", watts: { standby: 0.5, on: 85 }, energyClass: "E", source: 1 },
    { name: "C7L 75\" (75C7L)", watts: { standby: 0.5, on: 107 }, energyClass: "E", source: 2 },
    { name: "C7L 85\" (85C7L)", watts: { standby: 0.5, on: 103 }, energyClass: "D", source: 3 },
    { name: "C7L 98\" (98C7L)", watts: { standby: 0.5, on: 124 }, energyClass: "D", source: 4 },
    { name: "C7K 50\" 2025 (50C7K)", watts: { standby: 0.5, on: 57 }, energyClass: "F", source: 5 },
    { name: "C7K 55\" 2025 (55C7K)", watts: { standby: 0.5, on: 76 }, energyClass: "F", source: 6 },
    { name: "C7K 65\" 2025 (65C7K)", watts: { standby: 0.5, on: 100 }, energyClass: "F", source: 7 },
    { name: "C7K 75\" 2025 (75C7K)", watts: { standby: 0.5, on: 128 }, energyClass: "F", source: 8 },
    { name: "C7K 85\" 2025 (85C7K)", watts: { standby: 0.5, on: 103 }, energyClass: "D", source: 9 },
    { name: "C7K 98\" 2025 (98C7K)", watts: { standby: 0.5, on: 155 }, energyClass: "E", source: 10 },
  ],
  publishDate: "2026-12-30",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er TCL's egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. Udgaverne med forskellige suffikser har de samme SDR-tal; for 85\" C7L står HDR-tallet som 385 eller 396 W afhængigt af udgaven. Kilderne står nederst på siden.",
};

export default tclC7l;
