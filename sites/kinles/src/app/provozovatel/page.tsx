import type { Metadata } from "next";
import { buildOperatorRows, buildOperatorSections } from "@websites/legal-cz";
import { LegalPage } from "@/components/LegalPage";
import { operator, registeredSeat } from "@/config/operator";

export const metadata: Metadata = {
  title: "Provozovatel webu | KINLES Ostrava",
  description: "Identifikační údaje podle § 435 občanského zákoníku.",
};

export default function Page() {
  const rows = buildOperatorRows(operator);

  return (
    <LegalPage
      title="Provozovatel webu"
      intro="Povinné identifikační údaje podle § 435 zákona č. 89/2012 Sb., občanský zákoník."
      sections={buildOperatorSections(operator)}
    >
      <dl className="legal-table">
        {rows.map((row) => (
          <div className="row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
        <div className="row">
          <dt>Zapsané sídlo</dt>
          <dd>{registeredSeat}</dd>
        </div>
      </dl>
    </LegalPage>
  );
}
