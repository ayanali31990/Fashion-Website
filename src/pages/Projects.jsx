import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/one.mp4",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/two.mp4",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/three.mp4",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/four.mp4",
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/five.mp4",
  },
  {
    id: 6,
    title: "Project 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/six.mp4",
  },
  {
    id: 7,
    title: "Project 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/seven.mp4",
  },
  {
    id: 8,
    title: "Project 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam provident impedit culpa officiis.",
    video: "/eight.mp4",
  },
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative">
      {/* Project Grid */}
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 gap-10 pt-[150px]">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedProject(project)}
            className="w-[400px] h-[250px] text-black rounded-2xl shadow-lg pt-0 hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center items-center cursor-pointer"
          >
            {hoveredIndex === index ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div>
                <video
                src={project.video}
                muted
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-[80%] max-w-3xl h-[70%] transform scale-100 transition-transform duration-300 ease-in-out relative flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-black"
            >
              ✕
            </button>

            <h1 className="text-3xl font-bold mb-4">{selectedProject.title}</h1>
            <video
              src={selectedProject.video}
              autoPlay
              muted
              loop
              controls
              className="w-full h-[60%] object-cover rounded-xl mb-4"
            />
            <p className="text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
