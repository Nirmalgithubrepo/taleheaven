

import { Navigate,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import SellYourBook from "./pages/SellYourBook";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Dashbord from "./pages/dashbord";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from 'react';
import Cart from "./pages/Cart"; // 👈 Import the Cart page

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }



  return (
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sell" element={<SellYourBook />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/cart" element={<Cart />} /> {/* 👈 New Cart Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

    
    
  );
}

export default App;


