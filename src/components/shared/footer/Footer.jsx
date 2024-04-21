import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="py-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 md:col-span-4 lg:col-span-4">
            <Link href={"/"} className="text-[18px] font-semibold">
              Adventure Avenue
            </Link>
            <p className="pt-3 text-base">
              Adventure Avenue: Your gateway to thrilling journeys and
              unforgettable experiences. Discover new horizons, create lasting
              memories, and embark on epic adventures with us
            </p>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <h5 className="font-semibold text-[18px]">
              <span>Popular</span> Destinations
            </h5>
            <div className="flex flex-col gap-1 pt-3">
              <Link href={""} className="text-[16px] font-semibold">
                Dubai
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Bangladesh
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                India
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Italy
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Canada
              </Link>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <h5 className="font-semibold text-[18px]">Company</h5>
            <div className="flex flex-col gap-1 pt-3">
              <Link href={""} className="text-[16px] font-semibold">
                Home
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Blog
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Package
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                Contact
              </Link>
              <Link href={""} className="text-[16px] font-semibold">
                About-us
              </Link>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-3">
            <h5 className="font-semibold text-[18px]">Social</h5>
            <div className="flex gap-2 pt-5">
              <div className="rounded-full w-10  h-10 relative">
                <Image
                  src={"/social/facebook.png"}
                  alt=""
                  className="w-full h-full rounded-tl-lg"
                  fill
                />
              </div>
              <div className="rounded-full w-10  h-10 relative">
                <Image
                  src={"/social/inst.png"}
                  alt=""
                  className="w-full h-full rounded-tl-lg"
                  fill
                />
              </div>
              <div className="rounded-full w-10  h-10 relative">
                <Image
                  src={"/social/tiktok.png"}
                  alt=""
                  className="w-full h-full rounded-tl-lg"
                  fill
                />
              </div>
              <div className="rounded-full w-10  h-10 relative">
                <Image
                  src={"/social/youtube.png"}
                  alt=""
                  className="w-full h-full rounded-tl-lg"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
