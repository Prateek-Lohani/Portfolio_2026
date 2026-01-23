const AvailabilityBadge = () => {
  return (
    <section className="scale-[0.7] hover:scale-[0.9] cursor-pointer transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] px-5 py-[8px] absolute top-[8%] left-[76%] flex gap-2 items-center border-1 border-green-600 rounded-full shadow-green-300 shadow-xl/20">
      <div className="bg-green-600 border-2 border-transparent rounded-full size-3.5 ">
        <div className="bg-green-300 rounded-full animate-ping size-full"></div>
      </div>
      <p className="uppercase text-sm">available for work</p>
    </section>
  );
};

export default AvailabilityBadge;
