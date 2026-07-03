"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          style={{ backgroundColor: "#0D1B2A", borderTop: "1px solid rgba(0,168,120,0.2)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#A0AEC0] text-sm text-center sm:text-left">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra{" "}
              <a href="#" className="text-[#00A878] hover:underline">Política de Privacidad</a>.
            </p>
            <button
              onClick={accept}
              className="flex-shrink-0 px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
