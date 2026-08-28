import type { Metadata } from "next";
import { KolmoContactForm } from "@/components/ContactForm";
import { kolmoConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Kontakt | ${kolmoConfig.name}`,
  description: `Napište nám nebo se zastavte — ${kolmoConfig.address}.`,
};

export default function KolmoKontaktPage() {
  return (
    <div className="kolmo-grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          Kontakt
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Ozvěte se nám</h1>
        <p className="mt-4 max-w-2xl text-[#9a948c]">
          Rezervace, soukromá akce nebo jen dotaz — napište a odpovíme. Aktuální
          otevírací dobu najdete na Facebooku.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="kolmo-card rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl font-semibold">Napište nám</h2>
            <div className="mt-7">
              <KolmoContactForm privacyHref="/ochrana-osobnich-udaju" />
            </div>
          </section>

          <div className="flex flex-col gap-6">
            <div className="kolmo-surface rounded-3xl p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7fa8b5]">
                Kde nás najdete
              </h2>
              <p className="mt-4 text-lg text-[#f2ece3]/85">
                {kolmoConfig.address}
              </p>
              <p className="mt-2 text-sm text-[#9a948c]">
                {kolmoConfig.location}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(kolmoConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="kolmo-pill kolmo-btn-cream mt-6 inline-flex px-6 py-3 text-sm font-semibold"
              >
                Navigovat
              </a>
            </div>

            <div className="kolmo-surface rounded-3xl p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7fa8b5]">
                Rychlý kontakt
              </h2>
              <a
                href={kolmoConfig.phoneHref}
                className="mt-4 block text-lg font-medium text-[#f2ece3] transition hover:text-[#c8a27a]"
              >
                {kolmoConfig.phone}
              </a>
              <a
                href={`mailto:${kolmoConfig.email}`}
                className="mt-1 block text-[#9a948c] transition hover:text-[#c8a27a]"
              >
                {kolmoConfig.email}
              </a>
              <a
                href={kolmoConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="kolmo-pill kolmo-btn-ghost mt-6 inline-flex px-6 py-3 text-sm font-medium"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
