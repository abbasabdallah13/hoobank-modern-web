import React from "react";
import style from "../style";
import { discount, robot } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col justify-between ${style.paddingY}   relative  `}
    >
      <div className="flex flex-col md:ml-20 xs:mx-20 mx-5 md:mx-0 justify-center align-center mb-14">
        <div className="flex font-poppins font-normal items-center justify-around bg-discount-gradient rounded-[10px] px-4 py-5 md:text-[0.8rem]  text-[0.68rem] w-[65%] xs:w-[70%] ss:w-[55%] sm:w-[40%] md:w-[400px] h-[40px] mb-5">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`text-white ml-2 text-center`}>
            20% Discount for 1 Month Account
          </p>
        </div>
        <div className=" text-white ss:text-[48px] text-[36px] font-poppins font-semibold text-center md:text-left">
          <h1 className="">The Next</h1>
          <h1 className="text-gradient">Generation</h1>
          <p>Payment Method</p>
        </div>
        <p
          className={`w-[100%] md:w-[483px] md:text-left text-center ${style.paragraph} mt-10`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="relative md:block hidden">
        <img
          src={robot}
          alt="robot"
          className="  md:h-[500px] md:w-[550px] w-[50%]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 right-0 " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="ss:flex hidden justify-center items-center absolute ss:right-[4.5rem] ss:top-[100px] sm:right-[4.5rem] sm:top-[140px]  md:top-[150px] md:left-[460px] ss:w-[6.5rem] ss:h-[6.5rem] sm:w-[7rem] sm:h-[7rem]   md:w-[140px] md:h-[140px] border-2 border-secondary rounded-full ">
        <p className="text-gradient font-semibold ">
          Get &nbsp;
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-white"
            transform={{ rotate: 50 }}
          />
          <br />
          Started
        </p>
      </div>
    </section>
  );
};

export default Hero;
