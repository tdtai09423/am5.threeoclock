export function JourneySection() {
  return (
    <section className="relative py-16 px-4">
      {/* Background gradient */}
      <div
        className="absolute inset-0 blur-lg"
        style={{
          background:
            "linear-gradient(359.96deg, #FFFFFF 0.04%, #EAC4A2 29.34%, #EAC4A2 50.48%, #EAC4A2 67.77%, #EDD0B1 80.27%, #FFFFFF 96.12%)",
        }}
      />

      {/* Decorative stars */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-5 h-5 bg-white rounded-full blur-sm top-16 left-16 animate-pulse" />
        <div className="absolute w-7 h-7 bg-white rounded-full blur-sm top-32 right-1/4 animate-pulse delay-300" />
        <div className="absolute w-6 h-6 bg-white rounded-full blur-sm bottom-20 left-1/3 animate-pulse delay-700" />
      </div> */}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          HÀNH TRÌNH CỦA ẤM
        </h2>

        {/* Section description */}
        <div className="text-black text-lg md:text-xl leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            Từ những ngày đầu với ước mong mang một mùa Trung thu ấm áp đến các
            em nhỏ có hoàn cảnh khó khăn, &quot;Ấm&quot; đã trở thành hành trình
            đặc biệt mà THREE O&apos;CLOCK bền bỉ viết tiếp suốt 5 năm qua.
          </p>
          <p>
            Tiếp nối thành công từ những mùa trước, cùng sứ mệnh kết nối cộng
            đồng, THREE O&apos;CLOCK tiếp tục phát động chiến dịch ẤM năm 2025
            với mong muốn lan toả thông điệp ý nghĩa này đến thật nhiều người
            hơn.
          </p>
          <p>
            Từ đó có thể góp thêm thật nhiều phần quà cho các em nhỏ, mang đến
            một mùa trăng thật trọn vẹn.
          </p>
        </div>
      </div>
    </section>
  );
}
