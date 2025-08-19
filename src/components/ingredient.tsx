export function Ingredient() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden">
      <div className="relative w-[60vw] h-[70vh] md:h-[70vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/ingredient.svg')",
            backgroundSize: "100% 110%",
          }}
        >
          {/* Decorative stars scattered around */}
          {/* <div className="absolute top-20 left-20 text-orange-400 text-xs">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
