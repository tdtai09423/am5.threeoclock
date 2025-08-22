export default function Footer() {
  return (
    <section className="relative flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden pt-1 md:mt-40 pb-1 md:pb-10">
      <div className="relative w-[90vw] h-[15vh] md:h-[40vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/img/footer-mobile.svg')] md:bg-[url('/img/footer.svg')]"
          style={{
            backgroundSize: "100% 110%",
          }}
        ></div>
      </div>
    </section>
  );
}
