import AvailabilityBadge from "./AvailabilityBadge";

const Hero = () => {
  return (
    <section id="about" className="w-full h-screen pt-[12%] px-[5px] md:px-[4%] md:pt-[5%]">
      <AvailabilityBadge />
      <h2
        className="text-5xl py-10 md:py-0 lg:text-[13.5vh] font-bold md:w-[70%] tracking-tight leading-[1.2]"
      >
        Crafting <br />
        <span className="text-indigo-600 text-shadow-current text-shadow-lg/25">Digital Experiences</span> <br />
        That Make an Impact
      </h2>
      <section className="flex flex-col  md:flex-row md:items-center md:justify-start gap-10 md:gap-14 md:mt-10">
        <p className="text-[15px] md:text-lg md:w-[65%] text-gray-300">
          4.5 years of turning complex ideas into clean, high-performance web
          applications. Deep experience with React, Redux, and modern frontend
          architecture, focused on building intuitive interfaces that feel fast,
          polished, and purposeful.
        </p>
        <section className="flex  items-center md:w-[25%] justify-center p-[10]">
          <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-800 shadow-[0px_6px_30px_0_rgba(99,102,241,.70)] px-8 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                View Resume
              </p>
              <p className="hidden md:block md:absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
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
