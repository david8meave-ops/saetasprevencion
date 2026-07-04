"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// MOCKUP: casos/artículos de ejemplo. Cada tarjeta enlazará a un artículo
// real describiendo trabajos hechos para clientes (se desarrollará después).
// Las fotos son placeholders de /public/industria/.
const articulos = [
  {
    img: "/industria/industria-3.webp",
    tag: "Programa SST",
    title: "Implementación de programa NTS-009 en planta industrial",
    excerpt: "Diagnóstico, documentación y puesta en marcha del programa de seguridad y salud en el trabajo.",
  },
  {
    img: "/industria/industria-4.webp",
    tag: "Monitoreo",
    title: "Monitoreo ocupacional de ruido e iluminación",
    excerpt: "Medición de agentes físicos en áreas operativas y plan de control de riesgos.",
  },
  {
    img: "/industria/industria-5.webp",
    tag: "Emergencias",
    title: "Plan de evacuación y simulacro general",
    excerpt: "Diseño de rutas, señalización y ejecución de simulacro con brigadas.",
  },
  {
    img: "/industria/industria-6.webp",
    tag: "Carga de fuego",
    title: "Estudio de carga de fuego para certificación",
    excerpt: "Cálculo técnico y recomendaciones de protección contra incendios.",
  },
  {
    img: "/industria/industria-7.webp",
    tag: "Capacitación",
    title: "Formación de brigadas de emergencia",
    excerpt: "Capacitación teórico-práctica con respaldo normativo RM 0329/21.",
  },
  {
    img: "/industria/industria-8.webp",
    tag: "Señalética",
    title: "Señalización de seguridad según RM 849/14",
    excerpt: "Provisión e instalación de señalética normada en instalaciones del cliente.",
  },
];

export default function ServiciosRecientes() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="trabajos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
              Seguridad en el terreno
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16294F]">
              Trabajos recientes
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center text-[#16294F] hover:border-[#006B52] hover:text-[#006B52] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center text-[#16294F] hover:border-[#006B52] hover:text-[#006B52] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Reel horizontal */}
        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articulos.map((a) => (
            <article
              key={a.title}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:border-[#006B52] hover:shadow-md"
            >
              <div className="h-44 overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={680}
                  height={352}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#006B52]">
                  {a.tag}
                </span>
                <h3 className="text-[#16294F] font-semibold text-base mt-1.5 mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#006B52]/60 cursor-default select-none"
                  title="Artículo en preparación"
                >
                  Leer más <ArrowRight size={14} />
                  <span className="ml-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F5C518] text-[#16294F]">
                    Pronto
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
