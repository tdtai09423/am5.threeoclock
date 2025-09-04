import Image from "next/image";

export function CircularHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden mt-10 md:mt-0">
      <div className="relative w-[100vw] h-[150vh] md:h-[230vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-white md:bg-[url('/img/moon.svg')]"
          style={{
            backgroundSize: "100% 110%",
          }}
        >
          <Image
            fill
            src="/img/moon-mobile.svg"
            alt="THREE O'CLOCK Building"
            className="block md:hidden rounded-[80px] md:rounded-[70px] w-full md:w-100 h-[100%] object-cover shadow-lg pl-0"
          />
        </div>
      </div>
    </section>
  );
}
