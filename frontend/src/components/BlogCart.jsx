import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import blogs from './blogsData';

const BlogCart = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBlogId(prev => (prev === id ? null : id));
  };

  const featuredBlogs = blogs.slice(0, 4); // Only first 5

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6">
      {featuredBlogs.map((blog) => (
        <div key={blog.id} className="bg-gray-50 rounded-lg shadow-sm p-4">
          <div className="w-full h-48 bg-white rounded-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
          </div>
          <div className="mt-3 text-sm">
            <p className="text-gray-400 text-sm mb-1">{blog.date}</p>
            <h2 className="font-medium hover:underline mb-1 text-lg">{blog.title}</h2>
            <p className={`text-xs text-gray-500 ${expandedBlogId === blog.id ? '' : 'line-clamp-2'}`}>
              {blog.excerpt}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <button
                onClick={() => toggleReadMore(blog.id)}
                className="bg-gray-900 text-white rounded-full py-1.5 px-4 text-xs hover:bg-gray-700"
              >
                {expandedBlogId === blog.id ? 'SHOW LESS' : 'READ MORE'}
              </button>
              <Link to={`/blog/${blog.id}`}>
                <FaArrowUpRightFromSquare className="text-lg text-gray-800 hover:text-black" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCart;
