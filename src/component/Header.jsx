import React from "react";
import Button from "../containers/Button";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-5 py-8 gap-6 bg-[#00040f]">
      <div className="flex-1">
        <h1 className="font-bold text-[32px] md:text-[44px] lg:text-[48px] leading-[130%] tracking-[0.01em] text-white mt-4 md:mt-16">
          Hey there, I’m <span className="text-cyan-400">Reuben Luka</span>
          <br />
          Crafting interfaces & coding <br /> smart contracts with purpose.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mt-4 font-mono">
          I design interactive, responsive web apps as a{" "}
          <span className="text-cyan-400 font-medium">Frontend Developer</span>,
          and engineer secure, efficient smart contracts on the blockchain.
          Let's build intuitive, user-focused digital products—together.
        </p>
        <Button />
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="port.png"
          alt="Portfolio illustration"
          className="w-full md:w-[300px] lg:w-[400px] object-contain rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default Header;
