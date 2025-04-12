import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useCart } from '../pages/CartContext'; // <-- Import Cart hook
import { Link } from 'react-router-dom';

const SpecialProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [timeLeft, setTimeLeft] = useState(product.timer); // seconds
  const { totalStock, sold } = product;
  const { addToCart } = useCart(); // <-- use Cart context

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="p-4 grid grid-cols-1 border bg-white rounded-xl md:grid-cols-2 gap-6">
      <div>
        <div className="border rounded-xl overflow-hidden h-[300px] w-full">
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-4 gap-3 justify-center">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumb ${idx}`}
              onClick={() => setMainImage(img)}
              className={`w-16 h-12 rounded-md border cursor-pointer object-cover ${
                mainImage === img ? 'ring-2 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>

        <div className="flex items-center gap-2">
          <StarRatings
            rating={product.rating}
            starRatedColor="gold"
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>

        <div className="text-2xl font-bold text-green-600">₹{product.price}</div>

        <div className="text-sm text-red-500">
          Sale ends in: <span className="font-semibold">{formatTime(timeLeft)}</span>
        </div>

        <div className="w-full">
          <div className="text-sm text-gray-700 mb-1">
            Products Left: {totalStock - sold} / {totalStock}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${(sold / totalStock) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-4">
         <Link to={"/buynow"}> <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => alert('Buying now not yet implemented')}
          >
            Buy Now
          </button></Link>
          <button
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialProductCard;
