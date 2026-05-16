import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GZDR — Gozadera";
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
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 20%, rgba(57,255,20,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(255,0,170,0.35), transparent 55%), #0a0a0a",
          color: "white",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 900,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textShadow: "0 0 40px rgba(57,255,20,0.55), 0 0 80px rgba(255,0,170,0.25)",
          }}
        >
          G Z D R I
        </div>
        <div style={{ marginTop: 18, fontSize: 28, letterSpacing: "0.55em", color: "rgba(250,250,250,0.75)" }}>style</div>
        <div style={{ marginTop: 34, fontSize: 30, color: "rgba(250,250,250,0.78)" }}>Reggaetón · Perreo · Belgrade</div>
      </div>
    ),
    { ...size },
  );
}
