import React from "react";
import { allIcons } from "../../data/All-Icons";
import logo from "../../../public/Logo.png";

const Footer = () => {
  const { instagram, linkedin, twitter } = allIcons;
  return (
    <footer className="hidden md:block absolute top-[4000px]">
      {/* footer elements */}
      <seciton className="flex justify-center items-center gap-44">
        <div>
          <img src={logo} alt="logo" className="w-32" />
          <p className="text-balance text-sm w-[328px] mt-6">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="flex gap-5 mt-5">
            <a
              href="#"
              className="border border-crm1 rounded-full text-base p-2"
            >
              {linkedin}
            </a>
            <a
              href="#"
              className="border border-crm1 rounded-full text-base p-2"
            >
              {instagram}
            </a>
            <a
              href="#"
              className="border border-crm1 rounded-full text-base p-2"
            >
              {twitter}
            </a>
          </div>
        </div>

        {/* links division */}
        <div className=" text-textH1 flex gap-[127px]  ">
          {/* support */}
          <div>
            <h1 className="font-bold mb-5">Support</h1>
            <ul className="text-xs flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Product FAQs</li>
              <li>Company Support</li>
              <li>Manage Account</li>
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h1 className="font-bold mb-5">Quick Links</h1>
            <ul className="text-xs flex flex-col gap-2">
              <li>About Us</li>
              <li>Blog Post</li>
              <li>Product Features</li>
              <li>Company Info</li>
              <li>Company Info</li>
            </ul>
          </div>

          {/* community */}
          <div>
            <h1 className="font-bold mb-5">Community</h1>
            <ul className="text-xs flex flex-col gap-2">
              <li>Become an Affliate</li>
              <li>Help Center</li>
              <li>Product FAQs</li>
              <li>Our Forums</li>
              <li>Product API</li>
            </ul>
          </div>
        </div>
      </seciton>

      {/* copyright section */}
      <seciton>
        <div className="border-b my-6 border-b-crm1 opacity-[50%] "></div>
        <div className="text-xs text-textH1 flex justify-between my-8 items-center">
          <p>Copyright © 2023 All rights reserved by Eyeglass</p>
          <div className="flex items-center gap-12">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </seciton>
    </footer>
  );
};

export default Footer;
