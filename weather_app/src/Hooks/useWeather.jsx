import { useState } from "react";
import { toast } from "react-toastify";

export function useWeather() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);

  // async function fetchweather() {
  //   setloading(true);
  //   try {
  //     const res = await fetch(
  //     );
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch weather data");
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //     toast.success("Location found successfully")
  //     setdata(data);
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("City not found")
  //   }
  //   setloading(false);
  // }

  async function fetchcurrentweather(url) {
    setloading(true);
    console.log("First");
    try {
      const res = await fetch(url);
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      if (!res.ok) {0
        toast.error("Give Correct City name");
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();
      // console.log(data);

      setdata(data);
      toast.success("Weather featch sucessfully ");
      // console.log("Second");
    } catch (err) {
      console.log(err);
    }
    // } finally {
    //   console.log("third");
    // }
    // console.log("Fourth");
    setloading(false);
    // console.log("Fifth");
  }
  return { city, setcity, data, setdata, loading, fetchcurrentweather };
}
