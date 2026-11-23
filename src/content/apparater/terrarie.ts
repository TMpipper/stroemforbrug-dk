import type { ApplianceData } from "@/lib/types";

/**
 * Terrarie — varmespot, UVB-rør, varmemåtte og keramisk varmer til krybdyr. Intet EU-energimærke.
 * Målt forbrug: Monkfield-undersøgelsen (okt. 2022, to uger, rum på 22 °C): skægagam 1,315 kWh/døgn, kornsnog 0,983,
 * leopardgekko 0,674, kronet gekko 0,492 (The Pet Express + Pet Business World). Watt: RSPCA (skægagam 60-100 W spot,
 * 10-12 % UVB, ca. 12 timer lys; leopardgekko 60-100 W på termostat, varme slukket om natten, varmemåtte under 18 °C),
 * Exo Terra startsæt PT3836 (Solar Glo 125 W, armatur op til 160 W, 12 timers døgnrytme), Exo Terra varmemåtte 4-24 W
 * og keramisk varmer 40-250 W, Arcadia ProT5 Dragon 14 % 24/39/54 W (Swell Reptiles), Dansk Amfibiecenter (dværgskægagam,
 * UVB + dagslysrør ca. 14 timer). Årstal = døgntal × 365 (vores omregning); sæsonprofilen og fuld-effekt-loftet er vores skøn.
 */
