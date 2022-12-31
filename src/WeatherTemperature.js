import React from "react";

export default function WeatherTemperature(props) {
  return (
    <li>
      <span id="current-temperature">{Math.round(props.celsius)}</span>
      <span id="unit">℃</span>
    </li>
  );
}
