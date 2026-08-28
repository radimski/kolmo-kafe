export const kolmoConfig = {
  name: "KOLMO kafe",
  tagline: "Bistro · kavárna u vody",
  phone: "+420 725 311 139",
  phoneHref: "tel:+420725311139",
  email: "info@kolmokafe.cz",
  address: "Nad Přehradou 2483, 738 01 Frýdek-Místek",
  location: "Resort Olešná · u přehrady",
  facebook: "https://www.facebook.com/kolmokafe",
  hoursTypical: "Typicky denně 10:00–21:00 (sezónně se liší)",
  hoursNote:
    "Otevírací doba se mění podle sezóny. Aktuální časy najdete na Facebooku.",
  openingSchedule: {
    timezone: "Europe/Prague",
    week: [
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
      { open: "10:00", close: "21:00" },
    ],
  },
  menu: {
    coffee: [
      { name: "Espresso", price: "55 Kč" },
      { name: "Flat white", price: "75 Kč" },
      { name: "Cappuccino", price: "70 Kč" },
      { name: "V60 filtr", price: "85 Kč" },
      { name: "Ledová káva", price: "80 Kč" },
    ],
    sweet: [
      { name: "Denní výběr zákusků", price: "od 65 Kč" },
      { name: "Domácí lívance", price: "95 Kč" },
      { name: "Cheesecake sezónní", price: "85 Kč" },
    ],
    savory: [
      { name: "Sendvič s kuřecím", price: "120 Kč" },
      { name: "Quesadilla", price: "135 Kč" },
      { name: "Obložený croissant", price: "110 Kč" },
      { name: "Bagel s avokádem", price: "125 Kč" },
    ],
  },
  events: [
    "Grilovací večery u vody",
    "Koktejlové pátky a soboty",
    "Tematické sezónní akce",
  ],
} as const;
