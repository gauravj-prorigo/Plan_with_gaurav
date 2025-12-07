import React from 'react'
import './Home.css'
import UserInput from '../sub-components/UserInput'
import WeatherDetails from '../sub-components/WeatherDetails'
import { useContext } from 'react'
import { use } from 'react'
import { WeatherAppContext } from '../context/Weathercontext'

const Home = () => {
    const {data,city ,setdata,fetchweather,setcity} = useContext(WeatherAppContext)
    console.log(WeatherAppContext)
  return (
    <div className='main-wrapper'>
     <h1>Weather App</h1>
     <div className="main">
        <UserInput city ={city} setcity={setcity} fetchweather ={fetchweather}/>
        <WeatherDetails/>
     </div>
    </div>
  )
}

export default Home
