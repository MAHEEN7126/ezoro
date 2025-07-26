import { useState } from "react";
import { useCart } from "../context/CartContext";

function SlipersCard() {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null);

  const sliperItems = [
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu.png",
      name: "Citrus Lounge",
      Discription: "Relax in cozy luxury with these indoor essentials.",
      price: "$64.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu (2).png",
      name: "Velvet Drift",
      Discription: "Ultra-soft slippers perfect for lounging at home.",
      price: "$59.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_give_me_slipper_bu (1).png",
      name: "Amber Steps",
      Discription: "Feel the warmth with every indoor step.",
      price: "$62.50",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/gpt-image-1_create_a_slipper_pic (1).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_create_a_slipper_pic (1).png",
      name: "Citrus Lounge",
      Discription: "Relax in cozy luxury with these indoor essentials.",
      price: "$64.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_give_me_slipper_bu.png",
      name: "Velvet Drift",
      Discription: "Ultra-soft slippers perfect for lounging at home.",
      price: "$59.99",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_make_descent_sliper_ (1).png",
      name: "Amber Steps",
      Discription: "Feel the warmth with every indoor step.",
      price: "$62.50",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_make_descent_sliper_ (2).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v2_make_descent_sliper_.png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_create_a_slipper_pic (2).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/gpt-image-1_make_woman_slipper_p (2).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },
    {
      image:
        "/assets/Footwears/FootwearSlipers/gpt-image-1_make_woman_slipper_p.png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_create_a_slipper_pic (2).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu (1).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu (2).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu (3).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu (4).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu.png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_make_descent_sliper_ (1).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },

    {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_make_descent_sliper_ (3).png",
      name: "Sunny Sliders",
      Discription: "Lightweight slippers ideal for summer relaxation.",
      price: "$58.75",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 px-2 mt-5 gap-5">
        {sliperItems.map((item, index) => (
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

export default SlipersCard;
