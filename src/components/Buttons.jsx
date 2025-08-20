import { useState } from "react";
import Button from "./Button";
import rsvp from "../assets/rsvp.png";
import registry from "../assets/registry.png";
import RSVP from "./RSVP";

function Buttons() {
  const [isRSVPOpen, setRSVPOpen] = useState(false);

  return (
    <div className="bg-[url('./assets/stool.png')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed ">
      <div
        data-aos="zoom-out"
        className="flex flex-col md:flex-row justify-center gap-10 pt-4 items-center min-h-[60vh] "
      >
        <button
          onClick={() => setRSVPOpen(true)}
          className="px-4 py-2 transition duration-300 hover:scale-105 hover:ease-in-out"
        >
          <img src={rsvp} alt="RSVP" className="max-w-full h-auto" />
        </button>
        <Button
          image={registry}
          href="https://www.zola.com/registry/merelandmatthew"
        />
      </div>

      {/* Modal */}
      {isRSVPOpen && <RSVP onClose={() => setRSVPOpen(false)} />}
    </div>
  );
}

export default Buttons;
