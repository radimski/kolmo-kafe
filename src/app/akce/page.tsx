import Link from "next/link";
import { EventsList } from "@/components/EventsList";
import { facebookEventsUrl, getUpcomingEvents } from "@/lib/events";
import { kolmoConfig } from "@/config/site";

export const revalidate = 3600;

export default async function AkcePage() {
  const { events, source } = await getUpcomingEvents(12);

  const sourceNote =
    source === "facebook"
      ? "Nadcházející akce jsme načetli z Facebookové stránky KOLMO kafe."
      : source === "manual"
        ? "Zatím zobrazujeme ručně zadané termíny. Pro nejaktuálnější kalendář sledujte Facebook."
        : source === "mixed"
          ? "Zobrazujeme akce z Facebooku doplněné o ručně zadané termíny."
          : "Kalendář akcí momentálně není k dispozici — nejaktuálnější info je na Facebooku.";

  return (
    <div className="kolmo-grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          Akce
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Večery, grilování a sezónní akce
        </h1>
        <p className="mt-4 max-w-2xl text-[#9a948c]">
          {sourceNote} Grilovací a koktejlové večery u přehrady, tematické
          akce a posezení venku — všechno u vody v Resortu Olešná.
        </p>

        <div className="mt-12">
          <EventsList events={events} showHeading={false} />
        </div>

        <div className="kolmo-surface mt-10 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">Facebook je hlavní kalendář</h2>
          <p className="mt-4 text-sm leading-7 text-[#9a948c]">
            Termíny grilování, koktejlových večerů a sezónních akcí nejdřív
            zveřejňujeme na Facebooku. Tento web je z Facebooku průběžně
            synchronizuje, pokud je nastaveno propojení — jinak zobrazí ručně
            vybrané nadcházející akce.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={facebookEventsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kolmo-pill kolmo-btn-cream inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Kalendář na Facebooku
            </a>
            <a
              href={kolmoConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="kolmo-pill kolmo-btn-ghost inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
            >
              Sledovat {kolmoConfig.name}
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
