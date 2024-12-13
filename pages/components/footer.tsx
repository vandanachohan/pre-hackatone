import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const accountLinks = [
    { href: "#", label: "My Account" },
    { href: "#", label: "Login / Register" },
    { href: "#", label: "Cart" },
    { href: "#", label: "Wishlist" },
    { href: "#", label: "Shop" },
  ];

  const quickLinks = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms Of Use" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Contact" },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div>
            <h3 className="text-lg font-semibold">Exclusive</h3>
            <p className="text-sm mt-2">Get 10% off your first order</p>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 md:w-40 rounded-l bg-gray-800 border border-gray-600 text-white focus:outline-none"
                aria-label="Enter your email"
              />
              <button
                className="px-4 py-2 bg-indigo-600 rounded-r hover:bg-indigo-700"
                aria-label="Submit email"
              >
                <span className="text-white">&gt;</span>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm mt-2">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm mt-2">exclusive@gmail.com</p>
            <p className="text-sm mt-2">+88015-88888-9999</p>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="mt-4 space-y-2">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold">Download App</h3>
            <p className="text-sm mt-2">Save $3 with App New User Only</p>
            <div className="mt-4 flex space-x-4className=flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
              <Image
                src="/QRCODE.jpeg"
                alt="QR code for downloading the app"
                className="w-20 h-20"
                width={90}
                height={90}
                loading="lazy"
              />
              <Image
                src="/Google.png"
                alt="Google Play download button"
                className="w-32"
                width={128}
                height={40}
                loading="lazy"
              />
              <Image 
                src="/appstore.png"
                alt="App Store download button"
                className="justify-self-center"
                width={128}
                height={40}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col items-center">
          <p className="text-sm text-center">
            &copy; Copyright Rimel 2022. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
