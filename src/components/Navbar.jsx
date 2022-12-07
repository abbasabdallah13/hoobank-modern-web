import React, { useState } from "react";
import { navLinks } from "../constants/index.js";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex py-6  items-center navbar ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]  " />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-center items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain ml-16 absolute right-10"
          onClick={() => {
            setToggle((t) => !t);
          }}
        />
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[2]`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((link, index) => (
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === link.title ? "text-white" : "text-purple-300"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive(link.title)}
              key={link.id}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
