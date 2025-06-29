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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true
    });
  }, []);

  return (
    <div className="relative top-0 left-0 w-full min-h-screen bg-[url('./assets/wedding.jpg')] bg-cover bg-no-repeat bg-fixed">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 pointer-events-none"></div>

      <div className="relative z-20">
        <Header />
        <Info />
        <Buttons />
        <div className="bg-[url('./assets/coffee.jpg')] bg-cover bg-no-repeat bg-fixed">
          <QA />
          <MrMrs />
          <Tiles />
        </div>
      </div>
    </div>
  );
}

export default App;
