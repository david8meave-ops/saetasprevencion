"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { casosPublicados } from "@/lib/casos";

export default function ServiciosRecientes() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
            Seguridad en el terreno
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16294F]">
            Trabajos recientes
          </h2>
        </div>

        {/* Reel horizontal + controles superpuestos */}
        <div className="relative group">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-md backdrop-blur-sm flex items-center justify-center text-[#16294F] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-60 hover:bg-white hover:text-[#006B52] transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 border border-gray-200 shadow-md backdrop-blur-sm flex items-center justify-center text-[#16294F] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 max-md:opacity-60 hover:bg-white hover:text-[#006B52] transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {casosPublicados.map((c) => (
              <article
                key={c.slug}
                className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:border-[#006B52] hover:shadow-md"
              >
                <Link href={`/casos/${c.slug}`} className="block">
                  <div className="h-44 overflow-hidden">
                    <Image
                      src={`/casos/${c.slug}/1.webp`}
                      alt={c.tituloCorto}
                      width={680}
                      height={352}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-[#006B52]">
                      {c.tag}
                    </span>
                    <h3 className="text-[#16294F] font-semibold text-base mt-1.5 mb-2 leading-snug">
                      {c.tituloCorto}
                    </h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{c.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#006B52]">
                      Leer más <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
