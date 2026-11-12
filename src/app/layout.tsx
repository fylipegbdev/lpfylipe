import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./lp.css";

const head = Bricolage_Grotesque({
  variable: "--font-head",
  subsets: ["latin"],
  axes: ["opsz"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Fylipe Gabriel — Designer gráfico",
  description:
    "Crio conteúdo e identidades visuais que fazem a sua marca ser reconhecida e lembrada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
