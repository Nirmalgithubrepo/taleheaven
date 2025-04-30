// hi there 

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       navigate(`/shop?search=${searchQuery}`);
//     }
//   };

//   const navLinkClasses =
//     "relative px-2 py-1 hover:text-yellow-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-amber-50 shadow-md z-50">
//       <div className="container mx-auto p-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           TaleHaven
//         </Link>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-white rounded-lg px-6 py-2 shadow-inner">
//           <Search className="text-black" size={25} />
//           <input
//             type="text"
//             placeholder="Search books..."
//             className="ml-2 bg-transparent outline-none text-sm"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={handleSearch}
//           />
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex space-x-2 text-black items-center font text-lg">
//           <Link to="/" className={navLinkClasses}>Home</Link>
//           <Link to="/about" className={navLinkClasses}>About</Link>
//           <Link to="/shop" className={navLinkClasses}>Shop</Link>
//           <Link to="/sell" className={navLinkClasses}>Sell</Link>
//           <Link to="/blog" className={navLinkClasses}>Blog</Link>
//           <Link to="/reviews" className={navLinkClasses}>Reviews</Link>
//           <Link to="/contact" className={navLinkClasses}>Contact</Link>
//           <Link to="/dashbord" className={navLinkClasses}>Dashbord</Link>
//         </div>

//         {/* Cart Icon */}
//         <div className="hidden md:flex items-center mx-3 relative">
//           <Link to="/cart" className="relative">
//             <ShoppingCart size={26} className="text-gray-700 hover:text-blue-600" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
//           </Link>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-3">
//           <Link
//             to="/login"
//             className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md py-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link to="/" className="hover:text-blue-600">Home</Link>
//             <Link to="/about" className="hover:text-blue-600">About</Link>
//             <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//             <Link to="/sell" className="hover:text-blue-600">Sell</Link>
//             <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//             <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//             <Link to="/cart" className="hover:text-blue-600 flex items-center gap-2">
//               <ShoppingCart size={30} />
//               Cart
//             </Link>
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//             >
//               Sign Up
//             </Link>

//             {/* Mobile Search */}
//             <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-11/12 shadow-inner">
//               <Search className="text-gray-500" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 className="ml-2 bg-transparent outline-none text-sm w-full"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;













// import React, { useState, useEffect } from "react";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [cartItems, setCartItems] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem('loggedInUser');
//     setLoggedInUser(user);

//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(cart.length);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000);
//   };

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       navigate(`/shop?search=${searchQuery}`);
//     }
//   };

//   const handleCartClick = () => {
//     if (loggedInUser) {
//       navigate("/cart");
//     } else {
//       handleError("Please login first to access your cart");
//       navigate("/login");
//     }
//   };

//   const navLinkClasses =
//     "relative px-2 py-1 hover:text-yellow-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

//   return (
//     // <header className="fixed top-0 left-0 right-0 bg-amber-50 shadow-md z-50">
//     <header className="fixed top-0 left-0 right-0 bg--950 shadow-md z-50">
//       <div className="container mx-auto p-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           TaleHaven
//         </Link>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-white rounded-lg px-6 py-2 shadow-inner">
//           <Search className="text-black" size={25} />
//           <input
//             type="text"
//             placeholder="Search books..."
//             className="ml-2 bg-transparent outline-none text-sm"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={handleSearch}
//           />
//         </div>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex space-x-2 text-white items-center font text-lg">
//           <Link to="/" className={navLinkClasses}>Home</Link>
//           <Link to="/about" className={navLinkClasses}>About</Link>
//           <Link to="/shop" className={navLinkClasses}>Shop</Link>
//           <Link to="/sell" className={navLinkClasses}>Sell</Link>
//           <Link to="/blog" className={navLinkClasses}>Blog</Link>
//           <Link to="/reviews" className={navLinkClasses}>Reviews</Link>
//           <Link to="/contact" className={navLinkClasses}>Contact</Link>
//           <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
//         </div>

//         {/* Cart and User Section */}
//         <div className="hidden md:flex items-center space-x-4">
          
