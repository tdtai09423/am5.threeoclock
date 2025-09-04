/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export function Stage3() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8 md:mb-10 md:mt-30">
      {/* Decorative stars */}
      {/* <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div> */}

      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Desktop version */}
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-8xl font-extrabold text-black font-snell tracking-wide mb-6">
            Chặng 3: Trông Trăng
          </h2>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6 ">
          {/* Hospital image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[90%] h-[380px] md:h-[600px] mb-10 md:mt-15">
            <div className="relative w-full h-[380px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-1.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[60px] shadow-lg"
              />
            </div>
            <div className="relative w-full h-[380px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-2.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[60px] shadow-lg"
              />
            </div>
            <div className="relative w-full h-[380px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-3.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[60px] shadow-lg"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-[65%]">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              Ngày 2/10, trong Ngày hội Trung thu:{" "}
              <strong>”Câu Chuyện Mùa Trăng”</strong> tổ chức tại Bệnh Viện Nhi
              Đồng 1, TP.HCM, THREE O'CLOCK trao tặng 300 phần quà và 50.000.000
              VNĐ dành tặng cho 10 trẻ em có hoàn cảnh khó khăn.
            </p>
          </div>

          {/* <div className="relative w-[70%] h-[380px] md:h-[600px] mb-20 mt-20">
            <Image
              src="/img/BenhVienNhiDong1.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center rounded-[80px] shadow-lg"
            />
          </div>

          <div className="max-w-[65%]">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              Bài nhạc ghi dấu hành trình Ấm 5 với giai điệu tươi vui, được lấy
              cảm hứng từ những mong ước trong sáng của trẻ thơ.
            </p>
          </div> */}
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="relative block md:hidden max-w-[100%] mx-auto top-[-2rem]">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-8xl font-extrabold text-black font-snell tracking-wide mb-6">
            Chặng 3: Trông Trăng
          </h2>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Hospital image */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 w-[100%] h-[220px] md:h-[600px] mb-2 md:mt-15">
            <div className="relative w-full h-[200px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-1.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[10px] shadow-lg"
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-2.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[10px] shadow-lg"
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[600px] mb-0">
              <Image
                src="/img/stage3-3.png"
                alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                fill
                className="object-cover object-center rounded-[10px] shadow-lg"
              />
            </div>
          </div>

          <div className="max-w-[95%]">
            <p className="text-justify text-lg md:text-2xl leading-relaxed font-futura-regular text-black">
              Ngày 2/10, trong Ngày hội Trung thu:{" "}
              <strong>”Câu Chuyện Mùa Trăng”</strong> tổ chức tại Bệnh Viện Nhi
              Đồng 1, TP.HCM, THREE O'CLOCK trao tặng 300 phần quà và 50.000.000
              VNĐ dành tặng cho 10 trẻ em có hoàn cảnh khó khăn.
            </p>
          </div>

          {/* <div className="relative w-[95%] h-[220px] md:h-[600px] mb-0 mt-5">
            <Image
              src="/img/BenhVienNhiDong1.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center rounded-[20px] shadow-lg"
            />
          </div>

          <div className="max-w-[95%]">
            <p className="text-justify text-md md:text-2xl leading-relaxed font-futura-regular text-black">
              Bài nhạc ghi dấu hành trình Ấm 5 với giai điệu tươi vui, được lấy
              cảm hứng từ những mong ước trong sáng của trẻ thơ.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
