"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function CircularHeroSection() {
  const { language } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden mt-3 md:mt-0">
      <div className="relative w-[100vw] h-[150vh] md:h-[230vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-none top-30"
          style={{
            backgroundSize: "100% 110%",
            backgroundImage: `url('${language === 'en' ? "/img/moon-eng.svg" : "/img/moon.svg"}')`,
          }}
        >
          <Image
            fill
            src={language === 'en' ? "/img/moon-mobile-eng.svg" : "/img/moon-mobile.svg"}
            alt="THREE O'CLOCK Building"
            className="block md:hidden rounded-0 md:rounded-[70px] w-full md:w-100 h-[100%] object-cover overflow-visible"
          />
        </div>
      </div>
    </section>
  );
}
