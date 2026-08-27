import type { Metadata } from "next";
import Link from "next/link";
import { kinlesConfig } from "@/sites/kinles/config";

export const metadata: Metadata = {
  title: `Služby | ${kinlesConfig.brand} Ostrava`,
  description: kinlesConfig.lead,
};

export default function KinlesSluzbyPage() {
  return (
    <div className="bg-white text-zinc-900">
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Služby
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {kinlesConfig.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            {kinlesConfig.lead}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-4">
          {kinlesConfig.services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-6 rounded-2xl border border-zinc-200 p-8 transition hover:border-orange-300 md:grid-cols-[auto_1fr_auto] md:items-start"
            >
              <span className="text-sm font-bold text-orange-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-zinc-900 p-10 text-white">
          <h2 className="text-2xl font-bold">Máte projekt k poptání?</h2>
          <p className="mt-3 max-w-xl text-zinc-300">
            Pošlete nám výkresy nebo specifikaci a připravíme technické řešení a
            cenovou nabídku.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${kinlesConfig.emailSales}`}
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 font-semibold transition hover:bg-orange-500"
            >
              {kinlesConfig.emailSales}
            </a>
            <Link
              href="/kinles/kontakt"
              className="inline-flex items-center justify-center rounded-md border border-zinc-600 px-6 py-3 font-semibold transition hover:border-zinc-400"
            >
              Kontakt a pobočky
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