//           {/* Cart */}
//           <button onClick={handleCartClick} className="relative">
//             <ShoppingCart size={26} className="text-white hover:text-blue-600" />
//             {cartItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartItems}</span>
//             )}
//           </button>

//           {/* User Profile and Logout */}
//           {loggedInUser ? (
//             <div className="flex items-center space-x-3">
//               <User className="text-gray-700" size={28} />
//               <span className="font-semibold">{loggedInUser}</span>
//               <button
//                 onClick={handleLogout}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex space-x-3">
//               <Link
//                 to="/login"
//                 className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md py-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link to="/" className="hover:text-blue-600">Home</Link>
//             <Link to="/about" className="hover:text-blue-600">About</Link>
//             <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//             <Link to="/sell" className="hover:text-blue-600">Sell</Link>
//             <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//             <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
//             <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//             <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>

//             {/* Mobile Cart */}
//             <button onClick={handleCartClick} className="hover:text-blue-600 flex items-center gap-2">
//               <ShoppingCart size={30} />
//               Cart ({cartItems})
//             </button>

//             {/* User Section in Mobile */}
//             {loggedInUser ? (
//               <div className="flex flex-col items-center gap-2">
//                 <User size={30} />
//                 <span>{loggedInUser}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}

//             {/* Mobile Search */}
//             <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-11/12 shadow-inner">
//               <Search className="text-gray-500" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 className="ml-2 bg-transparent outline-none text-sm w-full"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </header>
//   );
// };

// export default Header;














// import React, { useState, useEffect } from "react";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [cartItems, setCartItems] = useState(0);
//   const [showHeader, setShowHeader] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem('loggedInUser');
//     setLoggedInUser(user);

//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(cart.length);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (e.clientY <= 50) {
//         setShowHeader(true);
//       } else {
//         setShowHeader(false);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000);
//   };

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       navigate(`/shop?search=${searchQuery}`);
//     }
//   };

//   const handleCartClick = () => {
//     if (loggedInUser) {
//       navigate("/cart");
//     } else {
//       handleError("Please login first to access your cart");
//       navigate("/login");
//     }
//   };

//   const navLinkClasses =
//     "relative px-2 py-1 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

//   return (
//     <>
//       {/* Header only shows when showHeader is true */}
//       {showHeader && (
//         <header className="fixed top-0 left-0 right-0 bg-neutral-950 shadow-md z-50 transition-all duration-300">
//           <div className="container mx-auto p-4 flex justify-between items-center">

//            {/* Logo */}
// <Link 
//   to="/" 
//   className="text-2xl font-bold text-blue-600 bg-white border-1 border-blue-400 rounded-full px-4 py-2 shadow-md hover:bg-blue-50 transition-all duration-300"
// >
//   TaleHaven
// </Link>

//             {/* Search Bar */}
//             <div className="hidden md:flex items-center bg-white rounded-lg px-6 py-2 shadow-inner">
//               <Search className="text-black" size={25} />
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 className="ml-2 bg-transparent outline-none text-sm"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={handleSearch}
//               />
//             </div>

//             {/* Desktop Nav Links */}
//             <div className="hidden md:flex space-x-2 text-white items-center font text-lg">
//               <Link to="/" className={navLinkClasses}>Home</Link>
//               <Link to="/about" className={navLinkClasses}>About</Link>
//               <Link to="/shop" className={navLinkClasses}>Shop</Link>
//               <Link to="/sell" className={navLinkClasses}>Sell</Link>
//               <Link to="/blog" className={navLinkClasses}>Blog</Link>
//               <Link to="/reviews" className={navLinkClasses}>Reviews</Link>
//               <Link to="/contact" className={navLinkClasses}>Contact</Link>
//               <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
//             </div>

//             {/* Cart and User Section */}
//             <div className="hidden md:flex items-center space-x-4">
//               <button onClick={handleCartClick} className="relative">
//                 <ShoppingCart size={26} className="text-gray-800 hover:text-blue-600" />
//                 {cartItems > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartItems}</span>
//                 )}
//               </button>

