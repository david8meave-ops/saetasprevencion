"use client";
import { motion } from "framer-motion";
import {
  Shield, FileText, GraduationCap, Map, MapPin,
  AlertTriangle, Activity, ClipboardCheck, Zap, Flame, Scale, ArrowRight,
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
    <section id="servicios" className="py-20" style={{ backgroundColor: "#F4F6F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16294F] mb-4">
            Soluciones Integrales en SYSO
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            Soluciones adaptadas a la normativa vigente de cada país
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-lg bg-white border border-gray-200 transition-all duration-200 hover:border-[#006B52] hover:shadow-md flex flex-col"
              >
                <Icon size={28} className="text-[#006B52] mb-4" />
                <h3 className="text-[#16294F] font-semibold text-sm mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#4A5568] text-xs leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#006B52] hover:gap-2 transition-all"
                >
                  Solicitar <ArrowRight size={13} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm bg-white border border-gray-200 text-[#4A5568]">
            <MapPin size={15} className="text-[#006B52]" />
            Atendemos <span className="font-semibold text-[#16294F]">Bolivia · Costa Rica</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
