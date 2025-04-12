import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGift } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import BlogCart from "../components/BlogCart";
import ProductCart from "../components/ProductCart";
import SpecialProduct from "../components/SpecialProduct";
import Tilt from 'react-parallax-tilt';

const sliderImages = [
  {
    url: "https://media.istockphoto.com/id/1338918243/photo/mobile-phone-with-a-bright-case-in-a-womans-hand-with-red-nails.jpg?s=612x612&w=0&k=20&c=kFNSs6MNVvZ4jezVAAjxtQH7Pntcn7AO1KY7VmOaMxc=",
    title: "iPhone 15 Pro Max",
    subtitle: "Experience next-level performance",
    price: "From ₹1,39,900 or ₹5,829/mo for 24 mo",
  },
  {
    url: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "Built for creatives and pros",
    price: "From ₹1,24,999 or ₹5,209/mo for 24 mo",
  },
  {
    url: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    title: "Google Pixel 8 Pro",
    subtitle: "Smarter. Faster. Pixel-perfect.",
    price: "From ₹98,999 or ₹4,125/mo for 24 mo",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/buynow");
  };
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const current = sliderImages[currentSlide];
 // product data
  const productCards = [
    {
      img: "https://cdn.pixabay.com/photo/2018/05/01/13/04/miniature-3365503_640.jpg",
      title: "iPhone 15 Mini",
      price: "₹79,999",
      desc: "Compact power. Perfect fit.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_640.jpg",
      title: "iPhone 15 Standard",
      price: "₹89,999",
      desc: "All-day performance.",
    },
    {
      img: "https://media.istockphoto.com/id/1201462127/vector/modern-smartphone-on-dark-blue-background-realistic-isometric-phone-mock-up-or-template.jpg?s=612x612&w=0&k=20&c=gxuWrAl2RqEliNzwlo8yIgxJD61xhWN-UHNQUZNPC3U=",
      title: "iPhone 15 Pro",
      price: "₹1,19,999",
      desc: "Built for power users.",
    },
    {
      img: "https://media.istockphoto.com/id/1147687559/vector/smartphone-mockup.jpg?s=612x612&w=0&k=20&c=gv8qDuuIG6wQcgdol_C4sFIxBza9RGMWc31uTQZfw60=",
      title: "iPhone 15 Ultra",
      price: "₹1,49,999",
      desc: "Top-tier tech unleashed.",
    },
  ];

  //category
  const categories = [
    {
      title: "Smartphones & Accessories",
      items: 12,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Home Appliances",
      items: 7,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Gaming Consoles",
      items: 5,
      img: "https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg",
    },
    {
      title: "Cameras & Photography",
      items: 9,
      img: "https://t3.ftcdn.net/jpg/00/52/45/32/360_F_52453293_qGCRFdf6nEkCLjBuRIHQIQMOOaYmgNpN.jpg",
    },
    {
      title: "Fitness & Smartwatches",
      items: 14,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUczHznI3hoT7XbFyZLr4FqMYTpzBe1CLPacKzn_HljwVKk-GhKGkrDyp3isRgNke6e1IxJfN37KRCW0NM9pUGg1VE2LfNSOVhUL7nnkbVhIBq95ER-aXU752Y",
    },
    {
      title: "Kitchen Essentials",
      items: 11,
      img: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW4lMjB1dGVuc2lsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "HeadPhone",
      items: 11,
      img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
    },
    {
      title: "Accessories",
      items: 11,
      img: "https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=612x612&w=0&k=20&c=4iwItEQ1P3lhjl350QXRl5IrgC8ufDImaoc-7_H5vVA=",
    },
    {
      title: "Home Appliances",
      items: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgNdCCTxJme1_1366d9Zpk0iKt4LCN55XIw&s",
    },
    {
      title: "Phones",
      items: 11,
      img: "https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=0&k=20&c=2h5Q46wh-eRyPwh4KKnJhCKFWqcd2ltgv9tdaULDdbc=",
    },
  ];
  

  return (
    <>
       <section className="py-6 px-4">
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {/* Featured Slider Image */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.02}
          transitionSpeed={1000}
        className="relative col-span-4 md:col-span-2 row-span-2 overflow-hidden rounded-xl"
        >
        <div className="relative col-span-4 md:col-span-2 row-span-2 overflow-hidden rounded-xl">
       

        
          <img
            src={current.url}
            className="w-full h-full object-cover rounded-xl"
            alt={current.title}
          />
          <div className="absolute inset-0 flex flex-col justify-center pl-6 text-white">
            <p className="text-sm">SUPERCHARGED FOR PRO</p>
            <h1 className="text-2xl md:text-3xl font-bold text-red-500">
              {current.title}
            </h1>
            <p className="text-sm md:text-base">{current.subtitle}</p>
            <p className="text-sm">{current.price}</p>
            <button
              onClick={handleBuyClick}
              className="mt-2 bg-slate-900 text-white w-40 md:w-52 px-4 py-1 rounded-full text-sm"
            >
              BUY NOW
            </button>
          </div>

          {/* Arrows */}
          <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full cursor-pointer"
            onClick={prevSlide}
          >
            <FaChevronLeft size={20} className="text-white" />
          </div>
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full cursor-pointer"
            onClick={nextSlide}
          >
            <FaChevronRight size={20} className="text-white" />
          </div>
        </div></Tilt>

        {/* Product Cards */}
        {productCards.map((product, i) => (
          <div
            key={i}
            className="relative col-span-2 md:col-span-1 row-span-1"
          >
            <img
              src={product.img}
              className="w-full h-full object-cover rounded-xl"
              alt={product.title}
            />
            <div className="absolute inset-0 p-3 text-white flex flex-col justify-center">
              <p className="text-xs">NEW RELEASE</p>
              <h2 className="text-sm md:text-lg text-red-400 font-semibold">
                {product.title}
              </h2>
              <p className="text-xs md:text-sm">{product.desc}</p>
              <p className="text-sm font-semibold">{product.price}</p>
              <button
                onClick={handleBuyClick}
                className="mt-1 bg-slate-900 text-white text-xs px-3 py-1 rounded-full w-fit"
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
      <section className="py-6 px-9 rounded-lg  mx-4 bg-gray-300">
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-10 gap-4 text-sm text-gray-700">
        
        {/* Item 1 */}
        <div className="flex items-start gap-2">
          <FaShippingFast size={24} className="text-red-500" />
          <div>
            <h6 className="font-semibold">Free Shipping</h6>
            <p className="text-xs text-gray-600">On orders over ₹100</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-2">
          <FaGift size={24} className="text-red-500" />
          <div>
            <h6 className="font-semibold">Daily Surprise Offers</h6>
            <p className="text-xs text-gray-600">Save up to 25% off</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-2">
          <BiSupport size={24} className="text-red-500" />
          <div>
            <h6 className="font-semibold">Support 24/7</h6>
            <p className="text-xs text-gray-600">We're here to help</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start gap-2">
          <LuBadgePercent size={24} className="text-red-500" />
          <div>
            <h6 className="font-semibold">Affordable Prices</h6>
            <p className="text-xs text-gray-600">Get the best deals</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex items-start gap-2">
          <MdOutlinePayment size={24} className="text-red-500" />
          <div>
            <h6 className="font-semibold">Secure Payments</h6>
            <p className="text-xs text-gray-600">100% Protected Checkout</p>
          </div>
        </div>

      </div>
    </section>

    {/* //categories */}
    <section className="py-2">
  <div className=" mx-4 ">
    <div className="bg-gray-100 border rounded-lg p-4 space-y-6">

      {/* Row 1: First 5 items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.slice(0, 5).map((cat, index) => (
          <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-3">
            <div className="w-full h-24 flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-2 text-sm text-center">
            <Link to={`/category/${encodeURIComponent(cat.title)}`} className="font-medium hover:underline block">
                    {cat.title}
                  </Link>
              <p className="text-xs text-gray-500">{cat.items} items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: Items 6 to 10 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.slice(5, 10).map((cat, index) => (
          <div key={index + 5} className="bg-gray-50 rounded-lg shadow-sm p-3">
            <div className="w-full h-24 flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-2 text-sm text-center">
            <Link to={`/category/${encodeURIComponent(cat.title)}`} className="font-medium hover:underline block">
                    {cat.title}
                  </Link>
              <p className="text-xs text-gray-500">{cat.items} items</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

<section className="py-1 bg-white">
      <div className="bg-gray-100 mx-4 items-center py-2 rounded-lg border ">
        <Marquee gradient={false} speed={50} >
          {/* Logos */}
          <div className="mx-6 gap-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-10"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-10"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-png-transparent.png"
              alt="Hp"
              className="h-16 w-16"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKohfzRrdMAmg1e8pafodmX7BZauX5jAr7cQ&s"
              alt="Myntra"
              className="h-10"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8lDFyphoGgAzaHmqPP5vPuPRQ6LVpVnnPg&s"
              alt="Snapdeal"
              className="h-10"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://icon2.cleanpng.com/20181126/eqr/kisspng-dell-optiplex-3-5-desktop-logo-latitude-e642-del-dell-inc-compnet-federal-solutions-inc-1713918206567.webp"
              alt="Dell"
              className="h-16 w-18"
            />
          </div>
          <div className="mx-6 gap-2">
            <img
              src="https://w7.pngwing.com/pngs/27/996/png-transparent-apple-logo-apple-logo-white-heart-logo-thumbnail.png"
              alt="Apple"
              className="h-16 w-16"
            />
          </div>
         

         
        </Marquee>
      </div>
    </section>
    <section className="px-4 py-1">
    <h1 className="text-2xl font-bold mb-6">
    Our Latest News
  </h1>

  <div >

    <BlogCart />
    
  </div>
</section>

{/* //Features collection */}
<section className="px-4 py-1">
    <h1 className="text-2xl font-bold mb-6">
    Features collection
  </h1>

  {/* <div className="grid  mx-2 grid-cols-2 bg-gray-100 justify-around rounded-lg border py-3    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "> */}
   

    <ProductCart/>
    
   
    
  {/* </div> */}
</section>

{/* /special Products */}
<section className="px-4 py-1">
<h1 className="text-2xl font-bold mb-6">Special Product</h1>
<div >
      <SpecialProduct />
      
      
    </div>
</section>




    </>
  );
};

export default Home;
