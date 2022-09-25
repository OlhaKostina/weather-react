import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
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
            Humidity <br /> <span id="humidity">45</span>%
          </div>
          <div className="col-4">
            Wind <br /> <span id="wind">3</span> km/h
          </div>
        </div>
      </div>
      <div className="col-4" id="">
        <div className="card">
          <div className="current-city">
            <h1 className="current-city"> Kharkiv </h1>
            <h3 className="current-date">28/08/2022</h3>
            <h1 className="current-time">12:54</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
