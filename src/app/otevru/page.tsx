import Link from "next/link";
import { otevruConfig } from "@/sites/otevru/config";

export default function OtevruPage() {
  return (
    <div className="bg-[#f4f4f4] text-[#484d55]">
      <section className="relative overflow-hidden bg-white">
        <div className="otevru-lime-bar absolute inset-x-0 top-0 h-32 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#919499]">
              Sviadnov · Frýdek-Místek
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#2f333b] sm:text-5xl lg:text-6xl">
              Zabouchli jste si dveře?{" "}
              <span className="text-[#ff8800]">Otevřeme.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#717479]">
              {otevruConfig.tagline}. Nouzové otevírání, bezpečnostní dveře,
              trezory a komplexní zabezpečení majetku.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={otevruConfig.phoneHref}
                className="otevru-btn-primary inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold"
              >
                Zavolat {otevruConfig.phone}
              </a>
              <Link
                href="/otevru/kontakt"
                className="otevru-btn-secondary inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {otevruConfig.services.slice(0, 4).map((service) => (
              <div
                key={service.title}
                className="otevru-card rounded-xl border border-[#ddd] bg-[#f8f8f8] p-5 transition"
              >
                <span className="text-2xl">{service.icon}</span>
                <h2 className="mt-3 font-semibold text-[#484d55]">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#919499]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sluzby" className="border-t border-[#ddd]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end gap-4">
            <div className="h-10 w-1.5 rounded-full bg-[#acf53d]" />
            <div>
              <h2 className="text-3xl font-bold text-[#2f333b]">Naše služby</h2>
              <p className="mt-2 max-w-2xl text-[#919499]">
                Od nouzového otevření po montáž bezpečnostních systémů na míru.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otevruConfig.services.map((service) => (
              <article
                key={service.title}
                className="otevru-card rounded-xl border border-[#ddd] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-[#484d55]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#919499]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas" className="bg-[#2f333b] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Specialisté na vaši bezpečnost</h2>
            <p className="mt-4 leading-7 text-[#b1b4b9]">
              Naší snahou je provádět nouzové otevírání bez zbytečného poškození
              zámků. Poradíme s technickou stránkou zabezpečení a připravíme
              nabídku na míru.
            </p>
            <p className="mt-4 text-sm text-[#919499]">{otevruConfig.hoursNote}</p>
          </div>
          <div className="rounded-xl border border-[#484d55] bg-[#484d55] p-8">
            <p className="text-sm uppercase tracking-widest text-[#acf53d]">
              Partneři & certifikace
            </p>
            <ul className="mt-6 space-y-3">
              {otevruConfig.partners.map((partner) => (
                <li
                  key={partner}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-[#ff8800]" />
                  {partner}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[#b1b4b9]">
              Provoz: {otevruConfig.hours}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
