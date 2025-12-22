import { Outlet } from "react-router";
import Navbar from "../subcomponenets/Navbar";
import "../css/Layout.css";
import Footer from "../subcomponenets/Footer";
function Layout() {
  return (
    <div className="main-layout">
      <div>
        <Navbar />
        <div >
              <Outlet />
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default Layout;
