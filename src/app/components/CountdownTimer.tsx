"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { watch } from "../lib/constants";
import type { Race } from "../lib/types";
import { getNextSession } from "../lib/utils";

function timeLeftForRace(raceDate: Date) {
  const now = new Date();
  const difference = raceDate.getTime() - now.getTime();

  return {
    hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
    mins: Math.floor((difference / 1000 / 60) % 60),
    secs: Math.floor((difference / 1000) % 60),
  };
}

export default function CountdownTimer({ nextRace }: { nextRace: Race }) {
  const [timeLeft, setTimeLeft] = useState({ hrs: 0, mins: 0, secs: 0 });
  const [currentTime, setCurrentTime] = useState({ hrs: 0, mins: 0, secs: 0 });
  const nextSession = getNextSession(nextRace);

  useEffect(() => {
    if (nextSession) {
      const tick = () => {
        const timeLeft = timeLeftForRace(nextSession.date);
        setTimeLeft(timeLeft);

        const now = new Date();
        setCurrentTime({
          hrs: now.getHours() % 12,
          mins: now.getMinutes(),
          secs: now.getSeconds(),
        });
      };

      tick();
      const timer = setInterval(tick, 1000);

      return () => clearInterval(timer);
    }
  }, [nextSession]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center justify-center p-4 space-x-4 w-[300px] h-[120px] px-4 py-3 rounded-lg font-black bg-[#006341] text-white"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-sm mb-4 w-full text-center border-b-[1px] border-gray-400">{nextSession?.event.toUpperCase()}</h2>
        <div className="flex">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center border-r-[1px] border-gray-400 px-2">
              <div className="flex items-center">
                <span className="text-3xl">{value < 10 ? `0${value}` : value}</span>
              </div>
              <span className="text-sm text-gray-300">{unit.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[90px] h-[90px]">
        <a href="https://www.rolex.com/?cmpid=dw_Clocks_201500329" target="_blank" rel="noopener noreferrer">
          <div className="absolute z-0 w-full h-full">
            <Image src={watch.base} width={90} height={90} alt="watch base" />
          </div>
          <div className="absolute z-10 w-full h-full transform origin-center transition-transform duration-1000">
            <Image
              src={watch.hours}
              priority
              width={90}
              height={90}
              alt="watch hours"
              style={{ transform: `rotate(${currentTime.hrs * 30 + currentTime.mins / 2}deg)` }}
            />
          </div>
          <div
            className="absolute z-20 w-full h-full transform origin-center transition-transform duration-1000"
            style={{ transform: `rotate(${currentTime.mins * 6}deg)` }}
          >
            <Image src={watch.minutes} priority width={90} height={90} alt="watch minutes" />
          </div>
          <div
            className="absolute z-30 w-full h-full transform origin-center transition-transform duration-1000"
            style={{ transform: `rotate(${currentTime.secs * 6}deg)` }}
          >
            <Image src={watch.seconds} width={90} height={90} alt="watch seconds" />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
