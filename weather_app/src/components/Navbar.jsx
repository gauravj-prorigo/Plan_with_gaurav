import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/Themecontext";
import { MdLightMode } from "react-icons/md";
const Navbar = () => {
  const { theme, toggletheme, setTheme } = useContext(ThemeContext);
  return (
    <nav
      className={
        theme === "light"
          ? "navbar"
          : theme === "dark"
          ? "navbardark"
          : "navbarsunny"
      }
    >
      <div className="nav-left">
        <NavLink className="nav-item" to={"/"}>
          <span className="nav-item">Home</span>
        </NavLink>
        <NavLink className="nav-item" to={"/about"}>
          <span className="nav-item">About</span>
        </NavLink>
        <NavLink className="nav-item" to={"/setting"}>
          <span className="nav-item">Setting</span>
        </NavLink>
      </div>

      <div className="nav-right">
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sunny">sunny</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
