import React from "react";
import logo from "../../../public/Logo.png";
import { allIcons } from "../../data/All-Icons";

const Header = () => {
  const { cart, person } = allIcons;
  
  return (
    <main className="lg:flex hidden items-center justify-between my-[30px] mx-[90px] w-[1620px h-[47px]">
      <section>
        <img src={logo} alt="logo" srcset="" className="h-[47px] w-[194px]" />
      </section>

      {/* Menu  */}
      <section>
        <ul className="flex items-center gap-[30px] text-textH1">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Features</li>
          <li>Reviews</li>
          <li>Contact Us</li>
        </ul>
      </section>

      {/* cart and profile */}
      <section className="flex items-center gap-5 text-textH1">
        <div>{cart}</div>
        <div>{person}</div>
      </section>
    </main>
  );
};

export default Header;
