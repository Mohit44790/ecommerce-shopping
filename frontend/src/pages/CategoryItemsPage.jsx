import React from 'react';
import { useParams, Link } from 'react-router-dom';

const allProducts = [
  {
    name: 'iPhone 14',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Phones',
    price: 999,
  },
  {
    name: 'Galaxy S23',
    image: 'https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg',
    category: 'Phones',
    price: 899,
  },
  {
    name: 'Galaxy S23',
    image: 'https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg',
    category: 'Smartphones & Accessories',
    price: 899,
  },
  {
    name: 'Canon DSLR',
    image: 'https://m.media-amazon.com/images/I/71Ny4opowKL._SX450_.jpg',
    category: 'Cameras & Photography',
    price: 500,
  },
  {
    name: 'Sony PS5',
    image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712137796/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png?tr=w-360',
    category: 'Gaming Consoles',
    price: 600,
  },
  {
    name: 'Apple Watch',
    image: 'https://www.imagineonline.store/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_61d92a78-8dfe-4f6a-b126-8c7e6742e971.jpg?v=1727257129&width=823',
    category: 'Fitness & Smartwatches',
    price: 299,
  },
  {
    name: 'Fitbit Charge 5',
    image: 'https://m.media-amazon.com/images/I/61PmMzYM4qL._AC_UF1000,1000_QL80_.jpg',
    category: 'Fitness & Smartwatches',
    price: 149,
  },
  {
    name: 'Kitchen Blender',
    image: 'https://www.bbassets.com/media/uploads/p/l/40323404_5-prestige-prestige-regal-750w-mixer-grinder-with-3-stainless-steel-jarsappealing-designblack-and-red.jpg',
    category: 'Kitchen Essentials',
    price: 75,
  },
  {
    name: 'Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/31vOBg8cPaL._SX300_SY300_QL70_FMwebp_.jpg',
    category: 'HeadPhone',
    price: 200,
  },
  {
    name: 'Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/31vOBg8cPaL._SX300_SY300_QL70_FMwebp_.jpg',
    category: 'Smartphones & Accessories',
    price: 200,
  },
];

const CategoryItemsPage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const filteredItems = allProducts
    .filter((item) => item.category === decodedTitle)
    .slice(0, 4); // Limit to 4 items max

  return (
    <div className="max-w-4xl mx-auto p-4 mt-6">
      <h1 className="text-2xl font-bold mb-4">Items in {decodedTitle}</h1>
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">← Back to Categories</Link>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">No items found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-contain rounded mb-3"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItemsPage;
