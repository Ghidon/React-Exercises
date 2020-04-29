import React from "react";
import "./weatherApp.css";

function Day(props) {
  return (
    <div className="container">
      <img
        className="sunIcon"
        src="https://img.icons8.com/dusk/128/000000/sun.png"
      />
      <div className="textDisplay">
        <span>Serbia</span>
        <span className="cityName">Belgrade</span>
        <span>Sunny 19 °C</span>
      </div>
    </div>
  );
}

export default Day;
