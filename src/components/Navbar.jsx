import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-between  py-1 bg-white shadow-md">
      <div
        className="w-full h-[53px] bg-white/30 backdrop-blur-md text-blackshadow-xl font-bold 
          Shoes py-4 px-4 sm:px-10 flex flex-wrap justify-center gap-9 sm:gap-20 text-base sm:text-lg fixed top-0 z-50 overflow-hidden"
      >
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="/"
        >
          Home
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="Clothes"
        >
          Clothes
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="Jewelry"
        >
          Jewelry
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="AllShoes"
        >
          Shoes
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="Profile"
        >
          Profile
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="Cart"
        >
          cart
        </Link>
        <Link
          className="transition duration-300 transform hover:shadow-sm hover:scale-110 active:scale-110"
          to="Signup"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
