import Button from "./Button";

function Buttons() {
  return (
    <>
      <div className="flex flex-row justify-center gap-10 pt-4 bg-white items-center">
        <Button text="RSVP" href="#"></Button>
        <Button text="Registry" href="#"></Button>
      </div>
            <div className="flex flex-row justify-center gap-10 pt-4 bg-white items-center">
                <h2 className="text-transparent">See through block letters</h2>
            </div>
      </>
  )
}

export default Buttons

