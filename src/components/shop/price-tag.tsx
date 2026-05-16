import { formatDualPrice } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function PriceTag({ eur, className, size = "md" }: { eur: number; className?: string; size?: "sm" | "md" | "lg" }) {
  const { eur: eurStr, rsd } = formatDualPrice(eur);
  const main = size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={cn("leading-tight", className)}>
      <div className={cn("font-display font-black text-gzdr-gold", main)}>{eurStr}</div>
      <div className="text-xs font-medium text-white/55">{rsd}</div>
    </div>
  );
}