const terrarie: ApplianceData = {
  slug: "terrarie",
  meta: {
    category: "hobby",
    usage: "always-on",
    hasEuLabel: false,
    shiftable: false,
    motif: "lampe",
    synonyms: ["terrarie", "terrarium", "krybdyr", "skægagam", "leopardgekko", "kornsnog", "varmespot terrarie", "uvb-lys", "varmemåtte terrarie", "keramisk varmer", "reptil"],
  },
  name: "Terrarie",
  article: "et",
  title: "Terrarie strømforbrug (2026) → varmespot, UVB og kWh om året",
  description:
    "Et terrarie til en skægagam bruger omkring 1,3 kWh i døgnet og 480 kWh om året. Se tallene for gekko og slange, og hvad varmespot, UVB og termostat betyder.",
  heading: "Strømforbrug for et terrarie: kWh i døgnet og pris om året",
  quickAnswer:
    "Et terrarie bruger strøm til varme og lys hver eneste dag. En måling af fire almindelige opsætninger gav 0,5-1,3 kWh i døgnet: mindst til en kronet gekko og mest til en skægagam. Det svarer til 180-480 kWh om året, eller {{kr 180}}-{{kr 480}} ved {{pris_kwh}}. Et terrarie til en skægagam bruger dermed mere end mange køleskabe.",
  kwhRange: [150, 1000],
  typicalKwh: 480,
  wattage: 124,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.1, 1.05, 1.0, 0.95, 0.9, 0.85, 0.85, 0.95, 1.0, 1.1, 1.15],
  content: `<h2>Hvad bruger strømmen i et terrarie?</h2>
<p>Krybdyr kan ikke selv lave varme, så terrariet skal give dem det, solen giver i naturen: en varm solplads, en køligere ende, så dyret kan regulere sin temperatur, og ultraviolet lys, der er nødvendigt for knoglerne. Det betyder tre eller fire elektriske ting, der kører hver dag året rundt: en varmespot, et UVB-rør, ofte et almindeligt lysrør og i nogle opsætninger en varmemåtte eller en keramisk varmer til natten.</p>
<table>
<thead><tr><th>Udstyr</th><th>Typisk effekt</th><th>Kører</th></tr></thead>
<tbody>
<tr><td>Varmespot (basking-pære)</td><td>60-160 W</td><td>Om dagen, via termostat</td></tr>
<tr><td>UVB-rør T5 (Arcadia ProT5 Dragon 14 %)</td><td>24, 39 eller 54 W</td><td>Om dagen, på timer</td></tr>
<tr><td>Varmemåtte (Exo Terra Heat Mat)</td><td>4-24 W</td><td>Døgnet rundt, via termostat</td></tr>
<tr><td>Keramisk varmer (Exo Terra Ceramic Heater)</td><td>40-250 W</td><td>Om natten, via termostat</td></tr>
</tbody>
</table>
<p>Den britiske dyreværnsorganisation RSPCA anbefaler en spot på 60-100 W med beskyttelsesgitter til en skægagam, et UVB-rør med 10-12 procent UVB og omkring 12 timers lys om dagen på timer. Exo Terras startsæt til unge skægagamer kommer med en Solar Glo-pære på 125 W i et armatur, der tåler op til 160 W, og samme 12 timers døgnrytme. Arcadias T5-rør findes i tre længder fra 24 til 54 W, så rørets effekt følger terrariets bredde.</p>

<h2>Målt forbrug for fire almindelige krybdyr</h2>
<p>Den britiske forhandler Monkfield målte i oktober 2022 i to uger, hvor meget strøm fire typiske terrarier brugte i et rum på 22 grader. Vi har ikke fundet andre målinger af en hel opsætning med termostat, så det er dem, vi bygger på, frem for tal regnet ud fra pærernes watt.</p>
<table>
<thead><tr><th>Terrarie</th><th>kWh i døgnet (målt)</th><th>kWh om året</th><th>Pris om året</th><th>Pris om måneden</th></tr></thead>
<tbody>
<tr><td>Kronet gekko</td><td>0,49</td><td>ca. 180</td><td>{{kr 180}}</td><td>{{kr 180 /md}}</td></tr>
<tr><td>Leopardgekko</td><td>0,67</td><td>ca. 246</td><td>{{kr 246}}</td><td>{{kr 246 /md}}</td></tr>
<tr><td>Kornsnog</td><td>0,98</td><td>ca. 359</td><td>{{kr 359}}</td><td>{{kr 359 /md}}</td></tr>
<tr><td>Skægagam</td><td>1,32</td><td>ca. 480</td><td>{{kr 480}}</td><td>{{kr 480 /md}}</td></tr>
</tbody>
</table>
<p>Årstallene er vores omregning: døgnforbruget gange 365. Til sammenligning vil en spot på 100 W og et UVB-rør på 24 W, der begge var tændt i 12 timer uden pause, bruge cirka 1,5 kWh i døgnet. Målingen for skægagamen ligger lidt lavere, fordi termostaten slukker spotten, når solpladsen er varm nok. Skægagamen bruger mest, fordi den skal have den varmeste solplads; RSPCA anbefaler 38-42 grader på solpladsen og 22-26 grader i den kølige ende.</p>

<h2>Natten: varme eller ej?</h2>
<p>Krybdyr i naturen oplever køligere nætter, og de fleste skal ikke have lys om natten. RSPCA anbefaler, at varmen til en leopardgekko slukkes om natten, og at der kun bruges en varmemåtte på termostat, hvis rummet kommer under 18 grader. En skægagam må ifølge RSPCA ikke komme under 20-22 grader om natten, og så bruges en keramisk varmer, som giver varme uden lys. Dansk Amfibiecenters pasningsvejledning for dværgskægagam slukker alt om natten og lader temperaturen falde til 18-24 grader.</p>
<p>Natvarmen kan flytte forbruget meget. En keramisk varmer på 60 W, der skal holde terrariet varmt i et koldt rum hele natten, kan bruge op mod 0,7 kWh på 12 timer, hvis den kører fuldt, svarende til {{kr 0,72}} pr. nat. Står terrariet i en opvarmet stue på 20-22 grader, er der ofte slet ikke brug for den. Placeringen er derfor en af de vigtigste ting: et terrarie i et koldt værelse mod nord bruger efter vores skøn mærkbart mere end det samme terrarie i stuen, og forbruget stiger om vinteren, når rummet er koldere.</p>

<h2>Termostaten er den store besparelse</h2>
<p>RSPCA anbefaler termostat på alle varmekilder, og det er både for dyrets skyld og for elregningens. Uden termostat er spotten tændt med fuld effekt i alle dagtimer, og varmemåtten kører døgnet rundt. Exo Terra skriver om sin varmemåtte, at den er beregnet til døgndrift og kan kobles til en termostat, og om den keramiske varmer, at den passer til både en tænd/sluk-termostat og en dæmpende termostat.</p>
<p>En dæmpende termostat skruer ned for spotten i stedet for at slukke den helt og giver en mere jævn temperatur. Ingen af kilderne, vi har læst, oplyser, hvor stor en del af tiden varmekilderne kører med termostat, så du må måle det selv. En stikmåler mellem stikkontakten og terrariets stikdåse viser hele opsætningens forbrug på en uge; del med syv, så har du døgnet.</p>

<h2>Bruger terrariet strøm i de dyre timer?</h2>
<p>Ja. Lyset og varmespotten er tændt om dagen, typisk fra morgen til aften, og det betyder, at de dyre timer om eftermiddagen og den tidlige aften er med. Du kan godt flytte døgnrytmen en time eller to med timeren, så lyset tænder kl. 6 og slukker kl. 18 i stedet for kl. 8 og kl. 20, og dermed undgå et par af spidstimerne. Det må dog ikke ske på bekostning af dyret: rytmen skal være fast, og den skal passe til, hvornår du selv er hjemme og kan se dyret.</p>
<p>Gevinsten er beskeden, fordi forbruget i den enkelte time er lille. Det, der virkelig flytter regningen, er natvarmen, termostaten og rummets temperatur. Har du et <a href="/akvarium/">akvarium</a> ved siden af, gælder det samme: varmelegeme og lys kører hver dag, og det er placeringen og isoleringen, der afgør resten.</p>

<h2>Sådan sparer du på terrariet</h2>
<ul>
<li><strong>Termostat på alle varmekilder</strong> — RSPCA anbefaler det for dyrets skyld, og det sparer strøm.</li>
<li><strong>Stil terrariet i et varmt rum</strong> — jo varmere rummet er, jo mindre skal spot og natvarme arbejde.</li>
<li><strong>Brug kun natvarme, når det er nødvendigt</strong> — mange arter skal have en køligere nat.</li>
<li><strong>Vælg UVB-rørets længde efter terrariet</strong> — 24 W er nok til et smalt terrarie.</li>
<li><strong>Isolér bagsiden og siderne</strong>, så varmen ikke forsvinder ud gennem glasset.</li>
<li><strong>Mål hele opsætningen</strong> med en stikmåler i en uge.</li>
</ul>
<p>Holder du også høns eller klækker æg, kan du sammenligne med en <a href="/rugemaskine/">rugemaskine</a>: den bruger strøm på samme måde, et lille varmelegeme, der kører længe, men kun i nogle uger om året.</p>`,
  faqs: [
    { question: "Hvad koster et terrarie til en skægagam i strøm?", answer: "En måling over to uger viste 1,3 kWh i døgnet for et typisk terrarie til en skægagam. Det giver cirka 480 kWh om året, svarende til {{kr 480}} ved {{pris_kwh}}." },
    { question: "Bruger et terrarie til en leopardgekko mindre strøm?", answer: "Ja. Samme måling gav 0,67 kWh i døgnet for en leopardgekko, cirka 246 kWh om året eller {{kr 246}}. Gekkoen skal have en lavere temperatur end en skægagam." },
    { question: "Hvor mange watt skal varmespotten have?", answer: "RSPCA anbefaler 60-100 W til en skægagam med beskyttelsesgitter og termostat. Exo Terras startsæt bruger en pære på 125 W." },
    { question: "Skal terrariet have varme om natten?", answer: "Det afhænger af arten og rummet. RSPCA anbefaler at slukke varmen til leopardgekkoer om natten og kun bruge varmemåtte under 18 grader, mens en skægagam ikke må komme under 20-22 grader." },
    { question: "Hvor meget strøm bruger et UVB-rør?", answer: "Et T5-rør bruger 24-54 W afhængigt af længden. I 12 timer om dagen bruger et rør på 24 W cirka 0,29 kWh i døgnet, svarende til {{kr 0,29}}." },
    { question: "Har terrarieudstyr et energimærke?", answer: "Nej, ikke som samlet opsætning. Sammenlign pærernes og varmernes watt, og brug termostat på varmen." },
  ],
  relatedSlugs: ["akvarium", "rugemaskine", "led-paere", "hoensehus"],
  sources: [
    { name: "The Pet Express — How much does it cost to run my reptile enclosure (Monkfield-målingen)", url: "https://www.thepetexpress.co.uk/blog/blog-new-products/how-much-does-it-cost-to-run-my-reptile-enclosure/" },
    { name: "Pet Business World — Monkfield study reveals energy cost of keeping reptiles", url: "https://www.petbusinessworld.co.uk/trade-news/distributors/monkfield-study-reveals-energy-cost-of-keeping-reptiles.html" },
    { name: "RSPCA — Bearded dragon care", url: "https://rspca.org.uk/adviceandwelfare/pets/other/beardeddragon" },
    { name: "RSPCA — Leopard gecko care", url: "https://www.rspca.org.uk/adviceandwelfare/pets/other/leopardgecko" },
    { name: "Exo Terra — brugsanvisning startsæt PT3836", url: "https://exo-terra.com/wp-content/uploads/sites/3/PT3836_Starter_Kit_EU.pdf" },
    { name: "Exo Terra — Heat Mat", url: "https://exo-terra.com/products/heating/substrate-heaters/heat-mat-8w-ptc/" },
    { name: "Exo Terra — Ceramic Heater", url: "https://exo-terra.com/products/heating/radiant-heaters/ceramic-heater-60w/" },
    { name: "Swell Reptiles — Arcadia ProT5 Kit Dragon 14 %", url: "https://www.reptiles.swelluk.com/arcadia-prot5-kit-dragon-14" },
    { name: "Dansk Amfibiecenter — Pasningsvejledning for dværgskægagam", url: "https://media.plantorama.dk/cdn/xZ8F2w/dvargskagagamer.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn terrariets strømforbrug",
    options: [
      { label: "Kronet gekko (målt 0,49 kWh i døgnet)", kwhPerUse: 0.492 },
      { label: "Leopardgekko (målt 0,67 kWh i døgnet)", kwhPerUse: 0.674 },
      { label: "Kornsnog (målt 0,98 kWh i døgnet)", kwhPerUse: 0.983 },
      { label: "Skægagam (målt 1,32 kWh i døgnet)", kwhPerUse: 1.315 },
      { label: "Stort terrarie: 160 W spot og 54 W UVB i 12 timer uden termostat", kwhPerUse: 2.57 },
    ],
    usageLabel: "Antal terrarier",
    usageUnit: "terrarier",
    usageMin: 1,
    usageMax: 6,
    usageDefault: 1,
    usageStep: 1,
    per: "døgn",
    perYear: 365,
  },
  publishDate: "2026-12-21",
  updated: "2026-11-23",
};

export default terrarie;
