import { useState } from "react";
import { createContext} from "react";

export const WeatherAppContext = createContext();

export function WeatherAppProvider({ children }) {
  const [city, setcity] = useState('');
  const [data, setdata] = useState(null);
  async function fetchweather() {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=556769fc1cee4f978b9175318250712&q=${city}&aqi=no`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();
      console.log(data);
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  }
  return <WeatherAppContext.Provider value={{data,city ,setdata,fetchweather,setcity}}>{children}</WeatherAppContext.Provider>;
}
