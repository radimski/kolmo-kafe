import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Informace o používání souborů cookies podle GDPR a zákona č. 127/2005 Sb.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Zásady používání cookies"
      description="Jak na tomto webu používáme soubory cookies a jak můžete spravovat svůj souhlas."
    >
      <LegalSection title="1. Co jsou cookies">
        <p>
          Cookies jsou malé textové soubory ukládané do vašeho zařízení při
          návštěvě webu. Některé cookies jsou nezbytné pro fungování webu,
          jiné vyžadují váš předchozí souhlas podle nařízení GDPR a zákona č.
          127/2005 Sb., o elektronických komunikacích.
        </p>
      </LegalSection>

      <LegalSection title="2. Kategorie cookies">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Nezbytné</strong> – zajišťují základní funkce webu, např.
            uložení vaší volby ohledně cookies. Tyto cookies nelze vypnout.
          </li>
          <li>
            <strong>Analytické</strong> – pomáhají měřit návštěvnost a chování
            na webu. Spouští se až po vašem souhlasu.
          </li>
          <li>
            <strong>Marketingové</strong> – slouží k personalizaci reklamy a
            měření marketingových kampaní. Spouští se až po vašem souhlasu.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Jak udělit nebo odvolat souhlas">
        <p>
          Při první návštěvě webu se zobrazí lišta cookies, kde můžete
          odmítnout vše, přijmout vše nebo zvolit jednotlivé kategorie. Svou
          volbu můžete kdykoli změnit smazáním cookies v prohlížeči a novou
          návštěvou webu, případně prostřednictvím nastavení cookies v liště,
          pokud je znovu zobrazíte.
        </p>
        <p>
          Analytické a marketingové nástroje (např. Google Analytics, Google Ads,
          Meta Pixel) nesmí být aktivovány dříve, než udělíte souhlas. Pokud je
          používáte, nastavte také Consent Mode v2 ve správci značek.
        </p>
      </LegalSection>

      <LegalSection title="4. Doba platnosti">
        <p>
          Nezbytné cookies obvykle uchováváme po dobu relace nebo po dobu
          nezbytnou pro funkčnost webu. Souhlas s ostatními kategoriemi
          uchováváme po dobu platnosti souhlasu, nejdéle však po dobu uvedenou
          u jednotlivých nástrojů třetích stran.
        </p>
      </LegalSection>

      <LegalSection title="5. Další informace">
        <p>
          Více o zpracování osobních údajů najdete v dokumentu{" "}
          <a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
