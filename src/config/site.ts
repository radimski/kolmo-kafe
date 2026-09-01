export const kolmoConfig = {
  name: "KOLMO kafe",
  tagline: "Bistro na cyklostezce u přehrady Olešná",
  shortDescription:
    "Bistro a kavárna na cyklostezce u přehrady Olešná — káva, jídlo a večery u vody.",
  url: "https://www.kolmokafe.cz/",
  nameDictionary: {
    headword: "Kolmo",
    pronunciation: "kol·mo",
    footnote:
      "Kolmo znamená na kole — a rádi si hrajeme i s tím, že jsme kolmo k vodě.",
    senses: [
      {
        term: "na kole",
        definition: "Zastávka na cyklostezce — cyklotrasa vede přímo kolem.",
      },
      {
        term: "kolmo k vodě",
        definition: "U přehrady Olešná, kousek od pláže a stezek.",
      },
      {
        term: "kolmo (geom.)*",
        definition:
          "Úhel 90° — spíš slovní hříčka než přesná geografie, ale sedí to.",
      },
    ],
  },
  phone: "+420 725 311 139",
  phoneHref: "tel:+420725311139",
  email: "info@kolmokafe.cz",
  address: "Nad Přehradou 2483, 738 01 Frýdek-Místek",
  location: "Resort Olešná · u přehrady",
  map: {
    lat: 49.6644,
    lng: 18.3122,
    zoom: 15,
    imageAlt: "Mapa Resortu Olešná — KOLMO kafe u přehrady",
  },
  mapCaption: {
    title: "kolmo k vodě*",
    note: "U vody, na cyklostezce — geometricky kolmo spíš v naší hlavě.",
  },
  facebook: "https://www.facebook.com/kolmokafe",
  instagram: "https://www.instagram.com/kolmokafe",
  hoursTypical: "Po–Pá 14:00–20:00 · So–Ne 10:00–20:00",
  hoursShort: "Po–Pá 14–20 · So–Ne 10–20",
  hoursNote:
    "Po prázdninách: pondělí–pátek 14:00–20:00, sobota–neděle 10:00–20:00.",
  openingSchedule: {
    timezone: "Europe/Prague",
    week: [
      { open: "10:00", close: "20:00" },
      { open: "14:00", close: "20:00" },
      { open: "14:00", close: "20:00" },
      { open: "14:00", close: "20:00" },
      { open: "14:00", close: "20:00" },
      { open: "14:00", close: "20:00" },
      { open: "10:00", close: "20:00" },
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
    "Sezónní tematické akce",
  ],
} as const;
