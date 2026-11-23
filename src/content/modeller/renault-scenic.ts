import type { ModelData } from "@/lib/models";

const renaultScenic: ModelData = {
  slug: "renault-scenic",
  parent: "elbil",
  brand: "Renault",
  name: "Renault Scenic E-Tech",
  released: "2024-03",
  synonyms: [
    "renault scenic forbrug",
    "renault scenic e-tech strømforbrug",
    "scenic e-tech electric forbrug",
    "scenic 87 kwh forbrug",
    "renault scenic kwh pr 100 km",
    "renault scenic rækkevidde vinter",
    "scenic elbil forbrug pr km",
  ],
  title: "Renault Scenic E-Tech strømforbrug (2026) → 67, 87 og 89 kWh",
  description:
    "Renault Scenic E-Tech med 67, 87 og 89 kWh batteri: Renaults officielle WLTP-forbrug fra prislisten, kWh om året, pris pr. 100 km og ladetider.",
  intro:
    "Scenic bruger 16,4–17,5 kWh pr. 100 km efter Renaults danske prisliste. Det nye 89 kWh-batteri er det mest sparsomme og kører længst — op til 641 km efter WLTP.",
  content: `<h2>Hvad bruger en Renault Scenic E-Tech pr. 100 km?</h2>
<p>Scenic E-Tech er Renaults elektriske familie-SUV, bygget på samme platform som Megane E-Tech. Renaults danske prisliste, gældende til 31. december 2026, opgiver tre batterier, alle med den samme motor på 160 kW (220 hk) og forhjulstræk. Med 67 kWh-batteriet (LFP) bruger Scenic 17,0–17,5 kWh pr. 100 km, med 87 kWh 16,8–17,5 kWh og med det nye 89 kWh-batteri 16,4–16,7 kWh. Spændet skyldes fælgene: Techno kører på 19 tommer, Esprit Alpine og Iconic på 20 tommer. Tallene er målt fra stikkontakten, så det strøm, der tabes under ladningen, er regnet med.</p>
<p>Med 15.000 km om året bruger Scenic 67 kWh omkring 2.550–2.625 kWh, svarende til {{kr 2550-2625}} ved månedens elpris. Med 87 kWh bliver det 2.520–2.625 kWh, svarende til {{kr 2520-2625}}, og med 89 kWh 2.460–2.505 kWh, svarende til {{kr 2460-2505}}. 100 km koster {{kr 16,4-17,5}} ladet hjemme.</p>
<p>EU's registreringsdata for 2025 bekræfter niveauet for de ældre versioner. De danske Scenic med 160 kW-motoren lå på 16,9–17,7 kWh pr. 100 km med et gennemsnit på 17,2 kWh, og den tidligere udgave med 125 kW og mindre batteri på 16,3–16,7 kWh.</p>

<h2>Hvilket batteri skal man vælge?</h2>
<p>Usædvanligt nok bruger den største Scenic mindst. Med 89 kWh ligger forbruget på 16,4–16,7 kWh pr. 100 km, mens 67 kWh-batteriet bruger 17,0–17,5 kWh. Forskellen er op til 0,6 kWh pr. 100 km for Techno på 19 tommer, omkring 90 kWh om året, svarende til {{kr 90}}. Rækkevidden går fra 450–466 km med 67 kWh over 606–625 km med 87 kWh til 630–641 km med 89 kWh.</p>
<p>Det lille batteri er af typen LFP (lithium-jern-fosfat), og ifølge prislisten vejer det 500 kg mod 515 kg for 87 kWh og 503 kg for 89 kWh. Derfor sparer man ingen strøm ved at vælge det. Det giver en lavere pris og en kortere rækkevidde. Kører du mest i byen og på korte pendlerture, rækker 67 kWh fint; kører du ofte langt, er 87 eller 89 kWh mere afslappet.</p>
<p>Fælgene betyder mere, end mange tror. Med 87 kWh går forbruget fra 16,8 kWh på 19 tommer til 17,5 kWh på 20 tommer, og rækkevidden falder fra 625 til 606 km. Det er omkring 105 kWh om året.</p>

<h2>Hvad koster det at lade en Scenic?</h2>
<p>En fuld opladning af 87 kWh-batteriet koster {{kr 87}} ved månedens elpris på {{pris_kwh}}, 67 kWh-batteriet {{kr 67}} — lidt mere målt fra stikket, fordi der tabes strøm undervejs. Ifølge prislisten tager en ladeboks på 11 kW 6 timer og 30 minutter fra 0 til 80 % med 67 kWh og 9 timer med 87 kWh, så en nat på en <a href="/ladestander/">ladeboks</a> er nok. Scenic kan som ekstraudstyr lade med 22 kW AC, hvilket kun hjælper, hvis du har trefaset 32 A eller lader på offentlige AC-ladere.</p>
<p>På lynlader tager Scenic 150–165 kW, og Renault opgiver 15–80 % på 25–37 minutter afhængigt af batteri. Strøm fra en offentlig lynlader er som regel en del dyrere end strøm hjemmefra, og prisen varierer med operatør og abonnement. Hjemmeladning om natten, når elprisen typisk er lavest, er derfor den billige vej. Se <a href="/hvad-koster-det-at-lade-en-elbil/">hvad det koster at lade en elbil</a>.</p>

<h2>Scenic mod andre familie-SUV'er</h2>
<p>Scenic ligger lidt over de mest sparsomme i klassen. <a href="/elbil/skoda-enyaq/">Škoda Enyaq</a> bruger 15,0–15,6 kWh pr. 100 km og <a href="/elbil/vw-id-4/">VW ID.4</a> 15,9–16,8 kWh. Mod Enyaq bruger Scenic 89 kWh omkring 1,4 kWh mere pr. 100 km, svarende til 210 kWh om året eller {{kr 210}}.</p>
<p>Til gengæld er Scenic mere sparsom end <a href="/elbil/xpeng-g6/">Xpeng G6</a> med 16,9–18,4 kWh og <a href="/elbil/volvo-ex40/">Volvo EX40</a> med 16,7–18,1 kWh. Mod EX40 Single Motor sparer en Scenic 89 kWh omkring 0,4–0,8 kWh pr. 100 km, svarende til 60–120 kWh om året.</p>

<h2>Vinter, motorvej og varmepumpe</h2>
<p>Kulde og motorvejsfart løfter typisk forbruget 15–30 % over WLTP-tallet. For Scenic 87 kWh betyder det 19,3–22,8 kWh pr. 100 km og en rækkevidde på omkring 465–545 km. Med 67 kWh kommer man ned på 345–405 km. Renault skriver selv i prislisten, at rækkevidden påvirkes af sommer, vinter, vejrforhold, kørestil og hastighed.</p>
<p>Ifølge prislisten har alle versioner varmepumpe som standard. En varmepumpe henter varme fra udeluften og bruger mindre strøm på at varme kabinen end et almindeligt varmelegeme — det betyder mest på korte ture i frost.</p>
<ul>
<li>Forvarm bilen, mens den sidder i laderen, og brug bilens eco-tilstand i byen.</li>
<li>Vælg 19-tommer-fælge, hvis rækkevidden betyder mere end udseendet.</li>
<li>Hold 110–120 km/t på langtur, og tjek dæktrykket, når det bliver koldt.</li>
</ul>
<p>Se flere modeller på siden om <a href="/elbil/">elbilers strømforbrug</a>.</p>`,
  faqs: [
    {
      question: "Hvad er Renault Scenic E-Techs forbrug pr. km?",
      answer:
        "Ifølge Renaults danske prisliste bruger Scenic 164–175 Wh pr. km efter WLTP, svarende til 16,4–17,5 kWh pr. 100 km, målt fra stikkontakten.",
    },
    {
      question: "Hvilket Scenic-batteri bruger mindst strøm?",
      answer:
        "89 kWh-batteriet med 16,4–16,7 kWh pr. 100 km. 87 kWh bruger 16,8–17,5 kWh og 67 kWh 17,0–17,5 kWh. Det store batteri kører også længst: 630–641 km efter WLTP.",
    },
    {
      question: "Hvad koster det at lade en Renault Scenic?",
      answer:
        "En fuld opladning af 87 kWh-batteriet koster {{kr 87}} ved månedens elpris på {{pris_kwh}} plus lidt ladetab. 100 km koster {{kr 16,4-17,5}} ladet hjemme.",
    },
    {
      question: "Hvor langt kører en Scenic om vinteren?",
      answer:
        "Regn med 15–30 % under WLTP i frost og på motorvej. Med 87 kWh kører Scenic typisk 465–545 km, med 67 kWh 345–405 km.",
    },
    {
      question: "Har Renault Scenic varmepumpe?",
      answer: "Ja. Ifølge Renaults danske prisliste er varmepumpe standard i alle versioner. Den sparer mest strøm på korte ture i frost.",
    },
  ],
  sources: [
    {
      name: "Renault Danmark — Scenic E-Tech 100 % electric, prisliste 11. november–31. december 2026 (forbrug, rækkevidde, batteri, ladetider)",
      url: "https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/renaultdksite/cardocuments/prisliste-scenic-e-tech-electric.pdf",
    },
    { name: "Renault Danmark — Scenic E-Tech electric, modelside", url: "https://www.renault.dk/biler/elbiler/scenic-e-tech-electric" },
    {
      name: "EEA — CO2-emissioner fra nye personbiler 2025 (danske registreringer, WLTP Wh/km)",
      url: "https://www.eea.europa.eu/en/datahub/datahubitem-view/fa8b1229-3db6-495d-b18e-9c9b3267c02b",
    },
  ],
  variants: [
    { name: "67 kWh (LFP), Techno", watts: {}, whPerKm: 170, source: 0 },
    { name: "87 kWh", watts: {}, whPerKm: 168, source: 0 },
    { name: "89 kWh", watts: {}, whPerKm: 164, source: 0 },
  ],
  publishDate: "2026-12-18",
  updated: "2026-11-23",
  measuredBy: "efter WLTP-normen (Renaults officielle tal, målt fra stikkontakten)",
  figuresNote:
    "WLTP er EU's fælles testcyklus for bilers forbrug; tallet er målt som strøm fra stikkontakten, så ladetabet er med. Tabellen viser den laveste værdi pr. batteri (de mindste fælge) fra Renaults danske prisliste, med EU's registreringsdata (EEA) som krydstjek. Kilderne står nederst på siden.",
};

export default renaultScenic;
