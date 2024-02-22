import Image from "next/image"
import Link from "next/link"

import { LezaLogo } from "@/lib/utils/assets"

const Header: React.FC = () => {
  return (
    <nav className="flex md:flex-row items-center justify-between px-[25px] ">
      <div className="flex gap-6 items-center">
        <Link href={"/"} className="py-4">
          <Image
            src={LezaLogo}
            alt="Leza award logo"
            height={70}
            width={70}
            className="aspect-square object-contain"
          />
        </Link>

        <p className="font-[500] text-[30px] hidden md:block">Leza Award</p>
      </div>
      <div className="flex gap-2 md:gap-4">
        <Link
          href={"/"}
          className="font-[500] text-[20px] hover:cursor-pointer hover:bg-[#00094B] hover:text-white rounded-full duration-700 px-2 md:px-4 py-2 md:shadow-md"
        >
          Home
        </Link>
        <p className="font-[500] text-[20px] px-4 py-2 hidden md:block">|</p>
        <Link
          href={"/#cat"}
          className="font-[500] text-[20px] hover:cursor-pointer hover:bg-[#00094B] hover:text-white rounded-full duration-700 px-2 md:px-4 py-2 md:shadow-md"
        >
          Category
        </Link>
      </div>
    </nav>
  )
}

export default Header
