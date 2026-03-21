import React, { useRef, useCallback } from "react";

const ProjectCard = ({ project, logoMap }) => {
  const imageContainerRef = useRef(null);
  const rafIdRef = useRef(null);

  const stopAnimation = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  const smoothScrollToBottom = useCallback(() => {
    stopAnimation();
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const start = container.scrollTop;
    const end = container.scrollHeight - container.clientHeight;
    const duration = 5000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = -(Math.cos(Math.PI * progress) - 1) / 2;
      container.scrollTop = start + (end - start) * eased;

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  }, [stopAnimation]);

  const smoothScrollToTop = useCallback(() => {
    stopAnimation();
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const start = container.scrollTop;
    const end = 0;
    const duration = 4200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = Math.sin((progress * Math.PI) / 2);
      container.scrollTop = start + (end - start) * eased;

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  }, [stopAnimation]);

  return (
    <div
      className="z-2 overflow-hidden relative hover:cursor-pointer group bg-black/90 rounded-2xl border border-white/20 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={smoothScrollToBottom}
      onMouseLeave={smoothScrollToTop}
    >
      {/* Top Section: Text */}
      <div className="pt-8 px-8">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-500 transition-colors">
          {project.name}
        </h3>

        {/* Category */}
        <div className="absolute top-[-03] right-0">
          <span
            style={{ backgroundColor: project.categoryBg }}
            className="text-white px-3 py-2 rounded-bl-lg text-xs font-bold"
          >
            {project.category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.Tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-indigo-500/50 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mb-6 leading-relaxed">{project.desc}</p>

        {/* Links */}
        <div className="flex gap-4 mb-4">
          <a
            href={project.gitRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-bold"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-bold"
          >
            Live ↗
          </a>
        </div>
      </div>

      {/* Bottom Section: Image */}
      <div
        ref={imageContainerRef}
        className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden scrollbar-hide"
      >
        <img
          src={logoMap[project.logo]}
          alt={project.name}
          className="w-full h-auto min-h-[150%]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
