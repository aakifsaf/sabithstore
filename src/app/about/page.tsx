import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[url('/ai-generated-networking-building-business-background-photo.jpg')] bg-cover bg-center text-white py-20 text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-8">
          Sabith Grocery Store is dedicated to providing fresh and quality groceries to our community. We believe in offering the best products at affordable prices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/file.svg" alt="Our Values" width={100} height={100} className="mx-auto" />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">Our Values</h3>
            <p className="text-gray-600">We prioritize quality, affordability, and customer satisfaction.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image src="/globe.svg" alt="Our Mission" width={100} height={100} className="mx-auto" />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">To be the most trusted grocery store in the community.</p>
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

export default About;