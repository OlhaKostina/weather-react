import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <WeatherApp />
        <Footer />
      </div>
    </div>
  );
}
