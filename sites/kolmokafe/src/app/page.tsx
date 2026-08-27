import Image from "next/image";
import Link from "next/link";
import { kolmoConfig } from "@/config/site";

const highlights = [
  {
    label: "01",
    title: "Výběrová káva",
    text: "Espresso, filtr i ledová káva. Krátké menu, poctivá příprava, žádné zkratky.",
  },
  {
    label: "02",
    title: "Domácí moučníky",
    text: "Lívance, sezónní zákusky a cheesecake — to nejlepší sladké na Olešné.",
  },
  {
    label: "03",
    title: "Lehké bistro",
    text: "Sendviče, quesadilly a bagely. Rychlé jídlo po kole nebo plavání.",
  },
] as const;

export default function KolmoPage() {
  return (
    <div>
      <section className="kolmo-hero kolmo-grid-lines relative overflow-hidden">
        <div className="kolmo-corner kolmo-corner-tl" aria-hidden />
        <span
          aria-hidden
          className="kolmo-vertical-accent absolute right-8 top-20 hidden text-7xl lg:block"
        >
          KOLMO
        </span>

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
          <div className="kolmo-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
              {kolmoConfig.location}
            </p>
            <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Káva
              <br />
              <span className="text-[#c8a27a]">kolmo</span> k vodě.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#9a948c]">
              Bistro a kavárna u přehrady Olešná. Fresh kuchyně, výběrová káva a
              večery u grilu — v prostoru, kde se dá na chvíli zpomalit.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="kolmo-pill kolmo-btn-cream inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold"
              >
                Prohlédnout menu
              </Link>
              <a
                href={kolmoConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="kolmo-pill kolmo-btn-ghost inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold"
              >
                Aktuální otevírací doba
              </a>
            </div>
          </div>

          <div className="kolmo-rise-delay">
            <div className="kolmo-surface relative overflow-hidden rounded-3xl p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,162,122,0.12),transparent_55%)]" />
              <div className="relative flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt={kolmoConfig.name}
                  width={320}
                  height={120}
                  className="h-auto w-56 sm:w-72"
                  priority
                />
                <p className="mt-8 max-w-xs text-center text-sm leading-7 text-[#9a948c]">
                  Název není náhoda — <em className="text-[#c8a27a]">kolmo</em>{" "}
                  drží logo i místo u vody ve stejné rovině.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#f2ece3]/8 bg-[#1a1d21]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="kolmo-card rounded-2xl p-8">
              <span className="text-sm font-bold tracking-[0.2em] text-[#c8a27a]">
                {item.label}
              </span>
              <h2 className="mt-5 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#9a948c]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="kolmo-grid-lines">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7fa8b5]">
              Sezónně
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Večery u přehrady
            </h2>
            <p className="mt-4 leading-7 text-[#9a948c]">
              Grilovací a koktejlové večery, tematické akce a posezení venku.
              Termíny hlásíme na Facebooku.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-[#9a948c]">
              {kolmoConfig.events.map((event) => (
                <li key={event} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8a27a]" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
          <div className="kolmo-panel-lake relative overflow-hidden rounded-3xl border border-[#f2ece3]/8 p-10">
            <p className="max-w-sm text-xl font-medium leading-9 text-[#f2ece3]">
              „Ta nejlepší káva a moučníky na Olešné.“
            </p>
            <p className="mt-5 text-sm text-[#9a948c]">
              Nejen pro aktivní sportovce a rodiny s dětmi.
            </p>
          </div>
        </div>
      </section>

      <section
        id="kde"
        className="relative border-t border-[#f2ece3]/8 bg-[#1a1d21]"
      >
        <div className="kolmo-corner kolmo-corner-br" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Kde nás najdete</h2>
            <p className="mt-5 text-lg text-[#f2ece3]/80">
              {kolmoConfig.address}
            </p>
            <p className="mt-3 text-sm text-[#9a948c]">
              {kolmoConfig.hoursNote}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={kolmoConfig.phoneHref}
                className="kolmo-pill kolmo-btn-ghost inline-flex items-center justify-center px-6 py-3 text-sm font-medium"
              >
                {kolmoConfig.phone}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(kolmoConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="kolmo-pill kolmo-btn-cream inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              >
                Navigovat
              </a>
            </div>
          </div>
          <div className="kolmo-card rounded-3xl p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7fa8b5]">
              Resort Olešná
            </p>
            <p className="mt-5 leading-8 text-[#f2ece3]/85">
              Moderní bistro v areálu u vodní nádrže — kousek od sportovišť,
              stezek i pláže.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
