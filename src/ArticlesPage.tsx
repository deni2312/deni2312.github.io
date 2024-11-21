import React from "react";

function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gradient-to-r from-green-500 to-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Articles</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Insights, guides, and more from my experiences in programming and
            graphics.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Understanding Clustered Rendering</h3>
              <p className="mt-2 text-gray-300">
                Dive deep into the details of clustered rendering and learn how
                it optimizes real-time applications.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Getting Started with OpenGL</h3>
              <p className="mt-2 text-gray-300">
                A beginner-friendly guide to kickstarting your journey into
                graphics programming with OpenGL.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Optimizing Shaders for Performance</h3>
              <p className="mt-2 text-gray-300">
                Tips and tricks to ensure your shaders run efficiently across
                different hardware platforms.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-400 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlesPage;