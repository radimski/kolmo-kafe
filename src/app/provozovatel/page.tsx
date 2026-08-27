import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { OperatorDetails } from "@/components/legal/OperatorDetails";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Provozovatel webu",
  description:
    "Identifikační údaje provozovatele webu podle § 435 občanského zákoníku.",
};

export default function OperatorPage() {
  return (
    <LegalPage
      title="Provozovatel webu"
      description="Identifikační údaje provozovatele podle české legislativy (OZ, živnostenský zákon, zákon o službách informační společnosti)."
    >
      <LegalSection title="Identifikační údaje">
        <OperatorDetails />
      </LegalSection>
      <LegalSection title="Právní rámec">
        <p>
          V České republice je podnikatel povinen uvádět na webu své
          identifikační údaje podle § 435 zákona č. 89/2012 Sb., občanský
          zákoník, a u živnostníků také podle § 13a zákona č. 455/1991 Sb.,
          živnostenský zákon. Tyto informace musí být pro návštěvníky snadno
          dohledatelné, obvykle v patičce webu nebo na samostatné stránce
          provozovatele.
        </p>
        <p>
          Pokud prostřednictvím webu nabízíte zboží nebo služby spotřebitelům,
          doplňte také obchodní podmínky, informace o odstoupení od smlouvy,
          reklamačním řádu a mimosoudním řešení sporů u{" "}
          <a href={siteConfig.consumerDisputes.website}>
            {siteConfig.consumerDisputes.authority}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
