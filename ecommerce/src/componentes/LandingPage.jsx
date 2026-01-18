import shoes from "../assets/Air-Jordan-PNG-Free-File-Download.png";
import "../css/LandingPage.css";
import Log_Sin_model from "../subcomponenets/Log_Sin_model";
import Review from "../subcomponenets/Review";
function LandingPage() {
  return (
    <div className="mains-layout-container">
       <div className="main-layout-container">
      <div className="main-layouts">
        <div className="sub-main">
          <img src={shoes}   className="landing-img"/>
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
    <Review/>
    </div>
   
  );
}

export default LandingPage;
