"use client";

import { useState } from "react";
import StandingsChart from "./StandingsChart";
import StandingsTable from "./StandingsTable";

export default function Standings() {
  const [showDrivers, setShowDrivers] = useState(true);

  return (
    <div className="flex flex-col p-4">
      <h2 className="self-start text-2xl font-bold mb-4 text-[#e10600]">Standings</h2>
      <div className="block md:flex justify-center items-center">
        <StandingsTable showDrivers={showDrivers} setShowDrivers={setShowDrivers} />
        <StandingsChart showDrivers={showDrivers} />
      </div>
    </div>
  );
}
