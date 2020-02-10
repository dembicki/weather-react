import React from "react";
import "./App.css";

import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather.component";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      desctiption: "test",
      error: false
    };
    this.getWeather();
  }

  tempConvert(temp) {
    return Math.floor(temp - 273.15);
  }

  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Gdynia,pl&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.tempConvert(response.main.temp),
      temp_max: this.tempConvert(response.main.temp_max),
      temp_min: this.tempConvert(response.main.temp_min),
      description: response.weather[0].desctiption
    });
  };

  state = {};
  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.desctiption}
        />
      </div>
    );
  }
}

export default App;
