import type { Metadata } from "next";
import Image from "next/image";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "El Creador — El Yari Gozadera",
  description: "Yari Rodríguez (El Yari Gozadera): historia, visión y energía detrás de GZDR en Belgrade.",
  alternates: { canonical: "/yari" },
  openGraph: {
    url: `${siteUrl}/yari`,
    title: "El Creador | GZDR",
    description: "Conoce a El Yari Gozadera: la mente y el corazón detrás de la Gozadera.",
  },
};

export default function YariPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gzdr-border">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Retrato artístico (placeholder) de El Yari Gozadera"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-3xl font-black">El Yari Gozadera</div>
              <div className="mt-1 text-sm text-white/70">Yari Rodríguez · DJ · curadoría latina</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl">El Creador</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            El Yari llegó a Belgrade con una misión simple y peligrosa: que el perreo suene como en casa, pero con el
            filtro nocturno de Europa del Este. No vende “exotismo”: construye comunidad, confianza y sudor real en la
            pista.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Entre una gira y otra, Yari conecta DJs, diseñadores y gente que solo quiere soltarse. GZDR nace de esa
            mezcla: una marca que entiende que la gozadera no es un género, es un estado.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gzdr-border bg-gzdr-surface/35 p-6">
              <div className="text-sm font-bold tracking-wide text-gzdr-lime">Mantra</div>
              <div className="mt-3 text-white/75">Ni terapia, ni yoga. Solo ritmo latino, sudor y pura Gozadera.</div>
            </div>
            <div className="rounded-2xl border border-gzdr-border bg-gzdr-surface/35 p-6">
              <div className="text-sm font-bold tracking-wide text-gzdr-fuchsia">Visión</div>
              <div className="mt-3 text-white/75">
                Una experiencia donde la música, la energía y la cultura se unen — en serio, no en slogan vacío.
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gzdr-border bg-gradient-to-br from-gzdr-fuchsia/10 via-transparent to-gzdr-lime/10 p-6">
            <div className="font-display text-xl font-bold">Belgrade como laboratorio</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              La ciudad aporta contraste, frío fuera y calor dentro. Ahí se prueban luces, texturas y line-ups que
              respetan la historia del reggaetón y abren puerta al futuro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
