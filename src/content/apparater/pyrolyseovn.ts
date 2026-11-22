import type { ApplianceData } from "@/lib/types";

/**
 * Pyrolyseovn (ovn med pyrolytisk selvrens) — Stiftung Warentest (pressemeddelelse 19.01.2026, 11 indbyggede pyrolyseovne fra bl.a.
 * Siemens, Bosch, Miele, AEG og Ikea): pyrolysen bruger 4–8 kWh afhængigt af model; ca. 500 °C i ovnrummet, yderflader kan blive
 * farligt varme. Øko-Test: producenter af nyere ovne oplyser 2,5–5 kWh, ældre op til 7 kWh, en halv til tre timer. Neff: ca. 2,5–4,7 kWh,
 * niveau 1 ca. 2 t 15 min., niveau 2 ca. 2 t 30 min., i alt ca. 3 timer med op- og nedkøling, anbefaler 2–3 gange om året. Bosch (CH):
 * 3,6–4,7 kWh, 480 °C, to niveauer; EcoClean (katalytisk) uden ekstra forbrug. Energimærket (65/2014) måler ikke pyrolysen.
 * Mærketabel = klassens midte for 71 l × 104 cyklusser (vores omregning, se dampovn.ts); modeller fra Siemens/Bosch' danske datablade
 * (pyrolytisk selvrens) + EPREL. Beregneren: kWh pr. rensning, rensninger om året × 1.
 */
