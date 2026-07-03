import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().min(2, "Ingresa el nombre de tu empresa u organización"),
  pais: z.string().min(1, "Selecciona tu país"),
  telefono: z.string().min(7, "Ingresa un número de teléfono válido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  servicio: z.string().min(1, "Selecciona el servicio de interés"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const downloadSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  pais: z.string().min(1, "Selecciona tu país"),
  email: z.string().email("Ingresa un correo electrónico válido"),
});

export type DownloadFormData = z.infer<typeof downloadSchema>;
