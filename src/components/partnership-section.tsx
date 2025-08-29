import Image from "next/image";

export function PartnershipSection() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8">
      {/* Decorative stars */}
      {/* <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div> */}

      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Desktop version */}
        <div className="text-center mb-14">
          <h2 className="text-lg md:text-8xl font-extrabold text-black font-snell tracking-wide mb-20">
            Chặng 1: Gom Trăng
          </h2>
          <h2 className="text-lg md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            SỰ KIỆN THU THẬP TEM NGUYÊN
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            LIỆU NHẬN BÁNH TRUNG THU
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Hospital image */}
          <div className="relative w-[70%] h-[380px] md:h-[600px] mb-10">
            <Image
              src="/img/su-kien-nhan-tem.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center rounded-[80px] shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="max-w-[65%]">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              Từ ngày 05/09 - 30/09/2025, mỗi ly nước trong mùa Trung thu năm
              nay sẽ đi kèm 01 tem cào chứa nguyên liệu làm nên bánh trung thu,
              bao gồm: bột, đường, trứng, đậu xanh, khoai môn/hạt sen. Khi sưu
              tập đủ 5 tem, bạn có thể đổi một chiếc bánh Trung thu
              <strong> THREE O&apos;CLOCK </strong>
              đậm vị sẻ chia hoặc có thể chọn trao tặng cho các em bệnh nhi Bệnh
              Viện Nhi Đồng 1 TP.HCM trong “Đêm Hội Trăng Rằm” vào mùa Ấm năm
              nay.
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
