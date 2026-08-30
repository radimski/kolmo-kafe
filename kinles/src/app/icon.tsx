import { ImageResponse } from "next/og";
import { kinlesConfig } from "@/config/site";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#33495c",
          color: "#f1e4cb",
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
