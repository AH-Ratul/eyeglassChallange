import React from "react";

const BannerCard = ({ img, title, top, sale }) => {
  return (
    <div className="  ">
      <div className="flex justify-center relative">
        <img src={img} alt="img" className="object-cover w-full h-full" />
        <div
          className={`absolute h-[130px] w-[250px] sm:h-[152px] sm:w-[290px] flex flex-col items-center justify-center bg-text1 z-10   text-textH1 rounded bottom-[5px] lg:bottom-[30px]`}
        >
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm">{sale}</p>
          <button className="bg-textH1 text-text1 px-4 py-1 text-sm rounded mt-5">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
