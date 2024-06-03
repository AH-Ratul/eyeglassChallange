import React from "react";
import img1 from "../../assets/Image (5).png";
import img2 from "../../assets/Image (4).png";
import img3 from "../../assets/Image (2).png";
import img4 from "../../assets/Image (3).png";
import BannerCard from "../Cards/BannerCard/BannerCard";

const Banner = () => {
  return (
    <section className="absolute lg:flex justify-center items-center gap-5 top-[390px] sm:top-[590px] md:top-[690px] lg:top-[880px] mx-12 lg:mx-[200px] ">
      <div className="flex flex-col gap-5 mb-4 lg:mb-0 ">
        <BannerCard
          img={img1}
          title={"Bravo Sunglasses"}
          sale={"Up to 80% off on selected Item"}
        />
        <BannerCard
          img={img2}
          title={"John Jacobs"}
          sale={"Up to 40% off on selected Item"}
        />
      </div>
      <div className="flex flex-col gap-5">
        <BannerCard
          img={img3}
          title={"Tomy Hilfiger"}
          sale={"Up to 30% off on selected Item"}
        />
        <BannerCard
          img={img4}
          title={"Vincent Chase"}
          top={270}
          sale={"Up to 10% off on selected Item"}
        />
      </div>
    </section>
  );
};

export default Banner;
