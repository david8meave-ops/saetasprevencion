"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Bolivia */}
      <a
        href="https://wa.me/59160547193?text=Hola%20Saeta%20Prevenci%C3%B3n%2C%20necesito%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Bolivia"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ backgroundColor: "#0D1B2A", border: "2px solid #00A878" }}
      >
        <span className="text-xl">🇧🇴</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-[#00A878] opacity-40"
        />
        <div className="absolute right-14 bg-[#0D1B2A] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#00A878]/30">
          WhatsApp Bolivia
        </div>
      </a>

      {/* WhatsApp Costa Rica */}
      <a
        href="https://wa.me/50670844241?text=Hola%20Saeta%20Prevenci%C3%B3n%2C%20necesito%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Costa Rica"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ backgroundColor: "#0D1B2A", border: "2px solid #00A878" }}
      >
        <span className="text-xl">🇨🇷</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 rounded-full border-2 border-[#00A878] opacity-40"
        />
        <div className="absolute right-14 bg-[#0D1B2A] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#00A878]/30">
          WhatsApp Costa Rica
        </div>
      </a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
