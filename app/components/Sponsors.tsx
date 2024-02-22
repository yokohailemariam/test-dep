import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import useSponsors from "./Hooks/useSponsors";
import Image from "next/image";
import LoadingSpinner from "./Loading";

export default function App() {
  const { sponsors, status } = useSponsors();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center my-10 px-4">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <p className="text-center text-2xl mb-4 text-black mt-6">Our Sponsors</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="my-10"
      >
        {status === "idle" &&
          sponsors.map((sponsor, index) => {
            return (
              <SwiperSlide key={sponsor.id}>
                <Image
                  width={1920}
                  height={1080}
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="rounded-md aspect-auto object-contain"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
