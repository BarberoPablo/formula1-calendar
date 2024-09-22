"use client";

import { useEffect } from "react";
import { Race } from "../lib/types";
import { useRacesStore } from "../stores/racesStore";

// This component will not render anything, its purpose is to update the store
export default function UpdateRaceStore({ nextRace }: { nextRace: Race | null }) {
  const { setNextRace } = useRacesStore();

  useEffect(() => {
    if (nextRace) {
      setNextRace(nextRace);
    }
  }, [nextRace, setNextRace]);

  return null;
}
