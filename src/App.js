import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import MrMrs from "./components/MrMrs";
import Tiles from "./components/Tiles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Info from "./components/Info";
import QA from "./components/QA";
import Buttons from "./components/Buttons";
import ThankYou from "./components/ThankYou";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true
    });
  }, []);

  return (
    <div className="relative top-0 left-0  min-h-screen  max-w-[100vw] bg-[url('./assets/outfits.png')] md:bg-cover bg-contain bg-center bg-no-repeat bg-fixed">
      <div className="absolute top-0 left-0  h-full bg-black bg-opacity-10 z-10 pointer-events-none"></div>

      <div className="relative z-20">
        <Header />
        <Info />
        <Buttons />
        <div className="">
          <div className="pt-6">
            <QA />
          </div>

          <MrMrs />
          <Tiles />
          <ThankYou/>
        </div>
      </div>
    </div>
  );
}

export default App;
