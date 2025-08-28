import Image from "next/image";

export default function DSGTPage() {
  return (
    <div className="w-full p-0 flex flex-col items-center bg-[url('/img/dsgt-bg.svg')]">
      {/* Top Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        {/* Main Avatar */}
        <div className="relative mt-6">
          <div className="relative w-[100vw] h-[150vh] md:h-[148vh] max-w-none">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/img/dsgt-main.svg')]"
              style={{
                backgroundSize: "100% 110%",
              }}
            ></div>
          </div>
          <div className="relative w-[80%] h-[380px] md:h-[570px] mb-30">
            <Image
              src="/img/dsgt-under-tittle.svg"
              alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-12 w-[90%] h-[390px] md:h-[690px] mb-10">
        <div className="relative w-full h-[380px] md:h-[46rem] mb-0">
          <Image
            src="/img/dai-su-item.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[46rem] mb-0">
          <Image
            src="/img/dai-su-item.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[46rem] mb-0">
          <Image
            src="/img/dai-su-item.svg"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="text-center mt-40 mb-30">
        <h2 className="text-lg md:text-8xl font-extrabold text-black font-futura-bold tracking-wide mb-6">
          80 ĐSTT
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-20 w-[85%] h-[390px] md:h-[25rem] mb-2">
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-20 w-[85%] h-[390px] md:h-[25rem] mb-2">
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-20 w-[85%] h-[390px] md:h-[25rem] mb-2">
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-20 w-[85%] h-[390px] md:h-[25rem] mb-2">
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-20 w-[85%] h-[390px] md:h-[25rem] mb-2">
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="relative w-full h-[380px] md:h-[21rem] mb-0">
          <Image
            src="/img/1.png"
            alt="Bệnh viện Nhi Đồng 1 với trang trí bóng bay"
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
