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
          <h2 className="text-lg md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            PHỐI HỢP THỰC HIỆN CÙNG
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            BỆNH VIỆN NHI ĐỒNG 1 TP.HCM
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-20 items-center">
          {/* Hospital image */}
          <div className="relative w-full h-[380px] md:h-[500px]">
            <Image
              src="/img/BenhVienNhiDong1.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover rounded-[80px] shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black max-w-[95%]">
              <strong>Ấm 5</strong> do <strong>THREE O&apos;CLOCK</strong> đồng
              hành cùng Bệnh viện Nhi Đồng 1 TP.HCM gây quỹ quà tặng Trung thu
              2025 cho hơn 300 bệnh nhi đang từng ngày chiến đấu với bệnh tật.
              Dưới ánh trăng Ấm 5, từng phần quà Trung thu sẽ được trao tận tay
              các em nhỏ, gửi gắm những lời chúc của khách hàng về một mùa trăng
              trọn vẹn đến với các em.
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
              Three O&apos;clock đồng hành cùng{" "}
              <strong>Bệnh viện Nhi Đồng 1 TP.HCM</strong> để mang đến một đêm
              hội trăng rằm ấm áp cho các em nhỏ đang điều trị. Trong không gian
              chan hòa ánh trăng và tiếng cười, từng phần quà Trung thu được
              trao tận tay, gửi gắm lời chúc về một mùa trăng trọn vẹn cùng
              những ký ức tuổi thơ đẹp đẽ, dù nơi đây vẫn còn những ngày chữa
              bệnh dài.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
