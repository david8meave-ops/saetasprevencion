"use client";
import { motion } from "framer-motion";
import {
  Shield, FileText, GraduationCap, Map,
  AlertTriangle, Activity, ClipboardCheck, Zap, Flame, Scale,
} from "lucide-react";

const services = [
  { icon: Shield, title: "Programas de Seguridad y Salud en el Trabajo (NTS-009)", desc: "Elaboración e implementación de programas SST conforme a la Norma Técnica de Seguridad NTS-009." },
  { icon: Activity, title: "Monitoreos Ocupacionales", desc: "Mediciones de agentes físicos, químicos y ergonómicos en el ambiente de trabajo." },
  { icon: Zap, title: "Planos Eléctricos", desc: "Elaboración y regularización de planos eléctricos para instalaciones industriales y comerciales." },
  { icon: Map, title: "Planos de Evacuación", desc: "Diseño de planos y rutas de evacuación conforme a los requisitos normativos." },
  { icon: Flame, title: "Estudio de Carga de Fuego", desc: "Cálculo y evaluación de carga de fuego para la prevención y protección contra incendios." },
  { icon: AlertTriangle, title: "Señalética de Seguridad (RM 849/14)", desc: "Provisión e instalación de señalización de seguridad según la Resolución Ministerial 849/14." },
  { icon: Scale, title: "Asesoría Legal ante el MTEPS", desc: "Respuesta a informes de inspección del Ministerio de Trabajo, Empleo y Previsión Social." },
  { icon: FileText, title: "Plantillas de Capacitación SST", desc: "Plantillas de capacitaciones en Seguridad y Salud en el Trabajo totalmente editables." },
  { icon: ClipboardCheck, title: "Aplicativos de Documentación", desc: "Aplicativos de documentación SYSO totalmente editables para tu gestión interna." },
  { icon: GraduationCap, title: "Formación Profesional (RM 0329/21)", desc: "Cursos y diplomados de formación profesional con respaldo de la RM 0329/21." },
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
              Bolivia 🇧🇴 · Costa Rica 🇨🇷
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
