import React, { useState } from "react";

const tabs = [
  { id: "travel", label: "Travel & Accommodations" },
  { id: "things", label: "Things to Do" },
  { id: "faq", label: "FAQs" },
];

const tabContent = {
  travel: (
    <div>
      <h3>Airport</h3>
      <p>Fly into PDX </p>
      <p>There is public transport or Uber/Lyfts into the city.</p>
      <h3 className="pt-4">Venue</h3>
      <p>Rodeo Hills Winery is about a 40 minute drive of Portland.</p>
      <h3 className="pt-4">Lodging</h3>
      <p>Feel free to stay wherever you want, but the newly weds will be staying in Dundee, OR the weekend of the wedding.</p>
    </div>
  ),
  things: (
    <div>
      <h3>Explore the Area</h3>
      <p>The Pacific Northwest in the summer is beautiful! Since the party is Saturday evening, make your trip worth while by hitting some hikes, lakes, shopping, and most importantly, eating in Portland.</p>
    </div>
  ),
  faq: (
    <div>
      <h3 >What should I wear?</h3>
      <p>Think swanky winery! Wear suitable shoes for dancing and being both indoors and outdoors.</p>
      <h3 className="pt-4">Can I bring a plus one?</h3>
      <p>Short answer - nope! Whoever's name is on the invite is who we want with us! Thank you for understanding.</p>
      <h3 className="pt-4">Will there be food and drinks?</h3>
      <p>You bet! Come hungry and ready to toast.</p>
    </div>
  ),
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("travel");

  return (
    <div className="max-w-6xl mx-auto py-36">

      <div className="flex justify-start gap-4 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium ${
              activeTab === tab.id
                ? "text-black bg-white rounded-t-lg"
                : "text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white text-black p-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}