const pyrolyseovn: ApplianceData = {
  slug: "pyrolyseovn",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: true,
    shiftable: true,
    motif: "ovn",
    synonyms: ["pyrolyseovn", "pyrolyse ovn", "pyrolyse", "pyrolytisk selvrens", "selvrensende ovn", "pyrolyserens", "ovn selvrens", "activeclean", "pyrolyse strømforbrug", "rense ovn"],
  },
  name: "Pyrolyseovn",
  article: "en",
  title: "Pyrolyseovn strømforbrug (2026) → kWh pr. selvrensning",
  description:
    "Se hvor meget strøm pyrolyse-selvrensen bruger pr. gang, hvad Stiftung Warentest målte i 2026, og hvornår på døgnet rensningen er billigst at køre.",
  heading: "Strømforbrug for en pyrolyseovn: kWh, pris pr. rensning og billigste tidspunkt",
  quickAnswer:
    "En pyrolyserensning bruger 2,5–8 kWh, alt efter ovn og niveau. Stiftung Warentest målte 4–8 kWh i en test af 11 ovne fra januar 2026, svarende til {{kr 4-8}} pr. rensning ved månedens elpris. Renser du ovnen tre gange om året, bliver det omkring 12 kWh, eller {{kr 12}} – og rensningen kan lægges i dagens billigste timer.",
  kwhRange: [2, 60],
  typicalKwh: 12,
  wattage: 3600,
  standbyWatts: 0.5,
  energyLabels: [
    { class: "A++", kwhPerYear: 47 },
    { class: "A+", kwhPerYear: 64 },
    { class: "A", kwhPerYear: 83 },
    { class: "B", kwhPerYear: 105 },
    { class: "C", kwhPerYear: 128 },
  ],
  models: [
    { brand: "Siemens", model: "iQ700 HB776G1B1, 71 l, activeClean", kwh: 72, energyClass: "A+" },
    { brand: "Bosch", model: "Serie 8 HBG7741B1, 71 l, pyrolyse", kwh: 72, energyClass: "A+" },
  ],
  seasonalProfile: [0.8, 0.8, 1.2, 1.5, 1.0, 0.8, 0.6, 0.7, 0.9, 1.0, 1.3, 1.4],
  content: `<h2>Hvad sker der under en pyrolyserensning?</h2>
<p>Pyrolyse er en selvrensefunktion i ovnen. Lågen låses, og ovnrummet varmes op til omkring 480–500 grader, hvor fedt og madrester brænder til en smule aske, som kan tørres af bagefter. Hele forløbet tager to til tre timer med opvarmning og afkøling. Det er bekvemt, men det er også det mest strømkrævende, en almindelig ovn kan finde på: ovnen kører på fuld effekt længe og ved en temperatur langt over det, den ellers bager ved.</p>
<p>Ovnen er bygget til det med ekstra isolering og en firedobbelt glaslåge, så lågen holdes kølig udenpå. Alligevel fandt Stiftung Warentest i januar 2026, at nogle af de 11 testede pyrolyseovne blev bekymrende varme på ydersiden. Små børn og kæledyr bør ikke være i køkkenet under rensningen.</p>

<h2>Hvor mange kWh bruger en rensning?</h2>
<p>Producenterne oplyser forbruget meget forskelligt. Neff skriver 2,5–4,7 kWh pr. rensning, Bosch 3,6–4,7 kWh, og ifølge Øko-Test oplyser producenterne af nyere ovne generelt 2,5–5 kWh, mens ældre ovne kan bruge op til 7 kWh. Stiftung Warentest målte selv forbruget i sin test fra januar 2026 og fandt 4–8 kWh, afhængigt af modellen. Det er de tal, vi lægger mest vægt på, fordi de er målt ens på alle ovnene.</p>
<table>
<thead><tr><th>Rensning</th><th>kWh pr. gang</th><th>Pris pr. gang</th><th>kWh om året ved 3 rensninger</th></tr></thead>
<tbody>
<tr><td>Let rensning, laveste niveau (producentens tal)</td><td>2,5 kWh</td><td>{{kr 2,5}}</td><td>7,5 kWh</td></tr>
<tr><td>Sparsomste ovn i testen</td><td>4 kWh</td><td>{{kr 4}}</td><td>12 kWh</td></tr>
<tr><td>Midt i testens spænd</td><td>6 kWh</td><td>{{kr 6}}</td><td>18 kWh</td></tr>
<tr><td>Mest strømkrævende ovn i testen</td><td>8 kWh</td><td>{{kr 8}}</td><td>24 kWh</td></tr>
</tbody>
</table>
<p>En rensning bruger altså omtrent det samme som 4–9 timers bagning ved 200 grader, regnet ud fra Øko-Tests tal for en almindelig ovn: 1,15 kWh den første time og 0,8 kWh for hver time derefter. Det niveau, du vælger, betyder noget: Neff oplyser, at det lette niveau tager omkring 2 timer og 15 minutter og det intensive omkring 2 timer og 30 minutter, før ovnen skal køle af.</p>

<h2>Hvor ofte skal ovnen renses?</h2>
<p>Neff anbefaler at bruge pyrolysen 2–3 gange om året. Det passer med, hvad de fleste gør: en rensning før julemaden og en eller to i løbet af året. Med tre rensninger på 4 kWh bliver det 12 kWh om året, eller {{kr 12}} ved månedens elpris. Renser du i stedet hver måned, bliver det 48 kWh om året selv på den sparsomste ovn i testen, svarende til {{kr 48}}.</p>
<p>Lad være med at rense, før ovnen trænger. Pyrolysen virker lige godt, uanset om ovnen er let eller meget snavset, men en ovn med få pletter kan ofte klares med en klud og lidt sæbevand. Mange ovne har også et program med damp og sæbevand – Siemens kalder det humidClean – som blødgør snavs med damp. Det er vores skøn, at det bruger under en tiendedel af en pyrolyse, fordi temperaturen er så meget lavere.</p>

<h2>Læg rensningen i de billige timer</h2>
<p>Pyrolysen er det største enkeltforbrug, en ovn har, og den er ikke bundet til et måltid. Det gør den til et af de få køkkenforbrug, der med fordel kan flyttes. Kør rensningen midt på dagen eller i weekenden, når elprisen er lav, og ikke mellem klokken 17 og 20, hvor den er højest. Med 4–8 kWh i ét stræk betyder prisforskellen mellem dagens timer mere her end for de fleste andre køkkenapparater. Boksen længere oppe på siden viser dagens billigste vindue.</p>
<p>Start gerne rensningen, når du er hjemme og kan holde øje med køkkenet, så børn og dyr holdes væk fra den varme ovnfront. Mange starter den lige efter, at ovnen har været brugt til madlavning. Det er vores skøn, at det sparer lidt, fordi ovnen allerede er varm, men gevinsten er lille i forhold til at vælge de rigtige timer.</p>

<h2>Energimærket måler ikke pyrolysen</h2>
<p>Pyrolyseovne har det samme EU-energimærke som andre ovne. Mærket bygger på en standardcyklus, hvor ovnen varmer en våd mursten op, og klassen afhænger af forbruget i forhold til ovnrummets størrelse. Selvrensningen indgår slet ikke. Siemens' iQ700 HB776G1B1 og Bosch' Serie 8 HBG7741B1, der begge har pyrolytisk selvrens og et ovnrum på 71 liter, er mærket A+ og bruger 0,69 kWh pr. standardcyklus med varmluft og 0,87 kWh med over- og undervarme.</p>
<p>Tabellerne længere nede på siden omregner mærkets standardcyklus til et år med 104 cyklusser, svarende til to gange om ugen. Det er vores omregning og dækker kun bagningen. Rensningerne kommer oveni.</p>

<h2>Pyrolyse, katalytisk rens eller klud?</h2>
<p>Katalytiske plader, som Bosch kalder EcoClean, er belagt med et materiale, der nedbryder fedtstænk, mens ovnen bager. Ifølge Bosch arbejder belægningen under den almindelige bagning, så den koster ingen ekstra strøm. Den traditionelle rengøring med klud, sæbe og lidt tålmodighed bruger ingen strøm. Pyrolysen er den grundigste og nemmeste, men også den dyreste i drift.</p>
<p>Har du en ovn med damp, kan du ikke altid bruge pyrolyse – se vores side om <a href="/dampovn/">dampovnen</a>. Vil du se, hvad bagningen i ovnen bruger, finder du tallene på vores side om <a href="/ovn/">ovnen</a> og om <a href="/komfur/">komfuret</a>.</p>

<h2>Sådan holder du pyrolysens forbrug nede</h2>
<ol>
<li><strong>Rens 2–3 gange om året</strong> og tør småpletter af med en klud i mellemtiden.</li>
<li><strong>Vælg det lette niveau</strong>, når ovnen ikke er meget snavset.</li>
<li><strong>Kør rensningen i dagens billigste timer</strong>, ikke om aftenen.</li>
<li><strong>Tag plader og riste ud</strong>, som ikke tåler pyrolyse, og fjern større madrester først, så rensningen ikke skal brænde dem af.</li>
<li><strong>Brug bagepapir og låg på fadet</strong>, så der kommer mindre stænk i ovnen fra starten.</li>
</ol>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger en pyrolyserensning?",
      answer:
        "2,5–8 kWh, alt efter ovn og niveau. Stiftung Warentest målte 4–8 kWh i en test af 11 ovne fra januar 2026. Det koster {{kr 4-8}} pr. rensning ved månedens elpris.",
    },
    {
      question: "Hvor lang tid tager en pyrolyse?",
      answer:
        "Typisk to til tre timer. Neff oplyser omkring 2 timer og 15 minutter for det lette niveau og 2 timer og 30 minutter for det intensive, og ovnen er i drift omkring 3 timer med opvarmning og afkøling.",
    },
    {
      question: "Hvor ofte skal man bruge pyrolyse?",
      answer:
        "Neff anbefaler 2–3 gange om året. Med tre rensninger på 4 kWh bliver det 12 kWh om året, eller {{kr 12}} ved månedens elpris.",
    },
    {
      question: "Hvornår er det billigst at køre pyrolysen?",
      answer:
        "I dagens billigste timer, typisk midt på dagen eller om natten, og aldrig mellem 17 og 20. Rensningen er ikke bundet til et måltid og er derfor let at flytte. Vær hjemme, så børn og dyr holdes væk fra den varme ovn.",
    },
    {
      question: "Indgår pyrolysen i ovnens energimærke?",
      answer:
        "Nej. EU-energimærket for ovne måler kun en standardcyklus med varmluft eller over- og undervarme. Rensningerne kommer oveni ovnens forbrug til bagning.",
    },
  ],
  relatedSlugs: ["ovn", "dampovn", "komfur", "miniovn", "airfryer"],
  sources: [
    { name: "Stiftung Warentest — Backöfen: Selbstreinigung mit Verbrennungsgefahr (pressemeddelelse, 19.01.2026)", url: "https://www.test.de/presse/pressemitteilungen/Backoefen-Selbstreinigung-mit-Verbrennungsgefahr-6275323-0/" },
    { name: "Øko-Test — Pyrolyse beim Backofen: Warum Sie auf die Selbstreinigungsfunktion verzichten sollten", url: "https://www.oekotest.de/freizeit-technik/Pyrolyse-beim-Backofen-Warum-Sie-auf-die-Selbstreinigungsfunktion-verzichten-sollten_13560_1.html" },
    { name: "Neff — Wie funktioniert ein Pyrolyse-Backofen? (kWh, niveauer, hyppighed)", url: "https://www.neff-home.com/de/produktberatung/pyrolyse-backofen-reinigen" },
    { name: "Bosch — Selbstreinigende Backöfen (pyrolyse og EcoClean)", url: "https://www.bosch-home.com/ch/de/specials/selbstreinigende-backoefen" },
    { name: "Siemens — HB776G1B1 indbygningsovn, dansk datablad (activeClean pyrolytisk selvrens)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/HB776G1B1.pdf" },
    { name: "Bosch — HBG7741B1 indbygningsovn, dansk datablad (pyrolytisk rengøringssystem)", url: "https://media3.bsh-group.com/Documents/specsheet/da-DK/HBG7741B1.pdf" },
    { name: "EPREL — EU's produktdatabase, ovne (Siemens HB776G1B1)", url: "https://eprel.ec.europa.eu/screen/product/ovens/1053771" },
    { name: "EUR-Lex — Forordning (EU) 65/2014 om energimærkning af ovne og emhætter", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0065" },
  ],
  calculatorConfig: {
    title: "Pyrolyseovn forbrugsberegner",
    options: [
      { label: "Let rensning, laveste niveau", kwhPerUse: 2.5 },
      { label: "Sparsom ovn (4 kWh)", kwhPerUse: 4 },
      { label: "Mellem (6 kWh)", kwhPerUse: 6 },
      { label: "Mest strømkrævende (8 kWh)", kwhPerUse: 8 },
    ],
    usageLabel: "Rensninger om året",
    usageUnit: "om året",
    usageMin: 1,
    usageMax: 12,
    usageDefault: 3,
    usageStep: 1,
    per: "rensning",
    perYear: 1,
  },
  publishDate: "2026-12-04",
  updated: "2026-11-22",
};

export default pyrolyseovn;
