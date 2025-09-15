import React, { useState, useRef } from "react";
import App from "../App";

// Explicit list of all heavy assets you want ready before showing the site
const urls = [
  "/blue.png",
  "/outfits.png",
  "/hand.png",
  "/hands.png",
  "/stool.png",
  "/thanks.png",
  "/rsvp.png",
  "/registry.png",
  "/static/media/logo-w.f77945f17af977baccf4.png",
];

export default function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      // optional: add a little delay for smooth fade
      setTimeout(() => setLoading(false), 500);
    }
  };

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-eggshell text-white z-50">
          <div className="text-center">
            <img
              src="/static/media/logo-w.f77945f17af977baccf4.png"
              alt="Loading"
              className="w-60 mx-auto animate-pulse"
            />
          </div>
        </div>
      )}

      {/* Preloader invisible <img> tags */}
      {loading &&
        urls.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            onLoad={imageLoaded}
            onError={imageLoaded}
            style={{ display: "none" }}
          />
        ))}

      {/* App content (hidden while loading) */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <App />
      </div>
    </>
  );
}
