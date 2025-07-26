import React from "react";
import ProductCard from "./ProductCard";
import products from "../pages/ProductData"; // Your real data file

function ProductSuggestion({ currentIndex }) {
  const suggestions = products
    .filter((_, i) => i !== currentIndex)
    .slice(0, 4); // Show 4 others

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">You may also like</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {suggestions.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            image={product.image}
            name={product.name}
            price={product.price}
            discription={product.Discription}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSuggestion;
