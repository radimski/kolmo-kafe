import { ImageResponse } from "next/og";
import { kinlesConfig } from "@/config/site";

export const runtime = "edge";
export const alt = kinlesConfig.title;
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
          background: "linear-gradient(160deg, #201c16 0%, #33495c 100%)",
          color: "#f4f2ed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#93641f",
          }}
        >
          {kinlesConfig.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1 }}>
            Zámečnictví a bezpečnostní technika
          </div>
          <div style={{ fontSize: 30, color: "rgba(244,242,237,0.85)" }}>
            Hlučín · okolí Ostravy · od {kinlesConfig.founded}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "rgba(244,242,237,0.7)" }}>
          {kinlesConfig.phone}
        </div>
      </div>
    ),
    { ...size },
  );
}
