import type { Metadata } from "next";
import Link from "next/link";
import { kolmoConfig } from "@/config/site";
import { withCanonical } from "@/lib/page-metadata";

export const metadata: Metadata = withCanonical("/akce", {
  title: `Akce | ${kolmoConfig.name}`,
  description:
    "Grilování, koktejlové večery a sezónní akce u přehrady Olešná.",
});

export default function AkcePage() {
  return (
    <div className="kolmo-grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          Akce & novinky
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Co se děje u vody
        </h1>
        <p className="mt-4 max-w-2xl text-[#9a948c]">
          Grilování, koktejlové večery a sezónní program u přehrady Olešná.
          Aktuální termíny zveřejňujeme na Instagramu a Facebooku — web je
          neměníme ručně.
        </p>

        <div className="kolmo-surface mt-12 rounded-2xl p-8 sm:p-10">
          <h2 className="text-xl font-semibold">Sledujte aktuální program</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#9a948c]">
            Nové večery a akce dáváme nejdřív na sítě. Klikněte níže a uvidíte,
            co běží právě teď.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={kolmoConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="kolmo-pill kolmo-btn-cream inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Instagram @kolmokafe
            </a>
            <a
              href={`${kolmoConfig.facebook}/events`}
              target="_blank"
              rel="noopener noreferrer"
              className="kolmo-pill kolmo-btn-ghost inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Facebook — akce
            </a>
            <Link
              href="/kontakt"
              className="kolmo-pill kolmo-btn-ghost inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Napsat nám
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
