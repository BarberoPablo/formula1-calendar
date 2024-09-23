"use client";

import { teamColors } from "@/app/lib/constants";
import type { DriversStandingsAPI, TeamsStandingsAPI } from "@/app/lib/types";
import { useRacesStore } from "@/app/stores/racesStore";
import { AnimatePresence, motion } from "framer-motion";

export default function StandingsTable({ showDrivers, setShowDrivers }: { showDrivers: boolean; setShowDrivers: (showDrivers: boolean) => void }) {
  const { driversStandings, teamsStandings } = useRacesStore();

  if (!driversStandings) {
    return null;
  }

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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center md:flex-row"
        >
          <div className="overflow-x-auto mb-8 h-[526px] overflow-y-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 uppercase text-sm border-l-4 border-gray-200">
                  <th className="py-3 px-6 text-left">Pos</th>
                  <th className="py-3 px-6 text-left">{showDrivers ? "Driver" : "Team"}</th>
                  {showDrivers && <th className="py-3 px-6 text-left">Team</th>}
                  <th className="py-3 px-6 text-left">Points</th>
                </tr>
              </thead>
              <tbody className="text-sm">{showDrivers ? DriversTableBody(driversStandings) : TeamsTableBody(teamsStandings)}</tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function DriversTableBody(driversStandings: DriversStandingsAPI[]) {
  return driversStandings.map((driverStanding, index) => (
    <tr
      key={driverStanding.Driver.driverId}
      className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 && "bg-gray-50"} border-l-4`}
      style={{ borderLeftColor: teamColors[driverStanding.Constructors[driverStanding.Constructors.length - 1].constructorId][0] }}
    >
      <td className="h-full py-3 px-6 flex justify-center">{index + 1}</td>
      <td className="h-full py-3 px-6 text-left">{driverStanding.Driver.givenName + " " + driverStanding.Driver.familyName}</td>
      <td className="h-full py-3 px-6 text-left">{driverStanding.Constructors[driverStanding.Constructors.length - 1].name}</td>
      <td className="h-full py-3 px-6 text-left">{driverStanding.points}</td>
    </tr>
  ));
}

function TeamsTableBody(teamsStandings: TeamsStandingsAPI[]) {
  return teamsStandings.map((team, index) => (
    <tr
      key={team.Constructor.constructorId}
      className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 && "bg-gray-50"} border-l-4`}
      style={{ borderLeftColor: teamColors[team.Constructor.constructorId][0] }}
    >
      <td className="h-full py-3 px-6 flex justify-center">{index + 1}</td>
      <td className="h-full py-3 px-6 text-left">{team.Constructor.name}</td>
      <td className="h-full py-3 px-6 text-left">{team.points}</td>
    </tr>
  ));
}
