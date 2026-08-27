export const otevruColors = {
  lime: "#acf53d",
  orange: "#ff8800",
  dark: "#2f333b",
  charcoal: "#484d55",
  muted: "#919499",
  light: "#f4f4f4",
  white: "#ffffff",
} as const;

export const otevruConfig = {
  name: "Patrik Panenka",
  brand: "OTEVŘU",
  tagline: "Zámečnická pohotovost & speciální zámečnictví",
  colors: otevruColors,
  ico: "73290939",
  dic: "CZ7401244928",
  phone: "+420 606 262 118",
  phoneHref: "tel:+420606262118",
  email: "patrik@otevru.cz",
  address: "O. Kišové 88, 739 25 Sviadnov",
  hours: "Po–Ne 07:00–18:00",
  hoursNote: "Před návštěvou zavolejte — často jsme na montážích.",
  services: [
    {
      title: "Nouzové otevírání",
      description:
        "Byty, domy i automobily. Otevírání bez zbytečného poškození zámků.",
      icon: "🔓",
    },
    {
      title: "Klíčová služba",
      description:
        "Výroba klíčů, autoklíče, bezklíčové zámky Yale Linus a další.",
      icon: "🔑",
    },
    {
      title: "Bezpečnostní dveře",
      description:
        "Výběr, montáž a servis bezpečnostních i protipožárních dveří.",
      icon: "🚪",
    },
    {
      title: "Trezory & sejfy",
      description:
        "Montáž do zdi, servis, repas, stěhování a trezory na zbraně.",
      icon: "🔐",
    },
    {
      title: "Opravy po vloupání",
      description:
        "Výměna zámků, vložek, kování a zárubní po poškození objektu.",
      icon: "🛠️",
    },
    {
      title: "Komplexní zabezpečení",
      description:
        "Mříže, závory, samozavírače, systém generálního klíče na míru.",
      icon: "🏠",
    },
  ],
  partners: ["Assa Abloy", "Mul-T-Lock", "Prověřená společnost"],
} as const;
