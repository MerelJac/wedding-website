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
      <p>
        Feel free to stay wherever you want, but the newly weds will be staying
        in Dundee, OR the weekend of the wedding.
      </p>
    </div>
  ),
  things: (
    <div>
      <h3>Explore the Area</h3>
      <p>
        The Pacific Northwest in the summer is beautiful! Since the party is
        Saturday evening, make your trip worthwhile by hitting some hikes,
        lakes, shopping, and most importantly, eating in Portland.
      </p>
    </div>
  ),
  faq: (
    <div>
      <h3>What should I wear?</h3>
      <p>
        Think swanky winery! Wear suitable shoes for dancing and being both
        indoors and outdoors.
      </p>
      <h3 className="pt-4">Can I bring a plus one?</h3>
      <p>
        Short answer - nope! Whoever's name is on the invite is who we want with
        us! Thank you for understanding.
      </p>
      <h3 className="pt-4">Will there be food and drinks?</h3>
      <p>You bet! Come hungry and ready to toast.</p>
    </div>
  ),
};

export default function QA() {
  const [activeTab, setActiveTab] = useState("travel");

  const active = tabs.find((t) => t.id === activeTab);
  const inactives = tabs.filter((t) => t.id !== activeTab);

  return (
    <div className="bg-orange mx-4 mt-6 p-4 rounded-br-2xl shadow-md flex flex-col md:flex-row items-start gap-6">
      {/* Tabs Container */}
      <div className="w-full flex flex-row md:flex-col gap-2 md:gap-4 md:w-[50%]">
        {/* Active tab (larger on mobile) */}
        <button
          key={active.id}
          className="flex-1 py-4 px-4 text-eggshell bg-darkBeige text-lg font-semibold rounded-br-2xl md:w-full"
          onClick={() => setActiveTab(active.id)}
        >
          {active.label}
        </button>

        {/* Inactive tabs (stacked right of active tab on mobile) */}
        <div className="flex flex-col gap-2 w-[40%] md:w-full">
          {inactives.map((tab) => (
            <button
              key={tab.id}
              className="bg-darkBeige/10 text-eggshell text-sm py-2 px-2 rounded-br-2xl md:text-base hover:bg-darkBeige/20"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="text-eggshell w-full md:pl-6">{tabContent[activeTab]}</div>
    </div>
  );
}