//               {loggedInUser ? (
//                 <div className="flex items-center space-x-3">
//                   <User className="text-gray-700" size={28} />
//                   <span className="font-semibold">{loggedInUser}</span>
//                   <button
//                     onClick={handleLogout}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="flex space-x-3">
//                   <Link
//                     to="/login"
//                     className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-gray-700"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <div className="md:hidden bg-white border-t border-gray-200 shadow-md py-4">
//               <div className="flex flex-col items-center space-y-4">
//                 <Link to="/" className="hover:text-blue-600">Home</Link>
//                 <Link to="/about" className="hover:text-blue-600">About</Link>
//                 <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//                 <Link to="/sell" className="hover:text-blue-600">Sell</Link>
//                 <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//                 <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
//                 <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//                 <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>

//                 <button onClick={handleCartClick} className="hover:text-blue-600 flex items-center gap-2">
//                   <ShoppingCart size={30} />
//                   Cart ({cartItems})
//                 </button>

//                 {loggedInUser ? (
//                   <div className="flex flex-col items-center gap-2">
//                     <User size={30} />
//                     <span>{loggedInUser}</span>
//                     <button
//                       onClick={handleLogout}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/signup"
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                     >
//                       Sign Up
//                     </Link>
//                   </>
//                 )}

//                 <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-11/12 shadow-inner">
//                   <Search className="text-gray-500" size={20} />
//                   <input
//                     type="text"
//                     placeholder="Search books..."
//                     className="ml-2 bg-transparent outline-none text-sm w-full"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyDown={handleSearch}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </header>
//       )}
//       <ToastContainer />
//     </>
//   );
// };

// export default Header;











// import React, { useState, useEffect } from "react";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';
// import { motion, AnimatePresence } from "framer-motion";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [cartItems, setCartItems] = useState(0);
//   const [showHeader, setShowHeader] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem('loggedInUser');
//     setLoggedInUser(user);

//     const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(cart.length);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       if (currentScrollY < 100) {
//         // At top of page, always show header
//         setShowHeader(true);
//       } else if (currentScrollY > lastScrollY) {
//         // Scrolling down
//         setShowHeader(false);
//       } else {
//         // Scrolling up
//         setShowHeader(true);
//       }
      
//       setLastScrollY(currentScrollY);
//     };

//     const handleMouseMove = (e) => {
//       if (e.clientY <= 50) {
//         setShowHeader(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [lastScrollY]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setTimeout(() => {
//       navigate('/login');
//     }, 1000);
//   };

//   const handleSearch = (e) => {
//     if (e.key === "Enter") {
//       navigate(`/shop?search=${searchQuery}`);
//     }
//   };

//   const handleCartClick = () => {
//     if (loggedInUser) {
//       navigate("/cart");
//     } else {
//       handleError("Please login first to access your cart");
//       navigate("/login");
//     }
//   };

//   const navLinkClasses =
//     "relative px-2 py-1 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

//   return (
//     <>
//       <AnimatePresence>
//         {showHeader && (
//           <motion.header
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             exit={{ y: -100 }}
//             transition={{ type: "spring", damping: 20, stiffness: 300 }}
//             className="fixed top-0 left-0 right-0 bg-neutral-950 shadow-md z-50"
//           >
//             <div className="container mx-auto p-4 flex justify-between items-center">
//               {/* Logo */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link 
//                   to="/" 
//                   className="text-2xl font-bold text-blue-600 bg-white border-1 border-blue-400 rounded-full px-4 py-2 shadow-md hover:bg-blue-50 transition-all duration-300"
//                 >
//                   TaleHaven
//                 </Link>
//               </motion.div>

//               {/* Search Bar */}
//               <motion.div 
//                 className="hidden md:flex items-center bg-white rounded-lg px-6 py-2 shadow-inner"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Search className="text-black" size={25} />
//                 <input
//                   type="text"
//                   placeholder="Search books..."
//                   className="ml-2 bg-transparent outline-none text-sm"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyDown={handleSearch}
//                 />
//               </motion.div>

