import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { iconMap } from "../data/skillIcons";

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    );

    const elements = document.querySelectorAll(".skill-item");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-screen py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="h-auto sm:h-32 mb-6 sm:mb-0">
        <h1 className="w-full text-center text-3xl sm:text-5xl md:text-6xl font-semibold">
          Technical Expertise
        </h1>
        <p className="w-full text-center text-indigo-200 text-sm sm:text-base mt-2 mb-6 sm:mb-8">
          My Skills & Capabilities
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={skill.id}
              data-index={index}
              className={`skill-item transition-all duration-700 ease-out ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transform: visibleItems.has(index)
                  ? `rotate(${(index % 2 === 0 ? -1 : 1) * (2 + (index % 3))}deg)`
                  : "rotate(0deg)",
              }}
            >
              <div
                title={skill.name}
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl px-6 py-8 flex flex-col items-center justify-center gap-3 h-full hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 border-2 border-indigo-500/30"
              >
                <img
                  src={iconMap[skill.icon]}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-base sm:text-lg md:text-xl text-white font-medium text-center">
                  {skill.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
