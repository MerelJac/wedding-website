import "aos/dist/aos.css";
import FlipClock from "./FlipClock";
import Image from "next/image";
function MrMrs() {
  return (
    <div className="text-center md:py-12">
      <div className="flex flex-col items-center">
        <div data-aos="fade-left" className=" whitespace-nowrap">
          <Image
            src="/mr&mrs.png"
            alt="Mr & Mrs O'Brien"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>

      <section className="flex flex-row items-center justify-center gap-12">
        {/* Bride */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center text-center"
        >
          <Image
            src="/merel-2.png"
            alt="Merel"
            className="w-80 h-124 object-cover"
            width={200}
            height={200}
          ></Image>
          <h3 className="pt-4 text-white text-xl font-semibold">Merel</h3>
          <p className="text-white">The Bride</p>
        </div>

        {/* Groom */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center justify-center text-center"
        >
          <Image
            src="/matthew-2.png"
            alt="Matthew"
            className="w-80 h-124 object-cover"
            width={200}
            height={200}
          ></Image>
          <h3 className="pt-4 text-white text-xl font-semibold">Matthew</h3>
          <p className="text-white">The Groom</p>
        </div>
      </section>

      <div data-aos="fade-up" className="flex flex-col items-center pt-8">
        <FlipClock></FlipClock>
      </div>
    </div>
  );
}

export default MrMrs;
