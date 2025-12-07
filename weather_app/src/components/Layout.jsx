import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
