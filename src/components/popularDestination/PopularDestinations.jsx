import Image from "next/image";

const PopularDestinations = () => {
  return (
    <div className="container mx-auto py-7">
      <h3 className="text-center text-2xl font-semibold pb-4">
        Popular Destinations
      </h3>
      <p className="text-center text-base pb-5">
        Looking to embark on an adventure? Let us curate your journey with
        top-notch destinations and <br /> optimal budgeting!
      </p>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-4  xm:col-span-12">
          <div className="w-full h-80 relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-50 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination2.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
            <div className="absolute z-10 bottom-7 left-5 text-white">
              <h4 className="text-2xl font-semibold">Eiffel Tower</h4>
              <p className="text-base text-white">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="w-full h-80 relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-50 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination1.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
            <div className="absolute z-10 bottom-7 left-5 text-white">
              <h4 className="text-2xl font-semibold">Eiffel Tower</h4>
              <p className="text-base text-white">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="w-full h-80 relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-50 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination3.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
            <div className="absolute z-10 bottom-7 left-5 text-white">
              <h4 className="text-2xl font-semibold">Eiffel Tower</h4>
              <p className="text-base text-white">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="w-full h-80 relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-50 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination4.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
            <div className="absolute z-10 bottom-7 left-5 text-white">
              <h4 className="text-2xl font-semibold">Eiffel Tower</h4>
              <p className="text-base text-white">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="w-full h-80 relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-50 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination5.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
            <div className="absolute z-10 bottom-7 left-5 text-white">
              <h4 className="text-2xl font-semibold">Eiffel Tower</h4>
              <p className="text-base text-white">Paris, 24 Trips</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
