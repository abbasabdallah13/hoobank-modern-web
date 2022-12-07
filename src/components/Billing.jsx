import React from "react";
import apple from "../assets/applepng.png";
import google from "../assets/googleplay.png";
import bill from "../assets/bill.png";

const Billing = () => {
  return (
    <section className="mx-20 flex flex-col sm:flex-row sm:justify-around items-center mt-10 text-white ">
      <div className="flex flex-col items-center sm:items-start text-white flex-1">
        <h1 className="font-poppins font-semibold text-[30px] text-center sm:text-left ">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-dimWhite text-justify sm:text-left leading-[170%]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex mt-4">
          <button className="flex items-center bg-black  h-fit ">
            <div className="store-logo">
              <img src={apple} alt="store" className="max-w-[30px]" />
            </div>
            <div className="xs:block hidden">
              <p className="text-[9px] ">Download on the</p>
              <p className="text-[12px]">App Store</p>
            </div>
          </button>
          <button className="flex items-center bg-black  h-[43px] ml-5 px-4 py-4">
            <div className="store-logo">
              <img src={google} alt="store" className="max-w-[30px] " />
            </div>
            <div className="xs:block hidden">
              <p className="text-[9px] ">GET IT ON</p>
              <p className="text-[12px]">Google Play</p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center ">
        <img
          src={bill}
          alt="bill"
          className="mt-[3rem] flex-1 w-[100%] max-w-[400px] sm:max-w-[500px] "
        />
      </div>
    </section>
  );
};

export default Billing;
