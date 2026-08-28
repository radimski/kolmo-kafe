import Image from "next/image";
import {
  formatPostCaption,
  formatPostDate,
  type FacebookPost,
} from "@/lib/facebookPost";

type FacebookPostWindowProps = {
  post: FacebookPost;
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
    </div>
  );
}

export function FacebookPostWindow({
  post,
  source,
  compact = false,
}: FacebookPostWindowProps) {
  const caption = formatPostCaption(post.message, compact ? 72 : 120);

  return (
    <div className="fb-window fb-window-photo">
      <WindowChrome />
      <a
        href={post.permalinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fb-window-photo-link"
        aria-label={post.imageAlt ?? post.message}
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
              <time className="fb-window-time" dateTime={post.createdAt}>
                {formatPostDate(post.createdAt)}
              </time>
              {source === "manual" ? (
                <span className="fb-window-badge">Ukázka</span>
              ) : null}
            </div>
            {caption ? (
              <p className="fb-window-photo-caption">{caption}</p>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}

type FacebookPostFloatProps = {
  post: FacebookPost | null;
  source: "facebook" | "manual" | "none";
};

export function FacebookPostFloat({ post, source }: FacebookPostFloatProps) {
  if (!post) return null;

  return (
    <div className="fb-float">
      <FacebookPostWindow post={post} source={source} compact />
    </div>
  );
}
