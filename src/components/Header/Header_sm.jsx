import React from "react";
import { allIcons } from "../../data/All-Icons";
import logo from "../../../public/Logo.png";
import { useToggle } from "../../hook/useToggle";

const HeaderSm = () => {
  const { menu, cart, person, cross } = allIcons;
  const [isOpen, _, Toggle] = useToggle();

  return (
    <main className="lg:hidden z-20  flex items-center justify-between relative my-4 mx-6">
      {/* Menu and toggle section */}
      <section className="relative">
        <div onClick={Toggle} className="text-textH1 text-4xl">
          {isOpen ? cross : menu}
        </div>
        {isOpen && (
          <section
            className={`fixed left-0 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-5000 ease-in-out font-semibold w-52 bg-crm1 p-4 mt-4 `}
          >
            <ul className="flex flex-col items-center text-textH1 gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Features</li>
              <li>Reviews</li>
              <li>Contact Us</li>
            </ul>
          </section>
        )}
      </section>

      {/* Logo */}
      <section>
        <img src={logo} alt="" srcset="" className="h-[28px]" />
      </section>

      {/* Cart and Person  */}
      <section className="flex items-center gap-5 text-textH1">
        <div>{cart}</div>
        <div>{person}</div>
      </section>
    </main>
  );
};

export default HeaderSm;
