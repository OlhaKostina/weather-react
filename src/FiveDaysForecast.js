import React, { useState } from "react";
import axios from "axios";
import "./FiveDaysForecast.css";

export default function FiveDaysForecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row" id="five-days-forecast">
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="current-weather-img"
              />
            </div>
            <div className="col-6" id="day-weather">
              <ul id="weather-of-the-day">
                <li className="today">TODAY</li>
                <li>
                  {" "}
                  <span id="current-temperature"></span>
                  <span id="units">
                    {Math.round(weatherData.temperature)}℃{" "}
                  </span>
                </li>
                <li>
                  {" "}
                  <span id="description">{weatherData.description}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row" id="forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "41db31b7bfb54ee46c6a15c5c9d02e0d";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
