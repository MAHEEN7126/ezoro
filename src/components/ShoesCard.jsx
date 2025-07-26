import React, { useState } from "react";

import { useCart } from "../context/CartContext";
function ShoesCard() {
  const { addToCart } = useCart();
   const [clickedIndex, setClickedIndex] = useState(null);

  const shoesItem = [
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l (1).png",
      name: "Urban Cloud",
      price: "$79.99",
      Discription:
        "Soft as clouds, bold as the city — designed for modern motion.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l (2).png",
      name: "Lemon Light",
      price: "$84.50",
      Discription:
        "Brighten your steps with this citrus-inspired lightweight footwear.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l (3).png",
      name: "Bright Drift",
      price: "$62.99",
      Discription:
        "Casual yet radiant — the ideal slip-on for relaxed movement.",
    },

     {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l (4).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
  {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },

     {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
     {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (2).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
     {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (3).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    }, {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (4).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    }, {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (5).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    }, {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (6).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    }, {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (7).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    }, {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (8).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },

    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (9).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },{
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (10).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },{
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (11).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },{
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (12).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
{
      image:
        "/assets/Footwears/FootwearShoes/flux-1-kontext-pro_make_jogger_shoes_p.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },{
      image:
        "/assets/Footwears/FootwearShoes/gpt-image-1_make_jogger_shoes_p.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 px-2 mt-5 gap-5">
        {shoesItem.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 active:scale-105 overflow-hidden"
          >
            <img
              src={item.image}
              alt={`shoes ${index + 1}`}
              className="p-4 rounded-3xl hover:transition-transform duration-300 transform hover:scale-105 overflow-hidden"
            />
            <h1 className="text-3xl font-bold text-center text-black py-2">
              {item.name}
            </h1>
            <p className="whitespace-nowrap text-xs text-center text-black">
              {item.Discription}
            </p>
            <p className="text-xl font-bold text-center text-black pb-2">
              {item.price}
            </p>
                 <div className="flex grid grid-cols justify-center mt-3 pb-6">
                          <button
                onClick={() => {
                  addToCart(item);
                  setClickedIndex(index);
                  setTimeout(() => setClickedIndex(null), 2000);
                }}
                className="bg-black text-white px-4 py-1 rounded hover:bg-gray-600 transition"
              >
                Add to Cart
              </button>

              {clickedIndex === index && (
                <p className="mt-4 text-center text-white text-sm bg-black/50 px-3 py-1 rounded-full shadow-md backdrop-blur-md animate-pulse">
                   Added to Cart
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoesCard;
