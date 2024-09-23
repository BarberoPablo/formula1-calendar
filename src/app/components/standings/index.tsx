"use client";

import { useState } from "react";
import StandingsChart from "./StandingsChart";
import StandingsTable from "./StandingsTable";

export default function Standings() {
  const [showDrivers, setShowDrivers] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <StandingsTable showDrivers={showDrivers} setShowDrivers={setShowDrivers} />
      <StandingsChart showDrivers={showDrivers} />
    </div>
  );
}
