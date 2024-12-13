import React from "react";
import Image from "next/image";
export default function Music() {
  return (
    <main className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[80%] sm:p-5 sm:h-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black">
        <div className="sm:w-full md:w-[50%] p-4">
          <h3 className="text-green-500 font-bold">Categories</h3>
          <h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-4xl pt-4">
            Enhance Your
            <span> Music Experience</span>
          </h1>

          {/* Timer */}
          <div className="flex sm:flex-wrap sm:justify-start md:justify-start pt-5 gap-4">
            <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold">23</span>
              <span className="font-bold">Hours</span>
            </div>

            <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold">05</span>
              <span className="font-bold">Days</span>
            </div>

            <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold">59</span>
              <span className="font-bold">Minutes</span>
            </div>

            <div className="bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex flex-col justify-center items-center">
              <span className="font-bold">35</span>
              <span className="font-bold">Seconds</span>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-800 sm:px-3 md:px-7 sm:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3">
            Buy Now
          </button>
        </div>

        {/* Image */}
        <div className="sm:w-full md:w-[40%] lg:w-[40%] pl-6 justify-center items-center">
          <Image
            src="/speker.png"
            alt="Speaker"
            width={200} 
            height={200} 
            className="w-full h-auto shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
