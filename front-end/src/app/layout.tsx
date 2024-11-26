import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: "Taxi Driver - Shooper",
  description: "Desafio técnico Full-Stack da shooper"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
