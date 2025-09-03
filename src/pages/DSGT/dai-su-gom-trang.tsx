"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DSGTPage() {
  const items = [
    { src: "/img/dai-su-item-1.svg", alt: "Đại sứ 1" },
    { src: "/img/dai-su-item-2.svg", alt: "Đại sứ 2" },
    { src: "/img/dai-su-item-3.svg", alt: "Đại sứ 3" },
  ];

  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const total = items.length;
    const next = (i + total) % total;
    setIdx(next);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const applyEffects = () => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.getBoundingClientRect().left + el.clientWidth / 2;

    slideRefs.current.forEach((node) => {
      if (!node) return;
      const r = node.getBoundingClientRect();
      const slideCenter = r.left + r.width / 2;
      const dist = Math.abs(slideCenter - center);

      // t: 1 = ở giữa, 0 = xa mép
      const t = Math.max(0, 1 - dist / (el.clientWidth / 1.2));
      const scale = 0.93 + 0.07 * t;
      const opacity = 0.55 + 0.45 * t;
      const blur = 2 * (1 - t);

      node.style.transform = `scale(${scale})`;
      node.style.opacity = String(opacity);
      node.style.filter = `blur(${blur}px)`;
    });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const newIdx = Math.round(el.scrollLeft / el.clientWidth);
    if (newIdx !== idx) setIdx(newIdx);
    requestAnimationFrame(applyEffects);
  };

  useEffect(() => {
    // init effect + resnap khi resize
    applyEffects();
    const reSnap = () => {
      goTo(idx);
      requestAnimationFrame(applyEffects);
    };
    window.addEventListener("resize", reSnap);
    return () => window.removeEventListener("resize", reSnap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div className="w-full p-0 flex flex-col items-center overflow-x-hidden bg-[url('/img/dsgt-bg.svg')] bg-top bg-no-repeat bg-[length:100%_auto]">
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen">
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/img/dsgt-main.svg')" }}
            />
          </div>
          <div className="relative w-[92%] sm:w-[88%] md:w-[82%] h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] mb-12">
            <Image
              src="/img/dai-su-item.svg"
              alt="Đại sứ đồng hành"
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 60vw, 92vw"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section — desktop */}
      <div className="hidden md:grid grid-cols-3 gap-10 w-[95%] max-w-6xl mx-auto h-auto mb-10">
        {items.map((it) => (
          <div key={it.src} className="relative w-full aspect-[2/3]">
            <Image
              src={it.src}
              alt={it.alt}
              fill
              className="object-contain object-center"
              sizes="(min-width: 768px) 33vw"
            />
          </div>
        ))}
      </div>

      {/* Bottom Section — mobile slider */}
      <div className="md:hidden relative w-full mb-14">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {items.map((it, i) => (
            <div key={it.src} className="min-w-full snap-start px-5">
              <div
                ref={(el) => {
                  if (el) slideRefs.current[i] = el;
                }}
                className="relative w-full aspect-[3/4] transition-[transform,opacity,filter] duration-300 ease-out will-change-transform"
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          aria-label="Prev slide"
          onClick={() => goTo(idx - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center active:scale-95"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={() => goTo(idx + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center active:scale-95"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Đi tới slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === idx ? "bg-black w-6" : "bg-white/80 w-2.5 border border-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    {/* </div>
  );
} */}



      {/* <div className="text-center mt-40 mb-30">
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
      </div> */}
    </div>
  );
}
