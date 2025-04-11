import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../components/blogsData';


const Blog = () => {
  const moreBlogs = blogs.slice(0,8); // Blogs after the first 5

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">More Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreBlogs.map((blog) => (
          <div key={blog.id} className="border rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <Link to={`/blog/${blog.id}`} className="text-blue-600 font-medium hover:underline">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
