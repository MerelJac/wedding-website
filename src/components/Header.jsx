import React from "react";
import FlipClock from "./FlipClock";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center mb-[50vh] pt-[50vh]">
      <h1 className="text-white">Matthew & Merel</h1>
      <p className="text-white pb-12">happily ever after party</p>
      <div data-aos="fade-up">
        <FlipClock></FlipClock>
      </div>
    </div>
  );
}

export default Header;
