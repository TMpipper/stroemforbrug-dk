import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;
const psref = (m: string) => `https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_${m}/Yoga_Slim_7_${m}_Spec.pdf`;

const lenovoYogaSlim7: ModelData = {
  slug: "lenovo-yoga-slim-7",
  parent: "laptop",
  brand: "Lenovo",
  name: "Lenovo Yoga Slim 7",
  released: "2026-02",
  synonyms: [
    "lenovo yoga slim 7 strømforbrug",
    "yoga slim 7 watt",
    "yoga slim 7 14iph11 strømforbrug",
    "yoga slim 7 ultra forbrug",
    "yoga slim 7 snapdragon watt",
    "lenovo yoga strømforbrug",
    "yoga slim 7 batteri wh",
  ],
  title: "Lenovo Yoga Slim 7 strømforbrug (2026) → watt og batteri",
  description:
    "Lenovo Yoga Slim 7 og Yoga Slim 7 Ultra med Intel, AMD og Snapdragon: watt i tomgang og dvale fra ENERGY STAR, kWh om året og prisen for en opladning.",
  intro:
    "Yoga Slim 7 Ultra med Intel bruger mindst af udgaverne her, 4,5 W i tomgang. Snapdragon-udgaven bruger 1,0 W i dvale, dobbelt så meget som Intel-udgaverne.",
  content: `<h2>Hvor mange watt bruger Lenovo Yoga Slim 7?</h2>
<p>Yoga Slim 7 er Lenovos tynde 14"-bærbare med OLED-skærm i den øvre mellemklasse. 2026-generationen findes med Intel Core Ultra (14IPH11), AMD Ryzen AI (14AGP11) og Qualcomm Snapdragon X2 Elite (14Q8Y11), og over den ligger Yoga Slim 7 Ultra (Ultra 14IPH11). Bærbare har ikke et EU-energimærke, men Lenovo får Yoga-modellerne certificeret efter den amerikanske ENERGY STAR. Her måles forbruget i kort tomgang med skærmen tændt, i dvale og slukket.</p>
<p>2026-udgaverne bruger 4,5–6,1 W i tomgang og 0,4–1,0 W i dvale ifølge målingerne. Med seks timer tændt om dagen og dvale resten af døgnet bruger Yoga Slim 7 14IPH11 omkring 14 kWh om året, svarende til {{kr 14}}. AMD-udgaven 14AKP10 fra 2025 brugte 7,5 W i tomgang og omkring 20 kWh om året.</p>
<table>
<thead><tr><th>Model</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>TEC</th></tr></thead>
<tbody>
<tr><td>Slim 7 14IPH11 (2026)</td><td>Intel Core Ultra 7</td><td>4,7 W</td><td>0,5 W</td><td>70 Wh</td><td>11,3 kWh</td></tr>
<tr><td>Slim 7 Ultra 14IPH11 (2026)</td><td>Intel Core Ultra X9 388H</td><td>4,5 W</td><td>0,4 W</td><td>75 Wh</td><td>10,6 kWh</td></tr>
<tr><td>Slim 7 14Q8Y11 (2026)</td><td>Snapdragon X2 Elite</td><td>5,0 W</td><td>1,0 W</td><td>70 Wh</td><td>14,7 kWh</td></tr>
<tr><td>Slim 7 14AGP11 (2026)</td><td>AMD Ryzen AI 7 445</td><td>6,1 W</td><td>0,5 W</td><td>70 Wh</td><td>13,9 kWh</td></tr>
<tr><td>Slim 7 14AKP10 (2025)</td><td>AMD Ryzen AI 7 350</td><td>7,5 W</td><td>0,6 W</td><td>70 Wh</td><td>16,8 kWh</td></tr>
<tr><td>Slim 7 15ILL9 (2024)</td><td>Intel Core Ultra 9 288V</td><td>4,8 W</td><td>0,5 W</td><td>70 Wh</td><td>11,8 kWh</td></tr>
</tbody>
</table>
<p>Ifølge certificeringen sælges Yoga Slim 7 14IPH11 også som Lenovo Slim 7 og Yoga Air 14 med de samme tal.</p>

<h2>OLED-skærmen og den høje opløsning</h2>
<p>Alle 2026-udgaverne har OLED, og ENERGY STAR har målt dem med den skarpe 2,8K-skærm (2880 × 1800). Det forklarer, hvorfor Yoga Slim 7 bruger mere i tomgang end de billige bærbare. <a href="/laptop/lenovo-ideapad-slim-3/">Lenovo IdeaPad Slim 3</a> med Full HD-skærm bruger 2,8–4,6 W i 2026-udgaverne. Ifølge Lenovos specifikationer fås de fleste Yoga Slim 7-udgaver også med en OLED-skærm i 1920 × 1200, som ikke er certificeret; den bruger formentlig lidt mindre.</p>
<p>På en OLED-skærm afhænger forbruget af, hvad der vises. Målingen i tomgang er lavet med Windows' standardbillede. Bruger du mørk tilstand, kommer du lavere; arbejder du i lyse dokumenter med fuld lysstyrke, højere.</p>

<h2>Intel, AMD eller Snapdragon?</h2>
<p>I denne generation er Intel-udgaverne de mest sparsomme Yoga Slim 7 i tabellen, 4,5–4,7 W i tomgang. AMD-udgaven 14AGP11 bruger 6,1 W, omkring 3 kWh mere om året. Snapdragon-udgaven 14Q8Y11 bruger 5,0 W i tomgang, men 1,0 W i dvale. Med 18 timer i dvale om dagen bliver dvalen alene til omkring 7 kWh om året, og samlet bruger den omkring 17,5 kWh mod 13,6 kWh for 14IPH11. Forskellen svarer til {{kr 3,9}} om året.</p>
<p>Fra 2025 til 2026 er AMD-udgaven forbedret mest: fra 7,5 W i 14AKP10 til 6,1 W i 14AGP11, omkring 4 kWh om året mindre med vores profil.</p>

<h2>Opladning og batteri</h2>
<p>Ifølge Lenovos tekniske specifikationer (PSREF) har Yoga Slim 7 et batteri på 70 Wh og Yoga Slim 7 Ultra 75 Wh. Certificeringen angiver 73,6 Wh for Ultra-udgaven; vi bruger PSREF. Alle lader via USB-C med en 65 W-oplader. En fuld opladning af 70 Wh bruger omkring 0,08 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,08}} ved månedens elpris på {{pris_kwh}}. Ladetabet er vores skøn, ikke Lenovos tal. Se også, hvad <a href="/mobil-opladning/">opladning af mobil og tablet</a> koster.</p>

<h2>Yoga Slim 7 mod MacBook Air og ThinkPad</h2>
<p>Den oplagte konkurrent er <a href="/laptop/macbook-air-m4/">MacBook Air M4</a>, der bruger 3,63 W i tomgang med sin 13"-skærm og omkring 10 kWh om året. Yoga Slim 7 14IPH11 bruger omkring 4 kWh mere. Apple måler ved 230 V og Lenovo ved de 115 V, som ENERGY STAR kræver, så sammenligningen er ikke helt præcis.</p>
<p>Lenovos egen erhvervsmaskine <a href="/laptop/lenovo-thinkpad-e14/">ThinkPad E14 Gen 8</a> bruger 2,8–4,0 W med en IPS-skærm. Har du ikke brug for OLED, sparer du altså strøm med en almindelig IPS-skærm.</p>
<ul>
<li>Brug mørk tilstand og en lavere lysstyrke; det sparer mere på OLED end på en almindelig skærm.</li>
<li>Luk låget, når du går fra maskinen; dvale koster 0,4–1,0 W.</li>
<li>Tag opladeren ud af stikket, når batteriet er fuldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo Yoga Slim 7?",
      answer:
        "2026-udgaverne bruger 4,5–6,1 W i tomgang med skærmen tændt og 0,4–1,0 W i dvale ifølge Lenovos ENERGY STAR-målinger.",
    },
    {
      question: "Hvad koster det at bruge en Yoga Slim 7 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger Yoga Slim 7 14IPH11 omkring 14 kWh om året, svarende til {{kr 14}}. Snapdragon-udgaven bruger omkring 17,5 kWh.",
    },
    {
      question: "Hvad koster det at oplade en Yoga Slim 7?",
      answer:
        "En fuld opladning af 70 Wh-batteriet koster {{oere 0,08}} ved månedens elpris på {{pris_kwh}}, regnet med et typisk ladetab. Ultra-udgaven med 75 Wh koster lidt mere.",
    },
    {
      question: "Hvilken Yoga Slim 7 bruger mindst strøm?",
      answer:
        "Blandt de certificerede 2026-udgaver Yoga Slim 7 Ultra 14IPH11 med Intel: 4,5 W i tomgang og 0,4 W i dvale, omkring 12,5 kWh om året.",
    },
    {
      question: "Er Lenovos tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige en smule, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 14IPH11", url: es("4520112") },
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 Ultra 14IPH11", url: es("4529564") },
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 14Q8Y11", url: es("4518003") },
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 14AGP11", url: es("4517806") },
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 14AKP10", url: es("4016443") },
    { name: "ENERGY STAR — Lenovo Yoga Slim 7 15ILL9", url: es("4481340") },
    { name: "Lenovo PSREF — Yoga Slim 7 14IPH11, tekniske specifikationer", url: psref("14IPH11") },
    { name: "Lenovo PSREF — Yoga Slim 7 Ultra 14IPH11, tekniske specifikationer", url: "https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_Ultra_14IPH11/Yoga_Slim_7_Ultra_14IPH11_Spec.pdf" },
    { name: "Lenovo PSREF — Yoga Slim 7 14Q8Y11, tekniske specifikationer", url: psref("14Q8Y11") },
    { name: "Lenovo PSREF — Yoga Slim 7 14AGP11, tekniske specifikationer", url: psref("14AGP11") },
    { name: "Lenovo PSREF — Yoga Slim 7 14AKP10, tekniske specifikationer", url: psref("14AKP10") },
    { name: "Lenovo PSREF — Yoga Slim 7 15ILL9, tekniske specifikationer", url: psref("15ILL9") },
  ],
  variants: [
    { name: "14\" 14IPH11 Intel Core Ultra 7 (2026)", watts: { off: 0.2, sleep: 0.5, idle: 4.7 }, adapterW: 65, batteryWh: 70, source: 0 },
    { name: "14\" Ultra 14IPH11 Intel Core Ultra X9 (2026)", watts: { off: 0.2, sleep: 0.4, idle: 4.5 }, adapterW: 65, batteryWh: 75, source: 1 },
    { name: "14\" 14Q8Y11 Snapdragon X2 Elite (2026)", watts: { off: 0.2, sleep: 1.0, idle: 5.0 }, adapterW: 65, batteryWh: 70, source: 2 },
    { name: "14\" 14AGP11 AMD Ryzen AI 7 (2026)", watts: { off: 0.2, sleep: 0.5, idle: 6.1 }, adapterW: 65, batteryWh: 70, source: 3 },
    { name: "14\" 14AKP10 AMD Ryzen AI 7 (2025)", watts: { off: 0.3, sleep: 0.6, idle: 7.5 }, adapterW: 65, batteryWh: 70, source: 4 },
    { name: "15\" 15ILL9 Intel Core Ultra 9 (2024)", watts: { off: 0.3, sleep: 0.5, idle: 4.8 }, adapterW: 65, batteryWh: 70, source: 5 },
  ],
  publishDate: "2026-12-22",
  updated: "2026-11-23",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Lenovos egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, Lenovo har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse er fra Lenovos tekniske specifikationer (PSREF), og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Lenovo. Kilderne står nederst på siden.",
};

export default lenovoYogaSlim7;
