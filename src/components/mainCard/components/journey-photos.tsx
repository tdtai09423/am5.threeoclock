import Image from "next/image";
export function JourneyPhotos() {
  return (
    <section className="relative -mt-32 px-4 z-10 min-h-[930px] md:min-h-[1300px]">
      <div className="max-w-6xl mx-auto relative">
        {/* 2020 Photo - overlapping with main circle on the left */}
        <div
          className="absolute left-[2%] top-[0rem] md:top-[-300px] md:left-[-23%] flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
          }}
        >
          <div className="relative w-38 h-38 md:w-130 md:h-130 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/img/2020.png"
              alt="Ấm 2020 - Trẻ em nhận quà Trung thu"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-md md:text-3xl text-black font-semibold">
            2020
          </div>
        </div>

        {/* 2022 Photo - positioned on the right */}
        <div
          className="absolute right-[-9%] top-[3rem] md:top-[-130px] md:right-[-35%] flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
          }}
        >
          <div className="relative w-35 h-35 md:w-110 md:h-110 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/img/2022.png"
              alt="Ấm 2022 - Tình nguyện viên và trẻ em"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-md md:text-3xl text-black font-semibold">
            2022
          </div>
        </div>

        {/* 2023 Photo - positioned bottom left */}
        <div
          className="absolute left-[-8%] bottom-[-23rem] md:left-[-37%] md:bottom-[-380px] flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
          }}
        >
          <div className="relative w-40 h-40 md:w-140 md:h-140 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/img/2024.png"
              alt="Ấm 2023 - Hoạt động từ thiện"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-md md:text-3xl text-black font-semibold">
            2024
          </div>
        </div>

        {/* 2024 Photo - positioned bottom right */}
        <div
          className="absolute right-[-10%] bottom-[-19rem] md:right-[-38%] md:bottom-[-330px] flex flex-col items-center space-y-2"
          style={{
            position: "absolute",
            zIndex: 100,
          }}
        >
          <div className="relative w-42 h-42 md:w-130 md:h-130 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/img/2023.png"
              alt="Ấm 2024 - Hoạt động cộng đồng"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-serif text-md md:text-3xl text-black font-semibold">
            2023
          </div>
        </div>

        <div className="relative top-[13rem] md:top-0 px-7 pt-0 md:pt-72 pb-28">
          {/* Tiêu đề */}
          <h3 className="font-futura text-lg md:text-5xl text-black font-futura-bold tracking-wide mb-0 md:mb-8 text-center">
            HÀNH TRÌNH CỦA ẤM
          </h3>

          {/* Nội dung */}
          <div className="max-w-2xl mx-auto space-y-5">
            <p className="text-md md:text-2xl text-black leading-relaxed font-futura-regular text-justify">
              Từ những ngày đầu với ước mong mang một mùa Trung thu ấm áp đến
              các em nhỏ có hoàn cảnh khó khăn, “Ấm” đã trở thành hành trình đặc
              biệt mà <strong>THREE O&apos;CLOCK</strong> bền bỉ viết tiếp suốt
              5 năm qua.
            </p>

            <p className="text-md md:text-2xl text-black leading-relaxed font-futura-regular text-justify">
              Tiếp nối thành công từ những mùa trước, cùng sứ mệnh kết nối cộng
              đồng, <strong>THREE O&apos;CLOCK</strong> tiếp tục phát động chiến
              dịch ẤM 5 với mong muốn lan toả thông điệp ý nghĩa này đến thật
              nhiều người hơn. Từ đó có thể góp thêm thật nhiều phần quà cho các
              em nhỏ, mang đến một mùa trăng thật trọn vẹn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
