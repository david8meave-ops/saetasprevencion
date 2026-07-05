"use client";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Target, Eye, Compass,
  Award, Cpu, MapPin, TrendingUp, BarChart3, RefreshCw,
} from "lucide-react";

// Contenido adaptado del Manual de Identidad de Saetas (MODELO SAETAS, 2025):
// secciones "Quiénes somos", "Identidad estratégica" y "Propuesta de valor diferencial".

const estandares = [
  { sigla: "ISO 45001", nombre: "Seguridad y Salud en el Trabajo" },
  { sigla: "ISO 9001", nombre: "Gestión de Calidad" },
  { sigla: "ISO 14001", nombre: "Gestión Ambiental" },
];

const identidad = [
  {
    icon: Target,
    title: "Misión",
    text: "Impulsar organizaciones más seguras, eficientes y sostenibles mediante sistemas de gestión que combinan estrategia, tecnología y control para reducir riesgos, optimizar procesos y fortalecer el desempeño empresarial.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser la consultora referente en Latinoamérica en gestión de riesgos, cumplimiento y sostenibilidad, reconocida por transformar la gestión tradicional en sistemas de control con impacto real y medible.",
  },
  {
    icon: Compass,
    title: "Propósito",
    text: "Transformar la forma en que las empresas gestionan sus riesgos, convirtiendo el cumplimiento en una ventaja competitiva real.",
  },
];

const diferenciales = [
  { icon: Award, title: "Expertise técnico", text: "Profesionales con experiencia real en campo y dominio técnico-normativo en SST, medio ambiente y calidad." },
  { icon: Cpu, title: "Innovación digital", text: "IA, IoT y dashboards que convierten los datos operativos en decisiones estratégicas." },
  { icon: MapPin, title: "Presencia regional", text: "Operación activa en Bolivia y Costa Rica, con visión y proyección latinoamericana." },
  { icon: TrendingUp, title: "Cumplimiento como ventaja", text: "Convertimos el cumplimiento normativo de una obligación en una ventaja competitiva medible." },
  { icon: BarChart3, title: "Resultados medibles", text: "Cada intervención genera métricas, indicadores y evidencias que demuestran impacto real." },
  { icon: RefreshCw, title: "Mejora continua", text: "Ciclos PHVA que aseguran que los sistemas evolucionen junto con la organización." },
];

export default function AcercaDe() {
  return (
    <section id="sobre-nosotros" className="py-20" style={{ backgroundColor: "#F4F6F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiénes somos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
              Acerca de Saetas
            </span>
            <h2 className="text-3xl font-bold text-[#16294F] leading-tight">
              Quiénes somos
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#4A5568] leading-relaxed text-lg mb-6">
              En Saetas prevenimos riesgos: somos una consultora estratégica de alto impacto,
              especializada en Sistemas de Gestión y cumplimiento normativo. Acompañamos a
              organizaciones a estructurar, optimizar y proteger su operación, integrando
              Seguridad y Salud Ocupacional, Medio Ambiente, Calidad y Buenas Prácticas de
              Manufactura bajo estándares internacionales. Más de 50 organizaciones confían
              en nuestro equipo para construir una cultura de prevención sólida y sostenible.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {estandares.map((e) => (
                <span
                  key={e.sigla}
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-[#4A5568]"
                >
                  <ShieldCheck size={13} className="text-[#006B52]" />
                  <span className="font-bold text-[#16294F]">{e.sigla}</span> — {e.nombre}
                </span>
              ))}
            </div>
            <a
              href="/contacto"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006B52] hover:gap-2.5 transition-all"
            >
              Habla con nuestro equipo <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Identidad estratégica */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-[#16294F] mb-6">Identidad estratégica</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {identidad.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg bg-white border border-gray-200 p-6 transition-all duration-200 hover:border-[#006B52] hover:shadow-md"
                >
                  <Icon size={26} className="text-[#006B52] mb-3" />
                  <h4 className="text-[#16294F] font-semibold mb-2">{item.title}</h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Propuesta de valor diferencial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-[#16294F] mb-6">
            Propuesta de valor diferencial
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciales.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg bg-white border border-gray-200 p-6 transition-all duration-200 hover:border-[#006B52] hover:shadow-md"
                >
                  <Icon size={24} className="text-[#006B52] mb-3" />
                  <h4 className="text-[#16294F] font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
