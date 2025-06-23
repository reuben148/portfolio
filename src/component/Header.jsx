import React from "react";
import Button from "../containers/Button";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-5 py-8 gap-6 ">
      <div className="flex-1">
        <h1 className="font-serif text-[32px] md:text-[44px] lg:text-[48px] leading-[130%] tracking-[0.01em] text-white mt-4 md:mt-16">
          Hey there, <br></br> I’m Reuben Luka
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mt-4 font-mono">
          A Frontend Developer & <br></br> Design Enthusiast
        </p>
        <Button />
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="port.svg"
          alt="Portfolio illustration"
          className="w-full md:w-[300px] lg:w-[400px] object-contain rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default Header;
