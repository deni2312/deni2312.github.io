import telegram from '../assets/telegram.svg';
import chatgpt from '../assets/chatgpt.png';
import { Link } from 'react-router-dom';

function Site() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-[calc(100vh-3.5rem)] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            I'm a computer graphics programmer who loves exploring the complexity of visuals and experimenting with innovative rendering techniques.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            With over 5 years of experience in OpenGL, Unity, and Unreal Engine 5, I specialize in crafting real-time rendering engines, shaders, and other cool graphics programming stuff.
            You can also check out my GitHub for other projects, including work with the Telegram API and ChatGPT integrations, all written in my favorite language, C++.
            I'm also highly proficient in languages like Java, Python, and TypeScript, working with frameworks such as Angular, React, and Three.js. I have experience in mobile development using Flutter, as well as expertise in Docker and setting up CI/CD pipelines.
          </p>
          <div className="text-center mt-8">
            <Link
              to="/articles"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded-lg text-white font-semibold mt-4"
            >
              Read My Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 bg-gray-800 flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <a href="https://github.com/deni2312/prisma-engine" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <img
                  src="https://github.com/deni2312/prisma-engine/blob/main/bin/images/screenshot.png?raw=true"
                  alt="Prisma Engine"
                  className="rounded-lg mb-4 w-[600px] h-[200px] object-contain"
                />
              </a>
              <h3 className="text-xl font-bold">Prisma Engine</h3>
              <p className="mt-2 text-gray-300">
                Prisma Engine is an OpenGL-based rendering engine, it uses clustered rendering and is designed for creating dynamic 3D applications. It is a personal project created to showcase the capabilities of modern OpenGL.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <a href="https://github.com/deni2312/Telegram-Bot-Api-Cpp" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <img
                  src={telegram}
                  alt="Telegram Bot API"
                  className="rounded-lg mb-4 w-[300px] h-[200px] object-contain"
                />
              </a>
              <h3 className="text-xl font-bold">Telegram Bot API</h3>
              <p className="mt-2 text-gray-300">
                This is a C++ library for interacting with the Telegram Bot API. It provides a simple and convenient way to send and receive messages, manage chats and users, and perform other bot-related tasks.
              </p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <a href="https://github.com/deni2312/ChatGPT-Cpp" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <img
                  src={chatgpt}
                  alt="ChatGPT API"
                  className="rounded-lg mb-4 w-[300px] h-[200px] object-contain"
                />
              </a>
              <h3 className="text-xl font-bold">ChatGPT API</h3>
              <p className="mt-2 text-gray-300">
                A header-only version of ChatGPT Official API written in C++, it supports text and audio questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[calc(100vh-3.25rem)] flex items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-300"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-300"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 rounded-lg text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Site;