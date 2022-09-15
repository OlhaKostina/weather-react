import React from "react";

import "./FiveDaysForecast.css";

export default function FiveDaysForecast() {
  return (
    <div className="row five-days-forecast">
      <div className="col-4">
        <div className="row">
          <div className="col-6">
            <img src="" alt="" className="current-weather-img" />
          </div>
          <div className="col-6 day-weather">
            <ul className="weather-of-the-day">
              <li className="today">TODAY</li>
              <li>
                {" "}
                <span className="current-temperature"></span>
                <span className="units">15 ℃ </span>
              </li>
              <li>
                {" "}
                <span className="description"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="row forecast"></div>
      </div>
    </div>
  );
}
