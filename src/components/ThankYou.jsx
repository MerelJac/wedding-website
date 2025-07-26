

import React from "react";
import headshot from "../assets/headshot.png";

function ThankYou() {
  return (
    <div className="bg-[url('./assets/hands.png')] bg-cover bg-center bg-no-repeat bg-fixed shadow-lg px-10 py-12 min-h-[80vh] flex items-center">
      <img src={headshot} alt="Headshot" className=" object-contain" />

      <div data-aos="fade-left" className="text-start mr-6 min-w-fit">
        <h2 className="text-8xl font-bold text-darkBeige transform rotate-90">Thanks for celebrating with us!</h2>
      </div>
    </div>
  );
}

export default ThankYou;
