import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let’s Go Travel",
  description: "Sitio web de agencia de viajes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
