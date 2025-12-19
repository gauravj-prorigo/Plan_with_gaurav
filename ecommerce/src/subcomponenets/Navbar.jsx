import { Link, NavLink } from "react-router"
import "../css/Navbar.css"
import logo from "../assets/idbmxy9XVT_logos.png"
import { FaCartArrowDown } from "react-icons/fa";
function Navbar(){
    return(
        <div className="nav-main">
           <Link to={'/'}><img src={logo} alt="logo-site" style={{width:'100px',height:'20px'}}/></Link>
              <NavLink to={"/about"}className={"Navlink"}>About</NavLink>
                <NavLink to={"/contact"} className={"Navlink"}>Contact</NavLink>
                  <NavLink to={"/ourteam"} className={"Navlink"}>Products</NavLink>
                  <div className="card-nav">
                    <NavLink to={"/"}><FaCartArrowDown style={{fontSize:'25px',color:'black'}}/></NavLink>
                  </div>
        </div>
    )
}

export default Navbar