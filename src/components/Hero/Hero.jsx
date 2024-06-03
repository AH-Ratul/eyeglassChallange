import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./module.css";
import { allIcons } from "../../data/All-Icons";
import sliderimg from "../../assets/Image (1).png";

const Hero = () => {
  const { cart } = allIcons;
  return (
    <div className="h-[30dvh] sm:h-[60dvh] lg:h-[90dvh]  flex justify-center items-center overflow-hidden bg-gr1">
      {/* vertical slider */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="relative flex justify-center items-center h-full">
          <div className="absolute z-10 h-[80px] top-[80px] left-[35px] w-[200px] lg:w-[556px] lg:h-[240px] lg:top-[196px] lg:left-[220px] ">
            <h1 className="lg:text-5xl text-xl font-semibold lg:leading-[66px]">
              Personalized Eyeglass Shopping
            </h1>
            <button className="flex justify-center items-center  px-[10px] py-2 text-xs md:text-lg text-text1 bg-textH1 lg:w-[184px] lg:h-[54px] gap-3 rounded mt-5 md:mt-[66px]">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              src={sliderimg}
              alt="img"
              className="absolute h-[80%]  bottom-0 lg:h-[90%] lg:left-[533px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center h-full">
          <div className="absolute z-10 h-[80px] top-[80px] left-[35px] w-[200px] lg:w-[556px] lg:h-[240px] lg:top-[196px] lg:left-[220px] ">
            <h1 className="lg:text-5xl text-xl font-semibold lg:leading-[66px]">
              Personalized Eyeglass Shopping
            </h1>
            <button className="flex justify-center items-center  px-[10px] py-2 text-xs md:text-lg text-text1 bg-textH1 lg:w-[184px] lg:h-[54px] gap-3 rounded mt-5 md:mt-[66px]">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              src={sliderimg}
              alt="img"
              className="absolute h-[80%]  bottom-0 lg:h-[90%] lg:left-[533px] "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center h-full">
          <div className="absolute z-10 h-[80px] top-[80px] left-[35px] w-[200px] lg:w-[556px] lg:h-[240px] lg:top-[196px] lg:left-[220px] ">
            <h1 className="lg:text-5xl text-xl font-semibold lg:leading-[66px]">
              Personalized Eyeglass Shopping
            </h1>
            <button className="flex justify-center items-center  px-[10px] py-2 text-xs md:text-lg text-text1 bg-textH1 lg:w-[184px] lg:h-[54px] gap-3 rounded mt-5 md:mt-[66px]">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              src={sliderimg}
              alt="img"
              className="absolute h-[80%]  bottom-0 lg:h-[90%] lg:left-[533px] "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
