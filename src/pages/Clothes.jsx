import Product from "../components/product";

function Clothes() {
  return (
    <div className="bg-gray-200">
      <div>
        <header className="w-full mt-[37px] overflow-hidden relative h-[200px] sm:h-[300px] lg:h-[300px]">
          <img
            loading="lazy"
            src="/assets/CoverPics/beautiful-blonde-woman-blue-light.jpg"
            alt="womanpic"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
          <h2 className="text-white whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-serif tracking-wide">
            Pure Elegance
          </h2>
          <h2 className="text-white absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-serif tracking-wide">
            Where elegance isn't worn, it's lived.
          </h2>
        </header>
      </div>

      <main className="min-h-screen">
        <h1 className="text-3xl text-red-900 text-center mt-16 shadow-xl font-bold transform-transition hover:shadow-xl  transition-transform duration-300 transform hover:scale-105 active:scale-105 ">
          ALL STOCK
        </h1>
        <section>
          <Product />
        </section>
      </main>
      <footer className="bg-black text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} ezoro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default Clothes;
