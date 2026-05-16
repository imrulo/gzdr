"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { galleryItems } from "@/lib/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {galleryItems.map((g, idx) => (
        <motion.figure
          key={g.id}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.35) }}
          className={cn("mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gzdr-border bg-gzdr-surface/30")}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden",
              g.aspect === "portrait" && "aspect-[3/4]",
              g.aspect === "landscape" && "aspect-[16/10]",
              g.aspect === "square" && "aspect-square",
            )}
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL={g.blur}
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
          <figcaption className="border-t border-gzdr-border bg-black/35 px-3 py-2 text-xs text-white/75">{g.alt}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
