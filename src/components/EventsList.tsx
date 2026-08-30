import Link from "next/link";
import Image from "next/image";
import {
  facebookEventsUrl,
  formatEventDate,
  formatEventTimeRange,
  type KolmoEvent,
} from "@/lib/events";

type EventsListProps = {
  events: KolmoEvent[];
  compact?: boolean;
  showHeading?: boolean;
};

export function EventsList({
  events,
  compact = false,
  showHeading = true,
}: EventsListProps) {
  if (!events.length) {
    return (
      <div className="kolmo-card rounded-2xl p-8">
        {showHeading ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7fa8b5]">
              Akce
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Co se chystá
            </h2>
          </>
        ) : null}
        <p className={`text-[#9a948c] ${showHeading ? "mt-4" : ""}`}>
          Momentálně nemáme na webu žádné nadcházející akce. Aktuální termíny
          grilování, koktejlů a sezónních večerů najdete na Facebooku.
        </p>
        <a
          href={facebookEventsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-pill kolmo-btn-cream mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
        >
          Akce na Facebooku
        </a>
      </div>
    );
  }

  return (
    <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
      {events.map((event) => (
        <article
          key={event.id}
          className={`kolmo-card overflow-hidden rounded-2xl ${compact ? "p-5" : "p-0"}`}
        >
          {!compact && event.imageUrl ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#21252a]">
              <Image
                src={event.imageUrl}
                alt=""
                width={640}
                height={360}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          ) : null}
          <div className={compact ? "" : "p-6"}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a27a]">
              {formatEventDate(event.startAt)}
            </p>
            <h3 className={`font-semibold text-[#f2ece3] ${compact ? "mt-2 text-lg" : "mt-3 text-xl"}`}>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#c8a27a]"
              >
                {event.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-[#9a948c]">
              {formatEventTimeRange(event)}
              {event.location ? ` · ${event.location}` : ""}
            </p>
            {event.description && !compact ? (
              <p className="mt-3 text-sm leading-7 text-[#9a948c]">
                {event.description}
              </p>
            ) : null}
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-[#c8a27a] transition hover:text-[#f2ece3]"
            >
              Detail na Facebooku →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

type EventsSectionProps = {
  events: KolmoEvent[];
  source: "facebook" | "manual" | "mixed" | "none";
  limit?: number;
};

export function EventsSection({ events, source }: EventsSectionProps) {
  const sourceNote =
    source === "facebook"
      ? "Načteno z Facebooku."
      : source === "manual"
        ? "Termíny spravujeme ručně — ověřte také Facebook."
        : source === "mixed"
          ? "Kombinace Facebooku a ručních termínů."
          : null;

  return (
    <section className="border-t border-[#f2ece3]/8 bg-[#1a1d21]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c8a27a]">
              Akce
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Co se u nás chystá
            </h2>
            <p className="mt-3 max-w-2xl text-[#9a948c]">
              Grilovací večery, koktejly u vody a sezónní akce. Termíny
              průběžně doplňujeme z Facebooku.
            </p>
            {sourceNote ? (
              <p className="mt-2 text-xs text-[#7fa8b5]">{sourceNote}</p>
            ) : null}
          </div>
          <Link
            href="/akce"
            className="kolmo-pill kolmo-btn-ghost inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold"
          >
            Všechny akce
          </Link>
        </div>

        <div className="mt-10">
          <EventsList events={events} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={facebookEventsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="kolmo-pill kolmo-btn-cream inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
          >
            Sledovat akce na Facebooku
          </a>
        </div>
      </div>
    </section>
  );
}
