import Image from "next/image";

export function Stage3() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8 md:mb-10">
      {/* Decorative stars */}
      {/* <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div> */}

      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Desktop version */}
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-6xl font-extrabold text-black font-futura-bold tracking-wide mb-6">
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
              Đồng 1 Thành phố Hồ Chí Minh trao tặng 300 phần quà và 50.000.000
              VNĐ dành tặng cho 10 trẻ em có hoàn cảnh khó khăn.
            </p>
          </div>

          <div className="relative w-[70%] h-[380px] md:h-[600px] mb-20 mt-20">
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
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="relative block md:hidden max-w-[90%] mx-auto top-[-2rem]">
        <div className="text-center mb-4">
          <h2 className="text-md font-extrabold text-black font-futura-bold tracking-wide mb-1">
            ĐỐI TÁC ĐỒNG HÀNH
          </h2>
          <div className="w-75 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="items-center">
          {/* Hospital image */}
          <div className="relative w-auto h-[280px] md:h-[500px] mb-10">
            <Image
              src="/img/BenhVienNhiDong1.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover rounded-[20px] shadow-lg"
            />
          </div>

          <h2 className="text-md font-extrabold text-black font-futura-bold font-w tracking-wide mb-3">
            BỆNH VIỆN NHI ĐỒNG 1
          </h2>

          {/* Text content */}
          <div className="">
            <p className="text-justify text-md md:text-2xl leading-relaxed font-futura-regular text-black max-w-[95%]">
              Từ ngày 05/09 - 30/09/2025, mỗi ly nước trong mùa Trung thu năm
              nay sẽ đi kèm 01 tem cào chứa nguyên liệu làm nên bánh trung thu,
              bao gồm: bột, đường, trứng, đậu xanh, khoai môn/hạt sen. Khi sưu
              tập đủ 5 tem, bạn có thể đổi một chiếc bánh Trung thu
              <strong>THREE O&apos;CLOCK</strong> đậm vị sẻ chia hoặc có thể
              chọn trao tặng cho các em bệnh nhi Bệnh Viện Nhi Đồng 1 TP.HCM
              trong “Đêm Hội Trăng Rằm” vào mùa Ấm năm nay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
