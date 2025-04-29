import React from "react";

function Header() {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-[36px] md:text-[48px] leading-[130%] tracking-[0.01em] text-white mt-16 px-4 py-6">
          Hey there, I’m <span className="text-cyan-400">Reuben Luka</span>
          <br />
          Crafting interfaces & coding <br /> smart contracts with purpose.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl px-4 font-mono">
          I design interactive, responsive web apps as a{" "}
          <span className="text-cyan-400 font-medium">Frontend Developer</span>,
          and engineer secure, efficient smart contracts on the blockchain.
          Let's build intuitive, user-focused digital products—together.
        </p>
      </div>
    </div>
  );
}

export default Header;
