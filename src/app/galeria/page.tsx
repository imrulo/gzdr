import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos y vibes de fiestas GZDR / Gozadera: neón, pista y comunidad latina en Belgrade.",
  alternates: { canonical: "/galeria" },
  openGraph: {
    url: `${siteUrl}/galeria`,
    title: "Galería | GZDR",
    description: "Reels y fotos de la Gozadera en acción.",
  },
};

export default function GaleriaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl">Galería</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/70">
        Sudor, flash, risas y perreo honesto. Esto no es “contenido”: es memoria colectiva de la noche.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
