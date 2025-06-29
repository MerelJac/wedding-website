function Info() {
  return (
    <div className="flex bg-[url('./assets/coffee.jpg')] bg-cover bg-no-repeat bg-fixed shadow-lg px-10 py-12  min-h-[80vh] items-center">
      {/* Main content */}
      <div data-aos="zoom-in" className="flex flex-col justify-start w-full">
        {/* Top Info Row */}
        <div className="flex flex-col justify-between text-start mb-6">
          <h3 className="text-beige  text-xl font-semibold">Rodeo Hills Winery</h3>
          <p className="text-darkBeige">Dundee, Oregon</p>
          <p className="text-darkBeige">Saturday August 8, 2026</p>
          <p className="text-darkBeige">5 - 9 PM</p>
        </div>

        {/* Body Text */}
        <div className="text-start max-w-4xl">
          <h3 className=" text-beige  text-xl font-semibold mb-2">
            After a small family ceremony on Friday, we’d love for you to join
            us for a celebration!
          </h3>
          <p className="text-darkBeige">
            There’ll be food, drinks, dancing, games, some speeches, our vows,
            and lots of good company.
          </p>
        </div>
      </div>

      {/* Right-side rotated title */}
      <div data-aos="fade-left" className=" whitespace-nowrap">
        <h1 className="text-6xl text-darkBeige transform rotate-90">
          Happily Ever After Party
        </h1>
      </div>
    </div>
  );
}

export default Info;
