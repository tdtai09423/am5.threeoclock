export function CircularHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden">
      <div className="relative w-[100vw] h-[150vh] md:h-[230vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/img/moon-mobile.svg')] md:bg-[url('/img/moon.svg')]"
          style={{
            backgroundSize: "100% 110%",
          }}
        ></div>
      </div>
    </section>
  );
}
