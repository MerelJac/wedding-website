import headshot from "../assets/headshot.png";
import thanks from "../assets/thanks.png";
function ThankYou() {
  return (
    <div className="bg-[url('./assets/hands.png')] bg-cover bg-center bg-no-repeat shadow-lg px-6 py-10 min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-6">
      <img
        src={headshot}
        alt="Headshot"
        className="object-contain max-w-[200px] md:max-w-[250px]"
      />

      <div data-aos="fade-left" className="text-center md:text-left">
        <img className="md:max-w-[30vw]" src={thanks} alt="thanks" ></img>
      </div>
    </div>
  );
}

export default ThankYou;
