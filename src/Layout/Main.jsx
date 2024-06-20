import React from "react";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header_sm";
import Hero from "../components/Hero/Hero";
import Bottomhero from "../components/Hero/Bottom_hero";
import Banner from "../components/Banner/Banner";
import About_Us from "../components/About/About_Us";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import Footer_sm from "../components/Footer/Footer_sm";

const Main = () => {
  return (
    <div className="min-h-[100dvh] relative">
      {/* Header section */}
      <section>
        <Header />
        {/* responsive header */}
        <HeaderSm />
      </section>

      {/* Body Section */}
      <section>
        <Hero />
        <div className="flex justify-center">
          <Bottomhero />
        </div>
        <Banner />
        <About_Us />
        <Products />
      </section>

      {/* Footer Section */}
      <section>
        <div className="flex justify-center">
          <Footer />
        </div>
        {/* responsive footer */}
        <Footer_sm />
      </section>
    </div>
  );
};

export default Main;
