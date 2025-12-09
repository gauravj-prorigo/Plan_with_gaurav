import "./Home.css";
import UserInput from "../sub-components/UserInput";
import WeatherDetails from "../sub-components/WeatherDetails";
import { useContext, useEffect } from "react";
import { WeatherAppContext } from "../context/Weathercontext";
import { RiseLoader } from "react-spinners";

import { ThemeContext } from "../context/Themecontext";
import { useWeather } from "../Hooks/useWeather";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  // const {  } = useContext(WeatherAppContext);
  const {
    data,
    city,
    setdata,
    fetchweather,
    setcity,
    loading,
    fetchcurrentweather,
  } = useWeather();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function success(postion) {
      const lat = postion.coords.latitude;
      const lon = postion.coords.longitude;
      fetchcurrentweather(lat, lon);
    },
    function err(){
      console.log(err.message)
    }
  );
  }, []);
  return (
    <div className="main-wrapper">
      <h1
        className={
          theme === "light"
            ? "heading"
            : theme === "dark"
            ? "headingdark"
            : "headingsunny"
        }
      >
        Weather App
      </h1>
      <div className="main">
        <UserInput city={city} setcity={setcity} fetchweather={fetchweather} />
        {loading ? <RiseLoader /> : <WeatherDetails data={data} />}
      </div>
    </div>
  );
};

export default Home;
