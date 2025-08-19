import Image from "next/image";
export function PartnershipSection() {
  return (
    <section className="relative py-16 px-8 bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-amber-300 text-sm">✦</div>
      <div className="absolute top-20 right-16 text-amber-400 text-xs">✦</div>
      <div className="absolute bottom-12 left-20 text-amber-300 text-xs">✦</div>
      <div className="absolute bottom-8 right-12 text-amber-400 text-sm">✦</div>

      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-sans tracking-wide">
            ĐỐI TÁC ĐỒNG HÀNH
          </h2>
          <div className="w-32 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hospital image */}
          <div className="relative h-80">
            <Image
              src="/vietnamese-childrens-hospital-celebration.png"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-sans">
              BỆNH VIỆN
              <br />
              NHI ĐỒNG 1
            </h3>

            <p className="text-gray-700 leading-relaxed font-sans text-base">
              Three O&apos;clock đồng hành cùng{" "}
              <strong>Bệnh viện Nhi Đồng 1 TP.HCM</strong> để mang đến mỗi đêm
              hội trăng rằm ấm áp cho các em nhỏ đang điều trị. Trong không gian
              chan hòa ánh trăng và tiếng cười, từng phần quà Trung thu được
              trao tận tay, gửi gắm lời chúc về một mùa trăng tròn vẹn cùng
              những ký ức tuổi thơ đẹp đẽ, dù nơi đây vẫn còn những ngày chưa
              bình thường.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
