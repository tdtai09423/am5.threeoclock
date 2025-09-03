import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full p-0 flex flex-col items-center bg-[url('/img/bg-kol.svg')]">
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-[90%] md:w-[80%] max-w-6xl mx-auto mb-10 px-4">
        {/* <div className="w-full">
          <Image
            src="/img/dien-vien-tri-tam-small-pic.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            width={1200}
            height={1200}
            className="w-full h-auto"
            priority={false}
          />
        </div> */}
        <div className="w-full">
          <Image
            src="/img/bubble.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
