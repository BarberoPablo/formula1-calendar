"use client";

import { useEffect } from "react";
import { Race } from "../lib/types";
import { useRacesStore } from "../stores/racesStore";

// This component will not render anything, its purpose is to update the store
export default function UpdateRaceStore({ nextRace, allRaces }: { nextRace: Race | null; allRaces: Race[] }) {
  const { setNextRace, setAllRaces } = useRacesStore();

  useEffect(() => {
    if (nextRace) {
      setNextRace(nextRace);
    }
    if (allRaces) {
      setAllRaces(allRaces);
    }
  }, [nextRace, setNextRace, allRaces, setAllRaces]);

  return null;
}
