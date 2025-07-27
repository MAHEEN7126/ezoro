import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
function SandalCard() {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null);

  const sandalItems = [
    {
      image:
        "/assets/Footwears/FootwearSandals/flux-1-kontext-pro_make_descent_and_sta (1).png",
      Discription: "Lightweight comfort with a summer breeze feel",
      name: "SunBreeze Sandal",
      price: "$49.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/flux-1-kontext-pro_make_descent_and_sta.png",
      Discription: "Minimalist and chic for everyday elegance",
      name: "BareEase Slide",
      price: "$44.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_give_me_woman_sandal (1).png",
      Discription: "Premium leather comfort for city strolls",
      name: "Urban Silk Sandal",
      price: "$59.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_give_me_woman_sandal.png",
      Discription: "Breathable sole with relaxed fit for long days",
      name: "BreezeFlow Comfort",
      price: "$42.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (1).png",
      Discription: "Refined simplicity for modern women",
      name: "SilkenStep Sandal",
      price: "$39.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (2).png",
      Discription: "Ultra-light design with grip control",
      name: "FlexWeave Slide",
      price: "$45.00",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (4).png",
      Discription: "Designed for all-day relaxation and support",
      name: "SoftSoul Sandal",
      price: "$54.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (5).png",
      Discription: "Fashion-forward with an airy, open feel",
      name: "SkyTread Sandal",
      price: "$48.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (6).png",
      Discription: "Flexible footbed and luxe finish",
      name: "VelvaWalk",
      price: "$52.00",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_give_me_woman_sandal (1).png",
      Discription: "Polished for elegance, built for comfort",
      name: "Classic Wave",
      price: "$57.50",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_give_me_woman_sandal (2).png",
      Discription: "Strappy design with breathable form",
      name: "GraceTone Sandal",
      price: "$49.00",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_give_me_woman_sandal.png",
      Discription: "Everyday sandal with a luxury touch",
      name: "AuraLift Sandal",
      price: "$46.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_make_descent_and_sta (2).png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_give_me_woman_sandal (2).png",
      Discription: "Laid-back fit for casual perfection",
      name: "VelvetEase Slide",
      price: "$44.00",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_give_me_woman_sandal.png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v3-quality_make_descent_and_sta (4).png",
      Discription: "Premium sole with natural finish",
      name: "ZenStep Sandal",
      price: "$51.00",
    },
  ];

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 mx-9 gap-5">
        {sandalItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 active:scale-105 overflow-hidden"
          >
            <img
              src={item.image}
              alt={`sandals ${index + 1}`}
              className="bg-gray-200 p-4 rounded-3xl w-full hover:shadow-xl transition-transform duration-300 transform hover:scale-105 active:scale-105"
            />

            <h1 className="text-2xl font-bold text-center text-black py-1">
              {item.name}
            </h1>
            <p className="whitespace-nowrap text-sm text-center text-black py-1">
              {item.Discription}
            </p>
            <p className="text-2xl font-bold text-center text-black py-2">
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

export default SandalCard;
