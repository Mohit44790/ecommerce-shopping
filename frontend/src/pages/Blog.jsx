import React from 'react';

const Blog = () => {
  // Sample blog posts (you can replace with fetched data later)
  const blogs = [
    {
      id: 1,
      title: '10 Tips for a Productive Day',
      excerpt: 'Learn how to stay productive with these 10 easy habits you can adopt starting today...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Why React is Still King in 2025',
      excerpt: 'React has continued to dominate the frontend world. Find out why and what’s next...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Design Trends to Watch This Year',
      excerpt: 'From glassmorphism to immersive storytelling, here are the top UI/UX trends...',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <button className="text-blue-600 font-medium hover:underline">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
