import React from "react";
import { Link } from "react-router-dom";
import culling from "../assets/culling.png";
import showcase from "../assets/showcase.png";
import { motion } from "framer-motion";

const ArticlesPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-3.25rem)] bg-gradient-to-r from-green-500 to-blue-500 py-20 flex items-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Articles
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Insights, guides, and more from my experiences in programming and
            graphics design.
          </motion.p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="min-h-[calc(100vh-3.25rem)] py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Recent Posts
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prisma Engine",
                desc: "An overview of Prisma Engine with Diligent backend",
                img: showcase,
                link: "/articles/PrismaEngine",
              },
              {
                title: "Understanding Frustum Culling",
                desc: "An article describing how I've implemented Frustum Culling using GlMultiDrawIndirectCount and atomic counters.",
                img: culling,
                link: "/articles/culling",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="bg-gray-700 p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="rounded-lg mb-4 object-contain w-full h-48"
                />
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="mt-2 text-gray-300">{post.desc}</p>
                <Link
                  to={post.link}
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
