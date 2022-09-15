import React from "react";

import "./FiveDaysForecast.css";

export default function FiveDaysForecast() {
  return (
    <div className="row" id="five-days-forecast">
      <div className="col-4">
        <div className="row">
          <div className="col-6">
            <img src="" alt="" className="current-weather-img" />
          </div>
          <div className="col-6" id="day-weather">
            <ul id="weather-of-the-day">
              <li className="today">TODAY</li>
              <li>
                {" "}
                <span id="current-temperature"></span>
                <span id="units">15 ℃ </span>
              </li>
              <li>
                {" "}
                <span id="description"></span>
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
}
