import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CompareProduct = () => {
  const compareProducts = [
    {
      id: 1,
      title: "Lenovo IdeaPad Slim 5",
      price: "₹55,999",
      brand: "Lenovo",
      category: "Laptop",
      color:"red",
      size:"M",
      availability: "In Stock",
      image: "https://cdn.pixabay.com/photo/2021/02/06/07/02/laptop-5987093_640.jpg",
    },
    {
      id: 2,
      title: "HP Pavilion Gaming",
      price: "₹65,999",
      brand: "HP",
      category: "Gaming Laptop",
      availability: "In Stock",
      image: "https://cdn.pixabay.com/photo/2019/06/30/11/56/street-4307896_640.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Compare Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compareProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md relative">
            <button className="absolute top-2 right-2 text-red-500 hover:text-red-700">
              <AiOutlineClose />
            </button>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg border py-1 rounded-lg px-2  font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-600 border py-1 rounded-lg px-2  text-sm mb-1">Price: {product.price}</p>
            <p className="text-gray-600 border py-1 rounded-lg px-2  text-sm mb-1">Brand: {product.brand}</p>
            <p className="text-gray-600  border py-1 rounded-lg px-2 text-sm mb-1">Category: {product.category}</p>
            <p className="text-gray-600 border py-1 rounded-lg px-2  text-sm mb-1">color: {product.color}</p>
            <p className="text-gray-600 border py-1 rounded-lg px-2  text-sm mb-1">Size: {product.size}</p>
            <p className="text-green-600 border py-1 rounded-lg px-2  text-sm">{product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareProduct;
