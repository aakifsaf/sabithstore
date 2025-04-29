import Image from "next/image";
import { FaShippingFast, FaDollarSign, FaCheckCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/ai-generated-networking-building-business-background-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)"
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl font-extrabold mb-6 animate-fade-in">Welcome to Sabith Store</h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">Discover the freshest and finest groceries delivered to your doorstep.</p>
          <a href="#products" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">Shop Now</a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <Image src="/file.svg" alt="Product 1" width={150} height={150} className="mx-auto" />
              <h4 className="text-2xl font-bold mt-4 text-gray-800">Product 1</h4>
              <p className="text-gray-600">$10.00</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <Image src="/globe.svg" alt="Product 2" width={150} height={150} className="mx-auto" />
              <h4 className="text-2xl font-bold mt-4 text-gray-800">Product 2</h4>
              <p className="text-gray-600">$15.00</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
              <Image src="/window.svg" alt="Product 3" width={150} height={150} className="mx-auto" />
              <h4 className="text-2xl font-bold mt-4 text-gray-800">Product 3</h4>
              <p className="text-gray-600">$20.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <FaCheckCircle className="text-blue-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Quality Products</h4>
              <p className="text-gray-600">We ensure the highest quality in every product we offer.</p>
            </div>
            <div className="text-center">
              <FaShippingFast className="text-blue-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Get your groceries delivered to your doorstep quickly.</p>
            </div>
            <div className="text-center">
              <FaDollarSign className="text-blue-600 text-6xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Affordable Prices</h4>
              <p className="text-gray-600">We offer competitive prices for all our products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image src="/customer1.jpg" alt="John Doe" width={80} height={80} className="mx-auto mb-4 rounded-full" />
              <p className="text-gray-700 italic mb-4">"The best grocery store in town! Fresh products and amazing service."</p>
              <h4 className="text-lg font-bold">- John Doe</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image src="/customer2.jpg" alt="Jane Smith" width={80} height={80} className="mx-auto mb-4 rounded-full" />
              <p className="text-gray-700 italic mb-4">"I love the fast delivery and affordable prices. Highly recommend!"</p>
              <h4 className="text-lg font-bold">- Jane Smith</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Image src="/customer3.jpg" alt="Emily Johnson" width={80} height={80} className="mx-auto mb-4 rounded-full" />
              <p className="text-gray-700 italic mb-4">"Great variety of products and excellent customer support."</p>
              <h4 className="text-lg font-bold">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Partners</h3>
          <div className="flex justify-center space-x-8">
            <Image src="/vercel.svg" alt="Partner 1" width={100} height={50} />
            <Image src="/next.svg" alt="Partner 2" width={100} height={50} />
            <Image src="/globe.svg" alt="Partner 3" width={100} height={50} />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Join Our Newsletter</h3>
        <p className="mb-6">Stay updated with the latest offers and products.</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button className="bg-purple-600 px-6 py-2 rounded-r-lg hover:bg-purple-700">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
