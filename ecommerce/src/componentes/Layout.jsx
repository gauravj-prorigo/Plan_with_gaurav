import { Outlet } from "react-router";
import Navbar from "../subcomponenets/Navbar";
import "../css/Layout.css";
function Layout() {
  return (
    <div className="main-layout">
      <div>
        <Navbar />
        <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column'}}>
              <Outlet />
        </div>
      
      </div>
    </div>
  );
}

export default Layout;
