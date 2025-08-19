export function KOLPartnership() {
  return (
    <section className="py-16 px-4 relative">
      {/* Decorative stars */}
      <div className="absolute top-12 right-8 text-amber-300 text-sm">✦</div>
      <div className="absolute bottom-16 left-12 text-amber-400 text-xs">✦</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 font-sans">
          THREE O&apos;CLOCK ĐỒNG HÀNH CÙNG
        </h2>
        <div className="w-32 h-0.5 bg-gray-800 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - KOL 1 circle */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-6xl font-bold font-sans">
                KOL 1
              </span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed font-sans">
              Năm nay, chiến dịch <strong>Ấm 5</strong> có sự đồng hành đặc biệt
              từ Đại sứ Ấm – một gương mặt truyền cảm hứng với lối sống tích
              cực, gần gũi và giàu tình thân sẻ chia.
            </p>

            <p className="text-gray-700 leading-relaxed font-sans">
              Sự hiện diện của Đại sứ không chỉ mang đến làn gió mới cho chiến
              dịch, mà còn là cầu nối giúp lan tỏa mạnh mẽ thông điệp: ấm áp là
              để san sẻ.
            </p>

            <p className="text-gray-700 leading-relaxed font-sans">
              Cùng <strong>THREE O&apos;CLOCK</strong>, Đại sứ sẽ trực tiếp tham
              gia các hoạt động thiện nguyện, đồng hành trong hành trình trao
              gửi những phần quà Trung thu đến các em nhỏ và kể lại những câu
              chuyện phía sau mỗi chiếc bánh được trao đi – những câu chuyện
              giản dị nhưng đủ sức lay động lòng người.
            </p>

            {/* KOL buttons */}
            <div className="flex gap-4 pt-6">
              <button className="px-6 py-3 bg-amber-200 text-gray-800 rounded-full font-medium font-sans hover:bg-amber-300 transition-colors">
                Tên KOL
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-full font-medium font-sans hover:bg-gray-800 transition-colors">
                Tên KOL
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-full font-medium font-sans hover:bg-gray-800 transition-colors">
                Tên KOL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
