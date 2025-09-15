import Image from "next/image";

function Travel() {
  return (
    <div className=" px-10 py-12  min-h-[90vh]">
      <div className="bg-backgroundBeige bg-opacity-60 flex items-center rounded-br-2xl md:flex-row flex-col flex-col-reverse min-h-[80vh] justify-center">
        {/* Right-side rotated title */}
        <div data-aos="fade-left" className=" whitespace-nowrap">
          <Image
            src="/planning.png"
            alt="after party"
            className="transform md:rotate-[-90deg]"
            width={400}
            height={400}
          ></Image>
        </div>

        {/* Main content */}
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-start pr-4  pt-6 md:pt-0"
        >
          {/* Top Info Row */}
          <div className="flex flex-col justify-between text-end mb-6">
            <h3 className="text-darkBeige  text-xl font-semibold">Airport</h3>
            <p className="text-darkBeige">
              Fly into PDX There is public transport or Uber/Lyfts into the
              city.
            </p>
          </div>

          {/* Body Text */}
          <div className="text-end max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">Lodging</h3>
            <p className="text-darkBeige">
              Feel free to stay wherever you want, but the newly weds will be
              staying in Dundee, OR the weekend of the wedding.
            </p>
          </div>

          <div className="text-end max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">
              Explore the Area
            </h3>
            <p className="text-darkBeige">
              The Pacific Northwest in the summer is beautiful! Since the party
              is Saturday evening, make your trip worthwhile by hitting some
              hikes, lakes, shopping, and most importantly, eating in Portland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
