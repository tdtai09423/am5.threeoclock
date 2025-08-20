"use client";
import Image from "next/image";
import { useState } from "react";

interface KOLData {
  id: number;
  name: string;
  title: string;
  description: string;
  avatar: string;
  images: string[];
  bottomText: string;
}

const kolData: KOLData[] = [
  {
    id: 1,
    name: "Tên KOL",
    title: "ẨM 5 & HÀNH TRÌNH LAN TỎA YÊU THƯƠNG CÙNG ĐẠI SỨ",
    description:
      "Sự kiện diễn ra Đại sứ và không chỉ mang đến lan tỏa một nào chiến dịch, mà còn là dịp để giúp tôi tìm mạnh mẽ những điệp. KOL ký tại thôm, thêm mạo trong Ấm.\n\nCông THIẾC O'CLOCK. Đại sứ sẽ học tập thêm giá các hoạt động thiện nguyện, đồng hành trong hành trình trở giá những phần quà Trang thư đến các em nhỏ và kế tại những của chuyện phải sau nói chiếc bệnh được trao đi.",
    avatar: "/young-influencer-avatar.png",
    images: [
      "/colorful-young-group.png",
      "/art-stickers-materials.png",
      "/placeholder-qg1hs.png",
      "/colorful-art-supplies.png",
    ],
    bottomText:
      "Trung thu không chỉ trọn vẹn bởi ánh trăng, mà còn bởi những điều tốt đẹp được sẻ chia. Với ước mong cho các em có một mùa Trăng tròn đầy và ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc check-in nho nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều ước gửi đến các em nhỏ, và cùng nhau nhìn lại hành trình của những mùa Ấm đã qua. Không chỉ là một điểm dừng chân, đây còn là nơi kết nối những tấm lòng, để mỗi điều ước viết ra đều góp phần thắp sáng thêm một mùa trăng hy vọng.",
  },
  {
    id: 2,
    name: "Tên KOL",
    title: "HÀNH TRÌNH CHIA SẺ YÊU THƯƠNG VỚI ĐẠI SỨ THƯƠNG HIỆU",
    description:
      "Đại sứ thương hiệu mang đến những câu chuyện cảm động về hành trình lan tỏa yêu thương. Với sự nhiệt huyết và tâm huyết, KOL 2 đã góp phần tạo nên những khoảnh khắc ý nghĩa.\n\nThông qua các hoạt động thiện nguyện, chúng tôi mong muốn kết nối cộng đồng và mang lại niềm vui cho các em nhỏ trong dịp Trung thu này.",
    avatar: "/kol-influencer-avatars.png",
    images: [
      "/children-charity-event.png",
      "/mooncake-sharing.png",
      "/volunteer-activities.png",
      "/community-outreach.png",
    ],
    bottomText:
      "Trung thu không chỉ trọn vẹn bởi ánh trăng, mà còn bởi những điều tốt đẹp được sẻ chia. Với ước mong cho các em có một mùa Trăng tròn đầy và ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc check-in nho nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều ước gửi đến các em nhỏ, và cùng nhau nhìn lại hành trình của những mùa Ấm đã qua. Không chỉ là một điểm dừng chân, đây còn là nơi kết nối những tấm lòng, để mỗi điều ước viết ra đều góp phần thắp sáng thêm một mùa trăng hy vọng.",
  },
  {
    id: 3,
    name: "Tên KOL",
    title: "CÙNG NHAU XÂY DỰNG CỘNG ĐỒNG YÊU THƯƠNG",
    description:
      "KOL 3 với vai trò đại sứ đã tích cực tham gia các hoạt động cộng đồng, mang đến những giá trị tích cực cho xã hội. Sự nhiệt tình và tinh thần trách nhiệm của KOL đã truyền cảm hứng cho nhiều người.\n\nVới mong muốn xây dựng một cộng đồng yêu thương, chúng tôi cam kết sẽ tiếp tục đồng hành cùng các hoạt động ý nghĩa.",
    avatar: "/kol-community-leader.png",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=300",
    ],
    bottomText:
      "Trung thu không chỉ trọn vẹn bởi ánh trăng, mà còn bởi những điều tốt đẹp được sẻ chia. Với ước mong cho các em có một mùa Trăng tròn đầy và ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc check-in nho nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều ước gửi đến các em nhỏ, và cùng nhau nhìn lại hành trình của những mùa Ấm đã qua. Không chỉ là một điểm dừng chân, đây còn là nơi kết nối những tấm lòng, để mỗi điều ước viết ra đều góp phần thắp sáng thêm một mùa trăng hy vọng.",
  },
];

export default function CooperateWith() {
  const [activeKOL, setActiveKOL] = useState<number>(1);

  const currentKOL = kolData.find((kol) => kol.id === activeKOL) || kolData[0];
  return (
    <section className="py-63 px-6">
      <div className="max-w-[80%] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-futura-bold tracking-wide">
            ẤM 5 & HÀNH TRÌNH LAN TỎA
          </h2>
          <h2 className="text-4xl md:text-4xl font-bold text-black mb-4 font-futura-bold tracking-wide">
            YÊU THƯƠNG CÙNG ĐẠI SỨ
          </h2>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-12">
          {/* Left side - Circle */}
          <div className="flex justify-center">
            <div className="w-150 h-150 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-7xl font-bold">KOL 1</span>
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
              Cùng <strong>THREE O&apos;CLOCK</strong>, Đại sứ sẽ trực tiếp tham
              gia các hoạt động thiện nguyện, đồng hành trong hành trình trao
              gửi những phần quà Trung thu đến các em nhỏ và kể lại những câu
              chuyện phía sau mỗi chiếc bánh được trao đi.
            </p>
            <div className="flex gap-4 pt-4">
              {kolData.map((kol) => (
                <button
                  key={kol.id}
                  onClick={() => setActiveKOL(kol.id)}
                  className={`w-60 h-10 px-6 py-2 rounded-full font-bold text-lg transition-all ${
                    activeKOL === kol.id
                      ? "bg-[#eac4a2] text-black hover:bg-[#eac4a2]/80 border border-[#eac4a2]"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {kol.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
          <div className="relative aspect-square rounded-[40px] overflow-hidden">
            <Image
              src="/img/1.png"
              alt="Team photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden">
            <Image
              src="/img/2.png"
              alt="Art supplies"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-[40px] overflow-hidden">
            <Image
              src="/img/3.png"
              alt="Handmade crafts"
              fill
              className="object-cover"
            />
          </div>
          {/* <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/colorful-paper-crafts-origami.png"
              alt="Paper crafts"
              fill
              className="object-cover"
            />
          </div> */}
        </div>
      </div>
      <div className="w-[1210px] max-w-full mx-auto text-3xl text-gray-700 leading-8 p-6 text-justify font-futura-regular rounded-lg mt-15">
        <p className="leading-tight">
          Trung thu không chỉ trọn vẹn bởi ánh trăng, mà còn bởi những điều tốt
          đẹp được sẻ chia. Với ước mong cho các em có một mùa Trăng tròn đầy và
          ý nghĩa, tại tất cả các cửa hàng, sẽ được bố trí một góc check-in nho
          nhỏ, nơi khách hàng có thể dừng lại chụp ảnh, viết điều ước gửi đến
          các em nhỏ, và cùng nhau nhìn lại hành trình của những mùa Ấm đã qua.
          Không chỉ là một điểm dừng chân, đây còn là nơi kết nối những tấm
          lòng, để mỗi điều ước viết ra đều góp phần thắp sáng thêm một mùa
          trăng hy vọng.
        </p>
      </div>
    </section>
  );
}
