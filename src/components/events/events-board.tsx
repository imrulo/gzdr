"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Ticket } from "lucide-react";
import type { EventItem } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function TicketModal({ event }: { event: EventItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant={event.status === "proximo" ? "fuchsia" : "outline"} className="glitch-hover" data-text="Tickets">
          <Ticket className="mr-2" />
          Comprar ticket
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tickets (demo)</DialogTitle>
          <DialogDescription>
            Esto es una simulación. Cuando conectes Tickettailor/Shotgun/Stripe, este modal disparará checkout real.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-xl border border-gzdr-border bg-gzdr-surface/40 p-4 text-sm text-white/75">
          <div className="font-semibold text-white">{event.title}</div>
          <div className="mt-2">
            {new Intl.DateTimeFormat("es", { dateStyle: "full", timeStyle: "short" }).format(new Date(event.dateISO))}
          </div>
          <div className="mt-2">
            {event.venue} · {event.city}
          </div>
          <div className="mt-2 text-white/60">DJs: {event.djs.join(" · ")}</div>
        </div>
        <DialogFooter>
          <Button type="button" variant="default" onClick={() => window.alert("¡Listo! (fake) Pago no procesado.")}>
            Continuar (fake)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function EventsBoard({ items }: { items: EventItem[] }) {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<"proximo" | "pasado" | "todos">("todos");

  const filtered = useMemo(() => {
    if (tab === "todos") return items;
    return items.filter((e) => e.status === tab);
  }, [items, tab]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["todos", "Todos"],
            ["proximo", "Próximos"],
            ["pasado", "Pasados"],
          ] as const
        ).map(([key, label]) => (
          <Button key={key} type="button" variant={tab === key ? "fuchsia" : "outline"} onClick={() => setTab(key)}>
            {label}
          </Button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((e, idx) => (
          <motion.article
            key={e.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25) }}
            className="overflow-hidden rounded-2xl border border-gzdr-border bg-gzdr-surface/35"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={e.flyerSrc}
                alt={e.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={e.flyerBlur}
                className="object-cover"
              />
              <div className="absolute left-4 top-4">
                <Badge variant={e.status === "proximo" ? "default" : "outline"}>
                  {e.status === "proximo" ? "Próximo" : "Pasado"}
                </Badge>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <div className="font-display text-2xl font-black leading-tight">{e.title}</div>
              <div className="text-sm text-white/70">
                {new Intl.DateTimeFormat("es", { dateStyle: "full", timeStyle: "short" }).format(new Date(e.dateISO))}
              </div>
              <div className="text-sm text-white/70">
                {e.venue} · {e.city}
              </div>
              <div className="text-sm text-white/60">DJs: {e.djs.join(" · ")}</div>
              <div className="pt-2">
                <TicketModal event={e} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
