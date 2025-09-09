"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CooperateWith() {
  const { t } = useLanguage();
  return (
    <>
      {/* ================= DESKTOP (>= md) ================= */}
      <section className="hidden md:block py-30 px-6">
        <div className="max-w-[80%] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-8xl font-bold text-black mb-4 font-snell tracking-wide mb-[13rem]"
              dangerouslySetInnerHTML={{ __html: t('chapter-2') }}
            />
            <h2 className="text-4xl md:text-4xl font-bold text-black font-futura-bold tracking-wide">
              {t('cooperate-title-1')}
            </h2>
            <h2 className="text-4xl md:text-4xl font-bold text-black font-futura-bold tracking-wide mb-4">
              {t('cooperate-title-2')}
            </h2>
            <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto" />
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-12">
            {/* Left - Avatar */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[85%] h-[380px] md:h-[600px] mb-2">
                <Image
                  src="/img/dien-vien-tri-tam-small-pic.svg"
                  alt="Diễn viên Chí Tâm"
                  fill
                  className="object-cover object-center rounded-full shadow-lg"
                  sizes="(min-width: 1024px) 35vw, 85vw"
                />
              </div>
              <div className="w-full text-center font-futura-bold text-4xl text-black mt-2">
                {t('actor-name')}
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-8">
              <p className="font-futura-regular text-justify text-xl text-black leading-relaxed">
                {t('cooperate-desc-1')}
              </p>
              <p
                className="font-futura-regular text-justify text-xl text-black leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('cooperate-desc-2') }}
              />
            </div>
          </div>

          {/* Image Grid (DESKTOP) — Giữ thứ tự: 1,2 ở trên; 3 ở dưới full width */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image src="/img/1.png" alt="Team photo" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image src="/img/2.png" alt="Art supplies" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative col-span-2 aspect-[3/2] rounded-[15px] overflow-hidden">
              <Image src="/img/3.png" alt="Handmade crafts" fill className="object-cover" sizes="100vw" />
            </div>
          </div> */}
        </div>
      </section>

      {/* ================= MOBILE (< md) ================= */}
      <section className="block md:hidden py-10 px-6">
        <div className="max-w-[100%] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-black mb-8 font-snell tracking-wide"
              dangerouslySetInnerHTML={{ __html: t('chapter-2') }}
            />
            <h2 className="text-md font-bold text-black font-futura-bold tracking-wide">
              {t('cooperate-title-1')}
            </h2>
            <h2 className="text-md font-bold text-black font-futura-bold tracking-wide mb-2">
              {t('cooperate-title-2')}
            </h2>
            <div className="w-80 h-0.5 bg-gray-600 mx-auto" />
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 gap-3 items-center mb-12">
            {/* Avatar */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[85%] h-[320px] mb-2">
                <Image
                  src="/img/dien-vien-tri-tam-small-pic.svg"
                  alt="Diễn viên Chí Tâm"
                  fill
                  className="object-cover object-center rounded-full shadow-lg"
                  sizes="100vw"
                />
              </div>
              <div className="w-full text-center font-futura-bold text-3xl text-black mt-2">
                {t('actor-name')}
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5 pt-6">
              <p className="font-futura-regular text-justify text-md text-black leading-relaxed">
                {t('cooperate-desc-1')}
              </p>
              <p
                className="font-futura-regular text-justify text-md text-black leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('cooperate-desc-2') }}
              />
            </div>
          </div>

          {/* Image Grid (MOBILE) — cùng thứ tự như desktop */}
          {/* <div className="grid grid-cols-2 gap-6 mt-2">
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image src="/img/1.png" alt="Team photo" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image src="/img/2.png" alt="Art supplies" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
          <div className="relative aspect-[3/2] rounded-[15px] overflow-hidden mt-4 w-full">
            <Image src="/img/3.png" alt="Handmade crafts" fill className="object-cover" sizes="100vw" />
          </div> */}
        </div>

        {/* Extra text block */}

      </section>
    </>
  );
}
