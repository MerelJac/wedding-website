import Button from "./Button";

function Buttons() {
  return (
    <div className="bg-[url('./assets/stool.png')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed ">
      <div data-aos="zoom-out" className="flex flex-col md:flex-row justify-center gap-10 pt-4 items-center min-h-[60vh] ">
        <Button text="RSVP" href="#"></Button>
        <Button text="Registry" href="https://www.zola.com/registry/merelandmatthew"></Button>
      </div>
    </div>
  );
}

export default Buttons;
