"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { downloadSchema, DownloadFormData } from "@/lib/validations";

const resources = [
  { id: 1, title: "Plantilla de Reglamento Interno de Trabajo", desc: "Documento base para elaborar el reglamento interno de tu empresa.", badge: "LATAM", file: "/downloads/reglamento-interno.pdf" },
  { id: 2, title: "Checklist de Equipos de Protección Personal (EPP)", desc: "Lista de verificación completa para la gestión de EPP.", badge: "LATAM", file: "/downloads/checklist-epp.pdf" },
  { id: 3, title: "Guía de Investigación de Accidentes", desc: "Metodología paso a paso para investigar accidentes laborales.", badge: "LATAM", file: "/downloads/guia-investigacion-accidentes.pdf" },
  { id: 4, title: "Formulario de Reporte de Incidentes", desc: "Formato estándar para documentar y reportar incidentes.", badge: "LATAM", file: "/downloads/formulario-reporte-incidentes.pdf" },
  { id: 5, title: "Plan de Emergencias — Plantilla Base", desc: "Estructura completa para desarrollar el plan de emergencias.", badge: "LATAM", file: "/downloads/plan-emergencias-plantilla.pdf" },
  { id: 6, title: "Matriz de Identificación de Peligros y Riesgos", desc: "Herramienta para identificar, valorar y controlar riesgos.", badge: "LATAM", file: "/downloads/matriz-identificacion-peligros.pdf" },
];

const countries = ["Bolivia", "Costa Rica", "Colombia", "Perú", "Ecuador", "Guatemala", "Honduras", "Panamá", "México", "Otro"];

export default function Descargables() {
  const [pendingFile, setPendingFile] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DownloadFormData>({ resolver: zodResolver(downloadSchema) });

  const onSubmit = (data: DownloadFormData) => {
    // Registra el lead (Notion + email); la descarga no depende del resultado.
    const recurso = resources.find((d) => d.file === pendingFile)?.title;
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recurso }),
    }).catch(() => {});

    setSuccess(true);
    setTimeout(() => {
      if (pendingFile) {
        const link = document.createElement("a");
        link.href = pendingFile;
        link.download = "";
        link.click();
      }
      setPendingFile(null);
      setSuccess(false);
      reset();
    }, 1500);
  };

  return (
    <section id="descargables" className="py-20" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00A878] mb-3 block">
            Recursos Gratuitos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4">Descargables SYSO</h2>
          <p className="text-gray-500">Recursos gratuitos para empresas de toda la región</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#00A878" }}>
                  <FileDown size={18} style={{ color: "#0D1B2A" }} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block" style={{ backgroundColor: "#0D1B2A", color: "#00A878" }}>
                    {res.badge}
                  </span>
                  <h3 className="font-semibold text-[#0D1B2A] text-sm leading-snug">{res.title}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-xs mb-4 flex-1">{res.desc}</p>
              <button
                onClick={() => setPendingFile(res.file)}
                className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#0D1B2A", color: "#00A878" }}
              >
                Descargar Gratis
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Email gate modal */}
      <AnimatePresence>
        {pendingFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(13,27,42,0.85)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => { setPendingFile(null); reset(); setSuccess(false); }}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              {success ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">¡Descarga iniciando!</h3>
                  <p className="text-gray-500 text-sm">Gracias por tu interés en los recursos de Saetas Prevención.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Accede al recurso gratuito</h3>
                  <p className="text-gray-500 text-sm mb-6">Ingresa tus datos para descargar este recurso.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input {...register("nombre")} placeholder="Nombre completo" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#00A878]" />
                      {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                    </div>
                    <div>
                      <select {...register("pais")} className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#00A878] bg-white">
                        <option value="">Selecciona tu país</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      {errors.pais && <p className="text-red-500 text-xs mt-1">{errors.pais.message}</p>}
                    </div>
                    <div>
                      <input {...register("email")} type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#00A878]" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg font-bold text-sm transition-all hover:scale-[1.02] disabled:opacity-70"
                      style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
                    >
                      {isSubmitting ? "Procesando..." : "Descargar Ahora"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
