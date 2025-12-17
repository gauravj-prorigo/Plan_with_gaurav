import React, { lazy, Suspense, useContext } from "react";
const Navbar = lazy(() => import("./Navbar"));
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBounadry";
import { ThemeContext } from "../context/Themecontext";
import "./Layout.css";
import SuspenseFallnback from "../suspense/SuspenseFallnback";
// import { ErrorBoundary } from "react-error-boundary";
const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light"
          ? "layout-container"
          : theme === "dark"
          ? "layout-container-dark"
          : "layout-container-sunny"
      }
    >
      <Navbar />

      <main className="layout-content">
        <ErrorBoundary>
          <Suspense fallback={<SuspenseFallnback />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
