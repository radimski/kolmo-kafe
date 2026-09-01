import Image from "next/image";
import { kolmoConfig } from "@/config/site";

export function InstagramLead() {
  const lead = kolmoConfig.instagramLead;

  return (
    <section
      className="kolmo-ig-lead border-y border-[#f2ece3]/8"
      aria-labelledby="kolmo-ig-lead-title"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <a
          href={lead.href}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-ig-lead-photo"
        >
          <Image
            src={lead.image}
            alt={lead.imageAlt}
            width={1080}
            height={1350}
            className="kolmo-ig-lead-img"
            priority
          />
        </a>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a27a]">
            {lead.kicker}
          </p>
          <h2
            id="kolmo-ig-lead-title"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            {lead.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#9a948c]">
            {lead.caption}
          </p>
          <dl className="mt-7 space-y-3 text-[#f2ece3]">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-[#9a948c]">
                Pondělí–pátek
              </dt>
              <dd className="mt-1 text-xl font-semibold">{lead.weekdays}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-[#9a948c]">
                Sobota–neděle
              </dt>
              <dd className="mt-1 text-xl font-semibold">{lead.weekend}</dd>
            </div>
          </dl>
          <a
            href={lead.href}
            target="_blank"
            rel="noopener noreferrer"
            className="kolmo-pill kolmo-btn-cream mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
          >
            @kolmokafe na Instagramu
          </a>
        </div>
      </div>
    </section>
  );
}
