"use client";

import { useState } from "react";
import StandingsTable from "./StandingsTable";
import StandingsChart from "./StandingsChart";
import { drivers, teams } from "@/app/lib/mockData";

export default function Standings() {
  const [showDrivers, setShowDrivers] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <StandingsTable showDrivers={showDrivers} setShowDrivers={setShowDrivers} />
      <StandingsChart data={showDrivers ? drivers : teams} />
    </div>
  );
}
