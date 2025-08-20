import Image from "next/image";
export function TeaCollection() {
  return (
    <section className="py-16 px-4 relative">
      {/* Decorative stars */}
      <div className="absolute top-8 left-12 text-amber-300 text-lg">✦</div>
      <div className="absolute bottom-8 right-16 text-amber-400 text-sm">✦</div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 font-futura-bold tracking-wide">
            BỘ SƯU TẬP MỚI: TRÀ TRÔNG TRĂNG
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-64 max-w-5xl mx-auto">
          {/* Trăng Tròn */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/img/Ly1.png"
                alt="Ly trà Trăng Tròn"
                width={512}
                height={640}
                className="object-contain"
              />
            </div>
            <h3 className="text-5xl font-bold text-gray-800 mb-2 font-futura-bold">
              TRĂNG TRÒN
            </h3>
            <p className="text-lg text-gray-600 font-futura-regular">
              Trà sữa khoai môn
            </p>
          </div>

          {/* Trăng Ấm */}
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/img/Ly2.png"
                alt="Ly trà Trăng Ấm"
                width={512}
                height={640}
                className="object-contain"
              />
            </div>
            <h3 className="text-5xl font-bold text-gray-800 mb-2 font-futura-bold">
              TRĂNG ẤM
            </h3>
            <p className="text-lg text-gray-600 font-futura-regular">
              Trà sữa cốm
            </p>
          </div>
        </div>
        <div className="w-[1000px] max-w-full mx-auto text-2xl text-gray-700 leading-8 p-6 text-justify rounded-lg mt-15 font-futura-regular">
          {/* <p className="text-gray-700 leading-relaxed font-sans text-lg md:text-xl">
              Three O&apos;clock đồng hành cùng{" "}
              <strong>Bệnh viện Nhi Đồng 1 TP.HCM</strong> để mang đến mỗi đêm
              hội trăng rằm ấm áp cho các em nhỏ đang điều trị. Trong không gian
              chan hòa ánh trăng và tiếng cười, từng phần quà Trung thu được
              trao tận tay, gửi gắm lời chúc về một mùa trăng tròn vẹn cùng
              những ký ức tuổi thơ đẹp đẽ, dù nơi đây vẫn còn những ngày chưa
              bình thường.
            </p> */}
          <p>
            Ngoài ra, năm nay khách hàng có thể cùng{" "}
            <strong>THREE O&apos;CLOCK</strong> gửi tặng những phần quà ý nghĩa
            đến các em nhỏ có hoàn cảnh khó khăn thông qua hoạt động{" "}
            <strong>GOM TRĂNG.</strong>
            Mỗi ly nước trong mùa Trung thu năm nay sẽ đi kèm{" "}
            <strong>01 tem cào</strong> chứa nguyên liệu làm nên bánh trung thu,
            bao gồm: bột, đường, trứng, đậu xanh, khoai môn/hạt sen. Khi sưu tập
            đủ 5 tem, bạn có thể đổi một chiếc bánh Trung thu{" "}
            <strong>THREE O&apos;CLOCK</strong>
            đậm vị sẻ chia hoặc có thể chọn trao tặng cho các em bệnh nhi Bệnh
            Viện Nhi Đồng 1 TP.HCM trong “Đêm Hội Trăng Rằm” vào mùa Ấm năm nay.
          </p>
        </div>
      </div>
    </section>
  );
}
