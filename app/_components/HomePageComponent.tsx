import Image from "next/image";
import { AwardLogo, LezaLogo } from "@/lib/utils/assets";
import ImageSlide from "./anim";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
});

function HomePageComponent() {
  return (
    <div className=" bg-gradient-to-t from-[#00094B] to-[#DAEBEE]  to-[70%] h-screen">
      <nav className="flex justify-between items-center p-2 md:p-4 h-[14%]">
        <div className="flex flex-col  items-start  font-semibold">
          <Image
            src={LezaLogo}
            alt="Leza award logo"
            height={100}
            width={100}
            className="aspect-square object-cover"
            style={{ width: "auto" }}
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={"/#cat"}
            className="duration-300 text-[6vw] md:text-[2vw] text-[#A97142] mr-6 font-light px-4 "
          >
            <p className={`${cinzel.className}px-4 duration-300  `}>
              Categories
            </p>
          </Link>
        </div>
      </nav>
      <div className="h-[80%] flex items-center">
        <div className="w-screen md:w-1/2">
          <p className="text-[10vw] md:text-[5vw]  font-semibold text-black md:text-white text-center ">
            ሁላችንም ሚና አለን!
          </p>

          <div className="md:hidden">
            <ImageSlide imageUrl={AwardLogo} />
          </div>
          <p
            className={`${cinzel.className}  text-center mt-6 text-[1.4rem] md:text-[3rem] font-light`}
          >
            Vote for your favorite{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Artists",
                  2400,
                  "Actor",
                  2400,
                  "Singer",
                  2400,
                  "Actress",
                  2400,
                ]}
                repeat={Infinity}
              />
            </span>{" "}
            and support their journey.
          </p>

          <div className="flex justify-center  mt-4 ">
            <Link href="category/all">
              <div
                className={`${cinzel.className} bg-[#00094B] max-w-md py-4 px-[2vw] text-white rounded-full font-semibold text-xl hover:shadow-md hover:bg-[#1e2a7c] transition-all duration-300`}
              >
                Vote Now
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <ImageSlide imageUrl={AwardLogo} />
        </div>
      </div>
    </div>
  );
}

export default HomePageComponent;
