import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { allIcons } from "../../data/All-Icons";
import sliderimg from "../../assets/Image (1).png";

const Hero = () => {
  const { cart } = allIcons;
  return (
    <div className="h-[30dvh] sm:h-[60dvh]  lg:h-[90dvh] top-[107px] bg-gr1">
      {/* vertical slider */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="relative flex justify-center items-center h-full">
          <div className="absolute z-10 h-[150px] w-[200px] lg:w-[556px] lg:h-[238px] lg:top-[182px] lg:left-[200px] ">
            <h1 className="lg:text-5xl font-semibold lg:leading-[66px]">
              Personalized Eyeglass Shopping
            </h1>
            <button className="flex justify-center items-center text-lg text-text1 bg-textH1 lg:w-[184px] lg:h-[54px] gap-3 rounded mt-[66px]">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              src={sliderimg}
              alt="img"
              className="h-[202px] lg:h-[513px]  top-[40px] lg:left-[533px] absolute"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
