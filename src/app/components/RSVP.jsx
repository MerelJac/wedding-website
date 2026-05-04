import React from "react";
import ContactButton from "./ContactButton";

export default function RSVP({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-backgroundBeige w-[90%] max-w-lg max-h-[90%] overflow-y-auto rounded-br-2xl shadow-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-darkBeige hover:opacity-60 transition-opacity text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col justify-center gap-4 items-center text-center">
          <p className="text-darkBeige text-base">
            Confirm your RSVP by texting Merel &amp; include all people in your party!
          </p>
          <strong className="text-darkBeige">Please RSVP by May 8, 2026</strong>
          <ContactButton />
          <p className="text-darkBeige text-sm leading-relaxed">
            Please be mindful that we are not welcoming plus ones that were not
            on the original invitation. If we forgot someone, contact us &amp; let
            us know!
          </p>
        </div>
      </div>
    </div>
  );
}
