import Itinerary from "@/components/itinerary/Itinerary";
import Image from "next/image";
import React from "react";

const SinglePackage = () => {
  return (
    <div className="container mx-auto min-h-screen pt-28">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6  xm:col-span-6">
          <div className="w-full h-single-page relative">
            <div
              style={{ zIndex: 1 }}
              className="z-5 absolute inset-0 bg-black opacity-20 rounded-xl"
            ></div>
            <Image
              src={"/destination/destination1.jpg"}
              alt=""
              className="absolute inset-0 rounded-xl object-cover"
              fill
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6  xm:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6  xm:col-span-6">
              <div className="w-full h-small-img relative">
                <div
                  style={{ zIndex: 1 }}
                  className="z-5 absolute inset-0 bg-black opacity-20 rounded-xl"
                ></div>
                <Image
                  src={"/destination/destination3.jpg"}
                  alt=""
                  className="absolute inset-0 rounded-xl object-cover"
                  fill
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6  xm:col-span-6">
              <div className="w-full h-small-img relative">
                <div
                  style={{ zIndex: 1 }}
                  className="z-5 absolute inset-0 bg-black opacity-20 rounded-xl"
                ></div>
                <Image
                  src={"/destination/destination3.jpg"}
                  alt=""
                  className="absolute inset-0 rounded-xl object-cover"
                  fill
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6  xm:col-span-6">
              <div className="w-full h-small-img relative">
                <div
                  style={{ zIndex: 1 }}
                  className="z-5 absolute inset-0 bg-black opacity-20 rounded-xl"
                ></div>
                <Image
                  src={"/destination/destination3.jpg"}
                  alt=""
                  className="absolute inset-0 rounded-xl object-cover"
                  fill
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6  xm:col-span-6">
              <div className="w-full h-small-img relative">
                <div
                  style={{ zIndex: 1 }}
                  className="z-5 absolute inset-0 bg-black opacity-20 rounded-xl"
                ></div>
                <Image
                  src={"/destination/destination3.jpg"}
                  alt=""
                  className="absolute inset-0 rounded-xl object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8  xm:col-span-8">
          <h3 className=" text-3xl font-semibold py-5">
            Experience the tour of excitement with the most adventurous
            activities.
          </h3>
          <div>
            <p className=" text-yellow-500 text-lg">
              $175/ <span className=" text-black text-sm">per person</span>
            </p>
          </div>
          <div className="flex gap-2 py-5">
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-yellow-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              4 Days / 5 Night
            </p>
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-yellow-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Max People : 40
            </p>
            <p className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-yellow-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                />
              </svg>
              Italy & France.
            </p>
          </div>
          <div>
            <p className="text-base py-2">
              Tour and travel refer to the activities related to planning,
              organizing, and experiencing trips to various destinations for
              leisure, exploration, adventure, or relaxation.Choose your
              destination based on your interests and preferences, whether{" "}
              {"it's"}a cultural experience, a natural adventure, historical
              exploration, or a beach vacation.
            </p>
            <p className="text-base py-2">
              Tour and travel refer to the activities related to planning,
              organizing, and experiencing trips to various destinations for
              leisure, exploration, adventure, or relaxation.Choose your
              destination based on your interests and preferences, whether{" "}
              {"it's"}a cultural experience, a natural adventure, historical
              exploration, or a beach vacation.
            </p>
          </div>
          <div>
            <h4 className=" text-2xl font-semibold py-5">
              Highlights of the Tour
            </h4>
            <p className="text-base py-1">
              Our Team Of Knowledgeable Guides And Travel Experts Are Dedicated
              To Making Your Journey Memorable And Worry-Free
            </p>
            <p className="text-base py-1">
              Dive Into Rich Cultures And Traditions. Explore Historic Sites,
              Savor Authentic Cuisine, And Connect With Locals.
            </p>
            <p className="text-base py-1">
              We Take Care Of All The Details, So You Can Focus On Creating
              Memories. Rest Assured That Your Journey Is In Capable Hands
            </p>
            <p className="text-base py-1">
              Sip Cocktails On The Beach As You Watch The Sun Dip Below The
              Horizon.
            </p>
            <p className="text-base py-1">
              From Accommodations To Dining Experiences, We Select The Best
              Partners To Ensure Your Comfort And Enjoyment Throughout Your
              Journey.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold py-5">Itinerary</h3>
            <Itinerary />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4  xm:col-span-4 pt-5">
          <div className="border p-5 rounded">
            <div>
              <p className="pb-2">Booking Date</p>
              <input type="text" className="w-full border p-2" />
            </div>
            <div className="flex justify-between pt-2 pb-5">
              <p>Per Package:</p>
              <p>$200</p>
            </div>
            <hr className="pb-5" />
            <div className="flex justify-between pb-5">
              <p>Total:</p>
              <p>$200</p>
            </div>
            <button className="w-full bg-yellow-500 py-2 px-2 rounded-lg font-medium">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
