import React from "react";

const ClusteredRenderingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gradient-to-r from-green-500 to-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Clustered Rendering</h1>
          <p className="mt-4 text-lg md:text-2xl">
            Dive deep into the details of clustered rendering and learn how it
            optimizes real-time applications.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What is Clustered Rendering?</h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Clustered Rendering is a method of efficiently rendering a scene by organizing the objects
            within clusters. It helps reduce the computation required for each frame by grouping objects
            based on their proximity to each other, thus improving rendering performance for complex 3D scenes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits of Clustered Rendering</h2>
          <ul className="text-lg text-gray-300 list-disc pl-10 space-y-4">
            <li>Improved performance for large 3D environments.</li>
            <li>Better resource management, especially in GPU-bound scenarios.</li>
            <li>Reduced overdraw and unnecessary computations in the shader pipeline.</li>
            <li>Scalability across different hardware setups.</li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Implementing Clustered Rendering</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To implement clustered rendering, you must first understand how to break down your scene
            into a grid of clusters. Each cluster stores information about objects in that space. This allows
            shaders to process only relevant objects, making rendering faster.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClusteredRenderingPage;