export const kinlesConfig = {
  name: "KINLES Ostrava s.r.o.",
  brand: "KINLES",
  tagline: "Zámečnictví a bezpečnostní technika",
  lead:
    "Protipožární a bezpečnostní uzávěry, zámkové systémy a technická ochrana majetku pro Ostravu a Moravskoslezský kraj.",
  ico: "01520130",
  dic: "CZ01520130",
  registry: "C 55927, Krajský soud v Ostravě",
  capital: "200 000 Kč",
  dataBox: "26vtkyc",
  phone: "+420 596 910 910",
  phoneHref: "tel:+420596910910",
  email: "info@kinles.cz",
  emailSales: "obchod@kinles.cz",
  seat: "Kastelána Heřmana 832/8, Heřmanice, 713 00 Ostrava",
  office: "Hrnčířská 261/22, 748 01 Hlučín",
  hours: "Po–Pá 08:30–12:00, 12:30–17:00",
  founded: 2013,

  /** Hlavní pilíře — protipožární výroba + bezpečnostní technika */
  services: [
    {
      title: "Protipožární dveře a stěny",
      description:
        "Výroba a montáž plných i prosklených požárních uzávěrů ze dřeva i oceli. Každá dodávka s platnými atesty.",
      features: ["Dřevo i ocel", "Plné i prosklené", "Platné atesty"],
    },
    {
      title: "Bezpečnostní dveře a zárubně",
      description:
        "Dodávka a montáž bezpečnostních dveří, zárubní a kování pro byty, komerční i průmyslové objekty.",
      features: ["Bytové i komerční", "Kování a zárubně", "Montáž na klíč"],
    },
    {
      title: "Zámky a zámkové systémy",
      description:
        "Cylindrické vložky, bezpečnostní kování, systém generálního klíče a výměny zámků.",
      features: ["Generální klíč", "Cylindrické vložky", "Servis a výměny"],
    },
    {
      title: "Technická ochrana majetku",
      description:
        "Poskytování technických služeb k ochraně majetku a osob — návrh a montáž zabezpečovacích prvků.",
      features: ["Návrh zabezpečení", "Montáž prvků", "Poradenství"],
    },
    {
      title: "Kovovýroba a svařování",
      description:
        "Atypické zámečnické konstrukce, povrchové úpravy a svařování kovů podle zadání projektu.",
      features: ["Atypická výroba", "Povrchové úpravy", "Svařování"],
    },
    {
      title: "Servis a údržba",
      description:
        "Opravy, revize a údržba dveří, uzávěrů a zámkových systémů po celou dobu životnosti.",
      features: ["Revize uzávěrů", "Opravy", "Dlouhodobá péče"],
    },
  ],

  /** Segmenty zákazníků */
  sectors: [
    "Stavební firmy a developeři",
    "Architekti a projektanti požární ochrany",
    "Správci průmyslových areálů",
    "Bytové domy a SVJ",
    "Rekonstrukce a novostavby",
  ],

  stats: [
    { value: "2013", label: "Na trhu od roku" },
    { value: "100%", label: "Dodávky s atesty" },
    { value: "2", label: "Pobočky v regionu" },
  ],
} as const;
