import React from "react";

export default function WeatherForecast() {
  return (
    <div className="col-8">
      <div className="row" id="forecast">
        <div class="col-3">
          <div id="weather-of-the-day-forecast">
            <div class="today">Mnd</div>
            <img
              src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
              alt=""
              width="42"
            />
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
