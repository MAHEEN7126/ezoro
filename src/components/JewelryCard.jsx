import { useState } from "react";
import { useCart } from "../context/CartContext";

function JewelryCard() {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null);

  const jewelryItems = [
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (1).png",
      name: "Gold Radiance",
      price: "$129.99",
      Discription:
        "Glowing with golden brilliance, perfect for elegant evenings.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (2).png",
      name: "Sapphire Charm",
      price: "$149.50",
      Discription:
        "Delicate sapphire accents that shimmer with every movement.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (3).png",
      name: "Emerald Glow",
      price: "$119.99",
      Discription: "A glowing piece enriched with vibrant emerald tones.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (4).png",
      name: "Crystal Whisper",
      price: "$139.00",
      Discription: "Soft crystal glimmers designed for graceful beauty.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (6).png",
      name: "Ruby Kiss",
      price: "$109.95",
      Discription: "Romantic ruby red stones for a bold, passionate look.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (7).png",
      name: "Pearl Nest",
      price: "$99.99",
      Discription: "Classic pearl elegance with a soft, modern edge.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (8).png",
      name: "Moonlight Drop",
      price: "$89.99",
      Discription: "Gleaming like moonlight, this piece glows softly on skin.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b.png",
      name: "Golden Loop",
      price: "$119.00",
      Discription: "Sleek and circular, this golden loop adds everyday luxury.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (2).png",
      name: "Luxe Orbit",
      price: "$159.99",
      Discription: "A luxurious orbital design for a modern statement look.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (3).png",
      name: "Velvet Shine",
      price: "$139.99",
      Discription: "Soft velvet-like finish with a subtle sparkling flair.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (4).png",
      name: "Rose Bloom",
      price: "$99.00",
      Discription: "Delicate rose pattern ideal for graceful floral beauty.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (5).png",
      name: "Twilight Ring",
      price: "$129.50",
      Discription: "Inspired by twilight skies—mysterious and enchanting.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b.png",
      name: "Lily Pendant",
      price: "$89.00",
      Discription: "A pendant shaped like a blooming lily—soft and romantic.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (6).png",
      name: "Celeste Touch",
      price: "$149.00",
      Discription: "Heavenly design that reflects the light with grace.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (7).png",
      name: "Ocean Spark",
      price: "$109.00",
      Discription: "Cool blue tones and shimmer that mimic ocean waves.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (8).png",
      name: "Ivory Luxe",
      price: "$179.99",
      Discription: "A creamy ivory finish with a rich, luxury appeal.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (9).png",
      name: "Starry Wink",
      price: "$89.99",
      Discription: "Tiny sparkling stones that twinkle like stars at night.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (10).png",
      name: "Opal Crown",
      price: "$169.00",
      Discription: "Crown-like elegance with dreamy opal reflections.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (11).png",
      name: "Queen’s Grace",
      price: "$159.50",
      Discription: "Fit for royalty—this piece exudes regal elegance.",
    },
    {
      image: "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (12).png",
      name: "Amber Flow",
      price: "$99.95",
      Discription: "Amber-toned beauty flowing in a sleek, smooth design.",
    },
    {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (1).png",
      name: "Midas Touch",
      price: "$149.99",
      Discription: "Gold-dipped design with a timeless luxury presence.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 mt-5 gap-6">
        {jewelryItems.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 active:scale-105 overflow-hidden mt-8 px-6 py-3"
          >
            <img
              src={item.image}
              alt={`Jewelry ${index + 1}`}
              className="p-4 rounded-3xl hover:shadow-md transition-transform duration-300 transform hover:scale-105"
            />
            <h1 className="text-3xl text-center text-white py-2">
              {item.name}
            </h1>
            <p className="text-lg text-white text-center">{item.Discription}</p>
            <p className="text-white text-center">{item.price}</p>
            <div className="p-5 flex grid grid-cols justify-center  pb-3">
              <button
                onClick={() => {
                  addToCart(item);
                  setClickedIndex(index);
                  setTimeout(() => setClickedIndex(null), 2000);
                }}
                className="bg-white text-black px-4 py-1 rounded hover:bg-gray-600 transition"
              >
                Add to Cart
              </button>

              {clickedIndex === index && (
                <p className="mt-4 text-center text-white text-sm bg-white/40 px-3 py-1 rounded-full shadow-md backdrop-blur-md animate-pulse">
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
export default JewelryCard;
