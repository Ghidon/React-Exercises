import React from "react";
import "./weatherApp.css";

function DaysHolder() {
  return (
    <div>
      <WeekDay
        day={"mo"}
        date={"16.02"}
        icon={<img src="https://img.icons8.com/dusk/40/000000/sun.png" />}
        weather={"Sunny"}
        temperature={"19 °C"}
        svgwind={<img src="https://img.icons8.com/dusk/15/000000/wind.png" />}
        wind={"4mph"}
        svghumidity={
          <img src="https://img.icons8.com/dusk/15/000000/hygrometer.png" />
        }
        humidity={"63%"}
        svgrainChance={
          <img src="https://img.icons8.com/dusk/15/000000/umbrella.png" />
        }
        rainChance={"14%"}
      ></WeekDay>
      <WeekDay
        day={"tu"}
        date={"17.02"}
        icon={<img src="https://img.icons8.com/dusk/40/000000/rain.png" />}
        weather={"Rainy"}
        temperature={"14 °C"}
        svgwind={<img src="https://img.icons8.com/dusk/15/000000/wind.png" />}
        wind={"4mph"}
        svghumidity={
          <img src="https://img.icons8.com/dusk/15/000000/hygrometer.png" />
        }
        humidity={"63%"}
        svgrainChance={
          <img src="https://img.icons8.com/dusk/15/000000/umbrella.png" />
        }
        rainChance={"14%"}
      ></WeekDay>
      <WeekDay
        day={"we"}
        date={"18.02"}
        icon={
          <img src="https://img.icons8.com/dusk/40/000000/partly-cloudy-day.png" />
        }
        weather={"Cloudy"}
        temperature={"17 °C"}
        svgwind={<img src="https://img.icons8.com/dusk/15/000000/wind.png" />}
        wind={"4mph"}
        svghumidity={
          <img src="https://img.icons8.com/dusk/15/000000/hygrometer.png" />
        }
        humidity={"63%"}
        svgrainChance={
          <img src="https://img.icons8.com/dusk/15/000000/umbrella.png" />
        }
        rainChance={"14%"}
      ></WeekDay>
    </div>
  );
}

function WeekDay(props) {
  const {
    day,
    date,
    icon,
    weather,
    temperature,
    wind,
    humidity,
    rainChance,
    svgwind,
    svghumidity,
    svgrainChance,
  } = props;
  return (
    <div className="week-holder">
      <div className="weekLeft">
        <span className="itemRight">{day}</span>
        <span className="itemRight">{date}</span>
      </div>
      <div>{icon}</div>
      <div className="weekRight">
        <div className="degrees">
          <span className="weather">{weather}</span>
          <span>{temperature}</span>
        </div>
        <div className="stats">
          <span className="stats-align">{svgwind}</span>
          <span className="stats-align">{svghumidity}</span>
          <span className="stats-align">{svgrainChance}</span>
        </div>
        <div className="stats">
          <span className="stats-align">{wind}</span>
          <span className="stats-align">{humidity}</span>
          <span className="stats-align">{rainChance}</span>
        </div>
      </div>
    </div>
  );
}

export default DaysHolder;
