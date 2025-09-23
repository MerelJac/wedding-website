
import Image from "next/image";

function Initials() {
  return (
    <div className="relative z-10">
      <Image
        src="/m&m.svg"
        alt="Merel and Matthew"
        width={300}
        height={300}
        className="max-w-[60vw] sm:max-w-sm md:max-w-md"
      ></Image>
    </div>
  );
}

export default Initials;
