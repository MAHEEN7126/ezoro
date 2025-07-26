import React from "react";
import { useParams } from "react-router-dom";
import ProductSuggestion from "../components/ProductSuggestion";
import products from "./ProductData"; // move your data array here

function ProductDetail() {
  const { id } = useParams();
  const product = products[parseInt(id)];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6">
      {/* Main Product Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-[400px] h-[400px] object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-700 mt-2">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.Discription}</p>
        </div>
      </div>

      {/* Related Products */}
      <ProductSuggestion currentIndex={parseInt(id)} />
    </div>
  );
}

export default ProductDetail;
