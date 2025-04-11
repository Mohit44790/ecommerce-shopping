import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import ReactImageZoom from 'react-image-zoom';

const PreviewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('previewProduct'));
    if (storedProduct && storedProduct.id === parseInt(id)) {
      setProduct(storedProduct);
      setSelectedImage(storedProduct.image1);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  const props = {
    width: 350,
    height: 350,
    zoomWidth: 500,
    img: selectedImage,
    zoomPosition: 'right', // try 'original' if this doesn't work
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

      <div className="flex flex-col md:flex-row gap-6 min-w-[900px]">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2">
          <img
            src={product.image1}
            onClick={() => setSelectedImage(product.image1)}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
              selectedImage === product.image1 ? 'border-blue-500' : 'border-gray-300'
            }`}
            alt="Thumbnail 1"
          />
          <img
            src={product.image2}
            onClick={() => setSelectedImage(product.image2)}
            className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
              selectedImage === product.image2 ? 'border-blue-500' : 'border-gray-300'
            }`}
            alt="Thumbnail 2"
          />
        </div>

        {/* Zoom Image */}
        <div className="w-[350px] min-w-[350px] h-[350px]">
          <ReactImageZoom {...props} />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between flex-1">
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-green-600 font-semibold text-lg mb-2">Price: ₹{product.price}</p>
          <StarRatings
            rating={product.rating}
            starRatedColor="gold"
            starDimension="24px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
