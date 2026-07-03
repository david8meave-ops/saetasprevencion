"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";
import CheckoutModal from "./CheckoutModal";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, currency, itemCount } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(13,27,42,0.7)" }}
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm z-50 flex flex-col"
              style={{ backgroundColor: "#0D1B2A" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(0,168,120,0.2)" }}>
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-[#00A878]" />
                  <h2 className="text-white font-bold">Carrito ({itemCount})</h2>
                </div>
                <button onClick={closeCart} className="text-[#A0AEC0] hover:text-white transition-colors" aria-label="Cerrar carrito">
                  <X size={20} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag size={48} className="text-[#A0AEC0] mx-auto mb-4 opacity-40" />
                    <p className="text-[#A0AEC0] text-sm">Tu carrito está vacío</p>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-3 items-center" style={{ backgroundColor: "#1A3550", borderRadius: "12px", padding: "12px" }}>
                      <span className="text-3xl">{item.image}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">{item.name}</p>
                        <p className="text-[#00A878] text-sm font-bold mt-0.5">
                          {formatCurrency(currency === "USD" ? item.priceUSD : item.priceBOB, currency)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#00A878] hover:text-[#0D1B2A] transition-all"
                          style={{ backgroundColor: "rgba(0,168,120,0.2)", color: "#00A878" }}
                          aria-label="Reducir cantidad"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-white text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#00A878] hover:text-[#0D1B2A] transition-all"
                          style={{ backgroundColor: "rgba(0,168,120,0.2)", color: "#00A878" }}
                          aria-label="Aumentar cantidad"
                        >
                          <Plus size={10} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 rounded-full flex items-center justify-center ml-1 text-red-400 hover:text-red-300 transition-colors"
                          aria-label="Eliminar"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-5" style={{ borderTop: "1px solid rgba(0,168,120,0.2)" }}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#A0AEC0]">Subtotal</span>
                    <span className="text-white font-bold text-lg">{formatCurrency(total, currency)}</span>
                  </div>
                  <button
                    onClick={() => { setCheckoutOpen(true); closeCart(); }}
                    className="w-full py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
                  >
                    Proceder al pago
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}
