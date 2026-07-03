import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saetasprevencion.com"),
  title: "Saetas Prevención | Consultoría SYSO para Latinoamérica",
  description:
    "Empresa consultora en Salud y Seguridad Ocupacional con presencia en Bolivia, Costa Rica y toda LATAM. Capacitaciones, asesoría, planes de emergencia y más.",
  keywords:
    "salud ocupacional LATAM, seguridad industrial Bolivia, SYSO Costa Rica, consultoría SSO latinoamérica, Saetas Prevención",
  openGraph: {
    title: "Saetas Prevención — SYSO para toda Latinoamérica",
    description:
      "Consultoría profesional en Salud y Seguridad Ocupacional — Bolivia, Costa Rica y LATAM",
    url: "https://www.saetasprevencion.com",
    siteName: "Saetas Prevención",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* TODO: Replace G-XXXXXXXXXX with your Google Analytics 4 tracking ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D1B2A" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
