import shoes from "../assets/Air-Jordan-PNG-Free-File-Download.png";
import "../css/LandingPage.css";
function LandingPage() {
  return (
    <div className="main-layout-container">
      <div className="main-layouts">
        <div className="sub-main">
          <img src={shoes} style={{ width: "100%", height: "300px" }} />
        </div>
        <div className="sub-main2">
          <p>
            "Step into comfort and style with our premium shoes, crafted for
            durability, perfect fit, and all-day confidence where performance
            meets modern design"
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
