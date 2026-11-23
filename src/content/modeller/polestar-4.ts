import type { ModelData } from "@/lib/models";

const polestar4: ModelData = {
  slug: "polestar-4",
  parent: "elbil",
  brand: "Polestar",
  name: "Polestar 4",
  released: "2024-08",
  synonyms: [
    "polestar 4 forbrug",
    "polestar 4 strømforbrug",
    "polestar 4 single motor forbrug",
    "polestar 4 dual motor forbrug",
    "polestar 4 suv forbrug",
    "polestar 4 kwh pr 100 km",
    "polestar 4 rækkevidde vinter",
  ],
  title: "Polestar 4 strømforbrug (2026) → coupé og SUV i kWh pr. km",
  description:
    "Polestar 4 som coupé og SUV med en eller to motorer: Polestars officielle WLTP-forbrug fra 17,8 til 21,7 kWh pr. 100 km, kWh om året og ladetider.",
  intro:
    "Polestar 4 med én motor bruger 17,8–18,4 kWh pr. 100 km efter WLTP, med to motorer 19,0–21,7 kWh. Coupé og SUV bruger det samme, men SUV'en kører lidt længere.",
  content: `<h2>Hvad bruger en Polestar 4 pr. 100 km?</h2>
<p>Polestar 4 er en stor elbil fra Polestar, Volvos søstermærke i Geely-koncernen, og den findes nu i to karrosserier: den lave coupé og en SUV. Begge har et batteri på 100 kWh og vælges med én motor og baghjulstræk (200 kW, 272 hk) eller to motorer og firehjulstræk (400 kW, 544 hk). Polestars danske specifikationer opgiver 17,8–18,4 kWh pr. 100 km for coupéen med én motor og 19,0–21,7 kWh med to motorer. SUV'en bruger 17,8 kWh med én motor og 19,0–21,6 kWh med to. Forbruget er målt fra stikkontakten, så ladetabet er indregnet.</p>
<p>Med 15.000 km om året bruger en Polestar 4 med én motor omkring 2.670–2.760 kWh, svarende til {{kr 2670-2760}} ved månedens elpris. Med to motorer bliver det 2.850–3.255 kWh, svarende til {{kr 2850-3255}}. 100 km koster {{kr 17,8-18,4}} med én motor og {{kr 19-21,7}} med to, ladet hjemme.</p>
<p>EU's registreringsdata for 2025 bekræfter tallene for coupéen. De danske Polestar 4 med 200 kW lå på 17,8–18,1 kWh pr. 100 km, og dem med 400 kW på 18,7–21,7 kWh.</p>

<h2>Én motor eller to, coupé eller SUV?</h2>
<p>Den anden motor koster. Med de mindste fælge bruger Dual motor 1,2 kWh mere pr. 100 km end Single motor, omkring 180 kWh om året, svarende til {{kr 180}}. Med store fælge og mere udstyr når Dual motor op på 21,7 kWh, og så er forskellen op til 3,9 kWh pr. 100 km — omkring 585 kWh om året eller {{kr 585}}. Til gengæld går Dual motor fra 0 til 100 km/t på 3,8 sekunder mod 7,1 og må trække 2.000 kg mod 1.500 kg.</p>
<p>Karrosseriet betyder næsten intet for forbruget. SUV'en har samme drivlinje og samme forbrug, men Polestar opgiver en lidt længere rækkevidde: 630 km mod 620 km med én motor og 600 km mod 590 km med to. Spændet i forbruget skyldes fælge og udstyr; det konkrete tal for en bestemt bil står på dens registreringsattest.</p>

<h2>Hvad koster det at lade en Polestar 4?</h2>
<p>En fuld opladning af batteriet på 100 kWh koster {{kr 100}} ved månedens elpris på {{pris_kwh}}, lidt mere målt fra stikket, fordi der tabes strøm undervejs. Hjemme lader Polestar 4 med 11 kW, og Polestar opgiver 11 timer fra 0 til 100 % — en nat på en <a href="/ladestander/">ladeboks</a> fylder altså det meste af batteriet. Med den valgfri 22 kW-lader tager det 5,5 timer, hvis du har trefaset 32 A.</p>
<p>På lynlader tager Polestar 4 op til 200 kW, og Polestar opgiver 30 minutter fra 10 til 80 %. En sådan opladning fylder omkring 70 kWh. På offentlige lynladere betaler du som regel mere pr. kWh end hjemme, og prisen afhænger af operatør og abonnement. Laderen derhjemme kan sættes til at starte om natten, hvor elprisen oftest er lavest. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Polestar 4 mod Zeekr 7X, Model Y og ID.7</h2>
<p>Polestar 4 deler platform med <a href="/elbil/zeekr-7x/">Zeekr 7X</a>, som bruger 17,7–19,9 kWh pr. 100 km. De enmotorede biler ligger næsten ens, mens den firehjulstrukne 7X Privilege med 19,9 kWh ligger inden for spændet for Polestar 4 Dual motor.</p>
<p>Mod andre store elbiler bruger Polestar 4 mere. <a href="/elbil/tesla-model-y/">Tesla Model Y</a> bruger 13,1–16,2 kWh og <a href="/elbil/vw-id-7/">VW ID.7</a> 13,8–16,6 kWh. Mod ID.7 bruger Polestar 4 Single motor 1,2–4,6 kWh mere pr. 100 km, omkring 180–690 kWh om året, svarende til {{kr 180-690}}. <a href="/elbil/xpeng-g6/">Xpeng G6</a> med 16,9–18,4 kWh ligger tættere på.</p>

<h2>Vinter, motorvej og gode vaner</h2>
<p>I frost og ved høj fart stiger forbruget typisk 15–30 % over WLTP. For Polestar 4 Single motor betyder det 20,5–23,1 kWh pr. 100 km og en rækkevidde på omkring 475–540 km. Dual motor kommer ned på 455–515 km. En bred SUV-coupé med store fælge mærker luftmodstanden på motorvejen, så farten betyder meget.</p>
<ul>
<li>Forvarm kabinen og batteriet via appen, mens bilen sidder i laderen.</li>
<li>Vælg de mindste fælge, hvis rækkevidden betyder mere end udseendet.</li>
<li>Hold 110–120 km/t på langtur, brug sæde- og rattvarme, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Polestar 4's forbrug pr. km?",
      answer:
        "Ifølge Polestars danske specifikationer bruger Polestar 4 178–184 Wh pr. km med én motor og 190–217 Wh pr. km med to motorer efter WLTP, svarende til 17,8–21,7 kWh pr. 100 km.",
    },
    {
      question: "Bruger Polestar 4 SUV mere strøm end coupéen?",
      answer: "Nej. Begge bruger 17,8 kWh pr. 100 km med én motor og fra 19,0 kWh med to. SUV'en kører 630 km mod 620 km efter WLTP med én motor.",
    },
    {
      question: "Hvad koster det at lade en Polestar 4?",
      answer: "En fuld opladning af det 100 kWh store batteri koster {{kr 100}} ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 17,8-21,7}}.",
    },
    {
      question: "Hvor langt kører en Polestar 4 om vinteren?",
      answer: "Regn med 15–30 % under WLTP i frost og på motorvej. Single motor kører typisk 475–540 km og Dual motor 455–515 km.",
    },
    {
      question: "Hvor hurtigt lader en Polestar 4?",
      answer: "Op til 200 kW på lynlader, og Polestar opgiver 30 minutter fra 10 til 80 %. Hjemme tager en fuld opladning 11 timer med 11 kW.",
    },
  ],
  sources: [
    {
      name: "Polestar Danmark — Polestar 4 coupé, specifikationer (forbrug, rækkevidde, batteri, ladning)",
      url: "https://www.polestar.com/dk/polestar-4-models/polestar-4-coupe/specifications/",
    },
    {
      name: "Polestar Danmark — Polestar 4 SUV, specifikationer (forbrug, rækkevidde, batteri, ladning)",
      url: "https://www.polestar.com/dk/polestar-4-models/polestar-4-suv/specifications/",
    },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "Coupé Single motor (100 kWh)", watts: {}, whPerKm: 178, source: 0 },
    { name: "Coupé Dual motor (100 kWh)", watts: {}, whPerKm: 190, source: 0 },
    { name: "SUV Single motor (100 kWh)", watts: {}, whPerKm: 178, source: 1 },
    { name: "SUV Dual motor (100 kWh)", watts: {}, whPerKm: 190, source: 1 },
  ],
  publishDate: "2026-12-20",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Polestars officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tabellen viser den laveste værdi pr. version (de mindste fælge) fra Polestars danske specifikationer, med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default polestar4;
