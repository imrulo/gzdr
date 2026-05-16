import { cn } from "@/lib/utils";

export function GzdriLogo({ className, size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" | "xl" }) {
  const sizes = {
    sm: { main: "text-2xl tracking-[0.35em]", sub: "text-[10px] tracking-[0.55em]" },
    md: { main: "text-4xl tracking-[0.32em]", sub: "text-xs tracking-[0.55em]" },
    lg: { main: "text-5xl sm:text-6xl tracking-[0.28em]", sub: "text-xs sm:text-sm tracking-[0.55em]" },
    xl: { main: "text-6xl sm:text-8xl tracking-[0.22em]", sub: "text-sm sm:text-base tracking-[0.55em]" },
  }[size];

  return (
    <div className={cn("leading-none", className)}>
      <div
        className={cn(
          "font-display font-black uppercase text-gzdr-white",
          sizes.main,
          "text-glow-lime [text-shadow:0_0_18px_rgb(57_255_20/0.55),0_0_46px_rgb(255_0_170/0.22)]",
        )}
      >
        <span className="text-gzdr-lime">G</span> <span className="text-white">Z</span>{" "}
        <span className="text-gzdr-fuchsia">D</span> <span className="text-gzdr-gold">R</span>{" "}
        <span className="text-white">I</span>
      </div>
      <div className={cn("mt-2 font-sans font-light text-white/70", sizes.sub)}>style</div>
    </div>
  );
}

export function GzdriMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      className={cn("h-8 w-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="gzdrStroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#39ff14" />
          <stop offset="0.5" stopColor="#ff00aa" />
          <stop offset="1" stopColor="#ffd700" />
        </linearGradient>
      </defs>
      <text x="2" y="22" fontFamily="var(--font-space-grotesk), system-ui, sans-serif" fontSize="18" fontWeight="800" fill="url(#gzdrStroke)" letterSpacing="6">
        GZDR
      </text>
      <text x="2" y="30" fontFamily="var(--font-inter), system-ui, sans-serif" fontSize="7" fill="rgba(250,250,250,0.65)" letterSpacing="6">
        style
      </text>
    </svg>
  );
}
