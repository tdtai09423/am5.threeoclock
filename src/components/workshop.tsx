import Image from "next/image";

export function Workshop() {
  return (
    <section className="relative px-4 md:px-6 lg:px-8">
      <div className="hidden md:block max-w-[90%] mx-auto">
        {/* Desktop version */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black font-futura-bold tracking-wide mb-3">
            WORKSHOP: THẮP SÁNG TRĂNG RẰM
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Partnership content */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="max-w-[57%]">
            <p className="text-justify text-xl md:text-2xl leading-relaxed font-futura-regular text-black">
              Team 3H sẽ tổ chức Workshop “Thắp Sáng Trăng Rằm” làm 300 chiếc
              lồng đèn để tặng cho trẻ nhỏ tại Bệnh viện Nhi Đồng 1 TP.HCM vào
              “Đêm Hội Trăng Rằm” ngày 2/10/2025
            </p>
          </div>

          {/* Text content */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
              <Image
                src="/img/1.png"
                alt="Team photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
              <Image
                src="/img/2.png"
                alt="Art supplies"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square rounded-[40px] overflow-hidden">
              <Image
                src="/img/3.png"
                alt="Handmade crafts"
                fill
                className="object-cover"
              />
            </div>
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
              Từ ngày 05/09 - 30/09/2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
