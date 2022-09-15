import React from "react";
import CurrentWeather from "./CurrentWeather";
import FiveDaysForecast from "./FiveDaysForecast";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <CurrentWeather />
      <FiveDaysForecast />
    </div>
  );
}
