import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row" id="current-weather">
        <div className="col-8" id="search">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                id="search-line"
                placeholder="Enter your city"
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              id="search-button"
            >
              🔎
            </button>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              id="current-location-button"
            >
              Current location
            </button>
          </form>
          <div className="row" id="current-conditions">
            <div className="col-4">
              UV index <br /> <span id="uvi"> 3.44</span>
            </div>
            <div className="col-4">
              Humidity <br /> <span id="humidity">{weatherData.humidity}</span>%
            </div>
            <div className="col-4">
              Wind <br /> <span id="wind">{weatherData.wind}</span> km/h
            </div>
          </div>
        </div>
        <div className="col-4" id="">
          <div className="card">
            <div className="current-city">
              <h1 className="current-city"> {weatherData.city} </h1>
              <div>
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </div>
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
