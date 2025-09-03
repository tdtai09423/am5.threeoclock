import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full p-0 flex flex-col items-center">
      {/* Top Section */}
      <div className="w-screen max-w-none flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-0 w-screen">
          <Image
            src="/img/dien-vien-tri-tam-large-pic.svg"
            alt="Diễn viên Trí Tâm"
            width={3000}
            height={1500}
            priority
            unoptimized
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-screen max-w-none flex items-center justify-center min-h-[100vh] mb-10 px-4">
        {/* <div className="w-full"></div>
          <Image
            src="/img/dien-vien-tri-tam-small-pic.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            width={1200}
            height={1200}
            className="w-full h-auto"
            priority={false}
          />
        </div> */}
        <div className="relative w-[90vw] md:w-[80vw] h-[100vh]">
          <Image
            src="/img/bubble.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-contain object-center"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
