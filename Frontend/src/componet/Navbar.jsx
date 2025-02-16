import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full px-6">
      <div className="container mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/path-to-logo.png"
            alt="Bluestock Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-black">BLUESTOCK</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-gray-700">
          <a href="#products" className="hover:text-blue-500">
            PRODUCTS
          </a>
          <a href="#pricing" className="hover:text-blue-500">
            PRICING
          </a>
          <a href="#community" className="hover:text-blue-500">
            COMMUNITY
          </a>
          <a href="#media" className="hover:text-blue-500">
            MEDIA
          </a>
          <a href="#support" className="hover:text-blue-500">
            SUPPORT
          </a>
        </nav>

        {/* Desktop Sign In & Sign Up */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#signin" className="text-gray-700 hover:text-blue-500">
            Sign In
          </a>
          <a
            href="#signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-white shadow-md py-4 lg:hidden">
          <div className="container mx-auto flex flex-col space-y-4 text-gray-700">
            <a href="#products" className="hover:text-blue-500">
              PRODUCTS
            </a>
            <a href="#pricing" className="hover:text-blue-500">
              PRICING
            </a>
            <a href="#community" className="hover:text-blue-500">
              COMMUNITY
            </a>
            <a href="#media" className="hover:text-blue-500">
              MEDIA
            </a>
            <a href="#support" className="hover:text-blue-500">
              SUPPORT
            </a>
            <a href="#signin" className="hover:text-blue-500">
              Sign In
            </a>
            <a
              href="#signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            >
              Sign Up Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
