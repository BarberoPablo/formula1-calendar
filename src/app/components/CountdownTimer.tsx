"use client";

import { useEffect, useState } from "react";
import { useRacesStore } from "../stores/racesStore";

function timeLeftForRace(raceDate: Date) {
  const now = new Date();
  const difference = raceDate.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    mins: Math.floor((difference / 1000 / 60) % 60),
    secs: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const { nextRace, fetchNextRace } = useRacesStore();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    if (!nextRace) {
      fetchNextRace();
    }
  }, [nextRace, fetchNextRace]);

  useEffect(() => {
    if (nextRace) {
      const raceDate = new Date(`${nextRace.date}T${nextRace.time}`);
      const tick = () => {
        const timeLeft = timeLeftForRace(raceDate);
        setTimeLeft(timeLeft);
      };

      tick();
      const timer = setInterval(tick, 1000);

      return () => clearInterval(timer);
    }
  }, [nextRace]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#e10600]">Next Race In</h2>
      <div className="flex flex-col items-center">
        <div className="flex">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-[#e10600]">{value < 10 ? `0${value}` : value}</span>
                {index !== 3 && <span className="text-3xl font-bold text-[#e10600] mx-1">:</span>}
              </div>
              <span className="text-sm text-gray-500">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
