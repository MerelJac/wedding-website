import Image from "next/image";
function ThankYou() {
  return (
    <div className="bg-[url('/hands.png')] bg-cover bg-center bg-no-repeat md:bg-fixed shadow-lg px-6 py-10 min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-6 border-t border-t-beige border-t-[6px] md:border-t-0">
    <Image
        src="/headshot.png"
        alt="Headshot"
        className="object-contain max-w-[200px] md:max-w-[250px]"
     width={400}
            height={400}
      ></Image>

      <div data-aos="fade-left" className="text-center md:text-left">
        <Image className="md:max-w-[30vw]" src="/thanks.png" alt="thanks"  width={400}
            height={400}></Image>
      </div>
    </div>
  );
}

export default ThankYou;
