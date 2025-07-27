import JewelryCard from "../components/JewelryCard";

function Jewelry() {
  return (
    <div className="bg-gray-300">
      <header className="overflow-hidden">
        <div className=" mt-[34px] object-cover shadow-md relative w-full h-[200px] sm:h-[200px] md:h-[300px] overflow-hidden">
          <img
            src="/assets/CoverPics/ideogram-v3-quality_give_me_many_beautif.png"
            alt="Jewelrypic"
            className="absolute top-6 w-full h-full object-cover object-[30%_105%]"
          />
          <h1 className="text-3xl text-gray-300 font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-6xl">
            Forever in Style
          </h1>
          <h2 className="text-white whitespace-nowrap absolute mt-2 top-1/2 left-1/2 transform -translate-x-1/2  translate-y-1/2 fontsixe-30 font-serif fontsize-5 tracking-wide sm:fontsiz-40">
            Where elegance isn't worn, it's lived.
          </h2>
        </div>
      </header>

      <main>
        <div>
          <h1 className="text-3xl text-red-900 text-center mt-16 shadow-xl font-bold transform-transition hover:shadow-xl transform-transition duration-300 transform hover:scale-110 active:scale-110  ">
            ALL STOCK
          </h1>
        </div>

        <section className="mt-12">
          <JewelryCard />
        </section>
      </main>

      <footer className="bg-black text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Jewelry;
