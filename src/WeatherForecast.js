import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "41db31b7bfb54ee46c6a15c5c9d02e0d";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="col-8">
      <div className="row" id="forecast">
        <div class="col-3">
          <div id="weather-of-the-day-forecast">
            <div class="today">Mnd</div>
            <img src={props.img} alt={props.desc} width="42" />
            <div>
              <span id="max-temperature">19°</span>
              <span id="min-temperature">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
