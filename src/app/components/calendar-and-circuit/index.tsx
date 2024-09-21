"use client";

import type { Race } from "@/app/lib/types";
import { useState } from "react";
import CalendarView from "./CalendarView";
import CircuitView from "./CircuitView";

export default function CalendarAndCircuit({ races }: { races: Race[] }) {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  const handleRaceClick = (race: Race, day: number) => {
    /* If day is different from race.day => its a qualy || practice || sprint 
      show all data from that day, all that matches, if 2 practices matches, array and set a state with array of things to show
    */
    setSelectedRace(race);
    console.log({ race });
    console.log({ day });
  };

  return (
    <div className="p-4" id="calendar">
      <CalendarView races={races} onRaceClick={handleRaceClick} />
      <CircuitView selectedRace={selectedRace} />
    </div>
  );
}
