import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../pages/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    updateQuantity(id, item.quantity + 1);
  };

  const handleDecrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-sm p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.images || item.image1 || item.image2 }
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold">
              Total: ₹{totalAmount.toFixed(2)}
            </h2>
          <Link to={"/checkout"}>  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Proceed to Checkout
            </button></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
