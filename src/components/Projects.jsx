import { portfolioData } from "../data/portfolioData";
import synapseLogo from "url:../../public/assets/projects/synapse.png";
import smashRallyLogo from "url:../../public/assets/projects/smashrally.png";
import trademasterLogo from "url:../../public/assets/projects/trademasterlab.png";


const Projects = () => {

  const logoMap = {
    "synapse.png": synapseLogo,
    "smashrally.png": smashRallyLogo,
    "trademasterlab.png": trademasterLogo
  };

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
          {portfolioData.projects.map((project) => {
            
            return (
              <div 
                key={project.id} 
                className="z-2 overflow-hidden relative hover:cursor-pointer group bg-black/90 rounded-2xl border border-white/20 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top Section: Text */}
                <div className="pt-8 px-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-500 transition-colors">
                    {project.name}
                  </h3>
                  
                  {/* Category */}
                  <div className="absolute top-2 right-2">
                    
                    <span 
                        className={`bg-[${project.categoryBg}] text-white px-3 py-1 rounded-full text-sm font-bold`}
                      >
                        {project.category}
                      </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.Tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-indigo-500/50  px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Links */}
                  <div className="flex gap-4 mb-4">
                    <a
                      href={project.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-bold"
                    >
                      Live →
                    </a>
                  </div>
                </div>
                
                {/* Bottom Section: Image */}
                <div className="w-full">
                  <img 
                    src={logoMap[project.logo]}
                    alt={project.name}
                    className=" w-full object-cover transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};
export default Projects;
