import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const BlogCart = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex justify-center p-4">
        
      <div className="bg-gray-50 rounded-lg shadow-sm p-4 w-full max-w-md">
        <div className="w-full h-48 sm:h-40 md:h-52 lg:h-48 flex items-center justify-center bg-white rounded-md overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_640.jpg"
            alt="blog"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-3 text-sm text-center sm:text-left">
          <p className="text-gray-400 text-sm mb-1">11 April 2025</p>
          <h2 className="font-medium hover:underline mb-1">
            A Beautiful Sunday Morning
          </h2>
          <p
            className={`text-xs text-gray-500 ${
              !showFullText ? 'line-clamp-2' : ''
            }`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            impedit voluptatum voluptatibus minima error ratione consequuntur et
            voluptas corporis delectus sint quasi, molestiae beatae veniam
            necessitatibus mollitia qui unde incidunt? Libero deserunt quas
            itaque quo laudantium esse accusamus provident ad.
          </p>

          <button
            onClick={toggleReadMore}
            className="mt-2 bg-gray-900 text-white rounded-full py-2 px-4 text-sm"
          >
            {showFullText ? 'SHOW LESS' : 'READ MORE'}
          </button>
          <Link to="blog/:id"><FaArrowUpRightFromSquare /></Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
