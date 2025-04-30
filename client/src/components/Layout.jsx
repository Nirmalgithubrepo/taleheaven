import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
