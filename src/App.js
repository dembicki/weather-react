import React from "react";
import "./App.css";

import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather.component";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
