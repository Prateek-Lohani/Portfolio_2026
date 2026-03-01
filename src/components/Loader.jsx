import { useState, useEffect, useRef } from "react";

const Loader = () => {
  const [loadingMessage, setLoadingMessage] = useState("Loading Assets");
  const messages = ["Loading Assets", "Almost There", "Assembling Pixels"];
  const messageIndexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      messageIndexRef.current = (messageIndexRef.current + 1) % messages.length;
      setLoadingMessage(messages[messageIndexRef.current]);
    }, 950);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="w-20 h-20 border-4 border-t-indigo-500 border-black rounded-full animate-spin"></div>
      <span className="absolute text-xs top-[58vh]">
        {loadingMessage}
      </span>
    </div>
  );
};

export default Loader;
