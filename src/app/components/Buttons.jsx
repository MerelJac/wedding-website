"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import RSVP from "./RSVP";
import Image from "next/image";
import AOS from "aos";
function Buttons() {
  const [isRSVPOpen, setRSVPOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[url('/stool.png')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed ">
      <div
        data-aos="zoom-out"
        className="flex flex-col md:flex-row justify-center gap-10 pt-4 items-center min-h-[60vh] "
      >
        <button
          onClick={() => setRSVPOpen(true)}
          className="px-4 py-2 transition duration-300 hover:scale-105 hover:ease-in-out"
        >
          <Image
            width={300}
            height={300}
            src="/rsvp.png"
            alt="RSVP"
            className="max-w-full h-auto"
          ></Image>
        </button>
        <Button
          image="/registry.png"
          href="https://www.zola.com/registry/merelandmatthew"
        />
      </div>

      {/* Modal */}
      {isRSVPOpen && <RSVP onClose={() => setRSVPOpen(false)} />}
    </div>
  );
}

export default Buttons;
