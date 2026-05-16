"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDualPrice } from "@/lib/currency";
import { cartSubtotal, useCartStore } from "@/store/cart";
import { PriceTag } from "@/components/shop/price-tag";

export function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const lines = useCartStore((s) => s.lines);
  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);
  const setQty = useCartStore((s) => s.setQty);
  const clear = useCartStore((s) => s.clear);

  const subtotal = cartSubtotal(lines);
  const shipping = subtotal > 0 ? 6 : 0;
  const total = subtotal + shipping;

  async function checkout() {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = (await res.json()) as { ok: boolean; url?: string };
    if (data.ok && data.url) window.location.href = data.url;
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="border-l border-gzdr-border bg-gzdr-bg p-0">
        <div className="p-6 pb-2">
          <SheetHeader>
            <SheetTitle className="font-display text-xl">Tu carrito</SheetTitle>
            <SheetDescription className="text-white/65">
              Checkout simulado. Stripe en modo test comentado en el código (listo para activar).
            </SheetDescription>
          </SheetHeader>
        </div>

        <Separator />

        <ScrollArea className="h-[calc(100vh-260px)] px-6">
          <div className="space-y-4 py-5">
            {lines.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gzdr-border bg-gzdr-surface/40 p-6 text-sm text-white/70">
                Vacío como la pista antes del drop. Mete fuego desde{" "}
                <Link className="text-gzdr-lime underline" href="/style" onClick={() => onOpenChange(false)}>
                  Gozadera Style
                </Link>
                .
              </div>
            ) : (
              lines.map((l) => (
                <div key={l.product.id} className="flex gap-3 rounded-xl border border-gzdr-border bg-gzdr-surface/40 p-3">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-gzdr-border">
                    <Image
                      src={l.product.imageSrc}
                      alt={l.product.name}
                      fill
                      sizes="80px"
                      placeholder="blur"
                      blurDataURL={l.product.blurDataURL}
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold">{l.product.name}</div>
                    <div className="mt-1">
                      <PriceTag eur={l.product.priceEur} size="sm" />
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setQty(l.product.id, l.qty - 1)}
                        aria-label="Menos"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className="min-w-8 text-center text-sm font-bold">{l.qty}</div>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => add(l.product, 1)}
                        aria-label="Más"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="ml-auto h-8 w-8 text-gzdr-fire hover:text-gzdr-fire"
                        onClick={() => remove(l.product.id)}
                        aria-label="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        <div className="border-t border-gzdr-border p-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-white/70">
              <span>Subtotal</span>
              <span className="text-white">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Envío (mock)</span>
              <span className="text-white">€{shipping.toFixed(2)}</span>
            </div>
            <Separator className="my-3" />
            <div className="flex flex-col gap-1 font-display text-base font-bold sm:flex-row sm:justify-between sm:items-end">
              <span>Total</span>
              <div className="text-right">
                <div className="text-gzdr-lime">{formatDualPrice(total).eur}</div>
                <div className="text-xs font-normal text-white/55">{formatDualPrice(total).rsd}</div>
              </div>
            </div>
          </div>

          <SheetFooter className="mt-5 sm:justify-stretch">
            <Button type="button" className="w-full" variant="default" disabled={lines.length === 0} onClick={checkout}>
              Checkout simulado
            </Button>
            <Button type="button" className="w-full" variant="outline" disabled={lines.length === 0} onClick={clear}>
              Vaciar carrito
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
