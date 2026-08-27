import type { Operator } from "@websites/legal-cz";

/**
 * TODO: doplnit skutečné údaje provozovatele (jméno/firma, IČO, zápis
 * v rejstříku). Zatím nebyly od klienta potvrzeny — před spuštěním
 * ostrého provozu je nutné je vyplnit, viz § 435 OZ.
 */
export const operator: Operator = {
  name: "Doplnit — provozovatel Kolmo kafe",
  address: {
    street: "Nad Přehradou 2483",
    zip: "738 01",
    city: "Frýdek-Místek",
    country: "Česká republika",
  },
  ico: "00000000",
  registry: {
    type: "zivnostensky",
  },
  contact: {
    email: "info@kolmokafe.cz",
    phone: "+420 725 311 139",
  },
};

export const operatorIncomplete = true;

export const SITE_ID = "kolmokafe";
