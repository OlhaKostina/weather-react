import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row" id="current-conditions">
        <div className="col-4">
          Pressure <br /> <span id="pressure">{props.data.pressure}</span> hPa
        </div>
        <div className="col-4">
          Humidity <br /> <span id="humidity">{props.data.humidity}</span>%
        </div>
        <div className="col-4">
          Wind <br /> <span id="wind">{props.data.wind}</span> km/h
        </div>
      </div>
      <div className="row" id="five-days-forecast">
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="current-weather-img"
              />
            </div>
            <div className="col-6" id="day-weather">
              <ul id="weather-of-the-day">
                <li className="today">TODAY</li>
                <WeatherTemperature celsius={props.data.temperature} />
                <li>
                  <span id="description">{props.data.description}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={props.data.coordinates} />
      </div>
    </div>
  );
}
