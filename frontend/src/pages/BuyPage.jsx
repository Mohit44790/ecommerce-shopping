// src/pages/BuyPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BuyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">Buy Product</h1>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between items-center text-sm">
            <span>Product Name</span>
            <span className="font-semibold text-red-500">Awesome Headphones</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span>Price</span>
            <span className="font-semibold">₹4,999</span>
          </div>
        </div>

        {/* User Info Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full border px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition"
          >
            Place Order
          </button>
        </form>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full text-center text-sm text-blue-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
