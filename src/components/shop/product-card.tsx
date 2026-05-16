"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart";
import { WishlistHeart } from "@/components/shop/wishlist-heart";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const add = useCartStore((s) => s.add);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-gzdr-border bg-gzdr-surface/35 shadow-[0_0_0_1px_rgb(0_0_0/0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={product.blurDataURL}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-center backdrop-blur-md">
            <div className="font-display text-2xl font-black tracking-[0.35em] text-white">
              G <span className="text-gzdr-lime">Z</span> D <span className="text-gzdr-fuchsia">R</span> I
            </div>
            <div className="mt-1 text-xs tracking-[0.55em] text-white/70">style</div>
          </div>
        </div>

        <div className="absolute left-3 top-3 flex gap-2">
          {product.badge ? <Badge variant="fuchsia">{product.badge}</Badge> : null}
        </div>

        <div className="absolute right-3 top-3">
          <WishlistHeart productId={product.id} className="pointer-events-auto bg-black/35" />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <div className="line-clamp-2 font-display text-base font-bold leading-snug">{product.name}</div>
          <div className="mt-2 line-clamp-2 text-sm text-white/65">{product.description}</div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="font-display text-lg font-black text-gzdr-gold">€{product.priceEur.toFixed(2)}</div>
          <Button
            type="button"
            variant="default"
            className={cn("glitch-hover")}
            data-text="Añadir"
            onClick={() => add(product, 1)}
          >
            <ShoppingCart className="mr-2" />
            Añadir
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
