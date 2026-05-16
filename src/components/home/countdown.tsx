"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown({ targetISO }: { targetISO: string }) {
  const reduceMotion = useReducedMotion();
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const items = [
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Min", value: mins },
    { label: "Seg", value: secs },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((it, idx) => (
        <motion.div
          key={it.label}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05, duration: 0.35 }}
          className="rounded-xl border border-gzdr-border bg-black/35 px-3 py-4 text-center backdrop-blur-md"
        >
          <div className="font-display text-3xl font-black tracking-tight text-gzdr-lime sm:text-4xl">
            {it.label === "Días" ? String(it.value) : pad2(it.value)}
          </div>
          <div className="mt-1 text-xs font-semibold tracking-[0.25em] text-white/55">{it.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
