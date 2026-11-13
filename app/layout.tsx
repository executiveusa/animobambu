import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QUIÉN ES BAMBÚ",
  description: "Historia, trabajo, proyectos y bitácora de Bambú.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
