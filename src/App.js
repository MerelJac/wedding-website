import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import MrMrs from "./components/MrMrs";
import Tiles from "./components/Tiles";
import WeddingInfo from "./components/WeddingInfo";

function App() {
  const weddingInfoRef = useRef(null);
  const [useWhiteBackground, setUseWhiteBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!weddingInfoRef.current) return;
      const rect = weddingInfoRef.current.getBoundingClientRect();
      const halfway = rect.top + rect.height / 4;
      setUseWhiteBackground(halfway < window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative top-0 left-0 w-full min-h-screen  duration-700 ${
        useWhiteBackground
          ? "bg-white"
          : "bg-[url('./assets/wedding.jpg')] bg-cover bg-no-repeat bg-fixed"
      }`}
    >
      {!useWhiteBackground && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      )}

      <div className="relative z-20">
        <Header />
        <div className="flex justify-center" ref={weddingInfoRef}>
          <WeddingInfo />
        </div>
        <FAQ />
        <MrMrs />
        <Tiles />
      </div>
    </div>
  );
}

export default App;
