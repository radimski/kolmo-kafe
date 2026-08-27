import Link from "next/link";
import { otevruConfig } from "@/sites/otevru/config";

export default function OtevruPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.15),_transparent_50%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Sviadnov · Frýdek-Místek
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Zabouchli jste si dveře?{" "}
              <span className="text-amber-400">Otevřeme.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {otevruConfig.tagline}. Nouzové otevírání, bezpečnostní dveře,
              trezory a komplexní zabezpečení majetku.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={otevruConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Zavolat {otevruConfig.phone}
              </a>
              <Link
                href="/otevru/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {otevruConfig.services.slice(0, 4).map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <span className="text-2xl">{service.icon}</span>
                <h2 className="mt-3 font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sluzby" className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Naše služby</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Od nouzového otevření po montáž bezpečnostních systémů na míru.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otevruConfig.services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-amber-500/40"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas" className="border-t border-slate-800">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Specialisté na vaši bezpečnost</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Naší snahou je provádět nouzové otevírání bez zbytečného poškození
              zámků. Poradíme s technickou stránkou zabezpečení a připravíme
              nabídku na míru.
            </p>
            <p className="mt-4 text-sm text-slate-400">{otevruConfig.hoursNote}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Partneři & certifikace
            </p>
            <ul className="mt-6 space-y-3">
              {otevruConfig.partners.map((partner) => (
                <li
                  key={partner}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  {partner}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-400">
              Provoz: {otevruConfig.hours}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
