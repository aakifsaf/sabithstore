import React from "react";
import Image from "next/image";
import { FaHandsHelping, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/pngtree-about-us-digitally-generated-image-concepts-single-word-photo-picture-image_5166947.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)"
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-8">
          Sabith Store is dedicated to providing fresh and quality groceries to our community. We believe in offering the best products at affordable prices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaHandsHelping className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">Our Values</h3>
            <p className="text-gray-600">We prioritize quality, affordability, and customer satisfaction.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaBullseye className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mt-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">To be the most trusted grocery store in the community.</p>
          </div>
        </div>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Our History</h3>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">1</div>
                <p className="text-gray-700">Founded in 2010, Sabith Store started as a small family business.</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">2</div>
                <p className="text-gray-700">Expanded to multiple locations by 2015, serving thousands of customers.</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">3</div>
                <p className="text-gray-700">Launched online delivery services in 2020 to meet modern demands.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet the Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Image src="/team1.jpg" alt="Alice Brown" width={100} height={100} className="mx-auto mb-4 rounded-full" />
                <h4 className="text-xl font-bold">Alice Brown</h4>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <Image src="/team2.jpg" alt="Michael Green" width={100} height={100} className="mx-auto mb-4 rounded-full" />
                <h4 className="text-xl font-bold">Michael Green</h4>
                <p className="text-gray-600">Operations Manager</p>
              </div>
              <div className="text-center">
                <Image src="/team3.jpg" alt="Sarah White" width={100} height={100} className="mx-auto mb-4 rounded-full" />
                <h4 className="text-xl font-bold">Sarah White</h4>
                <p className="text-gray-600">Marketing Head</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;