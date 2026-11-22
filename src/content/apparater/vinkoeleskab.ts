import type { ApplianceData } from "@/lib/types";

/**
 * Vinkøleskab — tal fra EPREL (EU's produktdatabase, 804 vinkøleskabe med oplyst årsforbrug, trukket 22. nov. 2026)
 * og Forbrugerrådet Tænks test (juni 2024: alle G, 86–194 kWh/år). Mærketabellen er EPREL-medianen pr. klasse.
 */
const vinkoeleskab: ApplianceData = {
  slug: "vinkoeleskab",
  meta: {
    category: "koelFrys",
    usage: "always-on",
    hasEuLabel: true,
    motif: "koeleskab",
    synonyms: ["vinkøleskab", "vinkoeleskab", "vinkøler", "vinskab", "wine cooler", "vinklimaskab", "vinkøleskab integreret"],
  },
  name: "Vinkøleskab",
  article: "et",
  title: "Vinkøleskab strømforbrug (2026) → kWh om året og pr. døgn",
  description:
    "Se hvor meget strøm et vinkøleskab bruger i døgnet og om året, hvorfor næsten alle har energimærke G, og hvad placering og flasketal betyder for forbruget.",
  heading: "Strømforbrug for et vinkøleskab: kWh i døgnet og pris om året",
  quickAnswer:
    "Et vinkøleskab bruger typisk 100–180 kWh om året, eller omkring 0,4 kWh i døgnet, fordi det kører hele året. Ved månedens elpris koster et skab til 20–60 flasker omkring {{kr 142}} om året. Næsten alle vinkøleskabe har energimærke F eller G, så et lille vinkøleskab kan bruge mere end et nyt køleskab til hele husstanden.",
  kwhRange: [86, 250],
  typicalKwh: 142,
  wattage: 80,
  standbyWatts: 0,
  energyLabels: [
    { class: "E", kwhPerYear: 88 },
    { class: "F", kwhPerYear: 102 },
    { class: "G", kwhPerYear: 146 },
  ],
  models: [
    { brand: "AEG", model: "KWE884520M (18 flasker, integreret)", kwh: 100, energyClass: "F" },
    { brand: "Haier", model: "HWS49GA (49 flasker)", kwh: 104, energyClass: "F" },
    { brand: "Dometic", model: "C50G (50 flasker)", kwh: 137, energyClass: "G" },
    { brand: "Haier", model: "WS190GA (190 flasker)", kwh: 176, energyClass: "G" },
  ],
  seasonalProfile: [0.92, 0.92, 0.95, 0.98, 1.03, 1.08, 1.12, 1.1, 1.03, 0.97, 0.94, 0.96],
  content: `<h2>Hvor meget strøm bruger et vinkøleskab?</h2>
<p>Et vinkøleskab er et af de få apparater i hjemmet, der aldrig holder fri. Kompressoren eller køleelementet slår til og fra døgnet rundt for at holde vinen på 8–14 grader, og derfor er det årsforbruget, der betyder noget – ikke hvor mange watt der står på typeskiltet. Et almindeligt vinkøleskab til 20–60 flasker bruger omkring 0,4 kWh i døgnet. Det bliver til cirka 142 kWh om året, som ved månedens elpris koster {{kr 142}}, eller omkring {{kr 142 /md}} om måneden.</p>
<p>Forbrugerrådet Tænk testede i 2024 en række små vinkøleskabe og målte et årsforbrug fra 86 til 194 kWh. Det svarer til {{kr 86-194}} om året ved den aktuelle pris. Spændet er stort, selv om skabene ligner hinanden udefra, og det skyldes især isolering, dørens glas og hvor godt kompressoren er dimensioneret til skabets størrelse.</p>
<p>Til sammenligning bruger et almindeligt køleskab på 300 liter, der er under fem år gammelt, kun omkring 120 kWh om året ifølge Bolius. Det overrasker mange, at et lille skab med vin kan bruge mere strøm end husstandens store køleskab, men forklaringen er enkel: et vinkøleskab har en stor glasdør, tynd isolering og skal holde en meget stabil temperatur. Se også, hvad et almindeligt <a href="/koeleskab/">køleskab</a> bruger, hvis du overvejer at lade vinen bo i køkkenets køleskab i stedet.</p>

<h2>Forbrug efter størrelse: fra 12 til 200 flasker</h2>
<p>Vi har trukket alle vinkøleskabe med et oplyst årsforbrug ud af EU's produktdatabase EPREL, hvor producenterne skal registrere energimærket for hver model. Det gav godt 800 modeller. Tallene nedenfor er medianen for hver størrelse – halvdelen af modellerne bruger mere, halvdelen mindre.</p>
<table>
<thead><tr><th>Størrelse</th><th>Typisk forbrug pr. døgn</th><th>kWh om året (median)</th><th>Pris om året</th></tr></thead>
<tbody>
<tr><td>Op til 20 flasker</td><td>0,36 kWh</td><td>130 kWh</td><td>{{kr 130}}</td></tr>
<tr><td>21–60 flasker</td><td>0,39 kWh</td><td>142 kWh</td><td>{{kr 142}}</td></tr>
<tr><td>61–120 flasker</td><td>0,43 kWh</td><td>158 kWh</td><td>{{kr 158}}</td></tr>
<tr><td>Over 120 flasker</td><td>0,48 kWh</td><td>175 kWh</td><td>{{kr 175}}</td></tr>
</tbody>
</table>
<p>Læg mærke til, at forbruget ikke vokser i takt med størrelsen. Et skab til 180 flasker rummer ni gange så meget vin som et skab til 20 flasker, men bruger kun omkring en tredjedel mere strøm. Pr. flaske er det store skab derfor langt mere effektivt. Har du i forvejen to små vinkøleskabe stående, kan ét større skab være en reel besparelse – og omvendt er et stort skab, der kun står halvt fyldt, ikke dyrere i drift end et fyldt.</p>

<h2>Hvorfor har næsten alle vinkøleskabe energimærke G?</h2>
<p>Vinkøleskabe har deres eget energimærke efter EU's forordning 2019/2016, med antallet af standardflasker i stedet for liter på mærket. De måles på samme A–G-skala som køleskabe, men vinens temperatur ligger tættere på stuetemperaturen, og skabet har næsten altid en glasdør. Resultatet er, at næsten alle ender i bunden af skalaen. I EPREL-udtrækket står omkring 87 procent af vinkøleskabene i klasse G og 12 procent i klasse F. Kun en håndfuld modeller når E eller bedre. Tænk fandt det samme: alle skabe i deres test fik G.</p>
<p>Det betyder ikke, at mærket er ligegyldigt. Forskellen mellem et F-skab og et G-skab i samme størrelse er typisk 30–50 kWh om året, og over et vinkøleskabs levetid på 10–15 år løber det op. Kig derfor på tallet i kWh/år på mærket, ikke kun på bogstavet. To G-skabe kan sagtens ligge 60 kWh fra hinanden.</p>

<h2>Kompressor eller termoelektrisk køling</h2>
<p>Der findes to slags vinkøleskabe. De fleste over 20 flasker har en kompressor som et almindeligt køleskab. De helt små modeller til 6–12 flasker har ofte et termoelektrisk element (Peltier-element), som er lydløst og vibrationsfrit, men har en meget lav virkningsgrad. Et termoelektrisk skab kan kun køle et vist antal grader under rummets temperatur, og det kører næsten konstant, når stuen er varm om sommeren.</p>
<p>Termoelektriske skabe er derfor ikke nødvendigvis billigere i drift, selv om de er små. De passer bedst i et køligt rum, hvor de kun skal tage få grader af temperaturen. Står skabet i et varmt køkken eller i solen, er en kompressormodel det sikre valg, både for vinen og for elregningen. Samme forskel ses på en <a href="/koeleboks/">køleboks</a>, hvor den termoelektriske type bruger flere gange så meget strøm som kompressorboksen.</p>

<h2>Placering: det, der flytter forbruget mest</h2>
<p>Et vinkøleskab arbejder mod forskellen mellem rummets temperatur og vinens. Hver grad koldere omgivelser gør kompressorens arbejde lettere, og omvendt. Derfor er placeringen ofte vigtigere end modellen, når skabet først er købt.</p>
<ul>
<li><strong>Undgå varme naboer</strong> – ikke ved siden af ovn, opvaskemaskine eller radiator, og ikke i direkte sol. Tænk påpeger, at nogle skabe har UV-beskyttet glas, men solen varmer stadig skabet op.</li>
<li><strong>Giv luft til kompressoren</strong> – et fritstående skab skal have plads bag og over sig, så varmen kan slippe væk. Et skab til indbygning skal stå i et skab med de ventilationsåbninger, producenten foreskriver.</li>
<li><strong>Tjek klimaklassen</strong> – i en kold garage eller et uopvarmet bryggers kan skabet have svært ved at holde temperaturen, hvis rummet kommer under den mindste temperatur, skabet er bygget til. Står det for koldt, kan nogle skabe ikke varme, og vinen bliver for kold.</li>
<li><strong>Kælderen er ofte bedst</strong> – en kælder på 12–15 grader hele året giver lavt forbrug og stabil temperatur. Mange vinelskere har slet ikke brug for et vinkøleskab, hvis kælderen er kølig og mørk.</li>
</ul>
<p>Forbruget svinger også med årstiden. Om sommeren, når stuen er 23–25 grader, kører skabet mere end om vinteren. Vi regner med omkring 10 procent højere forbrug i juli end i januar.</p>

<h2>Temperatur og zoner: hvad koster en ekstra kold zone?</h2>
<p>Rødvin opbevares typisk ved omkring 12 grader, mens hvidvin og mousserende vin serveres koldere, ofte omkring 8 grader. Dyrere skabe har to zoner, så du kan have begge dele. Den kolde zone koster lidt ekstra strøm, men forskellen er beskeden i forhold til skabets samlede forbrug. Det, der virkelig koster, er at stille hele skabet på 5–6 grader for at bruge det som drikkevarekøleskab – så bruger det strøm som et køleskab med glasdør.</p>
<p>Skal vinen bare lagres, er 12–14 grader i hele skabet det mest økonomiske valg af de indstillinger, skabet tilbyder. Luftfugtigheden bør ligge mellem 50 og 75 procent, så propperne ikke tørrer ud, men det koster ikke målbart ekstra strøm.</p>

<h2>Kan det betale sig at slukke vinkøleskabet?</h2>
<p>Et vinkøleskab har ikke noget standbyforbrug i egentlig forstand – det er enten tændt og køler, eller slukket. Står skabet tomt i en periode, kan du roligt slukke det og lade døren stå på klem, så der ikke kommer mug. Det sparer omkring 0,4 kWh i døgnet, eller {{kr 12}} om måneden.</p>
<p>Står der vin i, skal skabet være tændt. Vin har det dårligst med store temperaturudsving, og den strøm, du sparer, er ikke meget værd mod en kasse ødelagt vin. Nogle af skabene i Tænks test holdt temperaturen under 18 grader i mere end to døgn ved strømafbrud, så et kort afbrud er ikke farligt.</p>

<h2>Hvornår på døgnet bruger vinkøleskabet strøm?</h2>
<p>Et vinkøleskab kører hele døgnet og kan ikke flyttes til de billige timer. Det betaler derfor døgnets gennemsnitspris, og det er den, beregneren ovenfor regner med. Det eneste, du selv styrer, er at undgå at åbne døren unødigt: hver gang døren står åben, skal kompressoren køle den varme luft ned igen. Det betyder dog mindre, end mange tror, fordi luften i skabet vejer meget lidt i forhold til flaskerne, som holder på kulden.</p>

<h2>Sådan holder du vinkøleskabets forbrug nede</h2>
<ol>
<li><strong>Vælg størrelsen efter din vin</strong> – ét skab, der passer, er billigere end to små.</li>
<li><strong>Sammenlign kWh/år, ikke kun bogstavet</strong> – næsten alle er F eller G, men forbruget varierer med 50 procent eller mere.</li>
<li><strong>Stil det køligt og skyggefuldt</strong> – placeringen flytter forbruget mere end de fleste andre valg.</li>
<li><strong>Hold 12–14 grader til lagring</strong> – brug kun den kolde zone til det, der skal serveres snart.</li>
<li><strong>Støvsug ristene</strong> – støv på kondensatoren bag eller under skabet får kompressoren til at køre længere.</li>
<li><strong>Tjek dørpakningen</strong> – en utæt pakning på en glasdør lukker varm luft ind døgnet rundt.</li>
</ol>
<p>Vil du se, hvordan vinkøleskabet passer ind i resten af husstandens forbrug, kan du sammenligne med en <a href="/fryser/">fryser</a> eller en <a href="/kummefryser/">kummefryser</a>, som også kører hele året.</p>`,
  faqs: [
    {
      question: "Hvor mange kWh bruger et vinkøleskab om året?",
      answer:
        "Et vinkøleskab bruger typisk 100–180 kWh om året. Medianen for skabe til 21–60 flasker i EU's database er 142 kWh, hvilket ved månedens elpris koster omkring {{kr 142}} om året. Tænk målte 86–194 kWh i deres test.",
    },
    {
      question: "Hvad koster et vinkøleskab i strøm om måneden?",
      answer:
        "Et typisk vinkøleskab bruger omkring 12 kWh om måneden, hvilket koster cirka {{kr 142 /md}} ved månedens elpris. Et stort skab til over 120 flasker koster omkring {{kr 175 /md}}.",
    },
    {
      question: "Hvorfor har vinkøleskabe så dårligt et energimærke?",
      answer:
        "Vinkøleskabe har glasdør, tynd isolering og skal holde en meget stabil temperatur, og de måles på samme A–G-skala som køleskabe. Derfor står omkring 87 procent i klasse G og 12 procent i klasse F i EU's produktdatabase. Sammenlign derfor kWh-tallet på mærket.",
    },
    {
      question: "Bruger et vinkøleskab mere strøm end et køleskab?",
      answer:
        "Ofte ja. Et nyt køleskab på 300 liter bruger omkring 120 kWh om året, mens et vinkøleskab til 50 flasker typisk bruger 130–150 kWh. Et vinkøleskab koster derfor omkring {{kr 142}} om året, selv om det er mindre.",
    },
    {
      question: "Er et termoelektrisk vinkøleskab mere sparsomt?",
      answer:
        "Ikke nødvendigvis. Termoelektriske skabe er lydløse, men har lav virkningsgrad og kører næsten konstant i et varmt rum. De passer bedst til et køligt rum, hvor de kun skal tage få grader af temperaturen.",
    },
    {
      question: "Kan jeg sætte mit vinkøleskab i garagen?",
      answer:
        "Kun hvis garagen holder sig inden for skabets klimaklasse. Bliver det for koldt, kan skabet ikke holde temperaturen, og vinen bliver for kold. En kølig kælder på 12–15 grader er det rum, hvor skabet bruger mindst strøm.",
    },
  ],
  relatedSlugs: ["koeleskab", "koeleboks", "emhaette", "espressomaskine", "fryser"],
  sources: [
    { name: "Forbrugerrådet Tænk — Det skal du vide om vinkøleskabe (test 2024)", url: "https://taenk.dk/forbrugerliv/bolig/det-skal-du-vide-om-vinkoeleskabe" },
    { name: "EPREL — EU's produktdatabase, vinkøleskabe (fx Haier HWS49GA)", url: "https://eprel.ec.europa.eu/screen/product/refrigeratingappliances2019/305764" },
    { name: "Forordning (EU) 2019/2016 om energimærkning af køleapparater", url: "https://eur-lex.europa.eu/eli/reg_del/2019/2016/oj" },
    { name: "Bolius — Hvor meget strøm bruger et køleskab?", url: "https://www.bolius.dk/hvor-meget-stroem-bruger-et-koeleskab-98347" },
  ],
  calculatorConfig: {
    title: "Vinkøleskab forbrugsberegner",
    options: [
      { label: "Lille, op til 20 flasker", kwhPerUse: 0.36 },
      { label: "Mellem, 21–60 flasker", kwhPerUse: 0.39 },
      { label: "Stort, 61–120 flasker", kwhPerUse: 0.43 },
      { label: "Meget stort, over 120 flasker", kwhPerUse: 0.48 },
      { label: "Ældre skab eller varmt rum", kwhPerUse: 0.65 },
    ],
    usageLabel: "Dage i drift om året",
    usageUnit: "dage",
    usageMin: 30,
    usageMax: 365,
    usageDefault: 365,
    usageStep: 5,
    per: "døgn",
    perYear: 1,
  },
  publishDate: "2026-11-23",
  updated: "2026-11-22",
};

export default vinkoeleskab;
