import ProductCard from "./ProductCard";

function Product() {
  const products = [
    {
      image:
        "/assets/ClothesItem/1752818334106-de203bce-99a8-4ebe-9023-5feb0e7bd79b.png",
      name: "Golden Summer Dress",
      price: "$129.99",
      Discription: "Elegant flowy yellow dress perfect for warm sunny days.",
    },
    {
      image:
        "/assets/ClothesItem/1752818576167-003b24cf-55cb-4bd4-a0cf-34d3c4c0db57.png",
      name: "Peach Chic",
      price: "$89.99",
      Discription:
        "Minimal yet stylish, ideal for casual and semi-formal outings.",
    },
    {
      image:
        "/assets/ClothesItem/flux-1-kontext-pro_give_me_a_model_for_ (4).png",
      name: "Flux Draped Elegance",
      price: "$95.00",
      Discription: "Contemporary draped design that stands out in every crowd.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (1).png",
      name: "Urban Vogue",
      price: "$120.00",
      Discription: "A sleek, modern dress inspired by city fashion trends.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (4).png",
      name: "Floral Whisper",
      price: "$110.00",
      Discription: "Delicate floral pattern that adds charm and grace.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (5).png",
      name: "Blossom Grace",
      price: "$130.00",
      Discription: "Soft pastels meet elegant design for timeless beauty.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (7).png",
      name: "Midnight Orchid",
      price: "$140.00",
      Discription: "Dark floral elegance for formal evening looks.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_descenet_dre (2).png",
      name: "Sunset Simplicity",
      price: "$105.00",
      Discription: "A simple, breathable dress made for all-day comfort.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_descenet_dre.png",
      name: "Everyday Blush",
      price: "$100.00",
      Discription:
        "Perfect for daily wear with soft color tones and relaxed fit.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v3-quality_give_me_a_model_for_.png",
      name: "Elegant Flow V3",
      price: "$99.00",
      Discription: "Subtle yet elegant dress with graceful movement.",
    },
    {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (2).png",
      name: "Classy Drape 2",
      price: "$115.00",
      Discription:
        "Sophisticated drape and tailored for a flattering silhouette.",
    },
    {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (1).png",
      name: "Classy Drape 1",
      price: "$98.00",
      Discription: "Clean lines and premium fabric for effortless style.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre.png",
      name: "Classic Line V3",
      price: "$109.00",
      Discription: "Elegant structure with modern femininity in every seam.",
    },

    {
      image:
        "/assets/ClothesItem/1752818334106-de203bce-99a8-4ebe-9023-5feb0e7bd79b.png",
      name: "Golden Silk Flow",
      price: "$139.99",
      Discription:
        "A luxurious silk dress in sunshine gold, perfect for elegant daytime looks.",
    },
    {
      image:
        "/assets/ClothesItem/1752818576167-003b24cf-55cb-4bd4-a0cf-34d3c4c0db57.png",
      name: "Peach Satin Charm",
      price: "$119.00",
      Discription:
        "Chic satin drape with soft tones, ideal for casual elegance.",
    },
    {
      image:
        "/assets/ClothesItem/flux-1-kontext-pro_give_me_a_model_for_ (4).png",
      name: "Flux Chiffon Drape",
      price: "$125.00",
      Discription: "Modern chiffon silhouette designed for graceful movement.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (1).png",
      name: "Velvet Noir Elegance",
      price: "$149.00",
      Discription: "A bold velvet piece that redefines urban sophistication.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (4).png",
      name: "Floral Silk Bloom",
      price: "$129.00",
      Discription:
        "Romantic floral print on fine silk, for fresh and feminine vibes.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (5).png",
      name: "Satin Blossom Luxe",
      price: "$135.00",
      Discription:
        "Elegant satin dress with a floral essence and glossy finish.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_a_model_for_ (7).png",
      name: "Midnight Velvet Rose",
      price: "$150.00",
      Discription: "Dark-toned velvet elegance with a touch of mystery.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_descenet_dre (2).png",
      name: "Soft Linen Grace",
      price: "$105.00",
      Discription:
        "Breathable linen perfect for effortless everyday sophistication.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v2_give_me_descenet_dre.png",
      name: "Blush Cotton Ease",
      price: "$98.00",
      Discription:
        "Relaxed fit made from premium cotton in a delicate blush hue.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v3-quality_give_me_a_model_for_.png",
      name: "V3 Satin Curve",
      price: "$112.00",
      Discription:
        "Shiny satin texture with clean modern cuts for a flattering fit.",
    },
    {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (2).png",
      name: "Drape Luxe Organza",
      price: "$118.00",
      Discription: "Ethereal organza with a soft drape for a floaty feel.",
    },
    {
      image:
        "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre (1).png",
      name: "Organza Charm V3",
      price: "$108.00",
      Discription:
        "Elegant organza piece for romantic evenings or brunch dates.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v3-quality_give_me_descenet_dre.png",
      name: "Classic Silk V3",
      price: "$125.00",
      Discription:
        "Timeless silhouette crafted in smooth silk for a polished look.",
    },
    {
      image: "/assets/ClothesItem/ideogram-v3-quality_give_me_clothes_pic_.png",
      name: "Classic Silk V3",
      price: "$125.00",
      Discription:
        "Timeless silhouette crafted in smooth silk for a polished look.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid cols-4 gap-12 p-1 mx-2 my-1 mt-24">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          index={index}
          image={item.image}
          name={item.name}
          price={item.price}
          discription={item.Discription}
        />
      ))}
    </div>
  );
}

export default Product;
