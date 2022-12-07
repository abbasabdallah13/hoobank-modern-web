import React from "react";
import { star, shield, send } from "../assets";
import { features } from "../constants";
import styles from "../style";

const Business = () => {
  return (
    <section className="bg-primary mx-5 md:mx-20 flex flex-col md:flex-row md:justify- md:items-around justify-around items-center  md:h-[483px] mt-10">
      <div className="flex flex-col justify-around items-center md:items-start w-[100%] h-[443px] md:h-[443px]  order-2 md:order-1">
        <h1 className="text-white text-center md:text-left font-poppins font-normal font-semibold md:text-[2rem] text-[2.5rem] leading-[160%]">
          You do the business, <br />
          we’ll handle the money.
        </h1>
        <p className="text-dimWhite text-justify md:w-[440px] w-[80%] leading-[170%]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-blue-gradient flex justify-center items-center w-[170px] h-[54px] rounded-[10px] font-poppins font-normal md:text-[0.7rem] ">
          Get Started
        </button>
      </div>
      <div className="order-1 md:order-2 mt-10 md:mt-0 flex justify-center ">
        <div className="">
          {features.map((el, i) => (
            <div
              key={el.id}
              className={`flex items-center justify-around py-6 mx-4 md:py-2 md:mx-0 text-white ${
                i === 0 ? null : "md:mt-6"
              } ${i === 1 ? "bg-black-gradient-2" : null} rounded-[20px] `}
            >
              <div
                className={`p-4 rounded-full bg-dimBlue flex ${styles.flexCenter} ml-4`}
              >
                <img className="max-w-full" src={el.icon} alt={el.icon} />
              </div>

              <div className="flex flex-col ml-6 font-poppins font-normal py- px-2">
                <p className="font-semibold text-[1rem]  md:text-[0.7rem]">
                  {el.title}
                </p>
                <p className=" text-dimWhite text-[0.8rem] md:text-[0.6rem]">
                  {el.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
