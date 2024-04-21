import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen bg-custom-dark">
      <nav className="container mx-auto flex justify-between items-center h-24 py-5">
        <div>
          <h4 className="text-[18px] font-semibold text-white">
            Adventure Avenue
          </h4>
        </div>
        <div className="lg:flex md:flex gap-5 hidden">
          <Link href={"/"} className="text-[16px] font-semibold text-white">
            Home
          </Link>
          <Link href={"/blog"} className="text-[16px] font-semibold text-white">
            Blog
          </Link>
          <Link
            href={"/package"}
            className="text-[16px] font-semibold text-white"
          >
            Package
          </Link>
          <Link
            href={"/contact"}
            className="text-[16px] font-semibold text-white"
          >
            Contact
          </Link>
          <Link
            href={"/about"}
            className="text-[16px] font-semibold text-white"
          >
            About-us
          </Link>
        </div>
        <div className="lg:hidden md:hidden block">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
