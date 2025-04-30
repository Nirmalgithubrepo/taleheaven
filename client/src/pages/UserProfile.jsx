import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import your auth hook
import UserProfileDropdown from "./UserProfileDropdown"; // Dropdown component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  const navLinkClasses =
    "relative px-2 py-1 hover:text-yellow-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-50 shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          TaleHaven
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-lg px-6 py-2 shadow-inner">
          <Search className="text-black" size={25} />
          <input
            type="text"
            placeholder="Search books..."
            className="ml-2 bg-transparent outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-2 text-black items-center font text-lg">
          <Link to="/" className={navLinkClasses}>Home</Link>
          <Link to="/about" className={navLinkClasses}>About</Link>
          <Link to="/shop" className={navLinkClasses}>Shop</Link>
          <Link to="/sell" className={navLinkClasses}>Sell</Link>
          <Link to="/blog" className={navLinkClasses}>Blog</Link>
          <Link to="/contact" className={navLinkClasses}>Contact</Link>

          {/* Show Dashboard only to Admin */}
          {user?.isLoggedIn && user.role === "admin" && (
            <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
          )}

          {/* Show Orders and Cart only to Users */}
          {user?.isLoggedIn && user.role === "user" && (
            <>
              <Link to="/orders" className={navLinkClasses}>Orders</Link>
              <Link to="/cart" className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Auth Buttons or Profile Dropdown */}
        <div className="hidden md:flex items-center space-x-3">
          {!user?.isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <UserProfileDropdown username={user.name} />
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
