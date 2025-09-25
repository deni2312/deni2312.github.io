import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LoadingBar from "../components/BarComponent";

const PrismaEngine: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className="bg-gray-900 text-white font-sans overflow-hidden">
      <LoadingBar/>
    
      {/* Header */}
      <header className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Prisma Engine
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A Modern Rendering Engine Built on Diligent APIs
        </motion.p>

        {/* YouTube Embed */}
        <motion.div
          className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/A6Amrfwip54"
            title="Prisma Engine Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </header>

      {/* What is Prisma Engine */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What is Prisma Engine?
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Prisma Engine is a high-performance 3D engine designed to deliver cutting-edge rendering, animation,
          physics, and scene management capabilities. Leveraging the Diligent Engine, it provides cross-API
          compatibility and ensures efficient performance across different graphics backends. Whether you're
          building complex real-time simulations, games, or interactive visualizations, Prisma Engine offers
          the tools and flexibility to create stunning, realistic environments.
        </motion.p>
      </section>

      {/* Key Features */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-4 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.ul
          className="text-gray-300 max-w-4xl space-y-3 sm:space-y-4 list-disc list-inside text-sm sm:text-base md:text-lg text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
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
        </motion.ul>
      </section>
    </div>
  );
};

export default PrismaEngine;
