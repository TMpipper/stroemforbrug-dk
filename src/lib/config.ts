export const SITE_CONFIG = {
  name: "Strømforbrug.dk",
  url: "https://stroemforbrug.dk",
  locale: "da_DK",
  description:
    "Alt om strømforbrug i Danmark. Se hvor meget strøm dine apparater bruger, hvad det koster ved månedens elpris, og hvornår det er billigst at bruge dem.",
  editorName: "Mathias Clausen",
  editorRole: "Redaktør & Energirådgiver",
  editorCredential:
    "Specialist i danske husholdningers energiforbrug. Analyserer strømforbrug og hjælper familier med at bruge strømmen, når den er billigst. Skriver teksten; tallene beregnes af Elpriser.dk's feed.",
  editorImage: "/images/mathias-clausen.jpg",
  editorSlug: "/om-os",
  /**
   * Strømforbrug.dk er et site af Elpriser.dk (ejerens beslutning 11. okt. 2026): samme selskab,
   * samme data, samme metode. Mærket og linket vises i header og footer; schema.org får
   * parentOrganization. Det er den ENESTE søsterside, der må linkes til.
   */
  parent: {
    name: "Elpriser.dk",
    url: "https://elpriser.dk/",
    organizationId: "https://elpriser.dk/#organization",
  },
  company: {
    // Elpriser.dk ApS er det registrerede binavn, brugerne ser på alle sites (besluttet 24. september 2026).
    legalName: "Elpriser.dk ApS",
    cvr: "43489984",
    cvrUrl: "https://datacvr.virk.dk/enhed/virksomhed/43489984",
    address: "Hestehave 15, 6400 Sønderborg, Danmark",
    phone: "+45 22 41 05 57",
    email: "mail@elpriser.dk",
    linkedin: "https://www.linkedin.com/company/mondomedia/",
    website: "https://elpriser.dk/",
  },
  /** Sitets egne profiler — ingen endnu; Elpriser.dk's står på Elpriser.dk. */
  social: [] as { name: string; url: string }[],
};

// Det fælles OG-billede. Sat af buildMetadata() på hver side (Next fletter ikke fra layoutet).
export const OG_IMAGES = [
  { url: "/opengraph-image", width: 1200, height: 630, alt: "Strømforbrug.dk — hvad dine apparater bruger og koster" },
];
