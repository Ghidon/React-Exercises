import React from "react";

function Locations(props) {
  return (
    <li className="locations">
      <img className="location-image" src={props.imageUrl} alt={props.name} />
      <a href={props.maps} target="_blank">
        {props.name}
      </a>
    </li>
  );
}

export default Locations;
