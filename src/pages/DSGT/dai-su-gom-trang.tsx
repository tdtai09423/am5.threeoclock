"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const dsttCollections = [
  {
    id: "dstt1",
    images: [
      "/dstt1/03f61fab4b8593b5829ffc6238bb80597e80e0eb.jpg",
      "/dstt1/16ab8d8c25654d2d29b079c793bb529542a4911e.jpg",
      "/dstt1/28696deb797982e064a5d9ef9e2947507f1652ad.jpg",
      "/dstt1/3193f46950b52b968dd36e3af6448cd778f35b04.jpg",
      "/dstt1/3d5d3a88e6604ee046bad24ce3b7db7540dacf32.jpg",
      "/dstt1/4b16c3d7de01378cf59ae573ff261ac07d45e4b9.jpg",
      "/dstt1/4c5baf9b0d56342ba582acbccf80ea61fbe8f287.jpg",
      "/dstt1/5c3b9c22a79d36f5e63e9caf6f6d9a569ac35311.jpg",
      "/dstt1/67b4602b595209afdb05175f0c19a98acfec5aaf.jpg",
      "/dstt1/71bd4bcb81925da5fea5a4297f1eb55f2de26f20.jpg",
      "/dstt1/8486309aa8384eb34120ffdfc31e19ca8f49aaaa.jpg",
      "/dstt1/8c1564fb3d689c5a4ceca3af41cf7f8673f2c647.jpg",
      "/dstt1/94a056eca8ea81dff6d6fa9f9c87949e568f8355.jpg",
      "/dstt1/b1933784e6ff7e730a789b1fc94e24f5db23ee23.jpg",
      "/dstt1/b272fe90f0cd1c654d9bd749b0e13ddfad5a5f3e.jpg",
      "/dstt1/c26166d3aa9acf3d4e4a16cbe7a3e7bed5bd4e30.jpg",
      "/dstt1/d435cb53214410bf57ff7bc6a8979bf0d536846c.jpg",
      "/dstt1/d74b95e4d90265343ad9402cc8dd38c972ff8a26.jpg",
      "/dstt1/d89d2adb92a31417a70a318698cf3f3b9691f9ab.jpg",
      "/dstt1/e5b9d81e5989f40cf24cd1073f23ffbfab84d7cd.jpg",
    ],
  },
  {
    id: "dstt2",
    images: [
      "/dstt2/05251af65f2af9f0dc1847d1d73fc4c42a6ccdbe.jpg",
      "/dstt2/05aa935e33913ffd427ca13089843b5e59cd3104.jpg",
      "/dstt2/0a5075593a74c92b88b691a24bdc4a46cb2bf206.jpg",
      "/dstt2/0f8782728e189a04dde0471c23933653f639b7d2.png",
      "/dstt2/169c977fe579a288bdd176a59ff4721112368c74.jpg",
      "/dstt2/17524ed510b02ec5950edd4ff433c960602cb891.jpg",
      "/dstt2/2154dc3b2a579fa7d82c9d7042b88d164520ec01.jpg",
      "/dstt2/4b3686e7e49391c94d8f4dfb29beb2ba9400dff2.jpg",
      "/dstt2/77915fe404b18d06d62486c6d8bbaea669eedf8e.png",
      "/dstt2/8478a9ee56e2433c97e8b7afc39ceb6253b1a1cf.jpg",
      "/dstt2/8cbfecd87cf73d7e97e3101f8f5543b74388d210.jpg",
      "/dstt2/9f1251e9b675e222b8cb6e49b84ac7957419ce21.jpg",
      "/dstt2/a23dbca129deeedd36b7ed9eff1d40dd5f0765a4.jpg",
      "/dstt2/b06057d064e1d72f2bb222b772f0d19d175a0a00.jpg",
      "/dstt2/b6a41ade65c1cfc75e6a4582f2bc82280e3223ec.jpg",
      "/dstt2/bff9c17125f014cf116a81bbe352e44a171dcfe8.jpg",
      "/dstt2/cb58e854dc50f654a61d202cfa4c1d6f4af3fd9b.jpg",
      "/dstt2/dcb24f84fbf1a61daeac3a42404998b2b4143d50.jpg",
      "/dstt2/f364dd64ad693a675a04fa36eb7c96b3c321befc.jpg",
      "/dstt2/f4119cb1c764b29de68a84d42080b3c3e683bbbd.jpg",
    ],
  },
  {
    id: "dstt3",
    images: [
      "/dstt3/0399883ef0f4c4f823fbbd40b0dcdcd9943ff21c.jpg",
      "/dstt3/05251af65f2af9f0dc1847d1d73fc4c42a6ccdbe.jpg",
      "/dstt3/0a5075593a74c92b88b691a24bdc4a46cb2bf206.jpg",
      "/dstt3/0f8782728e189a04dde0471c23933653f639b7d2.png",
      "/dstt3/169c977fe579a288bdd176a59ff4721112368c74.jpg",
      "/dstt3/2154dc3b2a579fa7d82c9d7042b88d164520ec01.jpg",
      "/dstt3/46d0080f94a15887ff01aaeff66fe9b3ed08cb28.jpg",
      "/dstt3/77915fe404b18d06d62486c6d8bbaea669eedf8e.png",
      "/dstt3/8478a9ee56e2433c97e8b7afc39ceb6253b1a1cf.jpg",
      "/dstt3/8a22a6ef5e361f96676b47c32dfc03e71de5915e.jpg",
      "/dstt3/8cbfecd87cf73d7e97e3101f8f5543b74388d210.jpg",
      "/dstt2/9f1251e9b675e222b8cb6e49b84ac7957419ce21.jpg",
      "/dstt3/a23dbca129deeedd36b7ed9eff1d40dd5f0765a4.jpg",
      "/dstt3/b06057d064e1d72f2bb222b772f0d19d175a0a00.jpg",
      "/dstt3/b6a41ade65c1cfc75e6a4582f2bc82280e3223ec.jpg",
      "/dstt3/cb58e854dc50f654a61d202cfa4c1d6f4af3fd9b.jpg",
      "/dstt3/dcb24f84fbf1a61daeac3a42404998b2b4143d50.jpg",
      "/dstt3/e3e2e63504a3b34af398cb09e71ed82ee956e4c8.jpg",
      "/dstt3/f364dd64ad693a675a04fa36eb7c96b3c321befc.jpg",
      "/dstt3/f4119cb1c764b29de68a84d42080b3c3e683bbbd.jpg",
    ],
  },
];

