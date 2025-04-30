// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white text-center p-4 mt-8">
//       <p>&copy; 2025 Bookstore. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Bookstore</h3>
          <p className="text-sm text-gray-400">
            Discover your next great read. Explore categories, buy & sell books with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/sell" className="hover:text-white">Sell Your Book</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Blog & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/login" className="hover:text-white">Login</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; 2025 Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
