import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Eres un asistente experto en Salud y Seguridad Ocupacional (SSO/SYSO) con amplio conocimiento de la normativa en toda Latinoamérica. Dominas: Bolivia (Decreto Supremo 2936, Ley General del Trabajo, INSO), Costa Rica (Ley 6727, Código de Trabajo, Consejo de Salud Ocupacional), Colombia (Decreto 1072, resoluciones SGSST), Perú (Ley 29783), Ecuador (IESS), Guatemala, Honduras, Panamá, y estándares internacionales ISO 45001 y OHSAS 18001. Representas a Saetas Prevención, empresa consultora SYSO con presencia en toda la región. Contacto: WhatsApp Bolivia +591 60547193, WhatsApp Costa Rica +506 70844241, email saetasprevencion@gmail.com. Responde siempre en español, de forma clara y profesional. Cuando corresponda, indica a qué país aplica la normativa mencionada. Siempre invita a contactar a Saetas Prevención para asesoría personalizada.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return NextResponse.json({ error: "Unexpected response type" }, { status: 500 });
    }

    return NextResponse.json({ message: content.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Error al procesar tu consulta. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
