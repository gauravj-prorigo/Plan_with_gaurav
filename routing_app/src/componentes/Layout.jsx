import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { theamcontext } from "../context/index";
function Layout() {
  const { theme } = useContext(theamcontext);
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "light" ? "white" : "#808080",
          paddingTop: "60px",
          overflow: "hidden",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
