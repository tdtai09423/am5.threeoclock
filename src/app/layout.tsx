import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
      <body className="relative">
        <LanguageProvider>
          {/* Global cloud overlays (two sides) */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-y-0 left-0 w-1/2 bg-[url('/img/cloud.png')] bg-left bg-repeat-y bg-no-repeat bg-[length:auto_320px] md:bg-[length:auto_420px] opacity-70 z-0"
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-y-0 right-0 w-1/2 bg-[url('/img/cloud.png')] bg-right bg-repeat-y bg-no-repeat bg-[length:auto_320px] md:bg-[length:auto_420px] opacity-70 z-0"
          />

          <div className="relative z-10">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
