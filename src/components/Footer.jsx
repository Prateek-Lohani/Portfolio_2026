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

  const hours = parts.find(p => p.type === "hour").value;
  const minutes = parts.find(p => p.type === "minute").value;
  const period = parts.find(p => p.type === "dayPeriod").value;

  return (
    <section className="w-full p-10 flex items-center justify-between">
      <p className="flex items-center gap-0.5">
        <span className="text-indigo-400 font-semibold">IST-</span>
        {hours}
        <span className="animate-pulse">:</span>
        {minutes} {period.toUpperCase()}
      </p>

      <p>Copyright © Prateek Lohani - 2026</p>
    </section>
  );
};

export default Footer;
