// pages/SpecialProducts.jsx
import React from 'react';
import SpecialProductCard from '../components/SpecialProductCard';

const specialProducts = [
  {
    id: 1,
    name: "Havels Headphone",
    description: "Crystal-clear audio and multi-color LED lighting for immersive experiences.",
    price: 599,
    rating: 4.5,
    reviews: 120,
    timer: 86400,
    sold: 45,
    totalStock: 100,
    images: [
      "https://m.media-amazon.com/images/I/615iJ+aVx6L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      "https://www.myg.in/images/thumbnails/300/300/detailed/109/308673_2_wej7kc.jpg.png",
      "https://i5.walmartimages.com/seo/Tikland-Noise-Cancelling-Wireless-Over-Ear-Headphones-Black_9538b47a-0a10-4b92-9205-9c5d29ef29df.38b1aafed799f74fbb1800ebfde252dc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      ,
    ]
  },
  {
    id: 2,
    name: "Wireless Smartwatch",
    description: "Track your fitness goals and receive notifications on the go.",
    price: 1499,
    rating: 4.2,
    reviews: 89,
    timer: 43200,
    sold: 20,
    totalStock: 60,
    images: [
      "https://m.media-amazon.com/images/I/515EX2dUR9L._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71fswC8hgVL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61Nc8bJRtEL._SX679_.jpg"
    ]
  },
  {
    id: 3,
    name: "Noise Cancelling Earbuds",
    description: "Compact and powerful with deep bass and noise cancellation.",
    price: 899,
    rating: 4.0,
    reviews: 76,
    timer: 36000,
    sold: 35,
    totalStock: 80,
    images: [
      "https://m.media-amazon.com/images/I/41YajcOIu0L._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/31IdqsaOxVL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/81SoXmoJr-L._SY450_.jpg"
    ]
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic design with high DPI settings for precision gaming.",
    price: 799,
    rating: 4.6,
    reviews: 210,
    timer: 72000,
    sold: 70,
    totalStock: 120,
    images: [
      "https://m.media-amazon.com/images/I/41I-azRJBLL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/81KDevJhhNL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/91i-ZYTcf6L._SX679_.jpg"
    ]
  }
];


const SpecialProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {specialProducts.map((product, index) => (
        <SpecialProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default SpecialProducts;
