import AvailabilityBadge from "./AvailabilityBadge";

const Hero = () => {
  return (
    <section id="about" className="w-full h-screen py-[5%] px-[7%]">
      <AvailabilityBadge />
      <h2
        className="text-6xl md:text-7xl lg:text-8xl font-bold w-[70%] tracking-tight leading-[1.2]"
      >
        Crafting <br />
        <span className="text-indigo-600 text-shadow-current text-shadow-lg/25">Digital Experiences</span> <br />
        That Make an Impact
      </h2>
      <section className="flex items-center justify-start gap-14 mt-10">
        <p className="text-lg w-[65%] text-gray-300">
          4.5 years of turning complex ideas into clean, high-performance web
          applications. Deep experience with React, Redux, and modern frontend
          architecture, focused on building intuitive interfaces that feel fast,
          polished, and purposeful.
        </p>
        <section className="flex items-center w-[25%] justify-center ">
          <button className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-800 shadow-[0px_6px_30px_0_rgba(99,102,241,.70)] px-8 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
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
