import "./Home.css";
import UserInput from "../sub-components/UserInput";

import { lazy, Suspense, useContext, useEffect } from "react";
import { RiseLoader } from "react-spinners";
import { ThemeContext } from "../context/Themecontext";
import { useWeather } from "../Hooks/useWeather";
import Skelton from "../skelton/Skelton";
import WeatherDetails from "../sub-components/WeatherDetails";
// const WeatherDetails = lazy(() => import("../sub-components/WeatherDetails"));
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { data, city, setcity, loading, fetchcurrentweather } = useWeather();

  useEffect(() => {
    console.log("pune weather featch");
    navigator.geolocation.getCurrentPosition(
      function success(postion) {
        const lat = postion.coords.latitude;
        const lon = postion.coords.longitude;
        fetchcurrentweather(
          `https://api.weatherapi.com/v1/current.json?key=556769fc1cee4f978b9175318250712&q=${lat} ${lon}&aqi=no`
        );
      },
      function err() {
        console.log(err.message);
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
        <UserInput
          city={city}
          setcity={setcity}
          fetchcurrentweather={fetchcurrentweather}
        />
        {loading ? (
          <Skelton />
        ) : (
          <WeatherDetails data={data} />
        )}
      </div>
    </div>
  );
};

export default Home;
