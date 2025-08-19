import Image from "next/image";
export function TeaCollection() {
  return (
    <section className="py-16 px-4 relative">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-amber-300 text-lg">✦</div>
      <div className="absolute bottom-8 right-16 text-amber-400 text-sm">✦</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 font-sans tracking-wide">
          BỘ SƯU TẬP MỚI: TRÀ TRÔNG TRĂNG
        </h2>
        <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Trăng Tròn */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/placeholder-80amg.png"
                alt="Ly trà Trăng Tròn"
                width={256}
                height={320}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-sans">
              TRĂNG TRÒN
            </h3>
            <p className="text-gray-600 font-sans">Trà sữa khoai môn</p>
          </div>

          {/* Trăng Ấm */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/placeholder-kk4rj.png"
                alt="Ly trà Trăng Ấm"
                width={256}
                height={320}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-sans">
              TRĂNG ẤM
            </h3>
            <p className="text-gray-600 font-sans">Trà sữa cốm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
