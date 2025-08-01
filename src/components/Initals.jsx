import logo from "../assets/logo-w.png";

function Initials() {
  return (
    <div className="relative z-10">
      <img
        src={logo}
        alt="Merel and Matthew"
        className="max-w-[60vw] sm:max-w-sm md:max-w-md"
      />
    </div>
  );
}

export default Initials;
