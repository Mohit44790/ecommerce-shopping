import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../components/blogsData';
import Tilt from 'react-parallax-tilt';
const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500 mt-10">Blog not found</div>;
  }

  return (
    <div className="relative  overflow-hidden">
      {/* Animated Background Balls */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        {[...Array(250)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-6 h-6 rounded-full opacity-40 animate-bounce-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Blog Container */}
      <div className="max-w-3xl mx-auto py-8 px-4 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.02}
          transitionSpeed={1000}
          className="w-full h-96 object-cover rounded-md mb-6"
        >

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-md mb-6"
          />
          </Tilt>
        <p className="text-gray-700 text-lg">{blog.content}</p>
        <p className="text-gray-700 text-lg mt-4">{blog.excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
