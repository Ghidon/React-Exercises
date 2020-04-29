import React from "react";
import { FaBtc } from "react-icons/fa";

function NavBar() {
  return (
    <div className="container">
      <div className="container">
        <span className="item">SERVICES</span>
        <span className="item">WORK</span>
        <span className="item active">THE TEAM</span>
      </div>
      <div className="navIcon">
        <FaBtc></FaBtc>
      </div>
    </div>
  );
}

export default NavBar;
