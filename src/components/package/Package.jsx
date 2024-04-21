import Image from "next/image";

const Package = () => {
  return (
    <div className="container mx-auto py-7">
      <h3 className="text-center text-2xl font-semibold pb-5">
        Ultimate Travel Experience
      </h3>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour1.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour2.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour3.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour3.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour3.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main box_shaw p-3 rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour3.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h5 className="font-semibold text-xl py-3">
                The Allure {"Italy's"} Rich Culture, History, And Cuisine.
              </h5>
              <p className="flex gap-1 text-sm text-nowrap  hover:-translate-x-full transition-all duration-1000 pb-3">
                <span className="flex items-center gap-1">
                  ALEXANDRIA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  SHARM EL SHEIKH
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  MANSOURA
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  KARACHI
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  LAHORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
                ISLAMABAD
              </p>
              <hr />
              <div className="flex justify-between items-center py-2">
                <div>
                  <p>Starting Form:</p>
                  <p className="text-blue-700 font-semibold">$2000</p>
                </div>
                <button className=" text-center bg-amber-500 py-2 px-5 ext-base rounded-md text-white mt-3">
                  Book A Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
