import Link from "next/link";
import { kolmoConfig } from "@/config/site";

type KolmoMapProps = {
  compact?: boolean;
};

export function KolmoMap({ compact = false }: KolmoMapProps) {
  const { map } = kolmoConfig;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(kolmoConfig.address)}`;
  const embedSrc = `https://maps.google.com/maps?q=${map.lat},${map.lng}&hl=cs&z=${map.zoom}&output=embed`;

  return (
    <figure
      className={`kolmo-map ${compact ? "kolmo-map-compact" : ""}`}
      aria-label="Mapa — Kolmo kafe u přehrady Olešná"
    >
      <div className="kolmo-map-frame">
        <iframe
          title={map.imageAlt}
          src={embedSrc}
          className="kolmo-map-iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <p className="kolmo-map-wink" aria-hidden>
          kolmo? ~90° ↗
        </p>
      </div>
      <figcaption className="kolmo-map-caption">
        <span className="kolmo-map-caption-term">
          {kolmoConfig.mapCaption.title}
        </span>
        <span className="kolmo-map-caption-note">
          {kolmoConfig.mapCaption.note}
        </span>
        <Link
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kolmo-map-open"
        >
          Otevřít v mapách →
        </Link>
      </figcaption>
    </figure>
  );
}
