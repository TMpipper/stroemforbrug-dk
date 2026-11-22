import type { ApplianceData } from "@/lib/types";

const elcykel: ApplianceData = {
  slug: "elcykel",
  meta: {
    category: "transport",
    usage: "per-km",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["elcykel", "el-cykel", "e-bike", "ebike", "ladcykel med el", "elcykel batteri", "opladning af elcykel", "speed pedelec"],
  },
  name: "Elcykel",
  article: "en",
  title: "Elcykel strømforbrug (2026) → kWh pr. km og pr. opladning",
  description: "En elcykel bruger ca. 0,3-0,9 kWh på en fuld opladning og under 2 kWh pr. 100 km. Se prisen pr. opladning, pr. km og om året, og hvornår du bør lade.",
  heading: "Strømforbrug for en elcykel: kWh pr. km, pris pr. opladning og billigste tidspunkt",
  quickAnswer:
    "En elcykel med et batteri på 500 Wh bruger lidt over en halv kWh fra stikkontakten på en fuld opladning, og det koster {{kr 0,55}} ved {{pris_kwh}}. Pr. kilometer bruger den typisk 6-18 Wh, så 2.000 km om året giver cirka 18 kWh, svarende til {{kr 18}}. Batteriet slides mere af opladningen end af strømprisen.",
  kwhRange: [3, 90],
  typicalKwh: 18,
  wattage: 100,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.55, 0.6, 0.85, 1.1, 1.3, 1.35, 1.3, 1.3, 1.2, 1.0, 0.75, 0.7],
  content: `<h2>Strøm pr. opladning: batteriets størrelse sætter loftet</h2>
<p>Den nemmeste måde at regne en elcykels strømforbrug ud er at se på batteriet. Kapaciteten står i watt-timer (Wh) på batteriet eller i manualen, og det er den mængde energi, batteriet kan rumme. Bosch, der laver motorer og batterier til mange cykelmærker, sælger batterier fra 250 til 800 Wh, og Tænk anbefaler 200-400 Wh til korte ture, 400-600 Wh til de fleste ture op til 40 km og over 600 Wh til lange eller kuperede ture.</p>
<p>Fra stikkontakten bruger du lidt mere, end batteriet rummer, fordi opladeren og batteriet taber lidt energi som varme. Bosch skriver i sin batteriguide, at en fuld opladning af et PowerPack 500 koster højst 17 eurocent ved en elpris på 33 eurocent pr. kWh, hvilket svarer til godt en halv kWh fra stikkontakten.</p>
<table>
<thead><tr><th>Batteri</th><th>kWh fra stikkontakten (ca.)</th><th>Pris pr. fuld opladning</th></tr></thead>
<tbody>
<tr><td>300 Wh</td><td>0,33 kWh</td><td>{{kr 0,33}}</td></tr>
<tr><td>400 Wh</td><td>0,44 kWh</td><td>{{kr 0,44}}</td></tr>
<tr><td>500 Wh</td><td>0,55 kWh</td><td>{{kr 0,55}}</td></tr>
<tr><td>625 Wh</td><td>0,69 kWh</td><td>{{kr 0,69}}</td></tr>
<tr><td>800 Wh</td><td>0,88 kWh</td><td>{{kr 0,88}}</td></tr>
</tbody>
</table>
<p>Vi har regnet med, at cirka 10 procent af strømmen går tabt i opladningen. Lader du kun fra 20 til 80 procent, som Tænk anbefaler af hensyn til batteriets levetid, bruger du cirka 60 procent af tallet i tabellen pr. gang.</p>

<h2>Strømforbrug pr. kilometer</h2>
<p>Hvor langt du kommer på en opladning, afhænger af langt mere end batteriet. Motorens hjælpeniveau, vægten af cykel og rytter, bakker, modvind, dæktryk og temperatur kan tilsammen fordoble eller halvere rækkevidden. Derfor oplyser producenterne rækkevidden som et spænd, og derfor regner vi forbruget pr. kilometer som et spænd: 6-18 Wh pr. km fra stikkontakten, afhængigt af hvor meget motoren arbejder. Tallene er vores omregning af batteristørrelse og typiske rækkevidder, ikke en måling af en bestemt cykel.</p>
<table>
<thead><tr><th>Kørsel</th><th>kWh pr. km</th><th>Pris pr. 100 km</th><th>2.000 km om året</th></tr></thead>
<tbody>
<tr><td>Fladt terræn, lav støtte</td><td>0,006</td><td>{{kr 0,6}}</td><td>{{kr 12}}</td></tr>
<tr><td>Bykørsel, mellemste støtte</td><td>0,009</td><td>{{kr 0,9}}</td><td>{{kr 18}}</td></tr>
<tr><td>Bakker eller modvind, høj støtte</td><td>0,013</td><td>{{kr 1,3}}</td><td>{{kr 26}}</td></tr>
<tr><td>Ladcykel med last eller speed pedelec</td><td>0,018</td><td>{{kr 1,8}}</td><td>{{kr 36}}</td></tr>
</tbody>
</table>
<p>Selv i den tunge ende koster 100 km under to kWh. Til sammenligning bruger en <a href="/elbil/">elbil</a> typisk 15-20 kWh pr. 100 km — omkring ti gange mere — og en bil på benzin bruger langt mere energi end begge.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Hjælpeniveauet</strong> — det højeste niveau giver mest fart op ad bakke, men tømmer batteriet hurtigst. Eco-niveauet kan give flere gange så lang rækkevidde.</li>
<li><strong>Vægt</strong> — en ladcykel med to børn og indkøb skal bruge mere energi end en let bycykel.</li>
<li><strong>Fart</strong> — vindmodstanden vokser hurtigt med farten. På en almindelig elcykel stopper motoren ved 25 km/t, så alt over det er dit eget tråd.</li>
<li><strong>Dæktryk</strong> — for lavt tryk øger rullemodstanden. Pump dækkene efter tallet på dækkets side.</li>
<li><strong>Kulde</strong> — et koldt batteri leverer mindre energi. Det er en af grundene til, at rækkevidden falder om vinteren.</li>
<li><strong>Batteriets alder</strong> — et ældre batteri rummer mindre, så du skal lade oftere for samme antal kilometer.</li>
</ul>

<h2>Batteriet er den rigtige udgift</h2>
<p>Strømmen til en elcykel er så billig, at den næsten ikke kan ses på elregningen. Det, der koster, er batteriet. Tænk skriver, at et batteri typisk mister 3-5 procent af kapaciteten det første år, 10-15 procent efter to-tre år og omkring 20 procent efter tre-fem år, og et nyt batteri koster ofte flere tusinde kroner at købe. Her gør din måde at lade på en reel forskel:</p>
<ul>
<li>Lad helst til omkring 80 procent, og lad ikke batteriet gå under 20 procent, når det kan undgås.</li>
<li>Undgå at lade eller opbevare batteriet i frost eller i stærk varme. Tag batteriet med ind om vinteren.</li>
<li>Skal cyklen stå i flere uger, så opbevar batteriet halvt opladet frem for helt fuldt eller helt tomt.</li>
<li>Brug den oplader, der hører til cyklen.</li>
</ul>
<p>Bosch oplyser, at et PowerPack 500 lades helt op på cirka 4,5 timer med deres 4A-oplader og til halvdelen på cirka 1,7 timer. Opladningen trækker altså kun omkring 100-150 watt, og en fuld opladning kan let ligge inden for en nat.</p>

<h2>Hvornår skal du lade elcyklen?</h2>
<p>En elcykel er let at lade, når strømmen er billig. Batteriet skal sjældent bruges med det samme, og en opladning tager kun få timer. Har du timeafregnet strøm, kan du sætte opladeren i om aftenen og lade en timer eller en smart-stikdåse starte den efter kl. 21, når den dyre periode med højere nettarif er slut. Oversigten over dagens billigste timer længere oppe på siden viser, hvornår prisen er lavest i dag.</p>
<p>I kroner betyder det dog meget lidt: forskellen mellem en dyr og en billig time er få øre pr. opladning. Er det mere praktisk at lade på arbejdet eller lige når du kommer hjem, så gør det. Det vigtigste for økonomien er at passe på batteriet.</p>

<h2>Sådan måler du din egen cykel</h2>
<p>Vil du kende forbruget på netop din elcykel, er det nemt at måle. Sæt en stikmåler mellem opladeren og stikkontakten, og lad batteriet op fra det niveau, det har efter en almindelig uges kørsel. Notér, hvor mange kWh måleren viser, og hvor mange kilometer du har kørt siden sidste opladning — de fleste displays viser en tripmåler. Del kWh med kilometer, så har du dit eget tal pr. km, inklusive opladerens tab.</p>
<p>Gentag målingen om vinteren og om sommeren, og med og uden last. Mange bliver overraskede over, hvor meget kulde og høj støtte betyder: samme tur kan bruge næsten det dobbelte en kold dag i modvind. Tallet er nyttigt, hvis du overvejer et større batteri: ved 10 Wh pr. km rækker et batteri på 500 Wh omkring 45 km, når opladningstabet er trukket fra.</p>

<h2>Elcykel, el-løbehjul og elbil</h2>
<p>Pr. kilometer ligger elcyklen i samme størrelsesorden som et <a href="/el-loebehjul/">el-løbehjul</a>, fordi begge er lette og kører langsomt. Elcyklen har dog den fordel, at du selv træder, så motoren kun leverer en del af energien. Et el-løbehjul skal levere det hele. Sammenlignet med at lade en elbil er strømforbruget til en elcykel ubetydeligt, og hvis elcyklen erstatter korte bilture i byen, er besparelsen på brændstof eller strøm til bilen langt større end prisen for at lade cyklen.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Kør på eco- eller tour-niveau på flade strækninger, og gem det høje niveau til bakkerne.</li>
<li>Hold dækkene pumpede.</li>
<li>Skift til et lavere gear ved start og op ad bakke, så motoren arbejder ved et godt omdrejningstal.</li>
<li>Tag batteriet ind, når det er koldt.</li>
<li>Lad i de billige timer, hvis det passer ind i din hverdag.</li>
</ol>
<p>Vil du se, hvad en opladning koster lige nu, så brug beregneren ovenfor og vælg den type kørsel, der passer på din cykel.</p>`,
  faqs: [
    { question: "Hvad koster det at lade en elcykel?", answer: "En fuld opladning af et 500 Wh-batteri bruger godt en halv kWh fra stikkontakten og koster {{kr 0,55}} ved {{pris_kwh}}. Et 800 Wh-batteri koster {{kr 0,88}}." },
    { question: "Hvor meget strøm bruger en elcykel pr. km?", answer: "Typisk 6-18 Wh pr. km fra stikkontakten, afhængigt af hjælpeniveau, vægt og terræn. 100 km koster derfor {{kr 0,6}}-{{kr 1,8}}." },
    { question: "Hvad koster en elcykel i strøm om året?", answer: "Kører du 2.000 km om året i byen, bruger cyklen cirka 18 kWh, svarende til {{kr 18}}. Med ladcykel og meget last kan det blive det dobbelte." },
    { question: "Hvor lang tid tager det at lade en elcykel?", answer: "Et 500 Wh-batteri lades fuldt på cirka 4,5 timer med Boschs 4A-oplader og til halvdelen på cirka 1,7 timer. Opladeren trækker omkring 100-150 W." },
    { question: "Skal jeg lade elcyklen helt op hver gang?", answer: "Det er skånsomt for batteriet at lade til omkring 80 procent og ikke gå under 20 procent. Det sparer også lidt strøm pr. gang, men det vigtigste er batteriets levetid." },
    { question: "Hvornår er det billigst at lade elcyklen?", answer: "I de timer, hvor timeprisen er lav, typisk om natten. Forskellen er dog kun få øre pr. opladning, fordi en fuld opladning kun koster omkring {{kr 0,55}}." },
  ],
  relatedSlugs: ["el-loebehjul", "elbil", "ladestander", "ipad", "mobil-opladning"],
  sources: [
    { name: "Tænk — Batteri til elcykler: det skal du vide", url: "https://taenk.dk/forbrugerliv/fritid/batteri-til-elcykler-det-skal-du-vide" },
    { name: "Bosch eBike Systems — batterier (kapacitet og ladetider)", url: "https://www.bosch-ebike.com/dk/produkter/batterier" },
    { name: "Bosch eBike Systems — Battery Guide", url: "https://cdn.shopify.com/s/files/1/0217/7868/files/Bosch_battery_Guide.pdf" },
  ],
  calculatorConfig: {
    title: "Beregn elcyklens strømforbrug",
    options: [
      { label: "Fladt terræn, lav støtte (ca. 6 Wh/km)", kwhPerUse: 0.006 },
      { label: "Bykørsel, mellemste støtte (ca. 9 Wh/km)", kwhPerUse: 0.009 },
      { label: "Bakker eller modvind, høj støtte (ca. 13 Wh/km)", kwhPerUse: 0.013 },
      { label: "Ladcykel med last eller speed pedelec (ca. 18 Wh/km)", kwhPerUse: 0.018 },
    ],
    usageLabel: "Kilometer pr. år",
    usageUnit: "km/år",
    usageMin: 200,
    usageMax: 10000,
    usageDefault: 2000,
    usageStep: 100,
    per: "km",
    perYear: 1,
  },
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default elcykel;
