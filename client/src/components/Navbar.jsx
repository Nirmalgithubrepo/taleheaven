// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-9 text-gray-700">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <Link to="/about" className="hover:text-blue-600">About</Link>
//           <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//           <Link to="/sell" className="hover:text-blue-600">Sell Your Book</Link>
//           <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//           <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//         </div>

//         {/* Login & Signup Buttons */}
//         <div className="hidden md:flex space-x-4">
//           <Link to="/login" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700">
//             Login
//           </Link>
//           <Link to="/signup" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700">
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md py-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link to="/" className="hover:text-blue-600">Home</Link>
//             <Link to="/about" className="hover:text-blue-600">About</Link>
//             <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//             <Link to="/sell" className="hover:text-blue-600">Sell Your Book</Link>
//             <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//             <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//             <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               Login
//             </Link>
//             <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { ToastContainer } from "react-toastify";
// import { handleError, handleSuccess } from "../utils";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem('loggedInUser'));
//     fetchProducts();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setLoggedInUser('');
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000);
//   };

//   const fetchProducts = async () => {
//     try {
//       // const url = "https://deploy-mern-app-1-api.vercel.app/products";
//       const url = "http://localhost:8080/auth/signup"; // You can update to correct product API
//       const headers = {
//         headers: {
//           'Authorization': localStorage.getItem('token')
//         }
//       };
//       const response = await fetch(url, headers);
//       const result = await response.json();
//       console.log(result);
//       setProducts(result);
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-9 text-gray-700">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <Link to="/about" className="hover:text-blue-600">About</Link>
//           <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//           <Link to="/sell" className="hover:text-blue-600">Sell Your Book</Link>
//           <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//           <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//         </div>

//         {/* Login/Logout Buttons */}
//         <div className="hidden md:flex space-x-4">
//           {loggedInUser ? (
//             <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//               Logout ({loggedInUser})
//             </button>
//           ) : (
//             <>
//               <Link to="/login" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700">
//                 Login
//               </Link>
//               <Link to="/signup" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700">
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md py-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/shop" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Shop</Link>
//             <Link to="/sell" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Sell Your Book</Link>
//             <Link to="/blog" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>
//             <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact Us</Link>

//             {loggedInUser ? (
//               <button onClick={() => {handleLogout(); setIsOpen(false);}} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
//                 Logout ({loggedInUser})
//               </button>
//             ) : (
//               <>
//                 <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => setIsOpen(false)}>
//                   Login
//                 </Link>
//                 <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={() => setIsOpen(false)}>
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Product List */}
//       {products.length > 0 && (
//         <div className="mt-6 px-6">
//           <h2 className="text-xl font-semibold mb-4">Products:</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {products.map((item, index) => (
//               <div key={index} className="p-4 border rounded shadow-sm">
//                 <h3 className="font-bold">{item.name}</h3>
//                 <p>Price: {item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    handleSuccess("Logged out successfully!");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-white shadow-md p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Bookstore</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/sell" className="hover:text-blue-600">Sell</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {loggedInUser ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800"
              >
                {loggedInUser}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-20">
                  <Link
                    to="/cart"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Cart
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
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
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/shop" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/sell" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Sell</Link>
            <Link to="/blog" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>

            {loggedInUser ? (
              <>
                <span className="font-semibold">{loggedInUser}</span>
                <Link
                  to="/cart"
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Cart
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
