import React from "react";

const Blog = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Anton', sans-serif" }}>
          THE BLOG
        </h1>
        <p className="text-lg text-gray-600" style={{ fontFamily: "'Lato', sans-serif" }}>
          Stories, tips, and updates from Iceland Adventures.
        </p>
      </div>
    </main>
  );
};

export default Blog;