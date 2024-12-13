import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
<time dateTime="2016-10-25" suppressHydrationWarning />
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    console.log(`Language changed to: ${language}`);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="bg-black px-4 py-3 mx-auto sm:px-8 sm:py-4 border-b flex flex-col sm:flex-row sm:items-center relative">
      {/* Sale Message */}
      <div className="w-full sm:flex-1 flex justify-center items-center mb-2 sm:mb-0">
        <p className="text-sm sm:text-base text-white font-bold text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <button
            className="font-poppins px-4 font-bold text-white hover:underline"
            onClick={() => {
              console.log("You are shopping now!");
            }}
          >
            ShopNow
          </button>
        </p>
      </div>

      {/* Language and Icon */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-2 relative">
        <span className="text-white text-sm sm:text-base">English</span>
        <ChevronDown
          className="cursor-pointer text-white"
          onClick={toggleDropdown}
        />
        {/* Dropdown */}
        {isDropdownOpen && (
          <div
            className="absolute top-10 right-0 bg-white text-black shadow-lg rounded-md 
              w-40 sm:w-32 z-50 text-sm text-center"
          >
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageChange("French")}
              >
                Urdu
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageChange("Spanish")}
              >
                Spanish
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageChange("German")}
              >
                German
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
