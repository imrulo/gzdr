"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { products, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { formatDualPrice } from "@/lib/currency";
import { useWishlistStore } from "@/store/wishlist";
import Image from "next/image";
import Link from "next/link";

const categories: Array<{ id: ProductCategory | "todos"; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "gorras", label: "Gorras" },
  { id: "camisetas", label: "Camisetas" },
  { id: "hoodies", label: "Hoodies" },
  { id: "accesorios", label: "Accesorios" },
];

export function StyleShop() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<ProductCategory | "todos">("todos");
  const [maxPrice, setMaxPrice] = useState(120);
  const ids = useWishlistStore((s) => s.ids);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = tab === "todos" ? true : p.category === tab;
      const priceOk = p.priceEur <= maxPrice;
      return catOk && priceOk;
    });
  }, [tab, maxPrice]);

  const wishlisted = useMemo(() => products.filter((p) => ids.includes(p.id)), [ids]);

  return (
    <div>
      <div className="rounded-2xl border border-gzdr-border bg-gzdr-surface/30 p-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button key={c.id} type="button" variant={tab === c.id ? "fuchsia" : "outline"} onClick={() => setTab(c.id)}>
              {c.label}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
            {filtered.length === 0 ? (
              <div className="mt-8 rounded-xl border border-dashed border-gzdr-border p-8 text-white/65">
                No hay piezas en ese rango. Sube el precio máximo o cambia categoría.
              </div>
            ) : null}
          </div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="rounded-2xl border border-gzdr-border bg-black/25 p-5"
          >
            <div className="font-display text-lg font-bold text-gzdr-gold">Filtros</div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <Label>Precio máximo (€)</Label>
                <div className="font-mono text-sm text-gzdr-lime">{maxPrice}</div>
              </div>
              <Slider value={[maxPrice]} min={15} max={120} step={1} onValueChange={(v) => setMaxPrice(v[0] ?? 120)} />
            </div>

            <div className="mt-8 border-t border-gzdr-border pt-6">
              <div className="font-display text-lg font-bold text-gzdr-fuchsia">Wishlist</div>
              <p className="mt-2 text-sm text-white/65">
                Tus favoritos viven en el navegador (local). Conecta cuenta más adelante si quieres sync.
              </p>
              <div className="mt-4 space-y-3">
                {wishlisted.length === 0 ? (
                  <div className="text-sm text-white/55">Vacío. Dale al corazón en los productos.</div>
                ) : (
                  wishlisted.map((p) => (
                    <div key={p.id} className="flex items-center gap-3 rounded-xl border border-gzdr-border bg-gzdr-surface/40 p-3">
                      <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-gzdr-border">
                        <Image src={p.imageSrc} alt={p.name} fill sizes="56px" className="object-cover" placeholder="blur" blurDataURL={p.blurDataURL} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold">{p.name}</div>
                        <div className="text-xs text-white/55">
                          {formatDualPrice(p.priceEur).eur} · {formatDualPrice(p.priceEur).rsd}
                        </div>
                      </div>
                      <Button asChild size="sm" variant="outline">
                        <Link href="#catalogo">Ver</Link>
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
