import React from "react";
import { allIcons } from "../../data/All-Icons";

const Bottomhero = () => {
  const { search, glasses, truck, payment } = allIcons;
  return (
    <main className="absolute top-[240px] lg:top-[580px] z-20 flex items-center gap-[20px] lg:gap-[30px]">
      {/* Search section */}
      <section className="flex flex-col items-center justify-center">
        <div className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-crm1 rounded-full flex justify-center items-center text-textH1 text-xl lg:text-2xl">
          {search}
        </div>
        <div className="hidden lg:block my-[10px] text-textH1  text-center">
          <h2 className="font-bold ">Search your sunglass</h2>
          <p className="text-xs mt-5">Shop Stylish Eyewear Now</p>
        </div>
      </section>

      {/* divider section */}
      <section className="flex items-center mt-[-7%]">
        <div className="lg:block hidden">---------------</div>
        <div className="hidden lg:block h-[15px] w-[15px] rounded-full bg-crm1"></div>
      </section>

      {/* glass section */}
      <section className="flex flex-col items-center justify-center">
        <div className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-crm1 rounded-full flex justify-center items-center text-xl lg:text-2xl">
          {glasses}
        </div>
        <div className="hidden lg:block my-[10px] text-textH1 text-center">
          <h2 className="font-bold ">Select Sunglass</h2>
          <p className="text-xs mt-5">Shade Your Style</p>
        </div>
      </section>

      {/* divider section */}
      <section className="flex items-center mt-[-7%]">
        <div className="lg:block hidden">---------------</div>
        <div className="hidden lg:block h-[15px] w-[15px] rounded-full bg-crm1"></div>
      </section>

      {/* payment section */}
      <section className="flex flex-col items-center justify-center">
        <div className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-crm1 rounded-full flex justify-center items-center text-xl lg:text-2xl">
          {payment}
        </div>
        <div className="hidden lg:block my-[10px] text-textH1 text-center">
          <h2 className="font-bold ">Make Payment</h2>
          <p className="text-xs mt-5">Shurely Checkout Now</p>
        </div>
      </section>

      {/* divider section */}
      <section className="flex items-center mt-[-7%]">
        <div className="lg:block hidden">---------------</div>
        <div className="hidden lg:block h-[15px] w-[15px] rounded-full bg-crm1"></div>
      </section>

      {/* truck section */}
      <section className="flex flex-col items-center justify-center">
        <div className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] bg-crm1 rounded-full flex justify-center items-center text-xl lg:text-2xl">
          {truck}
        </div>
        <div className="hidden lg:block my-[10px] text-textH1 text-center">
          <h2 className="font-bold ">Recieved Product</h2>
          <p className="text-xs mt-5">See the World Clearly</p>
        </div>
      </section>
    </main>
  );
};

export default Bottomhero;
