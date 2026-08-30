import { ImageResponse } from "next/og";
import { kolmoConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${kolmoConfig.name} — bistro u přehrady Olešná`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(160deg, #1a1816 0%, #243a42 100%)",
          color: "#f2ece3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#c8a27a",
          }}
        >
          KOLMO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
            {kolmoConfig.name}
          </div>
          <div style={{ fontSize: 30, color: "rgba(242,236,227,0.85)" }}>
            Bistro na cyklostezce u přehrady Olešná
          </div>
        </div>
        <div style={{ fontSize: 24, color: "rgba(242,236,227,0.65)" }}>
          {kolmoConfig.location}
        </div>
      </div>
    ),
    { ...size },
  );
}
