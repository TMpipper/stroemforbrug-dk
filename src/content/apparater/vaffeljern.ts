import type { ApplianceData } from "@/lib/types";

/**
 * Vaffeljern — Stiftung Warentest gengiver den svenske Råd & Rön-test (juni 2023): opvarmning + 10 vafler ≈ 0,79 kWh; de tre
 * bedste jern var varme på godt to minutter og bagte en vaffel på ca. ét minut. lecker.de: 800–1.600 W, Cloer 1629 (930 W)
 * godt 2 min. opvarmning og 2–2,5 min. pr. hjertevaffel, Krups FDK251 (850 W) 5 min. + 10–15 min. pr. belgisk omgang,
 * Severin WA 2130 (1.600 W) 4–5 min. pr. omgang. De øvrige rækker er vores skøn (mærkeeffekt × tid, termostaten slår fra).
 * Beregneren: kWh pr. omgang, antal pr. måned × 12. Intet EU-energimærke.
 */
const vaffeljern: ApplianceData = {
  slug: "vaffeljern",
  meta: {
    category: "koekken",
    usage: "per-use",
    hasEuLabel: false,
    shiftable: false,
    motif: "ovn",
    synonyms: ["vaffeljern", "vaffel jern", "vaffeljern strømforbrug", "hjertevafler", "belgisk vaffeljern", "dobbelt vaffeljern", "vaffelmaskine", "vafler"],
  },
  name: "Vaffeljern",
  article: "et",
  title: "Vaffeljern strømforbrug (2026) → kWh pr. omgang vafler",
  description:
    "Se hvor meget strøm et vaffeljern bruger på opvarmning og pr. omgang vafler – hjertevafler og belgiske vafler – og hvad det koster ved månedens elpris.",
  heading: "Strømforbrug for et vaffeljern: kWh, pris pr. gang og dyreste timer",
  quickAnswer:
    "Et vaffeljern bruger typisk 0,2–0,8 kWh på opvarmning og en omgang på 5–10 vafler. Ti hjertevafler i et jern på omkring 900 W bruger efter vores skøn cirka 0,4 kWh, eller {{kr 0,4}} ved månedens elpris. I en svensk test endte opvarmning og ti vafler på 0,79 kWh, svarende til {{kr 0,79}}.",
  kwhRange: [1, 60],
  typicalKwh: 10,
  wattage: 1000,
  standbyWatts: 0,
  energyLabels: [],
  models: [],
  seasonalProfile: [1.1, 1.2, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 1.0, 1.1, 1.2],
  content: `<h2>Et vaffeljern bruger mest strøm, mens det bliver varmt</h2>
<p>Et vaffeljern er to tunge metalplader med varmelegemer, som skal op på omkring 200 grader, før den første vaffel kan bages. Effekten står typisk på 800–1.600 W. Når pladerne er varme, holder en termostat temperaturen, og elementerne slår til og fra, mens dejen bager. Det betyder, at opvarmningen og antallet af vafler afgør forbruget, mens jernets watt mest afgør, hvor hurtigt det går.</p>
<p>Den svenske forbrugerorganisation Råd & Rön har testet vaffeljern, og Stiftung Warentest gengiver resultatet: opvarmning og bagning af ti vafler kostede omkring 0,79 kWh. Det svarer til {{kr 0,79}} ved månedens elpris. De tre bedste jern var varme på godt to minutter, og de bedste bagte en vaffel på cirka et minut, mens et andet jern skulle bruge to minutter pr. omgang.</p>
<p>For et almindeligt hjertevaffeljern på omkring 900 W, der bager ti vafler, er det vores skøn ud fra mærkeeffekt og bagetid, at forbruget ligger omkring 0,4 kWh. Målingen og skønnet spænder altså fra cirka {{kr 0,4}} til {{kr 0,79}} for en omgang til familien. Bager du vafler to gange om måneden, bliver det omkring 10 kWh om året, eller {{kr 10}}.</p>

<h2>Forbrug pr. omgang</h2>
<p>Tabellen viser, hvad en typisk omgang vafler koster. Rækken med Råd & Rön er målt; de andre er vores skøn ud fra effekt og de bagetider, tyske testere har målt.</p>
<table>
<thead><tr><th>Vaffeljern og mængde</th><th>Tid i alt</th><th>kWh pr. gang</th><th>Pris pr. gang</th></tr></thead>
<tbody>
<tr><td>Hjertevafler, 5 stk., ca. 900 W</td><td>Ca. 15 min.</td><td>0,2 kWh</td><td>{{kr 0,2}}</td></tr>
<tr><td>Hjertevafler, 10 stk., ca. 900 W</td><td>Ca. 25 min.</td><td>0,4 kWh</td><td>{{kr 0,4}}</td></tr>
<tr><td>Belgiske vafler, dobbeltjern, 8 stk., 1.600 W</td><td>Ca. 25 min.</td><td>0,5 kWh</td><td>{{kr 0,5}}</td></tr>
<tr><td>Opvarmning + 10 vafler (Råd & Rön, målt)</td><td>Varierer</td><td>0,79 kWh</td><td>{{kr 0,79}}</td></tr>
<tr><td>Vaffelbord til fødselsdagen, 25 hjertevafler</td><td>Ca. 1 time</td><td>0,9 kWh</td><td>{{kr 0,9}}</td></tr>
</tbody>
</table>
<p>Selv en stor omgang til en børnefødselsdag ligger altså under en kWh. Dejen – mel, æg, mælk og smør – koster mange gange mere end strømmen.</p>

<h2>Hjertevafler eller belgiske vafler?</h2>
<p>Et klassisk dansk vaffeljern bager tynde hjertevafler, og pladerne er lette at varme op. Det tyske madmagasin lecker.de fandt i sin test, at et Cloer-jern på 930 W var varmt på lidt over to minutter og bagte en hjertevaffel på 2–2,5 minutter ved middel varme. Belgiske vafler er tykkere og kræver dybere plader og længere tid. Et dobbeltjern fra Krups på 850 W brugte fem minutter på at blive varmt og 10–15 minutter pr. omgang, mens et jern fra Severin på 1.600 W klarede en omgang på 4–5 minutter på højeste trin.</p>
<p>Her ses pointen om watt tydeligt: det kraftige jern bruger dobbelt så meget effekt, men kun en tredjedel af tiden, så forbruget pr. vaffel ender lavere. Et svagt jern, der skal stå tændt længe, er ikke nødvendigvis sparsomt.</p>

<h2>Opvarmningen er den faste udgift</h2>
<p>Uanset om du bager to vafler eller tyve, skal pladerne varmes op. For et hjertevaffeljern er det vores skøn, at opvarmningen koster 0,03–0,05 kWh, og for et tungt, belgisk dobbeltjern op mod 0,1 kWh. Det gør de små portioner dyre pr. vaffel og de store billige. Bager du kun et par vafler, er det mere sparsomt at varme færdigkøbte vafler i en <a href="/broedrister/">brødrister</a>.</p>
<p>Mellem vaflerne er pladerne varme, og termostaten skal kun dække varmetabet og den energi, der går til at bage dejen. Lukker du jernet mellem omgangene i stedet for at lade det stå åbent, holder det bedre på varmen.</p>

<h2>Hvornår på døgnet bages vaflerne?</h2>
<p>Vafler bages, når der er gæster eller en søndag eftermiddag, og det giver ikke mening at flytte dem til natten. Tidspunktet er dog ofte heldigt: en eftermiddag i weekenden ligger før aftenens dyre timer, hvor elprisen typisk topper. Er det vafler til aftenkaffen, bager du i de dyreste timer, men beløbet er stadig lille. Boksen længere oppe på siden viser, hvilke timer der er dyrest i dag.</p>

<h2>Bruger vaffeljernet strøm, når det ikke bager?</h2>
<p>Et almindeligt vaffeljern har ingen standby: lampen viser bare, at termostaten arbejder, og når stikket er ude, bruger det intet. Nogle nyere jern har tænd/sluk-knap og display, og de må efter EU's regler bruge under én watt slukket. Det vigtigste er at huske at tage stikket ud efter brug, for et jern uden afbryder holder pladerne varme, så længe det sidder i stikkontakten.</p>

<h2>Sådan holder du forbruget nede</h2>
<ol>
<li><strong>Bag mange på én gang</strong> – opvarmningen er den faste udgift, så frys de overskydende vafler og varm dem i brødristeren.</li>
<li><strong>Hav dejen klar</strong>, før jernet tændes, så det ikke står og venter.</li>
<li><strong>Luk jernet mellem omgangene</strong> – så holder pladerne bedre på varmen.</li>
<li><strong>Tag stikket ud med det samme</strong>, når du er færdig.</li>
<li><strong>Hold øje med lampen</strong> – når den slukker, er jernet klar, så det ikke står og varmer forgæves, før dejen kommer i.</li>
</ol>
<p>Skal der laves varme toast til de voksne ved siden af, er en <a href="/sandwichgrill/">sandwichgrill</a> det tilsvarende apparat. Kaffen eller teen til vaflerne koster også lidt – vandet i en <a href="/elkedel/">elkedel</a> bruger omkring 0,1 kWh pr. liter.</p>`,
  faqs: [
    {
      question: "Hvor meget strøm bruger et vaffeljern?",
      answer:
        "Typisk 0,2–0,8 kWh for opvarmning og en omgang på 5–10 vafler. I en svensk test brugte opvarmning og ti vafler 0,79 kWh, svarende til {{kr 0,79}} ved månedens elpris.",
    },
    {
      question: "Hvor mange watt har et vaffeljern?",
      answer:
        "Hjertevaffeljern har typisk 800–1.000 W, mens belgiske dobbeltjern har op til 1.600 W. Et kraftigt jern bager hurtigere, så forbruget pr. vaffel er ikke nødvendigvis højere.",
    },
    {
      question: "Hvad koster en omgang vafler i strøm?",
      answer:
        "Ti hjertevafler i et jern på omkring 900 W bruger efter vores skøn cirka 0,4 kWh, eller {{kr 0,4}}. En stor omgang på 25 vafler er omkring 0,9 kWh, eller {{kr 0,9}}.",
    },
    {
      question: "Bruger et vaffeljern strøm, når det sidder i stikket?",
      answer:
        "Et jern uden afbryder holder pladerne varme, så længe stikket sidder i, og bruger derfor strøm hele tiden. Tag stikket ud efter brug. Jern med tænd/sluk-knap bruger under én watt slukket.",
    },
  ],
  relatedSlugs: ["sandwichgrill", "broedrister", "elkedel", "kaffemaskine", "airfryer"],
  sources: [
    { name: "Stiftung Warentest — Waffeleisen im Test: Heiße Eisen (gengiver Råd & Rön, juni 2023)", url: "https://www.test.de/Waffeleisen-im-Test-Heisse-Eisen-4186830-0/" },
    { name: "lecker.de — Die besten Waffeleisen im Test (effekt, opvarmning og bagetider)", url: "https://www.lecker.de/die-besten-waffeleisen-im-test-71901.html" },
  ],
  calculatorConfig: {
    title: "Vaffeljern forbrugsberegner",
    options: [
      { label: "Hjertevafler, 5 stk.", kwhPerUse: 0.2 },
      { label: "Hjertevafler, 10 stk.", kwhPerUse: 0.4 },
      { label: "Belgiske vafler, dobbeltjern, 8 stk.", kwhPerUse: 0.5 },
      { label: "Opvarmning + 10 vafler (som i Råd & Rön-testen)", kwhPerUse: 0.79 },
    ],
    usageLabel: "Antal omgange pr. måned",
    usageUnit: "pr. måned",
    usageMin: 1,
    usageMax: 12,
    usageDefault: 2,
    usageStep: 1,
    per: "gang",
    perYear: 12,
  },
  publishDate: "2026-12-01",
  updated: "2026-11-22",
};

export default vaffeljern;
