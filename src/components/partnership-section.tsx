import Image from "next/image";
export function PartnershipSection() {
  return (
    <section className="relative py-16 px-6 md:px-8 lg:px-12">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div>

      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-sans tracking-wide">
            PHỐI HỢP THỰC HIỆN CÙNG
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-sans tracking-wide">
            BỆNH VIỆN NHI ĐỒNG 1 TP.HCM
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Hospital image */}
          <div className="relative h-90 w-150">
            <Image
              src="/img/BenhVienNhiDong1.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            {/* <p className="text-gray-700 leading-relaxed font-sans text-lg md:text-xl">
              Three O&apos;clock đồng hành cùng{" "}
              <strong>Bệnh viện Nhi Đồng 1 TP.HCM</strong> để mang đến mỗi đêm
              hội trăng rằm ấm áp cho các em nhỏ đang điều trị. Trong không gian
              chan hòa ánh trăng và tiếng cười, từng phần quà Trung thu được
              trao tận tay, gửi gắm lời chúc về một mùa trăng tròn vẹn cùng
              những ký ức tuổi thơ đẹp đẽ, dù nơi đây vẫn còn những ngày chưa
              bình thường.
            </p> */}
            <p className="text-gray-700 leading-relaxed font-sans text-lg md:text-xl">
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
