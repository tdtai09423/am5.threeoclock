import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full p-0 flex flex-col items-center bg-[url('/img/bg-kol.svg')]">
      {/* Top Section */}
      <div className="w-screen max-w-none flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-0 w-screen h-screen">
          <div className="relative w-screen h-screen">
            <div className="absolute inset-0 bg-left bg-no-repeat bg-[length:100%_auto] bg-[url('/img/dien-vien-tri-tam-large-pic.svg')]" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 grid-cols-[2fr_5fr] gap-30 w-[80%] h-[390px] md:h-[690px] mb-10">
        <div className="relative w-full h-[380px] md:h-[570px] mb-0">
          <Image
            src="/img/dien-vien-tri-tam-small-pic.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[500px] mb-0">
          <Image
            src="/img/bubble.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}