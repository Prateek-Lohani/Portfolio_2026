import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const parts = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).formatToParts(time);

  const hours = parts.find((p) => p.type === "hour").value.padStart(2, "0");
  const minutes = parts.find((p) => p.type === "minute").value.padStart(2, "0");
  const period = parts.find((p) => p.type === "dayPeriod").value;

  return (
    <section className="w-full pb-[80] px-2 sm:p-6 md:p-8 lg:p-10 flex  items-center justify-between gap-4 sm:gap-6">
      <p
        title="Indian Standard Time(IST)"
        className="flex cursor-pointer items-center gap-[0.8] border border-gray-600 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:animate-pulse transition-pulse duration-300 whitespace-nowrap"
      >
        <span className="text-indigo-400 font-semibold">IST - &nbsp;</span>
        {hours}
        <span className="animate-pulse">:</span>
        {minutes} {period.toUpperCase()}
      </p>
      <p className="flex text-xs sm:text-sm text-white items-center hover:cursor-pointer text-center sm:text-right">
        Copyright © Prateek Lohani - 2026
      </p>
    </section>
  );
};

export default Footer;
