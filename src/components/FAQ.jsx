import React, { useState } from "react";

const tabs = [
  { id: "travel", label: "Travel & Accommodations" },
  { id: "things", label: "Things to Do" },
  { id: "faq", label: "FAQs" },
];

const tabContent = {
  travel: (
    <div>
      <h3>Nearest Airport</h3>
      <p>Fly into XYZ International. Shuttles will be available.</p>
      <h3>Hotel Info</h3>
      <p>We have a block at the Cozy Inn — mention our names for a discount.</p>
    </div>
  ),
  things: (
    <div>
      <h3>Explore the Area</h3>
      <p>Great restaurants, wine tastings, and hikes nearby!</p>
    </div>
  ),
  faq: (
    <div>
      <h3>What should I wear?</h3>
      <p>Semi-formal, outdoor attire is best.</p>
      <h3>Can I bring a plus one?</h3>
      <p>Yes, if your invite includes one — RSVP with their name.</p>
      <h3>Will there be food and drinks?</h3>
      <p>You bet! Come hungry and ready to toast.</p>
    </div>
  ),
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("travel");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <h1 className="mb-2">You’ve got questions?</h1>
        <h2 >We’ve got answers.</h2>
      </div>

      <div className="flex justify-start gap-4 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium ${
              activeTab === tab.id
                ? "text-white bg-black rounded-t-lg"
                : "text-black"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-black text-white p-6 rounded-b-2xl rounded-tr-2xl">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
