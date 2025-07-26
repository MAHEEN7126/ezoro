import { Link, useNavigate } from "react-router-dom";
import SandalCard from "../components/SandalCard";
import { useState } from "react";

function Sandal() {
  return (
    <div className="bg-gray-100">
      {/* HEADER with image and nav */}
      <header className= " mt-[34px] relative w-full h-[200px] sm:h-[300px] lg:h-[300px] overflow-hidden shadow-md">
        {/* Background Image */}
        <img
          src="/assets/CoverPics/ideogram-v3-quality_give_me_shoes_pic_we (1).png"
          alt="modelshoespic"
          className="absolute top-0 left-0 w-full h-full object-cover object-[30%_46%]"
        />

        {/* NAV on top-left of image */}
       <nav className="absolute top-5 left-3 bg-white/70 backdrop-blur-md text-red-800 text-sm sm:text-lg px-6 py-2 rounded-full shadow-md space-x-4 font-semibold">
          <Link to="/AllShoes" className="hover:underline hover:text-yellow-700">
            Shoes
          </Link>
          <Link to="/sandal" className="hover:underline hover:text-yellow-700">
            Sandals
          </Link>
          <Link to="/Sliper" className="hover:underline hover:text-yellow-700">
            Slipers
          </Link>
        </nav>

        {/* TEXT on image */}
        <h1 className="text-3xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          Walk the Legacy
        </h1>
        <h2 className="absolute top-[60%] left-1/2 -translate-x-1/2 text-sm text-white whitespace-nowrap">
          Timeless elegance, crafted into every graceful step
        </h2>
      </header>

      {/* MAIN */}
      <main className="min-h-screen">
        <h1 className="text-3xl text-red-900 text-center mt-12 pb-2 shadow-xl font-bold transition duration-300 transform hover:shadow-xl hover:scale-105 active:scale-105">
          Sandals
        </h1>

        <section className="mt-12">
          <SandalCard />
        </section>
      </main>

        <footer className="bg-black text-white text-center py-4 mt-10">
    <p className="text-sm">© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
  </footer>
 /</div>
  );
}

export default Sandal;
