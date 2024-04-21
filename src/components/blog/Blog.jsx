import Image from "next/image";

const Blog = () => {
  return (
    <div className="container mx-auto py-7">
      <h3 className="text-center text-2xl font-semibold pb-5">Travel Blogs</h3>
      <p className="text-center text-base pb-5">
        This is just a simple text made for this unique and awesome template,
        you <br /> can replace it with any text.
      </p>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour1.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h6 className="flex gap-1 pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-gray-600">5 min read</span> {"  "}{" "}
                <span className="text-gray-600">by</span> Travosy
              </h6>
              <h5 className="font-medium text-black text-xl py-3">
                This Spanish city is a feast for the eyes: Travosy
              </h5>
              <p className="text-sm pb-3">
                This is required when, for example, the final text is not yet
                available.
              </p>
              <button className="flex gap-1 items-center">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour1.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h6 className="flex gap-1 pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-gray-600">5 min read</span> {"  "}{" "}
                <span className="text-gray-600">by</span> Travosy
              </h6>
              <h5 className="font-medium text-black text-xl py-3">
                This Spanish city is a feast for the eyes: Travosy
              </h5>
              <p className="text-sm pb-3">
                This is required when, for example, the final text is not yet
                available.
              </p>
              <button className="flex gap-1 items-center">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="card_main rounded-lg">
            <div className="card overflow-hidden">
              <div className="w-full h-72 relative">
                <Image
                  src={"/package/tour1.jpg"}
                  alt=""
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
              <h6 className="flex gap-1 pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-gray-600">5 min read</span> {"  "}{" "}
                <span className="text-gray-600">by</span> Travosy
              </h6>
              <h5 className="font-medium text-black text-xl py-3">
                This Spanish city is a feast for the eyes: Travosy
              </h5>
              <p className="text-sm pb-3">
                This is required when, for example, the final text is not yet
                available.
              </p>
              <button className="flex gap-1 items-center">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
