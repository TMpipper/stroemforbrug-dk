import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const psref = (m: string) => `https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_E14_${m}/ThinkPad_E14_${m}_Spec.pdf`;

const lenovoThinkpadE14: ModelData = {
  slug: "lenovo-thinkpad-e14",
  parent: "laptop",
  brand: "Lenovo",
  name: "Lenovo ThinkPad E14",
  released: "2026-06",
  synonyms: [
    "thinkpad e14 strømforbrug",
    "lenovo thinkpad e14 gen 8 watt",
    "thinkpad e14 gen 7 strømforbrug",
    "thinkpad e14 forbrug",
    "lenovo erhvervsbærbar strømforbrug",
    "thinkpad e14 batteri wh",
    "thinkpad l14p strømforbrug",
  ],
  title: "ThinkPad E14 strømforbrug (2026) → watt for Gen 7 og Gen 8",
  description:
    "Lenovo ThinkPad E14 Gen 8 og Gen 7 med Intel og AMD: watt i tomgang og dvale fra ENERGY STAR, kWh om året, skærmens betydning og prisen for en opladning.",
  intro:
    "Gen 8 med Intel Core 7 og Full HD-skærm bruger mindst, 2,8 W i tomgang. Gen 7 brugte 4,0–4,6 W og 0,9 W i dvale i de fleste udgaver.",
  content: `<h2>Hvor mange watt bruger ThinkPad E14?</h2>
<p>ThinkPad E14 er Lenovos ThinkPad i den billige ende, lavet til mindre virksomheder og hjemmekontoret. Den har en 14"-skærm i formatet 16:10 og findes med Intel- og AMD-processorer. Gen 7 kom i 2025 og Gen 8 i 2026. Bærbare har ikke et EU-energimærke, men Lenovo får ThinkPad-modellerne certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>De seks udgaver her bruger 2,8–4,6 W i tomgang og 0,6–0,9 W i dvale. Med seks timer tændt om dagen og dvale resten af døgnet bruger Gen 8 med Intel Core 7 og Full HD-skærm omkring 10 kWh om året, svarende til {{kr 10}}. Den mest strømkrævende, Gen 7 med Intel Core Ultra 7 250H, bruger omkring 16 kWh, svarende til {{kr 16}}.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Skærm</th><th>Tomgang</th><th>Dvale</th><th>TEC</th></tr></thead>
<tbody>
<tr><td>Gen 8 (21Y8)</td><td>Intel Core 7 350</td><td>1920 × 1200</td><td>2,8 W</td><td>0,6 W</td><td>8,9 kWh</td></tr>
<tr><td>Gen 8 (21Y6)</td><td>Intel Core Ultra 7 356H</td><td>2880 × 1800</td><td>3,5 W</td><td>0,7 W</td><td>10,7 kWh</td></tr>
<tr><td>Gen 8 (21Y2)</td><td>AMD Ryzen AI 7 450</td><td>2880 × 1800</td><td>4,0 W</td><td>0,7 W</td><td>11,6 kWh</td></tr>
<tr><td>Gen 7 (21U2)</td><td>Intel Core Ultra 7 268V</td><td>2880 × 1800</td><td>4,0 W</td><td>0,6 W</td><td>11,0 kWh</td></tr>
<tr><td>Gen 7 (21T0)</td><td>AMD Ryzen 7 250</td><td>1920 × 1200</td><td>4,4 W</td><td>0,9 W</td><td>13,2 kWh</td></tr>
<tr><td>Gen 7 (21T9)</td><td>Intel Core Ultra 7 250H</td><td>2880 × 1800</td><td>4,6 W</td><td>0,9 W</td><td>13,9 kWh</td></tr>
</tbody>
</table>
<p>TEC er ENERGY STAR's eget årstal med en fast fordeling af tomgang, dvale og slukket. Ifølge certificeringen er ThinkPad E14 Gen 8 21Y9 og ThinkPad L14p Gen 7 den samme maskine som 21Y8 under et andet navn.</p>

<h2>Gen 8 mod Gen 7</h2>
<p>Den nye generation er mere sparsom på begge punkter. Med 2,8K-skærm og Intel bruger Gen 8 3,5 W i tomgang mod 4,0–4,6 W for Gen 7, og dvalen er gået fra op til 0,9 W ned til 0,6–0,7 W. For en maskine, der står med låget lukket det meste af døgnet, betyder dvalen næsten lige så meget som tomgangen. Gen 8 21Y6 bruger omkring 12 kWh om året med vores profil mod 16 kWh for Gen 7 21T9. Forskellen på omkring 3,7 kWh svarer til {{kr 3,7}} om året pr. maskine.</p>
<p>For en privat bruger er det småpenge. For en virksomhed med 100 bærbare er det omkring 370 kWh om året, svarende til {{kr 370}}, alene ved at vælge den nye generation.</p>

<h2>Skærmen betyder mere end processoren</h2>
<p>ThinkPad E14 Gen 8 findes med en almindelig Full HD-skærm (1920 × 1200) med 60 Hz og en skarpere 2,8K-skærm (2880 × 1800) med 120 Hz. Ifølge Lenovos specifikationer er 2,8K-skærmen også lysere, 500 mod 400 nit. ENERGY STAR har målt Intel-udgaven 21Y8 med Full HD og 21Y6 med 2,8K, og forskellen er 0,7 W i tomgang. Over et år er det omkring 2 kWh. Det er ikke meget, men den billigste skærm er også den mest sparsomme, og den er rigelig til regneark og mail.</p>
<p>AMD-udgaven 21Y2 med 2,8K-skærm bruger 4,0 W, lidt mere end Intel-udgaven med samme skærm. ENERGY STAR måler én konfiguration af hver model, så din maskine kan afvige lidt med en anden processor, mere RAM eller en anden skærm.</p>

<h2>Opladning og batteri</h2>
<p>Ifølge Lenovos tekniske specifikationer (PSREF) fås ThinkPad E14 Gen 7 og Gen 8 med et batteri på 48 eller 64 Wh. ENERGY STAR har målt med 64 Wh og en oplader på 65 W, for 21Y6 og 21T9 på 100 W. En fuld opladning af 64 Wh bruger omkring 0,07 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,073}} ved månedens elpris på {{pris_kwh}}. Ladetabet er vores skøn, ikke Lenovos tal.</p>

<h2>ThinkPad E14 mod andre bærbare</h2>
<p>Gen 8 21Y8 ligger på niveau med de sparsomme forbrugermaskiner. <a href="/laptop/lenovo-ideapad-slim-3/">Lenovo IdeaPad Slim 3</a> med Snapdragon bruger 2,8–2,9 W og <a href="/laptop/microsoft-surface-laptop/">Microsoft Surface Laptop</a> 13,8" 2,7–2,9 W i tomgang. Alle tal er målt ved de 115 V, som ENERGY STAR kræver, så de kan sammenlignes direkte.</p>
<p>På et kontor med dockingstation er det den eksterne skærm, der fylder. En 27"-skærm som <a href="/skaerm/dell-p2725h/">Dell P2725H</a> bruger 15,8 W, fem til seks gange så meget som ThinkPad'en i tomgang.</p>
<ul>
<li>Vælg Full HD-skærmen, hvis du ikke har brug for den skarpe 2,8K-skærm.</li>
<li>Lad maskinen gå i dvale efter få minutter uden brug; 21Y8 leveres med dvale efter fem minutter ifølge certificeringen.</li>
<li>Tag opladeren ud af stikket, når batteriet er fuldt, eller brug Lenovos batteribeskyttelse, der stopper opladningen før 100 %.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>, eller sammenlign med en <a href="/computer/">stationær computer</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo ThinkPad E14?",
      answer:
        "Gen 8 bruger 2,8–4,0 W i tomgang med skærmen tændt og 0,6–0,7 W i dvale ifølge Lenovos ENERGY STAR-målinger. Gen 7 brugte 4,0–4,6 W og 0,6–0,9 W.",
    },
    {
      question: "Hvad koster det at bruge en ThinkPad E14 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger Gen 8 omkring 10–13 kWh om året, svarende til {{kr 10-13}}. Gen 7 bruger omkring 13–16 kWh.",
    },
    {
      question: "Bruger ThinkPad E14 Gen 8 mindre strøm end Gen 7?",
      answer:
        "Ja. Med 2,8K-skærm og Intel bruger Gen 8 3,5 W i tomgang mod 4,0–4,6 W for Gen 7, og dvalen er lavere. Det er omkring 4 kWh mindre om året pr. maskine.",
    },
    {
      question: "Hvad koster det at oplade en ThinkPad E14?",
      answer:
        "En fuld opladning af 64 Wh-batteriet koster {{oere 0,073}} ved månedens elpris på {{pris_kwh}}, regnet med et typisk ladetab. Med 48 Wh-batteriet er det lidt mindre.",
    },
    {
      question: "Er Lenovos tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige en smule, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 8 (21Y8)", url: es("4638374") },
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 8 (21Y6)", url: es("4586574") },
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 8 (21Y2)", url: es("4596134") },
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 7 (21U2)", url: es("4480883") },
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 7 (21T0)", url: es("4020778") },
    { name: "ENERGY STAR — Lenovo ThinkPad E14 Gen 7 (21T9)", url: es("4015998") },
    { name: "Lenovo PSREF — ThinkPad E14 Gen 8 (Intel), tekniske specifikationer", url: psref("Gen_8_Intel") },
    { name: "Lenovo PSREF — ThinkPad E14 Gen 8 (AMD), tekniske specifikationer", url: psref("Gen_8_AMD") },
    { name: "Lenovo PSREF — ThinkPad E14 Gen 7 (Intel), tekniske specifikationer", url: psref("Gen_7_Intel") },
    { name: "Lenovo PSREF — ThinkPad E14 Gen 7 (AMD), tekniske specifikationer", url: psref("Gen_7_AMD") },
  ],
  variants: [
    { name: "Gen 8 Intel Core 7, Full HD (21Y8)", watts: { off: 0.1, sleep: 0.6, idle: 2.8 }, adapterW: 65, batteryWh: 64, source: 0 },
    { name: "Gen 8 Intel Core Ultra 7, 2,8K (21Y6)", watts: { off: 0.1, sleep: 0.7, idle: 3.5 }, adapterW: 100, batteryWh: 64, source: 1 },
    { name: "Gen 8 AMD Ryzen AI 7, 2,8K (21Y2)", watts: { off: 0.2, sleep: 0.7, idle: 4.0 }, adapterW: 65, batteryWh: 64, source: 2 },
    { name: "Gen 7 Intel Core Ultra 7 268V (21U2)", watts: { off: 0.2, sleep: 0.6, idle: 4.0 }, adapterW: 65, batteryWh: 64, source: 3 },
    { name: "Gen 7 AMD Ryzen 7, Full HD (21T0)", watts: { off: 0.2, sleep: 0.9, idle: 4.4 }, adapterW: 65, batteryWh: 64, source: 4 },
    { name: "Gen 7 Intel Core Ultra 7 250H (21T9)", watts: { off: 0.2, sleep: 0.9, idle: 4.6 }, adapterW: 100, batteryWh: 64, source: 5 },
  ],
  publishDate: "2026-12-20",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Lenovos egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, Lenovo har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse er fra Lenovos tekniske specifikationer (PSREF) og certificeringen, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Lenovo. Kilderne står nederst på siden.",
};

export default lenovoThinkpadE14;
