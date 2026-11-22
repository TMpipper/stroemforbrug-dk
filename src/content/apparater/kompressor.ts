import type { ApplianceData } from "@/lib/types";

/**
 * Kompressor (luftkompressor til hobby og garage, 24-50 l). Intet EU-energimærke.
 * Tal: Einhell TC-AC 270/50/10 (1.800 W S1, 50 l, 10 bar, 140/125/100 l/min ved 0/4/7 bar), Metabo Basic 250-24 W
 * (1,5 kW, 24 l, 8 bar, 110 l/min påfyldning, 95 l/min effektivt), Einhell BT-AC 210/24 (1.500 W ved S3 25 %),
 * Einhell TC-AC 190/24/8 I OF (1.100 W ved S3 50 %, 55 l/min ved 7 bar).
 * kWh pr. tankfyldning = fri luft (tankvolumen × bar) ÷ ydelse × effekt (vores omregning). Motorens andel af tiden pr.
 * værkstedstime er vores skøn.
 */
const kompressor: ApplianceData = {
  slug: "kompressor",
  meta: {
    category: "vaerksted",
    usage: "per-hour",
    hasEuLabel: false,
    shiftable: false,
    synonyms: ["kompressor", "luftkompressor", "trykluftkompressor", "kompressor 50 liter", "kompressor 24 liter", "garagekompressor", "oliefri kompressor", "kompressor til dæk"],
  },
  name: "Kompressor",
  article: "en",
  title: "Kompressor strømforbrug (2026) → kWh pr. værkstedstime",
  description:
    "Se hvor meget strøm en luftkompressor bruger pr. tankfyldning og pr. time i værkstedet: 1,1-1,8 kW, 24 eller 50 liter, og hvad intermittens S1 og S3 betyder.",
  heading: "Strømforbrug for en kompressor: watt, pris i timen og dyreste timer",
  quickAnswer:
    "En hobbykompressor har en motor på 1,1-1,8 kW, men den kører kun, når tanken skal fyldes. Efter vores skøn bruger en kompressor på 1,5 kW knap 0,4 kWh pr. time i værkstedet ved almindeligt brug, svarende til {{kr 0,375}} ved {{pris_kwh}}. Tyve timer om året bliver cirka 7,5 kWh, eller {{kr 7,5}}. Sandblæsning, hvor motoren kører uafbrudt, bruger flere gange så meget.",
  kwhRange: [0.5, 150],
  typicalKwh: 7.5,
  wattage: 1500,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.0, 1.2, 1.3, 1.1, 0.9, 0.7, 0.8, 1.0, 1.0, 1.0, 0.9],
  content: `<h2>Motoren kører kun, når tanken skal fyldes</h2>
<p>En luftkompressor består af en elmotor, en pumpe og en trykbeholder. Motoren pumper luft ind i tanken, til trykket når det indstillede maksimum, og så slår en trykafbryder motoren fra. Når du bruger luften, falder trykket, og ved et vist punkt starter motoren igen. Derfor er effekten på typeskiltet ikke det samme som forbruget: motoren bruger sin fulde effekt, mens den kører, men den kører kun en del af tiden.</p>
<p>Til hobby og garage ligger motorerne typisk på 1,1-1,8 kW. Einhell oplyser 1.800 W for TC-AC 270/50/10 med en tank på 50 liter og et maksimalt tryk på 10 bar, og Metabo 1,5 kW for Basic 250-24 W med 24 liter og 8 bar. Einhells mindre TC-AC 190/24/8 har en motor på 1.100 W.</p>

<h2>Strøm pr. tankfyldning</h2>
<p>Den nemmeste måde at forstå forbruget på er at regne på én tankfyldning. En tank på 24 liter, der fyldes til 8 bar, rummer omkring 190 liter luft ved almindeligt tryk. Metabo oplyser en påfyldningsydelse på 110 liter i minuttet, så motoren skal køre knap to minutter. Ved 1,5 kW bliver det efter vores omregning omkring 0,04 kWh — mindre end at koge vand i en elkedel.</p>
<table>
<thead><tr><th>Kompressor</th><th>Tank og tryk</th><th>kWh pr. fyldning fra tom (ca.)</th><th>Pris pr. fyldning</th></tr></thead>
<tbody>
<tr><td>Metabo Basic 250-24 W (1,5 kW)</td><td>24 l, 8 bar</td><td>0,04</td><td>{{kr 0,04}}</td></tr>
<tr><td>Einhell TC-AC 270/50/10 (1,8 kW)</td><td>50 l, 10 bar</td><td>0,13</td><td>{{kr 0,13}}</td></tr>
</tbody>
</table>
<p>Tallene er vores omregning af producentens ydelse og gælder en tom tank. I praksis fylder motoren kun op fra det tryk, hvor den starter igen, og hver efterfyldning er kortere. Ydelsen falder også, jo højere trykket i tanken bliver: Einhell oplyser 140 liter i minuttet ved 0 bar, 125 ved 4 bar og 100 ved 7 bar for TC-AC 270/50/10.</p>

<h2>Watt og pris pr. værkstedstime</h2>
<table>
<thead><tr><th>Brug (vores skøn)</th><th>Motoren kører</th><th>kWh pr. time</th><th>Pris pr. time</th><th>20 timer om året</th></tr></thead>
<tbody>
<tr><td>Dæk, blæsepistol og sømpistol, 1,5 kW</td><td>ca. en fjerdedel af tiden</td><td>0,375</td><td>{{kr 0,375}}</td><td>{{kr 7,5}}</td></tr>
<tr><td>Slagnøgle, sprøjtepistol, 1,5 kW</td><td>ca. halvdelen af tiden</td><td>0,75</td><td>{{kr 0,75}}</td><td>{{kr 15}}</td></tr>
<tr><td>Sandblæsning eller luftslibning, 1,8 kW</td><td>næsten hele tiden</td><td>1,8</td><td>{{kr 1,8}}</td><td>{{kr 36}}</td></tr>
</tbody>
</table>
<p>Hvor stor en del af tiden motoren kører, afhænger helt af værktøjet. En blæsepistol eller en dækpumpning tager kun et pust ad gangen, mens en sandblæser eller en luftdrevet slibemaskine bruger mere luft, end en lille kompressor kan levere, så motoren kører uden pause.</p>

<h2>Hvad betyder S1 og S3 25 %?</h2>
<p>Mange kompressorer har en mærkning for, hvor længe motoren må køre ad gangen. Einhell oplyser for eksempel 1.500 W ved S3 25 % for BT-AC 210/24 og 1.100 W ved S3 50 % for TC-AC 190/24/8, mens den større TC-AC 270/50/10 er mærket S1. S1 betyder, at motoren må køre uafbrudt; S3 betyder periodisk drift, hvor motoren kun må køre den angivne andel af tiden og skal have pauser til at køle af ind imellem.</p>
<p>For strømforbruget betyder det, at en lille kompressor med S3 25 % ikke er bygget til at køre konstant. Bruger du den til sandblæsning, kører motoren længere, end den er bygget til, og kan blive overophedet — og værktøjet får alligevel for lidt luft. Til luftkrævende arbejde er en større kompressor med S1 og en større tank det rigtige valg, både for værktøjet og for motoren.</p>

<h2>Utætheder er det skjulte forbrug</h2>
<p>Den største kilde til spild i et lille værksted er utætheder. Lader du kompressoren stå tændt med tryk på slangerne, og der er en lille utæthed i en kobling eller en slange, falder trykket langsomt, og motoren starter igen og igen — også når ingen er i værkstedet. Hver start bruger kun lidt, men over en nat eller en weekend bliver det til mange fyldninger, der ikke gør nytte. Det er vores skøn, at en kompressor, der står tændt med en utæt kobling, kan bruge lige så meget strøm over en weekend som flere timers almindeligt arbejde.</p>
<p>Sluk derfor kompressoren på kontakten, når du er færdig, og luk luften ud af tanken. Det er også godt for tanken: fugt fra luften samler sig i bunden og skal tømmes ud gennem drænventilen jævnligt, så tanken ikke ruster.</p>

<h2>Hvornår bruger kompressoren strøm?</h2>
<p>Kompressoren bruger strøm, når du arbejder med den, og forbruget kan ikke flyttes til natten. Du kan derimod vælge at lave det luftkrævende arbejde, som sandblæsning, på et tidspunkt, hvor strømmen er billigere — en lørdag formiddag er ofte billigere end en hverdagsaften mellem kl. 17 og 21, hvor nettariffen er højest. Boksen længere oppe på siden viser dagens timepriser. For de fleste hobbybrugere er forskellen dog nogle få kroner om året.</p>

<h2>Strøm, sikring og forlængerledning</h2>
<p>En motor på 1,5-1,8 kW trækker 7-8 ampere, når den kører, men en kompressor trækker langt mere i det øjeblik, den starter, fordi pumpen skal i gang mod trykket i tanken. Derfor kan en kompressor slå en sikring fra, selvom den på papiret burde kunne være der. Sæt den helst direkte i en stikkontakt på en gruppe med 13 eller 16 ampere, og brug en længere luftslange i stedet for en lang forlængerledning. Kompressoren hører hjemme i værkstedet ved siden af andet elværktøj som <a href="/vinkelsliber/">vinkelsliberen</a> og <a href="/svejser/">svejseren</a>, der også trækker meget strøm i korte perioder.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li>Sluk kompressoren, når du er færdig, og luk luften ud.</li>
<li>Find og ret utætheder i koblinger og slanger.</li>
<li>Indstil trykket efter værktøjet — der er ingen grund til at fylde til 10 bar for at pumpe en cykel.</li>
<li>Vælg en kompressor, der passer til værktøjet; en for lille kompressor kører hele tiden.</li>
<li>Tøm kondensvand ud af tanken jævnligt.</li>
</ol>
<p>Brug beregneren ovenfor til at se, hvad dine timer med kompressoren koster. Skal du pumpe dæk på en <a href="/elcykel/">elcykel</a> eller bilen, er det kun et pust — og strømmen til det er så lille, at den ikke kan ses.</p>`,
  faqs: [
    {
      question: "Hvor mange watt bruger en kompressor?",
      answer:
        "Hobbykompressorer har typisk en motor på 1,1-1,8 kW. Einhell oplyser 1.800 W for TC-AC 270/50/10 og Metabo 1,5 kW for Basic 250-24 W. Motoren bruger kun strøm, mens den fylder tanken.",
    },
    {
      question: "Hvad koster det at fylde en kompressor?",
      answer:
        "Efter vores omregning bruger en tank på 24 liter til 8 bar omkring 0,04 kWh med Metabos kompressor på 1,5 kW, svarende til {{kr 0,04}}. En tank på 50 liter til 10 bar bruger omkring 0,13 kWh.",
    },
    {
      question: "Hvad betyder S3 25 % på en kompressor?",
      answer:
        "At motoren er bygget til periodisk drift og kun må køre en fjerdedel af tiden med pauser imellem. En kompressor mærket S1 må køre uafbrudt.",
    },
    {
      question: "Bruger kompressoren strøm, når den står tændt?",
      answer:
        "Kun hvis trykket falder. Er der en utæthed i en slange eller kobling, starter motoren igen og igen. Sluk derfor kompressoren og luk luften ud, når du er færdig.",
    },
    {
      question: "Hvad koster en kompressor i strøm om året?",
      answer:
        "Med 20 timer om året til dæk, blæsepistol og sømpistol bruger en kompressor på 1,5 kW efter vores skøn omkring 7,5 kWh, svarende til {{kr 7,5}}. Sandblæsning bruger flere gange mere.",
    },
  ],
  relatedSlugs: ["svejser", "vinkelsliber", "hoejtryksrenser", "dykpumpe", "3d-printer"],
  sources: [
    { name: "Einhell — TC-AC 270/50/10 (effekt, ydelse ved tryk, S1)", url: "https://www.einhell.de/en/p/4007361-tc-ac-270-50-10" },
    { name: "Metabo — Basic 250-24 W", url: "https://www.metabo.com/com/en/tools/compressed-air/compressors/mobile-workshop-compressors/basic-250-24-w-601533180-compressor.html" },
    { name: "Einhell — BT-AC 210/24 (S3 25 %)", url: "https://www.einhell-service.com/en_DE/4010140-bt-ac-210-24.html" },
    { name: "Einhell — TC-AC 190/24/8 I OF (S3 50 %)", url: "https://www.einhell.de/en/p/4007375-tc-ac-190-24-8-i-of/" },
  ],
  calculatorConfig: {
    title: "Beregn kompressorens strømforbrug",
    options: [
      { label: "Dæk, blæsepistol og sømpistol (1,5 kW, ca. 0,375 kWh/time)", kwhPerUse: 0.375 },
      { label: "Slagnøgle og sprøjtepistol (1,5 kW, ca. 0,75 kWh/time)", kwhPerUse: 0.75 },
      { label: "Sandblæsning, motoren kører konstant (1,8 kW)", kwhPerUse: 1.8 },
    ],
    usageLabel: "Værkstedstimer pr. år",
    usageUnit: "timer/år",
    usageMin: 1,
    usageMax: 200,
    usageDefault: 20,
    usageStep: 1,
    per: "time",
    perYear: 1,
  },
  publishDate: "2026-12-16",
  updated: "2026-11-22",
};

export default kompressor;
