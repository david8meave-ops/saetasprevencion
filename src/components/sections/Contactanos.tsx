"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { CheckCircle } from "lucide-react";

const services = [
  "Programas de Seguridad y Salud en el Trabajo (NTS-009)",
  "Monitoreos Ocupacionales",
  "Planos Eléctricos",
  "Planos de Evacuación",
  "Estudio de Carga de Fuego",
  "Señalética de Seguridad (RM 849/14)",
  "Asesoría Legal ante el MTEPS",
  "Plantillas de Capacitación SST",
  "Aplicativos de Documentación",
  "Formación Profesional (RM 0329/21)",
  "Otro",
];

const countries = ["Bolivia", "Costa Rica", "Otro"];

const inputClass =
  "w-full px-3.5 py-2.5 rounded-md text-sm bg-white border border-gray-300 focus:outline-none focus:border-[#006B52] focus:ring-2 focus:ring-[#006B52]/15 transition-colors";
const labelClass = "block text-sm font-medium text-[#16294F] mb-1.5";

export default function Contactanos() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      alert("Error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#16294F]">
            Contáctanos
          </h1>
          <p className="text-lg text-[#4A5568] mt-3 max-w-xl mx-auto">
            Cuéntanos tu situación y te respondemos en menos de 24 horas
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg p-8 border border-gray-200"
          style={{ backgroundColor: "#F4F6F8" }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={56} className="text-[#006B52] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#16294F] mb-2">¡Mensaje enviado!</h3>
              <p className="text-[#4A5568]">
                Te contactaremos pronto. Gracias por tu interés en Saetas Prevención.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-[#006B52] hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="nombre" className={labelClass}>Nombre completo *</label>
                <input id="nombre" {...register("nombre")} className={inputClass} />
                {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre.message}</p>}
              </div>
              <div>
                <label htmlFor="empresa" className={labelClass}>Empresa / Organización *</label>
                <input id="empresa" {...register("empresa")} className={inputClass} />
                {errors.empresa && <p className="text-red-600 text-xs mt-1">{errors.empresa.message}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pais" className={labelClass}>País *</label>
                  <select id="pais" {...register("pais")} className={inputClass}>
                    <option value="">Selecciona…</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.pais && <p className="text-red-600 text-xs mt-1">{errors.pais.message}</p>}
                </div>
                <div>
                  <label htmlFor="telefono" className={labelClass}>Teléfono / WhatsApp *</label>
                  <input id="telefono" {...register("telefono")} className={inputClass} />
                  {errors.telefono && <p className="text-red-600 text-xs mt-1">{errors.telefono.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Correo electrónico *</label>
                <input id="email" {...register("email")} type="email" className={inputClass} />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="servicio" className={labelClass}>Servicio de interés *</label>
                <select id="servicio" {...register("servicio")} className={inputClass}>
                  <option value="">Selecciona…</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.servicio && <p className="text-red-600 text-xs mt-1">{errors.servicio.message}</p>}
              </div>
              <div>
                <label htmlFor="mensaje" className={labelClass}>Mensaje *</label>
                <textarea id="mensaje" {...register("mensaje")} rows={4} className={inputClass} />
                {errors.mensaje && <p className="text-red-600 text-xs mt-1">{errors.mensaje.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-md font-semibold text-base text-white transition-colors hover:bg-[#00553F] disabled:opacity-70"
                style={{ backgroundColor: "#006B52" }}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
