import Product from "../components/product";

function Clothes() {
  return (
    <div className="bg-gray-200">
      <div>
        <header className=" mt-[34px] w-full overflow-hidden relative h-[200px] sm:h-[300px] lg-[300px]">
          <img
            loading="lazy"
            src="/assets/CoverPics/beautiful-blonde-woman-blue-light.jpg"

            alt="womanpic"
            className="absolute w-full h-full object-cover top-3 object-[20%_40%] h-auto rounded-1xl"
          />
          <h2 className="text-white whitespace-nowrap absolute top-1/2 left-1/2 tranfrom -translate-x-1/2 translate-y-1/2 text-4xl font-bold font-serif tracking-wide ">
            Pure Elegance
          </h2>
          <h2 className="text-white whitespace-nowrap absolute mt-14 top-1/2 left-1/2 transform -translate-x-1/2  translate-y-1/2 fontsixe-30 font-serif fontsize-5 tracking-wide sm:fontsiz-40">
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
