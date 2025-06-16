import React, { useState } from "react";

const faqItems = [
  {
    question: "What should I wear?",
    answer: "The wedding will be outdoors. We recommend semi-formal attire.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "Yes! If your invite includes a plus one, RSVP with their name.",
  },
  {
    question: "Will there be food and drinks?",
    answer: "Absolutely! Come hungry and ready to toast.",
  },
  {
    question: "Are kids allowed?",
    answer: "Our wedding is an adults-only celebration.",
  },
];

export default function Tiles() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-center mb-10 text-white">Fun Facts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="relative perspective"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`transition-transform duration-700 transform-style-preserve-3d w-full h-48 rounded-xl shadow-lg cursor-pointer ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute backface-hidden bg-white text-black rounded-xl w-full h-full flex items-center justify-center p-4 text-center text-xl font-bold border border-gray-300">
                {item.question}
              </div>
              {/* Back */}
              <div className="absolute backface-hidden rotate-y-180 bg-black text-white rounded-xl w-full h-full flex items-center justify-center p-4 text-center text-lg border border-gray-700">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
