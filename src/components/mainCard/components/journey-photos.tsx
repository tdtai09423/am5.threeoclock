import Image from "next/image";
export function JourneyPhotos() {
  return (
    <section className="relative -mt-32 px-4 z-10 min-h-[1000px] md:min-h-[1200px]">
      <div className="max-w-6xl mx-auto relative">
        {/* 2020 Photo - overlapping with main circle on the left */}
        <div
          className="absolute left-8 top-16 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            top: "-300px",
            left: "-20%",
          }}
        >
          <div className="relative w-100 h-100 md:w-130 md:h-130 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-children-gifts.png"
              alt="Ấm 2020 - Trẻ em nhận quà Trung thu"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg md:text-xl text-amber-900 font-semibold">
            2020
          </div>
        </div>

        {/* 2022 Photo - positioned on the right */}
        <div
          className="absolute right-8 top-8 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            top: "-130px",
            right: "-35%",
          }}
        >
          <div className="relative w-100 h-100 md:w-110 md:h-110 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-volunteers-children-mid-autumn.png"
              alt="Ấm 2022 - Tình nguyện viên và trẻ em"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg md:text-xl text-amber-900 font-semibold">
            2022
          </div>
        </div>

        {/* 2023 Photo - positioned bottom left */}
        <div
          className="absolute left-16 bottom-8 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "-380px",
            left: "-37%",
          }}
        >
          <div className="relative w-100 h-100 md:w-120 md:h-120 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-children-volunteers-2023.png"
              alt="Ấm 2023 - Hoạt động từ thiện"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg text-amber-900 font-semibold">
            2023
          </div>
        </div>

        {/* 2024 Photo - positioned bottom right */}
        <div
          className="absolute right-16 bottom-16 flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "-330px",
            right: "-38%",
          }}
        >
          <div className="relative w-100 h-100 md:w-130 md:h-130 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/vietnamese-charity-2024.png"
              alt="Ấm 2024 - Hoạt động cộng đồng"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-lg text-amber-900 font-semibold">
            2024
          </div>
        </div>

        <div className="text-center px-8 pt-56 md:pt-72 pb-28">
          <h3 className="font-serif text-5xl md:text-6xl text-amber-900 font-bold tracking-wide mb-8">
            HÀNH TRÌNH CỦA ẤM
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed font-sans mb-5">
              Từ những ngày đầu với ước mong mang một mùa Trung thu ấm áp đến
              các em nhỏ có hoàn cảnh khó khăn, “Ấm” đã trở thành hành trình đặc
              biệt mà THREE O&apos;CLOCK bền bỉ viết tiếp suốt 5 năm qua.
            </p>
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed font-sans mb-5">
              Tiếp nối thành công từ những mùa trước, cùng sứ mệnh kết nối cộng
              đồng, THREE O&apos;CLOCK, tiếp tục phát động chiến dịch ẤM năm
              2025 với mong muốn lan toả thông điệp ý nghĩa này đến thật nhiều
              người hơn. Từ đó có thể góp thêm thật nhiều phần quà cho các em
              nhỏ, mang đến một mùa trăng thật  trọn vẹn.
            </p>
          </div>
        </div>

        <div className="absolute top-32 left-1/4 text-amber-300 text-2xl">
          ✦
        </div>
        <div className="absolute bottom-32 right-1/4 text-amber-300 text-xl">
          ✦
        </div>
        <div className="absolute top-1/2 left-12 text-amber-200 text-lg">✦</div>
        <div className="absolute top-1/3 right-12 text-amber-200 text-lg">
          ✦
        </div>
      </div>
    </section>
  );
}
