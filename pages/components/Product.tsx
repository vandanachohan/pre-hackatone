import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const products = [
  {
    title: "The North Coat",
    price: "$260",
    oldPrice: "$360",
    image: "/jacket..png",
    rating: 5,
    reviews: "65",
  },
  {
    title: "Gucci Duffle Bag",
    price: "$960",
    oldPrice: "$1100",
    image: "/bag.png",
    rating: 4,
    reviews: "43",
  },
  {
    title: "RGB Liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    image: "/speakerset.png",
    rating: 4,
    reviews: "21",
  },
  {
    title: "Small Bookshelf",
    price: "$360",
    oldPrice: null,
    image: "/shalf.png",
    rating: 5,
    reviews: "89",
  },
];

const ProductBox = ({ product }: { product: any }) => {
  return (
    <div className="w-[220px] ">
      <div className="group shadow-sm bg-white w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
        <Image src={product.image} alt={product.title} width={150} height={100} />
        <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
          <CiHeart className="text-2xl text-black rounded-full p-1 bg-white" />
          <IoEyeOutline className="text-2xl text-black rounded-full p-1 bg-white" />
        </div>
        <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
      <h1 className="font-bold font-sans pt-2">{product.title}</h1>
      <div className="flex items-center space-x-2">
        <span className="text-red-500 font-bold">{product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 font-bold line-through">
            {product.oldPrice}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        {[...Array(5)].map((_, index) =>
          index < product.rating ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} />
          )
        )}
        <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[84%] border-2 border-neutral-100 pb-10">
        <div className="flex flex-col justify-end">
          <h1 className="text-red-600 font-bold border-l-8 border-red-500 pl-3 ml-1">
            This Month
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-black font-bold sm:text-lg md:text-3xl pt-2">
              Best Selling Products
            </h2>
            <div className="flex items-center space-x-2">
              {/* Add "View All" Button */}
              <button className="bg-red-600 text-white px-4 py-2 rounded-sm hover:bg-red-700 transition">
                View All
              </button>
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition">
                  <BsChevronLeft />
                </button>
                <button className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition">
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-5 gap-y-5">
          {products.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
