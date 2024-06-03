import React from "react";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header_sm";
import Hero from "../components/Hero/Hero";
import Bottomhero from "../components/Hero/Bottom_hero";
import Banner from "../components/Banner/Banner";
import About_Us from "../components/About/About_Us";
import Products from "../components/Products/Products";

const Main = () => {
  return (
    <div className="min-h-[100dvh] relative">
      {/* Header section */}
      <section>
        <Header />
        <HeaderSm />
      </section>

      {/* Body Section */}
      <section >
        <Hero />
        <div className="flex justify-center">
        <Bottomhero />
        </div>
        <Banner />
        <About_Us />
        <Products />
      </section>
    </div>
  );
};

export default Main;
