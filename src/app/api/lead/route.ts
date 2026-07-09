import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { logLeadToNotion } from "@/lib/notion-leads";

const resend = new Resend(process.env.RESEND_API_KEY);

// Lead liviano (formulario de descargables): registra en Notion y
// notifica por email. Nunca bloquea la descarga del usuario.
export async function POST(req: NextRequest) {
  try {
    const { nombre, email, pais, recurso } = await req.json();

    if (!nombre || typeof nombre !== "string" || !email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const notionLog = logLeadToNotion({
      nombre,
      email,
      pais,
      servicio: recurso ? `Descargable: ${recurso}` : undefined,
      mensaje: recurso ? `Descargó "${recurso}" desde el sitio web.` : undefined,
      fuente: "Descargables",
    });

    const emailSend = resend.emails
      .send({
        from: "Saetas Prevención Web <no-reply@saetasprevencion.com>",
        to: process.env.CONTACT_EMAIL || "saetasprevencion@gmail.com",
        subject: `Nuevo lead de descargables: ${nombre}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #16294F; padding: 20px; text-align: center;">
              <h1 style="color: #00C896; margin: 0; font-size: 20px;">Saetas Prevención</h1>
              <p style="color: #A0AEC0; margin: 6px 0 0;">Nuevo lead — Descargables</p>
            </div>
            <div style="padding: 20px; background: #F4F6F8;">
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>País:</strong> ${pais || "—"}</p>
              <p><strong>Recurso descargado:</strong> ${recurso || "—"}</p>
            </div>
          </div>
        `,
      })
      .catch((e) => console.error("Lead email failed:", e));

    await Promise.all([notionLog, emailSend]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ error: "Error al registrar el lead." }, { status: 500 });
  }
}
