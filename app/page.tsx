import { Cinzel_Decorative } from "next/font/google";
import React from "react";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <p
        className={`${cinzel.className} text-center mt-6 text-[12vw] md:text-[5vw] font font-bold text-blue-600`}
      >
        Leza Award
      </p>
      <p
        className={`${cinzel.className} text-center mt-6 text-[8vw] md:text-[3vw] font text-primary`}
      >
        Second round
      </p>
      <p
        className={`${cinzel.className} text-center mt-6 text-[8vw] md:text-[3vw] font text-primary`}
      >
        Coming Soon
      </p>
    </div>
  );
};

export default page;
