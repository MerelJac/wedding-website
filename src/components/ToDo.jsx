import pic from "../assets/here.png";

function todo() {
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
              Explore the Area
            </h3>
            <p className="text-darkBeige">
        The Pacific Northwest in the summer is beautiful! Since the party is Saturday evening, make your trip worthwhile by hitting some hikes, lakes, shopping, and most importantly, eating in Portland.
            </p>
          </div>
        </div>

        {/* Right-side rotated title */}
        <div data-aos="fade-left" className=" whitespace-nowrap">
          <img
            src={pic}
            alt="things to do"
            className="transform md:rotate-90"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default todo;