//               {/* Desktop Nav Links */}
//               <motion.div 
//                 className="hidden md:flex space-x-2 text-white items-center font text-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <Link to="/" className={navLinkClasses}>Home</Link>
//                 <Link to="/about" className={navLinkClasses}>About</Link>
//                 <Link to="/shop" className={navLinkClasses}>Shop</Link>
//                 <Link to="/sell" className={navLinkClasses}>Sell</Link>
//                 <Link to="/blog" className={navLinkClasses}>Blog</Link>
//                 <Link to="/reviews" className={navLinkClasses}>Reviews</Link>
//                 <Link to="/contact" className={navLinkClasses}>Contact</Link>
//                 <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
//               </motion.div>

//               {/* Cart and User Section */}
//               <motion.div 
//                 className="hidden md:flex items-center space-x-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <motion.button 
//                   onClick={handleCartClick} 
//                   className="relative"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <ShoppingCart size={26} className="text-gray-800 hover:text-blue-600" />
//                   {cartItems > 0 && (
//                     <motion.span 
//                       className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring" }}
//                     >
//                       {cartItems}
//                     </motion.span>
//                   )}
//                 </motion.button>

//                 {loggedInUser ? (
//                   <motion.div 
//                     className="flex items-center space-x-3"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <User className="text-gray-700" size={28} />
//                     <span className="font-semibold">{loggedInUser}</span>
//                     <motion.button
//                       onClick={handleLogout}
//                       className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Logout
//                     </motion.button>
//                   </motion.div>
//                 ) : (
//                   <motion.div 
//                     className="flex space-x-3"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Link
//                         to="/login"
//                         className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-700"
//                       >
//                         Login
//                       </Link>
//                     </motion.div>
//                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <Link
//                         to="/signup"
//                         className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-green-700"
//                       >
//                         Sign Up
//                       </Link>
//                     </motion.div>
//                   </motion.div>
//                 )}
//               </motion.div>

//               {/* Mobile Menu Button */}
//               <motion.button
//                 className="md:hidden text-gray-700"
//                 onClick={() => setIsOpen(!isOpen)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: 'auto', opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
//                 >
//                   <div className="flex flex-col items-center space-y-4 p-4">
//                     <Link to="/" className="hover:text-blue-600">Home</Link>
//                     <Link to="/about" className="hover:text-blue-600">About</Link>
//                     <Link to="/shop" className="hover:text-blue-600">Shop</Link>
//                     <Link to="/sell" className="hover:text-blue-600">Sell</Link>
//                     <Link to="/blog" className="hover:text-blue-600">Blog</Link>
//                     <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
//                     <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//                     <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>

//                     <button onClick={handleCartClick} className="hover:text-blue-600 flex items-center gap-2">
//                       <ShoppingCart size={30} />
//                       Cart ({cartItems})
//                     </button>

//                     {loggedInUser ? (
//                       <div className="flex flex-col items-center gap-2">
//                         <User size={30} />
//                         <span>{loggedInUser}</span>
//                         <button
//                           onClick={handleLogout}
//                           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
//                         >
//                           Logout
//                         </button>
//                       </div>
//                     ) : (
//                       <>
//                         <Link
//                           to="/login"
//                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                         >
//                           Login
//                         </Link>
//                         <Link
//                           to="/signup"
//                           className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                         >
//                           Sign Up
//                         </Link>
//                       </>
//                     )}

//                     <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-11/12 shadow-inner">
//                       <Search className="text-gray-500" size={20} />
//                       <input
//                         type="text"
//                         placeholder="Search books..."
//                         className="ml-2 bg-transparent outline-none text-sm w-full"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onKeyDown={handleSearch}
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.header>
//         )}
//       </AnimatePresence>
//       <ToastContainer />
//     </>
//   );
// };

// export default Header;











