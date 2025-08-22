export function Ingredient() {
  return (
    <section className="relative min-h-[1rem] flex items-center justify-center px-0 py-0 bg-transparent overflow-hidden">
      <div className="relative w-[80vw] h-[30vh] md:h-[70vh] max-w-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/img/ingredient-mobile.svg')] md:bg-[url('/img/ingredient.svg')]"
          style={{
            backgroundSize: "100% 110%",
          }}
        ></div>
      </div>
    </section>
  );
}