export default function DSGTPage() {
  const items = [
    { src: "/img/dai-su-item-1.svg", alt: "Đại sứ 1" },
    { src: "/img/dai-su-item-2.svg", alt: "Đại sứ 2" },
    { src: "/img/dai-su-item-3.svg", alt: "Đại sứ 3" },
  ];

  const [idx, setIdx] = useState(0);
  const [dsttPage, setDsttPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const currentDsttGroup = dsttCollections[dsttPage] ?? dsttCollections[0];

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
      {/* ===================== TOP SECTION ===================== */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* dsgt-main.svg: scale 1.3, neo TOP; giảm h + negative margin ở mobile để bớt gap */}
          <div className="relative w-full h-[50vh] sm:h-[58vh] md:h-[85vh] lg:h-screen overflow-visible -mb-8 sm:-mb-12 md:mb-0">
            <div
              className="
                absolute top-0 left-1/2 -translate-x-1/2
                h-full w-screen
                bg-no-repeat bg-top bg-contain
                origin-top scale-[1.3]
                pointer-events-none
              "
              style={{ backgroundImage: "url('/img/dsgt-main.svg')" }}
            />
          </div>

          {/* banner dưới */}
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

      {/* ===================== BOTTOM SECTION — DESKTOP ===================== */}
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

      {/* ===================== BOTTOM SECTION — MOBILE SLIDER ===================== */}
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
          {[0, 1, 2].map((i) => (
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

      {/* ===================== 80 ĐSTT SECTION ===================== */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 text-black mb-12">
            <span className="hidden sm:block relative w-5 h-5">
              <span className="absolute inset-0 bg-white/70 rotate-45 rounded-sm" />
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide">80 ĐSTT</h2>
            <span className="hidden sm:block relative w-5 h-5">
              <span className="absolute inset-0 bg-white/70 rotate-45 rounded-sm" />
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
            {currentDsttGroup.images.map((src, index) => (
              <div key={`${currentDsttGroup.id}-${index}`} className="flex flex-col items-center gap-4 text-black">
                <div className="relative w-64 h-64 md:w-64 md:h-64">
                  <Image
                    src={src}
                    alt={`${currentDsttGroup.id} member ${index + 1}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 25vw, 45vw"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#C19268] text-white text-sm font-medium shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2F241E] font-semibold">
                    f
                  </span>
                  Social link
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {dsttCollections.map((collection, pageIndex) => (
              <button
                key={collection.id}
                aria-label={`Xem nhóm ${collection.id}`}
                onClick={() => setDsttPage(pageIndex)}
                className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                  dsttPage === pageIndex
                    ? "bg-[#2F241E] border-[#2F241E] scale-110"
                    : "bg-white border-[#2F241E]/40 hover:bg-[#C19268]/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
