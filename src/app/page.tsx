import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/ai-generated-networking-building-business-background-photo.jpg')] bg-cover bg-center text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-6xl font-extrabold mb-6 animate-fade-in">Welcome to Sabith Grocery Store</h2>
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
