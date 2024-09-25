"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Clock, Flag, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { driversInformation } from "../lib/constants";
import { RaceResultAPI } from "../lib/types";

export default function RaceResults({ raceResult, hideRaceResults }: { raceResult: RaceResultAPI[]; hideRaceResults: () => void }) {
  const [expandedDriver, setExpandedDriver] = useState<string | null>(null);
  const podium = [raceResult[1], raceResult[0], raceResult[2]];
  const raceResults = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (raceResults.current) {
      raceResults.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [raceResult]);

  if (raceResult.length === 0) {
    return (
      <div className="flex justify-center items-center h-32 lg:h-[526px]">
        <h2 className="text-3xl font-bold mb-6 text-[#e10600]">No race results available</h2>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={raceResults}
        key={"race-results"}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-4 overflow-x-auto mb-8 lg:h-[526px] overflow-y-auto"
      >
        <div className="flex flex-col items-baseline space-x-2">
          <h2 className="text-3xl font-bold text-[#e10600]">Race Results</h2>
          <button className="flex flex-row justify-center items-center h-full p-1 rounded-xl" onClick={hideRaceResults}>
            <h3 className="text-1xl text-[#e10600]">(Back to circuit details)</h3>
          </button>
        </div>

        <div className="flex justify-center items-end mb-12 sm:space-x-4">
          {podium.map((driver, index) => (
            <motion.div
              key={driver.position}
              className="flex flex-col items-center mx-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] overflow-hidden rounded-full border-4 border-white shadow-lg mb-2">
                <Image
                  src={driversInformation[driver.Driver.driverId].profileImage}
                  alt={driver.Driver.givenName + "podium profile pic"}
                  width={220}
                  height={220}
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-cover object-top"
                />
              </div>
              <div
                className={`bg-gradient-to-b ${
                  index === 0
                    ? "from-gray-300 to-gray-500 h-32"
                    : index === 1
                    ? "from-yellow-400 to-yellow-600 h-40"
                    : "from-orange-400 to-orange-600 h-28"
                } w-full sm:w-32 rounded-t-lg shadow-lg flex flex-col items-center justify-center text-center`}
              >
                <p className="flex justify-center items-center font-bold text-4xl">
                  {driver.position} {index === 1 && <Trophy size={24} />}
                </p>
                <p className="font-semibold mx-1">{driver.Driver.givenName + " " + driver.Driver.familyName}</p>
                <p className="text-sm">{driver.Constructor.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-2">
          {raceResult.map((driver) => (
            <motion.div key={driver.position} className="bg-white shadow-md rounded-lg overflow-hidden" initial={false}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setExpandedDriver(expandedDriver === driver.position ? null : driver.position)}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-lg w-8">{driver.position}</span>
                  <div>
                    <p className="font-semibold">{driver.Driver.givenName + " " + driver.Driver.familyName}</p>
                    <p className="text-sm">{driver.Constructor.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {driver.FastestLap?.rank === "1" && <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">FL</span>}
                  <p className="font-semibold">{driver?.points} pts</p>
                  {expandedDriver === driver.position ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              <AnimatePresence>
                {expandedDriver === driver.position && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 flex items-center space-x-4">
                      <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-white shadow-lg mb-2">
                        <Image
                          src={driversInformation[driver.Driver.driverId].profileImage}
                          alt={driver.Driver.givenName + "podium profile pic"}
                          width={180}
                          height={180}
                          className="w-[180px] h-[180px] object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="flex items-center space-x-2">
                          <Flag size={16} />
                          <span>{driver.Driver?.nationality}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{driver.Driver?.dateOfBirth}</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Clock size={16} />
                          <span>Time Difference: {driver.Time?.time || "Lapped"}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <button className="block md:hidden m-auto" onClick={hideRaceResults}>
            <h3 className="text-1xl text-[#e10600]">(Back to circuit details)</h3>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
