"use client";

import { drivers, teams } from "@/app/lib/mockData";
import type { Driver } from "@/app/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
//import { teamColors } from "../lib/constants";

export default function StandingsTable() {
  const [showDrivers, setShowDrivers] = useState(true);
  return (
    <div id="standings" className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">Standings</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button className={`px-4 py-2 rounded-md ${showDrivers ? "bg-[#e10600] text-white" : "bg-gray-200"}`} onClick={() => setShowDrivers(true)}>
          Driver Standings
        </button>
        <button className={`px-4 py-2 rounded-md ${!showDrivers ? "bg-[#e10600] text-white" : "bg-gray-200"}`} onClick={() => setShowDrivers(false)}>
          Team Standings
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={showDrivers ? "drivers" : "teams"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-end md:flex-row"
        >
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Position</th>
                  <th className="py-3 px-6 text-left">{showDrivers ? "Driver" : "Team"}</th>
                  {showDrivers && <th className="py-3 px-6 text-left">Team</th>}
                  <th className="py-3 px-6 text-left">Points</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light">
                {(showDrivers ? drivers : teams).map((item, index) => (
                  <tr key={item.id} className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 && "bg-gray-50"}`}>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left">{item.name}</td>
                    {showDrivers && <td className="py-3 px-6 text-left">{(item as Driver).team}</td>}
                    <td className="py-3 px-6 text-left">{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