import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { motion, AnimatePresence } from "framer-motion";
import StarBorder from './StarBorder';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loggedInUser, setLoggedInUser] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user);

    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(cart.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  const handleCartClick = () => {
    if (loggedInUser) {
      navigate("/cart");
    } else {
      handleError("Please login first to access your cart");
      navigate("/login");
    }
  };

  const navLinkClasses =
    "relative px-2 py-1 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300";

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 bg-neutral-700 shadow-md z-50"
          >
            <div className="container mx-auto p-4 flex justify-between items-center">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StarBorder color="red" speed="5s">
                  <Link 
                    to="/" 
                    className="text-2xl font-bold text-red-600 bg- border-2 border-blue-400 rounded-full px-1 py-0 shadow-md hover:bg-yellow-50 transition-all duration-300"
                  >
                    TaleHaven
                  </Link>
                </StarBorder>
              </motion.div>

              {/* Search Bar */}
              <motion.div 
  className="hidden md:flex items-center bg-white rounded-[19px] px-6 py-2 shadow-inner"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>


                <Search className="text-black" size={25} />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="ml-2 bg-transparent outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </motion.div>

              {/* Desktop Nav Links */}
              <motion.div 
                className="hidden md:flex space-x-2 text-white items-center font text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/" className={navLinkClasses}>Home</Link>
                <Link to="/about" className={navLinkClasses}>About</Link>
                <Link to="/shop" className={navLinkClasses}>Shop</Link>
                <Link to="/sell" className={navLinkClasses}>Sell</Link>
                <Link to="/blog" className={navLinkClasses}>Blog</Link>
                <Link to="/reviews" className={navLinkClasses}>Reviews</Link>
                <Link to="/contact" className={navLinkClasses}>Contact</Link>
                <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
              </motion.div>

              {/* Cart and User Section */}
              <motion.div 
                className="hidden md:flex items-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  onClick={handleCartClick} 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <StarBorder color="yellow" speed="4s">
                    <ShoppingCart size={26} className="text-white hover:text-red-600" />
                  </StarBorder>
                  {cartItems > 0 && (
                    <motion.span 
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 2 }}
                      transition={{ type: "spring" }}
                    >
                      {cartItems}
                    </motion.span>
                  )}
                </motion.button>

                {loggedInUser ? (
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <User className="text-gray-200" size={28} />
                    <span className="font-semibold">{loggedInUser}</span>
                    <StarBorder color="red" speed="4s">
                      <motion.button
                        onClick={handleLogout}
                        className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Logout
                      </motion.button>
                    </StarBorder>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex space-x-3"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 3 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StarBorder color="yellow" speed="4s">
                      <Link
                        to="/login"
                        className="px-4 py-1 bg-red-600 text-white rounded-[30px] hover:bg-yellow-800"
                      >Login
                      </Link>
                      </StarBorder>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <StarBorder color="yellow" speed="4s">

                      <Link
                        to="/signup"
                        className="px-4 py-1 bg-gray-600 text-white rounded-[30px] hover:bg-sky-700"
                      >Sign Up
                      </Link>

                        
                      </StarBorder>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
                >
                  <div className="flex flex-col items-center space-y-4 p-4">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/shop" className="hover:text-blue-600">Shop</Link>
                    <Link to="/sell" className="hover:text-blue-600">Sell</Link>
                    <Link to="/blog" className="hover:text-blue-600">Blog</Link>
                    <Link to="/reviews" className="hover:text-blue-600">Reviews</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                    <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>

                    <button onClick={handleCartClick} className="hover:text-blue-300 flex items-center gap-4">
                      <ShoppingCart size={40} />
                      Cart ({cartItems})
                    </button>

                    {loggedInUser ? (
                      <div className="flex flex-col items-center gap-2">
                        <User size={30} />
                        <span>{loggedInUser}</span>
                        <StarBorder color="white" speed="4s">
                          <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-200"
                          >
                            Logout
                          </button>
                        </StarBorder>
                      </div>
                    ) : (
                      <>
                        <StarBorder color="blue" speed="3s">
                          <Link
                            to="/login"
                            className="px-4 py-2 bg-blue-200 text-white rounded-lg hover:bg-blue-50"
                          >
                            Login
                          </Link>
                        </StarBorder>
                        <StarBorder color="green" speed="3s">
                          <Link
                            to="/signup"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            Sign Up
                          </Link>
                        </StarBorder>
                      </>
                    )}

                    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-11/12 shadow-inner">
                      <Search className="text-gray-500" size={20} />
                      <input
                        type="text"
                        placeholder="Search books..."
                        className="ml-2 bg-transparent outline-none text-sm w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
      <ToastContainer />
    </>
  );
};


export default Header;
