import type { Metadata } from "next";
import { buildOperatorRows, buildOperatorSections } from "@websites/legal-cz";
import { LegalPage } from "@/components/LegalPage";
import { operator, operatorIncomplete } from "@/config/operator";
import { withCanonical } from "@/lib/page-metadata";

export const metadata: Metadata = withCanonical("/provozovatel", {
  title: "Provozovatel webu | Kolmo kafe",
  description: "Identifikační údaje podle § 435 občanského zákoníku.",
});

export default function Page() {
  const rows = buildOperatorRows(operator);

  return (
    <LegalPage
      title="Provozovatel webu"
      intro="Povinné identifikační údaje podle § 435 zákona č. 89/2012 Sb., občanský zákoník."
      sections={buildOperatorSections(operator)}
    >
      {operatorIncomplete ? (
        <p className="mt-8 rounded-2xl border border-[#c8a27a]/40 bg-[#c8a27a]/8 p-5 text-sm leading-6 text-[#c8a27a]">
          Údaje provozovatele zatím nejsou potvrzené. Před spuštěním ostrého
          provozu je nutné doplnit jméno/firmu, IČO a zápis v rejstříku.
        </p>
      ) : null}

      <dl className="kolmo-surface mt-8 rounded-2xl p-6">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-[#f2ece3]/8 py-3 last:border-none sm:grid-cols-3"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9a948c]">
              {row.label}
            </dt>
            <dd className="text-[#f2ece3]/90 sm:col-span-2">{row.value}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  );
}
