export const SITE_CONFIG = {
  name: "Strømforbrug.dk",
  url: "https://stroemforbrug.dk",
  locale: "da_DK",
  description:
    "Alt om strømforbrug i Danmark. Se hvor meget strøm dine apparater bruger, beregn din årlige udgift og få tips til at spare på strømmen.",
  lastUpdated: "2026-08-18",
  editorName: "Mathias Clausen",
  editorRole: "Redaktør & Energirådgiver",
  editorCredential:
    "Specialist i dansk husholdningens energiforbrug. Analyserer strømforbrug og hjælper familier med at spare på strømmen.",
  editorImage: "/images/mathias-clausen.jpg",
  company: {
    legalName: "Mondo Media ApS",
    cvr: "43489984",
    address: "Hestehave 15, 6400 Sønderborg, Danmark",
    phone: "+45 22 41 05 57",
    email: "hej@stroemforbrug.dk",
    linkedin: "https://www.linkedin.com/company/mondomedia/",
    website: "https://mondomedia.dk/",
  },
};

// Single source of truth for electricity price used in all calculations
export const ELECTRICITY_PRICE_KR_PER_KWH = 2.5;
export const CHEAP_PROVIDER_PRICE = 1.54; // Altid Energi
export const CHEAP_PROVIDER_NAME = "Altid Energi";
