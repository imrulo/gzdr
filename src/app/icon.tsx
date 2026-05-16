import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 64, height: 64 };
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
          background: "#0a0a0a",
          borderRadius: 14,
          border: "2px solid rgba(57,255,20,0.55)",
          color: "#39ff14",
          fontSize: 26,
          fontWeight: 900,
          letterSpacing: "0.08em",
        }}
      >
        G
      </div>
    ),
    { ...size },
  );
}
