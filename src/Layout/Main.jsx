import React from "react";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header_sm";
import Hero from "../components/Hero/Hero";

const Main = () => {
  return (
    <div className="min-h-[100dvh] relative">
      {/* Header section */}
      <section>
        <Header />
        <HeaderSm />
      </section>

      {/* Body Section */}
      <section>
        <Hero />
      </section>
    </div>
  );
};

export default Main;
