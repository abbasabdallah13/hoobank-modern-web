import React from "react";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="mx-20 flex flex-col sm:flex-row sm:justify-around items-center mt-10 text-white ">
      <div className="flex flex-col items-center sm:items-start text-white flex-1">
        <h1 className="font-poppins font-semibold text-[30px] text-center sm:text-left ">
          Find a better card deal in few easy steps.{" "}
        </h1>
        <p className="text-dimWhite text-justify sm:text-left leading-[170%]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div className="flex mt-4">
          <button className="bg-blue-gradient text-black flex justify-center items-center w-[170px] h-[54px] rounded-[10px] font-poppins font-normal md:text-[0.7rem]">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center ">
        <img
          src={card}
          alt="bill"
          className="mt-[3rem] flex-1 w-[100%] max-w-[400px] sm:max-w-[500px] "
        />
      </div>
    </section>
  );
};

export default CardDeal;
