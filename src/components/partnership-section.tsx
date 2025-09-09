"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function PartnershipSection() {
  const { t } = useLanguage();
  return (
    <section className="relative px-4 md:px-6 lg:px-8">
      {/* Decorative stars */}
      {/* <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div> */}

      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Desktop version */}
        <div className="text-center mb-14">
          <h2
            className="text-lg md:text-8xl font-extrabold text-black font-snell tracking-wide mb-20"
            dangerouslySetInnerHTML={{ __html: t('chapter-1') }}
          />
          <h2 className="text-lg md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('event-title-1')}
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('event-title-2')}
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Hospital image */}
          <div className="relative w-[70%] h-[380px] md:h-[600px] mb-10">
            <Image
              src="/img/su-kien-nhan-tem.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center rounded-[80px] shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="max-w-[65%]">
            <p
              className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black"
              dangerouslySetInnerHTML={{ __html: t('event-description') }}
            />
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="relative block md:hidden max-w-[100%] mx-auto top-[-2rem]">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-8xl font-extrabold text-black font-snell tracking-wide mb-5"
            dangerouslySetInnerHTML={{ __html: t('chapter-1') }}
          />
          <h2 className="text-md md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-0">
            {t('event-title-1')}
          </h2>
          <h2 className="text-md md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            {t('event-title-2')}
          </h2>
          <div className="w-70 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Hospital image */}
          <div className="relative w-[90%] md:w-[70%] h-[230px] md:h-[600px] mb-5">
            <Image
              src="/img/su-kien-nhan-tem.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center rounded-[30px] shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="max-w-[80%]">
            <p
              className="text-justify text-md md:text-2xl leading-relaxed font-futura-regular text-black"
              dangerouslySetInnerHTML={{ __html: t('event-description') }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
