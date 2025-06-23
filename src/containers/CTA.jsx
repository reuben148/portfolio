import React from "react";

function CTA() {
  const technologies = [
    { name: "HTML", color: "text-orange-500" },
    { name: "CSS3", color: "text-blue-500" },
    { name: "Tailwind CSS", color: "text-cyan-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "React.js", color: "text-blue-300" },
    { name: "Git & GitHub", color: "text-pink-400" },
    { name: "Solidity", color: "text-green-400" },
  ];

  return (
    <div className=" py-10 px-6 md:px-10">
      <div>
        <p className="text-5xl font-semibold text-white mb-8">Technologies</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#111827] p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className={`text-lg font-medium ${tech.color}`}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CTA;
