import type { Metadata } from "next";
import { events } from "@/lib/events";
import { EventsBoard } from "@/components/events/events-board";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Próximas y pasadas fiestas GZDR / Gozadera en Belgrade: reggaetón, perreo y energía latina.",
  alternates: { canonical: "/eventos" },
  openGraph: {
    url: `${siteUrl}/eventos`,
    title: "Eventos | GZDR",
    description: "Próximas y pasadas fiestas GZDR / Gozadera en Belgrade.",
  },
};

export default function EventosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl">Eventos</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/70">
        La Gozadera Events representa mucho más que fiestas; es una experiencia donde la música, la energía y la cultura
        se unen. Aquí tienes el historial y lo que viene.
      </p>
      <div className="mt-10">
        <EventsBoard items={events} />
      </div>
    </div>
  );
}
