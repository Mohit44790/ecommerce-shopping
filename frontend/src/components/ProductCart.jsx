import React, { useState } from 'react';
import { BiCart, BiHeart } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { TbArrowsCross } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { useCart } from '../pages/CartContext';

const productData = [
  {
    id: 1,
    name: "MK Headphones",
    description: "This is the description for product",
    price: 599,
    rating: 4,
    image1: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    image2: "https://img.freepik.com/free-photo/headphones-with-minimalist-monochrome-background_23-2150763316.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    description: "This is the description for product",
    price: 799,
    rating: 3.5,
    image1: "https://cdn.pixabay.com/photo/2018/05/01/13/04/miniature-3365503_1280.jpg",
    image2: "https://cdn.pixabay.com/photo/2019/06/30/11/56/street-4307896_640.jpg",
  },
  // Add more products here as needed
];

const ProductCart = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [liked, setLiked] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleLike = (productId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(productId)
        ? prevLiked.filter((id) => id !== productId)
        : [...prevLiked, productId]
    );
  };

  const handlePreview = (product) => {
    localStorage.setItem('previewProduct', JSON.stringify(product));
    navigate(`/preview/${product.id}`);
  };
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
      {productData.map((product) => (
        <div
          key={product.id}
          className="group relative bg-white rounded-md shadow p-4 hover:shadow-lg transition-all duration-300"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-md">
            <img
              src={hoveredId === product.id ? product.image2 : product.image1}
              alt={product.name}
              className="w-full h-48 object-cover transition-all duration-500"
            />
            <button
              onClick={() => handleLike(product.id)}
              className={`absolute top-2 right-2 p-1 rounded-full shadow ${
                liked.includes(product.id)
                  ? 'bg-red-100 text-red-500'
                  : 'bg-white text-gray-600 hover:text-red-500'
              }`}
            >
              <BiHeart size={20} />
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-3 space-y-1">
            <h6 className="text-sm text-gray-700 font-semibold">{product.name}</h6>
            <p className="text-xs text-gray-500">{product.description}</p>
            <p className="text-sm font-semibold text-green-600">₹{product.price}</p>

            <StarRatings
              rating={product.rating}
              starRatedColor="gold"
              starDimension="20px"
              starSpacing="2px"
              numberOfStars={5}
              name="rating"
            />
          </div>

          {/* Hover Icons */}
          <div
            className={`absolute top-4 right-6  flex flex-col items-center gap-2 p-1 text-white rounded-full py-12 transition-all duration-300 ${
              hoveredId === product.id ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <button onClick={() => console.log("Compare ID:", product)} className="hover:text-gray-900">
              <TbArrowsCross size={20} />
            </button>
            <button onClick={() => handlePreview(product)} className="hover:text-gray-900">
              <FaRegEye size={20} />
            </button>
            <button onClick={() => addToCart(product)} className="hover:text-gray-900">
              <BiCart size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
