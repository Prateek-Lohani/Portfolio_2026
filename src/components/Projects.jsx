import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../data/portfolioData";
import synapseLogo from "url:../../public/assets/projects/synapse.png";
import smashRallyLogo from "url:../../public/assets/projects/smashrally.png";
import trademasterLogo from "url:../../public/assets/projects/trademasterlab.png";

const logoMap = {
  "synapse.png": synapseLogo,
  "smashrally.png": smashRallyLogo,
  "trademasterlab.png": trademasterLogo
};


 const Projects = () => {

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="h-auto sm:h-32 mb-6 sm:mb-0">
        <h1 className="w-full text-center text-3xl sm:text-5xl md:text-6xl font-semibold">
          Project Showcase
        </h1>
        <p className="w-full text-center text-indigo-200 text-sm sm:text-base mt-2 mb-6 sm:mb-8">
          Curated Works & Technical Projects
        </p>
      </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} logoMap={logoMap} />
          ))}
        </div>
    </section>
  );
};
export default Projects;
