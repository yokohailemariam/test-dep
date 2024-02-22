import { AwardLogo, Logo } from "@/lib/utils/assets"
import { FooterLogos } from "@/lib/utils/constants"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <>
      <div className="h-[400px] bg-gray-300 overflow-hidden">
        <div className="flex h-[400px] items-center justify-center gap-2 md:gap-10">
          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={Logo}
              alt="leza award logo"
              height={80}
              width={70}
              className="  opacity-25"
              style={{ width: "auto" }}
            />
          ))}

          <Image
            src={AwardLogo}
            alt="leza award logo"
            height={300}
            width={250}
            className="aspect-square object-cover"
            style={{ width: "auto" }}
          />

          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={Logo}
              alt="leza award logo"
              height={80}
              width={70}
              className="  opacity-25"
              style={{ width: "auto" }}
            />
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="py-6  bg-[#00094B] px-4 md:p-10 md:px-12">
        <div className="flex flex-col md:flex-row text-white ">
          <div className="py-4 md:w-1/2">
            <p className="text-[25px]">About</p>
            <br />
            <p className=" font-[400] text-[5vw] md:text-[1.2vw] md:pr-8 text-justify">
              LEZA award stands for the theme of “we all have a role”, yes, we
              all have a role in contributing for the growth of our nation in
              different categories. Ours goes to arts; we rank Music albums,
              artists, TV services and lifetime achievement and award the best
              ranked by the direct engagement of the viewers via technology.
            </p>
          </div>
          <div className="flex justify-center ">
            <Image
              src={AwardLogo}
              alt="leza award logo"
              height={200}
              width={200}
              className="aspect-square object-cover hidden"
              style={{ width: "auto" }}
            />
            <Image
              src={AwardLogo}
              alt="leza award logo"
              height={160}
              width={160}
              className="aspect-square object-cover"
              style={{ width: "auto" }}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <p className="py-4 text-[25px]">Follow us on</p>
              </div>
              <div className="flex overflow-x-scroll py-4 hide-scroll-bar scrollbar-thin scrollbar-thumb-white scrollbar-track-[#ECECEC] justify-center">
                <div className="flex gap-8 md:gap-32">
                  {FooterLogos.map((logo) => (
                    <Link key={logo.alt} href={logo.url} target="_blank">
                      <Image
                        key={logo.alt}
                        src={logo.image}
                        alt={logo.alt}
                        width={30}
                        height={30}
                        className="aspect-square"
                        style={{ width: "auto" }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/privacy">
                <p className="py-4 rounded-full  text-[16px]  hover:text-slate-400  transition-all duration-300  hover:px-4 px-4">
                  Privacy policy
                </p>
              </Link>
              <p className="py-4">© 2023 Leza Award</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
