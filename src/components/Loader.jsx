const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen relative">
    <div className="w-20 h-20 border-4 border-t-indigo-500 border-black rounded-full animate-spin">
    </div>
    <span className="absolute text-xs top-[58vh]">
      Loading Assets
    </span>
    </div>
  );
};

export default Loader;
