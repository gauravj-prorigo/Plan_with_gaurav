import React, { memo } from "react";
import "./WeatherDetails.css";
import { WiDayCloudyWindy, WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";
const WeatherDetails = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  console.log("weather is rendring");
  return (
    <div
      className={
        theme === "light"
          ? "detail-wrapper"
          : theme === "dark"
          ? "detail-wrapper dark"
          : "detail-wrapper sunny"
      }
    >
      <div className={"cards"}>
        <div className="card card-wind">
          <h1 data-testid="windicon">
            <WiDayCloudyWindy className="icon" />
          </h1>
          <h3 data-testid="wind">Wind</h3>
          <p data-testid="wind-speed">Speed: {data?.current?.wind_kph} kph </p>
          <p>Direction: {data?.current?.wind_dir}</p>
          <p>Degree: {data?.current?.wind_degree}^</p>
          <p>Gust: {data?.current?.gust_kph} kph</p>
        </div>

        <div className="card card-temp">
          <h1 data-testid="tempicon">
            <FaTemperatureLow className="icon temp" />
          </h1>
          <h2 data-testid="location">
            {data?.location?.name} {data?.location?.region}
          </h2>
          <h3>{data?.current?.temp_c}C</h3>
          <p>{data?.current?.condition?.text}</p>
          <p>Feels Like: {data?.current?.feelslike_c}C</p>
          <p>UV Index: {data?.current?.uv}</p>
        </div>

        <div className="card card-humidity">
          <h1 data-testid="Humidityicon">
            <WiHumidity className="icon" />
          </h1>
          <h3 data-testid="Humidity">Humidity & More</h3>
          <p>Humidity: {data?.current?.humidity}%</p>
          <p>Pressure: {data?.current?.pressure_mb} mb</p>
          <p>Precipitation: {data?.current?.precip_mm} mm</p>
        </div>
      </div>
    </div>
  );
};

export default memo(WeatherDetails);
