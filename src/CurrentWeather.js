import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import CityCard from "./CityCard";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "41db31b7bfb54ee46c6a15c5c9d02e0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="row" id="current-weather">
        <div className="col-8" id="search">
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                id="search-line"
                placeholder="Enter your city"
                autofocus="on"
                autocomplete="off"
                onChange={handleCityChange}
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
        </div>
        <div className="col-4">
          <CityCard data={weatherData} />
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
