import React from "react";
import img6 from "../../assets/Image (6).png";

const About_Us = () => {
  return (
    <main className="absolute flex flex-col-reverse lg:flex-row top-[1670px] lg:top-[1900px] text-textH1">
      <div className="bg-crm1 p-9 lg:p-40">
        <div className=" ">
          <h1 className="font-bold text-2xl lg:text-3xl mb-6">
            Experience clear vision with OptiChroma Vision Frames
          </h1>
          <p className="text-justify">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That's why we've designed a collection of frames
            that prioritize both form and function.
          </p>
          <p className="mt-4 text-justify mb-8">
            Our team of experts is dedicated to helping you find the perfect
            pair of glasses.
          </p>
          <button className="bg-textH1 px-9 py-2 text-white rounded font-semibold">
            About Us
          </button>
        </div>
      </div>
      <div>
        <img src={img6} alt="img6" className="lg:w-[1500px] lg:h-full" />
      </div>
    </main>
  );
};

export default About_Us;
