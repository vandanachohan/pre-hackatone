import React from "react";
import Image from "next/image"; // Assuming you're using Next.js, but can be replaced with regular 'img' tag if not.
import { FaShoppingCart } from "react-icons/fa"; // Optional icon for buttons

export default function Featured() {
  return (
    <div className="bg-black text-white px-10 py-20">
      {/* Section Header */}
      <h2 className="text-red-600 text-2xl font-bold mb-10">Featured</h2>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Product 1 */}
        <div className="relative group border-2 border-neutral-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all">
          <Image
            src="/PS5.png" 
            alt="PlayStation 5"
            className="w-full h-64 object-cover"
            width={500}
            height={350}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-5 text-center">
            <h3 className="text-xl font-bold">PlayStation 5</h3>
            <p className="text-sm mb-4">Black and White version of the PS5 coming out on sale.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center">
              Shop Now <FaShoppingCart className="ml-2" />
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="relative group border-2 border-neutral-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all">
          <Image
            src="/girl.jpeg" 
            alt="Women s Collections"
            className="w-full h-64 object-cover"
            width={500}
            height={350}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-5 text-center">
            <h3 className="text-xl font-bold">Women’s Collections</h3>
            <p className="text-sm mb-4">Featured woman collections that give you another vibe.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center">
              Shop Now <FaShoppingCart className="ml-2" />
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="relative group border-2 border-neutral-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all">
          <Image
            src="/newspeakers.png" 
            alt="Speakers"
            className="w-full h-64 object-cover"
            width={500}
            height={350}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-5 text-center">
            <h3 className="text-xl font-bold">Speakers</h3>
            <p className="text-sm mb-4">Amazon wireless speakers for great sound.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center">
              Shop Now <FaShoppingCart className="ml-2" />
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="relative group border-2 border-neutral-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all">
          <Image
            src="/perfume.png" 
            alt="Perfume"
            className="w-full h-64 object-cover"
            width={500}
            height={350}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-5 text-center">
            <h3 className="text-xl font-bold">Perfume</h3>
            <p className="text-sm mb-4">GUCCI INTENSE OUD EDP for a luxurious scent.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center">
              Shop Now <FaShoppingCart className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
