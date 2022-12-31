import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div id="weather-of-the-day-forecast">
      <div class="today">{day()}</div>
      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        width="42"
      />
      <div>
        <span id="max-temperature">{maxTemperature()}</span>
        <span id="min-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
