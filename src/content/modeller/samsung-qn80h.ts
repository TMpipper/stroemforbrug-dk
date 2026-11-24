import type { ModelData } from "@/lib/models";

const eprel = (reg: string) => `https://eprel.ec.europa.eu/screen/product/electronicdisplays/${reg}`;

const samsungQn80h: ModelData = {
  slug: "samsung-qn80h",
  parent: "tv",
  brand: "Samsung",
  name: "Samsung QN80H og QN85F Neo QLED",
  released: "2026-04",
  synonyms: [
    "samsung qn80h strømforbrug",
    "samsung qn85f strømforbrug",
    "tq55qn80hau watt",
    "tq65qn80hau strømforbrug",
    "samsung neo qled qn80h watt",
    "samsung qn80f forbrug",
    "qn85f watt",
  ],
  title: "Samsung QN80H strømforbrug (2026) → watt for QN80H og QN85F",
  description:
    "Samsung Neo QLED QN80H fra 2026 og QN85F og QN80F fra 2025: watt i SDR og HDR fra EU-energimærket, kWh om året og hvad den nye årgang sparer.",
  intro:
    "Som 55\" bruger 2026-udgaven QN80H 64 W, 12 W mindre end sidste års QN80F og 11 W mindre end QN85F. I HDR bruger den til gengæld mere end tre gange så meget som i standardbilledet.",
  content: `<h2>Hvor mange watt bruger Samsung QN80H?</h2>
<p>QN80H er Samsungs Neo QLED-tv for 2026 i mellemklassen, et trin under <a href="/tv/samsung-qn90f/">Samsung QN90F</a>. Skærmen er en LCD-skærm med quantum dots og Mini LED-baggrundslys. Den findes fra 50" til 100", og i EU's produktdatabase EPREL har den nordiske udgave (TQ…HAU) de samme tal som de øvrige europæiske udgaver af samme størrelse. Ved siden af sælges stadig 2025-modellerne QN85F og QN80F, som vi også har taget med her, fordi de står side om side med den nye.</p>
<p>I standardbilledet (SDR) bruger QN80H 65 W som 50", 64 W som 55", 85 W som 65", 106 W som 75", 129 W som 85" og 159 W som 100". Standby er 0,5 W og netværksstandby 2 W. Med fem timers tv om dagen og standby resten af døgnet bruger 55" omkring 120 kWh om året, svarende til {{kr 120}}, og 65" omkring 159 kWh, svarende til {{kr 159}}.</p>
<table>
<thead><tr><th>Model</th><th>SDR</th><th>HDR</th><th>Klasse (SDR)</th></tr></thead>
<tbody>
<tr><td>QN80H 50" (2026)</td><td>65 W</td><td>168 W</td><td>F</td></tr>
<tr><td>QN80H 55" (2026)</td><td>64 W</td><td>204 W</td><td>E</td></tr>
<tr><td>QN80H 65" (2026)</td><td>85 W</td><td>245 W</td><td>E</td></tr>
<tr><td>QN80H 75" (2026)</td><td>106 W</td><td>288 W</td><td>E</td></tr>
<tr><td>QN80H 85" (2026)</td><td>129 W</td><td>336 W</td><td>E</td></tr>
<tr><td>QN80H 100" (2026)</td><td>159 W</td><td>426 W</td><td>E</td></tr>
<tr><td>QN85F 55" (2025)</td><td>75 W</td><td>166 W</td><td>F</td></tr>
<tr><td>QN85F 65" (2025)</td><td>96 W</td><td>218 W</td><td>F</td></tr>
<tr><td>QN85F 75" (2025)</td><td>115 W</td><td>258 W</td><td>F</td></tr>
<tr><td>QN85F 85" (2025)</td><td>135 W</td><td>329 W</td><td>F</td></tr>
<tr><td>QN80F 55" (2025)</td><td>76 W</td><td>217 W</td><td>F</td></tr>
<tr><td>QN80F 65" (2025)</td><td>101 W</td><td>272 W</td><td>F</td></tr>
</tbody>
</table>

<h2>55 tommer bruger mindre end 50 tommer</h2>
<p>En detalje i tabellen er værd at hæfte sig ved: 55" QN80H bruger 64 W og dermed en smule mindre end 50" med 65 W. Den store skærm får derfor energiklasse E, mens den lille står i F. Står du mellem de to størrelser, er strømmen altså ikke et argument for den mindre skærm.</p>
<p>Fra 55" til 65" stiger forbruget med 21 W, og derefter med 21–30 W for hvert spring op. 100" bruger 159 W, og det svarer til omkring 294 kWh om året med vores profil, svarende til {{kr 294}}. Det er mere end dobbelt så meget som 55", men skærmarealet er også mere end tre gange så stort.</p>

<h2>Hvad sparer 2026-modellen?</h2>
<p>I standardbilledet er QN80H tydeligt mere sparsom end forgængeren. Som 55" bruger den 12 W mindre end QN80F, og som 65" 16 W mindre. Med vores profil er det omkring 22 kWh om året for 55", svarende til {{kr 22}}, og omkring 29 kWh for 65", svarende til {{kr 29}}. Over et tv's levetid på otte til ti år bliver det til en mærkbar sum, selvom forskellen pr. måned er lille.</p>
<p>QN85F ligger tæt på QN80F i standardbilledet: 75 W som 55" og 96 W som 65". Som 65" bruger QN85F omkring 179 kWh om året mod 159 kWh for QN80H, en forskel på omkring 20 kWh, svarende til {{kr 20}}.</p>

<h2>HDR: her vender billedet</h2>
<p>Energimærkets HDR-måling viser, hvad tv'et bruger, når det skruer op for lysstyrken til film og serier i HDR. Her bruger QN80H 168–426 W, 2,6–3,2 gange så meget som i standardbilledet. Og her klarer den ældre QN85F sig bedre end QN80H i de størrelser, der findes i begge serier: 166 W mod 204 W som 55" og 218 W mod 245 W som 65". QN80H er altså mere sparsom til almindeligt tv, mens QN85F trækker mindre, når der er HDR på skærmen.</p>
<p>En film på to timer i HDR på 65" QN80H bruger omkring 0,49 kWh, svarende til {{kr 0,49}}. Ser du mest streaming i HDR, er det dette tal, der tæller, og så er forskellen mellem årgangene mindre, end SDR-tallene antyder.</p>

<h2>QN80H mod andre tv på siden</h2>
<p>Som 55" og 65" bruger QN80H stort set det samme som <a href="/tv/hisense-u7s/">Hisense U7S</a> med 64 og 84 W. Den dyrere QN90F bruger 76 W som 55" og 89 W som 65", altså mere end QN80H i standardbilledet. Mod 55" <a href="/tv/samsung-crystal-uhd/">Samsung Crystal UHD U8000H</a> med 77 W sparer QN80H omkring 24 kWh om året. Vil du ned i forbrug som 65", bruger <a href="/tv/sony-bravia-7-ii/">Sony Bravia 7 II</a> 63 W, omkring 40 kWh mindre om året end QN80H.</p>

<h2>Standby og indstillinger</h2>
<p>Standby er kun 0,5 W, men lader du tv'et stå i netværksstandby, så det kan tændes fra mobilen eller med stemmen, bruger det 2 W. Med 19 timer om dagen i standby giver det omkring 14 kWh om året mod 3,5 kWh, en forskel på omkring 10 kWh, svarende til {{kr 10}}.</p>
<ul>
<li>Brug eco- eller standardbilledet, og lad lyssensoren styre lysstyrken.</li>
<li>Slå HDR-tilstanden fra, hvis tv'et skifter til et lysere billede på almindelige kanaler.</li>
<li>Sluk netværksstandby, hvis du ikke bruger fjernstart; se mere om <a href="/standby/">standbyforbrug</a>.</li>
</ul>
<p>Se flere modeller på siden om <a href="/tv/">tv'ers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Samsung QN80H?",
      answer:
        "Ifølge EU's energimærke 65 W som 50\", 64 W som 55\", 85 W som 65\", 106 W som 75\", 129 W som 85\" og 159 W som 100\" i standardbilledet. Standby er 0,5 W.",
    },
    {
      question: "Hvad koster det at have et 65\" QN80H tændt?",
      answer:
        "Med fem timers tv om dagen og standby resten af døgnet bruger 65\" omkring 159 kWh om året, svarende til {{kr 159}} ved månedens elpris på {{pris_kwh}}.",
    },
    {
      question: "Bruger QN80H mindre strøm end QN85F?",
      answer:
        "I standardbilledet ja: 64 mod 75 W som 55\" og 85 mod 96 W som 65\". I HDR bruger QN85F mindre, 166 mod 204 W som 55\" og 218 mod 245 W som 65\".",
    },
    {
      question: "Hvad bruger Samsung QN80H i HDR?",
      answer: "168–426 W afhængigt af størrelse ifølge energimærkets HDR-måling, 2,6–3,2 gange så meget som i standardbilledet.",
    },
    {
      question: "Hvilken energiklasse har Samsung QN80H?",
      answer: "E for 55\" til 100\" og F for 50\" i standardbilledet. QN85F og QN80F fra 2025 står i F. I HDR står alle i G.",
    },
  ],
  sources: [
    { name: "EPREL — Samsung TQ50QN80HAU, EU's energimærke", url: eprel("2571546") },
    { name: "EPREL — Samsung TQ55QN80HAU, EU's energimærke", url: eprel("2571560") },
    { name: "EPREL — Samsung TQ65QN80HAU, EU's energimærke", url: eprel("2571582") },
    { name: "EPREL — Samsung TQ75QN80HAU, EU's energimærke", url: eprel("2571602") },
    { name: "EPREL — Samsung TQ85QN80HAU, EU's energimærke", url: eprel("2571632") },
    { name: "EPREL — Samsung TQ100QN80HU, EU's energimærke", url: eprel("2571520") },
    { name: "EPREL — Samsung TQ55QN85FAU (2025), EU's energimærke", url: eprel("2204973") },
    { name: "EPREL — Samsung TQ65QN85FAU (2025), EU's energimærke", url: eprel("2204972") },
    { name: "EPREL — Samsung TQ75QN85FAU (2025), EU's energimærke", url: eprel("2204971") },
    { name: "EPREL — Samsung TQ85QN85FAU (2025), EU's energimærke", url: eprel("2204970") },
    { name: "EPREL — Samsung TQ55QN80FAU (2025), EU's energimærke", url: eprel("2204934") },
    { name: "EPREL — Samsung TQ65QN80FAU (2025), EU's energimærke", url: eprel("2204930") },
  ],
  variants: [
    { name: "QN80H 50\" (TQ50QN80HAU)", watts: { standby: 0.5, on: 65 }, energyClass: "F", source: 0 },
    { name: "QN80H 55\" (TQ55QN80HAU)", watts: { standby: 0.5, on: 64 }, energyClass: "E", source: 1 },
    { name: "QN80H 65\" (TQ65QN80HAU)", watts: { standby: 0.5, on: 85 }, energyClass: "E", source: 2 },
    { name: "QN80H 75\" (TQ75QN80HAU)", watts: { standby: 0.5, on: 106 }, energyClass: "E", source: 3 },
    { name: "QN80H 85\" (TQ85QN80HAU)", watts: { standby: 0.5, on: 129 }, energyClass: "E", source: 4 },
    { name: "QN80H 100\" (TQ100QN80HU)", watts: { standby: 0.5, on: 159 }, energyClass: "E", source: 5 },
    { name: "QN85F 55\" 2025 (TQ55QN85FAU)", watts: { standby: 0.5, on: 75 }, energyClass: "F", source: 6 },
    { name: "QN85F 65\" 2025 (TQ65QN85FAU)", watts: { standby: 0.5, on: 96 }, energyClass: "F", source: 7 },
    { name: "QN85F 75\" 2025 (TQ75QN85FAU)", watts: { standby: 0.5, on: 115 }, energyClass: "F", source: 8 },
    { name: "QN85F 85\" 2025 (TQ85QN85FAU)", watts: { standby: 0.5, on: 135 }, energyClass: "F", source: 9 },
    { name: "QN80F 55\" 2025 (TQ55QN80FAU)", watts: { standby: 0.5, on: 76 }, energyClass: "F", source: 10 },
    { name: "QN80F 65\" 2025 (TQ65QN80FAU)", watts: { standby: 0.5, on: 101 }, energyClass: "F", source: 11 },
  ],
  publishDate: "2026-12-29",
  updated: "2026-11-24",
  measuredBy: "ifølge EU's energimærke (producentens oplysninger i EU-databasen EPREL)",
  figuresNote:
    "Tallene er Samsungs egne oplysninger til EU's energimærke: forbruget i standardbilledet (SDR) i den billedindstilling, tv'et leveres med, og standby. De nordiske udgaver (TQ) har de samme tal som de øvrige europæiske udgaver af samme størrelse. Kilderne står nederst på siden.",
};

export default samsungQn80h;
