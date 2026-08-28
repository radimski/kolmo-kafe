import Image from "next/image";
import Link from "next/link";
import {
  facebookPageUrl,
  formatPostDate,
  formatPostExcerpt,
  type FacebookPost,
} from "@/lib/facebookPost";
import { kolmoConfig } from "@/config/site";

type FacebookPostWindowProps = {
  post: FacebookPost | null;
  source: "facebook" | "manual" | "none";
  compact?: boolean;
};

function WindowChrome() {
  return (
    <div className="fb-window-chrome">
      <div className="fb-window-dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="fb-window-title">
        <span className="fb-window-icon" aria-hidden>
          f
        </span>
        <span>{kolmoConfig.name}</span>
        <span className="fb-window-sub">· Facebook</span>
      </div>
      <a
        href={facebookPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fb-window-open"
        aria-label="Otevřít stránku na Facebooku"
      >
        ↗
      </a>
    </div>
  );
}

function EmptyPostWindow() {
  return (
    <div className="fb-window">
      <WindowChrome />
      <div className="fb-window-body fb-window-empty">
        <p className="text-sm leading-7 text-[#9a948c]">
          Nejnovější příspěvek zatím nemůžeme načíst. Sledujte nás na Facebooku
          — tam vždy najdete aktuální otevírací dobu, menu a akce u vody.
        </p>
        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-pill kolmo-btn-cream mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
        >
          Přejít na Facebook
        </a>
      </div>
    </div>
  );
}

export function FacebookPostWindow({
  post,
  source,
  compact = false,
}: FacebookPostWindowProps) {
  if (!post) {
    return <EmptyPostWindow />;
  }

  const excerpt = formatPostExcerpt(post.message, compact ? 220 : 420);
  const showFullHint =
    post.message.replace(/\s+/g, " ").trim().length > (compact ? 220 : 420);

  return (
    <div className="fb-window">
      <WindowChrome />
      <div className="fb-window-body">
        <div className="fb-window-meta">
          <p className="fb-window-page">{kolmoConfig.name}</p>
          <time className="fb-window-time" dateTime={post.createdAt}>
            {formatPostDate(post.createdAt)}
          </time>
          {source === "manual" ? (
            <span className="fb-window-badge">Ukázka</span>
          ) : null}
        </div>

        {post.imageUrl ? (
          <a
            href={post.permalinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fb-window-media"
          >
            <Image
              src={post.imageUrl}
              alt=""
              width={800}
              height={500}
              className="h-full w-full object-cover"
              unoptimized
            />
          </a>
        ) : null}

        <p className="fb-window-message whitespace-pre-line">{excerpt}</p>

        <div className="fb-window-actions">
          {showFullHint ? (
            <a
              href={post.permalinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-window-link"
            >
              Celý příspěvek na Facebooku →
            </a>
          ) : (
            <a
              href={post.permalinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-window-link"
            >
              Zobrazit na Facebooku →
            </a>
          )}
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="kolmo-pill kolmo-btn-ghost px-4 py-2 text-xs font-medium"
          >
            Sledovat stránku
          </a>
        </div>
      </div>
    </div>
  );
}

type FacebookPostSectionProps = {
  post: FacebookPost | null;
  source: "facebook" | "manual" | "none";
};

export function FacebookPostSection({ post, source }: FacebookPostSectionProps) {
  return (
    <section className="kolmo-grid-lines border-y border-[#f2ece3]/8">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7fa8b5]">
            Živě z Facebooku
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Poslední příspěvek
          </h2>
          <p className="mt-4 max-w-md leading-7 text-[#9a948c]">
            Otevírací doba, akce u vody a novinky z kuchyně — všechno nejdřív
            na naší Facebookové stránce. Tady ji máte přehledně na webu.
          </p>
          <Link
            href="/akce"
            className="mt-6 inline-flex text-sm font-medium text-[#c8a27a] transition hover:text-[#f2ece3]"
          >
            Naplánované akce →
          </Link>
        </div>
        <FacebookPostWindow post={post} source={source} />
      </div>
    </section>
  );
}
