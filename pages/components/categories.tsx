import React from "react";
import { BsChevronLeft, BsChevronRight, BsSmartwatch } from "react-icons/bs";
import {
  FaComputer,
  FaHeadphones,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { LuGamepad } from "react-icons/lu";

export default function Categories() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-fulll md:w-[84%] bolder-2 border-neutral-100 pb-10">
        {/* Title Section */}
        <div className="flex flex-col sm:pl[6%] md:pl-0">
          <h3 className="text-red-600 font-bold border-l-8 border-red-500 pl-3 ml-1">
            Categories
          </h3>
          <div className="flex justify-between items-center">
            <h1 className="text-black font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
              Browse By Categories
            </h1>
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

        {/* Categories Section */}
        <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          {/* Box 1 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaMobileScreenButton className="text-4xl " />
            <p className="font-serif">Phones</p>
          </div>
          {/* Box 2 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaComputer className="text-4xl " />
            <p className="font-serif">Computer</p>
          </div>
          {/* Box 3 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <BsSmartwatch className="text-4xl " />
            <p className="font-serif">SmartWatch</p>
          </div>
          {/* Box 4 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FiCamera className="text-4xl" />
            <p className="font-serif">Camera</p>
          </div>
          {/* Box 5 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <FaHeadphones className="text-4xl " />
            <p className="font-serif">HeadPhones</p>
          </div>
          {/* Box 6 */}
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w[100px] md:w-[200px] h-[145px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <LuGamepad className="text-4xl " />
            <p className="font-serif">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
