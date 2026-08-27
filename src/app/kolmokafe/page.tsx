import Image from "next/image";
import Link from "next/link";
import { kolmoConfig } from "@/sites/kolmokafe/config";

const highlights = [
  {
    label: "Káva",
    title: "Výběrová & čerstvá",
    text: "Espresso, filtr i ledová káva — jednoduché menu, poctivá příprava.",
    tone: "bg-[#e8f0e6] text-[#4a5f4e]",
  },
  {
    label: "Sladké",
    title: "Moučníky dne",
    text: "Domácí lívance, sezónní zákusky a něco sladkého po každé procházce kolem přehrady.",
    tone: "bg-[#f6ebe3] text-[#7a5f52]",
  },
  {
    label: "Slané",
    title: "Lehké bistro",
    text: "Sendviče, quesadilly a bagely — ideální po sportu nebo na pauzu u vody.",
    tone: "bg-[#e5f1f5] text-[#4f6570]",
  },
] as const;

export default function KolmoPage() {
  return (
    <div className="kolmo-soft-glow relative overflow-hidden">
      <span
        aria-hidden
        className="kolmo-vertical-accent absolute right-6 top-28 hidden text-5xl lg:block"
      >
        KOLMO
      </span>

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
        <div className="kolmo-rise">
          <span className="kolmo-pill inline-block bg-[#e8f0e6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#4a5f4e]">
            {kolmoConfig.location}
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-[#2c2825] sm:text-6xl lg:text-7xl">
            Fresh káva.
            <br />
            <span className="text-[#7d9b84]">Kolmo</span> k vodě.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6b5c52]">
            Lehké bistro u přehrady Olešná — výběrová káva, domácí moučníky a
            jednoduchá kuchyně v moderním prostoru, kam se chodí na chvíli
            zpomalit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kolmokafe/menu"
              className="kolmo-pill inline-flex items-center justify-center bg-[#2c2825] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1a1d21]"
            >
              Prohlédnout menu
            </Link>
            <a
              href={kolmoConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="kolmo-pill inline-flex items-center justify-center border border-[#2c2825]/10 bg-white px-7 py-3.5 text-sm font-semibold text-[#2c2825] transition hover:border-[#7d9b84]"
            >
              Aktuální otevírací doba
            </a>
          </div>
        </div>

        <div className="kolmo-rise-delay relative">
          <div className="kolmo-photo-panel kolmo-arch relative min-h-[420px] overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="kolmo-logo-panel inline-flex self-start rounded-2xl p-6 shadow-xl">
                <Image
                  src="/kolmokafe/logo.png"
                  alt={kolmoConfig.name}
                  width={280}
                  height={100}
                  className="h-auto w-52 sm:w-64"
                  priority
                />
              </div>
              <p className="max-w-xs text-sm leading-7 text-[#2c2825]/80">
                Ráno na kávu, odpoledne na něco sladkého, večer gril u vody —
                podle sezóny a nálady Olešné.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="kolmo-card kolmo-arch p-8">
              <span
                className={`kolmo-pill inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${item.tone}`}
              >
                {item.label}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-[#2c2825]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6b5c52]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2c2825]/6 bg-[#fffdf9]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7d9b84]">
              Sezónně
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#2c2825]">
              Večery u přehrady
            </h2>
            <p className="mt-4 leading-7 text-[#6b5c52]">
              Grilovací a koktejlové večery, tematické akce a posezení venku —
              sledujte Facebook pro aktuální termíny.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#6b5c52]">
              {kolmoConfig.events.map((event) => (
                <li key={event} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ec5d4]" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
          <div className="kolmo-card kolmo-arch kolmo-photo-panel min-h-[240px] p-8">
            <p className="max-w-sm text-lg font-medium leading-8 text-[#2c2825]">
              „Ta nejlepší káva a moučníky na Olešné“ — místo pro sportovce,
              rodiny i každého, kdo chce chvíli u vody.
            </p>
          </div>
        </div>
      </section>

      <section id="kde" className="mx-auto max-w-6xl px-6 py-20">
        <div className="kolmo-card overflow-hidden lg:grid lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-[#2c2825]">Kde nás najdete</h2>
            <p className="mt-4 text-[#6b5c52]">{kolmoConfig.address}</p>
            <p className="mt-2 text-sm text-[#8a8178]">{kolmoConfig.hoursNote}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={kolmoConfig.phoneHref}
                className="kolmo-pill inline-flex items-center justify-center border border-[#2c2825]/10 px-6 py-3 text-sm font-medium text-[#2c2825] hover:border-[#7d9b84]"
              >
                {kolmoConfig.phone}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(kolmoConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="kolmo-pill inline-flex items-center justify-center bg-[#8ec5d4] px-6 py-3 text-sm font-medium text-[#1f3438] hover:bg-[#7db5c6]"
              >
                Navigovat
              </a>
            </div>
          </div>
          <div className="kolmo-photo-panel min-h-[260px] p-8 lg:min-h-full">
            <div className="flex h-full flex-col justify-end">
              <p className="text-sm uppercase tracking-[0.2em] text-[#4f6570]">
                Resort Olešná
              </p>
              <p className="mt-2 max-w-sm text-lg font-medium leading-8 text-[#2c2825]">
                Moderní bistro v areálu u vodní nádrže — kousek od sportovišť,
                stezek i pláže.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
