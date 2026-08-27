import Link from "next/link";
import { kinlesConfig } from "@/sites/kinles/config";

export default function KinlesPage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(234,88,12,0.08)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Výroba · montáž · atesty
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Protipožární dveře a stěny pro náročné projekty
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            {kinlesConfig.tagline}. Dřevo i ocel, plné i prosklené provedení.
            Dodáváme certifikované požární uzávěry pro průmysl, komerce i bydlení.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${kinlesConfig.emailSales}`}
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Obchod@kinles.cz
            </a>
            <Link
              href="/kinles/kontakt"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 font-semibold transition hover:border-zinc-400"
            >
              Kontakt a pobočky
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-zinc-200 px-6 py-12">
          {kinlesConfig.stats.map((stat) => (
            <div key={stat.label} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="produkty" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Produkty</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {kinlesConfig.products.map((product) => (
            <article
              key={product.title}
              className="flex flex-col rounded-2xl border border-zinc-200 p-8 transition hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
            >
              <div className="h-1 w-12 rounded-full bg-orange-600" />
              <h3 className="mt-6 text-xl font-bold">{product.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                {product.description}
              </p>
              <ul className="mt-6 space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="o-firme"
        className="border-t border-zinc-200 bg-zinc-900 text-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">KINLES Ostrava s.r.o.</h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Od roku {kinlesConfig.founded} vyrábíme a montujeme protipožární
              uzávěry v regionu Ostrava a Hlučín. Každá dodávka je doložena
              platnými atesty a technickou dokumentací.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-8">
            <h3 className="font-semibold text-orange-400">Pro koho pracujeme</h3>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>• Stavební firmy a developery</li>
              <li>• Architekty a projektanty PO</li>
              <li>• Správce průmyslových areálů</li>
              <li>• Rekonstrukce a novostavby</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
