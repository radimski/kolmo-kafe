import Image from "next/image";
import Link from "next/link";
import {
  facebookPageUrl,
  formatPostCaption,
  formatPostDate,
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
    <div className="fb-window fb-window-photo">
      <WindowChrome />
      <div className="fb-window-empty-photo">
        <p className="text-sm leading-7 text-[#9a948c]">
          Fotky z kuchyně a moučníků zatím nemůžeme načíst. Sledujte nás na
          Facebooku — tam pravidelně dáváme, co právě pečeme a vaříme.
        </p>
        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-pill kolmo-btn-cream mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
        >
          Fotky na Facebooku
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

  const caption = formatPostCaption(post.message, compact ? 100 : 160);
  const showMore =
    post.message.replace(/\s+/g, " ").trim().length > (compact ? 100 : 160);

  return (
    <div className="fb-window fb-window-photo">
      <WindowChrome />
      <a
        href={post.permalinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fb-window-photo-link"
        aria-label={`${post.imageAlt ?? post.message} — zobrazit na Facebooku`}
      >
        <div className={`fb-window-photo-frame ${compact ? "is-compact" : ""}`}>
          <Image
            src={post.imageUrl}
            alt={post.imageAlt ?? post.message}
            width={900}
            height={1125}
            className="fb-window-photo-img"
            unoptimized={post.imageUrl.startsWith("http")}
            priority={!compact}
          />
          <div className="fb-window-photo-overlay">
            <div className="fb-window-photo-meta">
              <p className="fb-window-page">{kolmoConfig.name}</p>
              <time className="fb-window-time" dateTime={post.createdAt}>
                {formatPostDate(post.createdAt)}
              </time>
              {source === "manual" ? (
                <span className="fb-window-badge">Ukázka</span>
              ) : null}
            </div>
            <p className="fb-window-photo-caption">{caption}</p>
          </div>
        </div>
      </a>

      <div className="fb-window-footer">
        {showMore ? (
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
          Více fotek
        </a>
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
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7fa8b5]">
            Živě z Facebooku
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Co právě vyfotili
          </h2>
          <p className="mt-4 max-w-md leading-7 text-[#9a948c]">
            Moučníky, káva a talíře z kuchyně — na Facebooku to fotíme skoro
            pořád. Poslední fotku vám ukážeme tady, ať nemusíte hned otevírat
            aplikaci.
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
