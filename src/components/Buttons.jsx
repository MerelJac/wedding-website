import Button from "./Button";
import rsvp from "../assets/rsvp.png"
import registry from "../assets/registry.png"
function Buttons() {
  return (
    <div className="bg-[url('./assets/stool.png')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed ">
      <div data-aos="zoom-out" className="flex flex-col md:flex-row justify-center gap-10 pt-4 items-center min-h-[60vh] ">
        <Button image={rsvp} href="#"></Button>
        <Button image={registry} href="https://www.zola.com/registry/merelandmatthew"></Button>
      </div>
    </div>
  );
}

export default Buttons;
