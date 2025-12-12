import React, { lazy, Suspense, useContext } from "react";
const Navbar = lazy(() => import("./Navbar"));
import { Outlet } from "react-router-dom";

import { ThemeContext } from "../context/Themecontext";
import "./Layout.css"
import { HiH1 } from "react-icons/hi2";
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
        <Suspense fallback={<h1 style={{alignContent:'center'}}>Loading....</h1>}>
           <Outlet />
        </Suspense>
       
      </main>
      
    </div>
  );
};

export default Layout;
