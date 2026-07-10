"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Reel infinito de fotos para los artículos de casos (mismo patrón que la
// marquesina de clientes de la portada): auto-scroll continuo con bucle sin
// fin, pausa al pasar el cursor y flechas fantasma para avanzar/retroceder.
export default function GaleriaReel({
  slug,
  fotos,
}: {
  slug: string;
  fotos: number[]; // índices de foto a mostrar, p.ej. [2, 3, 4]
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const nudging = useRef(false);

  // Track duplicado → el keyframe global "marquee" traslada -50% y el bucle es continuo.
  const track = [...fotos, ...fotos];
  // Duración escalada con la cantidad de fotos, para un ritmo ~constante por foto.
  const duration = Math.max(20, fotos.length * 7); // segundos
  const period = duration * 1000; // ms de un ciclo completo

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    const anim = el?.getAnimations()[0];
    if (!el || !anim || nudging.current) return;
    nudging.current = true;

    const total = period * 0.12 * dir; // salto de ~12% del ciclo
    const dur = 500;
    const start = performance.now();
    let applied = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const delta = total * eased - applied;
      applied = total * eased;
      let ct = Number(anim.currentTime ?? 0) + delta;
      ct = ((ct % period) + period) % period; // envuelve en ambos sentidos
      anim.currentTime = ct;
      if (p < 1) requestAnimationFrame(step);
      else nudging.current = false;
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="relative group">
      <button
        onClick={() => nudge(-1)}
        aria-label="Fotos anteriores"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-md backdrop-blur-sm flex items-center justify-center text-[#16294F] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-60 hover:bg-white hover:text-[#006B52] transition-all duration-200"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => nudge(1)}
        aria-label="Fotos siguientes"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-md backdrop-blur-sm flex items-center justify-center text-[#16294F] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-60 hover:bg-white hover:text-[#006B52] transition-all duration-200"
      >
        <ChevronRight size={18} />
      </button>

      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max py-1 hover:[animation-play-state:paused]"
          style={{ animation: `marquee ${duration}s linear infinite` }}
        >
          {track.map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="mr-4 h-56 w-80 sm:h-64 sm:w-96 shrink-0 overflow-hidden rounded-lg border border-gray-200"
            >
              <Image
                src={`/casos/${slug}/${n}.webp`}
                alt={`Fotografía ${n}`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
