import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const microsoftSurfaceLaptop: ModelData = {
  slug: "microsoft-surface-laptop",
  parent: "laptop",
  brand: "Microsoft",
  name: "Microsoft Surface Laptop",
  released: "2026-10",
  synonyms: [
    "surface laptop strømforbrug",
    "surface laptop 8th edition watt",
    "surface laptop 7 strømforbrug",
    "surface laptop 13 tommer forbrug",
    "microsoft surface laptop batteri wh",
    "surface laptop snapdragon watt",
    "surface laptop ultra strømforbrug",
  ],
  title: "Surface Laptop strømforbrug (2026) → watt for 13, 13,8 og 15",
  description:
    "Microsoft Surface Laptop 13, 13,8 og 15 tommer med Snapdragon og Intel: watt i tomgang og dvale fra ENERGY STAR, kWh om året og prisen for en opladning.",
  intro:
    "Den lille 13\"-udgave med Snapdragon X Plus bruger mindst, 2,3 W i tomgang. 8. udgave har halveret dvaleforbruget i forhold til 7. udgave med Snapdragon.",
  content: `<h2>Hvor mange watt bruger Surface Laptop?</h2>
<p>Surface Laptop er Microsofts egen bærbare. Den findes i tre størrelser: en lille 13" fra 2025, 13,8" og 15". De to store kom som 7. udgave i 2024 og som 8. udgave i 2026, begge med enten Qualcomm Snapdragon eller Intel Core Ultra. Øverst ligger den nye Surface Laptop Ultra med et 15" display og en NVIDIA-chip. Der findes ikke et EU-energimærke for bærbare, men Microsoft har fået udgaverne her certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>De almindelige Surface Laptop-udgaver bruger 2,3–4,0 W i tomgang og 0,3–1,0 W i dvale. Med seks timer tændt om dagen og dvale resten af døgnet bruger 13,8" 8. udgave omkring 9–10 kWh om året, svarende til {{kr 9-10}}. Surface Laptop Ultra bruger 7,9 W i tomgang og omkring 22 kWh om året, svarende til {{kr 22}}.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>ENERGY STAR (TEC)</th></tr></thead>
<tbody>
<tr><td>13" (2025)</td><td>Snapdragon X Plus</td><td>2,3 W</td><td>0,3 W</td><td>6,3 kWh</td></tr>
<tr><td>13" 2. udgave (2026)</td><td>Snapdragon X2 Plus</td><td>2,8 W</td><td>0,4 W</td><td>7,3 kWh</td></tr>
<tr><td>13" Intel (2026)</td><td>Intel Core Ultra 5</td><td>3,0 W</td><td>0,5 W</td><td>8,5 kWh</td></tr>
<tr><td>13,8" 8. udgave</td><td>Snapdragon X2 Elite</td><td>2,9 W</td><td>0,5 W</td><td>8,0 kWh</td></tr>
<tr><td>15" 8. udgave</td><td>Snapdragon X2 Elite</td><td>4,0 W</td><td>0,5 W</td><td>10,1 kWh</td></tr>
<tr><td>13,8" 8. udgave</td><td>Intel Core Ultra X7</td><td>2,7 W</td><td>0,5 W</td><td>7,7 kWh</td></tr>
<tr><td>15" 8. udgave</td><td>Intel Core Ultra X7</td><td>3,9 W</td><td>0,5 W</td><td>10,4 kWh</td></tr>
<tr><td>13,8" 7. udgave (2024)</td><td>Snapdragon X Elite</td><td>3,3 W</td><td>0,9 W</td><td>11,8 kWh</td></tr>
<tr><td>15" 7. udgave (2024)</td><td>Snapdragon X Elite</td><td>3,2 W</td><td>1,0 W</td><td>12,2 kWh</td></tr>
<tr><td>Surface Laptop Ultra 15"</td><td>NVIDIA RTX Spark N1X</td><td>7,9 W</td><td>0,7 W</td><td>18,4 kWh</td></tr>
</tbody>
</table>

<h2>8. udgave mod 7. udgave: dvalen er halveret</h2>
<p>Den store forbedring i 8. udgave ligger ikke i tomgang, men i dvale. 7. udgave med Snapdragon X Elite brugte 0,9–1,0 W med låget lukket, 8. udgave med Snapdragon X2 Elite bruger 0,5 W. Fordi en bærbar typisk står i dvale de fleste af døgnets timer, betyder det meget. 13,8" går fra omkring 13 til 10 kWh om året med vores profil. Forskellen på omkring 3,5 kWh svarer til {{kr 3,5}} om året, ikke meget i kroner, men det giver også bedre batteritid, når maskinen ligger i tasken.</p>
<p>I tomgang er 8. udgave næsten som den gamle. 13,8" er gået fra 3,3 til 2,9 W, mens 15" er gået fra 3,2 til 4,0 W i den certificerede konfiguration. Intel-udgaven af 8. udgave er en smule mere sparsom end Snapdragon-udgaven i tomgang, 2,7 mod 2,9 W som 13,8".</p>

<h2>Størrelsen betyder mest</h2>
<p>Inden for samme generation er skærmen den største forskel. 15" 8. udgave bruger 3,9–4,0 W mod 2,7–2,9 W for 13,8". Med vores profil er det omkring 2–3 kWh om året. Den lille 13"-udgave fra 2025 er den mest sparsomme Surface Laptop i tabellen med 2,3 W i tomgang og omkring 7 kWh om året, svarende til {{kr 7}}. Den nye 2. udgave af 13" bruger lidt mere, 2,8 W.</p>
<p>Surface Laptop Ultra er en anden slags maskine med en kraftig grafikchip og en 140 W-oplader. Den bruger omkring 22 kWh om året med vores profil, mere end dobbelt så meget som 13,8" 8. udgave. Under tungt arbejde som video og spil trækker den meget mere end tomgangstallet.</p>

<h2>Opladning og batteri</h2>
<p>Ifølge certificeringen har 13" et batteri på 48,3 Wh, 13,8" 52,3 Wh, 15" 63,8 Wh og Surface Laptop Ultra 89,3 Wh. Microsofts tekniske specifikationer for 7. udgave oplyser 54 og 66 Wh som nominel størrelse og 52 og 64 Wh som minimum; certificeringen bruger minimumstallet. En fuld opladning af 13,8" bruger omkring 0,06 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,059}} ved månedens elpris på {{pris_kwh}}. Ladetabet er vores skøn, ikke Microsofts tal.</p>

<h2>Surface Laptop mod MacBook og andre Windows-bærbare</h2>
<p>De sparsomme Surface-udgaver ligger på niveau med Apple. <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> 13" bruger 3,63 W i tomgang og <a href="/laptop/macbook-neo/">MacBook Neo</a> 2,77 W, mens <a href="/laptop/hp-omnibook/">HP OmniBook</a> ligger på 3,2–7,5 W. Apple måler ved 230 V og Microsoft ved de 115 V, som ENERGY STAR kræver, så sammenligningen er ikke helt præcis.</p>
<p>Arbejder du ved skrivebordet med en ekstern skærm, fylder den mere. En kontorskærm som <a href="/skaerm/dell-p2725h/">Dell P2725H</a> bruger 15,8 W, fem gange så meget som Surface Laptop i tomgang.</p>
<ul>
<li>Brug strømbesparende tilstand og lad skærmen dæmpe sig selv; skærmen er den største forbruger i tomgang.</li>
<li>Luk låget, når du går fra maskinen; 8. udgave bruger kun 0,5 W i dvale.</li>
<li>Tag opladeren ud af stikket, når batteriet er fuldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Surface Laptop?",
      answer:
        "2,3–4,0 W i tomgang med skærmen tændt og 0,3–1,0 W i dvale ifølge Microsofts ENERGY STAR-målinger. Surface Laptop Ultra bruger 7,9 W i tomgang.",
    },
    {
      question: "Hvad koster det at bruge en Surface Laptop om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger 13,8\" 8. udgave omkring 9–10 kWh om året, svarende til {{kr 9-10}}.",
    },
    {
      question: "Bruger Surface Laptop 8. udgave mindre strøm end 7. udgave?",
      answer:
        "I dvale, ja: 0,5 W mod 0,9–1,0 W for 7. udgave med Snapdragon. I tomgang er de næsten ens. 13,8\" går fra omkring 13 til 10 kWh om året med vores profil.",
    },
    {
      question: "Hvad koster det at oplade en Surface Laptop?",
      answer:
        "En fuld opladning af 13,8\"-udgavens batteri på 52,3 Wh koster {{oere 0,059}} ved månedens elpris på {{pris_kwh}}, regnet med et typisk ladetab.",
    },
    {
      question: "Er Microsofts tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige en smule, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Microsoft Surface Laptop 13\" (2095)", url: es("4015773") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 13\" 2nd Edition (2145)", url: es("4708154") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 13\" 1st Edition (2156)", url: es("4614354") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 8th Edition 13,8\" Snapdragon (2036)", url: es("4653594") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 8th Edition 15\" Snapdragon (2037)", url: es("4653574") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 8th Edition 13,8\" Intel (2107)", url: es("4614274") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 8th Edition 15\" Intel (2108)", url: es("4614334") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 7th Edition 13,8\" (2036)", url: es("4015587") },
    { name: "ENERGY STAR — Microsoft Surface Laptop 7th Edition 15\" (2037)", url: es("4015592") },
    { name: "ENERGY STAR — Microsoft Surface Laptop Ultra (2115)", url: es("4713774") },
    { name: "Microsoft Learn — Surface Laptop 7th Edition (Snapdragon), tekniske specifikationer", url: "https://learn.microsoft.com/en-us/surface/tech-specs/surface-laptop-snapdragon-tech-specs" },
  ],
  variants: [
    { name: "13\" Snapdragon X Plus (2025)", watts: { off: 0.2, sleep: 0.3, idle: 2.3 }, adapterW: 45, batteryWh: 48.3, source: 0 },
    { name: "13\" 2. udgave Snapdragon X2 Plus", watts: { off: 0.1, sleep: 0.4, idle: 2.8 }, adapterW: 45, batteryWh: 48.3, source: 1 },
    { name: "13\" Intel Core Ultra 5 (2026)", watts: { off: 0.2, sleep: 0.5, idle: 3.0 }, adapterW: 45, batteryWh: 48.3, source: 2 },
    { name: "13,8\" 8. udgave Snapdragon X2 Elite", watts: { off: 0.3, sleep: 0.5, idle: 2.9 }, adapterW: 39, batteryWh: 52.3, source: 3 },
    { name: "15\" 8. udgave Snapdragon X2 Elite", watts: { off: 0.3, sleep: 0.5, idle: 4.0 }, adapterW: 65, batteryWh: 63.8, source: 4 },
    { name: "13,8\" 8. udgave Intel Core Ultra X7", watts: { off: 0.2, sleep: 0.5, idle: 2.7 }, adapterW: 39, batteryWh: 52.3, source: 5 },
    { name: "15\" 8. udgave Intel Core Ultra X7", watts: { off: 0.2, sleep: 0.5, idle: 3.9 }, adapterW: 65, batteryWh: 63.8, source: 6 },
    { name: "13,8\" 7. udgave Snapdragon X Elite (2024)", watts: { off: 0.3, sleep: 0.9, idle: 3.3 }, adapterW: 39, batteryWh: 52.3, source: 7 },
    { name: "15\" 7. udgave Snapdragon X Elite (2024)", watts: { off: 0.3, sleep: 1.0, idle: 3.2 }, adapterW: 65, batteryWh: 63.8, source: 8 },
    { name: "Surface Laptop Ultra 15\" (2026)", watts: { off: 0.1, sleep: 0.7, idle: 7.9 }, adapterW: 140, batteryWh: 89.3, source: 9 },
  ],
  publishDate: "2026-12-19",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Microsofts egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Microsofts egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, Microsoft har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse er minimumskapaciteten fra samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Microsoft. Kilderne står nederst på siden.",
};

export default microsoftSurfaceLaptop;
