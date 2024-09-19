"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TooltipProps } from "recharts";
import { drivers, teams } from "../lib/mockData";
import { Driver, Team } from "../lib/types";
import { teamColors } from "../lib/utils";

interface CustomPayload {
  name: string;
  points: number;
  team?: string;
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as CustomPayload;
    const { name, points, team } = data;

    return (
      <div className="custom-tooltip bg-white p-2 shadow-md rounded text-gray-600">
        <p className="label font-bold">{`${name}`}</p>
        {team && <p className="intro">{`${team}`}</p>}
        <p className="desc">{`Points: ${points}`}</p>
      </div>
    );
  }
  return null;
};

function RenderCustomBarChart({ data }: { data: Driver[] | Team[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis tick={false} label={{ value: `${data.length === 10 ? "Teams" : "Drivers"}`, position: "insideBottom" }} />
        <YAxis label={{ value: "Points", angle: -90, position: "insideLeft", offset: 10 }} />

        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="points">
          {data.map((_, index) => {
            return <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />;
          })}
        </Bar>
        <defs>
          {data.map((entry: Driver | Team, index) => {
            const colors = teamColors[(entry as Driver).team] || teamColors[(entry as Team).name] || ["#e10600"];
            return (
              <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                {colors.map((color, colorIndex) => (
                  <stop key={`color-${colorIndex}`} offset={`${(colorIndex / (1 + colors.length > 1 ? 1 : 0)) * 100}%`} stopColor={color} />
                ))}
              </linearGradient>
            );
          })}
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default function Standings() {
  const [showDrivers, setShowDrivers] = useState(true);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#e10600]">Standings</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md ${showDrivers ? "bg-[#e10600] text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setShowDrivers(true)}
        >
          Driver Standings
        </button>
        <button
          className={`px-4 py-2 rounded-md ${!showDrivers ? "bg-[#e10600] text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setShowDrivers(false)}
        >
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
        >
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Position</th>
                  <th className="py-3 px-6 text-left">{showDrivers ? "Driver" : "Team"}</th>
                  {showDrivers && <th className="py-3 px-6 text-left">Team</th>}
                  <th className="py-3 px-6 text-left">Points</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {(showDrivers ? drivers : teams).map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left">{item.name}</td>
                    {showDrivers && <td className="py-3 px-6 text-left">{(item as Driver).team}</td>}
                    <td className="py-3 px-6 text-left">{item.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <RenderCustomBarChart data={showDrivers ? drivers : teams} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
