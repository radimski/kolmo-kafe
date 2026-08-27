import Image from "next/image";
import Link from "next/link";
import { kolmoConfig } from "@/sites/kolmokafe/config";

export default function KolmoPage() {
  return (
    <div className="kolmo-grid-bg kolmo-hero-glow relative overflow-hidden">
      <span
        aria-hidden
        className="kolmo-vertical-label absolute right-8 top-24 hidden text-6xl lg:block"
      >
        KOLMO
      </span>
      <div className="kolmo-corner kolmo-corner-tl" aria-hidden />
      <div className="kolmo-corner kolmo-corner-br" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pt-24">
        <div className="kolmo-animate-in max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-stone-500">
            {kolmoConfig.location}
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            Káva
            <br />
            <span className="text-stone-400">kolmo</span> k vodě.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-400">
            Nadčasová kavárna u přehrady Olešná. Fresh kuchyně, výběrová káva,
            domácí moučníky a večery u grilu — když se sezóna rozjede.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kolmokafe/menu"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a1d21] transition hover:bg-stone-200"
            >
              Prohlédnout menu
            </Link>
            <a
              href={kolmoConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:border-white/40"
            >
              Aktuální otevírací doba
            </a>
          </div>
        </div>

        <div className="kolmo-animate-in-delay relative mt-20 flex justify-center lg:justify-end">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <Image
              src="/kolmokafe/logo.png"
              alt={kolmoConfig.name}
              width={320}
              height={120}
              className="h-auto w-64 sm:w-80"
              priority
            />
            <p className="mt-6 max-w-xs text-center text-sm leading-6 text-stone-500">
              Název není náhoda — <em>kolmo</em> znamená kolmo. Logo i místo u
              vody drží stejnou rovinu.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#15181c]/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            {
              title: "Káva & dezerty",
              text: "Espresso, filtr, sezónní zákusky a lívance, které voní po celé Olešné.",
            },
            {
              title: "Slané & lehké",
              text: "Sendviče, quesadilly, croissanty a bagely — ideální po kole nebo plavání.",
            },
            {
              title: "Večery u vody",
              text: "Grilování a koktejly večer — sledujte Facebook pro termíny.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="kolmo-menu-card rounded-2xl p-8"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kde" className="border-t border-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Kde nás najdete</h2>
            <p className="mt-4 text-stone-400">{kolmoConfig.address}</p>
            <p className="mt-2 text-stone-500">{kolmoConfig.hoursNote}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={kolmoConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-white/40"
              >
                {kolmoConfig.phone}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(kolmoConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15"
              >
                Navigovat
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(100,160,190,0.25),_rgba(26,29,33,0.9))]" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="max-w-sm text-sm leading-7 text-stone-300">
                Moderní bistro v areálu resortu Olešná — místo na ranní kávu,
                odpolední pauzu i večerní posezení u přehrady.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
