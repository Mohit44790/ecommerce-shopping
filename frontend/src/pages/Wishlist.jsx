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
      image: 'https://cdn.pixabay.com/photo/2020/05/14/08/26/speaker-5168276_1280.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-lg shadow-md p-4 relative hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
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
