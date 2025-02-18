import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo_min from "../../../assets/logo_min.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md w-full px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo_min} alt="Bluestock Logo" className="h-10" />
          <span className="ml-2 text-lg font-bold text-black">BLUESTOCK</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-5 text-gray-700 text-sm">
          <Link  className="hover:text-blue-500">PRODUCTS</Link>
          <Link  className="hover:text-blue-500">PRICING</Link>
          <Link  className="hover:text-blue-500">COMMUNITY</Link>
          <Link  className="hover:text-blue-500">MEDIA</Link>
          <Link  className="hover:text-blue-500">SUPPORT</Link>
        </nav>

        {/* Desktop Sign In & Sign Up */}
        <div className="hidden lg:flex items-center space-x-3 text-sm">
          <Link to="/signIn" className="text-gray-700 hover:text-blue-500">Sign In</Link>
          <Link to="/signUp"  className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-white shadow-md py-3 lg:hidden">
          <div className="container mx-auto flex flex-col space-y-3 text-gray-700 text-sm">
            <Link  className="hover:text-blue-500 hover:cursor-pointer">PRODUCTS</Link>
            <Link  className="hover:text-blue-500 hover:cursor-pointer">PRICING</Link>
            <Link  className="hover:text-blue-500 hover:cursor-pointer">COMMUNITY</Link>
            <Link  className="hover:text-blue-500 hover:cursor-pointer">MEDIA</Link>
            <Link  className="hover:text-blue-500 hover:cursor-pointer">SUPPORT</Link>
            <Link to={"/signIn"}  className="hover:text-blue-500  hover:cursor-pointer">Sign In</Link>
          
            <Link to="/signUp" className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">Sign Up Now</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
