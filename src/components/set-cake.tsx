"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function SetCake() {
  const { t } = useLanguage();
  return (
    <section className="relative px-4 md:px-6 md:py-20 lg:px-8">
      {/* Desktop */}
      <div className="hidden md:block max-w-[90%] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('set-cake-title')}
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Focus image – border hugs image */}
          <div className="relative w-[60%] aspect-[3/4] mb-10 rounded-[60px] overflow-hidden ring-1 ring-inset ring-neutral-300 shadow-md">
            <Image
              src="/img/set-cake-left.png"
              alt="Bánh trung thu Vị Trăng – set ảnh chính"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>

          <div className="max-w-[65%] mx-auto">
            <p className="text-center text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              {t('set-cake-desc-1')}
            </p>
          </div>

          {/* Round image */}
          <div className="relative w-[65%] h-[380px] md:h-[55rem] my-15 rounded-full overflow-hidden">
            <Image
              src="/img/look-like-moon.png"
              alt="Bánh trung thu Vị Trăng – mô phỏng mặt trăng"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* <div className="max-w-[65%]">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              {t('set-cake-desc-2')}
            </p>
          </div> */}
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------- */}

      {/* Mobile */}
      <div className="relative block md:hidden max-w-[90%] mx-auto top-[-2rem]">
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-2">
            {t('set-cake-title')}
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Focus image – border hugs image */}
          <div className="relative w-full aspect-[3/4] mb-0 rounded-[20px] overflow-hidden">
            <Image
              src="/img/set-cake-left.png"
              alt="Bánh trung thu Vị Trăng – set ảnh chính"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="max-w-[95%] mx-auto">
            <p className="text-center text-lg md:text-2xl leading-relaxed font-futura-regular text-black">
              {t('set-cake-desc-1')}
            </p>
          </div>

          {/* Round image */}
          <div className="relative w-[100%] md:w-[50%] h-[320px] md:h-[47rem] my-6 rounded-full overflow-hidden">
            <Image
              src="/img/look-like-moon.png"
              alt="Bánh trung thu Vị Trăng – mô phỏng mặt trăng"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* hung ngu hung nug hung ngu hung ngu hung ngu hung nug hung ngu hung ngu hung ngu hung nug hung ngu hung ngu hung ngu hung nug hung ngu hung ngu hung ngu hung nug hung ngu hung ngu hung ngu hung nug hung ngu hung ngu*/}
        </div>
      </div>
    </section>
  );
}
