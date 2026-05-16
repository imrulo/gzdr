import type { Metadata } from "next";
import { StyleShop } from "@/components/shop/style-shop";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gozadera Style",
  description: "Tienda oficial Gozadera Style: gorras snapback, camisetas oversize, hoodies y accesorios con actitud latina.",
  alternates: { canonical: "/style" },
  openGraph: {
    url: `${siteUrl}/style`,
    title: "Gozadera Style | GZDR",
    description: "Streetwear neón con alma de perreo: gorras, camisetas, hoodies y más.",
  },
};

export default function StylePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20" id="catalogo">
      <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl">Gozadera Style</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/70">
        Gozadera Style es libertad, energía y actitud: vestir con alegría y sin reglas. En cada prenda el logo de
        merch es <span className="font-display font-black text-gzdr-fuchsia">DZDR</span> — precios en euros y dinares
        serbios (RSD).
      </p>
      <div className="mt-10">
        <StyleShop />
      </div>
    </div>
  );
}
