import { useState } from "react";

import { useCart } from "../context/CartContext";
function ProductCard({ image, name, price, item,  discription , index }) {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
      
    <div className=" mt-1 w-full shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 active:scale-105 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className=" rounded-3xl w-70 h-70 object-cover p-5 hover:shadow-xl transition-transform duration-300 transform hover:scale-105 active:scale-105"
      />
      <h2 className="text-2xl font-bold text-center text-black text-black py-1">
        {name}
      </h2>
      <p className="text-1xl text-black text-center">{discription}</p>
      <p className="text-black text-center">{price}</p>

   
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
     
  );
}

export default ProductCard;
