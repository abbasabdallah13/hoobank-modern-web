import React from "react";

const CTA = () => {
  return (
    <section className="flex md:flex-row flex-col  mx-20 bg-black-gradient-2 mt-10 p-8 rounded-lg">
      <div className="flex flex-col md:justify-around md:items-start items-center justify-center  text-white md:flex-2">
        <h1 className="font-poppins font-semibold font-white text-[1.7rem] text-center">
          Let’s try our service now!
        </h1>
        <p className="text-dimWhite text-[0.8rem] text-justify mt-6 md:w-[60%] w-[80%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center md:flex-1 mt-6">
        <button className="bg-blue-gradient text-black flex justify-center items-center w-[80%] max-w-[170px] md:w-[170px] h-[12vh] max-h-[54px] rounded-[10px] font-poppins font-normal md:text-[0.7rem]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
