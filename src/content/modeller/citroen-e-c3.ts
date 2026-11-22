import type { ModelData } from "@/lib/models";

const citroenEC3: ModelData = {
  slug: "citroen-e-c3",
  parent: "elbil",
  brand: "Citroën",
  name: "Citroën ë-C3",
  released: "2024-06",
  synonyms: [
    "citroen e-c3 forbrug",
    "citroën ë-c3 strømforbrug",
    "e-c3 kwh pr 100 km",
    "citroen e-c3 rækkevidde vinter",
    "e-c3 urban range forbrug",
    "e-c3 44 kwh forbrug",
    "citroen ec3 forbrug pr km",
  ],
  title: "Citroën ë-C3 strømforbrug (2026) → kWh pr. 100 km og pris",
  description:
    "Citroën ë-C3 med 30 og 44 kWh batteri: Citroëns officielle WLTP-forbrug, kWh om året, pris pr. 100 km, en fuld opladning og rækkevidden om vinteren.",
  intro:
    "Det store batteri bruger mindst: ë-C3 med 44 kWh står til 16,8 kWh pr. 100 km mod 17,3 kWh for den mindre bybil-udgave med 30 kWh.",
  content: `<h2>Hvad bruger en Citroën ë-C3 pr. 100 km?</h2>
<p>Citroën ë-C3 er en lille og høj hatchback med en elmotor på 83 kW (113 hk) og to batterier at vælge imellem. Citroëns danske modelside oplyser ét WLTP-forbrug for hver: 17,3 kWh pr. 100 km for Urban Range med 30 kWh-batteri og 16,8 kWh pr. 100 km for Comfort Range med 44 kWh-batteri. WLTP-tallet er målt som strøm fra stikkontakten, så det tab, der sker i bilens lader, er regnet med. Du kan derfor gange tallet direkte med din elpris.</p>
<p>Med 15.000 km om året bruger Comfort Range omkring 2.520 kWh, svarende til {{kr 2520}} ved månedens elpris, og Urban Range omkring 2.595 kWh, svarende til {{kr 2595}}. 100 km koster {{kr 16,8}} i den store udgave og {{kr 17,3}} i den lille, ladet hjemme.</p>
<p>EU's registreringsdata for nye biler i 2025 bekræfter niveauet: de 891 ë-C3, der blev indregistreret i Danmark det år, lå mellem 16,6 og 17,4 kWh pr. 100 km med et gennemsnit på 16,8 kWh. Står der et andet tal på registreringsattesten for netop din bil, er det det, der gælder.</p>

<h2>30 eller 44 kWh: det store batteri er det sparsomme</h2>
<p>Normalt bruger en elbil lidt mere strøm med et tungere batteri, men i ë-C3 er det omvendt. Comfort Range bruger 0,5 kWh mindre pr. 100 km end Urban Range. Over 15.000 km er det omkring 75 kWh om året, svarende til {{kr 75}}. Det afgør ikke valget alene, men det betyder, at du ikke betaler ekstra i strøm for den længere rækkevidde.</p>
<p>Forskellen i rækkevidde er til gengæld stor. Urban Range kører op til 204 km på en opladning efter WLTP og 304 km i bykørsel; Comfort Range op til 320 km og 460 km i bykørsel. Kører du mest i byen og har lademulighed hjemme, rækker det lille batteri til hverdagen. Skal bilen også bruges på motorvej og ferieture, er 44 kWh det sikre valg, også fordi den lader hurtigere på lynlader.</p>

<h2>Hvad koster det at lade en ë-C3?</h2>
<p>En fuld opladning af 44 kWh-batteriet koster {{kr 44}} ved månedens elpris på {{pris_kwh}}, og 30 kWh-batteriet {{kr 30}} — en anelse mere målt fra stikket, fordi der tabes strøm i opladningen. I hverdagen er prisen pr. kilometer mere nyttig: en arbejdsdag med 40 km frem og tilbage koster omkring {{kr 6,7}} i strøm i Comfort Range.</p>
<p>Citroën opgiver, at begge batterier kan lades med op til 11 kW på vekselstrøm. Fra 20 til 80 % tager det ned til 1 time og 40 minutter for 30 kWh og 2 timer og 50 minutter for 44 kWh, så en nat på en <a href="/ladestander/">ladeboks</a> er rigeligt. På lynlader er der forskel: Urban Range tager højst 30 kW og når fra 20 til 80 % på ned til 36 minutter, Comfort Range op til 100 kW og klarer det på ned til 26 minutter.</p>
<p>Offentlig lynladning koster typisk væsentligt mere pr. kWh end strøm i indkørslen, og prisen afhænger af operatør og abonnement. Lader du hjemme om natten, hvor elprisen oftest er lavest, holder du årsregningen nede. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>, når prisen skifter time for time.</p>

<h2>ë-C3 mod ë-C3 Aircross og andre små elbiler</h2>
<p>Den større ë-C3 Aircross er en længere og højere SUV på samme platform. Ifølge Citroëns modelside bruger den 17,6 kWh pr. 100 km med 44 kWh-batteri og 16,1 kWh med det store batteri på 54 kWh, som kører 399 km efter WLTP. Med samme 44 kWh-batteri bruger Aircross altså 0,8 kWh mere pr. 100 km end ë-C3 — omkring 120 kWh om året med vores profil.</p>
<p>Blandt de små elbiler på vores modelsider er ë-C3 ikke den mest sparsomme. <a href="/elbil/renault-5/">Renault 5</a> bruger 14,5–14,9 kWh pr. 100 km og <a href="/elbil/vw-id-3/">VW ID.3</a> 14,0–14,4 kWh ifølge producenterne. Mod Renault 5 med 52 kWh-batteri er forskellen 1,9 kWh pr. 100 km, omkring 285 kWh om året, svarende til {{kr 285}}. Forklaringen er især det høje, kantede karrosseri, som skubber mere luft foran sig. I drift ligger ë-C3 derfor i den tunge ende af småbilerne.</p>

<h2>Vinterkørsel og motorvej</h2>
<p>I dansk frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP-tallet. For Comfort Range betyder det 19,3–21,8 kWh pr. 100 km, og 100 km koster så {{kr 19,3-21,8}} hjemmeladet. Rækkevidden falder tilsvarende fra 320 km til omkring 225–270 km, og for Urban Range fra 204 km til omkring 145–175 km.</p>
<p>ë-C3 har en topfart på 135 km/t, og det er motorvejsfarten, der koster mest. Hold dig til 110–120 km/t på langtur, så holder rækkevidden bedre. Forvarm kabinen, mens bilen er sat til laderen, så varmen kommer fra nettet og ikke fra batteriet, og brug sæde- og rattvarme frem for høj kabinetemperatur — det er især vigtigt med et lille batteri.</p>

<h2>Gode råd til et lavere forbrug</h2>
<ul>
<li>Lad hjemme og om natten; brug lynlader på turen, ikke til hverdag.</li>
<li>Tjek dæktrykket, når temperaturen falder — lavt tryk koster strøm hver kilometer.</li>
<li>Undgå tagboks og cykelholder på taget, når du ikke bruger dem; det høje karrosseri er i forvejen den største forbruger.</li>
</ul>
<p>Flere modeller står på siden om <a href="/elbil/">elbilers strømforbrug</a>, hvor du kan sammenligne dem med samme kørsel.</p>`,
  faqs: [
    {
      question: "Hvad er Citroën ë-C3's forbrug pr. km?",
      answer:
        "Ifølge Citroëns danske modelside bruger ë-C3 17,3 kWh pr. 100 km med 30 kWh-batteri (Urban Range) og 16,8 kWh med 44 kWh-batteri (Comfort Range) efter WLTP. Det er 0,168–0,173 kWh pr. km, målt fra stikkontakten.",
    },
    {
      question: "Hvad koster det at lade en Citroën ë-C3?",
      answer:
        "En fuld opladning af 44 kWh-batteriet koster {{kr 44}} ved månedens elpris på {{pris_kwh}}, 30 kWh-batteriet {{kr 30}}. 100 km koster {{kr 16,8}} i Comfort Range ved hjemmeladning.",
    },
    {
      question: "Hvor langt kører en ë-C3 om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP-rækkevidden i frost og på motorvej. Comfort Range med 320 km efter WLTP kører typisk 225–270 km, Urban Range med 204 km omkring 145–175 km.",
    },
    {
      question: "Bruger ë-C3 Aircross mere strøm end ë-C3?",
      answer:
        "Ja. Med samme 44 kWh-batteri bruger ë-C3 Aircross 17,6 kWh pr. 100 km mod 16,8 kWh for ë-C3 ifølge Citroën. Aircross med 54 kWh-batteri ligger på 16,1 kWh.",
    },
    {
      question: "Hvor hurtigt lader en Citroën ë-C3?",
      answer:
        "Op til 11 kW på vekselstrøm for begge batterier. På lynlader tager Urban Range op til 30 kW (20–80 % på ned til 36 minutter) og Comfort Range op til 100 kW (20–80 % på ned til 26 minutter) ifølge Citroën.",
    },
  ],
  sources: [
    {
      name: "Citroën Danmark — ë-C3, modelside med forbrug, rækkevidde og ladetider (arkiveret kopi, 20. juli 2026)",
      url: "https://web.archive.org/web/20260720193721/https://www.citroen.dk/modeller/e-C3.html",
    },
    {
      name: "Citroën Danmark — ë-C3 Aircross, modelside (arkiveret kopi, 13. juli 2026)",
      url: "https://web.archive.org/web/20260713060557/https://www.citroen.dk/modeller/e-c3-aircross.html",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Urban Range 30 kWh", watts: {}, whPerKm: 173, source: 0 },
    { name: "Comfort Range 44 kWh", watts: {}, whPerKm: 168, source: 0 },
  ],
  publishDate: "2026-12-07",
  updated: "2026-11-22",
  measuredBy: "efter WLTP-normen (Citroëns officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tallene er fra Citroëns danske modelside — en arkiveret kopi fra juli 2026, fordi siden ikke kunne hentes direkte — med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default citroenEC3;
