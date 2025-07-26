import React, { useState } from "react";

import { useCart } from "../context/CartContext";
function AllProduct() {
  
  const { addToCart } = useCart();
     const [clickedIndex, setClickedIndex] = useState(null);
  const AllData = [
    {
      image:
        "/assets/ClothesItem/1752818334106-de203bce-99a8-4ebe-9023-5feb0e7bd79b.png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",

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
        "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (12).png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },
 {
      image:
        "/assets/Footwears/FootwearSlipers/ideogram-v3-quality_give_me_slipper_bu.png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },
 {
      image:
        "/assets/Footwears/FootwearSandals/ideogram-v2_make_descent_and_sta (1).png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },
 {
      image:
        "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (4).png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },
 {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre.png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },

{
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (11).png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
    },

    {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_a_model_for_.png",
      Discription: "Soft-touch straps with cloud-light cushioning",
      name: "FeatherStride",
      price: "$59.99",
    },


     {
      image:
        "/assets/ClothesItem/ideogram-v2_give_me_descenet_dre (5).png",
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
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l.png",
      name: "Golden Steps",
      price: "$74.99",
      Discription:
        "Shimmering gold-tone shoes that elevate your everyday look.",
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
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (2).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },

      {
      image:
        "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (7).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },

      {
      image:
        "/assets/Footwears/FootwearShoes/ideogram-v3-quality_make_a_descent_and_l (4).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },

      {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (1).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },

       {
      image:
        "/assets/JewelryPics/ideogram-v3-quality_make_a_descent_and_b (6).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },


      {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (1).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },

       {
      image:
        "/assets/JewelryPics/ideogram-v2_make_a_descent_and_b (1).png",
      Discription: "A relaxed fit meets stylish polish",
      name: "GlowWalk Sandal",
      price: "$41.99",
    },


  ];
  return (


    <div className=" w-full h-full flex justify-center">
      <div className="p-12 mt-12 grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {AllData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:shadow-1xl transition-transform duration-300 transform hover:scale-105 active:scale-105 overflow-hidden mt-5 mx-2 "
          >
            <img
              src={item.image}
              alt={`product ${index + 1}`}
              className="p-4 rounded-3xl  hover:shadow-md transition-transform duration-300 transform hover:scale-105 active:scale-105 overflow-hidden"
            />
            <h1 className="text-3xl text-center text-black py-2">
              {item.name}
            </h1>
            <p className="text-1xl text-black text-center">
              {item.Discription}
            </p>
            <p className="text-black text-center">{item.price}</p>
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
  )
}

export default AllProduct;
