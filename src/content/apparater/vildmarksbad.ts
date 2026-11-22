import type { ApplianceData } from "@/lib/types";

const vildmarksbad: ApplianceData = {
  slug: "vildmarksbad",
  meta: {
    category: "poolSpa",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: true,
    synonyms: [
      "vildmarksbad",
      "vildmarksbad med el",
      "elopvarmet vildmarksbad",
      "badetønde",
      "hot tub",
      "vildmarksbad elvarmer",
      "varmer til vildmarksbad",
      "vildmarkskar",
    ],
  },
  name: "Vildmarksbad",
  article: "et",
  title: "Vildmarksbad strømforbrug (2026) → kWh pr. opvarmning",
  description:
    "Et elopvarmet vildmarksbad på 1.000 liter skal bruge ca. 27 kWh varme fra 15 til 38 grader. Se tiden med 2 og 3 kW og prisen pr. opvarmning.",
  heading: "Strømforbrug for et vildmarksbad: kWh, pris pr. opvarmning og billigste tidspunkt",
  quickAnswer:
    "Et vildmarksbad med elvarmer bruger strøm efter, hvor meget vand der skal varmes og hvor mange grader. 1.000 liter fra 15 til 38 grader kræver ca. 27 kWh varme, og med tab undervejs bruger en opvarmning efter vores skøn ca. 32 kWh — svarende til {{kr 32}} ved {{pris_kwh}}. To opvarmninger om måneden hele året giver ca. 770 kWh, eller {{kr 770}}. Varmeren kan køre i dagens billige timer, fordi vandet holder på varmen.",
  kwhRange: [150, 3000],
  typicalKwh: 770,
  wattage: 3000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.35, 1.25, 1.1, 0.95, 0.8, 0.7, 0.65, 0.7, 0.85, 1.05, 1.2, 1.4],
  content: `<h2>Vildmarksbad med el i stedet for brænde</h2>
<p>Et vildmarksbad er et stort kar, typisk af træ, glasfiber eller plast, der fyldes med vand og varmes op til badetemperatur. Det klassiske vildmarksbad har en brændeovn, enten i karret eller ved siden af, og bruger ingen strøm til varmen; så er det brændet, der koster. Flere og flere vælger i stedet en elektrisk varmer, der sidder i en vandkreds ved siden af karret: en pumpe sender vandet gennem varmeren og tilbage. Det er den løsning, denne side handler om.</p>
<p>Fordelen ved elvarmeren er, at den kan styres med en termostat og en timer, så vandet er varmt, når du kommer hjem. Ulempen er, at den er langsommere end en brændeovn og bruger mange kWh, fordi der er meget vand at varme.</p>

<h2>Varmerens effekt</h2>
<p>Swim & Fun sælger to elektriske spavarmere, der bruges til vildmarksbade og små pools. Ifølge producentens manual har modellen 1055 2 kW og kræver en 10 A-gruppe, mens modellen 1057 har 3 kW, kræver 16 A og kører på 200-240 V. Manualen angiver 756 liter for den lille og 1.285 liter for den store, en flowkontakt, der kun tænder varmeren, når pumpen giver over 3.600 liter i timen, og en termosikring, der slår fra ved 60 grader. Den kan sluttes til en ekstern timer.</p>
<table>
<thead><tr><th>Varmer (Swim & Fun)</th><th>Effekt</th><th>kWh i timen</th><th>Pris i timen</th></tr></thead>
<tbody>
<tr><td>1055, 10 A</td><td>2 kW</td><td>2</td><td>{{kr 2}}</td></tr>
<tr><td>1057, 16 A</td><td>3 kW</td><td>3</td><td>{{kr 3}}</td></tr>
</tbody>
</table>
<p>Pumpen, der skal sende vandet gennem varmeren, bruger strøm oveni. Den er typisk meget mindre end varmeren, men den kører hele tiden, mens der varmes; se siden om <a href="/poolpumpe/">poolpumpen</a> for, hvordan pumpens forbrug regnes.</p>

<h2>Hvad koster en opvarmning?</h2>
<p>Det kræver 1,163 kWh at varme 1.000 liter vand én grad. Et vildmarksbad på 1.000 liter, der skal fra 15 til 38 grader, skal altså have 23 × 1,163 = ca. 26,7 kWh varme. Med en varmer på 3 kW tager det omkring ni timer; med 2 kW mere end 13 timer. Under opvarmningen taber karret varme til luften, især uden låg og i frostvejr, så det faktiske forbrug er højere. Tabellen er vores beregning og skøn:</p>
<table>
<thead><tr><th>Opvarmning (vores skøn)</th><th>kWh</th><th>Pris pr. opvarmning</th><th>Tid med 3 kW</th></tr></thead>
<tbody>
<tr><td>Genopvarmning fra ca. 30 grader, med låg</td><td>ca. 12</td><td>{{kr 12}}</td><td>ca. 4 timer</td></tr>
<tr><td>1.000 liter fra 15 til 38 grader, kun fysikken</td><td>ca. 26,7</td><td>{{kr 26,7}}</td><td>ca. 9 timer</td></tr>
<tr><td>1.000 liter fra 15 til 38 grader, med låg og tab</td><td>ca. 32</td><td>{{kr 32}}</td><td>ca. 11 timer</td></tr>
<tr><td>1.285 liter eller koldt vejr uden låg</td><td>ca. 45</td><td>{{kr 45}}</td><td>ca. 15 timer</td></tr>
</tbody>
</table>
<p>Kort sagt: det er vandmængden og temperaturforskellen, der bestemmer forbruget, ikke varmerens størrelse. En varmer på 2 kW bruger stort set de samme kWh som en på 3 kW; den er bare længere tid om det og taber derfor lidt mere undervejs.</p>

<h2>Hvor meget bruger det over et år?</h2>
<p>Det afhænger af, hvor tit du bader, og om du tømmer karret mellem gangene. Mange tømmer et vildmarksbad efter få brug, fordi det ikke har et filter som en pool, og så skal næste fyldning varmes op fra koldt vand. Vores typiske tal er to opvarmninger på 32 kWh om måneden hele året:</p>
<table>
<thead><tr><th>Brug</th><th>kWh om året</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>1 opvarmning om måneden</td><td>384</td><td>{{kr 384}}</td></tr>
<tr><td>2 opvarmninger om måneden</td><td>768</td><td>{{kr 768}}</td></tr>
<tr><td>1 opvarmning om ugen</td><td>ca. 1.660</td><td>{{kr 1660}}</td></tr>
</tbody>
</table>
<p>Om vinteren er vandet fra hanen koldere, og karret taber mere varme til den kolde luft, så hver opvarmning koster mere. Vores sæsonprofil lægger derfor mere af forbruget i vintermånederne.</p>

<h2>Hvornår skal varmeren køre?</h2>
<p>Et vildmarksbad er et godt eksempel på et apparat, der kan flyttes. Vandet holder på varmen i mange timer, især under et isoleret låg, så varmeren kan køre om natten eller midt på dagen, når strømmen er billigst, og være færdig, når du vil bade om aftenen. Med Swim & Funs eksterne timer eller en smart styring kan du lægge de ni-elleve timer i dagens billigste vindue. Oversigten over dagens timepriser ovenfor viser, hvad en opvarmning koster i det billigste og det dyreste vindue i dag.</p>
<p>Brug en styring, der passer til strømstyrken: en varmer på 3 kW og 16 A kræver en fast installation og en relæstyring, ikke en almindelig smart stikkontakt.</p>

<h2>Sammenlignet med spabad og sauna</h2>
<p>Et <a href="/spabad/">spabad</a> holdes typisk varmt døgnet rundt, og så er det varmetabet, ikke opvarmningen, der bestemmer forbruget. Et vildmarksbad med elvarmer bruges oftere i ryk: varm op, bad, tøm. Det betyder færre kWh, hvis du bader sjældent, men flere, hvis du varmer op fra koldt vand hver gang. En <a href="/infraroed-sauna/">infrarød sauna</a> bruger langt mindre pr. gang, fordi der ikke er vand at varme.</p>

<h2>Sådan holder du forbruget nede</h2>
<ul>
<li><strong>Brug et isoleret låg</strong> — både under opvarmningen og mellem badene.</li>
<li><strong>Genbrug vandet</strong> et par gange, hvis vandkvaliteten tillader det; en genopvarmning fra 30 grader koster langt mindre end fra koldt vand.</li>
<li><strong>Vælg en lidt lavere badetemperatur</strong> — hver grad på 1.000 liter er 1,16 kWh.</li>
<li><strong>Læg opvarmningen i de billige timer</strong> med en timer eller en relæstyring.</li>
<li><strong>Læ for vinden</strong> — en skærm eller en placering op ad huset mindsker varmetabet.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et vildmarksbad med el?", answer: "Det afhænger af vandmængden. 1.000 liter fra 15 til 38 grader kræver ca. 27 kWh varme, og med tab bruger en opvarmning efter vores skøn ca. 32 kWh, svarende til {{kr 32}} ved {{pris_kwh}}." },
    { question: "Hvor lang tid tager det at varme et vildmarksbad op med el?", answer: "Med en varmer på 3 kW tager 1.000 liter fra 15 til 38 grader omkring ni timer uden tab og typisk 10-11 timer med tab. Med 2 kW tager det mere end 13 timer." },
    { question: "Kan jeg varme vildmarksbadet op om natten?", answer: "Ja. Vandet holder på varmen, især under et isoleret låg, så varmeren kan køre i dagens billige timer og være færdig, når du vil bade." },
    { question: "Hvad koster et vildmarksbad med el om året?", answer: "To opvarmninger på ca. 32 kWh om måneden giver ca. 768 kWh om året, svarende til {{kr 768}}. Én opvarmning om ugen giver ca. 1.660 kWh." },
    { question: "Bruger en stor varmer mere strøm end en lille?", answer: "Næsten ikke. Det er vandmængden og antallet af grader, der bestemmer kWh. En varmer på 3 kW er bare hurtigere end en på 2 kW." },
  ],
  relatedSlugs: ["spabad", "poolpumpe", "infraroed-sauna", "pool", "poolvarmepumpe"],
  sources: [
    { name: "Swim & Fun — Manual, spavarmer 1055 og 1057 (MV-1055/1057-04-2022)", url: "https://cdn.lomax.dk/image/upload/dokumenter/70092340_1.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn vildmarksbadets strømforbrug",
    options: [
      { label: "Genopvarmning fra ca. 30 grader (ca. 12 kWh)", kwhPerUse: 12 },
      { label: "1.000 liter fra koldt vand, kun fysikken (ca. 27 kWh)", kwhPerUse: 26.7 },
      { label: "1.000 liter fra koldt vand, med låg og tab (ca. 32 kWh)", kwhPerUse: 32 },
      { label: "1.285 liter eller koldt vejr uden låg (ca. 45 kWh)", kwhPerUse: 45 },
    ],
    usageLabel: "Opvarmninger pr. måned",
    usageUnit: "gange/md",
    usageMin: 1,
    usageMax: 30,
    usageDefault: 2,
    usageStep: 1,
    per: "opvarmning",
    perYear: 12,
  },
  publishDate: "2026-12-09",
  updated: "2026-11-22",
};

export default vildmarksbad;
