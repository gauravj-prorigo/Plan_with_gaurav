import { useState } from "react";
import { createContext} from "react";

export const WeatherAppContext = createContext();

export function WeatherAppProvider({ children }) {

  const [city, setcity] = useState('');
  const [data, setdata] = useState(null);
                                                                                                      
    const [loading, setloading] = useState(false);
  async function fetchweather() {
    setloading(true)
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
    setloading(false)
  }
  return <WeatherAppContext.Provider value={{data,city ,setdata,fetchweather,setcity,loading}}>{children}</WeatherAppContext.Provider>;
}
