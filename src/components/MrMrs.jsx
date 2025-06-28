import headshot from "../assets/headshot.jpg";
import "aos/dist/aos.css";
import FlipClock from "./FlipClock";
function MrMrs() {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center">
        <h1>Mr & Mrs O'Brien</h1>
        <div data-aos="fade-up">
          <FlipClock></FlipClock>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Groom */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center justify-center text-center"
        >
          <img
            src={headshot}
            alt="Matthew"
            className="w-80 h-124 object-cover"
          />
          <h2>Matthew</h2>
          <p>The Groom</p>
        </div>

        {/* Bride */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center text-center"
        >
          <img src={headshot} alt="Merel" className="w-80 h-124 object-cover" />
          <h2>Merel</h2>
          <p>The Bride</p>
        </div>
      </section>
    </div>
  );
}

export default MrMrs;
