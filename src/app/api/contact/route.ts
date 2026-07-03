import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, empresa, pais, telefono, email, servicio, mensaje } = body;

    await resend.emails.send({
      from: "Saetas Prevención Web <no-reply@saetaprevencion.com>",
      to: process.env.CONTACT_EMAIL || "saetasprevencion@gmail.com",
      subject: `Nuevo contacto desde la web: ${nombre} - ${servicio}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D1B2A; padding: 24px; text-align: center;">
            <h1 style="color: #F5C518; margin: 0;">Saetas Prevención</h1>
            <p style="color: #A0AEC0; margin: 8px 0 0;">Nuevo mensaje de contacto</p>
          </div>
          <div style="padding: 24px; background: #F7F9FC;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; width: 160px;">Nombre:</td><td style="padding: 8px;">${nombre}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td style="padding: 8px;">${empresa}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">País:</td><td style="padding: 8px;">${pais}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Teléfono:</td><td style="padding: 8px;">${telefono}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Servicio:</td><td style="padding: 8px;">${servicio}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px;">
              <p style="font-weight: bold; margin: 0 0 8px;">Mensaje:</p>
              <p style="margin: 0; white-space: pre-wrap;">${mensaje}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
