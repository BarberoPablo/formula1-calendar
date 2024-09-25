"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Flag, Calendar, Trophy, Clock } from "lucide-react";
import Image from "next/image";
import { RaceResultAPI } from "../lib/types";
import { driversInformation } from "../lib/constants";

export default function RaceResults({ raceResult }: { raceResult: RaceResultAPI[] }) {
  const [expandedDriver, setExpandedDriver] = useState<string | null>(null);
  const podium = [raceResult[1], raceResult[0], raceResult[2]];

  return (
    <AnimatePresence>
      <motion.div
        id="race-info"
        key={"race-results"}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-4 overflow-x-auto mb-8 h-[526px] overflow-y-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#e10600]">Race Results</h2>
        <div className="flex justify-center items-end mb-12 space-x-4">
          {podium.map((driver, index) => (
            <motion.div
              key={driver.position}
              className="flex flex-col items-center mx-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-[120px] h-[120px] overflow-hidden rounded-full border-4 border-white shadow-lg mb-2">
                <Image
                  src={driversInformation[driver.Driver.driverId].profileImage}
                  alt={driver.Driver.givenName + "podium profile pic"}
                  width={220}
                  height={220}
                  className="w-[220px] h-[220px] object-cover object-top"
                />
              </div>
              <div
                className={`bg-gradient-to-b ${
                  index === 0
                    ? "from-gray-300 to-gray-500 h-32"
                    : index === 1
                    ? "from-yellow-400 to-yellow-600 h-40"
                    : "from-orange-400 to-orange-600 h-28"
                } w-32 rounded-t-lg shadow-lg flex flex-col items-center justify-center pb-4`}
              >
                <p className="flex justify-center items-center font-bold text-4xl">
                  {driver.position} {index === 1 && <Trophy size={24} />}
                </p>
                <p className="font-semibold">{driver.Driver.givenName + " " + driver.Driver.familyName}</p>
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
                  {driver.FastestLap.rank === "1" && <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">FL</span>}
                  <p className="font-semibold">{driver.points} pts</p>
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
