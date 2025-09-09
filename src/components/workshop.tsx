"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Workshop() {
  const { t } = useLanguage();
  return (
    <section className="relative px-4 md:px-6 lg:px-8">
      {/* =================== DESKTOP (>= md) =================== */}
      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('workshop-title')}
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto" />
        </div>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          

          {/* === Image grid (to bự ra) === */}
          <div className="w-full grid grid-cols-2 gap-6 mt-10">
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/1.png"
                alt="Team photo"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/2.png"
                alt="Art supplies"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative col-span-2 aspect-[3/2] rounded-[15px] overflow-hidden">
              <Image
                src="/img/3.png"
                alt="Handmade crafts"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================== MOBILE (< md) =================== */}
      <div className="relative block md:hidden max-w-[90%] mx-auto top-[-2rem]">
        <div className="text-center mb-14">
          <h2 className="text-xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('workshop-title')}
          </h2>
          <div className="w-48 h-0.5 bg-gray-600 mx-auto" />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6">

          {/* === Image grid (to bự ra) === */}
          <div className="w-full grid grid-cols-2 gap-6 mt-10 mb-8">
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/1.png"
                alt="Team photo"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/2.png"
                alt="Art supplies"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative col-span-2 aspect-[3/2] rounded-[15px] overflow-hidden">
              <Image
                src="/img/3.png"
                alt="Handmade crafts"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
