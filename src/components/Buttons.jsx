import Button from "./Button";

function Buttons() {
  return (
    <>
      <div data-aos="zoom-out" className="flex flex-row justify-center gap-10 pt-4 items-center min-h-[60vh]">
        <Button text="RSVP" href="#"></Button>
        <Button text="Registry" href="#"></Button>
      </div>
    </>
  );
}

export default Buttons;
