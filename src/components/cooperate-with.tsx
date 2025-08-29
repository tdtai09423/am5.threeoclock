"use client";
import Image from "next/image";
import { useState } from "react";

export default function CooperateWith() {
  return (
    <>
      <section className="hidden md:block py-30 px-6">
        <div className="max-w-[80%] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-8xl font-bold text-black mb-4 font-snell tracking-wide mb-[13rem]">
              Chặng 2: Treo Trăng
            </h2>
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-futura-bold tracking-wide">
              HÀNH TRÌNH LAN TỎA YÊU
            </h2>
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-futura-bold tracking-wide">
              THƯƠNG CÙNG ĐẠI SỨ
            </h2>
            <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-12">
            {/* Left side - Circle */}
            <div className="flex justify-center">
              <div className="relative w-[85%] h-[380px] md:h-[600px] mb-10">
                <Image
                  src="/img/dien-vien-tri-tam-small-pic.svg"
                  alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
                  fill
                  className="object-cover object-center rounded-full shadow-lg"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <p className="font-futura-regular text-justify text-xl text-black leading-relaxed">
                Sự hiện diện của Đại sứ không chỉ mang đến làn gió mới cho chiến
                dịch, mà còn là cầu nối giúp lan tỏa mạnh mẽ thông điệp: Một ly
                trà thơm, thêm mùa trăng Ấm.
              </p>

              <p className="font-futura-regular text-justify text-xl text-black leading-relaxed">
                Cùng <strong>THREE O&apos;CLOCK</strong>, Đại sứ sẽ trực tiếp
                tham gia các hoạt động thiện nguyện, đồng hành trong hành trình
                trao gửi những phần quà Trung thu đến các em nhỏ và kể lại những
                câu chuyện phía sau mỗi chiếc bánh được trao đi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <section className="block md:hidden py-10 px-6">
        <div className="max-w-[90%] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-md md:text-4xl font-bold text-black mb-0 font-futura-bold tracking-wide">
              ẤM 5 & HÀNH TRÌNH LAN TỎA YÊU
            </h2>
            <h2 className="text-md md:text-4xl font-bold text-black mb-4 font-futura-bold tracking-wide">
              THƯƠNG CÙNG ĐẠI SỨ
            </h2>
            <div className="w-80 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center mb-12">
            {/* Left side - Circle */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-5xl font-bold">KOL 1</span>
              </div>
            </div>
            {/* <div className="flex gap-4 pt-6">
              {kolData.map((kol) => (
                <button
                  key={kol.id}
                  onClick={() => setActiveKOL(kol.id)}
                  className={`w-full h-6 px-0 py-0 rounded-full font-bold text-[10px] transition-all ${
                    activeKOL === kol.id
                      ? "bg-[#eac4a2] text-black font-futura-bold hover:bg-[#eac4a2]/80 border border-[#eac4a2] shadow-md shadow-[#b98e64]"
                      : "bg-black text-white font-futura-bold hover:bg-gray-800"
                  }`}
                >
                  {kol.name}
                </button>
              ))}
            </div> */}

            {/* Right side - Content */}
            <div className="space-y-5 pt-6">
              <p className="leading-normal font-futura-regular text-justify text-md text-black leading-relaxed">
                Sự hiện diện của Đại sứ không chỉ mang đến làn gió mới cho chiến
                dịch, mà còn là cầu nối giúp lan tỏa mạnh mẽ thông điệp: Một ly
                trà thơm, thêm mùa trăng Ấm.
              </p>

              <p className="leading-normal font-futura-regular text-justify text-md text-black leading-relaxed">
                Cùng <strong>THREE O&apos;CLOCK</strong>, Đại sứ sẽ trực tiếp
                tham gia các hoạt động thiện nguyện, đồng hành trong hành trình
                trao gửi những phần quà Trung thu đến các em nhỏ và kể lại những
                câu chuyện phía sau mỗi chiếc bánh được trao đi.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/1.png"
                alt="Team photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[15px] overflow-hidden">
              <Image
                src="/img/2.png"
                alt="Art supplies"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative aspect-square rounded-[15px] overflow-hidden mt-4 max-h-[10rem] w-full">
            <Image
              src="/img/3.png"
              alt="Handmade crafts"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[1210px] max-w-full mx-auto text-md text-gray-700 leading-8 p-6 text-justify font-futura-regular rounded-lg mt-7">
          <p className="leading-normal">
            Trung thu không chỉ trọn vẹn bởi ánh trăng, mà còn bởi những điều
            tốt đẹp được sẻ chia. Với ước mong cho các em có một mùa Trăng tròn
            đầy và ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc
            check-in nho nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều
            ước gửi đến các em nhỏ, và cùng nhau nhìn lại hành trình của những
            mùa Ấm đã qua. Không chỉ là một điểm dừng chân, đây còn là nơi kết
            nối những tấm lòng, để mỗi điều ước viết ra đều góp phần thắp sáng
            thêm một mùa trăng hy vọng.
          </p>
        </div>
      </section>
    </>
  );
}
