import type { ApplianceData } from "@/lib/types";

const gasfyr: ApplianceData = {
  slug: "gasfyr",
  meta: {
    category: "varme",
    usage: "heating",
    hasEuLabel: false, // kedelmærket (811/2013) handler om brændslet, ikke strømmen — som pillefyr
    shiftable: false,
    motif: "gasflamme",
    synonyms: [
      "gasfyr",
      "gaskedel",
      "naturgasfyr",
      "kondenserende gasfyr",
      "gasfyr strømforbrug",
      "gasfyr elforbrug",
      "vægmonteret gaskedel",
      "viessmann vitodens",
    ],
  },
  name: "Gasfyr",
  article: "et",
  title: "Gasfyr strømforbrug (2026) → Blæser, pumpe og standby",
  description:
    "Et nyt kondenserende gasfyr bruger kun 15-20 W, mens det kører, og 4 W på standby. Se kWh om året, og hvorfor en gammel pumpe kan bruge fem gange så meget.",
  heading: "Strømforbrug for et gasfyr: kWh om året, pris pr. måned og billige timer",
  quickAnswer:
    "Et moderne kondenserende gasfyr bruger ifølge Viessmanns produktdata 15-19 W til blæser og styring, når det kører, og 4 W på standby; den indbyggede pumpe bruger 2-33 W afhængigt af lasten. Over et år giver det efter vores beregning ca. 90 kWh, svarende til {{kr 90}} ved {{pris_kwh}}. Gassen er brændstoffet og står på gasregningen — en gammel, separat cirkulationspumpe kan bruge mere strøm end hele fyret.",
  kwhRange: [60, 750],
  typicalKwh: 90,
  wattage: 18,
  standbyWatts: 4,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.65, 1.5, 1.3, 0.95, 0.6, 0.45, 0.4, 0.4, 0.55, 0.95, 1.4, 1.85],
  content: `<h2>Hvad bruger et gasfyr strøm til?</h2>
<p>I et gasfyr brænder naturgassen i et brændkammer, og varmen overføres til vandet i radiatorerne og til det varme brugsvand. Gassen er brændstoffet, og prisen for den står på gasregningen. Men fyret kører også på strøm: en blæser sørger for forbrændingsluften og skubber røggassen ud gennem aftrækket, en tænding starter flammen, en elektronisk styring regulerer flammen og temperaturen, og i de fleste nyere vægmonterede kedler sidder cirkulationspumpen bygget ind.</p>
<p>Siden her handler kun om den strøm. Den er lille sammenlignet med gassen, men den løber hele året, og i ældre anlæg kan den være overraskende stor — især på grund af pumpen.</p>

<h2>Producentens tal: få watt i drift</h2>
<p>Viessmanns produktkennwerte for 2025 opgiver den elektriske effekt for selve kedlen og for den indbyggede pumpe hver for sig. For deres udbredte vægkedler til parcelhuse ser det sådan ud:</p>
<table>
<thead><tr><th>Gasfyr (Viessmann)</th><th>Kedel, fuld last</th><th>Kedel, 30 procent last</th><th>Standby</th><th>Indbygget pumpe</th></tr></thead>
<tbody>
<tr><td>Vitodens 100-W, type B1HG, 19 kW</td><td>17 W</td><td>15 W</td><td>4 W</td><td>2 W ved dellast, 22 W ved fuld last</td></tr>
<tr><td>Vitodens 200-W, type B2HH, 25 kW</td><td>19 W</td><td>16 W</td><td>4 W</td><td>2 W ved dellast, 33 W ved fuld last</td></tr>
<tr><td>Vitodens 100-W, type B1HG, 25 kW</td><td>18 W</td><td>15 W</td><td>4 W</td><td>2 W ved dellast, 33 W ved fuld last</td></tr>
</tbody>
</table>
<p>Det samme fremgår af EU-produktdatabladet for Vitodens 100-W, hvor hjælpeelforbruget for 19 kW-modellen står som 0,018 kW ved fuld last, 0,015 kW ved dellast og 0,004 kW på standby. Til sammenligning bruger oliefyrene i samme katalog 36-226 W, fordi en oliebrænder har en kraftigere blæser og en oliepumpe; se siden om <a href="/oliefyr/">oliefyr</a>.</p>

<h2>Hvad bruger et gasfyr om året?</h2>
<p>Et kondenserende gasfyr kører det meste af fyringssæsonen på lav effekt — det er netop sådan, det udnytter gassen bedst. Vi har regnet med et parcelhus, der bruger ca. 15.000 kWh varme om året, og et fyr, der i snit kører med omkring 5 kW. Regnestykket er vores skøn:</p>
<table>
<thead><tr><th>Post (ny kondenserende kedel, 19 kW)</th><th>kWh om året (skøn)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Kedlen i drift, ca. 3.000 timer à ca. 15 W</td><td>ca. 45</td><td>{{kr 45}}</td></tr>
<tr><td>Indbygget pumpe i drift, ca. 3.000 timer à ca. 5 W</td><td>ca. 15</td><td>{{kr 15}}</td></tr>
<tr><td>Standby resten af året, ca. 5.760 timer à 4 W</td><td>ca. 23</td><td>{{kr 23}}</td></tr>
<tr><td>Varmt brugsvand om sommeren, ekstra opstarter</td><td>ca. 7</td><td>{{kr 7}}</td></tr>
<tr><td>I alt</td><td>ca. 90</td><td>{{kr 90}}</td></tr>
</tbody>
</table>
<p>Det er under halvdelen af, hvad vi regner med for et køleskab. Men regnestykket gælder en ny kedel med indbygget, styret pumpe. Sidder der en separat cirkulationspumpe af den gamle type, ændrer billedet sig: Bolius regner med 55 W og 482 kWh om året for en pumpe fra før 1995. Så bruger pumpen fem gange så meget strøm som selve fyret. Ældre gaskedler fra før kondenseringsteknikken har desuden ofte en blæser uden hastighedsregulering, og for dem findes der ikke offentlige tal; beregnerens valg for en ældre kedel er derfor vores eget skøn.</p>

<h2>Energimærket måler gassen</h2>
<p>Gasfyr er omfattet af EU's energimærkning af rumvarmere og kombinerede varmeanlæg, forordning 811/2013, som gælder kedler op til 70 kW. Viessmanns Vitodens 100-W ligger i klasse A med en sæsonvirkningsgrad på 93-94 procent. Klassen fortæller, hvor godt fyret udnytter gassen; strømforbruget indgår kun som en mindre korrektion. Vil du sammenligne strømforbruget mellem to kedler, så find hjælpeelforbruget — elmax, elmin og standby — i produktdatabladet. Derfor viser vi ingen energimærke-tabel med kWh strøm her.</p>

<h2>Gasfyr, fjernvarme eller varmepumpe?</h2>
<p>Mange gasfyrsejere overvejer at skifte. Bolius beskriver, at fjernvarmen spiller en stor rolle i udfasningen af fossile opvarmningsformer som naturgas og olie, og at omkring 66 procent af de danske boliger i 2023 blev opvarmet med fjernvarme. Strømforbruget på denne side er en lille del af den sammenligning. En <a href="/fjernvarmeunit/">fjernvarmeunit</a> bruger strøm til en pumpe og en styring og ligger i samme størrelsesorden som et nyt gasfyr. En <a href="/varmepumpe/">varmepumpe</a> er en helt anden størrelse: den laver al varmen med strøm og bruger typisk flere tusinde kWh om året. Den regning skal sammenlignes med gasregningen, ikke med fyrets strømtillæg.</p>

<h2>Kan fyrets strøm flyttes til billige timer?</h2>
<p>Ikke i praksis. Kedlen kører, når huset eller beholderen har brug for varme, og den har ingen strøm at gemme. Forbruget er så lille, at forskellen mellem dyre og billige timer kun er få kroner om året. Har du en varmtvandsbeholder med elpatron, er det patronen, der er værd at styre efter timeprisen — ikke fyret.</p>

<h2>Sådan måler og sænker du forbruget</h2>
<p>Et gasfyr er fast tilsluttet, så en stikmåler kan ikke bruges. Aflæs elmåleren en stille nat med fyret tændt, og igen en time med fyret slukket på kontakten. Forskellen er fyrets og pumpens forbrug.</p>
<ul>
<li><strong>Skift en gammel separat <a href="/cirkulationspumpe/">cirkulationspumpe</a></strong> — Bolius angiver, at en ny kan nøjes med omkring 120 kWh om året.</li>
<li><strong>Brug vejrkompensering</strong>, så fyret modulerer ned på milde dage i stedet for at starte og stoppe.</li>
<li><strong>Sommerdrift</strong> — slå rumvarmen fra, så fyret kun laver varmt brugsvand fra maj til september.</li>
<li><strong>Service</strong> — et fyr, der er indstillet rigtigt, kører roligere og med færre opstarter.</li>
</ul>`,
  faqs: [
    { question: "Hvor meget strøm bruger et gasfyr?", answer: "Et nyt kondenserende gasfyr bruger ifølge Viessmann 15-19 W i drift og 4 W på standby, plus 2-33 W til den indbyggede pumpe. Over et år bliver det efter vores beregning ca. 90 kWh, svarende til {{kr 90}} ved {{pris_kwh}}." },
    { question: "Bruger et gasfyr mere strøm end et oliefyr?", answer: "Nej, typisk mindre. Viessmanns gaskedler bruger 15-19 W i drift mod 36-226 W for deres oliefyr, fordi en oliebrænder har en kraftigere blæser og en oliepumpe." },
    { question: "Hvorfor er min elregning høj, selv om fyret bruger så lidt?", answer: "Se efter cirkulationspumpen. En gammel pumpe fra før 1995 bruger ifølge Bolius 55 W døgnet rundt og 482 kWh om året, svarende til {{kr 482}} — fem gange så meget som et nyt gasfyr." },
    { question: "Viser energimærket gasfyrets strømforbrug?", answer: "Ikke direkte. Klassen handler om, hvor godt fyret udnytter gassen. Strømforbruget står i produktdatabladet som hjælpeelforbrug ved fuld last, dellast og standby." },
    { question: "Bruger et gasfyr strøm, når det er slukket om sommeren?", answer: "På standby ca. 4 W, svarende til ca. 35 kWh om året eller {{kr 35}}, hvis det står på standby døgnet rundt. Slukker du det helt på kontakten, bruger det intet." },
  ],
  relatedSlugs: ["oliefyr", "fjernvarmeunit", "cirkulationspumpe", "varmepumpe", "pillefyr"],
  sources: [
    { name: "Viessmann — Produktkennwerte, Lieferprogramm 2025 (5793687 DE 4/2025)", url: "https://www.heizungsdiscount24.de/pdf/Viessmann-Vitoladens-300-C-Planungsanleitung.pdf" },
    { name: "Viessmann — Produktdatenblatt zum Energieverbrauch, Vitodens 100-W B1HG (6227868-01)", url: "https://www.immotecshop24.de/media/immo/pdf/eu-produktdatenblatt/Vitodens100W-B1HG.pdf" },
    { name: "Bolius — Her er 10 store strømslugere i dit hjem", url: "https://www.bolius.dk/her-er-10-store-stroemslugere-i-dit-hjem-672" },
    { name: "Bolius — Har du naturgas eller oliefyr? Nu får du besked, om du kan få fjernvarme", url: "https://www.bolius.dk/har-du-naturgas-eller-oliefyr-nu-faar-du-besked-om-du-kan-faa-fjernvarme-98019" },
    { name: "Forordning (EU) nr. 811/2013, artikel 1 — energimærkning af rumvarmere", url: "https://www.legislation.gov.uk/eur/2013/811/article/1" },
  ],
  calculatorConfig: {
    title: "Beregn gasfyrets strømforbrug",
    options: [
      { label: "Ny kondenserende kedel med indbygget pumpe (ca. 0,25 kWh/døgn)", kwhPerUse: 0.25 },
      { label: "Ny kedel med separat ny pumpe (ca. 0,55 kWh/døgn)", kwhPerUse: 0.55 },
      { label: "Ældre kedel uden modulering, ny pumpe (ca. 0,8 kWh/døgn)", kwhPerUse: 0.8 },
      { label: "Ældre kedel plus gammel pumpe (ca. 1,9 kWh/døgn)", kwhPerUse: 1.9 },
    ],
    usageLabel: "Dage i drift pr. år",
    usageUnit: "dage/år",
    usageMin: 120,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-12-07",
  updated: "2026-11-22",
};

export default gasfyr;
