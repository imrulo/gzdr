import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, rgba(255,0,170,0.35), rgba(10,10,10,1) 45%, rgba(57,255,20,0.25))",
          color: "white",
        }}
      >
        <div style={{ fontSize: 86, fontWeight: 900, letterSpacing: "0.18em" }}>GZDR</div>
      </div>
    ),
    { ...size },
  );
}
