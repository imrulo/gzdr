import type { Metadata } from "next";
import { contactSubscribe } from "@/app/actions/contact";
import { contactInitialState } from "@/lib/contact-state";
import { ContactForm } from "./contact-form";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto / Boletín",
  description: "Boletín, booking y contacto para GZDR / Gozadera en Belgrade.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    url: `${siteUrl}/contacto`,
    title: "Contacto / Boletín | GZDR",
    description: "Boletín, booking y contacto para GZDR / Gozadera en Belgrade.",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl">Contacto / Boletín</h1>
        <p className="mt-4 text-lg text-white/70">
          Déjanos tu email para avisos de eventos, drops de Gozadera Style y colaboraciones. Respondemos rápido (perreo
          velocity).
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <ContactForm action={contactSubscribe} initialState={contactInitialState} />

        <div className="rounded-2xl border border-gzdr-border bg-gzdr-surface/35 p-6">
          <div className="font-display text-lg font-bold text-gzdr-gold">Booking & prensa</div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Para riders, partnerships y prensa: <span className="text-white">hola@gzdr.live</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Ubicación base: <span className="text-white">Belgrade, Serbia</span>. GZDR conecta cultura latina con la
            escena nocturna de los Balcanes.
          </p>
        </div>
      </div>
    </div>
  );
}
