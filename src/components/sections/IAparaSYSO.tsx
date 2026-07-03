"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

const MAX_MESSAGES = 10;

const EXAMPLE_PROMPTS = [
  "¿Qué dice la normativa boliviana sobre comités de seguridad?",
  "¿Cuáles son las obligaciones del empleador en Costa Rica?",
  "¿Qué es la ISO 45001 y cómo aplicarla en mi empresa?",
  "¿Qué EPP son obligatorios en actividades de construcción?",
  "¿Cómo hacer una investigación de accidentes?",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3 rounded-2xl rounded-bl-none w-fit" style={{ backgroundColor: "#1A3550" }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#00A878" }}
        />
      ))}
    </div>
  );
}

export default function IAparaSYSO() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy el asistente de Saetas Prevención especializado en Salud y Seguridad Ocupacional. Puedo ayudarte con normativas SYSO de Bolivia, Costa Rica y toda Latinoamérica. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || messageCount >= MAX_MESSAGES) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setMessageCount(prev => prev + 1);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.message || data.error }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Lo siento, ocurrió un error. Por favor intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ia-syso" className="py-20" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00A878] mb-3 block">
            Tecnología + Prevención
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Asistente IA de Seguridad Ocupacional
          </h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto">
            Consulta normativas SYSO de Bolivia, Costa Rica y toda Latinoamérica — respuestas inmediatas
          </p>
        </div>

        {/* Chat interface */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,168,120,0.2)" }}>
          {/* Messages */}
          <div
            className="chat-scroll overflow-y-auto p-6 space-y-4"
            style={{ height: "400px", backgroundColor: "#0D1B2A" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-3`}
              >
                {msg.role === "assistant" && (
                  <Image src="/logo.svg" alt="SP" width={32} height={32} className="rounded-full bg-white p-0.5 flex-shrink-0 mt-1" />
                )}
                <div
                  className="max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={
                    msg.role === "user"
                      ? { backgroundColor: "#00A878", color: "#0D1B2A", borderRadius: "18px 18px 4px 18px" }
                      : { backgroundColor: "#1A3550", color: "white", borderRadius: "18px 18px 18px 4px" }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start gap-3">
                <Image src="/logo.svg" alt="SP" width={32} height={32} className="rounded-full bg-white p-0.5 flex-shrink-0" />
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Example prompts */}
          <div className="px-6 py-3 flex flex-wrap gap-2" style={{ backgroundColor: "#1A3550", borderTop: "1px solid rgba(0,168,120,0.1)" }}>
            {EXAMPLE_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => sendMessage(prompt)}
                disabled={isLoading || messageCount >= MAX_MESSAGES}
                className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-[1.02] disabled:opacity-50"
                style={{ backgroundColor: "rgba(0,168,120,0.15)", color: "#00A878", border: "1px solid rgba(0,168,120,0.3)" }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 flex gap-3" style={{ backgroundColor: "#1A3550", borderTop: "1px solid rgba(0,168,120,0.1)" }}>
            {messageCount >= MAX_MESSAGES ? (
              <div className="flex-1 text-center text-[#A0AEC0] text-sm py-2">
                Límite de consultas alcanzado.{" "}
                <a href="#contacto" className="text-[#00A878] hover:underline">Contáctanos</a> para asesoría personalizada.
              </div>
            ) : (
              <>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
                  placeholder="Escribe tu consulta sobre SYSO..."
                  className="flex-1 bg-transparent text-white placeholder-[#A0AEC0] text-sm outline-none"
                  disabled={isLoading}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  aria-label="Enviar mensaje"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50"
                  style={{ backgroundColor: "#00A878" }}
                >
                  <Send size={16} style={{ color: "#0D1B2A" }} />
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-[#A0AEC0] text-xs mt-4 max-w-2xl mx-auto">
          Este asistente ofrece información general sobre normativa SYSO. Para asesoría específica a tu empresa y país,{" "}
          <a href="#contacto" className="text-[#00A878] hover:underline">contáctanos directamente</a>.
        </p>
      </div>
    </section>
  );
}
