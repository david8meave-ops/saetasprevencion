"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

const LATAM_COUNTRIES = ["Bolivia", "Costa Rica", "Colombia", "Perú", "Ecuador", "Guatemala", "Honduras", "Panamá", "México", "Otro"];

type Step = "info" | "payment" | "confirmation";

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
}

export default function CheckoutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, total, currency, itemCount } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [info, setInfo] = useState<CustomerInfo>({ name: "", email: "", phone: "", country: "", address: "" });

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm bg-[#1A3550] text-white placeholder-[#A0AEC0] border border-[#00A878]/20 focus:outline-none focus:border-[#00A878]/60 transition-colors";

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(13,27,42,0.9)" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="rounded-2xl w-full max-w-lg overflow-hidden"
            style={{ backgroundColor: "#0D1B2A", border: "1px solid rgba(0,168,120,0.2)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(0,168,120,0.15)" }}>
              <h2 className="text-white font-bold">
                {step === "info" && "Datos del pedido"}
                {step === "payment" && "Pago seguro"}
                {step === "confirmation" && "¡Pedido confirmado!"}
              </h2>
              <button onClick={onClose} className="text-[#A0AEC0] hover:text-white transition-colors" aria-label="Cerrar">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {/* Step 1: Customer Info */}
              {step === "info" && (
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <input required value={info.name} onChange={e => setInfo(p => ({...p, name: e.target.value}))} placeholder="Nombre completo *" className={inputClass} />
                    </div>
                    <input required type="email" value={info.email} onChange={e => setInfo(p => ({...p, email: e.target.value}))} placeholder="Correo *" className={inputClass} />
                    <input required value={info.phone} onChange={e => setInfo(p => ({...p, phone: e.target.value}))} placeholder="Teléfono *" className={inputClass} />
                    <div className="col-span-2">
                      <select required value={info.country} onChange={e => setInfo(p => ({...p, country: e.target.value}))} className={inputClass}>
                        <option value="">País *</option>
                        {LATAM_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <input required value={info.address} onChange={e => setInfo(p => ({...p, address: e.target.value}))} placeholder="Dirección de entrega *" className={inputClass} />
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="rounded-lg p-4 space-y-2" style={{ backgroundColor: "#1A3550" }}>
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-[#A0AEC0]">{item.name} x{item.quantity}</span>
                        <span className="text-white">{formatCurrency((currency === "USD" ? item.priceUSD : item.priceBOB) * item.quantity, currency)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold pt-2" style={{ borderTop: "1px solid rgba(0,168,120,0.2)" }}>
                      <span className="text-[#00A878]">Total ({itemCount} items)</span>
                      <span className="text-white">{formatCurrency(total, currency)}</span>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-3 rounded-xl font-bold transition-all hover:scale-[1.02]" style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}>
                    Continuar al pago
                  </button>
                </form>
              )}

              {/* Step 2: Payment */}
              {step === "payment" && (
                <div className="space-y-4">
                  <div className="rounded-lg p-4" style={{ backgroundColor: "#1A3550" }}>
                    <div className="flex justify-between font-bold">
                      <span className="text-[#00A878]">Total a pagar</span>
                      <span className="text-white text-lg">{formatCurrency(total, "USD")}</span>
                    </div>
                    <p className="text-[#A0AEC0] text-xs mt-1">Los pagos de PayPal se procesan en USD</p>
                  </div>

                  {/* PayPal integration placeholder */}
                  <div className="rounded-lg p-6 text-center space-y-4" style={{ backgroundColor: "#1A3550", border: "1px solid rgba(0,168,120,0.2)" }}>
                    <p className="text-[#A0AEC0] text-sm">
                      {/* TODO: Replace with actual PayPal buttons once NEXT_PUBLIC_PAYPAL_CLIENT_ID is configured */}
                      Integración de PayPal lista — configura tu Client ID en .env.local
                    </p>
                    <code className="text-xs text-[#00A878] block">NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_id</code>

                    {/* Simulated PayPal button for preview */}
                    <button
                      onClick={() => setStep("confirmation")}
                      className="w-full py-3 rounded-xl font-bold text-white transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: "#003087" }}
                    >
                      💳 Pagar con PayPal (demo)
                    </button>

                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xs text-[#A0AEC0]">🔒 Pagos 100% seguros</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[#A0AEC0] text-xs">¿Prefieres transferencia bancaria?</p>
                    <a href="#contacto" onClick={onClose} className="text-[#00A878] text-xs hover:underline">Contáctanos directamente</a>
                  </div>

                  <button onClick={() => setStep("info")} className="w-full py-2 text-[#A0AEC0] text-sm hover:text-white transition-colors">
                    ← Volver
                  </button>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === "confirmation" && (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle size={64} className="text-green-500 mx-auto" />
                  <h3 className="text-xl font-bold text-white">¡Pedido confirmado!</h3>
                  <p className="text-[#A0AEC0] text-sm">Gracias por tu compra. Recibirás un correo de confirmación en {info.email}.</p>
                  <div className="rounded-lg p-4" style={{ backgroundColor: "#1A3550" }}>
                    <p className="text-[#00A878] text-sm font-semibold mb-2">Resumen del pedido</p>
                    {items.map(item => (
                      <p key={item.id} className="text-white text-xs">{item.name} x{item.quantity}</p>
                    ))}
                    <p className="text-[#00A878] font-bold mt-2">{formatCurrency(total, "USD")}</p>
                  </div>
                  <button onClick={onClose} className="w-full py-3 rounded-xl font-bold transition-all" style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}>
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
