import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { theamcontext } from "../context/index";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
function Navbar() {
  const { theme, toggleTheme } = useContext(theamcontext);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "60px",
        backgroundColor: theme === "light" ? "#ADD8E6" : "black",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: theme === "light" ? "black" : "white",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            style={{
              textDecoration: "none",
              color: theme === "light" ? "black" : "white",
            }}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            style={{
              textDecoration: "none",
              color: theme === "light" ? "black" : "white",
            }}
          >
            Setting
          </NavLink>
        </li>
      </ul>
      {theme === "light" ? (
        <button
          onClick={toggleTheme}
          style={{ padding: "8px 16px", borderRadius: "5px", border: "none" }}
        >
          <CiDark style={{ fontSize: "20px", color: "black" }} />
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          style={{ padding: "8px 16px", borderRadius: "5px", border: "none" }}
        >
          <CiLight style={{ fontSize: "20px", color: "black" }} />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
