/**
 * Provozovatel webu – povinné identifikační údaje podle § 435 občanského zákoníku
 * a zákona č. 480/2004 Sb. Upravte před spuštěním ostrého provozu.
 */
export const siteConfig = {
  name: "Název společnosti nebo jméno podnikatele",
  legalForm: "s.r.o.", // např. s.r.o., a.s., OSVČ
  address: {
    street: "Ulice 123",
    city: "Praha",
    zip: "110 00",
    country: "Česká republika",
  },
  ico: "12345678",
  dic: "", // vyplňte, pokud jste plátce DPH
  registry: {
    court: "Městský soud v Praze",
    section: "C",
    insert: "12345",
    // OSVČ: "Zapsán v živnostenském rejstříku"
    type: "obchodni_rejstrik" as "obchodni_rejstrik" | "zivnostensky_rejstrik",
  },
  contact: {
    email: "info@example.cz",
    phone: "+420 123 456 789",
  },
  dataProtectionOfficer: {
  // Pokud nemáte pověřence, ponechte prázdné – kontaktujte správce přímo.
    email: "",
    name: "",
  },
  supervisoryAuthority: {
    name: "Úřad pro ochranu osobních údajů",
    address: "Pplk. Sochora 27, 170 00 Praha 7",
    website: "https://www.uoou.cz",
  },
  // Pro e-shopy: odkaz na ČOI pro mimosoudní řešení sporů
  consumerDisputes: {
    authority: "Česká obchodní inspekce",
    website: "https://www.coi.cz",
    adrInfo: "https://www.coi.cz/informace-pro-spotrebitele/mimosoudni-reseni-sporu/",
  },
} as const;

export function formatAddress() {
  const { street, zip, city, country } = siteConfig.address;
  return `${street}, ${zip} ${city}, ${country}`;
}

export function formatRegistryEntry() {
  const { registry } = siteConfig;
  if (registry.type === "zivnostensky_rejstrik") {
    return "Zapsán v živnostenském rejstříku";
  }
  return `Zapsán v obchodním rejstříku vedeném ${registry.court}, oddíl ${registry.section}, vložka ${registry.insert}`;
}
