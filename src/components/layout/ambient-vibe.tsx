"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Audio opcional muy bajo. Los navegadores bloquean autoplay con sonido:
 * el usuario debe pulsar "Activar vibe" para escuchar.
 */
export function AmbientVibe() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.08;
    a.loop = true;
    if (enabled && !muted) {
      void a.play().catch(() => {
        // autoplay policy / sin red
      });
    } else {
      a.pause();
    }
  }, [enabled, muted]);

  return (
    <div className="fixed bottom-4 left-4 z-[70] flex items-center gap-2">
      <audio ref={audioRef} loop preload="none">
        {/* Coloca tu MP3 en `public/audio/vibe.mp3` (instrumental bajito). */}
        <source src="/audio/vibe.mp3" type="audio/mpeg" />
      </audio>
      {!enabled ? (
        <Button type="button" size="sm" variant="outline" onClick={() => setEnabled(true)} className="backdrop-blur">
          Activar vibe (audio bajito)
        </Button>
      ) : (
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Activar audio" : "Silenciar audio"}
          className="backdrop-blur"
        >
          {muted ? <VolumeX /> : <Volume2 />}
        </Button>
      )}
    </div>
  );
}
