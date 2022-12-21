import React from "react";
import CurrentWeather from "./CurrentWeather";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <CurrentWeather defaultCity="Kharkiv" />
    </div>
  );
}
