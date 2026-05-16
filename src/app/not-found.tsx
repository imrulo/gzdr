import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-4 py-24 md:px-6">
      <p className="text-xs font-black uppercase tracking-[0.35em] text-gzdr-fuchsia">404</p>
      <h1 className="font-display text-4xl font-black text-white md:text-6xl">Te perdiste del perreo</h1>
      <p className="text-sm text-white/65">Esta ruta no existe. Vuelve al calor de la pista.</p>
      <Button variant="fuchsia" asChild>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
