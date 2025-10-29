import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp () {
 const [weatherInfo, setWeatherInfo] = useState({
 city: "Jaipur",  
 feelslike: 19.94,
 temp: 19.62,
 tempMin: 19.62,
 tempMax: 19.62,
 humidity: 88,
 weather: "mist",
 });
 
 let updateInfo = (newInfo) => { 
   setWeatherInfo(newInfo);
 }

    return (
      <div className="WeatherApp" style={{ textAlign: "center" }}>
         <h2> Weather App by Sahvag </h2>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo} />
     </div>
    );
}