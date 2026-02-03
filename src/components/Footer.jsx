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
    <section className="w-full p-10 flex items-center justify-between">
      <p
        title="Indian Standard Time(IST)"
        className="flex cursor-pointer items-center gap-[0.8] border border-gray-600 px-3 py-1 rounded-lg text-sm shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] hover:animate-pulse transition-pulse duration-300"
      >
        <span className="text-indigo-400 font-semibold">IST - &nbsp;</span>
        {hours}
        <span className="animate-pulse">:</span>
        {minutes} {period.toUpperCase()}
      </p>
      <p className="flex text-sm items-center">
        Copyright © Prateek Lohani - 2026
      </p>
    </section>
  );
};

export default Footer;
