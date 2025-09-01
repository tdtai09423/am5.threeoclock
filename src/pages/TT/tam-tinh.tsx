import Image from "next/image";

/** Card trích dẫn – có vòng tròn đè lên, và SAFE PADDING né vòng tròn */
function TestimonialCard({
  children,
  side = "left",
  tall = false,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  tall?: boolean;
}) {
  // vị trí vòng tròn (đè lên card)
  const circleSide =
    side === "left"
      ? "after:-left-10 md:after:-left-16"
      : "after:-right-10 md:after:-right-16";

  // căn card trái/phải
  const align = side === "left" ? "mr-auto" : "ml-auto";

  // chừa chỗ cho vòng tròn + top padding cho card trên
  const safePad =
    side === "left"
      ? // vòng tròn trái -> chừa bên trái + thêm top nhiều hơn
      "pl-[120px] md:pl-[180px] pt-16 md:pt-20 pr-8 md:pr-10 pb-8 md:pb-10"
      : // vòng tròn phải -> chừa bên phải
      "pr-[120px] md:pr-[180px] pt-10 md:pt-12 pl-8 md:pl-10 pb-8 md:pb-10";

  return (
    <blockquote
      className={[
        "relative isolate w-[92%] max-w-[900px]",
        // vòng tròn đè lên card
        "after:content-[''] after:absolute after:-top-14 md:after:-top-20",
        "after:h-[150px] after:w-[150px] md:after:h-[230px] md:after:w-[230px]",
        "after:bg-[#FBEFDF] after:rounded-full after:z-20 after:pointer-events-none",
        circleSide,
        align,
      ].join(" ")}
    >
      <div
        className={[
          "relative z-10 bg-white rounded-[28px] md:rounded-[36px]",
          "shadow-[0_16px_60px_rgba(0,0,0,0.08)]",
          safePad, // >>> padding né vòng tròn
          tall ? "min-h-[340px] md:min-h-[460px]" : "",
        ].join(" ")}
      >
        {/* quote mở ở góc trái trong vùng safe */}
        <span
          aria-hidden
          className="block text-[#A8825F] text-2xl md:text-3xl mb-13"
        >
          “
        </span>

        <p className="text-[15px] md:text-[16px] leading-relaxed text-neutral-900">
          {children}
        </p>

        {/* quote đóng ở góc phải dưới, nằm trong vùng safe */}
        <span
          aria-hidden
          className="absolute bottom-4 right-6 md:right-8 text-[#A8825F] text-2xl md:text-3xl"
        >
          ”
        </span>
      </div>
    </blockquote>
  );
}

export default function TTPage() {
  return (
    <div className="relative isolate w-full p-0 flex flex-col items-center bg-white">

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-40
                   bg-gradient-to-b from-white via-white/85 to-transparent z-0"
      />


      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        <div className="relative mt-2 md:mt-6">
          <div className="relative w-[100vw] h-[65vh] md:h-[148vh] max-w-none">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-[url('/img/main-tam-tinh.svg')] bg-contain md:bg-cover"></div>

            {/* ⬇️ Bridge: fade trắng → trong suốt ở mép dưới khối trên */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0
                 h-12 md:h-40 bg-gradient-to-b
                 from-white via-white/90 to-transparent z-20"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mb-6 md:mb-12">
        <h2 className="text-4xl md:text-9xl font-bold text-black mb-0 font-futura-bold tracking-wide ">
          TÂM TÌNH
        </h2>
        <h2 className="text-4xl md:text-7xl font-bold text-black mb-0 font-snell tracking-wide">
          Từ đội ngũ nhân viên
        </h2>
        <h2 className="text-4xl md:text-7xl font-bold text-black mb-0 font-snell tracking-wide">
          Three O&apos;clock
        </h2>
      </div>

      {/* Section từ TÂM TÌNH trở xuống: nền #EDD0B1 + fade ở đầu */}
      <section className="relative w-full bg-[#EDD0B1] pt-10 md:pt-14">
        {/* Noise overlay cho nền hạt */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/img/dsgt-bg.svg')] bg-cover bg-center opacity-35 mix-blend-multiply z-0 pointer-events-none"
        />
        {/* Mây hai bên: nằm trên nền, dưới nội dung */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/2 bg-[url('/img/cloud.png')] bg-left bg-repeat-y bg-no-repeat bg-[length:auto_320px] md:bg-[length:auto_420px] opacity-80 pointer-events-none z-0"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-1/2 bg-[url('/img/cloud.png')] bg-right bg-repeat-y bg-no-repeat bg-[length:auto_320px] md:bg-[length:auto_420px] opacity-80 pointer-events-none z-0"
        />
        {/* Fade đầu section: từ trắng xuống trong suốt (để lộ nền #EDD0B1 bên dưới) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -mt-6 md:-mt-10 h-16 md:h-28 bg-gradient-to-b from-white via-white/80 to-transparent z-[1]"
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-4 md:gap-30 w-[92%] md:w-[80%] mx-auto mb-8 md:mb-10">
          <div className="relative w-full h-[360px] md:h-[600px] mb-0">
            <Image src="/img/dien-vien-tri-tam-small-pic.svg" alt="" fill className="object-contain md:object-cover object-center" />
          </div>
          <div className="relative w-full md:w-[95%] h-[220px] md:h-[500px] mb-0 mt-2 md:mt-0">
            <Image src="/img/bubble.svg" alt="" fill className="object-contain md:object-cover object-center" />
          </div>
        </div>

        <div className="relative z-10 w-full py-12 md:py-20">
          <div className="max-w-[1500px] mx-auto px-4 space-y-16 md:space-y-24">
            {/* Hai card placeholder trên cùng (nền trắng) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="h-[220px] md:h-[300px] bg-white rounded-[40px] shadow-[0_12px_30px_rgba(0,0,0,0.06)]" />
              <div className="h-[220px] md:h-[300px] bg-white rounded-[40px] shadow-[0_12px_30px_rgba(0,0,0,0.06)]" />
            </div>

            {/* Card trên – vòng tròn TRÁI (chiều cao chuẩn) */}
            <TestimonialCard side="left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo.
            </TestimonialCard>

            {/* Card dưới – vòng tròn PHẢI (cao hơn) */}
            <TestimonialCard side="right">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
              pretium tellus duis convallis. Tempus leo.
            </TestimonialCard>
          </div>
        </div>
      </section>
    </div>
  );
}
