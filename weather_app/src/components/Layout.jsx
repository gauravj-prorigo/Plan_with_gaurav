
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";
import "./Layout.css"
const Layout = () => {
    const { theme} = useContext(ThemeContext);
  return (
    <div className={theme === "light"
          ? "layout-container"
          : theme === "dark"
          ? "layout-container-dark"
          : "layout-container-sunny"}>
      <Navbar />

      <main className="layout-content">
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;
