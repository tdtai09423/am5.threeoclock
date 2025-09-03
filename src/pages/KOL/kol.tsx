
import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full overflow-x-hidden p-0 flex flex-col items-center bg-[url('/img/bg-kol.svg')] bg-top bg-no-repeat bg-[length:100%_auto]">
      {/* Top Section */}
      <div className="w-full max-w-none flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-0 w-full">
          <Image
            src="/img/dien-vien-tri-tam-large-pic.svg"
            alt="Diễn viên Trí Tâm"
            width={3000}
            height={1500}
            priority
            sizes="100vw"
            className="w-full h-auto"    
          />
        </div>
      </div>


      {/* Bottom Section */}
<section className="w-full max-w-[2200px] mx-auto px-4 md:px-10 py-10 md:py-14">
  {/* mobile 1 cột, desktop tỉ lệ 2 : 2.75 */}
  <div className="grid grid-cols-1 md:grid-cols-[2fr_2.75fr] items-start gap-8 md:gap-0">
    {/* LEFT: avatar */}
    <div className="w-full md:w-full max-w-none mx-auto md:mx-0 md:pl-[10em]">
      <Image
        src="/img/bubble-ava.svg"
        alt="Avatar"
        width={1200}
        height={1200}
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, 100vw"
        className="w-full h-auto"
        priority={false}
      />
    </div>

    {/* RIGHT: speech bubble */}
    <div
      className="
        relative mx-auto
        w-full
        md:w-[calc(100%+24px)] md:ml-[-24px]
        lg:w-[calc(100%+36px)] lg:ml-[-36px]
        xl:w-[calc(100%+48px)] xl:ml-[-48px]
        aspect-[4/3] md:aspect-[14/10] lg:aspect-[15/10]
      "
    >
      <Image
        src="/img/bubble.svg"
        alt="Khung thoại"
        fill
        className="object-contain object-center"
        sizes="(min-width: 1280px) 75vw, (min-width: 1024px) 75vw, 100vw"
        priority={false}
      />
    </div>
  </div>
</section>


    </div>
  );
}