import Image from "next/image";

export default function Footer() {
  return (
    <section className="relative flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden pt-1 md:mt-40 pb-1 md:pb-10">
      <div className="relative w-[90vw] h-[18vh] md:h-[40vh] max-w-none">
        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden select-none">
          <Image
            src="/img/footer-mobile.svg"
            alt="Footer mobile"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
        {/* Desktop image */}
        <div className="absolute inset-0 hidden md:block select-none">
          <Image
            src="/img/footer.svg"
            alt="Footer"
            fill
            priority
            sizes="(min-width: 768px) 90vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
