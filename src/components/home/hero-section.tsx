"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { GzdrLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/home/countdown";
import { events } from "@/lib/events";

const nextEvent = events.find((e) => e.status === "proximo") ?? events[0]!;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [1, 1] : [1, 0.15]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-gzdr-fuchsia/15 via-transparent to-gzdr-bg" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.35),transparent_62%)] blur-2xl animate-pulse-grid" />

      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <video
          className="h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=70"
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-gzdr-bg via-gzdr-bg/55 to-gzdr-bg/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-14 sm:pt-20">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gzdr-border bg-black/35 px-3 py-1 text-xs font-semibold tracking-wide text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-gzdr-gold" />
            Belgrade · reggaetón · perreo · streetwear
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <GzdrLogo size="xl" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Ni terapia, ni yoga. Solo ritmo latino, sudor y pura Gozadera.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="fuchsia" className="glitch-hover text-base" data-text="Ver eventos">
                <Link href="/eventos">
                  Ver eventos <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/style">Gozadera Style</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-gzdr-border bg-black/35 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold tracking-[0.35em] text-gzdr-fuchsia">PRÓXIMO EVENTO</div>
                  <div className="mt-2 font-display text-xl font-black leading-tight">{nextEvent.title}</div>
                  <div className="mt-2 text-sm text-white/65">
                    {nextEvent.venue} · {nextEvent.city}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Countdown targetISO={nextEvent.dateISO} />
              </div>
              <div className="mt-4 text-xs text-white/50">
                DJs: {nextEvent.djs.join(" · ")}. Los tickets reales se conectarán cuando actives pagos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
