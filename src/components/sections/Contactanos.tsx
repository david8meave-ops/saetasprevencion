"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { Mail, Phone, CheckCircle } from "lucide-react";

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

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors";
  const inputStyle = { backgroundColor: "#F7F9FC", border: "1px solid #e2e8f0" };

  return (
    <section id="contacto" className="py-20" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00A878] mb-3 block">Contáctanos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]">Hablemos de tu Proyecto</h2>
          <p className="text-gray-500 mt-2">Estamos listos para ayudarte a proteger a tu equipo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Te contactaremos pronto. Gracias por tu interés en Saetas Prevención.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#00A878] hover:underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input {...register("nombre")} placeholder="Nombre completo *" className={inputClass} style={inputStyle} />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
                </div>
                <div>
                  <input {...register("empresa")} placeholder="Empresa / Organización *" className={inputClass} style={inputStyle} />
                  {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa.message}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select {...register("pais")} className={inputClass + " bg-white"} style={inputStyle}>
                      <option value="">País *</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.pais && <p className="text-red-500 text-xs mt-1">{errors.pais.message}</p>}
                  </div>
                  <div>
                    <input {...register("telefono")} placeholder="Teléfono / WhatsApp *" className={inputClass} style={inputStyle} />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
                  </div>
                </div>
                <div>
                  <input {...register("email")} type="email" placeholder="Correo electrónico *" className={inputClass} style={inputStyle} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <select {...register("servicio")} className={inputClass + " bg-white"} style={inputStyle}>
                    <option value="">Servicio de interés *</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.servicio && <p className="text-red-500 text-xs mt-1">{errors.servicio.message}</p>}
                </div>
                <div>
                  <textarea {...register("mensaje")} placeholder="Mensaje *" rows={4} className={inputClass} style={inputStyle} />
                  {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] disabled:opacity-70"
                  style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Urgent card */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#0D1B2A", border: "2px solid #00C896" }}>
              <h3 className="text-[#00A878] font-bold text-lg mb-2">¿Necesitas asesoría urgente?</h3>
              <p className="text-white text-sm mb-4">
                Escríbenos por WhatsApp a Bolivia o Costa Rica — respondemos en menos de 24 horas.
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/59160547193" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#00A878] transition-colors text-sm">
                  <Phone size={16} className="text-[#00A878]" /> 🇧🇴 Bolivia: +591 60547193
                </a>
                <a href="https://wa.me/59175758622" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#00A878] transition-colors text-sm">
                  <Phone size={16} className="text-[#00A878]" /> 🇧🇴 Bolivia: +591 75758622
                </a>
                <a href="https://wa.me/50670844241" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#00A878] transition-colors text-sm">
                  <Phone size={16} className="text-[#00A878]" /> 🇨🇷 Costa Rica: +506 70844241
                </a>
                <a href="https://wa.me/50670387373" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#00A878] transition-colors text-sm">
                  <Phone size={16} className="text-[#00A878]" /> 🇨🇷 Costa Rica: +506 70387373
                </a>
              </div>
            </div>

            {/* Contact links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
              <a href="mailto:info@saetasprevencion.com"
                className="flex items-center gap-3 text-[#0D1B2A] hover:text-[#00A878] transition-colors text-sm">
                <Mail size={18} className="text-[#00A878]" /> info@saetasprevencion.com
              </a>
              <a href="https://www.facebook.com/Saetaprevecion" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#0D1B2A] hover:text-[#00A878] transition-colors text-sm">
                <span className="w-[18px] h-[18px] rounded bg-[#00A878] text-[#0D1B2A] flex items-center justify-center text-xs font-bold flex-shrink-0">f</span>
                Facebook: Saetas Prevención
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
