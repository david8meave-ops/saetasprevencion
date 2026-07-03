"use client";
import { motion } from "framer-motion";
import {
  Shield, FileText, Search, GraduationCap,
  AlertTriangle, Activity, ClipboardCheck, Briefcase,
} from "lucide-react";

const services = [
  { icon: Shield, title: "Asesoría en Comisiones de Salud Ocupacional", desc: "Constitución, capacitación y seguimiento de comisiones SYSO conforme a la normativa local." },
  { icon: FileText, title: "Elaboración de Reglamentos y Políticas", desc: "Documentos legales y procedimientos internos adaptados a cada empresa y país." },
  { icon: Search, title: "Investigación y Análisis de Accidentes", desc: "Metodología sistemática para identificar causas y evitar recurrencias." },
  { icon: GraduationCap, title: "Capacitaciones SYSO", desc: "Formación presencial y virtual para todos los niveles de la organización." },
  { icon: AlertTriangle, title: "Planes de Emergencia y Evacuación", desc: "Diseño, implementación y simulacros de planes de respuesta ante emergencias." },
  { icon: Activity, title: "Evaluación y Gestión de Riesgos", desc: "Identificación, valoración y control de peligros en el ambiente laboral." },
  { icon: ClipboardCheck, title: "Auditorías de Seguridad", desc: "Diagnóstico del sistema de gestión SYSO con recomendaciones concretas." },
  { icon: Briefcase, title: "Trámites y Permisos Legales", desc: "Gestión ante instituciones gubernamentales para cumplimiento normativo." },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00A878] mb-3 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Soluciones Integrales en SYSO
          </h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de SYSO adaptadas a la normativa de cada país de la región
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-xl cursor-default transition-all group"
                style={{
                  backgroundColor: "#1A3550",
                  border: "1px solid rgba(0,168,120,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,168,120,0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,168,120,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,168,120,0.15)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="mb-4">
                  <Icon size={32} className="text-[#00A878]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#A0AEC0] text-xs leading-relaxed mb-4">
                  {service.desc}
                </p>
                <a
                  href="#contacto"
                  className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105"
                  style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
                >
                  Solicitar
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-block px-6 py-3 rounded-full text-sm"
            style={{
              backgroundColor: "#1A3550",
              border: "1px solid rgba(0,168,120,0.3)",
              color: "#A0AEC0",
            }}
          >
            🌎 Atendemos:{" "}
            <span style={{ color: "#00A878" }}>
              Bolivia · Costa Rica · Perú · Colombia · Ecuador · Guatemala · Honduras · Panamá · y más
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
