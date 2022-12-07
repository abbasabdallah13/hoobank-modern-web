import React from "react";
import { footerLinks } from "../constants";
import { logo, instagram, facebook, twitter, linkedin } from "../assets";

const Footer = () => {
  return (
    <section className="mt-10 mx-10 flex flex-col">
      <div className="flex flex-col md:flex-row ">
        <div className="flex justify-around order-1 md:order-2 md:flex-1">
          {footerLinks.map((el) => (
            <div>
              <h1 className="font-poppins font-semibold text-[0.8rem] text-white">
                {el.title}
              </h1>
              <ul>
                {el.links.map((li) => (
                  <li className="text-dimWhite list-none no-underline text-[0.7rem]">
                    <a href={li.link}>{li.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center order-2 md:order-1 md:w-[40%] md:items-start">
          <img src={logo} alt="logo" className="w-[30%] max-w-[123px] mt-5" />
          <p className="text-dimWhite text-[0.8rem]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:border-t-[1px] border-dimWhite text-dimWhite mt-2">
        <p className="text-center md:text-left mt-2 mb-2 pt-1 order-2 md:order-1 border-t-[0.03rem] border-dimWhite md:border-0 text-[0.6rem] w-[100%]">
          <span className="inline md:hidden">&nbsp;</span>
          <span className="inline md:hidden">&nbsp;</span>Copyright 2021
          HooBank. All Rights Reserved.
          <span className="inline md:hidden">&nbsp;</span>
          <span className="inline md:hidden">&nbsp;</span>
        </p>
        <div className="flex justify-around w-[100%] max-w-[130px] mt-2 order-1 md:order-2 mb-2 ">
          <img src={instagram} />
          <img src={facebook} />
          <img src={twitter} />
          <img src={linkedin} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
