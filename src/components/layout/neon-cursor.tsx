"use client";

import { useEffect } from "react";

export function NeonCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const move = (e: MouseEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      style={{
        background:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(57,255,20,0.10), transparent 55%), radial-gradient(260px circle at calc(var(--mx, 50%) + 40px) calc(var(--my, 50%) - 30px), rgba(255,0,170,0.10), transparent 55%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
