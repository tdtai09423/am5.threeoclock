import Image from "next/image";
export function FooterSection() {
  return (
    <section className="relative py-16 px-4">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <Image
          src="/vietnamese-mid-autumn-festival-gathering.png"
          alt="Community gathering"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-8 h-8 bg-white rounded-full blur-sm top-16 left-32 animate-pulse" />
        <div className="absolute w-6 h-6 bg-white rounded-full blur-sm top-32 right-48 animate-pulse delay-300" />
        <div className="absolute w-10 h-10 bg-white rounded-full blur-sm bottom-32 left-1/4 animate-pulse delay-700" />
        <div className="absolute w-5 h-5 bg-white rounded-full blur-sm bottom-16 right-1/3 animate-pulse delay-500" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div className="text-6xl md:text-8xl font-light text-amber-600 mb-4 opacity-80">
            hình
          </div>
          <p className="text-gray-600 text-lg">
            Cùng nhau tạo nên những khoảnh khắc ấm áp
          </p>
        </div>
      </div>
    </section>
  );
}
