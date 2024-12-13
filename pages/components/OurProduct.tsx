import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

//  products..
const products = [
  {
    title: "Breed Dry Dog Food",
    price: "$100",
    oldPrice: "$120",
    image: "/dogfood.jpeg",
    rating: 3,
    reviews: "35",
    options: false,
    
  },
  {
    title: "CANON EOS DSLR Camera",
    price: "$360",
    image: "/camera.png",
    rating: 4,
    reviews: "95",
    options: false,
  },
  {
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    oldPrice: "$850",
    image: "/laptop.png",
    rating: 5,
    reviews: "125",
    options: false,
  },
  {
    title: "Curology Product Set",
    price: "$500",
    image: "/curology.png",
    rating: 4,
    reviews: "165",
    options: false,
  },
  {
    title: "Kids Electric Car",
    price: "$960",
    oldPrice: "$1200",
    image: "/car.png",
    rating: 5,
    reviews: "65",
    discount: "NEW",
    options: true,
  },
  {
    title: "Jr. Zoom Soccer Cleats",
    price: "$1780",
    image: "/shoes.png",
    rating: 5,
    reviews: "35",
    options: true,
  },
  {
    title: "GP11 Shooter USB Gamepad",
    price: "$960",
    image: "/gaming.png",
    rating: 5,
    reviews: "55",
    discount: "NEW",
    options: false,
  },
  {
    title: "Quilted Satin Jacket",
    price: "$660",
    oldPrice: "$750",
    image: "/lederjacket.png",
    rating: 4.5,
    reviews: "66",
    options: true,
  },
];

const ProductBox = ({ product }: { product: any }) => {
  return (
    <div className="w-[220px]">
      <div className="group shadow-sm bg-white w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
        <Image
          src={product.image}
          alt={product.title}
          width={115}
          height={100}
        />
        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </div>
        )}
        {/* Action*/}
        <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
          <CiHeart className="text-2xl text-black rounded-full p-1 bg-white" />
          <IoEyeOutline className="text-2xl text-black rounded-full p-1 bg-white" />
        </div>
        {/* Add to Cart Button */}
        <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
      {/* Product Details */}
      <h1 className="font-bold font-sans pt-2">{product.title}</h1>
      <div className="flex items-center space-x-2">
        <span className="text-red-500 font-bold">{product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 font-bold line-through">
            {product.oldPrice}
          </span>
        )}
      </div>
      {/* Ratings */}
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
      {/* Options Selector */}
      {product.options && (
        <div className="flex space-x-2 mt-2">
          <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer border-2 border-red-700"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full cursor-pointer border-2 border-gray-300"></div>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[84%] border-2 border-neutral-100 pb-10 relative">
        {/* Section Header */}
        <div className="flex flex-col justify-start px-4">
          <h1 className="text-red-600 font-bold border-l-8 border-red-500 pl-3">
            Our Products
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="text-black font-bold sm:text-lg md:text-3xl pt-2">
              Explore Our Products
            </h2>
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition">
                <BsChevronLeft />
              </button>
              <button className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition">
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="flex flex-wrap justify-between mt-5 gap-y-5 px-4">
          {products.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-4 py-2 rounded-sm hover:bg-red-700 transition">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
