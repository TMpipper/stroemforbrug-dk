import type { ApplianceData } from "@/lib/types";

const elLoebehjul: ApplianceData = {
  slug: "el-loebehjul",
  meta: {
    category: "transport",
    usage: "per-km",
    hasEuLabel: false,
    shiftable: true,
    motif: "batteri",
    synonyms: ["el-løbehjul", "elløbehjul", "elektrisk løbehjul", "e-scooter", "el scooter", "segway ninebot", "xiaomi løbehjul", "opladning af el-løbehjul"],
  },
  name: "El-løbehjul",
  article: "et",
  title: "El-løbehjul strømforbrug (2026) → kWh pr. km og opladning",
  description: "Et el-løbehjul bruger ca. 0,3-0,8 kWh på en fuld opladning og 10-17 Wh pr. km. Se prisen pr. opladning, pr. 100 km og om året, og hvornår du skal lade.",
  heading: "Strømforbrug for et el-løbehjul: kWh pr. km, pris pr. opladning og billigste tidspunkt",
  quickAnswer:
    "Et el-løbehjul med et batteri på 450-550 Wh bruger cirka en halv kWh fra stikkontakten på en fuld opladning, og det koster {{kr 0,5}}-{{kr 0,6}} ved {{pris_kwh}}. Pr. kilometer er det typisk 10-17 Wh, så 1.000 km om året koster omkring {{kr 13}}. Det er batteriets slid, ikke strømmen, der er den store udgift.",
  kwhRange: [2, 70],
  typicalKwh: 13,
  wattage: 120,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [0.5, 0.55, 0.85, 1.1, 1.35, 1.4, 1.35, 1.35, 1.25, 1.0, 0.7, 0.6],
  content: `<h2>Strømforbrug pr. opladning</h2>
<p>Et el-løbehjul har et batteri, der rummer et bestemt antal watt-timer (Wh), og det er den bedste vej til at regne forbruget ud. Segway oplyser for eksempel, at deres MAX G30D II, en af de mere udbredte modeller i Danmark, har et batteri på 551 Wh. Mellemklassemodeller ligger typisk omkring 400-450 Wh. Mindre og lettere løbehjul har ofte 250-350 Wh, mens de store modeller med to motorer kan have langt mere.</p>
<p>Fra stikkontakten bruger du lidt mere, end batteriet rummer, fordi der er et tab i opladeren og i batteriet. Vi regner med cirka 10 procent tab.</p>
<table>
<thead><tr><th>Batteri</th><th>Eksempel</th><th>kWh fra stikkontakten (ca.)</th><th>Pris pr. fuld opladning</th></tr></thead>
<tbody>
<tr><td>280 Wh</td><td>Lille bymodel</td><td>0,31 kWh</td><td>{{kr 0,31}}</td></tr>
<tr><td>446 Wh</td><td>Mellemklassemodel</td><td>0,49 kWh</td><td>{{kr 0,49}}</td></tr>
<tr><td>551 Wh</td><td>Segway MAX G30D II</td><td>0,61 kWh</td><td>{{kr 0,61}}</td></tr>
<tr><td>700 Wh</td><td>Stor model</td><td>0,77 kWh</td><td>{{kr 0,77}}</td></tr>
</tbody>
</table>
<p>Selv den største opladning i tabellen er under én kWh. Til sammenligning bruger en <a href="/vaskemaskine/">vaskemaskine</a> ofte en halv til en hel kWh på en enkelt vask. Strømmen til et el-løbehjul er en meget lille post på elregningen.</p>

<h2>Strømforbrug pr. kilometer</h2>
<p>Producenterne oplyser en rækkevidde, men den er målt under gode forhold. Segway angiver op til 65 km for MAX G30D II og skriver selv, at det er en teoretisk rækkevidde, målt under gode forhold. Deler man batteriet med rækkevidden, får man under 10 Wh pr. km — det er bundgrænsen. I praksis, med stop og start, bakker, modvind og en tungere rytter, er rækkevidden ofte en tredjedel eller halvdelen lavere, og forbruget derfor højere.</p>
<table>
<thead><tr><th>Kørsel</th><th>kWh pr. km (fra stikkontakten)</th><th>Pris pr. 100 km</th><th>1.000 km om året</th></tr></thead>
<tbody>
<tr><td>Rolig kørsel, fladt, let rytter</td><td>0,010</td><td>{{kr 1}}</td><td>{{kr 10}}</td></tr>
<tr><td>Almindelig bykørsel</td><td>0,013</td><td>{{kr 1,3}}</td><td>{{kr 13}}</td></tr>
<tr><td>Bakker, kulde eller tung rytter</td><td>0,017</td><td>{{kr 1,7}}</td><td>{{kr 17}}</td></tr>
</tbody>
</table>
<p>Tallene er vores omregning af batteristørrelse og opgivne rækkevidder, med et tillæg for virkelige forhold og opladningstab. De er ikke målt på en bestemt model. Vil du kende dit eget forbrug, så notér kilometertælleren mellem to fulde opladninger og del 0,6 kWh — eller hvad dit batteri trækker — med de kørte kilometer.</p>

<h2>Hvad bestemmer forbruget?</h2>
<ul>
<li><strong>Rytterens vægt</strong> — et løbehjul har ingen pedaler, så motoren skal flytte hele vægten selv. En rytter på 90 kg bruger mærkbart mere end en på 60 kg.</li>
<li><strong>Fart</strong> — i Danmark må et el-løbehjul højst køre 20 km/t. Ved den fart er luftmodstanden en stor del af forbruget, og kører du i sportstilstand hele vejen, tømmes batteriet hurtigere.</li>
<li><strong>Stop og start</strong> — hver acceleration fra stilstand koster energi. Bykørsel med mange lyskryds bruger mere end en lang, jævn cykelsti.</li>
<li><strong>Bakker og vind</strong> — op ad bakke og i modvind arbejder motoren hårdt.</li>
<li><strong>Dæk</strong> — luftfyldte dæk med for lavt tryk øger rullemodstanden.</li>
<li><strong>Temperatur</strong> — et koldt batteri leverer mindre, så rækkevidden falder om vinteren.</li>
</ul>

<h2>Opladning og batteriets levetid</h2>
<p>Segway oplyser, at MAX G30D II lades fuldt på cirka 6 timer med den indbyggede oplader. Opladeren trækker altså kun omkring 100 watt, og en opladning kan ligge hen over natten. Strømmen er billig, men batteriet er det ikke: et nyt batteri koster en stor del af det, et nyt løbehjul koster at købe. Derfor er det klogt at lade på en måde, der skåner batteriet.</p>
<ul>
<li>Lad ikke batteriet stå helt tomt i længere tid.</li>
<li>Lad helst indendørs ved stuetemperatur, ikke i en kold gang eller i bagagerummet.</li>
<li>Skal løbehjulet stå om vinteren, så lad det op til omkring halvdelen og oplad det en gang imellem, så batteriet ikke dybaflades.</li>
<li>Brug den oplader, der fulgte med.</li>
</ul>
<p>Lad aldrig et el-løbehjul uden opsyn, hvis batteriet er beskadiget, har været i vand eller bliver varmt under opladningen. Litium-batterier kan bryde i brand, og opladning om natten bør ske et sted med røgalarm og væk fra flugtveje.</p>

<h2>Hvornår skal du lade?</h2>
<p>Et el-løbehjul er nemt at lade i de billige timer, fordi du sjældent skal bruge det midt om natten. Har du timeafregnet strøm, kan du sætte opladeren i efter kl. 21, når den dyre periode med højere nettarif er slut, eller bruge en smart-stikdåse, der starter, når prisen er lav. Oversigten over dagens timepriser længere oppe på siden viser, hvornår prisen er lavest i dag. Forskellen er dog kun få øre pr. opladning, så praktisk lader du, når det passer dig.</p>

<h2>Delte løbehjul og din egen elregning</h2>
<p>Kører du på et delt el-løbehjul fra en udlejer i byen, bruger det ikke strøm fra din elmåler. Udlejeren lader eller skifter batterierne selv, og prisen for strømmen indgår i minutprisen. Ejer du selv løbehjulet, er det din elmåler, der tæller. Det betyder også, at en tur på eget løbehjul koster en brøkdel af en tur på et delt — men det er ikke strømmen, der gør forskellen. Det er udlejerens drift og afskrivning, der koster.</p>
<p>Har du løbehjul med til arbejdet og lader det der, er det arbejdsgiverens strøm. Det er få øre pr. opladning, og de fleste arbejdspladser har ikke noget imod det, men det er god stil at spørge, og opladningen bør ske et sted, hvor en brand ikke kan spærre en flugtvej.</p>

<h2>Batteriet, kulden og rækkevidden</h2>
<p>Om vinteren falder rækkevidden, fordi et koldt litium-batteri leverer mindre energi og har sværere ved at tage imod strøm. Opbevar derfor løbehjulet indendørs, og lad det først, når batteriet har stuetemperatur. Lader du et iskoldt batteri, kan det tage skade. Kører du meget om vinteren, så regn med den tunge række i tabellen ovenfor: 17 Wh pr. km eller mere.</p>

<h2>Regler for el-løbehjul i Danmark</h2>
<p>Tænk opsummerer de danske regler: et el-løbehjul må højst køre 20 km/t, du skal være mindst 15 år for at køre alene, og under 15 år må du kun køre sammen med en voksen over 18. Det er lovpligtigt at bære cykelhjelm, og du må ikke køre på fortov, gangstier eller i fodgængerovergange. Reglerne betyder ikke noget for strømforbruget, men de sætter et loft over farten, og dermed også over, hvor meget energi du kan bruge pr. kilometer.</p>

<h2>El-løbehjul eller elcykel?</h2>
<p>En <a href="/elcykel/">elcykel</a> bruger typisk lidt mindre strøm pr. kilometer, fordi du selv træder og motoren kun hjælper til. Et el-løbehjul er til gengæld lettere at tage med i toget og bussen og fylder mindre derhjemme. Begge bruger så lidt strøm, at prisen pr. kilometer ikke bør afgøre valget. Erstatter de korte ture i bil, er besparelsen på bilen langt større end strømmen til opladningen — en <a href="/elbil/">elbil</a> bruger omkring ti gange så meget energi pr. kilometer.</p>

<h2>Sådan sparer du strøm</h2>
<ol>
<li>Kør i eco- eller standardtilstand, og brug sportstilstand kun når du har brug for det.</li>
<li>Hold dæktrykket efter producentens anvisning.</li>
<li>Accelerér roligt fra stilstand.</li>
<li>Opbevar og lad løbehjulet indendørs om vinteren.</li>
<li>Lad i de billige timer, hvis det passer ind.</li>
</ol>`,
  faqs: [
    { question: "Hvad koster det at lade et el-løbehjul?", answer: "Et batteri på 450-550 Wh bruger cirka en halv kWh fra stikkontakten og koster {{kr 0,5}}-{{kr 0,6}} pr. fuld opladning ved {{pris_kwh}}." },
    { question: "Hvor meget strøm bruger et el-løbehjul pr. km?", answer: "Typisk 10-17 Wh pr. km fra stikkontakten i virkelig kørsel. 100 km koster derfor {{kr 1}}-{{kr 1,7}}." },
    { question: "Hvad koster et el-løbehjul i strøm om året?", answer: "Ved 1.000 km om året bruger et el-løbehjul cirka 13 kWh, svarende til {{kr 13}}." },
    { question: "Hvor lang tid tager det at lade et el-løbehjul?", answer: "Segway oplyser cirka 6 timer for MAX G30D II med den indbyggede oplader. Mindre opladere kan tage længere tid. En opladning kan derfor ligge hen over natten." },
    { question: "Hvorfor kører mit el-løbehjul kortere end producenten lover?", answer: "Rækkevidden er målt under gode forhold med en let rytter og moderat fart. Tungere rytter, stop og start, bakker og kulde kan gøre den en tredjedel eller halvdelen kortere." },
    { question: "Hvornår er det billigst at lade et el-løbehjul?", answer: "Når timeprisen er lav, ofte om natten. Forskellen er dog få øre, da en fuld opladning kun koster omkring {{kr 0,55}}." },
  ],
  relatedSlugs: ["elcykel", "elbil", "mobil-opladning", "ipad", "laptop"],
  sources: [
    { name: "Segway — MAX G30D II (batteri, rækkevidde og ladetid)", url: "https://dk-en.segway.com/ekickscooter/products/max-g30d-ii.html" },
    { name: "Tænk — Værd at vide om el-løbehjul og andre el-køretøjer", url: "https://taenk.dk/forbrugerliv/fritid/vaerd-vide-om-el-loebehjul-og-andre-el-koeretoejer" },
    { name: "Tænk — El-løbehjul: det skal du tænke på, før du køber", url: "https://taenk.dk/forbrugerliv/fritid/elloebehjul-det-skal-du-taenke-paa-foer-du-koeber" },
  ],
  calculatorConfig: {
    title: "Beregn el-løbehjulets strømforbrug",
    options: [
      { label: "Rolig kørsel, fladt (ca. 10 Wh/km)", kwhPerUse: 0.01 },
      { label: "Almindelig bykørsel (ca. 13 Wh/km)", kwhPerUse: 0.013 },
      { label: "Bakker, kulde eller tung rytter (ca. 17 Wh/km)", kwhPerUse: 0.017 },
    ],
    usageLabel: "Kilometer pr. år",
    usageUnit: "km/år",
    usageMin: 100,
    usageMax: 5000,
    usageDefault: 1000,
    usageStep: 100,
    per: "km",
    perYear: 1,
  },
  publishDate: "2026-11-27",
  updated: "2026-11-22",
};

export default elLoebehjul;
