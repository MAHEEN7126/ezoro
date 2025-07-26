import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-[53px] bg-white/30 backdrop-blur-md text-black font-normal shadow-md py-4 px-6 sm:px-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg fixed top-0 z-50 overflow-hidden">
      <Link to="/">Home</Link>
      <Link to="Clothes">Clothes</Link>
      <Link to="Jewelry">Jewelry</Link>
      <Link to="AllShoes">Shoes</Link>
      <Link to="Profile">Profile</Link>
      <Link to="Cart">cart</Link>
      <Link to="Signup">Signup</Link>
    </nav>
  );
}
export default Navbar;
