import type { ApplianceData } from "@/lib/types";

const lysstofroer: ApplianceData = {
  slug: "lysstofroer",
  meta: {
    category: "lys",
    usage: "per-hour",
    hasEuLabel: true,
    shiftable: false,
    motif: "lampe",
    synonyms: ["lysstofrør", "lysstofroer", "neonrør", "t8 rør", "led rør", "led lysstofrør", "lysstofarmatur", "tl-d"],
  },
  name: "Lysstofrør",
  article: "et",
  title: "Lysstofrør strømforbrug (2026) → LED-rør, watt og forbud",
  description: "Et 150 cm lysstofrør bruger ca. 58 watt, et LED-rør med samme lys 18-20 watt. Se kWh pr. 1.000 timer, energimærket og hvad forbuddet fra 2023 betyder.",
  heading: "Strømforbrug for et lysstofrør: watt, pris i timen og dyreste timer",
  quickAnswer:
    "Et klassisk 150 cm lysstofrør (T8, 58 W) bruger 60 kWh pr. 1.000 timer ifølge producentens datablad, og en time koster {{oere 0,06}} ved {{pris_kwh}}. Et LED-rør, der giver næsten samme lys, bruger 18-20 kWh pr. 1.000 timer. I et værksted med lyset tændt to-tre timer om dagen sparer skiftet omkring 40 kWh om året pr. rør, svarende til {{kr 40}}.",
  kwhRange: [15, 220],
  typicalKwh: 60,
  wattage: 58,
  standbyWatts: 0,
  energyLabels: [
    { class: "A", kwhPerYear: 18 },
    { class: "B", kwhPerYear: 20 },
    { class: "C", kwhPerYear: 23 },
    { class: "D", kwhPerYear: 27 },
    { class: "E", kwhPerYear: 34 },
    { class: "F", kwhPerYear: 44 },
  ],
  models: [
    { brand: "Philips", model: "MASTER TL-D Super 80 58W/840 (1.000 timer/år)", kwh: 60, energyClass: "G" },
    { brand: "Philips", model: "MASTER LEDtube 1500 mm UO 20 W 865 (1.000 timer/år)", kwh: 20, energyClass: "B" },
    { brand: "Philips", model: "MASTER LEDtube 1500 mm UE 17,6 W 840 (1.000 timer/år)", kwh: 18, energyClass: "A" },
  ],
  seasonalProfile: [1.3, 1.2, 1.05, 0.9, 0.8, 0.7, 0.7, 0.75, 0.9, 1.05, 1.25, 1.4],
  content: `<h2>Hvor meget strøm bruger et lysstofrør?</h2>
<p>Lysstofrøret har hængt i kældre, garager, værksteder, køkkener og kontorer i årtier. Det mest udbredte er T8-røret, der er 26 mm tykt og fås i længder fra 60 til 150 cm. Effekten står på røret: 18 W for 60 cm, 36 W for 120 cm og 58 W for 150 cm. Signify (Philips) oplyser i databladet for MASTER TL-D Super 80 58W/840, at røret bruger 60 kWh pr. 1.000 timer og giver 5.240 lumen, det vil sige omkring 90 lumen pr. watt.</p>
<p>Et lysstofrør kan ikke sluttes direkte til stikkontakten. Det sidder i et armatur med en forkobling, der starter røret og begrænser strømmen. Ældre armaturer har en magnetisk forkobling med en lille starter, nyere en elektronisk (HF). Forkoblingen bruger også lidt strøm, så det samlede forbrug ved stikket er højere end tallet på røret, særligt med de gamle magnetiske forkoblinger. Hvor meget mere, afhænger af armaturet, og det har vi ikke et pålideligt tal for, så tallene på siden her gælder røret alene.</p>
<table>
<thead><tr><th>Rør</th><th>Watt</th><th>kWh pr. 1.000 timer</th><th>Pris pr. 1.000 timer</th></tr></thead>
<tbody>
<tr><td>T8 lysstofrør, 120 cm</td><td>36 W</td><td>36 kWh</td><td>{{kr 36}}</td></tr>
<tr><td>T8 lysstofrør, 150 cm</td><td>58 W</td><td>60 kWh</td><td>{{kr 60}}</td></tr>
<tr><td>LED-rør, 150 cm, klasse B</td><td>20 W</td><td>20 kWh</td><td>{{kr 20}}</td></tr>
<tr><td>LED-rør, 150 cm, klasse A</td><td>17,6 W</td><td>18 kWh</td><td>{{kr 18}}</td></tr>
</tbody>
</table>

<h2>LED-rør: samme lys for omkring en tredjedel af strømmen</h2>
<p>Et LED-rør har samme form og samme sokkel som et lysstofrør, men indeholder lysdioder i stedet for kviksølvdamp. Philips' MASTER LEDtube på 150 cm i den effektive udgave bruger 17,6 W og giver 3.700 lumen, hvilket svarer til 210 lumen pr. watt; en lidt billigere udgave bruger 20 W til de samme 3.700 lumen. Producenten markedsfører den effektive udgave som alternativ til et 58 W-lysstofrør.</p>
<p>Læg mærke til, at LED-røret giver færre lumen end lysstofrøret (3.700 mod 5.240). Det lyder som et dårligt bytte, men LED-røret sender lyset nedad, mens et lysstofrør lyser hele vejen rundt og taber en del af lyset op i armaturet og loftet. I et almindeligt armatur er forskellen på arbejdsfladen derfor mindre, end tallene antyder. Skal du bruge meget lys, findes der LED-rør med højere lumen.</p>
<p>Lysstofrøret skal også varme op. I en kold garage eller et udhus om vinteren lyser det svagt de første minutter og kan blinke, inden det tænder. Et LED-rør giver fuldt lys med det samme, også i kulde, og det tåler at blive tændt og slukket mange gange.</p>

<h2>Energimærket: lysstofrøret er klasse G</h2>
<p>Lyskilder fik den nye EU-energimærkning med skalaen A-G i september 2021 (forordning 2019/2015). Klassen afgøres af, hvor mange lumen lyskilden giver pr. watt: klasse A kræver mindst 210 lumen pr. watt, B mindst 185, C mindst 160 og så videre ned til G, som er alt under 85. Philips' 58 W-lysstofrør står med klasse G i databladet, LED-røret på 20 W med klasse B og LED-røret på 17,6 W med klasse A.</p>
<p>Energimærke-tabellen længere nede på siden viser det højeste forbrug, en lyskilde med 3.700 lumen må have i hver klasse, omregnet til kWh pr. 1.000 timer. Lyskilder mærkes altid pr. 1.000 timer, fordi brugen er så forskellig fra rum til rum.</p>

<h2>Forbuddet: lysstofrør må ikke længere sælges</h2>
<p>Lysstofrør indeholder kviksølv, og det er forbudt i elektronik efter EU's RoHS-direktiv — med undtagelser, som EU har fjernet. Ledvance, der producerer Osram-rør, opsummerer ændringerne: T5- og T8-lysstofrør er forbudt fra den 25. august 2023, og kompaktlysstofrør med stikben fra den 25. februar 2023. Lagre, der allerede var på markedet, må stadig sælges og bruges.</p>
<p>Forbuddet betyder ikke, at du skal skifte dine rør i morgen. Et lysstofrør, der virker, må gerne sidde. Men når det går i stykker, vil det blive sværere og dyrere at finde et nyt, og det er en god anledning til at skifte til LED. Et udtjent lysstofrør skal afleveres på genbrugspladsen eller i butikken, fordi det indeholder kviksølv — smid det aldrig i skraldespanden.</p>

<h2>Sådan skifter du til LED</h2>
<p>Der er to måder at skifte på. Den nemmeste er at sætte et LED-rør direkte i det gamle armatur. Mange LED-rør er lavet til at sidde i armaturer med magnetisk forkobling, hvor man skifter den gamle starter ud med en LED-starter, der følger med røret. Andre er lavet til elektroniske forkoblinger eller til direkte tilslutning til 230 volt, hvor forkoblingen skal fjernes — det sidste kræver en elinstallatør. Tjek derfor, hvilken type forkobling dit armatur har, og vælg et LED-rør, der passer.</p>
<p>Den anden måde er at skifte hele armaturet til et LED-armatur. Det giver ofte det bedste lys og fjerner forkoblingens tab helt, men det koster mere at købe og installere end et nyt rør. I et køkken eller et kontor, hvor lyset er tændt mange timer om dagen, kan det være pengene værd; i en kælder, der kun bruges et par minutter ad gangen, er et LED-rør nok. Er det spot eller almindelige pærer, du vil skifte, så se siden om <a href="/led-paere/">LED-pærer</a>.</p>

<h2>Hvad sparer du om året?</h2>
<p>Besparelsen afhænger af, hvor mange timer lyset er tændt. Tabellen sammenligner et 58 W-lysstofrør med et LED-rør på 18 kWh pr. 1.000 timer.</p>
<table>
<thead><tr><th>Brug pr. rør</th><th>Timer om året</th><th>Lysstofrør</th><th>LED-rør</th><th>Besparelse pr. år</th></tr></thead>
<tbody>
<tr><td>Kælder, 30 min om dagen</td><td>183</td><td>11 kWh</td><td>3 kWh</td><td>{{kr 8}}</td></tr>
<tr><td>Værksted, 2,5 timer om dagen</td><td>913</td><td>55 kWh</td><td>16 kWh</td><td>{{kr 39}}</td></tr>
<tr><td>Køkken, 6 timer om dagen</td><td>2.190</td><td>131 kWh</td><td>39 kWh</td><td>{{kr 92}}</td></tr>
<tr><td>Butik eller stald, 12 timer om dagen</td><td>4.380</td><td>263 kWh</td><td>77 kWh</td><td>{{kr 186}}</td></tr>
</tbody>
</table>
<p>Har du flere rør i samme armatur, eller flere armaturer, så gang op. Et værksted med seks rør, der er tændt to-tre timer om dagen, sparer omkring 230 kWh om året, svarende til {{kr 230}}.</p>

<h2>Kompaktlysstofrør og sparepærer</h2>
<p>De gamle sparepærer er også lysstofrør, bare foldet sammen. De kompaktlysstofrør med stikben, der sidder i nogle loftlamper og indbygningsspots, er forbudt fra den 25. februar 2023, ifølge Ledvances opsummering af RoHS-ændringerne. Skal du skifte dem, er en LED-pære eller et LED-modul det naturlige valg, og den bruger typisk mærkbart mindre strøm til samme lys.</p>

<h2>Gode råd om lys og strøm</h2>
<ul>
<li><strong>Sluk, når du går</strong> — også selvom du kommer tilbage om lidt. Et LED-rør tager ikke skade af at blive tændt og slukket ofte.</li>
<li><strong>Bevægelsessensor i kælder og garage</strong> — så brænder lyset ikke hele natten, fordi nogen har glemt det.</li>
<li><strong>Skift til LED, når røret går</strong> — og tjek forkoblingen, før du køber.</li>
<li><strong>Aflevér gamle rør korrekt</strong> — de indeholder kviksølv.</li>
<li><strong>Brug mindre lys, hvor det er nok</strong> — en kælder har sjældent brug for samme lys som en arbejdsbænk.</li>
</ul>
<p>Lys kan ikke flyttes til billige timer — det skal være tændt, når du er der. Det, der flytter regningen, er antallet af watt og antallet af timer.</p>`,
  faqs: [
    { question: "Hvor mange watt bruger et lysstofrør?", answer: "Et T8-rør på 150 cm bruger 58 W og 60 kWh pr. 1.000 timer ifølge Philips' datablad. Et rør på 120 cm bruger 36 W. En time med et 58 W-rør koster {{oere 0,06}} ved {{pris_kwh}}." },
    { question: "Hvor meget sparer et LED-rør i forhold til et lysstofrør?", answer: "Et LED-rør på 150 cm bruger 18-20 kWh pr. 1.000 timer mod 60 kWh for et 58 W-lysstofrør. Ved 1.000 timer om året sparer du omkring 40 kWh pr. rør, svarende til {{kr 40}}." },
    { question: "Er lysstofrør forbudt?", answer: "T5- og T8-lysstofrør må ikke længere bringes på markedet i EU fra den 25. august 2023, fordi de indeholder kviksølv. Lagre må stadig sælges, og rør, der sidder i armaturet, må gerne bruges." },
    { question: "Kan jeg sætte et LED-rør i mit gamle armatur?", answer: "Ofte ja. Mange LED-rør passer i armaturer med magnetisk forkobling, hvor starteren skiftes ud. Andre kræver elektronisk forkobling eller direkte 230 V-tilslutning. Tjek armaturets forkobling, før du køber." },
    { question: "Bruger forkoblingen strøm?", answer: "Ja, forkoblingen i et lysstofarmatur har et tab, så forbruget ved stikket er højere end tallet på røret — mest med ældre magnetiske forkoblinger. Et LED-armatur uden forkobling undgår tabet." },
    { question: "Hvilken energiklasse har et lysstofrør?", answer: "Philips' 58 W-lysstofrør står i klasse G på den nye skala A-G. Philips' LED-rør i samme længde står i klasse A og B." },
  ],
  relatedSlugs: ["led-paere", "lyskaede", "skaerm", "olieradiator"],
  sources: [
    { name: "Signify — datablad, MASTER TL-D Super 80 58W/840", url: "https://assets.signify.com/is/content/Signify/927922084023_EU.fr_FR.PROF.FP" },
    { name: "Signify — datablad, MASTER LEDtube 1500 mm UE 17,6 W 840", url: "https://www.assets.signify.com/is/content/Signify/929003482302_EU.en_GB.PROF.FP" },
    { name: "Forordning (EU) 2019/2015, bilag II — energiklasser for lyskilder", url: "https://www.legislation.gov.uk/eur/2019/2015/annex/II" },
    { name: "Ledvance — RoHS: forbud mod T5- og T8-lysstofrør", url: "https://www.ledvance.com/en-uk/professional-lighting/services/eu-legislations/rohs" },
  ],
  calculatorConfig: {
    title: "Beregn lysrørets strømforbrug",
    options: [
      { label: "Lysstofrør 150 cm (58 W)", kwhPerUse: 0.06 },
      { label: "Lysstofrør 120 cm (36 W)", kwhPerUse: 0.036 },
      { label: "LED-rør 150 cm, klasse B (20 W)", kwhPerUse: 0.02 },
      { label: "LED-rør 150 cm, klasse A (17,6 W)", kwhPerUse: 0.0176 },
    ],
    usageLabel: "Timer tændt pr. dag (pr. rør)",
    usageUnit: "timer/dag",
    usageMin: 0.5,
    usageMax: 24,
    usageDefault: 3,
    usageStep: 0.5,
    per: "time",
    perYear: 365,
  },
  publishDate: "2026-11-28",
  updated: "2026-11-22",
};

export default lysstofroer;
