import Image from "next/image";
export function TeaCollection() {
  return (
    <>
      <section className="hidden md:block py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 font-futura-bold tracking-wide">
              BỘ SƯU TẬP MỚI: TRÀ TRÔNG TRĂNG
            </h2>
            <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-64 max-w-5xl mx-auto">
            {/* Trăng Tròn */}
            <div className="text-center">
              <div className="relative w-64 h-80 md:w-160 md:h-250 mx-auto">
                <Image
                  src="/img/Ly1.png"
                  alt="Ly trà Trăng Tròn"
                  fill
                  className="object-contain rounded-[20px]"
                />
              </div>
              {/* <h3 className="text-5xl font-bold text-gray-800 mb-2 font-futura-bold">
                TRĂNG TRÒN
              </h3>
              <p className="text-lg text-gray-600 font-futura-regular">
                Trà Sữa Khoai Môn
              </p> */}
            </div>

            {/* Trăng Ấm */}
            {/* <div className="text-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto">
                <Image
                  src="/img/Ly2.png"
                  alt="Ly trà Trăng Ấm"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-5xl font-bold text-gray-800 mb-2 font-futura-bold">
                TRĂNG ẤM
              </h3>
              <p className="text-lg text-gray-600 font-futura-regular">
                Trà Sữa Cốm
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------------------- */}
      <section className="block md:hidden py-0 px-3 relative mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <h2 className="text-md md:text-4xl font-bold text-gray-800 mb-2 font-futura-bold tracking-wide">
              BỘ SƯU TẬP MỚI: TRÀ TRÔNG TRĂNG
            </h2>
            <div className="w-85 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto mb-20"></div>
          </div>

          <div className="grid grid-cols-1 gap-0 max-w-4xl mx-auto">
            {/* Trăng Tròn */}
            <div className="text-center">
              <div className="relative w-auto h-[25rem] md:w-80 md:h-96 mx-auto">
                <Image
                  src="/img/Ly1.png"
                  alt="Ly trà Trăng Tròn"
                  fill
                  className="object-contain rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
