import Image from "next/image";
import Timer from "./timer";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";

// Product data
const products = [
  {
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-25%",
    image: "/game.png",
    rating: 5,
    reviews: "88",
  },
  {
    title: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-15%",
    image: "/KeyBoard.png",
    rating: 4,
    reviews: "75",
  },
  {
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    image: "/LCD.png",
    rating: 5,
    reviews: "99",
  },
  {
    title: "S-Series Comfort Chair ",
    price: "$360",
    oldPrice: "$745",
    discount: "-20%",
    image: "/chair.png",
    rating: 4.5,
    reviews: "99",
  },
  {
    title: "S-Series Comfort Chair",
    price: "$299",
    oldPrice: "$450",
    discount: "-35%",
    image: "/chair.png",
    rating: 4,
    reviews: "77",
  },
];

// Product Box Component
const ProductBox = ({ product }: { product: any }) => {
  return (
    <div className="w-[220px] flex-shrink-0">
      <div className="group shadow-sm bg-white w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={100}
        />
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {product.discount}
        </span>
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

// Main Component
const FlashSales = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[84%] border-2 border-neutral-100 pb-10 relative">
        <div className="flex flex-col sm:pl-[6%] md:pl-0">
          <h3 className="text-red-600 font-bold border-l-8 border-red-500 pl-3 ml-1">
            Today's
          </h3>
          <div className="flex items-center gap-4 justify-between">
            <h1 className="text-black font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              Flash Sales
            </h1>
             <Timer />
            <div className="flex items-center space-x-6">
             
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition"
                  onClick={scrollLeft}
                >
                  <BsChevronLeft />
                </button>
                <button
                  className="bg-gray-100 text-gray-700 p-2 rounded-full shadow hover:bg-gray-200 transition"
                  onClick={scrollRight}
                >
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative mt-5">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-5 px-6 no-scrollbar scroll-smooth"
          >
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
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

export default FlashSales;
