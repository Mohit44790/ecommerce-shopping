import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹999.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹50.00</span>
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹1,049.00</span>
            </div>
          </div>
<Link to={"/placeorder"}>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Place Order
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
