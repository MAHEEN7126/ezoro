import { Link } from "react-router-dom";
import SlipersCard from "../components/SlipersCard";

function Sliper() {
  return (
    <div className="bg-gray-100">
      <header className="overflow-hidden">
        <div className=" mt-[34px] relative shadow-md w-full h-[200px] sm:h-[200px] lg:h-[300px] overflow-hidden">
          <img
            loading="lazy"
            src="/assets/CoverPics/ideogram-v3-quality_give_me_models_are_s.png"
            alt="Slipper Cover"
            className="absolute   w-full h-full object-cover object-[30%_100%]"
          />
          <h1 className="text-3xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-md">
            Comfort Meets Class
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 whitespace-nowrap text-sm text-gray-200">
            Luxury crafted for every relaxed step
          </p>
        </div>

        <nav className="absolute top-14 left-3 bg-white/70 backdrop-blur-md text-red-800 text-sm sm:text-lg px-6 py-2 rounded-full shadow-md space-x-4 font-semibold">
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
      </header>

      <main className="min-h-screen">
        <h1 className="text-3xl text-red-900 text-center mt-12 pb-2 shadow-xl font-bold transition duration-300 transform hover:shadow-xl hover:scale-105 active:scale-105">
          Slippers
        </h1>
        <section className="mt-12">
          <SlipersCard />
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

export default Sliper;
