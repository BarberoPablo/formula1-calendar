"use client";

import type { Race } from "@/app/lib/types";
import { useRacesStore } from "@/app/stores/racesStore";
import { useState } from "react";
import CalendarView from "./CalendarView";
import CircuitView from "./CircuitView";

export default function CalendarAndCircuit({ races }: { races: Race[] }) {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const { setCalendarSelectedDate } = useRacesStore();

  const handleRaceClick = (race: Race, date: Date) => {
    /* If day is different from race.day => its a qualy || practice || sprint 
      show all data from that day, all that matches, if 2 practices matches, array and set a state with array of things to show
    */
    /* Separate and use Zustand to comunicate CalendarView with CircuitView */
    setSelectedRace(race);
    setCalendarSelectedDate(date);
  };

  return (
    <div className="p-4">
      <CalendarView races={races} onRaceClick={handleRaceClick} />
      <CircuitView selectedRace={selectedRace} />
    </div>
  );
}
