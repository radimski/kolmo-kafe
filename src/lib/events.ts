import eventsFile from "@/config/events.json";
import { kolmoConfig } from "@/config/site";

export type KolmoEvent = {
  id: string;
  title: string;
  description?: string;
  startAt: string;
  endAt?: string;
  location?: string;
  url: string;
  imageUrl?: string;
  source: "facebook" | "manual";
};

type EventsFile = {
  events: KolmoEvent[];
};

type GraphEvent = {
  id: string;
  name: string;
  description?: string;
  start_time: string;
  end_time?: string;
  place?: { name?: string; location?: { city?: string } };
  cover?: { source?: string };
};

const REVALIDATE_SECONDS = 3600;

function parseManualEvents(): KolmoEvent[] {
  return (eventsFile as EventsFile).events.filter(
    (event) => event.id && event.title && event.startAt && event.url,
  );
}

function mapGraphEvent(event: GraphEvent): KolmoEvent {
  const placeParts = [
    event.place?.name,
    event.place?.location?.city,
  ].filter(Boolean);

  return {
    id: event.id,
    title: event.name,
    description: event.description?.slice(0, 280) || undefined,
    startAt: event.start_time,
    endAt: event.end_time,
    location: placeParts.length ? placeParts.join(" · ") : kolmoConfig.location,
    url: `https://www.facebook.com/events/${event.id}/`,
    imageUrl: event.cover?.source,
    source: "facebook",
  };
}

async function fetchFacebookEvents(): Promise<KolmoEvent[]> {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID ?? "kolmokafe";

  if (!token) {
    return [];
  }

  const url = new URL(`https://graph.facebook.com/v21.0/${pageId}/events`);
  url.searchParams.set(
    "fields",
    "id,name,description,start_time,end_time,place,cover",
  );
  url.searchParams.set("limit", "12");
  url.searchParams.set("access_token", token);

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.warn(
        "[kolmokafe/events] Facebook API returned",
        response.status,
      );
      return [];
    }

    const payload = (await response.json()) as { data?: GraphEvent[] };
    return (payload.data ?? []).map(mapGraphEvent);
  } catch (error) {
    console.warn("[kolmokafe/events] Facebook API fetch failed", error);
    return [];
  }
}

function isUpcoming(event: KolmoEvent, now = Date.now()): boolean {
  const end = event.endAt ? Date.parse(event.endAt) : Date.parse(event.startAt);
  return end >= now;
}

function byStartDate(a: KolmoEvent, b: KolmoEvent): number {
  return Date.parse(a.startAt) - Date.parse(b.startAt);
}

export async function getUpcomingEvents(limit = 6): Promise<{
  events: KolmoEvent[];
  source: "facebook" | "manual" | "mixed" | "none";
}> {
  const [facebookEvents, manualEvents] = await Promise.all([
    fetchFacebookEvents(),
    Promise.resolve(parseManualEvents()),
  ]);

  const merged = new Map<string, KolmoEvent>();
  for (const event of [...manualEvents, ...facebookEvents]) {
    merged.set(event.id, event);
  }

  const upcoming = [...merged.values()]
    .filter(isUpcoming)
    .sort(byStartDate)
    .slice(0, limit);

  let source: "facebook" | "manual" | "mixed" | "none" = "none";
  if (upcoming.length) {
    const hasFacebook = upcoming.some((event) => event.source === "facebook");
    const hasManual = upcoming.some((event) => event.source === "manual");
    source =
      hasFacebook && hasManual ? "mixed" : hasFacebook ? "facebook" : "manual";
  }

  return { events: upcoming, source };
}

const dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
  timeZone: "Europe/Prague",
  weekday: "long",
  day: "numeric",
  month: "long",
});

const timeFormatter = new Intl.DateTimeFormat("cs-CZ", {
  timeZone: "Europe/Prague",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatEventDate(iso: string): string {
  const date = new Date(iso);
  const day = dateFormatter.format(date);
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export function formatEventTimeRange(event: KolmoEvent): string {
  const start = timeFormatter.format(new Date(event.startAt));
  if (!event.endAt) {
    return `od ${start}`;
  }
  const end = timeFormatter.format(new Date(event.endAt));
  return `${start}–${end}`;
}

export const facebookEventsUrl = `${kolmoConfig.facebook}/events`;
