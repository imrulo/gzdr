import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-gzdr-border/80 bg-gradient-to-b from-gzdr-surface/70 to-black/20">
            <CardHeader>
              <CardTitle className="text-gzdr-lime">Manifiesto</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">
              Ni terapia, ni yoga. Solo ritmo latino, sudor y pura Gozadera.
            </CardContent>
          </Card>
          <Card className="border-gzdr-border/80 bg-gradient-to-b from-gzdr-surface/70 to-black/20">
            <CardHeader>
              <CardTitle className="text-gzdr-fuchsia">Experiencia</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">
              La Gozadera Events representa mucho más que fiestas; es una experiencia donde la música, la energía y la
              cultura se unen.
            </CardContent>
          </Card>
          <Card className="border-gzdr-border/80 bg-gradient-to-b from-gzdr-surface/70 to-black/20">
            <CardHeader>
              <CardTitle className="text-gzdr-gold">Style</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">
              Gozadera Style es libertad, energía y actitud: vestir con alegría y sin reglas.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gzdr-border bg-gzdr-surface/30 p-8 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-2xl font-black">¿Listo para bajar hasta el suelo?</div>
            <div className="mt-2 max-w-2xl text-white/70">
              Entra a eventos, mira la galería y pilla tu outfit en Gozadera Style. Esto es club latino en Belgrade: neón,
              calor y comunidad.
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="fuchsia" size="lg">
              <Link href="/galeria">Ver galería</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Boletín</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
