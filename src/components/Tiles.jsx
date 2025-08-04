import { useState } from "react";

const faqItems = [
  {
    question: "What is Matthew & Merel's coined 'second date'?",
    answer: "Long weekend in Victoria, Canada.",
  },
  {
    question:
      "What sport was required for Matthew to be accepted into Merel's family?",
    answer: "Skiing, duh!",
  },
  {
    question: "How did Matthew & Merel meet?",
    answer: "Hinge...",
  },
  {
    question: "What lazy dinner do they have a little too often?",
    answer: "Frozen pizza.",
  },
  {
    question: "Where did Matthew propose?",
    answer: "On the beach outside of Amsterdam - Zandvoort & Zee",
  },
  {
    question: "What is Matthew's non-negotiable?",
    answer:
      "Golf clubs can stay in the living room where driving and putting can be practiced often.",
  },
  {
    question: "What O'Brien family tradition did Merel get adopted into?",
    answer: "Fireball Friday!",
  },
  {
    question:
      "When Matthew & Merel first started dating, who was the last person of girlfriend approval needed?",
    answer: "His pedicureist @ Sparkle Nail",
  }
];

export default function Tiles() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-16">
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="relative perspective"
            onClick={() => handleFlip(index)}
            onMouseEnter={() => window.innerWidth > 768 && handleFlip(index)}
            onMouseLeave={() => window.innerWidth > 768 && handleFlip(index)}
          >
            <div
              className={`transition-transform transform duration-700 transform-style-preserve-3d w-full h-48 rounded-br-2xl shadow-lg cursor-pointer ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute backface-hidden bg-beige text-white rounded-br-2xl w-full h-full flex items-center justify-center p-4 text-center text-xl font-bold bg-opacity-60">
                {item.question}
              </div>
              {/* Back */}
              <div className="absolute backface-hidden rotate-y-180 bg-darkBeige text-white rounded-br-2xl w-full h-full flex items-center justify-center p-4 text-center text-lg bg-opacity-60">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
