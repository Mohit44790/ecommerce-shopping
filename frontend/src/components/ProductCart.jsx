import React, { useState } from 'react';
import { BiCart, BiHeart } from 'react-icons/bi';

import { FaRegEye } from 'react-icons/fa';
import { TbArrowsCross } from "react-icons/tb";
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductCart = () => {
   const [hovered, setHovered] = useState(false);
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = async (newRating) => {
//     setRating(newRating);
//     try {
//     //   const res = await axios.post('http://localhost:5000/api/products/rating', {
//         productId: '123456', // You can pass product._id dynamically
//         // rating: newRating,
//     //   });
//       console.log('Rating saved:', res.data);
//     } catch (error) {
//       console.error('Error saving rating:', error.message);
//     }
//   };

  return (
    <div
      className="group relative w-60  bg-white rounded-md shadow p-4 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={
            hovered
              ? 'https://cdn.pixabay.com/photo/2019/06/30/11/56/street-4307896_640.jpg' // 2nd image
              : 'https://cdn.pixabay.com/photo/2018/05/01/13/04/miniature-3365503_1280.jpg' // 1st image
          }
          alt="Product"
          className="w-full h-48 object-cover transition-all duration-500"
        />

        {/* Top Right Wishlist Icon */}
        <Link
          to=""
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow text-gray-600 hover:text-red-500"
        >
          <BiHeart size={20} />
        </Link>
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <h6 className="text-sm text-gray-700 font-semibold">Havels Headphone</h6>
        <p className="text-xs text-gray-500">Kid headphones for multicolor function</p>
        
        <p className="text-sm font-semibold text-green-600">₹599</p>

        {/* Star Rating */}
        <StarRatings
  rating={4.5}
  starRatedColor="gold"
  starDimension="20px"
  starSpacing="2px"
  numberOfStars={5}
  name="rating"
/>
      </div>

      {/* Hover Icons (bottom center) */}
      <div
        className={`absolute top-2 right-5 p-1 text-white rounded-full shadow py-12  transition-transform duration-300 ${
          hovered ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Link to="" className="hover:text-gray-900">
        <TbArrowsCross size={20} />
        </Link>
        <Link to="" className="hover:text-gray-900">
        <FaRegEye size={20} />
        </Link>
        <Link to="" className="hover:text-gray-900">
          <BiCart size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
