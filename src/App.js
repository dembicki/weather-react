import React from "react";
import "./App.css";

import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather.component";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);
  };

  state = {};
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
