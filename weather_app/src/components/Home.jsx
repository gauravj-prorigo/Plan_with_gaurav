import React from 'react'
import './Home.css'
import UserInput from '../sub-components/UserInput'
import WeatherDetails from '../sub-components/WeatherDetails'
import { useContext } from 'react'
import { use } from 'react'
import { WeatherAppContext } from '../context/Weathercontext'
import { RiseLoader } from "react-spinners";

import { ThemeContext } from "../context/Themecontext";
const Home = () => {
    const { theme} = useContext(ThemeContext);
    const {loading} = useContext(WeatherAppContext)
    const {data,city ,setdata,fetchweather,setcity} = useContext(WeatherAppContext)
    console.log(WeatherAppContext)
  return (
    <div className='main-wrapper'>
     <h1 className={
        theme === "light"
          ? "heading"
          : theme === "dark"
          ? "headingdark"
          : "headingsunny"
      }>Weather App</h1>
     <div className="main">
        <UserInput city ={city} setcity={setcity} fetchweather ={fetchweather}/>
       {loading ?(<RiseLoader/>):(<WeatherDetails data = {data}/>)} 
     </div>
    </div>
  )
}

export default Home
