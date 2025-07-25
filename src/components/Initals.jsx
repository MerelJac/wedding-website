import React from "react";
import FlipClock from "./FlipClock";
import logo from "../assets/logo-w.png"
function Initials() {
  return (
    <div className="absolute">
      <img src={logo} className="max-w-md"></img>
    </div>
  );
}

export default Initials;
