import { Link, NavLink } from "react-router";
import "../css/Navbar.css";
import logo from "../assets/idbmxy9XVT_logos.png";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Modal from "./Modal";
import Log_Sin_model from "./Log_Sin_model";
function Navbar() {
  const [open ,Setopen] =  useState(false)
  const {item} = useContext(ProductContext)

  
  return (
    <div className="nav-main">
      <div className="nav-main2">
        <Link to={"/"}>
          <img
            src={logo}
            className="nav-img"
            alt="logo-site"

          />
        </Link>
        <NavLink to={"/about"} className={"Navlink"}>
          About
        </NavLink>
        <NavLink to={"/contact"} className={"Navlink"}>
          Contact
        </NavLink>
        <NavLink to={"/ourteam"} className={"Navlink"}>
          Products
        </NavLink>
        <NavLink to={"/cart"}  className={"Navlink"}>
          <FaCartArrowDown   className="nav-icon"/>
          <span className="nav-span">{item.length}</span>
        </NavLink>
      </div>
      <div onClick={()=> Setopen(!open)}>
        singup
      </div>
      {open ? (<Modal onClose={() => Setopen(!open)}>
        <Log_Sin_model/>
      </Modal>):null}
    </div>
  );
}

export default Navbar;
