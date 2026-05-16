"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag } from "lucide-react";
import { GzdrMark } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/eventos", label: "Eventos" },
  { href: "/style", label: "Gozadera Style" },
  { href: "/yari", label: "El Creador" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const lines = useCartStore((s) => s.lines);
  const count = useMemo(() => lines.reduce((a, l) => a + l.qty, 0), [lines]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gzdr-border/80 bg-gzdr-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <GzdrMark className="h-8" />
          <span className="sr-only">GZDR — Gozadera</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-white/75 transition-colors hover:text-gzdr-lime",
                "glitch-hover",
              )}
              data-text={l.label}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="relative md:hidden"
            onClick={() => setCartOpen(true)}
            aria-label="Abrir carrito"
          >
            <ShoppingBag />
            <AnimatePresence>
              {count > 0 ? (
                <motion.span
                  key={count}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  className="absolute -right-1 -top-1 min-w-5 rounded-full bg-gzdr-fuchsia px-1 text-[10px] font-black leading-5 text-white"
                >
                  {count > 99 ? "99+" : count}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button type="button" variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-gzdr-border bg-gzdr-bg">
              <SheetHeader>
                <SheetTitle className="font-display">Menú</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg border border-gzdr-border bg-gzdr-surface px-4 py-3 text-base font-semibold text-white/90 hover:border-gzdr-lime/40 hover:text-gzdr-lime"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Button
            type="button"
            variant="fuchsia"
            className="relative hidden md:inline-flex"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="mr-2" />
            Carrito
            <AnimatePresence>
              {count > 0 ? (
                <motion.span
                  key={count}
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 6, opacity: 0 }}
                  className="ml-2 rounded-full bg-black/30 px-2 py-0.5 text-xs font-black"
                >
                  {count}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
