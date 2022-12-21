import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <li>
        <span id="current-temperature">{Math.round(props.celsius)}</span>
        <span id="unit">
          ℃ |
          <a href="/" onClick={convertToFahrenheit}>
            ℉
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li>
        <span id="current-temperature">{Math.round(fahrenheit())}</span>
        <span id="unit">
          <a href="/" onClick={convertToCelsius}>
            ℃
          </a>
          | ℉
        </span>
      </li>
    );
  }
}
