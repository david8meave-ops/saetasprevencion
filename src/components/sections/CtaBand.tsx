"use client";
import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section className="py-16" style={{ backgroundColor: "#16294F" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para transformar el cumplimiento en ventaja competitiva?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Cuéntanos tu situación y te proponemos un plan de acción conforme a la
            normativa de tu país.
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3.5 rounded-md font-semibold text-base text-white transition-colors hover:bg-[#00553F]"
            style={{ backgroundColor: "#006B52" }}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
