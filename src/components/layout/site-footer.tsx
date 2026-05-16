import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { GzdrLogo } from "@/components/brand/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-gzdr-border bg-gzdr-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <GzdrLogo size="sm" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            La Gozadera Events representa mucho más que fiestas; es una experiencia donde la música, la energía y la
            cultura se unen. Gozadera Style es libertad, energía y actitud: vestir con alegría y sin reglas.
          </p>
        </div>

        <div>
          <div className="font-display text-sm font-bold tracking-wide text-gzdr-lime">Explora</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link className="hover:text-gzdr-fuchsia" href="/eventos">
                Eventos
              </Link>
            </li>
            <li>
              <Link className="hover:text-gzdr-fuchsia" href="/style">
                Gozadera Style
              </Link>
            </li>
            <li>
              <Link className="hover:text-gzdr-fuchsia" href="/galeria">
                Galería
              </Link>
            </li>
            <li>
              <Link className="hover:text-gzdr-fuchsia" href="/contacto">
                Contacto / Boletín
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-bold tracking-wide text-gzdr-gold">GZDR — Belgrade</div>
          <p className="mt-4 text-sm text-white/70">
            Operamos desde <span className="text-white">Belgrade, Serbia</span>. Próximas fechas y drops en redes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              className="inline-flex items-center gap-2 rounded-md border border-gzdr-border px-3 py-2 hover:border-gzdr-lime/50 hover:text-gzdr-lime"
              href="mailto:hola@gzdr.live"
            >
              <Mail className="h-4 w-4" />
              hola@gzdr.live
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-gzdr-border px-3 py-2 hover:border-gzdr-fuchsia/50 hover:text-gzdr-fuchsia"
              href="https://instagram.com/la_gozadera_events"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              @la_gozadera_events
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-gzdr-border px-3 py-2 hover:border-gzdr-lime/50 hover:text-gzdr-lime"
              href="https://instagram.com/gozadera_style"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              @gozadera_style
            </a>
          </div>
          <p className="mt-6 text-xs text-white/45">
            © 2026 GZDR / Gozadera. Ni terapia, ni yoga. Solo ritmo latino, sudor y pura Gozadera.
          </p>
        </div>
      </div>
    </footer>
  );
}
