export function CircularHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden">
      <div className="relative w-[100vw] h-[230vh] md:h-[230vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/moon.svg')",
            backgroundSize: "100% 110%",
          }}
        >
          {/* Decorative stars scattered around */}
          <div className="absolute top-20 left-20 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute top-32 right-24 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute bottom-40 left-16 text-orange-400 text-xs">
            ✦
          </div>
          <div className="absolute bottom-24 right-20 text-orange-400 text-xs">
            ✦
          </div>

          {/* <div className="absolute inset-16 flex flex-col items-center justify-center text-center space-y-6"> */}
          {/* <div className="mb-4">
              <h1
                className="font-serif text-4xl md:text-5xl text-amber-900 font-light tracking-wider"
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontStyle: "italic",
                }}
              >
                Ấm
              </h1>
            </div> */}

          {/* <div className="space-y-1">
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-900 leading-tight font-light tracking-wide"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                }}
              >
                Câu Chuyện
              </h2>
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-amber-900 leading-tight font-light tracking-wide"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                }}
              >
                Mùa Trăng
              </h2>
            </div> */}

          {/* <p
              className="font-serif text-base md:text-lg text-amber-800 italic font-light max-w-md tracking-wide"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Một ly trà thơm, thêm mùa trăng... ấm
            </p> */}

          {/* <div className="max-w-xl space-y-4 text-xs md:text-sm text-amber-900 leading-relaxed font-sans">
              <p className="text-justify">
                Trong mùa thu tháng chín gió nhẹ, ánh trăng đầm ấm tâm hồn, mọi
                con kí tình với cuộc sống bình yên, của ký danh là ra sao vậy.
                Tô bước đầu may mắn tìm về là bước đầu cho những tháng tháng
                khác với hạp, để tất trăng thu ra hành gia điểm vào trăng lặng
                trong ký có của mỗi người.
              </p>

              <p className="text-justify">
                Chiến dịch <strong>"Ấm"</strong> là chiến dịch thiện nguyện
                thường niên của <strong>THREE O'CLOCK</strong> phát động gây quỹ
                cho Tết Trung thu nhằm gây quỹ để tặng quà cho các em có hoàn
                cảnh khó khăn. Từ năm 2020 đến nay, chiến dịch đã thu hút được
                sự quan tâm, ủng hộ gây quỹ từ hàng nghìn bạn trẻ và những tấm
                lòng hảo tâm với số tiền lên đến hàng trăm triệu đồng.
              </p>

              <p className="text-justify">
                Trong hành trình <strong>"Ấm 5"</strong> năm nay, chúng tôi hy
                vọng điều tốt lành chúng con mơi tâm lòng, có tình mơi ngữ, ứng
                của chuyện về những lòng của khác gọi khích, học quyên để gọp
                hơn mơi mùa trăng có đây, hạn yêu yêu thương cho các em.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
