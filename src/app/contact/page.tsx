import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/contact-us-banner-call-center-600nw-2071411403.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)"
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
        </div>
      </section>
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
            <Image src="/map.jpg" alt="Map" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </main>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-2">What are your delivery hours?</h4>
              <p className="text-gray-600">We deliver from 8 AM to 8 PM, Monday to Saturday.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Do you offer same-day delivery?</h4>
              <p className="text-gray-600">Yes, we offer same-day delivery for orders placed before 12 PM.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept credit cards, debit cards, and online payment options.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook className="text-6xl" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaTwitter className="text-6xl" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaInstagram className="text-6xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;