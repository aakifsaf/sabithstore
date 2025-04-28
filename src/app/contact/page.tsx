import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[url('/ai-generated-networking-building-business-background-photo.jpg')] bg-cover bg-center text-white py-20 text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-white shadow-lg rounded-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              Send Message
            </button>
          </form>
          <div className="bg-white shadow-lg rounded-lg p-8 flex items-center justify-center">
            <Image src="/globe.svg" alt="Map" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Sabith Grocery Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;