import React from "react";

function Header() {
  return (
    <header className="w-full h-screen ">
      <div className="realtive w-full overflow-hidden h-[100px]">
      <h1 className="animate-scroll whitespace-nowrap text-6xl sm:text-7xl md:text-7xl font-bold tracking-wide text-[#1a1a1a] my-4 sm:my-5 transition-all duration-700 hover: tracking-[0.4rem] hover:text-[#5e4b8b]">
      <span className="inline-block px-4">~Every thread tells a secret</span>
      <span className="inline-block px-4">~Every thread tells a secret</span>
        <span className="inline-block px-4">~Every thread tells a secret</span>
      </h1>
      </div>
      <div className=" h-full ">
        <video
          autoPlay
          loop
          playsInline
          muted
          src="/assets/CoverPics/6009714_4k_Video_Attractive_3840x2160.mp4"
          type="video/mp4" className="w-full h-full object-cover"
        />
      </div>



    </header>
  );
}

export default Header;
