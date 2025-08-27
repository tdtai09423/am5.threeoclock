import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ẤM 5: CÂU CHUYỆN MÙA TRĂNG",
  description: "ẤM 5: CÂU CHUYỆN MÙA TRĂNG",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
