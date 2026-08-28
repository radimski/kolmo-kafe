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
        <span className="kolmo-map-angle" aria-hidden>
          90°
        </span>
        <span className="kolmo-map-word" aria-hidden>
          KOLMO
        </span>
        <span className="kolmo-map-bracket kolmo-map-bracket-tl" aria-hidden />
        <span className="kolmo-map-bracket kolmo-map-bracket-br" aria-hidden />
        <span className="kolmo-map-crosshair" aria-hidden />
        <iframe
          title={map.imageAlt}
          src={embedSrc}
          className="kolmo-map-iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <figcaption className="kolmo-map-caption">
        <span className="kolmo-map-caption-term">kolmo k vodě</span>
        <span className="kolmo-map-caption-note">
          Úhel 90° — bistro kolmo k břehu přehrady Olešná
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
