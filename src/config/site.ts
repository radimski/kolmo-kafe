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
      "Kolmo znamená na kole — ale nechte nám i představu, že jsme kolmo k vodě.",
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
          "Úhel 90° — spíš slovní hříčka než přesná geografie. Ale zní to hezky.",
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
    note: "Jsme u vody, na cyklostezce — geometricky kolmo spíš v hlavě. Nechte nám tu hru se slovy.",
  },
  facebook: "https://www.facebook.com/kolmokafe",
  hoursTypical: "Po–Ne 10:00–21:00 (sezónně)",
  hoursShort: "10–21 · sezónně",
  hoursNote:
    "Otevírací doba se mění podle sezóny — aktuální časy na Facebooku.",
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
