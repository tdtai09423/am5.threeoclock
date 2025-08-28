import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full p-0 flex flex-col items-center bg-[url('/img/bg-kol.svg')]">
      {/* Top Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-6">
          <div className="relative w-[100vw] h-[150vh] md:h-[148vh] max-w-none">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/img/dien-vien-tri-tam-large-pic.svg')]"
              style={{
                backgroundSize: "100% 110%",
              }}
            ></div>
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
