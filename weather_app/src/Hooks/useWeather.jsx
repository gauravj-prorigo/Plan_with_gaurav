import { useState } from "react";
import { toast } from "react-toastify";

export function useWeather() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  async function fetchweather() {
    setloading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=556769fc1cee4f978b9175318250712&q=${city}&aqi=no`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();
      console.log(data);
      toast.success("Location found successfully")
      setdata(data);
    } catch (err) {
      console.log(err);
      toast.error("City not found")
    }
    setloading(false);
  }

  async function fetchcurrentweather(lat,lon) {
    setloading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=556769fc1cee4f978b9175318250712&q=${lat} ${lon}&aqi=no`
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
    setloading(false);
  }
  return {city, setcity, data, setdata, loading, fetchweather , fetchcurrentweather};
}
