import Image from "next/image";

export function PartnershipSection() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8">
      {/* Decorative stars */}
      {/* <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div> */}

      <div className="max-w-[90%] mx-auto">
        {/* Main heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
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
    </section>
  );
}
