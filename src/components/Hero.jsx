import AvailabilityBadge from "./AvailabilityBadge";

const Hero = () => {
  return (
    <section id="about" className="w-full min-h-screen py-[5%] sm:py-[8%] px-4 sm:px-[7%] flex flex-col justify-center">
      <AvailabilityBadge />
      <h2
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold w-full sm:w-[90%] md:w-[80%] lg:w-[70%] tracking-tight leading-[1.2] mt-10 sm:mt-0"
      >
        Crafting <br />
        <span className="text-indigo-600 text-shadow-current text-shadow-lg/25">Digital Experiences</span> <br />
        That Make an Impact
      </h2>
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-14 mt-8 sm:mt-10">
        <p className="text-sm sm:text-base md:text-lg w-full lg:w-[65%] text-gray-300">
          4.5 years of turning complex ideas into clean, high-performance web
          applications. Deep experience with React, Redux, and modern frontend
          architecture, focused on building intuitive interfaces that feel fast,
          polished, and purposeful.
        </p>
        <section className="flex items-center w-full sm:w-auto lg:w-[25%] justify-start sm:justify-center ">
          <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-800 shadow-[0px_6px_30px_0_rgba(99,102,241,.70)] px-6 sm:px-8 py-2 sm:py-3 rounded-xl border-[1px] border-slate-500 text-white text-sm sm:text-base font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                View Resume
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                View Resume
              </p>
            </div>
          </button>
        </section>
      </section>
    </section>
  );
};

export default Hero;
