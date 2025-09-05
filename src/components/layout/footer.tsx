import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative px-0 py-0 bg-transparent overflow-hidden pt-1 md:mt-40 pb-1 md:pb-10">
      {/* 96vw = chừa ~2% mỗi bên; center theo viewport, không bị max-w cha bó */}
      <div className="relative left-1/2 -translate-x-1/2 w-[96vw] sm:w-[96svw]">
        {/* Mobile */}
        <Image
          src="/img/footer-mobile.svg"
          alt="Footer mobile"
          width={1200}
          height={600}
          priority
          sizes="96vw"
          className="block md:hidden w-full h-auto select-none"
          draggable={false}
        />

        {/* Desktop */}
        <Image
          src="/img/footer.svg"
          alt="Footer"
          width={2560}
          height={900}
          priority
          sizes="96vw"
          className="hidden md:block w-full h-auto select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
