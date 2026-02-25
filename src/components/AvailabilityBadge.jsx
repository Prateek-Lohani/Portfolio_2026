const AvailabilityBadge = () => {
  return (
    <section className="scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:hover:scale-[0.8] animate-bounce cursor-pointer transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] px-4 sm:px-5 py-[6px] sm:py-[8px] absolute top-[5%] sm:top-[8%] right-[5%] sm:right-auto sm:left-[76%] flex gap-2 items-center border-1 border-green-600 rounded-full shadow-green-300 shadow-xl/20">
      <div className="bg-green-600 border-2 border-transparent rounded-full size-3 sm:size-3.5 ">
        <div className="bg-green-300 rounded-full animate-ping size-full"></div>
      </div>
      <p className="uppercase text-xs sm:text-sm">available for work</p>
    </section>
  );
};

export default AvailabilityBadge;
