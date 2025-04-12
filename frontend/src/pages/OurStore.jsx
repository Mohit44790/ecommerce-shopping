import React from 'react';

import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';

const OurStore = () => {
  return (
    <>
     <h2 className='text-center py-2 text-lg'>Our Store</h2>

      <div className="flex flex-col md:flex-row gap-4 px-4">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-1/4 space-y-4">
          {/* Category */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-2">Shop By Category</h2>
            <ul className="space-y-1 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/store">Our Store</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Filter */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-2">Filter By</h2>

            <div className="mb-3">
              <h3 className="font-medium">Availability</h3>
              <label className="block text-sm">
                <input type="checkbox" className="mr-2" /> In Stock
              </label>
              <label className="block text-sm">
                <input type="checkbox" className="mr-2" /> Out of Stock
              </label>
            </div>

            <div className="mb-3">
              <h3 className="font-medium">Price</h3>
              <div className="flex items-center gap-2 text-sm">
                <input type="number" className="w-20 border p-1 rounded" placeholder="From" />
                <input type="number" className="w-20 border p-1 rounded" placeholder="To" />
              </div>
            </div>

            <div className="mb-3">
              <h3 className="font-medium">Color</h3>
              <div className="flex gap-1 flex-wrap">
                {["red", "blue", "green", "black"].map((color) => (
                  <div key={color} className={`w-5 h-5 bg-pink rounded-full bg-${color}-500 border cursor-pointer`} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium ">Size</h3>
              <div className="flex gap-2 text-sm mt-1">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} className="border px-2 py-1 rounded">{size}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Tags */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-2">Product Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["HeadPhone", "Laptop", "Mobile", "Oppo", "Speaker", "Tablet", "Vivo"].map(tag => (
                <button key={tag} className="border text-xs px-2 py-1 rounded hover:bg-gray-200">{tag}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="w-full md:w-3/4">
          {/* Sort */}
          <div className="bg-white border rounded-lg p-4 mb-3">
            <label className="font-semibold mr-2">Sort By:</label>
            <select className="border rounded p-1 text-sm">
              <option value="best-selling">Best Selling</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="new-arrivals">New Arrivals</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className=" sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ProductCart />
            
            
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center bg-white border mt-4 p-3 rounded">
            <button className="flex items-center gap-1 text-sm"><BiArrowFromLeft /> Prev</button>
            <span className="text-sm">Page 1 of 5</span>
            <button className="flex items-center gap-1 text-sm">Next <BiArrowFromRight /></button>
          </div>
        </main>
      </div>
    </>
  );
};

export default OurStore;
