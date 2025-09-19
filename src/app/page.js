// app/page.js  (Home)
import Header from "./components/Header";
import Info from "./components/Info";
import Buttons from "./components/Buttons";
import MrMrs from "./components/MrMrs";
import Tiles from "./components/Tiles";
import ThankYou from "./components/ThankYou";
import Freq from "./components/Freq";
import Travel from "./components/Travel";
import "aos/dist/aos.css";
import "./globals.css";

export default function WeddingSite() {

  return (
    <div className="relative top-0 left-0 min-h-screen max-w-[100vw] bg-[url('/blue.png')] md:bg-[url('/outfits.png')] md:bg-cover bg-contain bg-center md:bg-no-repeat md:bg-fixed overflow-x-hidden">
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
