import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatusBar from './OrderStatusBar';

const PlaceOrder = () => {
    const currentStatus = 1;
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
        Your Order Status
      </h1>

      <OrderStatusBar currentStep={currentStatus} />
      <p className="text-gray-700 text-lg mb-6">
        Thank you for your purchase. Your order has been placed and is being processed.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 text-left">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="mb-4">
          <li className="flex justify-between py-2 border-b">
            <span>Product 1</span>
            <span>₹599.00</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span>Product 2</span>
            <span>₹450.00</span>
          </li>
        </ul>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>₹1,049.00</span>
        </div>
      </div>

      <Link to="/" className="inline-block mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default PlaceOrder;
