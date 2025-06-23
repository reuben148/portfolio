import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <i className="fa-solid fa-database fa-2x text-white"></i>
        <p className="text-white font-mono text-lg">Portfolio</p>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col md:flex-row text-xl gap-3 items-center mb-4 md:mb-0">
        <a href="#" className="text-white font-mono">
          Project
        </a>
        <a href="#" className="text-white font-mono">
          Technologies
        </a>
        <a href="#" className="text-white font-mono">
          About
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex ">
        <button className="w-[100px] h-[50px] bg-purple-500 text-white font-serif rounded-[10px]">
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
