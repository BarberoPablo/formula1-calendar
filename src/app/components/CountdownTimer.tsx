"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const raceDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, now.getHours() + 4);
      const difference = raceDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#e10600]">Next Race In</h2>
      <div className="flex flex-col items-center">
        <span className="font-bold">Days:Hours:Minutes:Seconds</span>
        <div className="flex">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="flex items-center">
              <span className="text-3xl font-bold text-[#e10600]">{value < 10 ? `0${value}` : value}</span>
              {index !== 3 && <span className="text-3xl font-bold text-[#e10600]">:</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
