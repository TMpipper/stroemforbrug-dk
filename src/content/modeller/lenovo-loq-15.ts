import type { ModelData } from "@/lib/models";

const es = (id: string) => `https://www.energystar.gov/productfinder/product/certified-computers/details/${id}`;

const lenovoLoq15: ModelData = {
  slug: "lenovo-loq-15",
  parent: "laptop",
  brand: "Lenovo",
  name: "Lenovo LOQ 15",
  released: "2026-02",
  synonyms: [
    "lenovo loq 15 strømforbrug",
    "lenovo loq watt",
    "loq 15irh11e strømforbrug",
    "loq 15iph11 watt",
    "loq 15ahp11 forbrug",
    "lenovo gaming laptop strømforbrug",
    "lenovo loq batteri wh",
  ],
  title: "Lenovo LOQ 15 strømforbrug (2026) → watt i tomgang og dvale",
  description:
    "Lenovo LOQ 15 i fire udgaver fra 2026: watt i tomgang og dvale fra ENERGY STAR, kWh om året, prisen for en opladning og hvad grafikkortet koster i strøm.",
  intro:
    "Udgaverne af LOQ 15 bruger fra 3,7 til 14,4 W i tomgang, næsten fire gange så meget i den ene ende som i den anden. Forskellen ligger i, om grafikkortet får lov at hvile.",
  content: `<h2>Hvor mange watt bruger Lenovo LOQ 15?</h2>
<p>LOQ er Lenovos billigere gamingserie, et trin under Legion. LOQ 15 er 15,3" og findes i mange konfigurationer med Intel eller AMD og forskellige grafikkort. Bærbare har ikke et EU-energimærke, men Lenovo får maskinerne certificeret efter den amerikanske ENERGY STAR, hvor forbruget måles i kort tomgang med skærmen tændt, i dvale og slukket. Typenavnet, for eksempel 15IRH11E, står på mærkaten under maskinen og i Lenovos egen app, så du kan se, hvilken udgave du har.</p>
<p>I ENERGY STAR står fire udgaver fra 2026. Typenavnet fortæller processoren: I for Intel og A for AMD. Tallet 11 er generationen, og alle fire er 2026-udgaver.</p>
<table>
<thead><tr><th>Udgave</th><th>Processor</th><th>Tomgang</th><th>Dvale</th><th>Batteri</th><th>kWh om året*</th></tr></thead>
<tbody>
<tr><td>LOQ 15IPH11E</td><td>Intel Core Ultra X7 358H</td><td>3,7 W</td><td>0,7 W</td><td>78,4 Wh</td><td>12,7</td></tr>
<tr><td>LOQ 15IPH11</td><td>Intel Core Ultra</td><td>4,9 W</td><td>0,7 W</td><td>58,9 Wh</td><td>15,3</td></tr>
<tr><td>LOQ 15AHP11</td><td>AMD Ryzen 7</td><td>14,1 W</td><td>1,4 W</td><td>60 Wh</td><td>40,1</td></tr>
<tr><td>LOQ 15IRH11E</td><td>Intel Core 7 230H</td><td>14,4 W</td><td>1,2 W</td><td>78,4 Wh</td><td>39,4</td></tr>
</tbody>
</table>
<p>*Seks timer tændt om dagen og dvale resten af døgnet, alle årets dage.</p>

<h2>Grafikkortet gør forskellen</h2>
<p>Tomgangstallene deler sig i to grupper. 15IPH11E og 15IPH11 bruger 3,7–4,9 W, på niveau med en almindelig kontorbærbar. 15IRH11E og 15AHP11 bruger 14,1–14,4 W, omkring tre gange så meget. ENERGY STAR-posten for 15IRH11E viser, at grafikkortet ikke er sat til at slå over på processorens indbyggede grafik, når maskinen kører på strøm fra stikket. Det dedikerede grafikkort kører altså med, også når skærmen bare viser skrivebordet. Posten for 15IPH11E angiver ikke noget dedikeret grafikkort, og den bruger 3,7 W.</p>
<p>Med vores profil bliver forskellen stor: omkring 39 kWh om året for 15IRH11E mod 13 kWh for 15IPH11E, svarende til en forskel på {{kr 27}} om året. Har du en LOQ med dedikeret grafikkort, kan du i Lenovos app vælge hybridtilstand for grafikken, så grafikkortet kan slukke, når du ikke spiller. ENERGY STAR har målt maskinen, som den leveres, så den indstilling kan flytte dit forbrug ned mod de lave tal.</p>

<h2>Hvad koster gaming og opladning?</h2>
<p>Tomgangstallene siger ikke, hvad LOQ 15 bruger, når du spiller. Under tung last kan maskinen trække op til opladerens effekt: 135 W for 15IRH11E og 15IPH11E og 245 W for 15AHP11 og 15IPH11 ifølge ENERGY STAR-posterne. To timers spil ved fuld effekt på en 245 W-oplader er højst omkring 0,49 kWh, svarende til {{kr 0,49}}. I praksis bruger de fleste spil mindre end opladerens maksimum, men det er dette loft, du skal regne med, hvis du spiller hver dag.</p>
<p>En fuld opladning af batteriet på 78,4 Wh trækker omkring 0,09 kWh fra stikkontakten, når vi regner med et typisk ladetab på 12 %. Det koster {{oere 0,089}} ved {{pris_kwh}}. Gamingmaskiner bruges dog oftest med opladeren i, så batteriet betyder mindre for regningen end for andre bærbare.</p>

<h2>LOQ 15 mod andre bærbare på siden</h2>
<p>De to sparsomme udgaver af LOQ 15 ligger tæt på almindelige bærbare. <a href="/laptop/lenovo-ideapad-slim-3/">Lenovo IdeaPad Slim 3</a> bruger 2,8–7,2 W i tomgang, og <a href="/laptop/asus-vivobook/">ASUS Vivobook</a> 3,2–6,1 W. 15IPH11E med 3,7 W er altså på niveau med en kontorbærbar, selvom den er bygget til spil. <a href="/laptop/macbook-air-m4/">MacBook Air M4</a> bruger 3,63 W ifølge Apples egne målinger ved 230 V, men den har ingen gamingskærm og intet dedikeret grafikkort.</p>
<p>De to udgaver med dedikeret grafikkort aktivt i tomgang bruger mere end nogen af de almindelige bærbare på vores modelsider, også mere end <a href="/laptop/dell-xps/">Dell XPS 16</a> med Nvidia N1x på 10,4 W. Lenovos tal er målt til ENERGY STAR ved 115 V og på én bestemt konfiguration af hver udgave; med et andet grafikkort eller en anden skærm kan tallene ligge over eller under.</p>

<h2>Sådan sparer du strøm på en LOQ 15</h2>
<ul>
<li>Vælg hybridtilstand for grafikken i Lenovos app, når du ikke spiller, så grafikkortet kan slukke.</li>
<li>Skru ned for skærmens opdateringshastighed til 60 Hz ved kontorarbejde; høj opdateringshastighed trækker mere.</li>
<li>Lås billedhastigheden i spil, så maskinen ikke laver flere billeder i sekundet, end skærmen kan vise.</li>
<li>Luk maskinen ned om natten i stedet for at lade den stå i dvale; dvalen er 0,7–1,4 W.</li>
</ul>
<p>Se flere modeller og regn din egen ud på siden om <a href="/laptop/">bærbares strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger Lenovo LOQ 15?",
      answer:
        "Ifølge Lenovos ENERGY STAR-målinger 3,7–14,4 W i tomgang med skærmen tændt og 0,7–1,4 W i dvale, afhængigt af udgaven. Under spil kan den trække op til opladerens 135–245 W.",
    },
    {
      question: "Hvad koster det at bruge en LOQ 15 om året?",
      answer:
        "Med seks timer tændt om dagen og dvale resten af døgnet bruger 15IPH11E omkring 12,7 kWh om året, svarende til {{kr 12,7}}. 15IRH11E bruger omkring 39 kWh, svarende til {{kr 39}}.",
    },
    {
      question: "Hvorfor bruger nogle LOQ 15 så meget i tomgang?",
      answer:
        "Fordi det dedikerede grafikkort kører med. ENERGY STAR-posten for 15IRH11E viser, at grafikkortet ikke skifter til processorens grafik ved strøm fra stikket, som maskinen leveres.",
    },
    {
      question: "Hvad koster det at oplade en LOQ 15?",
      answer:
        "En fuld opladning af batteriet på 78,4 Wh trækker omkring 0,09 kWh fra stikket, regnet med et typisk ladetab. Det koster {{oere 0,089}} ved månedens elpris.",
    },
    {
      question: "Er Lenovos tal målt ved dansk spænding?",
      answer:
        "Nej. ENERGY STAR er en amerikansk certificering, der måler ved 115 V. Ved 230 V kan forbruget afvige lidt, typisk ikke meget for en bærbar.",
    },
  ],
  sources: [
    { name: "ENERGY STAR — Lenovo LOQ 15IPH11E", url: es("4675594") },
    { name: "ENERGY STAR — Lenovo LOQ 15IPH11", url: es("4572748") },
    { name: "ENERGY STAR — Lenovo LOQ 15AHP11", url: es("4520387") },
    { name: "ENERGY STAR — Lenovo LOQ 15IRH11E", url: es("4686674") },
  ],
  variants: [
    { name: "15IPH11E Intel Core Ultra X7 (2026)", watts: { off: 0.2, sleep: 0.7, idle: 3.7 }, adapterW: 135, batteryWh: 78.4, source: 0 },
    { name: "15IPH11 Intel Core Ultra (2026)", watts: { off: 0.2, sleep: 0.7, idle: 4.9 }, adapterW: 245, batteryWh: 58.9, source: 1 },
    { name: "15AHP11 AMD Ryzen 7 (2026)", watts: { off: 0.2, sleep: 1.4, idle: 14.1 }, adapterW: 245, batteryWh: 60, source: 2 },
    { name: "15IRH11E Intel Core 7 230H (2026)", watts: { off: 0.2, sleep: 1.2, idle: 14.4 }, adapterW: 135, batteryWh: 78.4, source: 3 },
  ],
  publishDate: "2026-12-30",
  updated: "2026-11-24",
  measuredBy: "efter ENERGY STAR (Lenovos egne målinger til den amerikanske certificering, ved 115 V)",
  figuresNote:
    "Tallene er Lenovos egne målinger til den amerikanske ENERGY STAR-certificering: kort tomgang med skærmen tændt, dvale og slukket, målt ved 115 V på den konfiguration, Lenovo har certificeret. Ved dansk 230 V kan tallene afvige lidt. Batteriets størrelse og opladerens effekt er fra samme certificering, og prisen for en opladning er regnet med et typisk ladetab, ikke et tal fra Lenovo. Kilderne står nederst på siden.",
};

export default lenovoLoq15;
