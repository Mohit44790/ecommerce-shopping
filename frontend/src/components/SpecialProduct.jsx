import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const SpecialProduct = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2018/05/01/13/04/miniature-3365503_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/15/19/29/screen-569515_640.jpg",
    "https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_640.jpg"
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [timeLeft, setTimeLeft] = useState(86400); // 1 day in seconds
  const totalStock = 100;
  const sold = 45;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="p-4 grid grid-cols-1 border bg-white rounded-xl md:grid-cols-2 gap-6">
      {/* Left Side */}
      <div>
      <div className="border rounded-xl overflow-hidden h-[300px] w-full">
  <img 
    src={mainImage} 
    alt="Main Product" 
    className="w-full h-full object-cover" 
  />
</div>
        <div className="flex mt-4 gap-3  justify-center">
          {images.map((img, idx) => (
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

      {/* Right Side */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Havels Headphone</h2>
        <p className="text-gray-600 text-sm">
          These headphones deliver crystal-clear audio and feature multi-color LED lighting for immersive experiences.
        </p>
        
        <div className="flex items-center gap-2">
        <StarRatings
  rating={4.5}
  starRatedColor="gold"
  starDimension="20px"
  starSpacing="2px"
  numberOfStars={5}
  name="rating"
/>
          <span className="text-xs text-gray-500">(120 reviews)</span>
        </div>

        <div className="text-2xl font-bold text-green-600">₹599</div>

        {/* Timer */}
        <div className="text-sm text-red-500">
          Sale ends in: <span className="font-semibold">{formatTime(timeLeft)}</span>
        </div>

        {/* Stock Info */}
        <div className="w-full">
          <div className="text-sm text-gray-700 mb-1">Products Left: {totalStock - sold} / {totalStock}</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${(sold / totalStock) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Buy Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SpecialProduct;
