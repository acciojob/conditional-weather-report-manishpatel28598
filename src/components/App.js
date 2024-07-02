
import React from "react";
import {useState, useEffect} from 'react';
import WeatherDisplay from "./WeatherDisplay";
import './../styles/App.css';

const App = () => {

  const [weather, setweather] = useState({temperature: 0, conditions:''})

  useEffect(()=>{

    const weatherData = {temperature:25, conditions:'sunny'}
    setweather(weatherData);
  },[])


  return (
    <div>
        <h1>Weather Report</h1>
        <WeatherDisplay weather = {weather}/>
    </div>
  )
}

export default App
