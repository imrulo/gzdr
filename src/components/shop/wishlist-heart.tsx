"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/store/wishlist";
import { cn } from "@/lib/utils";

export function WishlistHeart({ productId, className }: { productId: string; className?: string }) {
  const toggle = useWishlistStore((s) => s.toggle);
  const has = useWishlistStore((s) => s.ids.includes(productId));

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      className={cn("backdrop-blur", has ? "border-gzdr-fuchsia/60 text-gzdr-fuchsia" : "", className)}
      onClick={() => toggle(productId)}
      aria-label={has ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <Heart className={cn("h-4 w-4", has ? "fill-current" : "")} />
    </Button>
  );
}
