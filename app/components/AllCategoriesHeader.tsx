import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const AllCategoriesHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center" id="cat">
        <p className="md:px-36 text-center font-[400] text-[20px] px-2 py-6">
          ለሚወዷቸው{" "}
          <span>
            <TypeAnimation
              sequence={[
                "አርቲስቶች",
                1800,
                "ተዋናይ",
                1800,
                "አልበም",
                1800,
                "ተዋናይት",
                1800,
                "ፊልም",
                1800,
              ]}
              repeat={Infinity}
            />
          </span>{" "}
          ድምጽ ይስጡ እና ጉዟቸውን ይደግፉ!
        </p>
        <div className="flex gap-6 py-12">
          <p className="text-[24px] md:text-[35px]">
            All Categories | ሁሉም ምድቦች
          </p>
        </div>
      </div>
      <div className="text-center space-x-6">
        <Link
          href="/candidate/music"
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#00094B] rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-150 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#00094B]">
            የሙዚቃ እጩዎች
          </span>
        </Link>

        <Link
          href="/candidate/movie"
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#00094B] rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-150 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#00094B]">
            የፊልም እጩዎች
          </span>
        </Link>
      </div>
      <div className="h-[1px] w-screen bg-black bg-opacity-40 my-10"></div>
    </>
  );
};

export default AllCategoriesHeader;
