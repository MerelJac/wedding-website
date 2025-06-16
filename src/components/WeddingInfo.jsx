import React from "react";
import Button from "./Button";

function WeddingInfo() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 max-w-6xl mx-auto p-6 rounded-lg shadow-lg">
      <div>
        <h1 className="text-center">Happily Ever After Party</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-w-full">
        <div className="flex flex-row justify-between items-center min-w-full px-6">
          <div className="flex flex-col text-start">
            <h3>Rodeo Hills Winery</h3>
            <p>Dundee, Oregon</p>
          </div>
          <div className="flex flex-col text-end">
            <p>Saturday August 8, 2026</p>
            <p>5 - 9 PM</p>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center py-4 text-center max-w-2xl">
          <h3 className="text-center max-w-2xl">
            After a small family ceremony on Friday, we’d love for you to join
            us for a celebration!
          </h3>
          <p className="text-center max-w-2xl">
            There’ll be food, drinks, dancing, games, some speeches, our vows,
            and lots of good company.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-10 pt-4">
        <Button text="RSVP" href="#"></Button>
        <Button text="Registry" href="#"></Button>
      </div>
    </div>
  );
}

export default WeddingInfo;
