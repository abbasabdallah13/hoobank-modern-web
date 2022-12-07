import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="mx-20 flex flex-col sm:flex-row sm:items-center justify-around ">
      {stats.map((el, i) => (
        <div
          key={el.id}
          className="flex justify-center sm:justify-around items-center flex-col sm:flex-row py-4 bottom-halfborder sm:after:hidden"
        >
          <p className="text-white font-poppins font-semibold text-[1.7rem] sm:text-[1.4rem] sm:mr-2 md:mr-5 order-2 sm:order-1  ">
            {el.value}
          </p>
          <p className="font-poppins font-normal text-gradient text-[1.2rem] sm:text-[0.7rem] uppercase order-1 sm:order-2 ">
            {el.title}
          </p>
          {i !== stats.length - 1 ? (
            <p className="text-white  hidden md:block order-3 md:ml-[2rem]">
              |
            </p>
          ) : null}
        </div>
      ))}
    </section>
  );
};

export default Stats;
