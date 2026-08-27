export const kinlesConfig = {
  name: "KINLES Ostrava s.r.o.",
  brand: "KINLES",
  tagline: "Výroba a montáž protipožárních dveří a stěn",
  ico: "01520130",
  dic: "CZ01520130",
  registry: "C 55927, Krajský soud v Ostravě",
  phone: "+420 596 910 910",
  phoneHref: "tel:+420596910910",
  email: "info@kinles.cz",
  emailSales: "obchod@kinles.cz",
  seat: "Kastelána Heřmana 832/8, 713 00 Ostrava",
  office: "Hrnčířská 261/22, 748 01 Hlučín",
  hours: "Po–Pá 08:30–12:00, 12:30–17:00",
  founded: 2013,
  products: [
    {
      title: "Protipožární dveře",
      description:
        "Plné i prosklené provedení ze dřeva i oceli. Všechny uzávěry s platnými atesty.",
      features: ["Dřevo i ocel", "Plné i prosklené", "Certifikované atesty"],
    },
    {
      title: "Protipožární stěny",
      description:
        "Řešení pro průmyslové, komerční i rezidenční objekty podle projektu.",
      features: ["Na míru projektu", "Montáž na klíč", "Technická podpora"],
    },
    {
      title: "Nehořlavé provedení",
      description:
        "Stejná konstrukční řada dostupná i v nepožární úpravě pro jednotný vzhled.",
      features: ["Jednotný design", "Flexibilní konfigurace", "Výroba v regionu"],
    },
  ],
  stats: [
    { value: "2013", label: "Na trhu od roku" },
    { value: "100%", label: "Dodávky s atesty" },
    { value: "2", label: "Pobočky v regionu" },
  ],
} as const;
