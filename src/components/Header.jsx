function Header() {
  return (
    <header className="w-full  h-screen">
      <div className="realtive w-full overflow-hidden h-full">
        <img
          loading="lazy"
          src="/assets/CoverPics/ideogram-v3-quality_create_a_1_standing_ (2).png"
          alt="womanpic"
          className=" w-[400px] h-full mt-12 object-[50%_30%] sm:object-[30%_40%]  absolute w-full h-full object-cover top-3 object-[20%_40%] h-auto rounded-1xl"
        />

        <h1 className="animate-scroll whitespace-nowrap text-6xl sm:text-7xl md:text-7xl font-bold tracking-wide text-[#1a1a1a] my-4 sm:my-5 transition-all duration-700 hover: tracking-[0.4rem] hover:text-[#5e4b8b]">
          <span className="inline-block px-4">
            ~Every thread tells a secret
          </span>
          <span className="inline-block px-4">
            ~Every thread tells a secret
          </span>
          <span className="inline-block px-1">
            ~Every thread tells a secret
          </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;  