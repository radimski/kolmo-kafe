import { kolmoConfig } from "@/config/site";

type KolmoLogoProps = {
  variant?: "hero" | "nav";
  animate?: boolean;
  className?: string;
};

const letters = [
  { char: "K", x: 36, y: 78, delay: 0 },
  { char: "O", x: 36, y: 158, delay: 90 },
  { char: "L", x: 36, y: 238, delay: 180 },
  { char: "M", x: 36, y: 318, delay: 360 },
  { char: "O", x: 36, y: 398, delay: 450 },
] as const;

export function KolmoLogo({
  variant = "hero",
  animate = false,
  className = "",
}: KolmoLogoProps) {
  const isHero = variant === "hero";
  const letterClass = animate ? "kolmo-logo-letter" : undefined;

  return (
    <svg
      viewBox="0 0 260 440"
      role="img"
      aria-label={kolmoConfig.name}
      className={`kolmo-logo-svg ${isHero ? "kolmo-logo-svg-hero" : "kolmo-logo-svg-nav"} ${className}`.trim()}
    >
      {letters.map((letter, index) => (
        <g
          key={`${letter.char}-${index}`}
          className={letterClass}
          style={animate ? { animationDelay: `${letter.delay}ms` } : undefined}
        >
          <text
            x={letter.x}
            y={letter.y}
            className="kolmo-logo-glyph kolmo-logo-glyph-main"
          >
            {letter.char}
          </text>
        </g>
      ))}

      <g
        className={letterClass}
        style={animate ? { animationDelay: "270ms" } : undefined}
      >
        <text x={108} y={238} className="kolmo-logo-glyph kolmo-logo-glyph-kafe">
          kafe
        </text>
      </g>

      <g
        className={letterClass}
        style={animate ? { animationDelay: "320ms" } : undefined}
      >
        <path
          d="M 188 206 H 228 V 246"
          className="kolmo-logo-mark"
          fill="none"
        />
      </g>
    </svg>
  );
}
