import React from "react";

const Weather = props => {
  return (
    <div className="contianer">
      <div className="cards">
        <h1>
          {props.city},{props.country}
        </h1>
        <h5 className="py-4">
          <i className="wi wi-day-sunny display-1"></i>
        </h5>
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>

        {minMaxTemp(props.temp_min, props.temp_max)}

        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}

export default Weather;
