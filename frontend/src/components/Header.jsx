import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { FaHeart, FaUser, FaShoppingCart, FaExchangeAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useCart } from '../pages/CartContext';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubCategory = (category) => {
    setOpenSubCategory(openSubCategory === category ? null : category);
  };

  return (
    <>
      {/* Top Bar */}
      <header className="bg-gray-700 text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>Free shipping over ₹100</p>
        <div className="flex items-center space-x-4">
          <p>Hotline: 99900909</p>
          <select className="bg-gray-700 text-white border-none focus:outline-none">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ch">Chinese</option>
          </select>
        </div>
      </header>

      {/* Middle Section */}
      <div className="bg-white shadow-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-blue-800">
          <Link to="/">MK Shopping</Link>
        </h2>

        {/* Search Bar */}
        <div className="w-full md:w-1/3 relative">
          <input
            className="w-full border border-gray-300 rounded-2xl px-4 py-1 focus:outline-none"
            type="search"
            placeholder="Search Product Here"
          />
          <BsSearch className="absolute right-4 top-2 text-gray-500" size={20} />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-gray-700 text-sm">
          <Link to="/compare-product" className="flex items-center gap-1 hover:text-blue-600">
            <FaExchangeAlt /> Compare
          </Link>
          <Link to="/wishlist" className="flex items-center gap-1 hover:text-blue-600">
            <FaHeart /> Wishlist
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:text-blue-600">
            <FaUser /> Login
          </Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-blue-600 relative">
  <FaShoppingCart className="text-lg" />
  {cartCount > 0 && (
    <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
      {cartCount}
    </span>
  )}
  <span>Cart</span>
</Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-gray-600 text-white text-sm py-3 px-4 flex flex-col md:flex-row md:items-center gap-4">
        {/* Shop Category Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 font-semibold"
          >
            Shop Category {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isDropdownOpen && (
            <div className="absolute bg-white text-black mt-2 shadow-lg rounded w-64 z-50 p-4">
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>

                {/* Camera */}
                <li>
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                    onClick={() => toggleSubCategory('camera')}
                  >
                    <span>Camera</span>
                    {openSubCategory === 'camera' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openSubCategory === 'camera' && (
                    <ul className="ml-4 mt-1 space-y-1 text-gray-700">
                      <li><Link to="/category/camera/dslr">DSLR</Link></li>
                      <li><Link to="/category/camera/action">Action Cams</Link></li>
                      <li><Link to="/category/camera/lenses">Lenses</Link></li>
                    </ul>
                  )}
                </li>

                {/* Laptop */}
                <li>
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                    onClick={() => toggleSubCategory('laptop')}
                  >
                    <span>Laptop</span>
                    {openSubCategory === 'laptop' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openSubCategory === 'laptop' && (
                    <ul className="ml-4 mt-1 space-y-1 text-gray-700">
                      <li><Link to="/category/laptop/hp">HP</Link></li>
                      <li><Link to="/category/laptop/dell">Dell</Link></li>
                      <li><Link to="/category/laptop/macbook">MacBook</Link></li>
                    </ul>
                  )}
                </li>

                {/* Mobile */}
                <li>
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                    onClick={() => toggleSubCategory('mobile')}
                  >
                    <span>Mobiles</span>
                    {openSubCategory === 'mobile' ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openSubCategory === 'mobile' && (
                    <ul className="ml-4 mt-1 space-y-1 text-gray-700">
                      <li><Link to="/category/mobile/apple">Apple</Link></li>
                      <li><Link to="/category/mobile/samsung">Samsung</Link></li>
                      <li><Link to="/category/mobile/xiaomi">Xiaomi</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/store" className="hover:underline">Our Store</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
