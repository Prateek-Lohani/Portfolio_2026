import { useEffect, useRef, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import infyLogo from "url:../assets/companies/infy.png";
import tcsLogo from "url:../assets/companies/tcs.png";
import hashedInLogo from "url:../assets/companies/hashedin-logo.png";

const Experience=()=>{
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
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
        rootMargin: '0px'
      }
    );

    const elements = document.querySelectorAll('.experience-item');
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


  const logoMap = {
  "infy.png": infyLogo,
  "tcs.png": tcsLogo,
  "hashedin-logo.png": hashedInLogo,
};

    return (
    <div id="experience" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="h-32">
        <h1 className="w-full text-center text-6xl font-semibold">Work Experience</h1>
        <p className="w-full text-center text-indigo-200 mt-2 mb-8">My Professional Journey</p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              data-index={index}
              className={`experience-item transition-all duration-700 ease-out ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-lg px-8 py-4">
                <h2 className="text-2xl text-white">
                  {exp.designation} <span className=" font-light">{exp.company}</span>
                </h2>
              </div>

              <div className="rounded-b-lg">
                <div className="px-8 py-6">
                  <div className="flex items-center justify-between text-sm text-indigo-200 mb-6 pb-6 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <span>{exp.location}</span>
                    </div>
                    <div>
                      <span>{exp.from} - {exp.to}</span>
                    </div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-indigo-400 transition-colors"
                    >
                      {exp.website}
                    </a>
                  </div>

                  {/* Description */}
                  <div className="flex gap-8 flex-col md:flex-row">
                    <div className="flex-1">
                      <p className="text-gray-300 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 w-48 h-32 rounded-lg flex items-center justify-center">
                        <img 
                       src={logoMap[exp.logo]} className="object-contain max-w-full max-h-full"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>


    )
}

export default Experience;