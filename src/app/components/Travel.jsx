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
          className="flex flex-col justify-start pr-4  pt-6 md:pt-0 items-end"
        >
          {/* Top Info Row */}
          <div className="flex flex-col justify-between text-end mb-6">
            <h3 className="text-darkBeige  text-xl font-semibold">Airport</h3>
            <p className="text-darkBeige">
              Easiest & closest airport is PDX! There is public transportation
              or Uber/Lyfts around and into Portland. Rental cars or Ubers/Lyfts
              are probably your best bet to Dundee, which is about 40 minutes
              southwest of Portland.
            </p>
          </div>

          {/* Body Text */}
          <div className="text-end max-w-4xl mb-6">
            <h3 className=" text-darkBeige  text-xl font-semibold">Lodging</h3>
            <p className="text-darkBeige">
              Feel free to stay wherever you want, but the newly weds will be
              staying in Dundee, OR the weekend of the wedding. We don't have
              rooms blocked anywhere but Newburg or Dundee are the closest towns
              to the venue.
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
              The venue is in wine country so there are lots of wineries to
              visit and taste at as well!
              <br />
              <br />
              Newburg's First Street has cute antique shops, boutiques, and
              cafes - fun to spend the morning there! If you are a golfer, bring
              your clubs - there are some beautiful courses in the area. Hiking
              is best in the Columbia River Gorge area but you'll need your own
              transportation to get there, and it can be far from the venue so
              plan accordingly so you're not late to the party! If you are staying for longer, check out the Oregon Coast (Cannon Beach is a favorite) or Mount Hood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
