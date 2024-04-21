"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [shawMenu, setShawMenu] = useState(false);
  console.log(shawMenu);
  return (
    <div>
      {!shawMenu ? (
        <div
          className="lg:hidden md:hidden block"
          style={{ paddingRight: "20px" }}
          onClick={() => setShawMenu((pre) => !pre)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-white cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      ) : (
        <div
          className="lg:hidden md:hidden block"
          style={{ paddingRight: "20px" }}
          onClick={() => setShawMenu((pre) => !pre)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-white cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      {shawMenu && (
        <div
          className="h-screen fixed left-0 top-24 w-44 flex flex-col gap-2 px-3 pt-5"
          style={{ background: "#0d0c22fa" }}
        >
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            Home
          </Link>
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            Blog
          </Link>
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            Package
          </Link>
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            Contact
          </Link>
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            About-us
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
