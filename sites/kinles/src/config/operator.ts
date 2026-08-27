import type { Operator } from "@websites/legal-cz";

/** Povinné údaje podle § 435 OZ. */
export const operator: Operator = {
  name: "KINLES Ostrava",
  legalForm: "s.r.o.",
  address: {
    street: "Hrnčířská 261/22",
    zip: "748 01",
    city: "Hlučín",
    country: "Česká republika",
  },
  ico: "01520130",
  dic: "CZ01520130",
  registry: {
    type: "obchodni",
    court: "Krajský soud v Ostravě",
    section: "C",
    insert: "55927",
  },
  contact: {
    email: "obchod@kinles.cz",
    phone: "+420 596 910 910",
  },
};

/** Zapsané sídlo se liší od provozovny v Hlučíně. */
export const registeredSeat =
  "Kastelána Heřmana 832/8, Heřmanice, 713 00 Ostrava";

export const SITE_ID = "kinles";
