import telegram from '../assets/telegram.svg';
import chatgpt from '../assets/chatgpt.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Site() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-[calc(100vh-3.5rem)] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I'm a software engineer passionate about building high-performance applications and exploring new ways to optimize cross-platform experiences.          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            With over 8 years of experience in both desktop and mobile development, I specialize in building high-performance applications. My work spans technologies such as Flutter for mobile development, as well as OpenGL, Unity, and Unreal Engine 5 for immersive visual experiences.

            You can explore more of my projects on GitHub, where I have C++ Telegram API integrations, ChatGPT extensions, Flutter apps and more!

            I’m also proficient in Java, Python, and TypeScript, with hands-on experience using modern frameworks like Angular, React, and Three.js. In addition, I’m well-versed in Docker and CI/CD pipeline setup for efficient deployment and automation.
          </motion.p>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/articles"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded-lg text-white font-semibold mt-4 hover:scale-105 transform transition"
            >
              Read My Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 bg-gray-800 flex items-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prisma Engine',
                img: 'https://github.com/deni2312/prisma-engine/blob/main/bin/images/screenshot.png?raw=true',
                desc: 'Prisma Engine is an OpenGL-based rendering engine, it uses clustered rendering and is designed for creating dynamic 3D applications. It is a personal project created to showcase the capabilities of modern OpenGL.',
                link: 'https://github.com/deni2312/prisma-engine',
              },
              {
                title: 'ComfyUI App',
                img: 'https://github.com/deni2312/ComfyUIMobileApp/blob/main/assets/comfy_icon.png?raw=true',
                desc: 'ComfyUI App is a Flutter-based Android application that serves as an unofficial client for the ComfyUI platform.',
                link: 'https://github.com/deni2312/ComfyUIMobileApp',
              },
              {
                title: 'Telegram Bot API',
                img: telegram,
                desc: 'This is a C++ library for interacting with the Telegram Bot API. It provides a simple and convenient way to send and receive messages, manage chats and users, and perform other bot-related tasks.',
                link: 'https://github.com/deni2312/Telegram-Bot-Api-Cpp',
              },
              {
                title: 'ChatGPT API',
                img: chatgpt,
                desc: 'A header-only version of ChatGPT Official API written in C++, it supports text and audio questions.',
                link: 'https://github.com/deni2312/ChatGPT-Cpp',
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="bg-gray-700 p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg mb-4 w-[300px] h-[200px] object-contain"
                  />
                </a>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Site;
