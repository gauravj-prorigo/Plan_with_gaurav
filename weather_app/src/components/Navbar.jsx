import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
       <NavLink to={"/"}><span className="nav-item">Home</span></NavLink> 
       <NavLink to={"/about"}><span className="nav-item">About</span></NavLink> 
        <NavLink to={"/setting"}><span className="nav-item">Setting</span></NavLink> 
      </div>

      <div className="nav-right">
        <button className="theme-btn">Theme</button>
      </div>
    </nav>
  );
}

export default Navbar
