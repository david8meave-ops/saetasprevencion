"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AcercaDe() {
  return (
    <section id="sobre-nosotros" className="py-20" style={{ backgroundColor: "#F4F6F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Expertos en Salud y Seguridad Ocupacional
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#4A5568] leading-relaxed text-lg mb-6">
              Saetas Prevención es una empresa de consultoría especializada en Salud y Seguridad
              Ocupacional con presencia en Bolivia y Costa Rica. Nuestro equipo de profesionales
              certificados ayuda a las organizaciones a proteger a sus colaboradores, cumplir con
              la normativa legal vigente y construir una cultura de prevención sólida y sostenible.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006B52] hover:gap-2.5 transition-all"
            >
              Habla con nuestro equipo <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
