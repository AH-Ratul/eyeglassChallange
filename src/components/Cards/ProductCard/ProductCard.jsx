import React from "react";
import { allIcons } from "../../../data/All-Icons";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../../Hero/module.css";

const ProductCard = ({ item }) => {
  const { price, productName, image, afterSalePrice, productSale } = item;
  const { love } = allIcons;

  return (
    <main className="px-2 text-textH1">
      <section className="px-8">
        <div className="w-[320px] overflow-hidden">
          {/* horizontal slider */}
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={false}
            modules={[Pagination, Autoplay]}
            className="h-full w-full"
          >
            <SwiperSlide className="relative bg-gr3 h-[350px] flex  justify-center items-center w-80">
              <div className="flex justify-between items-center  absolute top-0 w-full px-5">
                {productSale > 0 ? (
                  <div className="absolute top-[30px] text-base font-semibold bg-crm1 h-12 w-12 flex justify-center items-center rounded-full">
                    {productSale}%
                  </div>
                ) : (
                  ""
                )}
                <div className="absolute top-[30px] right-[30px] border border-gr2 h-12 w-12 flex justify-center items-center text-2xl rounded-full">
                  {love}
                </div>
              </div>
              <div className="w-[280px] absolute mx-auto">
                <img src={image} alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* details */}
        <div className="my-5">
          <h1 className="font-semibold text-xl">{productName}</h1>
          <p className="font-bold my-3">
            {afterSalePrice ? `$${afterSalePrice}` : ""}{" "}
            <span className={afterSalePrice ? "text-gray-400 font-normal" : ""}>
              ${price}
            </span>
          </p>
          <a href="#" className="underline text-base">
            Add To Cart
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProductCard;
