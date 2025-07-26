import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart,  } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex gap-4 items-center border p-3 rounded shadow justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover bg-gray-200 rounded"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/100";
                }}
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-sm">
                  Status:{" "}
                  <span
                    className={`${
                      item.status === "Pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    } font-semibold`}
                  >
                    {item.status}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
               
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
