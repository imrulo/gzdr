import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#070707",
          borderRadius: 40,
          border: "3px solid rgba(57,255,20,0.35)",
        }}
      >
        <div style={{ display: "flex", fontSize: 54, fontWeight: 900 }}>
          <span style={{ color: "white" }}>G</span>
          <span style={{ color: "#39ff14" }}>Z</span>
          <span style={{ color: "#ffd700" }}>D</span>
          <span style={{ color: "#ff00aa" }}>R</span>
          <span style={{ color: "white" }}>I</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, letterSpacing: "0.45em", opacity: 0.75, color: "white" }}>STYLE</div>
      </div>
    ),
    { ...size },
  );
}
