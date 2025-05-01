import React from "react";

function Button() {
  return (
    <div className="px-2 py-6">
      <a
        href="https://x.com/reubenluka555"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
          Learn More
        </button>
      </a>
    </div>
  );
}

export default Button;
