import React from "react";

const PrismaEngine: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
          Prisma Engine
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8">
          A Modern Rendering Engine Built on Diligent APIs
        </p>

        {/* YouTube Embed */}
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/A6Amrfwip54"
            title="Prisma Engine Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </header>

      {/* What is Prisma Engine */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          What is Prisma Engine?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl">
          Prisma Engine is a high-performance 3D engine designed to deliver cutting-edge rendering, animation,
          physics, and scene management capabilities. Leveraging the Diligent Engine, it provides cross-API
          compatibility and ensures efficient performance across different graphics backends. Whether you're
          building complex real-time simulations, games, or interactive visualizations, Prisma Engine offers
          the tools and flexibility to create stunning, realistic environments.
        </p>
      </section>

      {/* Key Features */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Key Features
        </h2>
        <ul className="text-gray-300 max-w-4xl space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base md:text-lg text-left">
          <li>High-performance cross-API rendering powered by the Diligent Engine.</li>
          <li>Clustered rendering pipelines supporting Forward and Deferred Clustered approaches.</li>
          <li>Advanced lighting with directional, omnidirectional, and spot lights, plus dynamic shadows via cascaded shadow maps.</li>
          <li>Thread-safe animation system with smooth blending for realistic movement.</li>
          <li>Physics simulations using Jolt Physics for rigid and soft body dynamics.</li>
          <li>Indirect drawing for efficient rendering of multiple objects.</li>
          <li>HDR rendering for a wide range of light intensities.</li>
          <li>Seamless glTF model integration and Physically Based Rendering (PBR) with Image Based Lighting (IBL).</li>
          <li>Realistic reflections and ambient shading using SSR and SSAO.</li>
          <li>Scene graph management, bloom, post-processing, particle systems, volumetric clouds, and water simulations.</li>
          <li>Support for order-independent transparencies and hardware-accelerated ray tracing.</li>
          <li>Integrated editor with Run/Debug modes, Transform and Physics Modifiers, Scene Graph viewer, Animation Viewer, and Texture Debugger.</li>
        </ul>
      </section>
    </div>
  );
};

export default PrismaEngine;
