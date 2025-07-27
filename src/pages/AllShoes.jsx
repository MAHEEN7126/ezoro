import { Link } from "react-router-dom";
import ShoesCard from "../components/ShoesCard";

function AllShoes() {
  return (
    <div className="bg-gray-200">
      <header className=" mt-[34px] relative  w-full h-[200px] sm:h-[200px] lg:h-[300px] overflow-hidden shadow-md">
        <img
          src="/assets/CoverPics/ideogram-v3-quality_give_me_models_are_s (1).png"
          alt="ShoesPic"
          className="absolute top-0 left-0 w-full h-full object-cover object-[30%_100%]"
        />

        <nav className="absolute top-5 left-3 bg-white/70 backdrop-blur-md text-red-800 text-sm sm:text-lg px-6 py-2 rounded-full shadow-md space-x-4 font-semibold">
          <Link
            to="/AllShoes"
            className="hover:underline hover:text-yellow-700"
          >
            Shoes
          </Link>
          <Link to="/sandal" className="hover:underline hover:text-yellow-700">
            Sandals
          </Link>
          <Link to="/Sliper" className="hover:underline hover:text-yellow-700">
            Slipers
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          Walk the Legacy
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-white whitespace-nowrap mt-5 sm:mt-6 md:mt-7 lg-mt-9">
          Timeless elegance, crafted into every graceful step
        </h2>
      </header>

      <main>
        <h1 className="text-4xl text-red-900 text-center mt-16 shadow-xl font-bold transition duration-300 transform hover:shadow-xl hover:scale-110 active:scale-110">
          Shoes
        </h1>

        <section id="shoeCard">
          <ShoesCard />
        </section>
      </main>

      <div>
        <footer className="bg-black text-white text-center py-4 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AllShoes;
