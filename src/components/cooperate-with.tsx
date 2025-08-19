import Image from "next/image";
export default function CooperateWith() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-black">
            THREE O&apos;CLOCK ĐỒNG HÀNH CÙNG
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Circle */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">KOL 1</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Năm nay, chiến dịch <span className="font-bold">Âm 5</span> sẽ sử
              dụng hành đặc biệt từ Đại sứ Âm – một gương mặt truyền cảm hứng
              với lối sống tích cực, gần gũi và giàu tính nhân văn chính.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Sự hiện diện của Đại sứ không chỉ mang đến lời giải mới cho chiến
              dịch, mà còn là cầu nối giúp lan tỏa thông điệp âm ấp và dễ dàng
              tiếp cận.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Cùng <span className="font-bold">THREE O&apos;CLOCK</span>, Đại sứ
              sẽ kể những thâm tình các hoạt động thiện nguyện, đồng hành trong
              hành trình phát giai những phần quà Trung thu đến các em nhỏ và kể
              lại những câu chuyện giản dị nhưng đầy ấm áp trong trao đi – những
              câu chuyện giản dị nhưng đầy sức lay động lòng người.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-2 bg-amber-100 border border-amber-200 text-black rounded-md hover:bg-amber-200 transition-colors">
                Tên KOL
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Tên KOL
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Tên KOL
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/team-lantern-photo.png"
              alt="Team photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/placeholder-ww5ic.png"
              alt="Art supplies"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/handmade-crafts-art.png"
              alt="Handmade crafts"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/colorful-paper-crafts-origami.png"
              alt="Paper crafts"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
