"use client";

import { f1Api } from "@/app/api/f1Api";
import { apiYear } from "@/app/lib/constants";
import type { Race, RaceResultAPI } from "@/app/lib/types";
import { useEffect, useState } from "react";
import RaceResults from "../RaceResults";
import CalendarView from "./CalendarView";
import CircuitView from "./CircuitView";

export default function CalendarAndCircuit({ races }: { races: Race[] }) {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [raceResult, setRaceResult] = useState<RaceResultAPI[] | []>([]);
  const [showCircuitDetails, setShowCircuitDetails] = useState(true);

  useEffect(() => {
    const fetchRaceDetails = async () => {
      if (selectedRace?.round) {
        console.log("Fetching data for round: ", selectedRace.round);
        try {
          const result = await f1Api.getRaceDetails(apiYear, selectedRace.round);
          setRaceResult(result);
        } catch (error) {
          console.error("Error fetching race details:", error);
        }
      }
    };

    fetchRaceDetails();
  }, [selectedRace]);

  const handleRaceClick = (race: Race /* trackId: number */) => {
    setSelectedRace(race);
  };

  const handleHideCircuitView = () => {
    setShowCircuitDetails((prev) => !prev);
  };

  const handleHideRaceResults = () => {
    setShowCircuitDetails(true);
    const element = document.getElementById("race-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 flex flex-col">
      <h2 className="self-start text-2xl font-bold mb-4 text-[#e10600]">2024 F1 Schedule & Results</h2>
      <div className="flex flex-col lg:flex-row justify-center">
        <CalendarView races={races} onRaceClick={handleRaceClick} />
        <div id="race-info">
          {showCircuitDetails ? (
            <CircuitView selectedRace={selectedRace} hideCircuit={handleHideCircuitView} />
          ) : (
            <RaceResults raceResult={raceResult} hideRaceResults={handleHideRaceResults} />
          )}
        </div>
      </div>
    </div>
  );
}
