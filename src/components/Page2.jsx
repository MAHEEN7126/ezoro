import React, { useEffect, useRef } from "react";

function Page2() {
  return (
    <div className="w-full  h-[150px]  bg-white items-center justify-center justify-center">
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-hide scroll-smooth touch-pan-x pt-12">
        {[
          "/assets/Page2Pics/ideogram-v2_make_a_model_but_ful (1).png",
          "/assets/Footwears/FootwearSlipers/ideogram-v2_give_me_slipper_bu (1).png",
          "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l (2).png",
          "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (7).png",
          "/assets/Footwears/FootwearSandals/flux-1-kontext-pro_make_descent_and_sta (1).png",
          "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (2).png",
          "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (7).png",
          "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_create_a_slipper_pic (1).png",
          "/assets/Page2Pics/ideogram-v3-quality_create_a_1_standing_ (5).png",
          "/assets/Page2Pics/ideogram-v3-quality_give_me_stylish_and_.png",

        ].map((filename, index) => (
          <div
            key={index}
            className="snap-center shrink-0 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 transition-transform duration-400 transform hover:scale-110 active:scale-110 rounded-lg overflow-hidden"
          >
            <img
              src={filename}
              alt={`image-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
