import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import MrMrs from "./components/MrMrs";
import Tiles from "./components/Tiles";
import AOS from "aos";
import { useEffect } from "react";
import Info from "./components/Info";
import Buttons from "./components/Buttons";
import ThankYou from "./components/ThankYou";
import Freq from "./components/Freq";
import Travel from "./components/Travel";
import AdminInvitePage from "./components/AdminInvitePage"; // 👈 new

function WeddingSite() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative top-0 left-0 min-h-screen max-w-[100vw] bg-[url('./assets/blue.png')] md:bg-[url('./assets/outfits.png')] md:bg-cover bg-contain bg-center md:bg-no-repeat md:bg-fixed">
      <div className="absolute top-0 left-0 h-full bg-black bg-opacity-10 z-10 pointer-events-none"></div>

      <div className="relative z-20">
        <Header />
        <Info />
        <Buttons />
        <div className="pt-6">
          <Freq />
          <Travel />
        </div>
        <MrMrs />
        <Tiles />
        <ThankYou />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingSite />} />
        <Route path="/admin" element={<AdminInvitePage />} />
      </Routes>
    </Router>
  );
}
