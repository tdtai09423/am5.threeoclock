"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InfoCard() {
  const { t } = useLanguage();
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom,#F5D9C1,#F4B47B)] md:bg-[linear-gradient(to_bottom,#EAD8CA,#EAC4A2)] p-0 rounded-t-[80px] rounded-b-[40px] md:rounded-t-[70px] md:rounded-b-[70px] max-w-7xl mx-7 md:mx-auto md:mt-25">
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center p-0">
          {/* Left side - Image */}
          <div className="flex-shrink-0 h-[100%] w-auto">
            <Image
              width={400}
              height={400}
              src="/img/ava.png"
              alt="THREE O'CLOCK Building"
              className="rounded-[80px] md:rounded-[70px] w-full md:w-100 h-[100%] object-cover shadow-lg pl-0"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 space-y-4 text-md md:text-2xl p-5 md:p-10 text-justify pb-12 md:pb-5">
            <p
              className="text-black leading-relaxed font-futura-regular"
              dangerouslySetInnerHTML={{ __html: t('info-desc-1') }}
            />

            <p
              className="text-black leading-relaxed font-futura-regular"
              dangerouslySetInnerHTML={{ __html: t('info-desc-2') }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
