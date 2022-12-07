import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => {
  let logos = [airbnb, binance, coinbase, dropbox];
  return (
    <div className="flex justify-around items-center mt-10 mx-20">
      {logos.map((el, i) => (
        <img
          src={el}
          alt={`${logos} ${i}`}
          className={`w-[18%] ${i == 2 ? "mb-[0.32rem]" : null}`}
        />
      ))}
    </div>
  );
};

export default Clients;
