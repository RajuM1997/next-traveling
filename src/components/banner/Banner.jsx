const Banner = () => {
  return (
    <div className="relative bg-[url('/banner_bg.jpg')] bg-cover bg-center  h-screen ">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black">
        <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-12 gap-1 mt-12">
            <div className="col-span-12 lg:col-span-7 md:col-span-7">
              <div className="lg:p-5 md:5 p-2 flex h-full justify-center flex-col ">
                <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white">
                  Where Do You
                </h3>
                <h3 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white pt-3">
                  Want To Go?
                </h3>
                <p className="text-base py-2 lg:py-6 md:py-6 text-white">
                  Planning for a trip? We will organize your trip with the best
                  <br />
                  places and within best budget!
                </p>
                <div>
                  <button className="py-3 px-10 bg-amber-500 font-semibold text-base rounded-md text-white">
                    View Package
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 md:col-span-5">
              <div className="p-3 lg:p-8 md:p-8 bg-white rounded-xl">
                <h5 className="text-1xl pb-3 font-semibold">
                  Search Your Destinations
                </h5>
                <div>
                  <p className="text-sm text-black py-2">Search:</p>
                  <input
                    type="text"
                    className="w-full py-3 px-2 outline-none rounded-md border border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <p className="text-sm text-black py-2">Select Your Date:</p>
                  <input
                    type="text"
                    className="w-full py-3 px-2 outline-none rounded-md border border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <p className="text-sm text-black py-2">Select Your Date:</p>
                  <input
                    type="text"
                    className="w-full py-3 px-2 outline-none rounded-md border border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <p className="text-sm text-black py-2">No. of Person:</p>
                  <select
                    name=""
                    id=""
                    className="w-full py-4 px-2 outline-none rounded-md border border-gray-400 text-sm bg-transparent"
                  >
                    <option value="1">1</option>
                  </select>
                </div>
                <button className="w-full text-center bg-amber-500 py-2 px-10 ext-base rounded-md text-white mt-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
