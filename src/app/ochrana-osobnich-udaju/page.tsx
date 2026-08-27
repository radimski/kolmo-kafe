import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig, formatAddress } from "@/config/site";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Zásady zpracování osobních údajů podle nařízení GDPR a zákona č. 110/2019 Sb.",
};

export default function PrivacyPolicyPage() {
  const controllerContact = siteConfig.dataProtectionOfficer.email
    ? siteConfig.dataProtectionOfficer.email
    : siteConfig.contact.email;

  return (
    <LegalPage
      title="Zásady ochrany osobních údajů"
      description="Informace o zpracování osobních údajů podle nařízení (EU) 2016/679 (GDPR) a zákona č. 110/2019 Sb."
    >
      <LegalSection title="1. Správce osobních údajů">
        <p>
          Správcem osobních údajů je {siteConfig.name}
          {siteConfig.legalForm ? ` ${siteConfig.legalForm}` : ""}, se sídlem{" "}
          {formatAddress()}, IČO {siteConfig.ico}
          {siteConfig.dic ? `, DIČ ${siteConfig.dic}` : ""}.
        </p>
        <p>
          Kontakt pro záležitosti ochrany osobních údajů:{" "}
          <a href={`mailto:${controllerContact}`}>{controllerContact}</a>
          {siteConfig.dataProtectionOfficer.name
            ? ` (${siteConfig.dataProtectionOfficer.name})`
            : ""}
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Jaké údaje zpracováváme">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            identifikační a kontaktní údaje (jméno, e-mail, telefon) při
            vyplnění formuláře nebo objednávce,
          </li>
          <li>
            technické údaje o používání webu (IP adresa, typ prohlížeče, cookies)
            při návštěvě webu,
          </li>
          <li>
            údaje o souhlasu s cookies a marketingovými sděleními, pokud je
            udělíte.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Účely a právní základy zpracování">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Provoz webu</strong> – nezbytné cookies a zabezpečení
            (oprávněný zájem správce, čl. 6 odst. 1 písm. f) GDPR).
          </li>
          <li>
            <strong>Odpověď na dotaz nebo vyřízení objednávky</strong> – plnění
            smlouvy nebo kroky před jejím uzavřením (čl. 6 odst. 1 písm. b)
            GDPR).
          </li>
          <li>
            <strong>Analytika a marketing</strong> – pouze na základě vašeho
            souhlasu (čl. 6 odst. 1 písm. a) GDPR), který můžete kdykoli
            odvolat.
          </li>
          <li>
            <strong>Účetnictví a právní povinnosti</strong> – plnění právní
            povinnosti (čl. 6 odst. 1 písm. c) GDPR).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Doba uchovávání">
        <p>
          Osobní údaje uchováváme pouze po dobu nezbytnou k naplnění účelu
          zpracování. Údaje z formulářů obvykle po dobu vyřízení požadavku a
          následně po dobu stanovenou právními předpisy. Souhlas s cookies a
          marketingem uchováváme po dobu platnosti souhlasu a následně po dobu
          prokazování jeho udělení.
        </p>
      </LegalSection>

      <LegalSection title="5. Příjemci a předávání údajů">
        <p>
          Údaje mohou být zpřístupněny zpracovatelům, kteří pro nás zajišťují
          hosting, e-mailovou komunikaci, analytiku nebo marketingové nástroje,
          a to na základě smlouvy o zpracování osobních údajů. Někteří
          poskytovatelé mohou mít sídlo mimo EU; v takovém případě zajišťujeme
          odpovídající záruky podle kapitoly V GDPR.
        </p>
      </LegalSection>

      <LegalSection title="6. Vaše práva">
        <p>Máte právo:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>na přístup ke svým osobním údajům,</li>
          <li>na opravu nebo výmaz,</li>
          <li>na omezení zpracování,</li>
          <li>vznést námitku proti zpracování,</li>
          <li>na přenositelnost údajů,</li>
          <li>
            kdykoli odvolat souhlas, aniž by tím byla dotčena zákonnost
            zpracování před odvoláním,
          </li>
          <li>
            podat stížnost u dozorového úřadu: {siteConfig.supervisoryAuthority.name},{" "}
            {siteConfig.supervisoryAuthority.address},{" "}
            <a href={siteConfig.supervisoryAuthority.website}>
              {siteConfig.supervisoryAuthority.website}
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Cookies">
        <p>
          Podrobnosti o používání cookies a možnosti nastavení souhlasu najdete
          na stránce{" "}
          <a href="/cookies">Zásady používání cookies</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
