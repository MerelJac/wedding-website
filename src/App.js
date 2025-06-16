import React from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import MrMrs from "./components/MrMrs";
import Tiles from "./components/Tiles";
import WeddingInfo from "./components/WeddingInfo";

function App() {
  return (
    <div className="relative top-0 left-0 w-full min-h-screen bg-[url('./assets/wedding.jpg')] bg-cover bg-no-repeat bg-fixed">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 pointer-events-none"></div>

      <div className="relative z-20">
        <Header />
        <div className="flex justify-center">
          <WeddingInfo />
        </div>
        <FAQ />
        <div className="bg-white">
          <MrMrs />
        </div>

        <Tiles />
      </div>
    </div>
  );
}

export default App;
