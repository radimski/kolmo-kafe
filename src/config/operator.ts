import type { Operator } from "@websites/legal-cz";

/** KOLMO motion s.r.o. — veřejně dostupné údaje (IČO 08011150). */
export const operator: Operator = {
  name: "KOLMO motion",
  legalForm: "s.r.o.",
  address: {
    street: "Nad Přehradou 2483",
    zip: "738 01",
    city: "Frýdek-Místek",
    country: "Česká republika",
  },
  ico: "08011150",
  dic: "CZ08011150",
  registry: {
    type: "obchodni",
    court: "Krajský soud v Ostravě",
    section: "C",
    insert: "78034",
  },
  contact: {
    email: "info@kolmokafe.cz",
    phone: "+420 725 311 139",
  },
};

export const operatorIncomplete = false;

export const SITE_ID = "kolmokafe";
