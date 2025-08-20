import freq from "../assets/faq.png";

function Freq() {
  return (
    <div className=" px-10 py-12  min-h-[90vh]">
      <div className="bg-backgrounBeige bg-opacity-60 flex items-center rounded-br-2xl md:flex-row flex-col flex-col-reverse min-h-[80vh] justify-center">
        {/* Main content */}
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-start pl-4  pt-6 md:pt-0"
        >
          {/* Top Info Row */}
          <div className="flex flex-col justify-between text-start mb-6">
            <h3 className="text-darkBeige  text-xl font-semibold">
              What to wear?
            </h3>
            <p className="text-darkBeige">
              Think swanky winery! Wear suitable shoes for dancing and being
              both indoors and outdoors.
            </p>
          </div>

          {/* Body Text */}
          <div className="text-start max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">
              Can I bring a plus one?
            </h3>
            <p className="text-darkBeige">
              Short answer - nope! Whoever's name is on the invite is who we
              want with us! Thank you for understanding.
            </p>
          </div>

                    <div className="text-start max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">
              Can I bring kids?
            </h3>
            <p className="text-darkBeige">
              The venue is a glass tasting room so if you'd like an excuse to call a babysitter, feel free, otherwise well behaved kids are welcome! Please note them in your RSVP so we can plan accordingly.
            </p>
          </div>

          <div className="text-start max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">
             Will there be food and drinks?
            </h3>
            <p className="text-darkBeige">
              You bet! Come hungry and ready to toast.
            </p>
          </div>
        </div>

        {/* Right-side rotated title */}
        <div data-aos="fade-left" className=" whitespace-nowrap">
          <img
            src={freq}
            alt="after party"
            className="transform md:rotate-90"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Freq;
