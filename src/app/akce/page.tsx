import Link from "next/link";
import { EventsList } from "@/components/EventsList";
import { FacebookPostWindow } from "@/components/FacebookPostWindow";
import { facebookEventsUrl, getUpcomingEvents } from "@/lib/events";
import { getLatestFacebookPost } from "@/lib/facebookPost";
import { kolmoConfig } from "@/config/site";

export const revalidate = 1800;

export default async function AkcePage() {
  const [{ events, source: eventsSource }, { post, source: postSource }] =
    await Promise.all([getUpcomingEvents(12), getLatestFacebookPost()]);

  const sourceNote =
    eventsSource === "facebook"
      ? "Nadcházející akce jsme načetli z Facebookové stránky KOLMO kafe."
      : eventsSource === "manual"
        ? "Zatím zobrazujeme ručně zadané termíny. Pro nejaktuálnější kalendář sledujte Facebook."
        : eventsSource === "mixed"
          ? "Zobrazujeme akce z Facebooku doplněné o ručně zadané termíny."
          : "Kalendář akcí momentálně není k dispozici — nejaktuálnější info je na Facebooku.";

  return (
    <div className="kolmo-grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a27a]">
          Akce & novinky
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Co se děje u vody
        </h1>
        <p className="mt-4 max-w-2xl text-[#9a948c]">
          Poslední příspěvek z Facebooku a nadcházející akce v Resortu Olešná.
        </p>

        <div className="mt-10 max-w-3xl">
          <FacebookPostWindow post={post} source={postSource} />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Nadcházející akce</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#9a948c]">{sourceNote}</p>
          <div className="mt-8">
            <EventsList events={events} showHeading={false} />
          </div>
        </div>

        <div className="kolmo-surface mt-10 rounded-2xl p-8">
          <h2 className="text-xl font-semibold">Facebook je hlavní kalendář</h2>
          <p className="mt-4 text-sm leading-7 text-[#9a948c]">
            Termíny grilování, koktejlových večerů a sezónních akcí nejdřív
            zveřejňujeme na Facebooku. Web je průběžně synchronizuje, pokud je
            nastaveno propojení.
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
