import { useState } from "react";

import { useCart } from "../context/CartContext";
function ShoesCard() {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null);
  const shoesItem = [
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l.png",
      name: "Aurora Blaze",
      price: "$69.99",
      Discription: "Radiate style with fiery tones and futuristic comfort.",
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
      name: "Neon Horizon",
      price: "$89.00",
      Discription:
        "Step into the future with vibrant tones and a bold silhouette.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v2_make_a_descent_and_l.png",
      name: "Mystic Mist",
      price: "$68.25",
      Discription: "Inspired by foggy dawns — subtle, stylish, and serene.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (3).png",
      name: "Shadow Flex",
      price: "$73.49",
      Discription: "Dark-toned dynamism that adapts to every stride.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (4).png",
      name: "Crimson Run",
      price: "$92.00",
      Discription:
        "Energize your day with bold red hues and cushioned performance.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (5).png",
      name: "Icy Surge",
      price: "$76.80",
      Discription: "Cool blues and crisp comfort for all-day freshness.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (6).png",
      name: "Forest Pace",
      price: "$81.25",
      Discription: "Earthy tones and agile movement meet in perfect balance.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (7).png",
      name: "Steel Shift",
      price: "$79.99",
      Discription: "A metallic grey blend crafted for flexible motion.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (8).png",
      name: "Midnight Volt",
      price: "$87.45",
      Discription: "Dark aesthetics fused with electric energy and speed.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (9).png",
      name: "Sky Pulse",
      price: "$71.90",
      Discription: "Feel the rhythm of comfort with every step skyward.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (10).png",
      name: "Sunset Orbit",
      price: "$86.00",
      Discription: "Burnt oranges and golds for dusk-inspired flair.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (11).png",
      name: "Echo Peak",
      price: "$70.99",
      Discription: "Inspired by alpine echoes — rugged, resilient, responsive.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (12).png",
      name: "Lunar Step",
      price: "$79.95",
      Discription: "Zero-gravity feel with moonlight-inspired elegance.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/flux-1-kontext-pro_make_jogger_shoes_p.png",
      name: "Jetstride Pro",
      price: "$91.20",
      Discription:
        "Professional jogger performance with aerospace comfort tech.",
    },
    {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l.png",
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
