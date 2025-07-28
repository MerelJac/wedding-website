import merel from "../assets/merel-2.png";
import matthew from "../assets/matthew-2.png";
import "aos/dist/aos.css";
import FlipClock from "./FlipClock";
function MrMrs() {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center">
        <h1 className="text-white">Mr & Mrs O'Brien</h1>
        <div data-aos="fade-up">
          <FlipClock></FlipClock>
        </div>
      </div>

      <section className="flex flex-row items-center justify-center gap-12">
      

        {/* Bride */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center text-center"
        >
          <img src={merel} alt="Merel" className="w-80 h-124 object-cover" />
          <h2  className="text-white">Merel</h2>
          <p  className="text-white">The Bride</p>
        </div>

         {/* Groom */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center justify-center text-center"
        >
          <img
            src={matthew}
            alt="Matthew"
            className="w-80 h-124 object-cover"
          />
          <h2  className="text-white">Matthew</h2>
          <p  className="text-white">The Groom</p>
        </div>
      </section>
    </div>
  );
}

export default MrMrs;
