import Image from "next/image";

export default function KolPage() {
  return (
    <div className="w-full overflow-x-hidden p-0 flex flex-col items-center bg-[url('/img/bg-kol.svg')] bg-top bg-no-repeat bg-[length:100%_auto]">
      {/* Top Section */}
      <div className="w-full max-w-none flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-0 w-full">
          <Image
            src="/img/dien-vien-tri-tam-large-pic.svg"
            alt="Diễn viên Trí Tâm"
            width={3000}
            height={1500}
            priority
            sizes="100vw"
            className="w-full h-auto"    // <-- không còn 100vw
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-6xl flex items-center justify-center min-h-[100vh] mb-10 px-4">
        {/* Nếu cần ảnh nhỏ thì mở cái block dưới và bỏ cái bubble to này */}
        {/* <div className="w-full">
          <Image
            src="/img/dien-vien-tri-tam-small-pic.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div> */}
        <div className="relative w-[90vw] md:w-[80vw] aspect-[16/10]">
          <Image
            src="/img/bubble.svg"
            alt="Khung thoại"
            fill
            className="object-contain object-center"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
