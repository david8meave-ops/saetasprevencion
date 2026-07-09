// Registro de leads en la base "Saetas — Leads" de Notion.
// Requiere NOTION_API_KEY (integración interna de Notion, conectada a la base)
// y NOTION_LEADS_DB_ID. Si faltan, la función no hace nada: el email sigue
// siendo el canal primario y el sitio nunca falla por Notion.

export type Lead = {
  nombre: string;
  email?: string;
  empresa?: string;
  pais?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
  fuente: "Formulario de contacto" | "Descargables" | "Chatbot";
};

const richText = (v?: string) =>
  v ? { rich_text: [{ text: { content: v.slice(0, 1900) } }] } : undefined;

export async function logLeadToNotion(lead: Lead): Promise<void> {
  const key = process.env.NOTION_API_KEY;
  const db = process.env.NOTION_LEADS_DB_ID;
  if (!key || !db || key.startsWith("your_")) return;

  const paisOption = ["Bolivia", "Costa Rica"].includes(lead.pais ?? "")
    ? lead.pais
    : lead.pais
      ? "Otro"
      : undefined;

  const properties: Record<string, unknown> = {
    Nombre: { title: [{ text: { content: lead.nombre.slice(0, 200) } }] },
    Fuente: { select: { name: lead.fuente } },
    Estado: { select: { name: "Nuevo" } },
  };
  if (lead.email) properties["Email"] = { email: lead.email };
  if (lead.telefono) properties["Teléfono"] = { phone_number: lead.telefono };
  if (paisOption) properties["País"] = { select: { name: paisOption } };
  const empresa = richText(lead.empresa);
  if (empresa) properties["Empresa"] = empresa;
  const servicio = richText(lead.servicio);
  if (servicio) properties["Servicio"] = servicio;
  const mensaje = richText(lead.mensaje);
  if (mensaje) properties["Mensaje"] = mensaje;

  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ parent: { database_id: db }, properties }),
    });
    if (!res.ok) {
      console.error("Notion lead log failed:", res.status, await res.text());
    }
  } catch (error) {
    console.error("Notion lead log error:", error);
  }
}
