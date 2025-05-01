import React from "react";

const projectData = [
  {
    title: "Hoo Bank",
    description: "A sleek, responsive landing page with modern UI components.",
    stack: ["React", "Tailwind", "JavaScript"],
    url: "https://hoo-ban-ncel.vercel.app/",
    github: "https://github.com/reuben148/hoo-ban",
    img: "/images/flipit.png",
  },
  {
    title: "Modern Landing Page",
    description: "A sleek, responsive landing page with modern UI components.",
    stack: ["React", "Tailwind", "JavaScript"],
    url: "https://gpt-3-9tza.vercel.app/",
    github: "https://github.com/reuben148/gpt-3",
    img: "/images/landing.png",
  },
  {
    title: "Lunch App",
    description: "A collaborative lunch-management app with intuitive routing.",
    stack: ["React", "Tailwind", "JavaScript"],
    url: "https://github.com/Akanimoh12/Lunch-App-Project.git",
    github: "https://github.com/reuben148/lunch-app",
    img: "/images/lunch.png",
  },
  {
    title: "Flight Search App",
    description: "Search and view flights with API integration and React.",
    stack: ["React", "APIs", "Tailwind"],
    url: "https://flight-4lc1.vercel.app",
    github: "https://github.com/reuben148/flight-project",
    img: "/images/flight.png",
  },
];

function Projects() {
  return (
    <section className="py-12 px-4 bg-[#00040f]">
      <p className="text-5xl font-semibold text-white mb-8">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#11121a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-cyan-500 bg-opacity-20 text-cyan-400 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 rounded-lg text-white hover:opacity-90 transition"
                >
                  Live
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium border border-gray-600 px-4 py-2 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
