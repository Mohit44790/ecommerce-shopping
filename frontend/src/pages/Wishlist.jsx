import React from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { BiCartAdd } from 'react-icons/bi';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: '₹2,499',
      brand: 'Boat',
      image: 'https://cdn.pixabay.com/photo/2018/05/01/13/04/miniature-3365503_1280.jpg',
    },
    {
      id: 2,
      title: 'Bluetooth Speaker',
      price: '₹1,899',
      brand: 'JBL',
      image: 'https://m.media-amazon.com/images/I/41cYR1yC78L._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 3,
      title: 'Mobile',
      price: '₹11,899',
      brand: ' OnePlus 12 (Flowy Emerald, 12GB RAM, 256GB Storage)',
      image: 'https://m.media-amazon.com/images/I/41+WyW0KOgL._SY300_SX300_.jpg',
    },
    {
      id: 4,
      title: 'iPhone 16 Pro Max 512 GB: 5G Mobile Phone with Camera Control, 4K',
      price: '₹1,51,899',
      brand: 'iPhone',
      image: 'https://m.media-amazon.com/images/I/31JDUhTPoLL._SY445_SX342_QL70_FMwebp_.jpg',
    },
    {
      id: 5,
      title: 'Tygot T1S',
      price: '₹1,899',
      brand: 'Selfie Stick',
      image: 'https://m.media-amazon.com/images/I/31j8fKiE9EL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 6,
      title: 'Noise Newly Launched Air Buds Pro 6 in-Ear Truly Wireless Earbuds with Hybrid ANC (up to 49dB), LHDC',
      price: '₹1,899',
      brand: 'Noise',
      image: 'https://m.media-amazon.com/images/I/31I9xoysNpL._SX300_SY300_QL70_FMwebp_.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg shadow-md p-3 relative hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:h-64 object-contain rounded"
              />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-sm text-gray-600">Brand: {item.brand}</p>
              <p className="text-blue-600 font-bold">Price: {item.price}</p>

              <div className="flex justify-between items-center mt-4">
                <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                  <BiCartAdd /> Add to Cart
                </button>
                <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                  <AiOutlineEye /> View
                </button>
                <button className="text-red-500 hover:text-red-700 flex items-center gap-1">
                  <AiOutlineDelete /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
