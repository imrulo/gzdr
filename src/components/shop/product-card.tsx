"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DzdrMerchMark } from "@/components/brand/brand-logo";
import { PriceTag } from "@/components/shop/price-tag";
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
          className="object-cover brightness-[0.72] transition-transform duration-500 group-hover:scale-[1.06] group-hover:brightness-90"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
          <div className="rounded-xl border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-sm transition-all duration-300 group-hover:border-gzdr-fuchsia/40 group-hover:bg-black/50 group-hover:shadow-[0_0_30px_rgb(255_0_170/0.25)]">
            <DzdrMerchMark size="lg" />
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
          <PriceTag eur={product.priceEur} />
          <Button
            type="button"
            variant="default"
            className={cn("glitch-hover shrink-0")}
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

